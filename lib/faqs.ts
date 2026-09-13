export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: 'What are custom patches?',
    answer:
      'Custom patches are personalized patches made from your logo, artwork, text, or original design. They can be produced in different shapes, sizes, colors, and finishes to suit businesses, teams, organizations, brands, events, and personal projects.',
  },
  {
    question: 'How can I order custom patches online?',
    answer:
      'You can order custom patches online by submitting your artwork or design idea, selecting your preferred size, shape, quantity, and other requirements, and reviewing a digital proof before production. Once approved, your patches move into production and are shipped to you.',
  },
  {
    question: 'Can I order custom patches in bulk?',
    answer:
      'Yes. Bulk custom patches are available for businesses, sports teams, schools, organizations, events, brands, and other large orders. Ordering in larger quantities can also provide better per-patch pricing depending on the order specifications.',
  },
  {
    question: 'Do you have a minimum order for custom patches?',
    answer:
      'No. We have no minimum order quantity, so you can order exactly what you need — whether you require a single patch or a large batch. This makes custom patch orders suitable for both individual and business customers.',
  },
  {
    question: 'Can I get custom patches made from my own design?',
    answer:
      'Yes. You can provide your logo, artwork, image, text, or design concept, and we will prepare it for patch production. A digital proof also lets you review the final design before manufacturing begins.',
  },
  {
    question: 'What file should I submit for a custom patch design?',
    answer:
      'High-resolution files such as PNG, JPG, PDF, AI, EPS, or other vector formats are generally helpful for producing clean patch artwork. If your artwork is not production-ready, our free artwork assistance service can help prepare it.',
  },
  {
    question: 'Can you help me create a custom patch if I only have an idea?',
    answer:
      'Yes. You can provide your basic idea, logo, text, colors, or reference artwork, and our design team can help turn it into a production-ready patch design.',
  },
  {
    question: 'Will I receive a proof before my patches are made?',
    answer:
      'Yes. We send a free digital proof with every order. The proof allows you to review the design, colors, size, shape, and overall appearance before production starts.',
  },
  {
    question: 'How much do custom patches cost?',
    answer:
      'The cost of custom patches depends on factors such as size, quantity, design complexity, materials, backing, and production requirements. Bulk custom patch orders may have a lower per-unit cost than smaller quantities.',
  },
  {
    question: 'Are custom patches available in different sizes and shapes?',
    answer:
      'Yes. Custom patches can be produced in different sizes and shapes to match your artwork and intended application. You can choose a standard shape or request a shape that follows your design.',
  },
  {
    question: 'How long does it take to make custom patches?',
    answer:
      'Production time depends on the order quantity, design complexity, materials, and current production schedule. Your expected turnaround is confirmed when you place your custom patch order.',
  },
  {
    question: 'Can I order custom patches for businesses and brands?',
    answer:
      'Yes. Custom patches are a practical option for businesses, fashion brands, promotional campaigns, uniforms, merchandise, and branded apparel. You can have patches produced to match your logo and brand identity.',
  },
  {
    question: 'Can sports teams order custom patches?',
    answer:
      'Yes. Teams can order personalized patches featuring team names, logos, mascots, player details, or other artwork. They can be used on uniforms, jackets, bags, team merchandise, and other apparel.',
  },
  {
    question: 'Are custom patches suitable for uniforms and workwear?',
    answer:
      'Yes. Custom patches can be used to display company logos, employee roles, department names, organization details, or other branding on uniforms and workwear.',
  },
  {
    question: 'Can I order custom patches for events or special occasions?',
    answer:
      'Yes. Custom patches can be created for events, clubs, reunions, campaigns, celebrations, and other special occasions. They can be designed around a specific theme, logo, message, or event artwork.',
  },
  {
    question: 'What backing options are available for custom patches?',
    answer:
      'Depending on the patch design and intended use, different backing options are available. The right choice depends on whether you want the patch to be sewn, attached temporarily, or applied using another method.',
  },
  {
    question: 'How do I attach custom patches to clothing?',
    answer:
      'Custom patches can typically be attached using methods such as sewing, ironing, or other suitable backing options. The best method depends on the patch backing and the type of clothing or material.',
  },
  {
    question: 'Are custom patches durable?',
    answer:
      'Quality custom patches are designed to withstand regular use when produced with suitable materials and proper craftsmanship. Durability can vary depending on the patch construction, backing, application method, and how the item is maintained.',
  },
  {
    question: 'Can I order custom patches with text or lettering?',
    answer:
      'Yes. Custom patches can include names, words, numbers, slogans, dates, or other lettering. For small patches, font size and design complexity should be considered to ensure the text remains clear.',
  },
  {
    question: 'Can custom patches include logos and detailed artwork?',
    answer:
      'Yes. Logos, illustrations, symbols, and other artwork can be incorporated into a custom patch design. Very fine details may need to be adjusted to ensure they reproduce clearly at the selected patch size.',
  },
  {
    question: 'Do you offer custom patches for small orders?',
    answer:
      'Yes. We accept small quantities, so you can order custom patches for personal projects, small businesses, teams, clubs, or limited events without needing a large production run.',
  },
  {
    question: 'Can I order custom patches online in the USA?',
    answer:
      'Yes. Customers across the USA can submit their artwork and order custom patches online. The process typically includes design submission, proof approval, production, and delivery.',
  },
  {
    question: 'Do you offer shipping across the USA?',
    answer:
      'Yes. We provide free nationwide shipping, so custom patch orders can be delivered to customers across the United States. Shipping times and available delivery options may vary depending on the destination and order.',
  },
  {
    question: 'What makes your custom patches different?',
    answer:
      'Our focus is on making the ordering process simple while providing quality production, artwork assistance, digital proofs, competitive pricing, and customer support throughout the order process.',
  },
  {
    question: 'Can I get a quote before ordering custom patches?',
    answer:
      'Yes. You can request a quote by providing details such as the patch design, size, quantity, shape, and any specific requirements. This allows you to understand the expected cost before placing your order.',
  },
  {
    question: 'How do I get started with a custom patch order?',
    answer:
      'Start by submitting your artwork or design idea and providing your preferred size, shape, quantity, and other requirements. You can then review your proof, approve the design, and move forward with production.',
  },
];

/**
 * The eight questions shown on the home page — what people ask before they order:
 * what a patch is, how to order, quantity at both ends, price, turnaround, artwork
 * and proofing. The full list above still backs the deeper pages.
 */
const homeFaqQuestions = [
  'What are custom patches?',
  'How can I order custom patches online?',
  'Do you have a minimum order for custom patches?',
  'Can I order custom patches in bulk?',
  'How much do custom patches cost?',
  'How long does it take to make custom patches?',
  'What file should I submit for a custom patch design?',
  'Will I receive a proof before my patches are made?',
];

export const homeFaqs: Faq[] = homeFaqQuestions.map((question) => {
  const faq = faqs.find((item) => item.question === question);
  // Fails the build rather than silently dropping a card if a question is reworded.
  if (!faq) throw new Error(`Home page FAQ not found in faqs: ${question}`);
  return faq;
});
