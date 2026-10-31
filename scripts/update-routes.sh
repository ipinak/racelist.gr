#!/bin/bash

# Simple bash script to update nuxt.config.ts routes using jq exclusively
# Requires jq to be installed

echo "🔍 Updating routes from races.json..."

# Navigate to the project directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"
cd "$PROJECT_DIR"

# Define file paths
RACES_FILE="racelist-fe/public/races.json"
NUXT_CONFIG="racelist-fe/nuxt.config.ts"

# Check if jq is available
if ! command -v jq &> /dev/null; then
    echo "❌ Error: jq is required but not installed. Please install jq first."
    echo "   brew install jq (on macOS)"
    exit 1
fi

# Extract all race slugs using jq
echo "📄 Extracting slugs using jq..."
NEW_SLUGS=$(jq -r '.[] | select(.Slug) | .Slug' "$RACES_FILE" | sed 's|^/||' | sed 's|/$||' | sort | uniq)

# Extract existing agwnas routes using grep and clean them up
EXISTING_ROUTES=$(grep -o "'/agwnas/[^']*'" "$NUXT_CONFIG" | sed "s|'/agwnas/||" | sed "s|'||g" | sed 's|/$||' | sort | uniq)

# Find missing routes using comm (set difference)
TEMP_NEW=$(mktemp)
TEMP_EXISTING=$(mktemp)

echo "$NEW_SLUGS" > "$TEMP_NEW"
echo "$EXISTING_ROUTES" > "$TEMP_EXISTING"

MISSING_ROUTES=$(comm -23 "$TEMP_NEW" "$TEMP_EXISTING")

# Clean up temp files
rm "$TEMP_NEW" "$TEMP_EXISTING"

# Check if there are any missing routes
if [ -z "$MISSING_ROUTES" ]; then
    echo "✅ No new routes to add. All races are already configured."
    exit 0
fi

echo "📋 Found $(echo "$MISSING_ROUTES" | wc -l | tr -d ' ') new routes to add:"
echo "$MISSING_ROUTES" | sed 's/^/   - /'

# Create backup
cp "$NUXT_CONFIG" "$NUXT_CONFIG.backup"

# Find the last agwnas route line to insert after
LAST_RACE_LINE=$(grep -n "'/agwnas/" "$NUXT_CONFIG" | tail -1 | cut -d: -f1)

if [ -z "$LAST_RACE_LINE" ]; then
    echo "❌ Error: Could not find existing agwnas routes in $NUXT_CONFIG"
    rm "$NUXT_CONFIG.backup"
    exit 1
fi

# Build the new routes string
NEW_ROUTE_LINES=""
COUNT=0
while IFS= read -r slug; do
    if [ -n "$slug" ]; then
        NEW_ROUTE_LINES="${NEW_ROUTE_LINES}        '/agwnas/${slug}/',\n"
        COUNT=$((COUNT + 1))
    fi
done <<< "$MISSING_ROUTES"

# Insert the new routes after the last agwnas route
if [ "$COUNT" -gt 0 ]; then
    # Use awk to insert the new lines at the correct position
    awk -v line="$LAST_RACE_LINE" -v new_routes="$NEW_ROUTE_LINES" '
        NR == line { print; printf new_routes; next }
        { print }
    ' "$NUXT_CONFIG" > "${NUXT_CONFIG}.tmp" && mv "${NUXT_CONFIG}.tmp" "$NUXT_CONFIG"
    
    echo "✅ Successfully added $COUNT new routes to $NUXT_CONFIG"
    echo "💾 Backup saved as $NUXT_CONFIG.backup"
else
    echo "❌ No valid routes to add"
    rm "$NUXT_CONFIG.backup"
fi

echo "🏁 Done!"
