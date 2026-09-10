import { SITE_NAME, CONTACT } from './site';

/**
 * Editable details for the Terms and Privacy pages.
 *
 * TODO (site owner): replace the placeholders below with your registered
 * business details before relying on these pages legally. Everything else on
 * the two pages is written to match what the site actually does.
 */
export const LEGAL = {
  /** Registered/trading entity name. */
  entity: SITE_NAME,
  /** Registered business address. Leave empty to hide the address line. */
  address: 'c-5 Wilma Street, Amarillo City, Texas', 
  /** Whose law governs the terms, e.g. "the State of Texas, USA". */
  governingLaw: 'the State of Texas, USA',
  /** Shown as "Last updated" on both pages. */
  lastUpdated: '10 September 2026',
};

export type LegalSection = { heading: string; body: string[] };

export const termsSections: LegalSection[] = [
  {
    heading: 'About these terms',
    body: [
      `These terms apply to every quote, order and purchase made through ${LEGAL.entity} ("we", "us"), whether placed through this website, by email, by phone or over WhatsApp. Placing an order means you accept them.`,
      `We may update these terms from time to time. The version published on this page at the moment you place an order is the version that applies to that order.`,
    ],
  },
  {
    heading: 'Quotes and orders',
    body: [
      `A quote is an estimate based on the specification you give us — patch type, size, quantity, embroidery coverage, backing and border. If any of those change, the price changes with them.`,
      `Quotes are valid for 30 days unless we state otherwise. Material costs move, and a quote older than that may need to be reissued.`,
      `An order is confirmed when you approve the digital proof and payment terms are agreed. Until that point, nothing is in production and nothing is charged.`,
      `Our standard minimum order is 25 pieces. Smaller runs are sometimes possible by arrangement and are quoted individually.`,
    ],
  },
  {
    heading: 'Artwork, proofs and approval',
    body: [
      `You are responsible for having the right to use the artwork you send us. By submitting a design you confirm that you own it, or that you have permission from the owner to have it reproduced. We do not check ownership of logos, emblems, insignia or trademarks, and we are not liable for claims arising from artwork supplied to us.`,
      `We reserve the right to decline artwork we believe infringes a third party's rights, or that is unlawful or offensive.`,
      `Before production we send a digital proof showing the design at size with thread colours marked. Approving that proof is your confirmation that the spelling, dimensions, colours, backing and border are correct.`,
      `Once a proof is approved and production begins, the order is non-refundable. This is because every patch is manufactured to your specification and cannot be resold. Errors that appear on the approved proof are not grounds for a remake at our cost.`,
    ],
  },
  {
    heading: 'What we can and cannot reproduce',
    body: [
      `Embroidery is a physical process with limits that printing does not have. Text below 5mm in the finished size may not be legible. Gradients are reproduced as bands of flat thread colour rather than smooth transitions. Thread colours are matched to the closest available shade in our palette, which is very close but rarely an exact match to a printed or on-screen colour.`,
      `Slight variation between pieces in a run — in colour, in placement of up to a few millimetres, and in the size of a finished patch — is normal in manufacturing and is not a defect.`,
    ],
  },
  {
    heading: 'Payment',
    body: [
      `Payment terms are confirmed with your quote. Unless agreed otherwise, orders are paid before production begins.`,
      `Prices quoted exclude shipping, and exclude any import duties, customs charges or local taxes payable in the destination country. Those are the responsibility of the recipient.`,
    ],
  },
  {
    heading: 'Production and delivery times',
    body: [
      `Standard production and delivery takes approximately 20 to 30 days from approval of the digital proof. Express production is available on request and typically takes 10 to 14 days.`,
      `These timeframes are estimates, not guarantees. They begin at proof approval, not at the date of enquiry, and they do not include delays caused by customs, courier disruption or events outside our control.`,
      `If a delivery date is critical to you, tell us before you order so we can confirm in writing whether it is achievable.`,
    ],
  },
  {
    heading: 'Shipping, loss and damage',
    body: [
      `We ship worldwide using established courier partners. Risk passes to you on delivery to the address you supply.`,
      `Please give us a complete and accurate delivery address. We cannot be responsible for orders delayed or lost because of an incorrect or incomplete address.`,
      `If an order arrives damaged, tell us within 7 days of delivery and include photographs so we can take it up with the courier.`,
    ],
  },
  {
    heading: 'Faults, remakes and refunds',
    body: [
      `If your patches arrive with a genuine manufacturing fault, or do not match the proof you approved, contact us within 14 days of delivery with photographs. Where the fault is ours we will remake the affected pieces at our cost, or refund them.`,
      `We cannot offer refunds or remakes for: errors that were present on the approved proof; a change of mind after production has started; normal manufacturing variation as described above; or damage caused by incorrect application, ironing onto an unsuitable fabric, or laundering against our guidance.`,
    ],
  },
  {
    heading: 'Use of finished work',
    body: [
      `We may photograph finished patches and use those photographs in our portfolio, website and social media as examples of our work. If your design is confidential, or you would rather we did not, tell us when you order and we will exclude it.`,
    ],
  },
  {
    heading: 'Limitation of liability',
    body: [
      `Our liability in connection with any order is limited to the value of that order. We are not liable for indirect or consequential losses, including lost profit, lost business or costs arising from a missed event date.`,
      `Nothing in these terms limits liability that cannot lawfully be limited.`,
    ],
  },
  {
    heading: 'Governing law',
    body: [
      `These terms are governed by the laws of ${LEGAL.governingLaw}, and any dispute will be dealt with by the courts of that jurisdiction.`,
    ],
  },
  {
    heading: 'Contact',
    body: [
      `Questions about these terms can be sent to ${CONTACT.email} or ${CONTACT.phone}.`,
    ],
  },
];

