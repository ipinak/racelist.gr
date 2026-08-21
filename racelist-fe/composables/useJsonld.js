/**
 * Injects one or more JSON-LD <script> blocks into the page head.
 *
 * Usage:
 *   useJsonld({ '@context': 'https://schema.org', '@type': 'Article', ... })
 *   useJsonld([eventSchema, breadcrumbSchema])
 *
 * Accepts a single schema.org object or an array of them (each is rendered
 * as its own <script type="application/ld+json"> tag).
 */
export function useJsonld(schema) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  useHead({
    script: schemas.map((entry) => ({
      type: 'application/ld+json',
      innerHTML: JSON.stringify(entry),
    })),
  });
}

/**
 * Builds a BreadcrumbList schema.org object from an ordered list of crumbs.
 *
 * @param {{ name: string, url: string }[]} crumbs - ordered from root to current page
 */
export function buildBreadcrumbJsonld(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}
