import type { LegalSection } from '@/lib/legal';
import { LEGAL } from '@/lib/legal';

/** Renders **bold** spans in body copy. The legal text is authored in-repo, so
 *  the only markup supported is what is actually used there. */
function Body({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p className="text-gray-600 text-lg leading-relaxed mb-4">
      {parts.map((part, index) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={index} className="text-[#1d3557] font-semibold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </p>
  );
}

type Props = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalPage({ title, intro, sections }: Props) {
  return (
    <div>
      <section className="gradient-bg py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-200">{intro}</p>
            <p className="text-sm text-gray-300 mt-6">Last updated: {LEGAL.lastUpdated}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Jump links — these pages are long and people arrive looking for one clause. */}
            <nav aria-label="On this page" className="mb-12 p-6 bg-gray-50 rounded-2xl">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#1d3557] mb-4">
                On this page
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {sections.map((section) => (
                  <li key={section.heading}>
                    <a
                      href={`#${slugId(section.heading)}`}
                      className="text-gray-600 hover:text-[#e63946] transition-colors"
                    >
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {sections.map((section) => (
              <div key={section.heading} className="mb-10 scroll-mt-24" id={slugId(section.heading)}>
                <h2 className="text-2xl lg:text-3xl font-bold text-[#1d3557] mb-4">
                  {section.heading}
                </h2>
                {section.body.map((paragraph, index) => (
                  <Body key={index} text={paragraph} />
                ))}
              </div>
            ))}

            {LEGAL.address && (
              <p className="text-gray-500 text-base border-t border-gray-200 pt-8">
                {LEGAL.entity}, {LEGAL.address}
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function slugId(heading: string): string {
  return heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
