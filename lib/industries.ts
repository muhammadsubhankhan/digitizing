/**
 * Audience landing pages. These sit at the site root (e.g. /corporate-uniform-patches)
 * because that is how buyers search — by who they are, not by what the patch is made of.
 *
 * Each entry must stay genuinely distinct from the others and from the material
 * pages in lib/services.ts. Near-duplicate audience pages are doorway pages and
 * Google treats them as such.
 */
export type Industry = {
  /** URL segment. Also the route folder name under app/. */
  slug: string;
  /** H1 and page title. */
  name: string;
  /** Meta description and hero subtitle. Under ~155 characters. */
  description: string;
  /** Opening paragraphs, before the section headings. */
  intro: string[];
  /** Body sections rendered as H2s. This is what the page ranks on. */
  sections: { heading: string; body: string }[];
  /** "What people in this category usually order" — the practical spec block. */
  typical: { label: string; value: string }[];
  /** Bulleted list of concrete orders we see from this audience. */
  commonOrders: string[];
  /** Internal links to the material/service pages. */
  related: { label: string; href: string }[];
  images: string[];
  faqs: { question: string; answer: string }[];
};

export const industries: Record<string, Industry> = {
  'custom-patches-for-fire-departments': {
    slug: 'custom-patches-for-fire-departments',
    name: 'Custom Patches for Fire Departments',
    description:
      'Fire department, EMS and rescue patches built for duty wear — shoulder patches, rank insignia and memorial patches. 25-piece minimum, free digital proof.',
    intro: [
      'A fire department patch has to do two jobs at once. It carries the identity of the department — the seal, the founding date, the district — and it has to survive being worn on duty gear that gets soaked, dragged and laundered on a schedule no ordinary garment sees.',
      'That combination is what makes fire and EMS patches a specific job rather than a generic one. The detail level is high, because department seals are rarely simple, and the durability requirement is unforgiving.',
    ],
    sections: [
      {
        heading: 'Shoulder patches that survive duty wear',
        body: 'The standard department shoulder patch runs 4 to 5 inches tall and sits on both sleeves. At that size a full seal is reproducible in thread, including the Maltese cross, the department name in an arc, and a district or station number. We recommend full or near-full embroidery coverage here rather than partial — the background twill is what fades first, and on a garment washed as often as duty wear, coverage is what keeps the patch looking current three years in. Sew-on backing is standard, because heat seal does not bond reliably to the treated and flame-resistant fabrics used in station wear.',
      },
      {
        heading: 'Rank, specialty and station identifiers',
        body: 'Below the department patch, most services run a second tier: rank insignia, specialty qualifications such as hazmat, technical rescue or paramedic, and station or company identifiers. These are small — typically 1.5 to 3 inches — and usually ordered in mixed quantities, a handful of each rather than a hundred of one. Because our 25-piece minimum applies per design rather than per order, the practical approach is to consolidate. Order the whole set in one run and the setup cost is spread across the batch instead of being paid five times over.',
      },
      {
        heading: 'Memorial and commemorative patches',
        body: 'Memorial patches carry a different weight, and they are usually ordered under time pressure for a specific date. Two things matter. First, get the names and dates checked by more than one person before you approve the proof — this is the single most common source of a costly reprint, and it is entirely avoidable. Second, tell us the date you need them by when you first make contact, not after the proof. Express production runs 10 to 14 days against a standard 20 to 30, and knowing the deadline upfront is what lets us confirm whether it is achievable.',
      },
      {
        heading: 'Reproducing a department seal accurately',
        body: 'Most department seals were drawn for print, not for thread, and they usually contain elements that do not translate directly: fine radial lines, a motto in small type, a gradient sky behind a silhouette. We digitise these by simplifying the elements that would blur while keeping the ones that carry the identity. Any lettering that would land below 5mm at the finished size has to either grow, or go. If your department has an approved patch specification, send it with the artwork and we will work to it. If you only have a low-resolution image of the existing patch, we can redraw it as vector — say so upfront so it is quoted in.',
      },
    ],
    typical: [
      { label: 'Shoulder patch size', value: '4 to 5 inches tall' },
      { label: 'Rank and specialty', value: '1.5 to 3 inches' },
      { label: 'Coverage', value: '100% recommended for duty wear' },
      { label: 'Backing', value: 'Sew-on standard; hook-and-loop for turnout gear' },
      { label: 'Border', value: 'Merrowed for shields and circles, laser-cut for shaped seals' },
      { label: 'Minimum order', value: '25 pieces per design' },
      { label: 'Turnaround', value: '20-30 days standard, 10-14 express' },
    ],
    commonOrders: [
      'Department shoulder patches for Class A and station uniforms',
      'Rank insignia for officers, lieutenants and chiefs',
      'Specialty qualification patches — hazmat, rescue, paramedic, dive',
      'Station and company identifiers',
      'Memorial and line-of-duty commemorative patches',
      'Explorer, cadet and auxiliary programme patches',
      'Anniversary patches for department milestones',
    ],
    related: [
      { label: 'Embroidered patches', href: '/services/embroidered-patches' },
      { label: 'Police patches', href: '/services/police-patches' },
      { label: 'Military patches', href: '/services/military-patches' },
      { label: 'Velcro patches', href: '/services/velcro-patches' },
      { label: 'Logo patches', href: '/services/logo-patches' },
    ],
    images: ['/3.webp', '/5.webp', '/4 (1).webp', '/2.webp'],
    faqs: [
      {
        question: 'Can you reproduce our existing department patch exactly?',
        answer:
          'In almost every case, yes. Send the best image you have — a scan of a physical patch works well — and we will digitise it to match. Where the original contains detail that thread cannot hold at size, we will show you what we have changed on the proof before anything is produced.',
      },
      {
        question: 'What is the minimum order for fire department patches?',
        answer:
          'Twenty-five pieces per design. If you need a small number of several different designs — rank, specialty, station — order them together in one run so the setup cost is spread across the batch rather than paid separately for each.',
      },
      {
        question: 'Which backing works on turnout gear?',
        answer:
          'Hook-and-loop, in almost every case. Heat seal does not bond reliably to flame-resistant and treated outer shells, and permanent stitching through a turnout shell can compromise the barrier. Check your department policy first — many specify hook-backed identifiers for exactly this reason.',
      },
      {
        question: 'Can you produce memorial patches on a deadline?',
        answer:
          'Yes. Express production runs 10 to 14 days from proof approval. Tell us the date when you first get in touch rather than at the proof stage — that is what determines whether the date is achievable.',
      },
      {
        question: 'Do you need permission to make a department patch?',
        answer:
          'We ask that whoever places the order has authority to have the department insignia reproduced. We do not verify this independently, so please make sure your order is approved through the correct channel before you submit artwork.',
      },
    ],
  },

  'school-and-varsity-patches': {
    slug: 'school-and-varsity-patches',
    name: 'School and Varsity Patches',
    description:
      'Chenille letters, award patches and school crests for letterman jackets, teams and clubs. Mixed sizes, 25-piece minimum, free digital proof before production.',
    intro: [
      'School orders are almost never one design. A single order usually covers a chenille letter for the jacket, sport-specific insert patches, year numerals, and a crest or club emblem — each in a different quantity, each needed by the same date.',
      'The logistics matter as much as the patches. Getting the whole set produced in one run is what keeps the cost per student sensible and stops half the order arriving after the awards night.',
    ],
    sections: [
      {
        heading: 'Chenille letters for letterman jackets',
        body: 'The varsity letter is chenille — looped yarn cut to a deep pile, which is why it has that unmistakable fuzzy texture. Typical letters run 6 to 8 inches tall for a jacket chest, and the pile depth is what gives them presence. Chenille holds bold shapes and nothing else: a letter, a numeral, a simple emblem. Fine detail is physically impossible in a pile that deep, so any crest with small type needs to be embroidered separately rather than attempted in chenille. Most schools run a two-colour letter — school colour body, contrast outline — which is the traditional look and the one that photographs best.',
      },
      {
        heading: 'Sport and activity insert patches',
        body: 'Insert patches are the small ones pinned or sewn onto or beside the letter, marking the sport, the year, or an achievement. They run 1.5 to 3 inches and are almost always embroidered rather than chenille, because they carry detail — a football, a musical note, a debate emblem, a year numeral. This is the part of a school order where quantities get awkward: you might need 40 football, 22 soccer, 15 band and 8 debate. Consolidate them into a single order. Our 25-piece minimum is per design, but ordering the whole set at once means one setup cycle and one delivery rather than four.',
      },
      {
        heading: 'School crests, clubs and honour societies',
        body: 'A school crest is a detailed piece of artwork — usually a shield with a motto, a founding date, and several internal divisions. At the 3 to 4 inches most crests are worn, some of that detail will not survive in thread. The motto in particular is often set at a size that would land below 3mm stitched, which is not legible. We will show you a simplified version on the proof; if the motto is essential, the answer is usually a slightly larger patch rather than smaller lettering. Honour societies and national organisations frequently have an approved patch specification — if yours does, send it and we will work to it exactly.',
      },
      {
        heading: 'Planning around the school calendar',
        body: 'Almost every school order is tied to a fixed date: awards night, the end of season, graduation. Standard production is 20 to 30 days from proof approval, and proof approval itself takes a few days of back and forth. Working backwards, that means starting six to eight weeks before the date, not four. Express production at 10 to 14 days exists for when that slips, but it carries a premium and it is avoidable. The most common failure we see is a school ordering in the same month as the event and then paying for rush production on an order that had been planned for a year.',
      },
    ],
    typical: [
      { label: 'Chenille letter size', value: '6 to 8 inches tall' },
      { label: 'Insert patch size', value: '1.5 to 3 inches' },
      { label: 'Crest size', value: '3 to 4 inches' },
      { label: 'Coverage', value: '75% is usually enough on a solid background' },
      { label: 'Backing', value: 'Sew-on for jackets; heat seal for cotton spirit wear' },
      { label: 'Minimum order', value: '25 pieces per design' },
      { label: 'Lead time to plan for', value: '6 to 8 weeks before the event date' },
    ],
    commonOrders: [
      'Chenille varsity letters for letterman jackets',
      'Sport-specific insert and award patches',
      'Year numerals and graduation patches',
      'School crests and shields for blazers',
      'Band, choir and drama club emblems',
      'Honour society and academic award patches',
      'Team patches for spirit wear and warm-ups',
    ],
    related: [
      { label: 'Chenille patches', href: '/services/custom-chenille-patches' },
      { label: 'Jacket patches', href: '/services/jacket-patches' },
      { label: 'Embroidered patches', href: '/services/embroidered-patches' },
      { label: 'Iron-on patches', href: '/services/iron-patches' },
      { label: 'Custom caps and hats', href: '/services/custom-caps-hats' },
    ],
    images: ['/6.webp', '/8.webp', '/7.webp', '/4 (2).webp'],
    faqs: [
      {
        question: 'How far ahead should we order for awards night?',
        answer:
          'Six to eight weeks before the date. Standard production is 20 to 30 days from proof approval, and approving the proof takes a few days on top. Express production at 10 to 14 days is available but costs more — planning ahead is cheaper.',
      },
      {
        question: 'Can we order different quantities of different patches together?',
        answer:
          'Yes, and you should. The 25-piece minimum applies per design, so a set of five sport patches at 25 each is a normal order. Placing them together means one setup cycle, one proof round and one delivery.',
      },
      {
        question: 'Can a school crest be done in chenille?',
        answer:
          'Only if it is very simple. Chenille has a deep pile that cannot hold small detail or fine lettering — it works for letters, numerals and bold emblems. A detailed crest should be embroidered, and can be worn alongside a chenille letter on the same jacket.',
      },
      {
        question: 'What backing should we use for letterman jackets?',
        answer:
          'Sew-on. Letterman jackets are usually wool with a leather sleeve, and heat seal will not bond to either. Chenille letters are sewn on as standard for the same reason.',
      },
      {
        question: 'Do you offer pricing for schools ordering every year?',
        answer:
          'Repeat orders of an existing design skip the digitising stage, which we reflect in the quote. Tell us it is a reorder and reference the previous order — we keep the digitised files so the design comes back identical year to year.',
      },
    ],
  },

  'scout-and-youth-group-patches': {
    slug: 'scout-and-youth-group-patches',
    name: 'Scout and Youth Group Patches',
    description:
      'Troop numerals, camp patches, achievement badges and event patches for scouting and youth organisations. Small runs welcome, free digital proof.',
    intro: [
      'Scouting and youth group orders are usually small, frequent and tied to a specific event — a camp, a jamboree, a badge scheme, a fundraising year. The patches themselves are often modest in size, and the budget almost always comes from parents, subs or a fundraiser rather than an organisational purchasing line.',
      'That shapes everything about how these orders should be placed. Cost per patch matters more here than on almost any other kind of order, and there are specific ways to bring it down.',
    ],
    sections: [
      {
        heading: 'Camp and event patches',
        body: 'The camp patch is the classic of the category — a design specific to one event, one year, worn or traded afterwards. Typical size is 2.5 to 3.5 inches, usually round or shield-shaped, and usually with the event name arced around a central illustration. Because these are collected and traded, the design carries more weight than the durability: a camp patch spends most of its life on a blanket or a display, not being laundered. That means 75% coverage is usually plenty, and a laser-cut border is fine even on a shaped outline. Both choices bring the price down without any visible compromise.',
      },
      {
        heading: 'Troop numerals and unit identifiers',
        body: 'Numerals and unit strips are small — often 1 to 2 inches wide — and the same design is reordered every year as new members join. This is a case where ordering ahead genuinely saves money. A run of 100 numerals is not much more expensive in total than a run of 50, because the setup cost is fixed and gets spread thinner, and numerals do not go out of date. Groups that order two or three years of intake at once consistently pay less per patch than groups that order each September.',
      },
      {
        heading: 'Achievement and badge scheme patches',
        body: 'If your organisation runs its own badge scheme rather than a national one, you are ordering a set: several designs, small quantities of each, all needed together. The economics are the same as any multi-design order — consolidate into a single run so setup is paid once across the batch. Keep individual badges simple. At 1.5 to 2 inches, a badge has room for one clear symbol and very little else; any lettering below 5mm will not read, so a badge name usually works better arced around the edge at a legible size than set small inside the design.',
      },
      {
        heading: 'Working within a small budget',
        body: 'Four adjustments make the biggest difference on youth group orders. Order the whole year in one run rather than per term. Use 75% coverage instead of 100% where the background is a single flat colour — on a camp patch this is genuinely invisible. Keep the colour count to six or fewer. And keep the size honest: going from 3.5 inches to 3 inches is barely noticeable on a shirt and takes a real percentage off the total. If you have a fixed budget per patch, tell us the number when you ask for a quote — it is far more useful than us guessing, and we will tell you what fits.',
      },
    ],
    typical: [
      { label: 'Camp and event patch', value: '2.5 to 3.5 inches' },
      { label: 'Troop numerals', value: '1 to 2 inches' },
      { label: 'Achievement badges', value: '1.5 to 2 inches' },
      { label: 'Coverage', value: '75% is usually the right call on budget' },
      { label: 'Backing', value: 'Sew-on for uniform shirts; heat seal for cotton camp blankets' },
      { label: 'Border', value: 'Laser-cut keeps shaped designs affordable' },
      { label: 'Minimum order', value: '25 pieces per design' },
    ],
    commonOrders: [
      'Annual camp and jamboree patches',
      'Troop, pack and unit numerals',
      'Custom achievement and badge scheme patches',
      'Anniversary and milestone patches',
      'Fundraising and community service patches',
      'Leader and volunteer recognition patches',
      'Trading patches for jamborees and inter-group events',
    ],
    related: [
      { label: 'Embroidered patches', href: '/services/embroidered-patches' },
      { label: 'Iron-on patches', href: '/services/iron-patches' },
      { label: 'Sew-on patches', href: '/services/sew-on-patches' },
      { label: 'Woven labels', href: '/services/woven-labels' },
      { label: 'Custom keychains', href: '/services/custom-keychain' },
    ],
    images: ['/7.webp', '/2.webp', '/6.webp', '/3.webp'],
    faqs: [
      {
        question: 'Is 25 pieces too many for a small troop?',
        answer:
          'It is our standard minimum, and smaller runs are quoted individually — but be aware the per-patch price rises sharply below it, because setup is spread across fewer pieces. Many small groups find 25 costs little more in total than 15, so it is worth asking for both before deciding.',
      },
      {
        question: 'How do we keep the cost per patch down?',
        answer:
          'Order the full year in one run, use 75% coverage rather than 100% on a solid background, keep to six colours or fewer, and be realistic about size. Together those four adjustments typically make a substantial difference with no visible change to the finished patch.',
      },
      {
        question: 'Can we use our national organisation\'s emblem?',
        answer:
          'Only with permission from that organisation. National scouting bodies protect their marks, and most require approval before a local group produces anything carrying them. We ask that you have that permission before submitting artwork — we are not able to verify it for you.',
      },
      {
        question: 'What backing works for camp blankets?',
        answer:
          'Heat seal, if the blanket is cotton or wool — it holds well and lets members position patches themselves. Add a few stitches around the edge afterwards for anything that will be handled often. For uniform shirts, sew-on is the standard.',
      },
      {
        question: 'Can children\'s drawings be turned into a patch?',
        answer:
          'Yes, and camp patches designed by members are among the best we make. Send a clear, straight-on photo of the drawing in good light. We will simplify it where thread cannot follow the original and show you the result on the proof before production.',
      },
    ],
  },

  'corporate-uniform-patches': {
    slug: 'corporate-uniform-patches',
    name: 'Corporate and Uniform Patches',
    description:
      'Branded patches for staff uniforms, workwear and trade teams. Consistent reorders, industrial-wash durability, bulk pricing and free digital proofs.',
    intro: [
      'A uniform patch is a branding decision that gets worn every working day by people your customers meet. It also has to survive a laundry cycle that would destroy most decoration, and it has to look identical on the person who joined this week and the person who joined four years ago.',
      'Those two requirements — durability and consistency across reorders — are what separate a corporate uniform order from a one-off run, and they are what should drive the specification.',
    ],
    sections: [
      {
        heading: 'Why patches beat direct embroidery on uniforms',
        body: 'Embroidering your logo directly onto each garment ties the branding to the garment. Every new shirt has to go through decoration before it can be issued, damaged garments cannot be recovered, and a rebrand means replacing the entire stock. Patches decouple the two. You hold plain garments and a box of patches, apply as needed, and a rebrand costs you the patches rather than the wardrobe. For companies running staff turnover, multiple sites, or seasonal hires, this is usually the cheaper model within the first year — and it is why most uniform suppliers work this way.',
      },
      {
        heading: 'Surviving industrial laundering',
        body: 'Commercial laundry is the harshest environment a patch will face: high temperature, aggressive detergent, and a tumble cycle far beyond domestic. Three decisions follow from that. Use sew-on backing — heat seal softens at industrial temperatures and will eventually lift, and no adhesive is rated for that cycle. Use full or near-full embroidery coverage, because exposed twill background is what fades first and a faded background makes an otherwise good patch look old. And choose a merrowed border where the shape allows, because a wrapped edge has no exposed cut for the wash to attack. Specify all three and a uniform patch will outlast the garment it is on.',
      },
      {
        heading: 'Brand consistency across reorders',
        body: 'This is where corporate orders differ most from every other kind. Your patch has to look identical in three years, on a reorder placed by someone who was not there for the first one. We keep the digitised file and the exact thread colour numbers on record against your account, so a reorder reproduces the original rather than being re-interpreted. Send your Pantone references with the first order and we will confirm the closest thread match before production — once that match is agreed and recorded, every subsequent run uses the same numbers. If your brand guidelines specify tolerances, send them with the artwork.',
      },
      {
        heading: 'Sizing and placement on workwear',
        body: 'Left chest is the standard placement, and 2.5 to 3.5 inches wide is the range that reads clearly without dominating a shirt. Larger than 4 inches on a chest starts to look like promotional wear rather than uniform. Back placement, where used, runs 8 to 12 inches and is worth full coverage because it is the one people see at distance. Name patches are typically 1 to 1.25 inches tall and 3 to 4 inches wide — and because each is a unique design, they are priced differently to a bulk run. If you need names, ask us about them specifically rather than assuming they price like the logo patch.',
      },
      {
        heading: 'Ordering at volume',
        body: 'Setup cost is fixed per design, so the per-patch price falls steeply with quantity — and corporate orders are usually large enough to be well past the steepest part of that curve. Ordering a year of expected intake at once rather than quarterly is nearly always cheaper in total, and patches store indefinitely. If you run multiple sites or divisions with variant patches, order the variants together in one run: one setup cycle, one proof round, one delivery, one invoice.',
      },
    ],
    typical: [
      { label: 'Chest patch size', value: '2.5 to 3.5 inches wide' },
      { label: 'Back patch size', value: '8 to 12 inches wide' },
      { label: 'Name patch size', value: '1 to 1.25 inches tall' },
      { label: 'Coverage', value: '100% recommended for industrial laundering' },
      { label: 'Backing', value: 'Sew-on — heat seal will not survive commercial wash' },
      { label: 'Border', value: 'Merrowed where the shape allows' },
      { label: 'Minimum order', value: '25 pieces per design, bulk pricing above that' },
    ],
    commonOrders: [
      'Left-chest logo patches for staff shirts and polos',
      'Large back patches for trade and service crews',
      'Name patches and role identifiers',
      'Hi-vis and workwear branding',
      'Multi-site and divisional variant patches',
      'Contractor and franchise branding for uniform suppliers',
      'Branded caps and headwear to match the uniform',
    ],
    related: [
      { label: 'Logo patches', href: '/services/logo-patches' },
      { label: 'Embroidered patches', href: '/services/embroidered-patches' },
      { label: 'Sew-on patches', href: '/services/sew-on-patches' },
      { label: 'Woven labels', href: '/services/woven-labels' },
      { label: 'Custom caps and hats', href: '/services/custom-caps-hats' },
      { label: 'PVC rubber patches', href: '/services/pvc-rubber-patches' },
    ],
    images: ['/4 (1).webp', '/5.webp', '/3.webp', '/8.webp'],
    faqs: [
      {
        question: 'Will the patch survive commercial laundering?',
        answer:
          'With the right specification, yes. Use sew-on backing, full or near-full embroidery coverage and a merrowed border where the shape allows. Heat seal is the one to avoid — industrial wash temperatures soften the adhesive and it will eventually lift.',
      },
      {
        question: 'Can you match our brand colours exactly?',
        answer:
          'Thread comes in a fixed palette, so we match to the closest available shade — usually very close. Send your Pantone numbers with the first order and we will confirm the match before production, then record those thread numbers so every reorder is identical.',
      },
      {
        question: 'Will a reorder look the same as the original?',
        answer:
          'Yes. We keep the digitised file and the exact thread colour numbers on record, so a reorder reproduces the original rather than being re-interpreted. Reference your previous order and the design comes back the same.',
      },
      {
        question: 'Is it cheaper to order once a year or quarterly?',
        answer:
          'Once a year, in almost every case. Setup cost is fixed per design and gets spread across the run, so a single large order costs less in total than four smaller ones. Patches store indefinitely, so there is no downside to holding stock.',
      },
      {
        question: 'Do you supply uniform companies and resellers?',
        answer:
          'Yes. Multi-design orders, variant patches for different sites or clients, and consistent repeat production are routine for us. Get in touch with your typical volumes and we will quote accordingly.',
      },
      {
        question: 'Should we use patches or embroider the garment directly?',
        answer:
          'Patches, in most cases. They let you hold plain stock and apply branding as needed, they survive a rebrand without replacing garments, and damaged patches can be replaced without writing off the shirt.',
      },
    ],
  },

  'band-and-music-merch-patches': {
    slug: 'band-and-music-merch-patches',
    name: 'Band and Music Merch Patches',
    description:
      'Custom patches for bands, labels and festivals — back patches, sew-on merch patches and tour designs. 25-piece minimum, low upfront cost, free digital proof.',
    intro: [
      'A patch is the highest-margin item on most merch tables. It costs a fraction of a shirt, it needs no sizes, it takes up almost no space in a van, and it does not go out of date the way a tour shirt does — an unsold box just goes back out at the next show.',
      'It is also the merch item fans keep longest. A patch sewn onto a battle jacket is worn for years and seen by everyone who walks past it, which makes it the cheapest advertising a band can buy.',
    ],
    sections: [
      {
        heading: 'Back patches and the battle jacket',
        body: 'The large back patch is the format the genre is built around. Typical size runs 10 to 14 inches, big enough to carry a full logo and artwork, and it is the piece fans build a jacket around. At that size two decisions matter. Add plastic backing — a panel that large sags and curls without it, and a curling back patch looks cheap no matter how good the embroidery is. And choose the border by shape: merrowed if your logo sits inside a simple outline, laser-cut if the design has spikes, points or lettering breaking the shape, which in this genre it usually does. Our guide to patch borders covers the trade-off in full.',
      },
      {
        heading: 'Small sew-on patches for the merch table',
        body: 'The 3 to 4 inch sew-on patch is the volume seller. It is cheap enough to price as an impulse buy, it fits any jacket or bag, and it is the one people buy two of. Keep the design simple: a logo, a single strong image, minimal text. At 3 inches a full album cover reduces to a smudge, whereas a bold logo reads across a room. Use sew-on backing rather than heat seal — the audience for these patches sews them on, and denim and leather are exactly the fabrics heat seal handles worst.',
      },
      {
        heading: 'Tour, release and festival patches',
        body: 'Dated patches — a tour, an album cycle, a festival year — sell on scarcity as much as design. They also carry a real deadline, which is the thing most bands underestimate. Standard production is 20 to 30 days from proof approval, and getting to proof approval takes a few days of back and forth on top. If patches need to be in the van for a tour start, begin the process six to eight weeks out. Express production at 10 to 14 days exists, but it costs more, and it is a bad way to spend a merch budget that could have gone into a bigger run.',
      },
      {
        heading: 'Artwork that survives being stitched',
        body: 'Band artwork is the hardest category we handle, because so much of it is built on exactly the things thread cannot do: fine linework, heavy texture, distressed edges, illegible logos that depend on razor-sharp detail. Some of that can be simplified without losing the design; some of it cannot. The honest answer is that a logo designed to be unreadable at high resolution will be a blur at 3 inches in thread. Where the artwork is genuinely too fine, PVC rubber holds detail that embroidery cannot and is worth pricing as an alternative. Send vector artwork where you have it — a low-resolution JPG pulled from a social post has to be redrawn before it can be digitised, which adds cost and time.',
      },
      {
        heading: 'Ordering as an independent band',
        body: 'Twenty-five pieces is our minimum, and for a band that is a genuinely low commitment — it is one design, one box, and it sells over multiple shows. But the per-patch price drops steeply between 25 and 100, so if you are confident in a design it is usually worth the larger run: the total is not far off and the margin per patch improves substantially. Keep the colour count at six or fewer and use 75% coverage on a solid background — both cut the cost with no visible difference on a small patch. If you are running several designs, order them together so setup is paid once.',
      },
    ],
    typical: [
      { label: 'Back patch size', value: '10 to 14 inches' },
      { label: 'Merch patch size', value: '3 to 4 inches' },
      { label: 'Coverage', value: '75% works well on a solid background' },
      { label: 'Backing', value: 'Sew-on — the audience sews these on denim and leather' },
      { label: 'Extra for back patches', value: 'Plastic backing to stop the panel curling' },
      { label: 'Border', value: 'Laser-cut for shaped logos, merrowed for simple outlines' },
      { label: 'Minimum order', value: '25 pieces per design' },
    ],
    commonOrders: [
      'Large back patches for jackets and battle vests',
      'Small logo patches for the merch table',
      'Tour and album cycle patches',
      'Festival and event patches',
      'Record label and collective patches',
      'Limited-run patches for pre-orders and bundles',
      'Crew and road team patches',
    ],
    related: [
      { label: 'Back patches', href: '/services/back-patches' },
      { label: 'Embroidered patches', href: '/services/embroidered-patches' },
      { label: 'Sew-on patches', href: '/services/sew-on-patches' },
      { label: 'PVC rubber patches', href: '/services/pvc-rubber-patches' },
      { label: 'Jacket patches', href: '/services/jacket-patches' },
      { label: 'Custom keychains', href: '/services/custom-keychain' },
    ],
    images: ['/2.webp', '/4 (2).webp', '/8.webp', '/6.webp'],
    faqs: [
      {
        question: 'What is the minimum order for band patches?',
        answer:
          'Twenty-five pieces per design. For most bands that is a low-risk first run — one design, one box, sold across several shows. The per-patch price improves substantially at 100 and above if you are confident in the design.',
      },
      {
        question: 'What size should a back patch be?',
        answer:
          'Ten to fourteen inches is the standard range. Add plastic backing at that size — a large panel sags and curls without it, and that is the difference between a patch that looks professional on a jacket and one that does not.',
      },
      {
        question: 'Can you reproduce our logo exactly?',
        answer:
          'Depends on the logo. Thread has a minimum line width of about 1mm and text needs to be 5mm or taller to read. Highly detailed or deliberately illegible logos lose definition at patch size. Send the artwork and we will tell you honestly what survives, and show you on the proof before production.',
      },
      {
        question: 'Sew-on or iron-on for merch patches?',
        answer:
          'Sew-on. Your audience is putting these on denim, leather and canvas jackets, and heat seal bonds poorly to leather and lifts under stress. Sew-on is also what people expect on a patch they intend to keep for years.',
      },
      {
        question: 'How far ahead should we order for a tour?',
        answer:
          'Six to eight weeks before the first date. Standard production is 20 to 30 days from proof approval, plus a few days to get the proof agreed. Express at 10 to 14 days is available, but the premium is money better spent on a bigger run.',
      },
    ],
  },
};

export const industrySlugs = Object.keys(industries);
export const industryList = Object.values(industries);
