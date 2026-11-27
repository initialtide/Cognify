export const SITE_METADATA = {
  brandName: 'Cognify',
  organizationName: 'Initialtide',
  organizationDisplayName: 'Initialtide (Cognify)',
  legalName: 'Initialtide Education Project',
  baseUrl: 'https://initialtide.github.io/Cognify',
  originUrl: 'https://initialtide.github.io',
  githubOrgUrl: 'https://github.com/initialtide',
  githubRepoUrl: 'https://github.com/initialtide/Cognify',
  ogImageUrl: 'https://initialtide.github.io/Cognify/og-image.png',
  logoUrl: 'https://initialtide.github.io/Cognify/apple-icon.png',
  tagline: 'Free GCSE, IGCSE & A-Level Interactive Revision Platform',
  shortDescription:
    'Cognify is a free, open-access GCSE, IGCSE, and A-Level interactive revision platform with video lessons, structured revision notes, exam-style practice, flashcards, official Cambridge past papers, and an open Curriculum API.',
  keywords: [
    'Cognify',
    'GCSE revision',
    'IGCSE revision',
    'A-Level revision',
    'interactive video lessons',
    'Cambridge past papers',
    'revision notes',
    'exam practice',
    'curriculum API',
    'MCP server',
  ],
  knowsAbout: [
    'GCSE revision',
    'IGCSE revision',
    'A-Level revision',
    'Cambridge IGCSE past papers',
    'Interactive science and maths lessons',
    'AQA Edexcel OCR CIE curriculum',
    'Curriculum API',
  ],
  contact: {
    email: 'support@cognify.initialtide.org',
    securityEmail: 'privacy@cognify.initialtide.org',
    telephone: '+44-20-7946-0192',
    contactType: 'customer support',
    hours: 'Monday–Friday, 09:00–17:00 GMT/BST (GitHub Issues monitored daily)',
    responseTime: 'Within 2 business days for email or GitHub issues',
  },
  address: {
    streetAddress: '71-75 Shelton Street, Covent Garden',
    addressLocality: 'London',
    addressRegion: 'Greater London',
    postalCode: 'WC2H 9JQ',
    addressCountry: 'GB',
    formatted: '71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom',
  },
  lastUpdated: '2026-11-27',
} as const;

export function buildCanonicalUrl(routePath = '/'): string {
  const clean = routePath.startsWith('/') ? routePath : `/${routePath}`;
  if (clean === '/') {
    return `${SITE_METADATA.baseUrl}/`;
  }
  return `${SITE_METADATA.baseUrl}${clean.replace(/\/+$/, '')}`;
}
