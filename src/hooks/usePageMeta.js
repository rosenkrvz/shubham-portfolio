import { useEffect } from 'react';

const BASE_URL = 'https://portfolio-eight-delta-c5m41m049y.vercel.app';
const DEFAULT_TITLE = 'Shubham Sharma — AI Systems Architect & Applied AI Engineer';
const DEFAULT_DESCRIPTION = 'Applied AI & Data Science at IIT Jodhpur. High-performance machine learning, neural architectures, and distributed systems.';

/**
 * Custom hook to dynamically manage page title, meta descriptions, canonical URLs, and OG tags.
 * Ensures every route has unique, descriptive SEO and social preview properties.
 */
export function usePageMeta({
  title,
  description,
  path = '',
  image = '/assets/og-image.jpg',
}) {
  useEffect(() => {
    // 1. Title
    const formattedTitle = title ? `${title} — Shubham Sharma` : DEFAULT_TITLE;
    document.title = formattedTitle;

    // 2. Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || DEFAULT_DESCRIPTION);
    }

    // 3. Canonical link
    const canonical = document.getElementById('canonical-link');
    const fullUrl = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    }

    // 4. Open Graph Tags
    const ogTitle = document.getElementById('og-title');
    if (ogTitle) ogTitle.setAttribute('content', formattedTitle);

    const ogDesc = document.getElementById('og-description');
    if (ogDesc) ogDesc.setAttribute('content', description || DEFAULT_DESCRIPTION);

    const ogUrl = document.getElementById('og-url');
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);

    const ogImage = document.getElementById('og-image');
    if (ogImage) {
      const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;
      ogImage.setAttribute('content', fullImageUrl);
    }

    // 5. Twitter Card Tags
    const twTitle = document.getElementById('tw-title');
    if (twTitle) twTitle.setAttribute('content', formattedTitle);

    const twDesc = document.getElementById('tw-description');
    if (twDesc) twDesc.setAttribute('content', description || DEFAULT_DESCRIPTION);

    const twImage = document.getElementById('tw-image');
    if (twImage) {
      const fullImageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;
      twImage.setAttribute('content', fullImageUrl);
    }
  }, [title, description, path, image]);
}
