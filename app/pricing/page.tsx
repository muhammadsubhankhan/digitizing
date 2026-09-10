import Link from 'next/link';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import FAQ from '@/components/FAQ';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Custom Patch Pricing | What Drives the Cost',
  description:
    'How custom patch pricing works — the six factors that set the price, why cost per patch drops with quantity, and what you can change to bring a quote down.',
  alternates: { canonical: '/pricing' },
  openGraph: { url: '/pricing', title: 'Custom Patch Pricing Explained' },
};

const factors = [
  {
    title: 'Size',
    detail:
      'The single biggest factor. Price is driven by the area the machine has to cover, so a 4-inch patch costs considerably more than a 2-inch one — not double, but not far off. Size is measured as the average of height and width, so an unusual shape is priced on the space it occupies rather than its outline.',
  },
  {
    title: 'Quantity',
    detail:
      'The second biggest. Setup — digitising the file, threading the machine, running a test — costs the same whether you order 25 patches or 500, so it is spread across the run. This is why the per-patch price falls sharply as quantity rises, and why 25 pieces is our minimum.',
  },
  {
    title: 'Embroidery coverage',
    detail:
      '50% coverage leaves the twill backing visible as the background colour. 75% covers most of it. 100% means thread across the entire surface. More coverage means more stitches and more thread, so a fully embroidered patch costs more than a partially embroidered one of the same size.',
  },
  {
    title: 'Patch type',
    detail:
      'Embroidered, woven, PVC rubber, chenille and leather are different manufacturing processes with different costs. PVC requires a mould to be made, which adds a one-off cost that is worth it on larger runs and expensive on small ones. Woven and embroidered price similarly at most sizes.',
  },
  {
    title: 'Backing and border',
    detail:
      'Plain sew-on is the baseline. Heat seal, plastic and peel-and-stick add a little. Hook-and-loop adds the most, because a second panel is cut and stitched on. A merrowed border and a laser-cut border cost roughly the same — the choice is about shape and durability, not budget.',
  },
  {
    title: 'Turnaround',
    detail:
      'Standard production runs 20 to 30 days from proof approval. Express production at 10 to 14 days means your job moves ahead of others in the queue, and that carries a premium. If your date is flexible, standard is always the cheaper option.',
  },
];

const savings = [
  {
    title: 'Order in one run, not three',
    detail:
      'Three orders of 50 pieces cost noticeably more than one order of 150, because you pay setup three times. If you know you will need more within the year, order them together.',
  },
  {
    title: 'Drop the size by half an inch',
    detail:
      'Going from 4 inches to 3.5 inches is often invisible on the garment and takes a real percentage off the price. Ask us to quote both and compare.',
  },
  {
    title: 'Use 75% coverage instead of 100%',
    detail:
      'If your background is a single flat colour, twill in that colour looks almost identical to thread in that colour — and costs less. Full coverage earns its money on multi-colour backgrounds, not solid ones.',
  },
  {
    title: 'Simplify the colour count',
    detail:
      'Every additional thread colour adds a machine change. Eight colours or fewer keeps the price sensible, and simplified artwork usually looks sharper at patch size anyway.',
  },
  {
    title: 'Send usable artwork',
    detail:
      'A vector file goes straight to digitising. A low-resolution JPG that has to be redrawn adds an artwork charge. Our guide on sending artwork covers exactly what to attach.',
  },
];

const pricingFaqs = [
  {
    question: 'How much do custom patches cost?',
    answer:
      'There is no single price, because a patch is quoted on size, quantity, coverage, type, backing and turnaround. A small partially-embroidered patch ordered in bulk is inexpensive per piece; a large fully-embroidered back patch in a run of 25 is not. Send your specification and we will return a firm price the same day.',
  },
  {
    question: 'What is the minimum order?',
    answer:
      'Our standard minimum is 25 pieces. We can sometimes accommodate smaller runs by arrangement, but the per-patch price rises because setup is spread across fewer items.',
  },
  {
    question: 'Do you charge a setup or digitising fee?',
    answer:
      'Setup is built into the quoted price rather than billed separately, which is why quantity has such a large effect on the per-patch cost. If artwork needs to be redrawn from a low-resolution file, we tell you before any work starts.',
  },
  {
    question: 'Is the digital proof free?',
    answer:
      'Yes. You get a digital proof showing the design at size with thread colours marked, before anything is produced and before you commit to the order.',
  },
  {
    question: 'Are shipping and taxes included in the quote?',
    answer:
      'Quotes exclude shipping unless stated. Import duties, customs charges and local taxes in the destination country are the responsibility of the recipient.',
  },
  {
    question: 'Does the price change after I approve the proof?',
    answer:
      'No. The price agreed at proof approval is the price you pay. It only changes if you change the specification — size, quantity, backing or coverage — after that point.',
  },
];

