export type Service = {
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  images: string[];
};

export const services: Record<string, Service> = {
  'back-patches': {
    name: 'Back Patches',
    description: 'Large, eye-catching patches perfect for the back of jackets and vests.',
    longDescription: 'Our back patches are designed to make a bold statement. Perfect for motorcycle clubs, bands, and organizations, these large patches are crafted with precision to ensure durability and stunning visual impact.',
    features: ['Large size options (up to 14 inches)', 'Premium embroidery threads', 'Multiple backing options', 'Custom shapes available', 'Vibrant color matching'],
    images: ['/2.webp', '/3.webp', '/4 (1).webp', '/5.webp'],
  },
  'biker-patches': {
    name: 'Biker Patches',
    description: 'Rugged and durable patches designed for motorcycle enthusiasts.',
    longDescription: 'Our biker patches are built to withstand the elements while looking fantastic.',
    features: ['Weather-resistant materials', 'Club-ready designs', 'Multiple size options', 'Custom rocker shapes', 'Iron-on or sew-on backing'],
    images: ['/2.webp', '/6.webp', '/7.webp', '/8.webp'],
  },
  'cotton-patches': {
    name: 'Cotton Patches',
    description: 'Soft and comfortable patches made with premium cotton materials.',
    longDescription: 'Cotton patches offer a classic, soft feel that works great on casual wear.',
    features: ['Soft cotton twill', 'Comfortable on skin', 'Great for casual wear', 'Washable and durable', 'Eco-friendly option'],
    images: ['/4 (2).webp', '/3.webp', '/5.webp', '/7.webp'],
  },
  'embroidered-patches': {
    name: 'Embroidered Patches',
    description: 'Classic embroidered patches with intricate designs and vibrant colors.',
    longDescription: 'Embroidered patches are the gold standard for quality and durability.',
    features: ['High thread count', 'Precise detailing', 'Vibrant colors', 'Multiple coverage options', 'Premium quality threads'],
    images: ['/4 (2).webp', '/2.webp', '/4 (1).webp', '/6.webp'],
  },
  'iron-patches': {
    name: 'Iron Patches',
    description: 'Easy to apply iron-on patches for quick and secure attachment.',
    longDescription: 'Iron-on patches make application simple.',
    features: ['Heat-seal backing', 'Easy application', 'Strong adhesion', 'No sewing required', 'Works on most fabrics'],
    images: ['/3.webp', '/5.webp', '/7.webp', '/4 (2).webp'],
  },
  'jacket-patches': {
    name: 'Jacket Patches',
    description: 'Custom patches designed specifically for jackets and outerwear.',
    longDescription: 'Jacket patches are designed to withstand outdoor conditions.',
    features: ['Durable construction', 'Weather resistant', 'Multiple sizes', 'Custom placement options', 'Works with all jacket types'],
    images: ['/4 (1).webp', '/6.webp', '/8.webp', '/2.webp'],
  },
  'military-patches': {
    name: 'Military Patches',
    description: 'Authentic military-style patches with precision and respect.',
    longDescription: 'Our military patches honor service and tradition.',
    features: ['Authentic styling', 'Regulation compliant', 'Velcro backing option', 'Subdued color options', 'High durability'],
    images: ['/5.webp', '/7.webp', '/4 (2).webp', '/3.webp'],
  },
  'morale-patches': {
    name: 'Morale Patches',
    description: 'Fun and expressive patches to boost team spirit and morale.',
    longDescription: 'Morale patches add personality and team spirit.',
    features: ['Fun designs', 'Velcro backing', 'UV resistant', 'Compact sizes', 'Easy to swap'],
    images: ['/6.webp', '/8.webp', '/2.webp', '/4 (1).webp'],
  },
  'custom-keychain': {
    name: 'Custom Keychain',
    description: 'Unique embroidered keychains for promotional items and gifts.',
    longDescription: 'Custom embroidered keychains make great promotional items.',
    features: ['Durable construction', 'Metal ring included', 'Custom shapes', 'Promotional ready', 'Compact design'],
    images: ['/7.webp', '/4 (2).webp', '/5.webp', '/3.webp'],
  },
  'sew-on-patches': {
    name: 'Sew On Patches',
    description: 'Traditional sew-on patches for permanent and secure attachment.',
    longDescription: 'Sew-on patches offer the most secure and permanent attachment.',
    features: ['Permanent attachment', 'Clean edges', 'All fabric types', 'Most durable option', 'Traditional styling'],
    images: ['/8.webp', '/2.webp', '/6.webp', '/4 (1).webp'],
  },
  'velcro-patches': {
    name: 'Velcro Patches',
    description: 'Interchangeable velcro patches for tactical and versatile use.',
    longDescription: 'Velcro patches allow for easy swapping.',
    features: ['Hook and loop backing', 'Easy to swap', 'Tactical ready', 'Strong attachment', 'Reusable'],
    images: ['/4 (2).webp', '/3.webp', '/7.webp', '/5.webp'],
  },
  'airsoft-patches': {
    name: 'Airsoft Patches',
    description: 'Tactical patches for airsoft teams and enthusiasts.',
    longDescription: 'Airsoft patches help identify teams.',
    features: ['Team identification', 'Velcro backing', 'Subdued options', 'Durable materials', 'Custom team designs'],
    images: ['/2.webp', '/4 (1).webp', '/8.webp', '/4 (2).webp'],
  },
  'woven-labels': {
    name: 'Woven Labels',
    description: 'Fine-detailed woven labels for professional branding.',
    longDescription: 'Woven labels offer incredibly fine detail.',
    features: ['Fine detail', 'Smooth texture', 'Small text capable', 'Professional finish', 'Thin profile'],
    images: ['/3.webp', '/5.webp', '/6.webp', '/7.webp'],
  },
  'pvc-rubber-patches': {
    name: 'PVC Rubber Patches',
    description: 'Durable rubber patches that are waterproof and long-lasting.',
    longDescription: 'PVC rubber patches are incredibly durable.',
    features: ['100% waterproof', 'UV resistant', '3D effects possible', 'Easy to clean', 'Extremely durable'],
    images: ['/4 (1).webp', '/6.webp', '/8.webp', '/2.webp'],
  },
  'logo-patches': {
    name: 'Logo Patches',
    description: 'Custom logo patches for brands and businesses.',
    longDescription: 'Logo patches bring your brand to life.',
    features: ['Accurate color matching', 'Brand consistency', 'Multiple sizes', 'Various backing options', 'Bulk discounts'],
    images: ['/5.webp', '/7.webp', '/4 (2).webp', '/3.webp'],
  },
  'custom-caps-hats': {
    name: 'Custom Caps Hats',
    description: 'Custom embroidered caps and hats for branding and style.',
    longDescription: 'Custom caps and hats with embroidered designs.',
    features: ['Various cap styles', 'Front and side embroidery', 'Adjustable sizing', 'Quality construction', 'Bulk orders welcome'],
    images: ['/6.webp', '/8.webp', '/2.webp', '/4 (1).webp'],
  },
  'custom-chenille-patches': {
    name: 'Custom Chenille Patches',
    description: 'Soft, fuzzy chenille patches for letterman jackets and more.',
    longDescription: 'Chenille patches have that classic letterman jacket look.',
    features: ['Soft fuzzy texture', 'Classic letterman style', 'Raised 3D effect', 'Custom shapes', 'Premium quality'],
    images: ['/7.webp', '/4 (2).webp', '/5.webp', '/3.webp'],
  },
  'police-patches': {
    name: 'Police Patches',
    description: 'Professional police and law enforcement patches.',
    longDescription: 'Our police patches are crafted with respect.',
    features: ['Department standards', 'Durable materials', 'Accurate reproduction', 'Secure ordering', 'Multiple backing options'],
    images: ['/8.webp', '/2.webp', '/6.webp', '/4 (1).webp'],
  },
};

export const serviceSlugs = Object.keys(services);

/** Flat list used by the /services index page and the sitemap. */
export const serviceList = serviceSlugs.map((slug) => ({
  slug,
  name: services[slug].name,
  description: services[slug].description,
  image: services[slug].images[0],
}));

/**
 * Keyword-friendly heading/title for a service. A few names ("Custom Keychain")
 * already carry the prefix, so only add it when it is missing.
 */
export const serviceTitle = (name: string) =>
  name.startsWith('Custom') ? name : `Custom ${name}`;
