import { SITE_NAME, SITE_URL, CONTACT, SOCIAL_PROFILES, absoluteUrl } from './site';
import { faqs } from './faqs';
import type { Service } from './services';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: absoluteUrl('/logo-512x512.png'),
    width: 512,
    height: 512,
  },
  image: absoluteUrl('/og-image-1200x630.png'),
  description:
    'Custom embroidered patches, PVC patches, woven labels and custom caps for businesses, clubs, military and personal projects.',
  email: CONTACT.email,
  telephone: CONTACT.phone,
  sameAs: SOCIAL_PROFILES,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: CONTACT.email,
      telephone: CONTACT.phone,
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export function faqPageSchema(entries: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: { '@type': 'Answer', text: entry.answer },
    })),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema(slug: string, service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.longDescription,
    url: absoluteUrl(`/services/${slug}`),
    image: service.images.map((image) => absoluteUrl(image)),
    serviceType: service.name,
    areaServed: 'Worldwide',
    provider: { '@id': `${SITE_URL}/#organization` },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      url: absoluteUrl('/free-instant-quote'),
    },
  };
}

export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}
