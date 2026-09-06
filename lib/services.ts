export type ServiceSection = { heading: string; body: string };

export type Service = {
  name: string;
  /** Meta description and hero subtitle. Keep it under ~155 characters. */
  description: string;
  /** Opening paragraph under the "About" heading. */
  longDescription: string;
  features: string[];
  images: string[];
  /** Body sections rendered as H2s. This is what the page ranks on. */
  sections: ServiceSection[];
  /** "Who orders this" list — helps the page match long-tail queries. */
  useCases: string[];
  /** Spec table rows. */
  specs: { label: string; value: string }[];
  /** Page-specific FAQs. Also emitted as FAQPage structured data. */
  faqs: { question: string; answer: string }[];
};

export const services: Record<string, Service> = {
  'back-patches': {
    name: 'Back Patches',
    description:
      'Large custom back patches up to 14 inches for jackets and vests. Merrowed or laser-cut edges, 25-piece minimum, free digital proof.',
    longDescription: `A back patch is the largest thing you will ever put on a garment, and that changes how it has to be made. At 10 to 14 inches the design carries weight that a 3-inch chest patch never does, so the stitch count climbs, the backing fabric has to resist sagging, and the border has to survive being dragged across a chair back every day for years. We build back patches with that in mind rather than simply scaling up a small design.`,
    features: [
      'Large size options (up to 14 inches)',
      'Premium embroidery threads',
      'Multiple backing options',
      'Custom shapes available',
      'Vibrant color matching',
    ],
    images: ['/2.webp', '/3.webp', '/4 (1).webp', '/5.webp'],
    sections: [
      {
        heading: 'One-piece backs and three-piece sets',
        body: `Most orders fall into one of two shapes. A one-piece back patch puts the whole design on a single panel, which is simpler to apply and holds its shape better over time. A three-piece set splits the design into a top rocker, a centre panel, and a bottom rocker, applied separately so the wearer can position them to fit their own jacket. Three-piece sets cost more because each piece needs its own border and backing, but they give you flexibility that a single panel cannot — a bottom rocker can be replaced when a chapter or location changes without remaking the whole design.`,
      },
      {
        heading: 'Why border choice matters at this size',
        body: `A merrowed border is the thick overlocked edge you see on traditional patches. It is stitched around the outside after the patch is cut, and it only works on simple shapes — circles, ovals, shields, rectangles. It is the most durable edge available and it will not fray. A laser-cut (hot-cut) border is trimmed by heat, which seals the edge and allows any outline you can draw, including wings, flames, and lettering that pokes out of the main shape. On a back patch we usually recommend merrowed if the outline is simple, because the extra thickness protects the edge that takes the most abuse.`,
      },
      {
        heading: 'Preparing artwork for a large panel',
        body: `Send vector artwork (AI, EPS, or PDF) where you can. Embroidery is stitched from a digitised file, and a vector outline gives our digitiser clean edges to trace rather than guessing at the pixels in a low-resolution JPG. Keep the smallest text above 5mm tall in the finished size — anything under 3mm loses legibility once thread replaces ink, and on a back patch the difference is obvious from across a room. Fine gradients do not translate to thread either; each shade needs its own thread colour, so simplifying a gradient into two or three flat bands usually produces a sharper result than trying to reproduce it exactly.`,
      },
    ],
    useCases: [
      'Motorcycle club colours and chapter rockers',
      'Band and music merchandise',
      'Work crew and trade association jackets',
      'Fan clubs and supporter groups',
      'Event and rally commemorative jackets',
    ],
    specs: [
      { label: 'Typical size', value: '8 to 14 inches wide' },
      { label: 'Border', value: 'Merrowed or laser-cut' },
      { label: 'Backing', value: 'Sew-on, heat seal, velcro, plastic' },
      { label: 'Minimum order', value: '25 pieces' },
      { label: 'Standard turnaround', value: '20 to 30 days after proof approval' },
      { label: 'Express turnaround', value: '10 to 14 days' },
    ],
    faqs: [
      {
        question: 'What is the largest back patch you can make?',
        answer:
          'Up to 14 inches on the longest edge. Beyond that the patch starts to fight the garment rather than sit flat on it, and the weight of the stitching pulls at the fabric it is attached to. If your design needs to be wider, a three-piece set is usually the better answer.',
      },
      {
        question: 'Should I choose iron-on or sew-on backing for a back patch?',
        answer:
          'Sew-on, in almost every case. Heat-seal adhesive is sized for small patches; on a panel this large the adhesive cannot hold the weight through repeated wear, and the corners lift first. We can supply heat-seal backing on a large patch if you ask, but we recommend stitching it down as well.',
      },
      {
        question: 'Can I order a single back patch?',
        answer:
          'Our standard minimum is 25 pieces. We do quote smaller runs, including one-offs, but the per-piece price is much higher because the digitising and machine setup cost is the same whether we make one or a hundred. Contact us with your design and we will quote it.',
      },
    ],
  },

  'biker-patches': {
    name: 'Biker Patches',
    description:
      'Custom biker patches and club rockers built for daily road wear. Weather-resistant threads, custom rocker shapes, sew-on or velcro backing.',
    longDescription: `Biker patches live outdoors. They sit on a vest that gets rained on, sun-bleached, and worn over a leather jacket that never goes in a washing machine. That is a harder brief than a corporate logo patch that spends its life indoors, and it changes what we use — denser stitching that resists snagging, polyester threads that hold colour under UV, and edges finished so they will not fray when a sleeve catches them.`,
    features: [
      'Weather-resistant materials',
      'Club-ready designs',
      'Multiple size options',
      'Custom rocker shapes',
      'Iron-on or sew-on backing',
    ],
    images: ['/2.webp', '/6.webp', '/7.webp', '/8.webp'],
    sections: [
      {
        heading: 'Rockers, centre patches, and the full set',
        body: `A traditional set has three parts: a top rocker carrying the club name, a centre patch with the emblem, and a bottom rocker with the location or chapter. Each is ordered as a separate patch, which means each can be replaced on its own. Many clubs also order small side patches — position, year, memorial patches — that sit on the front of the vest. When you order a full set from us at the same time we colour-match across all pieces in one run, so the reds on the top rocker and the bottom rocker come out identical. Ordering them months apart makes that harder, because thread dye lots shift.`,
      },
      {
        heading: 'Backing options for leather and denim',
        body: `Heat-seal (iron-on) backing does not work on leather. The temperature needed to activate the adhesive will mark or shrink the hide, and most leather vests cannot be pressed at all. For leather, use sew-on backing and have the patch stitched down, or use plastic backing which adds stiffness so the patch keeps its shape against a soft panel. On denim, heat seal works and holds well, though we still suggest a few stitches at the corners on anything larger than about four inches. Velcro backing suits riders who move patches between a summer vest and a winter jacket.`,
      },
      {
        heading: 'Colour, coverage, and how the patch ages',
        body: `Coverage describes how much of the twill base is embroidered over. At 50% coverage the twill colour shows through as part of the design, which keeps the patch lighter and more flexible — good for a patch that folds over a shoulder seam. At 100% coverage no base fabric shows at all, which gives the richest colour and the longest life, at the cost of a stiffer and heavier patch. For club colours worn daily, 100% coverage is worth the extra weight. For a small side patch on a sleeve, 50% or 75% is usually plenty.`,
      },
    ],
    useCases: [
      'Motorcycle club colours and chapter sets',
      'Riding group and chapter identification',
      'Rally and run commemorative patches',
      'Memorial and tribute patches',
      'Support and supporter patches',
    ],
    specs: [
      { label: 'Typical size', value: '3 to 12 inches depending on placement' },
      { label: 'Coverage', value: '50%, 75%, or 100% embroidery' },
      { label: 'Backing', value: 'Sew-on, plastic, velcro, heat seal (denim only)' },
      { label: 'Border', value: 'Merrowed or laser-cut' },
      { label: 'Minimum order', value: '25 pieces' },
      { label: 'Standard turnaround', value: '20 to 30 days after proof approval' },
    ],
    faqs: [
      {
        question: 'Can you match the exact red from our existing club patch?',
        answer:
          'Usually yes. Send us a physical patch or a photograph in daylight and we will match it against our thread chart, then show you the match on the digital proof before production. Thread colour is chosen from a fixed range rather than mixed, so an exact match is not always possible — but we will tell you honestly how close we can get before you approve.',
      },
      {
        question: 'Will an iron-on patch stay on a leather vest?',
        answer:
          'No. Heat-seal backing needs an iron at a temperature that will damage leather, and even if applied it will not bond properly to the hide. Order sew-on backing for anything going on leather and have it stitched around the edge.',
      },
      {
        question: 'How long does a full three-piece set take?',
        answer:
          'The same 20 to 30 days as a single patch — the pieces are produced in parallel, not one after another. Express production in 10 to 14 days is available. The clock starts when you approve the digital proof, not when you place the order, so replying quickly to the proof is the fastest way to bring the date forward.',
      },
    ],
  },

  'cotton-patches': {
    name: 'Cotton Patches',
    description:
      'Soft cotton twill patches with a natural handfeel. Ideal for casual apparel, tote bags and caps where a stiff patch would feel wrong.',
    longDescription: `Cotton patches use a woven cotton twill base rather than the polyester twill used on most embroidered patches. The difference is in the hand — cotton sits softer against skin, drapes with the garment instead of holding its own shape, and takes on a slightly matte, worn-in look that suits casual apparel. It is the right base when the patch should feel like part of the garment rather than an object attached to it.`,
    features: [
      'Soft cotton twill',
      'Comfortable on skin',
      'Great for casual wear',
      'Washable and durable',
      'Eco-friendly option',
    ],
    images: ['/4 (2).webp', '/3.webp', '/5.webp', '/7.webp'],
    sections: [
      {
        heading: 'Cotton twill against polyester twill',
        body: `Polyester twill is the default for a reason: it resists shrinking, holds bright colour, and stands up to sun and rain. Cotton trades some of that for comfort. It breathes, it softens with washing, and it does not have the slight sheen polyester carries. The trade-offs are real — cotton can shrink slightly on its first hot wash, and unbleached cotton fades faster in strong sun than polyester does. For a patch on a t-shirt, a tote, or a child's garment, that is a fair exchange. For a patch that lives on the back of a jacket outdoors, polyester is the better base.`,
      },
      {
        heading: 'Choosing coverage on a cotton base',
        body: `Because the cotton base is part of the look, cotton patches are often ordered at 50% or 75% coverage rather than 100%. Leaving the twill exposed keeps the patch soft and lets the natural texture of the fabric read as part of the design. It also keeps the patch lighter, which matters on thin fabrics where a heavy patch pulls the garment out of shape. If you want the base colour to show, tell us at quote stage — we stock cotton twill in a range of colours and can build the design around the base rather than covering it.`,
      },
      {
        heading: 'Washing and care',
        body: `Cotton patches handle normal machine washing. Turn the garment inside out, wash at 30 to 40 degrees, and avoid bleach, which attacks the cotton base faster than it attacks the thread. Tumble drying is fine on low but repeated hot drying will shrink the base slightly and can pucker the stitching, so line drying extends the life of the patch. If the patch is heat-sealed on, avoid ironing directly over it — press from the reverse of the garment instead.`,
      },
    ],
    useCases: [
      'T-shirts, sweatshirts, and casual apparel',
      'Tote bags and canvas accessories',
      'Children and school wear',
      'Craft, maker, and small-brand labelling',
      'Caps and soft headwear',
    ],
    specs: [
      { label: 'Base fabric', value: 'Woven cotton twill' },
      { label: 'Coverage', value: '50%, 75%, or 100% embroidery' },
      { label: 'Backing', value: 'Heat seal, sew-on, non-woven, peel and stick' },
      { label: 'Wash care', value: 'Machine wash 30 to 40 degrees, inside out' },
      { label: 'Minimum order', value: '25 pieces' },
      { label: 'Standard turnaround', value: '20 to 30 days after proof approval' },
    ],
    faqs: [
      {
        question: 'Are cotton patches less durable than polyester ones?',
        answer:
          'For everyday indoor wear the difference is small. The gap shows up in sustained sun and heavy rain, where polyester holds colour and shape better. If the patch will live outdoors on a work or riding garment, choose polyester twill; for apparel and accessories, cotton lasts perfectly well.',
      },
      {
        question: 'Will a cotton patch shrink?',
        answer:
          'Slightly, on the first hot wash. We account for this in production, but washing cool and line drying avoids it almost entirely. The stitched area does not shrink, so heavy shrinkage on the base can pucker the edges — which is the main reason we recommend a cool wash.',
      },
      {
        question: 'Can I have the cotton base colour showing in the design?',
        answer:
          'Yes, and it often looks better than covering it. Order at 50% or 75% coverage and tell us which base colour you want. We will show the exposed twill on the digital proof so you can see exactly how much of it reads in the finished patch.',
      },
    ],
  },

  'embroidered-patches': {
    name: 'Embroidered Patches',
    description:
      'Classic custom embroidered patches with 50%, 75% or 100% thread coverage. Merrowed or laser-cut edges, free digital proof, 25-piece minimum.',
    longDescription: `Embroidered patches are the baseline every other patch type is measured against. A needle lays thread onto a twill base in the pattern our digitiser maps out, building up a raised, textured surface that catches light differently depending on the stitch direction. That texture is why an embroidered patch reads as substantial in a way a printed one does not, and it is why the format has survived more than a century of cheaper alternatives.`,
    features: [
      'High thread count',
      'Precise detailing',
      'Vibrant colors',
      'Multiple coverage options',
      'Premium quality threads',
    ],
    images: ['/4 (2).webp', '/2.webp', '/4 (1).webp', '/6.webp'],
    sections: [
      {
        heading: 'What 50%, 75%, and 100% coverage actually mean',
        body: `Coverage is the share of the patch surface that has thread on it. At 50%, roughly half the design is stitched and the twill base shows through as a deliberate background colour — the patch stays light and flexible and costs less. At 75%, most of the surface is stitched with the base showing at the edges or in specific areas. At 100%, no base fabric is visible anywhere; the entire face is thread. Colour is richest and life is longest at 100%, but the patch is stiffer and heavier. Most logo and club work is ordered at 100%; casual apparel patches often look better at 50 or 75.`,
      },
      {
        heading: 'How your artwork becomes stitches',
        body: `Embroidery machines do not read your logo file. A digitiser converts it into a stitch map — deciding the direction each area is filled, where the machine travels between areas, and how the underlay stitches sit beneath the visible thread to stop it sinking into the fabric. This is why file quality matters so much. Vector files (AI, EPS, PDF) give clean outlines to trace. Raster files (PNG, JPG, PSD) work if the resolution is high, but a small or blurry image forces the digitiser to interpret edges, and the result is a patch that is close to your logo rather than the same as it.`,
      },
      {
        heading: 'Detail limits worth knowing before you design',
        body: `Thread is thicker than ink, so there is a floor on how small a detail can go. Text below 3mm in the finished size is not reliably readable; above 5mm it is comfortable. Hairline strokes disappear entirely, so thin outlines need thickening or removing. Gradients cannot be blended the way print blends them — each shade is a separate thread colour, so a smooth fade becomes visible bands. None of this means a complex logo cannot be made into a patch; it means the design should be adapted for thread rather than reproduced literally. We flag anything that will not translate when we send the digital proof.`,
      },
    ],
    useCases: [
      'Company and brand logo patches',
      'Uniform and workwear identification',
      'Clubs, societies, and membership badges',
      'Sports teams and supporter merchandise',
      'Events, conferences, and commemorative runs',
    ],
    specs: [
      { label: 'Base fabric', value: 'Polyester or cotton twill' },
      { label: 'Coverage', value: '50%, 75%, or 100% embroidery' },
      { label: 'Border', value: 'Merrowed or laser-cut' },
      { label: 'Backing', value: 'Heat seal, sew-on, velcro, plastic, non-woven, peel and stick' },
      { label: 'Minimum text height', value: '5mm recommended, 3mm absolute floor' },
      { label: 'Minimum order', value: '25 pieces' },
    ],
    faqs: [
      {
        question: 'Which coverage should I choose?',
        answer:
          'Choose 100% when colour richness and durability matter most — logo patches, club colours, uniform badges. Choose 50% or 75% when you want a lighter, softer patch, or when the twill base colour is part of the design. If you are unsure, tell us where the patch will be worn and we will recommend one.',
      },
      {
        question: 'Can you embroider small text?',
        answer:
          'Yes, down to about 3mm, but we do not recommend it. Below 3mm the letterforms close up and stop being readable once thread replaces line. At 5mm and above text stays clean. If your design has small print, the usual fix is to enlarge the patch slightly or drop the least important line.',
      },
      {
        question: 'What file should I send?',
        answer:
          'Vector is best — AI, EPS, or PDF. We also accept PNG, JPG, and PSD, and we can work from a clear sketch or a photograph of an existing patch. The higher the resolution, the closer the finished patch will be to what you have in mind.',
      },
    ],
  },

  'iron-patches': {
    name: 'Iron Patches',
    description:
      'Heat-seal iron-on patches that apply in under a minute with a household iron. No sewing required. Works on cotton, denim, and canvas.',
    longDescription: `An iron-on patch carries a layer of heat-activated adhesive on its back. Press it with a hot iron and the adhesive melts into the weave of the fabric underneath, then sets as it cools. It is the fastest way to attach a patch — under a minute per piece, no needle, no thread — which is why it is the default choice for anything being handed out at scale or applied by the person wearing it.`,
    features: [
      'Heat-seal backing',
      'Easy application',
      'Strong adhesion',
      'No sewing required',
      'Works on most fabrics',
    ],
    images: ['/3.webp', '/5.webp', '/7.webp', '/4 (2).webp'],
    sections: [
      {
        heading: 'How to apply an iron-on patch properly',
        body: `Set a dry iron to its cotton setting with steam turned off — steam interferes with the adhesive. Lay the garment flat on a hard surface, not an ironing board with give in it, because you need firm pressure. Position the patch, cover it with a thin cotton cloth or a sheet of baking paper, and press down hard for 30 to 45 seconds without sliding the iron around. Turn the garment inside out and press the same spot from the reverse for another 20 seconds. Let it cool completely before touching it. Most failures come from too little pressure or from moving the iron rather than holding it still.`,
      },
      {
        heading: 'Fabrics that will not take heat seal',
        body: `Heat-seal backing needs a fabric that can survive iron temperature and has a weave the adhesive can grip. Cotton, denim, canvas, and polycotton all work well. Leather and vinyl will not — they mark or shrink long before the adhesive activates. Nylon and most waterproof or technical outdoor fabrics melt at the temperature required. Heavily waxed or water-repellent coatings stop the adhesive bonding at all. On any of these, order sew-on or velcro backing instead. If you are not sure what your garment is made of, tell us and we will recommend a backing.`,
      },
      {
        heading: 'How long iron-on backing lasts',
        body: `Applied correctly to the right fabric, a heat-seal patch survives normal wear and regular washing for years. It is not, however, permanent in the way stitching is. Repeated hot washes, tumble drying, and flexing at a seam will eventually lift a corner, and once a corner lifts the rest follows. For anything that will be washed weekly, worn hard, or is larger than about four inches, we suggest ironing the patch on to position it and then adding a line of stitching around the edge. You get the easy placement of heat seal with the permanence of a sew-on.`,
      },
    ],
    useCases: [
      'Event giveaways and promotional handouts',
      'School uniforms and scout badges',
      'Repairing and customising denim',
      'Retail patches sold to customers for self-application',
      'Team kit where sewing is impractical',
    ],
    specs: [
      { label: 'Backing type', value: 'Heat-seal adhesive' },
      { label: 'Application', value: '30 to 45 seconds with a dry iron on cotton setting' },
      { label: 'Suitable fabrics', value: 'Cotton, denim, canvas, polycotton' },
      { label: 'Unsuitable fabrics', value: 'Leather, vinyl, nylon, waterproof and technical fabrics' },
      { label: 'Minimum order', value: '25 pieces' },
      { label: 'Standard turnaround', value: '20 to 30 days after proof approval' },
    ],
    faqs: [
      {
        question: 'Can I wash a garment with an iron-on patch?',
        answer:
          'Yes. Turn it inside out, wash at 30 to 40 degrees, and skip the tumble dryer where you can. Hot washes and hot drying are what shorten the life of the bond. Avoid ironing directly over the patch afterwards — press from the reverse side of the garment.',
      },
      {
        question: 'The patch is peeling at one corner. Can I re-iron it?',
        answer:
          'Usually yes. Press the lifted corner again with a cloth over it, hold firm pressure for 30 seconds, and let it cool fully. If it lifts a second time the fabric is probably not holding the adhesive well, and a few stitches around the edge is the reliable fix.',
      },
      {
        question: 'Will iron-on work on a leather jacket?',
        answer:
          'No. The iron temperature needed will mark or shrink the leather, and the adhesive does not bond to hide. Order sew-on backing for leather and have the patch stitched around the edge.',
      },
    ],
  },

  'jacket-patches': {
    name: 'Jacket Patches',
    description:
      'Custom jacket patches built for outerwear — weather-resistant threads, backing matched to your jacket fabric, sizes for chest, sleeve or back.',
    longDescription: `A jacket patch has to cope with things an indoor patch never faces: rain, sun, temperature swings, and the constant flexing where a sleeve bends at the elbow. It also has to attach to a fabric that might be leather, waxed cotton, nylon shell, or heavy denim — and those four surfaces need four different answers. Most of the decisions on a jacket patch order are really decisions about the jacket.`,
    features: [
      'Durable construction',
      'Weather resistant',
      'Multiple sizes',
      'Custom placement options',
      'Works with all jacket types',
    ],
    images: ['/4 (1).webp', '/6.webp', '/8.webp', '/2.webp'],
    sections: [
      {
        heading: 'Matching the backing to the jacket fabric',
        body: `On denim and canvas, heat-seal backing bonds well and holds through normal wear. On leather, heat seal is not an option at all — the iron will mark the hide — so sew-on is the only reliable choice, usually with plastic backing added to keep the patch flat against a soft panel. On nylon and technical shells, heat is a problem again because the fabric melts, and stitching punches holes through a waterproof membrane, so velcro backing with the loop side sewn or bonded to the jacket is often the cleanest answer. Tell us what the jacket is made of and we will specify the backing.`,
      },
      {
        heading: 'Placement and size that actually work',
        body: `Left chest patches usually run 3 to 4 inches wide, sitting above the pocket. Sleeve patches run 3 to 4 inches and need to be narrow enough that they do not wrap around the curve of the arm — anything wider than about four inches on a sleeve will crease. Back patches run 8 to 14 inches. The mistake we see most often is a chest patch designed at a size that made sense on screen but crowds the pocket seam in reality. If you send us the jacket model or a photograph with a ruler in frame, we will check the proportions before production.`,
      },
      {
        heading: 'Holding up to weather',
        body: `Polyester thread holds colour under UV far better than rayon, which is why we use it as standard on outerwear. At 100% coverage no base fabric is exposed, so there is nothing for water to soak into and nothing to fade unevenly. A merrowed border seals the edge against fraying where a laser-cut edge on a heavily flexed area can eventually soften. None of this makes a patch waterproof — thread absorbs water and dries out again — but it does mean a well-built patch on a jacket will still look right after several winters.`,
      },
    ],
    useCases: [
      'Work and trade crew jackets',
      'Motorcycle and riding jackets',
      'Team and club outerwear',
      'Uniform and security jackets',
      'Branded staff jackets for events',
    ],
    specs: [
      { label: 'Chest patch size', value: '3 to 4 inches wide' },
      { label: 'Sleeve patch size', value: '3 to 4 inches wide' },
      { label: 'Back patch size', value: '8 to 14 inches wide' },
      { label: 'Thread', value: 'UV-resistant polyester' },
      { label: 'Backing', value: 'Chosen to match the jacket fabric' },
      { label: 'Minimum order', value: '25 pieces' },
    ],
    faqs: [
      {
        question: 'Which backing should I order for a waterproof jacket?',
        answer:
          'Velcro, in almost every case. Ironing melts the shell fabric and stitching puts holes through the waterproof membrane, which is exactly what you paid for. With velcro the loop side attaches to the jacket once and the patch comes on and off after that.',
      },
      {
        question: 'Will the patch fade if the jacket lives outdoors?',
        answer:
          'Far less than you would expect. We use polyester thread, which holds colour under UV much better than rayon. Strong colours in constant direct sun will soften over several years, but a jacket patch in normal use will still read as intended long after the jacket itself starts to look worn.',
      },
      {
        question: 'Can you put patches in different places on the same jacket?',
        answer:
          'Yes, and it is common — a chest logo, a sleeve badge, and a back panel are often ordered together. Ordering them in one run means we colour-match across all three, which is harder to guarantee if you order them months apart.',
      },
    ],
  },

  'military-patches': {
    name: 'Military Patches',
    description:
      'Custom military-style patches in full colour or subdued tones, with hook-and-loop backing for uniform wear. Unit, squadron and morale designs.',
    longDescription: `Military-style patches follow conventions that most other patch work does not. Colour is often deliberately muted rather than bright, backing is almost always hook-and-loop so patches can be swapped between uniforms, and the design usually has to work at a small size on a sleeve or chest panel. We make patches to these conventions for units, veteran groups, cadet organisations, and collectors.`,
    features: [
      'Authentic styling',
      'Regulation compliant',
      'Velcro backing option',
      'Subdued color options',
      'High durability',
    ],
    images: ['/5.webp', '/7.webp', '/4 (2).webp', '/3.webp'],
    sections: [
      {
        heading: 'Full colour against subdued',
        body: `Full-colour patches use the design's actual colours and are typically worn on dress uniforms, jackets, and civilian clothing. Subdued patches replace those colours with low-contrast tones — olive drab, coyote brown, black on grey, spice brown — so the patch does not stand out against field uniform. Subdued designs need more care at the digitising stage: when every colour sits in a narrow tonal range, shapes that were separated by bright colour in the original now have to be separated by stitch direction and outline instead. We adjust the design for that rather than simply swapping the thread colours.`,
      },
      {
        heading: 'Hook-and-loop backing and how it is specified',
        body: `The standard for uniform wear is hook (the rough side) on the back of the patch, with loop (the soft side) already sewn onto the uniform. That is what we supply unless you tell us otherwise. Some organisations run it the other way round, and some want a two-piece set with both sides supplied so the loop can be attached to a garment that does not already have it. Say which you need at quote stage. Hook backing adds thickness and stiffness, so very small patches under about two inches can end up feeling like a chip rather than a badge — for those we usually suggest sew-on instead.`,
      },
      {
        heading: 'What we can and cannot reproduce',
        body: `We make patches to your artwork. We do not verify whether a given design is authorised for wear by any particular force, and regulations on insignia differ by country, service, and unit. If the patch is going on a serving uniform, check your own dress regulations for permitted size, colour, and placement before ordering — those rules are specific and they change. We are happy to produce to a written specification if you have one, including exact dimensions and thread colour references, and we will match it on the digital proof so you can confirm before we produce.`,
      },
    ],
    useCases: [
      'Unit, squadron, and detachment insignia',
      'Veteran and regimental association patches',
      'Cadet and reserve force badges',
      'Morale and deployment patches',
      'Reenactment and collector reproductions',
    ],
    specs: [
      { label: 'Typical size', value: '2 to 5 inches' },
      { label: 'Colour options', value: 'Full colour or subdued' },
      { label: 'Backing', value: 'Hook-and-loop standard, sew-on available' },
      { label: 'Border', value: 'Merrowed or laser-cut' },
      { label: 'Coverage', value: '100% recommended for uniform wear' },
      { label: 'Minimum order', value: '25 pieces' },
    ],
    faqs: [
      {
        question: 'Do you supply both the hook and the loop side?',
        answer:
          'By default the patch comes with hook backing, on the assumption the uniform already carries loop. If you need the matching loop supplied as well, say so when you order and we will include it.',
      },
      {
        question: 'Can you match a specific subdued colour specification?',
        answer:
          'If you give us a thread colour reference or a physical sample, we will match it as closely as our thread range allows and show you the match on the proof. Where an exact match is not available we will tell you before production rather than after.',
      },
      {
        question: 'Is a patch you make authorised for wear on my uniform?',
        answer:
          'That is not something we can determine. We produce to the artwork and specification you supply. Insignia regulations vary by country, service, and unit and change over time, so check your own dress regulations before ordering anything intended for a serving uniform.',
      },
    ],
  },

  'morale-patches': {
    name: 'Morale Patches',
    description:
      'Custom morale patches with hook-and-loop backing — small, swappable, and built for teams that want personality on their kit.',
    longDescription: `Morale patches are the informal end of the patch world: small, often funny, usually swapped around rather than permanently attached. They sit on plate carriers, backpacks, caps, and jacket sleeves, and the whole point is that they come off as easily as they go on. That makes velcro backing near-universal and keeps the sizes small — most orders land between two and four inches.`,
    features: [
      'Fun designs',
      'Velcro backing',
      'UV resistant',
      'Compact sizes',
      'Easy to swap',
    ],
    images: ['/6.webp', '/8.webp', '/2.webp', '/4 (1).webp'],
    sections: [
      {
        heading: 'Designing for a small canvas',
        body: `Two to four inches is not much room, and morale patch designs usually want to fit a joke, an image, and a line of text into it. Something has to give. The reliable approach is one strong central image and at most a short line of text at 5mm or above — anything smaller stops being readable at arm's length, which defeats the purpose. Heavy outlines help shapes read at small size, where fine internal detail turns to mush. If your design is text-heavy, a wider rectangle at three by one inches often works better than trying to squeeze it into a square.`,
      },
      {
        heading: 'Embroidered or PVC',
        body: `Both formats are common for morale patches and they look quite different. Embroidered patches have thread texture and a traditional feel, handle small text reasonably, and cost less at low volumes. PVC patches are moulded soft rubber — they hold much finer detail, can be built with raised 3D layers, are completely waterproof, and wipe clean, which matters on kit that gets muddy. PVC has a higher setup cost because a mould has to be made, so it makes more sense on larger runs. For a design with fine linework or a lot of small elements, PVC will reproduce it more faithfully.`,
      },
      {
        heading: 'Velcro backing in practice',
        body: `Standard is hook backing on the patch, since most plate carriers, packs, and caps designed for morale patches already have loop panels. If you are attaching to a garment without a loop panel, order the two-piece option so you get a loop square to sew or stick on first. Hook backing stiffens the patch, which is helpful at this size — it keeps the patch flat rather than curling at the corners. Patches come off and go back on hundreds of times without the hook wearing out; what fails first is usually the loop panel on the garment, not the patch.`,
      },
    ],
    useCases: [
      'Team, squad, and crew identity patches',
      'Airsoft and milsim loadouts',
      'EMS, fire, and search-and-rescue kit',
      'Outdoor and hiking pack decoration',
      'Convention, event, and community group swaps',
    ],
    specs: [
      { label: 'Typical size', value: '2 to 4 inches' },
      { label: 'Format', value: 'Embroidered or PVC rubber' },
      { label: 'Backing', value: 'Hook-and-loop standard' },
      { label: 'Border', value: 'Merrowed or laser-cut' },
      { label: 'Minimum text height', value: '5mm recommended' },
      { label: 'Minimum order', value: '25 pieces' },
    ],
    faqs: [
      {
        question: 'Should I choose embroidered or PVC for a morale patch?',
        answer:
          'Embroidered if you want thread texture and a traditional look, or if the run is small. PVC if the design has fine detail, needs to be waterproof and wipe-clean, or you want raised 3D layers. PVC costs more to set up because a mould is made, so it works out better on larger quantities.',
      },
      {
        question: 'Will the velcro wear out from swapping patches?',
        answer:
          'The hook on the patch outlasts hundreds of cycles. What usually goes first is the loop panel on the garment or carrier, which flattens with use. Replacing a loop panel is cheap and easy; the patch itself keeps working.',
      },
      {
        question: 'How small can the text on a morale patch be?',
        answer:
          'Keep it at 5mm or above in the finished size. Below 3mm the letters close up and become unreadable in thread. If the design needs more text than fits at 5mm, either make the patch wider or move to PVC, which holds finer detail than embroidery.',
      },
    ],
  },

  'custom-keychain': {
    name: 'Custom Keychain',
    description:
      'Custom embroidered and PVC keychains with metal split ring. Double-sided options, compact sizes, ideal for promotional giveaways.',
    longDescription: `A keychain is a patch with a ring on it, which sounds simple until you consider that it gets handled every day, dropped, sat on, and dragged through a pocket alongside keys. It needs finished edges on both faces, a backing stiff enough to keep its shape, and a fitting that will not open under load. Done properly, a keychain is one of the longest-lived promotional items you can hand out — people keep them for years because they are useful.`,
    features: [
      'Durable construction',
      'Metal ring included',
      'Custom shapes',
      'Promotional ready',
      'Compact design',
    ],
    images: ['/7.webp', '/4 (2).webp', '/5.webp', '/3.webp'],
    sections: [
      {
        heading: 'Single-sided and double-sided',
        body: `A single-sided keychain has the design on one face and a plain backing on the other, which is cheaper and works fine when the keychain hangs against a bag. A double-sided keychain carries artwork on both faces — often a logo on one side and contact details or a slogan on the other — and since a keychain spins freely in the hand, double-sided means the design is visible whichever way it lands. For promotional work we usually recommend double-sided for that reason. Both formats get a sealed edge so nothing frays where fingers grip it.`,
      },
      {
        heading: 'Embroidered or PVC keychains',
        body: `Embroidered keychains have thread texture and a soft, traditional feel, and suit designs that already work as a patch. PVC keychains are moulded rubber: harder wearing, completely waterproof, wipeable, and capable of holding much finer detail and 3D relief. In a pocket full of keys, PVC survives abrasion noticeably better than thread does. If the keychain is a giveaway that needs to still look good in a year, PVC is the safer choice. If it is part of a range that matches your embroidered patches, thread keeps the family look consistent.`,
      },
      {
        heading: 'Size, shape, and fittings',
        body: `Most keychains land between 1.5 and 3 inches on the longest edge. Smaller than that and the design stops being legible; larger and it becomes awkward in a pocket. Custom outlines are straightforward on PVC, where the mould can be any shape, and possible on embroidered versions with a laser-cut edge. Every keychain ships with a metal split ring as standard. If you need a different fitting — a swivel clip, a lobster clasp, a ball chain, or a wrist strap — specify it at quote stage, since it changes both the price and how the top of the design needs to be built.`,
      },
    ],
    useCases: [
      'Trade show and conference giveaways',
      'Retail and merchandise ranges',
      'Club and membership gifts',
      'Staff onboarding and welcome packs',
      'Charity fundraising items',
    ],
    specs: [
      { label: 'Typical size', value: '1.5 to 3 inches' },
      { label: 'Format', value: 'Embroidered or PVC rubber' },
      { label: 'Faces', value: 'Single-sided or double-sided' },
      { label: 'Fitting', value: 'Metal split ring standard; clips and straps on request' },
      { label: 'Minimum order', value: '25 pieces' },
      { label: 'Standard turnaround', value: '20 to 30 days after proof approval' },
    ],
    faqs: [
      {
        question: 'Can I have a different design on each side?',
        answer:
          'Yes. A logo on one face and contact details or a slogan on the other is the most common combination. Send both artworks and we will show each face separately on the digital proof.',
      },
      {
        question: 'Can you make the keychain a custom shape?',
        answer:
          'Yes. PVC can be moulded to any outline you can draw. Embroidered keychains can take a custom outline with a laser-cut edge, though very intricate shapes hold their form better in PVC.',
      },
      {
        question: 'Can I get a clip instead of a split ring?',
        answer:
          'Yes — swivel clips, lobster clasps, ball chains, and wrist straps are all available. Mention it when you request a quote, as the fitting affects both the price and how the top of the design is constructed.',
      },
    ],
  },

  'sew-on-patches': {
    name: 'Sew On Patches',
    description:
      'Sew-on patches with a clean stitching edge for permanent attachment. The most durable backing available, and the only option for leather and technical fabrics.',
    longDescription: `Sew-on is the oldest way to attach a patch and still the most reliable. There is no adhesive to fail, no hook-and-loop to flatten, and no fabric type it refuses to work with. A stitched patch stays on through years of washing, weather, and hard wear, and when the garment finally wears out the patch can usually be unpicked and moved to a new one.`,
    features: [
      'Permanent attachment',
      'Clean edges',
      'All fabric types',
      'Most durable option',
      'Traditional styling',
    ],
    images: ['/8.webp', '/2.webp', '/6.webp', '/4 (1).webp'],
    sections: [
      {
        heading: 'When sew-on is the only sensible choice',
        body: `Leather cannot be ironed, so heat seal is out and sew-on is the answer. Technical and waterproof shells melt under an iron, though stitching them punches through the membrane, so velcro is usually better there. Anything large — a back panel, a big chest logo — carries too much weight for adhesive alone. Garments washed at high temperature every week, like workwear and chef whites, will eventually lift a heat-sealed patch but not a stitched one. And if a patch has to survive being moved to a replacement garment later, only stitching lets you unpick it cleanly.`,
      },
      {
        heading: 'How the edge is built for stitching',
        body: `A sew-on patch is finished with either a merrowed border — a thick overlocked edge that gives the needle something solid to pass through — or a laser-cut edge sealed by heat. Merrowed is the more traditional and more forgiving of the two: the raised edge hides slight inconsistencies in hand stitching and will not fray if a stitch is caught. Laser-cut allows complex outlines that merrowing cannot follow, and it sits flatter against the garment. For a patch someone will stitch on at home, merrowed is easier to work with.`,
      },
      {
        heading: 'Attaching it well',
        body: `Pin or tack the patch in place first and check the position in a mirror before committing — a stitched patch is far harder to reposition than an ironed one. Use a thread that matches the patch border rather than the garment, so stitches disappear into the edge. A simple running stitch around the perimeter, roughly 3mm in from the edge, is enough for most patches; a whip stitch over the border is stronger and traditional on club colours. On thick leather, a machine with a leather needle or a professional alterations service will do a better job than hand stitching. Many customers order heat-seal backing as well, iron the patch on to hold the position, then stitch it — the adhesive acts as a pin.`,
      },
    ],
    useCases: [
      'Leather vests and jackets',
      'Workwear and uniforms washed at high temperature',
      'Large back patches and chest panels',
      'Club colours and heirloom garments',
      'Scout, cadet, and school badges',
    ],
    specs: [
      { label: 'Attachment', value: 'Hand or machine stitching' },
      { label: 'Border', value: 'Merrowed or laser-cut' },
      { label: 'Suitable fabrics', value: 'All, including leather and heavy canvas' },
      { label: 'Durability', value: 'Highest of all backing types' },
      { label: 'Minimum order', value: '25 pieces' },
      { label: 'Standard turnaround', value: '20 to 30 days after proof approval' },
    ],
    faqs: [
      {
        question: 'Can I get heat-seal backing on a patch I plan to sew?',
        answer:
          'Yes, and it is a good combination. Iron the patch on to lock the position, then stitch around the edge. The adhesive stops the patch shifting while you sew, and the stitching provides the permanence.',
      },
      {
        question: 'What thread should I use to sew it on?',
        answer:
          'Match the thread to the patch border rather than the garment — the stitches then vanish into the edge. Polyester thread outlasts cotton. A running stitch about 3mm in from the edge is enough for most patches; a whip stitch over the border is stronger.',
      },
      {
        question: 'Can a sew-on patch be removed later?',
        answer:
          'Yes, which is one of its advantages. Unpick the stitches carefully and the patch lifts off intact, ready to move to another garment. Adhesive backings cannot be removed cleanly once bonded.',
      },
    ],
  },

  'velcro-patches': {
    name: 'Velcro Patches',
    description:
      'Hook-and-loop velcro patches that swap in seconds. Standard hook backing, two-piece sets available, ideal for tactical gear and workwear.',
    longDescription: `Velcro backing turns a patch into something removable. Instead of committing a design to a garment permanently, the hook side is bonded to the patch and the loop side lives on the garment, so patches come off for washing, get swapped between jackets, or change with the job. For anyone who needs different identification on different days, it is the only backing that makes sense.`,
    features: [
      'Hook and loop backing',
      'Easy to swap',
      'Tactical ready',
      'Strong attachment',
      'Reusable',
    ],
    images: ['/4 (2).webp', '/3.webp', '/7.webp', '/5.webp'],
    sections: [
      {
        heading: 'Which side goes on the patch',
        body: `Standard is hook — the rough, scratchy side — on the back of the patch, with loop on the garment. That is what tactical gear, plate carriers, and most uniform panels are built to expect, and it is what we supply unless you say otherwise. Some organisations reverse it. If your garment has no loop panel at all, order the two-piece option: you get the patch with hook backing plus a matching loop square to sew or adhere to the garment first. Getting this wrong is the single most common ordering mistake on velcro patches, so it is worth confirming before you approve the proof.`,
      },
      {
        heading: 'What velcro backing does to the patch',
        body: `Hook backing adds thickness and considerable stiffness. On a patch of three inches or more that is helpful — the patch stays flat and does not curl at the corners. On very small patches, under about two inches, the stiffness starts to dominate and the patch feels like a rigid chip rather than a badge; for those we usually suggest sew-on instead. The extra thickness also means a velcro patch stands slightly proud of the garment, which is worth considering if it sits under a strap or a pack that will rub against it.`,
      },
      {
        heading: 'Attaching the loop side and keeping it working',
        body: `The loop panel can be sewn on, which is the durable option, or supplied with adhesive backing for a quick fix. Sewing is better on anything that will be washed regularly, because adhesive loosens over time in hot water. Once fitted, the pairing lasts through hundreds of swap cycles. The part that eventually degrades is the loop, which mats down and fills with lint; brushing it out with a stiff brush restores most of the grip, and replacing a loop panel is cheap when it finally goes. The hook side on the patch generally outlives the garment.`,
      },
    ],
    useCases: [
      'Tactical vests and plate carriers',
      'Security and event staff uniforms',
      'Workwear where names or roles change',
      'Waterproof jackets that cannot be stitched',
      'Collectors who rotate morale patches',
    ],
    specs: [
      { label: 'Standard configuration', value: 'Hook on patch, loop on garment' },
      { label: 'Two-piece option', value: 'Patch plus matching loop square' },
      { label: 'Recommended minimum size', value: '2 inches' },
      { label: 'Loop attachment', value: 'Sew-on or adhesive' },
      { label: 'Minimum order', value: '25 pieces' },
      { label: 'Standard turnaround', value: '20 to 30 days after proof approval' },
    ],
    faqs: [
      {
        question: 'Do I get both the hook and loop sides?',
        answer:
          'By default you get hook on the patch only, since most tactical gear already has loop panels. If your garment has no loop, order the two-piece option and we will include a matching loop square to attach first.',
      },
      {
        question: 'Can I wash a garment with the velcro patch attached?',
        answer:
          'Remove the patch first. Washing with it attached lets the hook catch on other garments and fills the loop with lint, which weakens the grip over time. Take the patch off, wash, and put it back.',
      },
      {
        question: 'The velcro is not gripping like it used to. What can I do?',
        answer:
          'It is almost always the loop panel, not the patch. Loop mats down and fills with fibres. Brush it firmly with a stiff brush to lift the pile and clear the lint. If that does not restore it, replacing the loop panel is inexpensive and the patch keeps working.',
      },
    ],
  },

  'airsoft-patches': {
    name: 'Airsoft Patches',
    description:
      'Custom airsoft team patches with velcro backing. Subdued or full-colour, IR-friendly tones, sized for plate carriers and sleeves.',
    longDescription: `Airsoft patches solve a practical problem before they do anything else: on a field full of people in similar kit, teams need to tell each other apart quickly. That means designs that read at distance, colours chosen for the environment being played, and velcro backing so patches change between games and between teams. Everything else — the artwork, the jokes, the unit crests — sits on top of that.`,
    features: [
      'Team identification',
      'Velcro backing',
      'Subdued options',
      'Durable materials',
      'Custom team designs',
    ],
    images: ['/2.webp', '/4 (1).webp', '/8.webp', '/4 (2).webp'],
    sections: [
      {
        heading: 'Designing something that reads at distance',
        body: `A patch that looks great on a screen can be unreadable across a field. Strong silhouettes, high contrast between the main shapes, and heavy outlines carry much further than fine internal detail. Text should be short and at least 5mm tall — a team name or a three-letter callsign works, a motto in small print does not. If your team needs both a detailed crest and quick identification, the usual answer is two patches: a detailed one on the chest for close range and a simple high-contrast marker on the shoulder or back.`,
      },
      {
        heading: 'Subdued colours and playing environment',
        body: `Full-colour patches are bright and read well, which is exactly what you want for a team marker and exactly what you do not want on a loadout meant to blend in. Subdued patches use muted tones — olive, coyote, black on grey — and disappear at range. Which you choose depends on the field: woodland play favours greens and browns, CQB and urban sites favour greys and blacks. Many teams order both, running full colour for organised team games and subdued for milsim events. Designing a subdued patch takes more care, because shapes that were separated by colour now have to be separated by outline and stitch direction.`,
      },
      {
        heading: 'Surviving a season of play',
        body: `Airsoft kit gets dragged through mud, rained on, and thrown in a car boot still wet. Embroidered patches handle this well at 100% coverage, where no base fabric is exposed to soak up water, though thread does hold dirt and needs occasional brushing. PVC rubber patches handle it better still — completely waterproof, and mud wipes straight off with a damp cloth. For a team playing most weekends, PVC usually looks better after a season. For a small run or a design you want in thread, 100% coverage embroidery with a merrowed border is the durable configuration.`,
      },
    ],
    useCases: [
      'Airsoft team and squad identification',
      'Milsim unit and event patches',
      'Callsign and role markers',
      'Site and event commemorative patches',
      'Loadout personalisation',
    ],
    specs: [
      { label: 'Typical size', value: '2 to 4 inches' },
      { label: 'Colour options', value: 'Full colour or subdued' },
      { label: 'Format', value: 'Embroidered or PVC rubber' },
      { label: 'Backing', value: 'Hook-and-loop standard' },
      { label: 'Coverage', value: '100% recommended for wet-weather play' },
      { label: 'Minimum order', value: '25 pieces' },
    ],
    faqs: [
      {
        question: 'Should our team patches be subdued or full colour?',
        answer:
          'It depends on the field and the format. Full colour reads better for team identification in organised games; subdued suits milsim and any loadout meant to blend in. Plenty of teams order both and swap them on the velcro depending on the event.',
      },
      {
        question: 'Which survives a muddy season better, embroidered or PVC?',
        answer:
          'PVC. It is waterproof and wipes clean, where thread holds dirt and needs brushing out. Embroidered patches at 100% coverage do hold up well, but after a full season of wet play PVC will look noticeably fresher.',
      },
      {
        question: 'How small can our team name be on the patch?',
        answer:
          'Keep text at 5mm or above. Below that it stops being readable in thread, and on a patch meant to identify your team at distance, unreadable text is worse than no text. A short callsign at a larger size beats a full team name in small print.',
      },
    ],
  },

  'woven-labels': {
    name: 'Woven Labels',
    description:
      'Custom woven labels with fine thread for small text and intricate detail. Flat, thin profile for garment necks, seams and inside hems.',
    longDescription: `A woven label is not an embroidered patch made smaller. Embroidery lays thread on top of a base fabric; weaving builds the design into the fabric itself, using threads far finer than embroidery thread. The result is flat rather than raised, thin enough to sit in a garment neck without scratching, and capable of holding detail that embroidery simply cannot reach.`,
    features: [
      'Fine detail',
      'Smooth texture',
      'Small text capable',
      'Professional finish',
      'Thin profile',
    ],
    images: ['/3.webp', '/5.webp', '/6.webp', '/7.webp'],
    sections: [
      {
        heading: 'Why woven holds detail embroidery cannot',
        body: `The limit on embroidery detail is thread thickness — below about 3mm, letterforms close up because the thread is too coarse to draw them. Woven labels use much finer threads, which pushes that limit down considerably and makes small text, thin outlines, and dense detail practical. This is why care instructions, size labels, website addresses, and detailed logos are woven rather than embroidered. If your design has small print in it and you have been told it will not embroider, a woven label is usually the answer.`,
      },
      {
        heading: 'Label formats and folds',
        body: `An end-fold label is folded at both ends so the raw edges tuck under, leaving two tails to be stitched into a seam — the standard for garment necks. A centre-fold label folds in the middle, giving two faces, with the design on the front and often care instructions on the back, sewn into a side seam or hem. A straight-cut label is flat with sealed edges and stitched on all four sides, common inside bags and on flat panels. Which you choose depends on where it goes, so tell us the placement and we will recommend a format.`,
      },
      {
        heading: 'Comfort against the skin',
        body: `A neck label is pressed against skin all day, which makes stiffness a real consideration and the reason a lot of clothing brands have moved away from woven labels entirely. Damask weave gives the crispest detail but is the firmest; satin weave is softer with a slight sheen and less detail resolution; taffeta sits between the two and is the cheapest. For a neck label on next-to-skin clothing, satin is the comfortable choice. For a label inside a jacket or on a bag, where comfort does not matter, damask gives the sharpest reproduction of your logo.`,
      },
    ],
    useCases: [
      'Clothing brand neck and hem labels',
      'Care and composition labels',
      'Size labels and inside-seam branding',
      'Bags, accessories, and soft goods',
      'Small-batch and independent fashion labels',
    ],
    specs: [
      { label: 'Weave types', value: 'Damask, satin, taffeta' },
      { label: 'Fold options', value: 'End-fold, centre-fold, straight-cut' },
      { label: 'Detail capability', value: 'Finer than embroidery; suits small text' },
      { label: 'Profile', value: 'Flat and thin' },
      { label: 'Minimum order', value: '25 pieces' },
      { label: 'Standard turnaround', value: '20 to 30 days after proof approval' },
    ],
    faqs: [
      {
        question: 'What is the difference between a woven label and an embroidered patch?',
        answer:
          'Embroidery stitches thread on top of a base fabric, creating a raised texture. Weaving builds the design into the fabric using much finer threads, producing a flat, thin label that holds far more detail. Choose woven for small text and fine logos, embroidered for texture and a substantial feel.',
      },
      {
        question: 'Which weave is most comfortable in a garment neck?',
        answer:
          'Satin. It is softer against skin than damask, at the cost of some detail resolution. Damask is crisper but firmer, which most people notice on next-to-skin clothing. If comfort matters more than fine detail, choose satin.',
      },
      {
        question: 'Can you fit care instructions on the label?',
        answer:
          'Yes — woven labels handle small text far better than embroidery. A centre-fold label is the usual approach, with your logo on the front face and care and composition details on the back.',
      },
    ],
  },

  'pvc-rubber-patches': {
    name: 'PVC Rubber Patches',
    description:
      'Moulded PVC rubber patches — fully waterproof, wipe-clean, and capable of 2D and 3D relief detail that embroidery cannot reach.',
    longDescription: `PVC patches are moulded rather than stitched. Liquid PVC is poured into a custom mould, cured, and trimmed, which produces a soft rubber patch with crisp edges, exact colour, and detail far finer than thread allows. Because there is no fabric and no thread, there is nothing to absorb water, fray, or fade — a PVC patch that spends its life outdoors looks much the same after several years as it did on day one.`,
    features: [
      '100% waterproof',
      'UV resistant',
      '3D effects possible',
      'Easy to clean',
      'Extremely durable',
    ],
    images: ['/4 (1).webp', '/6.webp', '/8.webp', '/2.webp'],
    sections: [
      {
        heading: '2D and 3D construction',
        body: `A 2D PVC patch has all its colour areas at the same height, separated by thin raised walls, giving a flat surface with clean colour separation. A 3D patch builds those areas at different heights, so a logo can sit proud of its background and lettering can be raised above the panel it sits on. 3D costs more because the mould is more complex, but it produces depth that no flat format can imitate. On a design with a strong central emblem, raising just that element while keeping the rest flat is often the best value — you get the 3D effect where it counts without paying for relief across the whole patch.`,
      },
      {
        heading: 'Detail, colour, and where PVC beats embroidery',
        body: `PVC reproduces thin lines, small text, and intricate shapes that embroidery cannot hold, because the mould has none of the thickness constraints thread does. Colour is mixed rather than selected from a thread chart, so exact brand-colour matching is far more achievable. Edges are moulded to any outline without needing a merrowed border or a laser cut. The trade-off is setup: a physical mould has to be made for your design, which carries a one-off cost, so PVC is more economical on larger runs and on repeat orders where the mould already exists.`,
      },
      {
        heading: 'Backing options and wear',
        body: `PVC patches take velcro, sew-on, or adhesive backing. Velcro is the most common, since PVC is popular on tactical gear and packs. Sew-on works but needs a stitching channel moulded into the edge, which we build in if you tell us at quote stage — trying to stitch through the body of a PVC patch afterwards is difficult. In use, PVC handles mud, rain, salt, and UV without complaint, and cleans with a damp cloth. It stays flexible in cold weather rather than going brittle. The main thing to avoid is direct high heat, which will deform the rubber.`,
      },
    ],
    useCases: [
      'Tactical, outdoor, and marine equipment',
      'Airsoft and milsim loadouts',
      'Brand patches on technical apparel',
      'Morale patches with fine detail',
      'Anything exposed to weather or needing to wipe clean',
    ],
    specs: [
      { label: 'Construction', value: '2D flat or 3D raised relief' },
      { label: 'Material', value: 'Soft moulded PVC rubber' },
      { label: 'Weather resistance', value: 'Fully waterproof and UV resistant' },
      { label: 'Backing', value: 'Velcro, sew-on channel, adhesive' },
      { label: 'Setup', value: 'One-off mould cost per design' },
      { label: 'Minimum order', value: '25 pieces' },
    ],
    faqs: [
      {
        question: 'Is PVC more expensive than embroidery?',
        answer:
          'On small runs, yes, because a mould has to be made for your design. On larger quantities the per-piece cost drops below embroidery, and repeat orders are cheaper still since the mould already exists. If you expect to reorder, PVC often works out better overall.',
      },
      {
        question: 'Can a PVC patch be sewn on?',
        answer:
          'Yes, but the stitching channel has to be moulded into the edge during production — tell us at quote stage. Stitching through a finished PVC patch afterwards is difficult and tends to tear. Most PVC patches are ordered with velcro backing instead.',
      },
      {
        question: 'Will PVC crack in cold weather?',
        answer:
          'No. Soft PVC stays flexible well below freezing, which is one reason it is used on outdoor and marine kit. What it does not tolerate is direct high heat — keep it away from irons, tumble dryers, and heat guns, which will deform it.',
      },
    ],
  },

  'logo-patches': {
    name: 'Logo Patches',
    description:
      'Custom logo patches with accurate colour matching for brand consistency. Embroidered, woven or PVC, sized for uniforms, workwear and merchandise.',
    longDescription: `A logo patch has a harder job than a decorative one: it has to be recognisably your logo, not an approximation of it. That means matching brand colours as closely as the material allows, keeping proportions exact, and adapting fine detail so it survives the move from screen to thread without changing the character of the mark. Most of the work happens before production, in getting the digital proof right.`,
    features: [
      'Accurate color matching',
      'Brand consistency',
      'Multiple sizes',
      'Various backing options',
      'Bulk discounts',
    ],
    images: ['/5.webp', '/7.webp', '/4 (2).webp', '/3.webp'],
    sections: [
      {
        heading: 'Matching brand colours in thread',
        body: `Embroidery thread comes from a fixed range rather than being mixed to order, so a Pantone reference is matched to the nearest available thread rather than reproduced exactly. For most brand colours the match is close enough that nobody notices. For unusual shades — particular teals, muted pastels, specific corporate purples — the nearest thread may be visibly off, and we will tell you that before production rather than after. If exact colour is critical, PVC is the better format: PVC colour is mixed, so brand matching is far more precise.`,
      },
      {
        heading: 'Adapting a logo that was drawn for print',
        body: `Logos are usually designed for print and screen, where hairlines, gradients, and tiny registered-trademark symbols cost nothing. In thread they all cause problems: hairlines vanish, gradients become visible bands, and small symbols turn into blobs. The fix is adaptation, not rejection — thickening thin strokes slightly, converting a gradient into two or three flat tones, and enlarging or dropping elements that will not read at the finished size. Done well, the patch still reads unmistakably as your logo. We flag every one of these decisions on the digital proof so you approve the interpretation before anything is produced.`,
      },
      {
        heading: 'Choosing a format for your mark',
        body: `Embroidery suits bold logos with clear shapes and gives the substantial, textured look most people picture when they think of a logo patch. Woven suits logos with fine detail or small text, producing a flat thin label that holds detail embroidery cannot. PVC suits logos where exact colour matters or where the patch needs to survive weather, and it handles intricate marks well. If your logo exists in several lockups, it is worth choosing a simplified version for small patches and saving the full lockup for larger ones — the same mark rarely works at both two inches and ten.`,
      },
    ],
    useCases: [
      'Staff uniforms and workwear',
      'Corporate merchandise and gifts',
      'Retail apparel and brand labelling',
      'Franchise and multi-site consistency',
      'Trade show and event branding',
    ],
    specs: [
      { label: 'Formats', value: 'Embroidered, woven, or PVC' },
      { label: 'Colour matching', value: 'Thread chart match; PVC for exact brand colour' },
      { label: 'Typical size', value: '2 to 5 inches for uniform and chest placement' },
      { label: 'Backing', value: 'Heat seal, sew-on, velcro, non-woven' },
      { label: 'Minimum order', value: '25 pieces, bulk pricing on larger runs' },
      { label: 'Proof', value: 'Digital proof before production, always' },
    ],
    faqs: [
      {
        question: 'Can you match our exact Pantone colour?',
        answer:
          'In embroidery we match to the nearest thread in our range, which is close for most colours and occasionally noticeably off for unusual shades — we will tell you which before production. If exact brand colour is essential, choose PVC, where colour is mixed rather than selected.',
      },
      {
        question: 'Our logo has very fine detail. Will it work as a patch?',
        answer:
          'Often, with adaptation. Hairlines need thickening, gradients need simplifying into flat tones, and very small elements may need enlarging or removing. We show every one of those decisions on the digital proof. If the detail is essential and cannot be simplified, a woven label or PVC patch will hold it where embroidery will not.',
      },
      {
        question: 'Do you offer better pricing on large orders?',
        answer:
          'Yes. Digitising and setup are one-off costs, so the per-piece price falls as quantity rises. Repeat orders of a design we have already digitised are cheaper again. Send us your quantity and we will quote the tiers.',
      },
    ],
  },

  'custom-caps-hats': {
    name: 'Custom Caps Hats',
    description:
      'Custom embroidered caps and hats with front, side or rear embroidery. Structured and unstructured styles, adjustable and fitted sizing.',
    longDescription: `Embroidery on a cap is done directly into the cap panel rather than onto a patch that is then attached, which changes what is possible. There is no border to hide edges behind, the fabric curves in two directions, and the seam running up the centre front interrupts anything crossing it. Designs that work beautifully as a flat patch sometimes need reworking to sit properly on a cap.`,
    features: [
      'Various cap styles',
      'Front and side embroidery',
      'Adjustable sizing',
      'Quality construction',
      'Bulk orders welcome',
    ],
    images: ['/6.webp', '/8.webp', '/2.webp', '/4 (1).webp'],
    sections: [
      {
        heading: 'Structured and unstructured caps',
        body: `A structured cap has buckram stiffening behind the front panels, so it holds its shape off the head and gives embroidery a firm, flat surface to sit on. That makes it the better base for a detailed front design. An unstructured cap has no stiffening; it sits softer and collapses when not worn, which many people prefer for casual wear, but the fabric moves under the needle and complex designs can pucker. If your design is detailed, choose structured. If the look you want is soft and worn-in, keep the design simple and bold.`,
      },
      {
        heading: 'Placement and the centre seam',
        body: `The front panel is the obvious placement and the most visible, but on a six-panel cap a seam runs straight up the middle of it. Designs that cross that seam can pull unevenly as the two panels move against each other, so wide logos either sit on a five-panel cap without the seam, or get split deliberately either side of it. Side placement on the left or right panel avoids the seam entirely and suits small logos. Rear placement above the closure works for a secondary mark or a website. A common layout is a main logo on the front and a small mark on the side or back.`,
      },
      {
        heading: 'Design limits on a curved panel',
        body: `Because the surface curves, designs work best when they stay within roughly two and a half inches high and four and a half wide on the front panel — go beyond that and the edges of the design start bending away from the viewer. Keep text at 5mm or above, as on any embroidery. Very dense designs at high stitch count stiffen the front panel noticeably, which some people dislike on an otherwise soft cap. Where a design is too detailed to embroider directly, an alternative is to embroider a patch separately and attach it to the cap, which sidesteps the curve entirely.`,
      },
    ],
    useCases: [
      'Staff and workwear headwear',
      'Team and club caps',
      'Brand and retail merchandise',
      'Event and promotional giveaways',
      'Hospitality and uniform programmes',
    ],
    specs: [
      { label: 'Cap styles', value: 'Structured and unstructured' },
      { label: 'Placement', value: 'Front panel, left or right side, rear' },
      { label: 'Front design area', value: 'Approximately 4.5 x 2.5 inches' },
      { label: 'Sizing', value: 'Adjustable and fitted options' },
      { label: 'Minimum text height', value: '5mm recommended' },
      { label: 'Minimum order', value: '25 pieces' },
    ],
    faqs: [
      {
        question: 'Can my logo go across the front seam?',
        answer:
          'It can, but it is not ideal on a six-panel cap — the two panels move independently and a design crossing the seam can pull unevenly. Either choose a five-panel cap with no front seam, or use a design that sits either side of it. We will flag this on the proof if your artwork is affected.',
      },
      {
        question: 'Structured or unstructured for a detailed logo?',
        answer:
          'Structured. The buckram behind the front panel gives the needle a firm surface, so detail holds cleanly. On an unstructured cap the fabric moves and detailed designs can pucker, so keep those bold and simple.',
      },
      {
        question: 'Can you embroider on caps we supply?',
        answer:
          'Contact us with the cap details before sending anything. Whether we can embroider a supplied cap depends on its construction, the fabric, and whether the panel can be opened for hooping. We will tell you honestly whether it will work.',
      },
    ],
  },

  'custom-chenille-patches': {
    name: 'Custom Chenille Patches',
    description:
      'Custom chenille patches with the raised looped yarn texture of classic letterman jackets. Large sizes, felt backing, bold varsity lettering.',
    longDescription: `Chenille is the fuzzy, raised texture on a varsity letterman jacket. Instead of flat embroidery thread, the design is built from looped yarn stitched onto a felt base, giving a thick pile you can feel under your hand. It is a fundamentally different look from embroidery — softer, bolder, and unmistakably associated with school and college athletics.`,
    features: [
      'Soft fuzzy texture',
      'Classic letterman style',
      'Raised 3D effect',
      'Custom shapes',
      'Premium quality',
    ],
    images: ['/7.webp', '/4 (2).webp', '/5.webp', '/3.webp'],
    sections: [
      {
        heading: 'What chenille can and cannot do',
        body: `Chenille yarn is thick, which is the whole point and also its main limitation. It builds bold letters and simple shapes beautifully, and it fails at fine detail — thin lines, small text, and intricate logos are not possible in chenille at any size. This is why almost every chenille patch you have seen is a single large letter, a number, or a simple mascot outline. Where a design needs both, chenille is combined with embroidery: the letter or shape in chenille, and any small text or fine detail embroidered around or over it. That combination is standard on varsity work.`,
      },
      {
        heading: 'Size, felt, and construction',
        body: `Chenille patches are made larger than embroidered ones because the yarn needs room to read as texture — most fall between four and twelve inches. The base is wool or wool-blend felt, chosen in a colour that usually forms part of the design, often with a contrasting felt border layer beneath the main shape to create an outline effect. Because the patch is thick and heavy, sew-on backing is standard; heat-seal adhesive cannot hold this weight, and there is too much bulk for it to bond evenly. Most letterman patches are stitched on by hand or by an alterations service.`,
      },
      {
        heading: 'Care and durability',
        body: `Chenille pile flattens and collects lint. Brushing it gently with a soft brush lifts the yarn back up and keeps the texture looking right. Dry cleaning is safer than machine washing for a jacket carrying chenille patches, because agitation mats the pile and hot water shrinks the felt base. Never iron directly on chenille — the pile crushes permanently and does not recover. Treated reasonably, a chenille patch outlasts the jacket it is sewn to, which is why letterman jackets get handed down.`,
      },
    ],
    useCases: [
      'Varsity and letterman jackets',
      'School and college athletic awards',
      'Team and sorority or fraternity apparel',
      'Retro and vintage-style fashion',
      'Alumni and reunion merchandise',
    ],
    specs: [
      { label: 'Typical size', value: '4 to 12 inches' },
      { label: 'Base', value: 'Wool or wool-blend felt' },
      { label: 'Texture', value: 'Looped chenille yarn, raised pile' },
      { label: 'Backing', value: 'Sew-on (weight rules out heat seal)' },
      { label: 'Detail limit', value: 'Bold shapes and letters only; combine with embroidery for fine detail' },
      { label: 'Minimum order', value: '25 pieces' },
    ],
    faqs: [
      {
        question: 'Can you put small text on a chenille patch?',
        answer:
          'Not in chenille itself — the yarn is far too thick for small letterforms. The standard solution is a combination patch: the large letter or shape in chenille, with any small text embroidered alongside or on top. We do this routinely on varsity work.',
      },
      {
        question: 'Can a chenille patch be ironed on?',
        answer:
          'No. Chenille patches are thick and heavy, and heat-seal adhesive cannot hold that weight or bond evenly through the felt. They are sewn on. Ironing also crushes the pile permanently, so never press one directly.',
      },
      {
        question: 'How do I clean a jacket with chenille patches?',
        answer:
          'Dry clean it. Machine washing mats the pile and can shrink the felt base. To keep the texture looking right between cleans, brush the pile gently with a soft brush to lift the yarn and clear lint.',
      },
    ],
  },

  'police-patches': {
    name: 'Police Patches',
    description:
      'Custom police and law enforcement patches produced to department specification. Accurate reproduction, durable construction, secure ordering.',
    longDescription: `Law enforcement patches are produced to a written specification more often than any other category we make. Departments set the shape, the dimensions, the exact colours, and the wording, and the job is to reproduce that specification precisely across every unit in the order — including reorders placed years apart. Consistency matters more here than creative interpretation.`,
    features: [
      'Department standards',
      'Durable materials',
      'Accurate reproduction',
      'Secure ordering',
      'Multiple backing options',
    ],
    images: ['/8.webp', '/2.webp', '/6.webp', '/4 (1).webp'],
    sections: [
      {
        heading: 'Working from a department specification',
        body: `If you have a written spec, send it with your artwork — dimensions, thread colour references, border type, and backing. We build the digital proof against that document and mark on it where anything cannot be matched exactly, so the decision sits with you rather than with us. If there is no written spec but there is an existing patch, send a physical sample; matching from a real patch is far more reliable than matching from a photograph, because photographs shift colour under different light.`,
      },
      {
        heading: 'Consistency across reorders',
        body: `A department patch is rarely a one-time order. Officers join, uniforms wear out, and the patch has to look identical to the ones issued three years ago. We keep the digitised file and the thread specification for every order we produce, so a repeat run starts from the same file rather than being re-digitised from scratch. Reordering from the same file also removes the setup cost. When you reorder, quote your original order reference and we will match to it.`,
      },
      {
        heading: 'Construction for uniform wear',
        body: `Uniform patches are worn daily and washed frequently, often at higher temperatures than casual clothing. We build them at 100% coverage so no base fabric is exposed to fade or absorb, with polyester thread that holds colour under UV and repeated laundering. A merrowed border is standard on shield and oval shapes and gives the most durable edge; laser-cut is used where the outline is too complex for merrowing. Sew-on backing is the norm for permanent placement on a uniform shirt or jacket; hook-and-loop is available where the department issues garments with loop panels.`,
      },
    ],
    useCases: [
      'Department shoulder and chest insignia',
      'Rank, unit, and division patches',
      'Reserve, auxiliary, and volunteer units',
      'Commemorative and memorial patches',
      'Collector and historical reproductions',
    ],
    specs: [
      { label: 'Typical size', value: '4 to 5 inches for shoulder placement' },
      { label: 'Coverage', value: '100% recommended for uniform wear' },
      { label: 'Border', value: 'Merrowed standard; laser-cut for complex outlines' },
      { label: 'Backing', value: 'Sew-on standard; hook-and-loop available' },
      { label: 'Reorders', value: 'Digitised file retained for exact repeat runs' },
      { label: 'Minimum order', value: '25 pieces' },
    ],
    faqs: [
      {
        question: 'Can you reproduce our existing department patch exactly?',
        answer:
          'Send a physical sample rather than a photograph — colour shifts under different lighting and a real patch gives us something to match against directly. We will show the match on the digital proof and flag anything our thread range cannot hit precisely.',
      },
      {
        question: 'Will a reorder in two years match the patches we have now?',
        answer:
          'Yes. We keep the digitised file and thread specification from your original order, so a repeat run is produced from the same file rather than digitised again. Quote your original order reference when you reorder. It also removes the setup cost.',
      },
      {
        question: 'Do you verify that a patch design is authorised?',
        answer:
          'No. We produce to the artwork and specification supplied by the customer and do not act as a verifying authority for insignia. Ordering official department insignia should be done by, or with the authorisation of, the department concerned.',
      },
    ],
  },
};

export const serviceSlugs = Object.keys(services);

/** Flat list used by the /services index page, the header, the footer and the sitemap. */
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
