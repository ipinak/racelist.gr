/**
 * Utility functions for handling location data
 */

/**
 * Parse a location string into area and city components
 * @param {string} location - The location string (e.g., "Γαλάτσι, Αττικής" or "Δελφοί")
 * @returns {Object} Object with area and city properties
 */
export function parseLocation(location) {
  if (!location || typeof location !== 'string') {
    return { area: '', city: '', full: '' };
  }

  const trimmed = location.trim();
  
  // Check if location contains a comma (area, city format)
  if (trimmed.includes(',')) {
    const parts = trimmed.split(',').map(part => part.trim());
    return {
      area: parts[0] || '',
      city: parts[1] || '',
      full: trimmed
    };
  }
  
  // Single location - treat as area
  return {
    area: trimmed,
    city: '',
    full: trimmed
  };
}

/**
 * Get all unique areas from a list of races
 * @param {Array} races - Array of race objects
 * @returns {Array} Sorted array of unique areas
 */
export function getUniqueAreas(races) {
  if (!Array.isArray(races)) return [];
  
  const areas = races
    .map(race => parseLocation(race.Location).area)
    .filter(area => area && area.trim() !== '')
    .sort();
    
  return [...new Set(areas)];
}

/**
 * Get all unique cities from a list of races
 * @param {Array} races - Array of race objects
 * @returns {Array} Sorted array of unique cities
 */
export function getUniqueCities(races) {
  if (!Array.isArray(races)) return [];
  
  const cities = races
    .map(race => parseLocation(race.Location).city)
    .filter(city => city && city.trim() !== '')
    .sort();
    
  return [...new Set(cities)];
}

/**
 * Get all unique full locations from a list of races
 * @param {Array} races - Array of race objects
 * @returns {Array} Sorted array of unique full locations
 */
export function getUniqueLocations(races) {
  if (!Array.isArray(races)) return [];
  
  const locations = races
    .map(race => race.Location)
    .filter(location => location && location.trim() !== '')
    .sort();
    
  return [...new Set(locations)];
}

/**
 * Format location for display
 * @param {string} location - The location string
 * @param {Object} options - Formatting options
 * @returns {string} Formatted location string
 */
export function formatLocation(location, options = {}) {
  const { showAreaOnly = false, showCityOnly = false } = options;
  const parsed = parseLocation(location);
  
  if (showAreaOnly) {
    return parsed.area;
  }
  
  if (showCityOnly) {
    return parsed.city;
  }
  
  return parsed.full;
}