export default function PricingPage() {
  return (
    <div>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ])}
      />
      <JsonLd data={faqPageSchema(pricingFaqs)} />

      {/* Hero */}
      <section className="gradient-bg py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Custom Patch Pricing</h1>
            <p className="text-xl text-gray-200">
              Every patch is made to order, so there is no fixed price list. Here is exactly what
              sets the cost — and what you can change to bring it down.
            </p>
          </div>
        </div>
      </section>

      {/* Why no price list */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1d3557] mb-6">
              Why there is no fixed price list
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Two patches of the same size can differ in price by several times over. One might be
              a simple two-colour design at 75% coverage in a run of 500. The other might be fully
              embroidered in eight colours, hook-backed, in a run of 25, needed in two weeks. A
              single number on a page would be wrong for both.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              What we can do is be completely open about what moves the price, so you can shape
              your order before you ask for a quote rather than after.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Quotes are free, carry no obligation, and come back the same working day.
            </p>
          </div>
        </div>
      </section>

      {/* Cost factors */}
      <section className="pb-16 lg:pb-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3557] mb-4">
            The six things that set your price
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            Listed roughly in order of how much they matter.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {factors.map((factor, index) => (
              <div key={factor.title} className="bg-white rounded-2xl shadow-sm p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="w-10 h-10 rounded-full bg-[#e63946] text-white font-bold flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-[#1d3557]">{factor.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{factor.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantity effect */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3557] mb-6">
              How quantity changes the per-patch price
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              This is the part most people underestimate. Because setup cost is fixed, it is spread
              thinner with every extra piece. The drop is steepest at the low end — the difference
              between 25 and 100 pieces is far larger, per patch, than the difference between 500
              and 1,000.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              In practice that means a run of 100 often costs only a little more in total than a
              run of 50, while giving you twice the patches. If there is any chance you will need
              more later, it is nearly always cheaper to order them now.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Ask for your quote at two or three quantities at once. We will show you where the
              price breaks fall for your specific design, and you can decide from there.
            </p>
          </div>
        </div>
      </section>

      {/* Bring the price down */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3557] mb-4">
            Five ways to bring a quote down
          </h2>
          <p className="text-gray-600 text-lg mb-10 max-w-3xl">
            None of these compromise the finished patch. They are the adjustments we would suggest
            ourselves if you told us your budget upfront.
          </p>
          <div className="max-w-3xl space-y-8">
            {savings.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#e63946]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#e63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1d3557] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mt-10 p-6 bg-gray-50 rounded-2xl">
            <p className="text-gray-600 text-lg">
              Worth reading before you send artwork:{' '}
              <Link href="/blog/how-to-send-artwork-for-custom-patches" className="text-[#e63946] font-semibold hover:underline">
                how to send artwork for a custom patch
              </Link>{' '}
              and{' '}
              <Link href="/blog/embroidered-vs-pvc-vs-woven-vs-chenille-patches" className="text-[#e63946] font-semibold hover:underline">
                choosing the right patch type
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* What is always included */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3557] mb-6">
              What is included in every quote
            </h2>
            <ul className="space-y-4">
              {[
                'A free digital proof before production, showing size and thread colours',
                'Artwork digitising, built into the price rather than billed separately',
                'Unlimited revisions to the proof until you approve it',
                'Your choice of backing and border at the quoted specification',
                'Worldwide shipping options, quoted alongside the patches',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 w-2 h-2 rounded-full bg-[#e63946] flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ — the same accordion component the home page uses */}
      <FAQ
        items={pricingFaqs}
        eyebrow="Pricing FAQ"
        heading="Questions About Cost"
        subheading="The things people ask us most before requesting a quote"
        showCta={false}
      />

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1d3557] mb-6">
            Get a firm price for your design
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tell us the size, quantity and patch type and we will come back the same working day —
            free, and with no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/free-instant-quote" className="btn-primary">
              Get Free Quote
            </Link>
            <Link href="/contact" className="btn-outline">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