export const privacySections: LegalSection[] = [
  {
    heading: 'The short version',
    body: [
      `We collect the details you give us so we can quote for your patches and produce them. We do not sell your information, we do not share it for advertising, and we do not send marketing you did not ask for.`,
    ],
  },
  {
    heading: 'What we collect',
    body: [
      `**Information you give us.** When you request a quote or contact us, we collect your name, email address, phone number and — if you provide it — your company name. Alongside that we collect the details of the job itself: patch type, size, quantity, embroidery coverage, backing, border, thread type, delivery preference and any notes you add.`,
      `**Artwork you upload.** Design files you send us are stored so we can digitise and produce them.`,
      `**Messages.** If you email, call or message us on WhatsApp, we keep that correspondence so we have a record of what was agreed.`,
      `We do not collect payment card details through this website.`,
    ],
  },
  {
    heading: 'How we use it',
    body: [
      `To prepare and send your quote, to produce a digital proof, to manufacture and ship your order, to send you an order confirmation, and to answer your questions. We also keep records of completed orders so that repeat orders can be matched to previous work.`,
      `We use your information for these purposes only. We do not use it to build advertising profiles.`,
    ],
  },
  {
    heading: 'Who we share it with',
    body: [
      `**Email delivery.** Confirmation emails are sent through Resend, an email delivery provider, which processes the recipient address and message content in order to deliver it.`,
      `**Hosting and storage.** This website and its content are hosted with our hosting provider, and blog content is stored in a managed MongoDB database.`,
      `**Shipping.** Courier partners receive the name, address and contact number needed to deliver your order.`,
      `That is the full list. We do not sell personal information, and we do not share it with advertisers or data brokers.`,
    ],
  },
  {
    heading: 'Cookies',
    body: [
      `This website does not use advertising or tracking cookies.`,
      `A single session cookie is used to keep the site administrator signed in to the private admin area. It is not set for ordinary visitors and it does not track browsing.`,
      `If we add website analytics in future, this page will be updated before we do.`,
    ],
  },
  {
    heading: 'How long we keep it',
    body: [
      `Quote enquiries that do not become orders are kept for up to 24 months, so we can pick up a conversation if you come back to it.`,
      `Order records and artwork are kept for as long as needed to support reorders and to meet accounting and tax obligations, and are deleted on request where we are not required to retain them.`,
    ],
  },
  {
    heading: 'Your rights',
    body: [
      `You can ask us for a copy of the information we hold about you, ask us to correct it, or ask us to delete it. You can also ask us to stop using it for any purpose you have not agreed to.`,
      `Depending on where you live, you may have specific rights under the GDPR or under state privacy laws such as the CCPA. We apply the same standard to everyone regardless of location.`,
      `To exercise any of these, email ${CONTACT.email}. We will respond within 30 days.`,
    ],
  },
  {
    heading: 'Security',
    body: [
      `The site is served over HTTPS, and access to order records and artwork is restricted to the people who need it to fulfil your order. No system is perfectly secure, but we take reasonable measures to protect what you send us.`,
    ],
  },
  {
    heading: "Children's privacy",
    body: [
      `This website is intended for business and adult customers. We do not knowingly collect information from children under 13. If you believe a child has sent us personal information, contact us and we will delete it.`,
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      `If this policy changes, the updated version appears on this page with a new date at the top. Material changes to how we use your information will be described here rather than made quietly.`,
    ],
  },
  {
    heading: 'Contact',
    body: [
      `Questions about privacy, or a request about your information, can be sent to ${CONTACT.email} or ${CONTACT.phone}.`,
    ],
  },
];
