import { useEffect } from 'react';

/**
 * SEO Component
 * Dynamically manages document head meta tags for client-side routing.
 * Updates title, meta description, OG tags, and canonical URL.
 *
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.canonical - Canonical URL
 * @param {string} props.ogImage - Open Graph image URL
 * @param {string} props.type - OG type (website, article, etc.)
 */
const SEO = ({
  title = 'Krishna Sathyan | Software Developer Portfolio',
  description = 'Krishna Sathyan - Software Developer specializing in React, Node.js, and the MERN stack. Botany graduate turned web developer.',
  canonical = 'https://krishnasathyan.dev/',
  ogImage = 'https://krishnasathyan.dev/og-image.jpg',
  type = 'website',
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update or create meta tag
    const updateMeta = (selector, attribute, value, name) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(name?.startsWith('property') ? 'property' : 'name', name?.split('=')[1]);
        document.head.appendChild(el);
      }
      el.setAttribute(attribute, value);
    };

    // Standard meta tags
    updateMeta('meta[name="description"]', 'content', description, 'name=description');

    // Open Graph tags
    updateMeta('meta[property="og:title"]', 'content', title, 'property=og:title');
    updateMeta('meta[property="og:description"]', 'content', description, 'property=og:description');
    updateMeta('meta[property="og:image"]', 'content', ogImage, 'property=og:image');
    updateMeta('meta[property="og:type"]', 'content', type, 'property=og:type');
    updateMeta('meta[property="og:url"]', 'content', canonical, 'property=og:url');

    // Twitter Card tags
    updateMeta('meta[name="twitter:title"]', 'content', title, 'name=twitter:title');
    updateMeta('meta[name="twitter:description"]', 'content', description, 'name=twitter:description');
    updateMeta('meta[name="twitter:image"]', 'content', ogImage, 'name=twitter:image');

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
  }, [title, description, canonical, ogImage, type]);

  return null;
};

export default SEO;