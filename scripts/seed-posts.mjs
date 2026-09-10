/**
 * One-off seeder for the four launch blog posts.
 * Run with: node scripts/seed-posts.mjs
 * Safe to re-run — it skips any slug that already exists.
 */
import { MongoClient } from 'mongodb';
import fs from 'fs';

const env = Object.fromEntries(
  fs.readFileSync('.env.local', 'utf8')
    .split('\n')
    .filter((l) => /^[A-Z_]+=/.test(l))
    .map((l) => { const i = l.indexOf('='); return [l.slice(0, i), l.slice(i + 1).trim()]; })
);

const AUTHOR = 'Custom Patch House';

const posts = [
{
  title: 'Merrowed vs Laser-Cut Borders: Which Edge Your Patch Actually Needs',
  slug: 'merrowed-vs-laser-cut-patch-borders',
  excerpt:
    'The border decides how long a patch survives and what shapes you can use. Here is the honest difference between a merrowed edge and a laser-cut one, and when each is the wrong choice.',
  coverImage: '/3.webp',
  coverAlt: 'Close-up of a merrowed border stitched around the edge of an embroidered patch',
  daysAgo: 21,
  content: `Almost every patch quote comes down to two decisions: what it is made of, and how the edge is finished. The second one gets skipped more often, and it is the one that decides whether the patch is still intact in three years.

There are two edges worth knowing about. Everything else is a variation on them.

## What a merrowed border is

A merrowed border is the thick, raised, overlocked edge you see on traditional patches — the one that feels like a rope running around the outside. It is stitched on a Merrow machine after the patch is cut, wrapping thread around the raw edge so no fabric is exposed at all.

That wrap is why it lasts. There is no cut edge for a washing machine to attack, and the raised profile takes the abrasion before the embroidery does. On a patch that gets dragged across a chair back or a car seat every day, that extra couple of millimetres of thread is doing real work.

The catch is shape. A Merrow machine can only follow a gentle, continuous curve. That means:

- Circles, ovals, shields, rectangles with rounded corners — yes
- Anything with an inside corner, a spike, a notch, or lettering poking out of the outline — no

If your design has wings, flames, or a dagger sticking out of the shape, a merrowed border cannot follow it.

## What a laser-cut border is

A laser-cut border (also called hot-cut or die-cut) trims the patch with heat. The heat melts and seals the twill as it cuts, so the edge does not fray even though there is no thread wrapped around it. Before cutting, a tight satin stitch is run around the design to give the blade something clean to follow.

Because it is a cut rather than a stitch, it follows any outline you can draw. Complex silhouettes, sharp interior angles, individual letters as a standalone shape — all fine.

The trade-off is thickness. A hot-cut edge sits flush with the patch instead of standing proud of it, so it takes abrasion directly on the satin stitch. In normal wear this is a non-issue. On a large panel that rubs constantly, it wears faster than a merrowed edge would.

## Choosing between them

The decision is usually made for you by the artwork:

**Pick merrowed when** the outline is a simple geometric shape, the patch is large, and it will live somewhere with heavy contact — the back of a vest, a work jacket, a bag that gets thrown around. On [back patches](/services/back-patches) and [biker patches](/services/biker-patches) this is the default recommendation for exactly that reason.

**Pick laser-cut when** the shape is the point. Custom silhouettes, logos with irregular outlines, morale patches with unusual profiles, small [logo patches](/services/logo-patches) where a thick rope border would visually swallow the design.

**Pick laser-cut when the patch is small**, regardless of shape. Below about 2 inches, a merrowed edge is proportionally huge — it eats into the design area and makes the artwork look cramped.

## The mistakes that cost money

**Designing a complex shape and then asking for merrowed.** This comes up constantly. The answer is either simplify the outline into something the Merrow machine can follow, or accept a laser-cut edge. There is no third option, and finding out at the proof stage costs you days.

**Assuming merrowed is always the premium choice.** It is more durable, but on a detailed 2-inch patch it is simply the wrong tool. Durability you cannot see is not worth a design you can.

**Not accounting for the border in the size.** A merrowed edge adds roughly 3mm on every side. If the patch has to fit a specific pocket or panel, quote the finished outside dimension, not the artwork dimension.

## A quick summary

| | Merrowed | Laser-cut |
|---|---|---|
| Edge profile | Raised, rope-like | Flush, sealed |
| Shapes | Simple curves only | Any outline |
| Durability | Highest | Very good |
| Best size | 2 inches and up | Any, including small |
| Typical use | Back patches, club colours | Logos, morale, custom shapes |

If you are unsure which your artwork suits, send it over with a [quote request](/free-instant-quote) and we will tell you which edge the shape allows before anything is digitised. It takes a minute and it saves a revision round.`,
},
{
  title: 'Patch Backing Types Explained: Sew-On, Iron-On, Velcro and the Rest',
  slug: 'patch-backing-types-explained',
  excerpt:
    'Sew-on, heat seal, hook-and-loop, adhesive, plastic backing — what each one actually does, what it costs you, and which garment each one is wrong for.',
  coverImage: '/5.webp',
  coverAlt: 'Custom embroidered patches showing different backing finishes on the reverse',
  daysAgo: 14,
  content: `The backing is the part nobody thinks about until the patch is on the wrong thing. It is a cheap decision to get right at order time and an expensive one to fix afterwards, because changing it means remaking the patch.

Here is what each backing does and where it fails.

## Sew-on (no backing)

The default. The patch is embroidered twill with nothing applied to the reverse, and it gets stitched to the garment by hand or machine.

**Strengths:** the most durable attachment there is, and the only one that survives industrial laundering indefinitely. It works on every fabric, including the ones heat destroys. It also stays flexible, so the patch moves with the garment instead of creating a stiff panel.

**Weaknesses:** somebody has to sew it. On a 200-piece order for a uniform contract, that labour is a real line item.

**Use it for:** anything that will be washed hard, leather, waxed cotton, and any garment where the patch has to last as long as the garment. [Sew-on patches](/services/sew-on-patches) remain the standard for workwear and club colours for a reason.

## Iron-on (heat seal)

A layer of heat-activated adhesive is applied to the back. A household iron or a heat press melts it into the fabric.

**Strengths:** no sewing, and the customer can apply it themselves in a couple of minutes. It is the friendliest option for retail and giveaway patches.

**Weaknesses:** it will not bond to everything, and it is not permanent under stress. Heat seal fails on nylon, most synthetics, waterproof shells, leather and vinyl — either it will not stick, or the heat damages the garment. It also softens again under high heat, so tumble dryers shorten its life.

**Use it for:** cotton, denim, canvas, cotton-poly blends. Nothing waterproof, nothing stretchy, nothing you would not put an iron on. We wrote a full walkthrough of the application on [how to iron on a patch](/blog/how-to-iron-on-a-patch), including the three reasons they lift.

A note worth repeating: for anything that matters, iron on **and then** put a few stitches around the edge. The adhesive holds it in place while you sew, and the stitches stop it ever lifting. [Iron-on patches](/services/iron-patches) are best treated as self-positioning rather than permanent.

## Hook-and-loop (velcro)

A hook or loop panel is stitched to the back of the patch. The matching panel goes on the garment.

**Strengths:** the patch comes off in a second. Essential when the same jacket carries different identifiers on different days — name tapes, unit patches, event badges — and when the garment has to be laundered without the patch.

**Weaknesses:** it is bulky, it is stiff, and it snags. The garment also needs its own panel sewn on, so it is a two-part job. On thin fabrics the loop panel shows through.

**Use it for:** tactical and duty gear, [airsoft patches](/services/airsoft-patches), [morale patches](/services/morale-patches), plate carriers, and any uniform where the wearer swaps identifiers. [Velcro patches](/services/velcro-patches) are standard in these categories.

Order the hook side on the patch unless you are told otherwise — that is the convention, and getting it backwards means two incompatible sets of gear.

## Plastic backing

A thin plastic film is fused to the back. It does not attach the patch to anything; it stiffens it.

**Strengths:** the patch keeps its shape instead of drooping. On a large panel that hangs off the back of a vest, this is the difference between something that sits flat and something that curls.

**Weaknesses:** it adds rigidity, which is wrong on anything that needs to flex, and it makes hand-sewing harder.

**Use it for:** large [back patches](/services/back-patches), and any patch over about 5 inches that is not going onto a rigid surface.

## Adhesive (peel and stick)

A pressure-sensitive adhesive with a peel-off liner.

**Strengths:** instant, no tools, no heat.

**Weaknesses:** temporary. It is measured in days, not years, and it does not survive a wash.

**Use it for:** trade shows, conferences, one-day events, product samples. Nothing else.

## The short version

| Backing | Permanent | Removable | Survives washing | Works on synthetics |
|---|---|---|---|---|
| Sew-on | Yes | No | Yes | Yes |
| Iron-on | Semi | No | Limited | No |
| Velcro | Yes (panel) | Yes | Yes (patch off) | Yes |
| Plastic | N/A — stiffener | N/A | N/A | N/A |
| Adhesive | No | Yes | No | Partly |

Note that these combine. A large back patch is commonly plastic-backed **and** sew-on. A duty patch is hook-backed **and** laser-cut. If you are not sure what your use case needs, describe the garment and how it gets washed when you [request a quote](/free-instant-quote) — that is genuinely all we need to recommend the right one.`,
},
{
  title: 'How to Send Artwork for a Custom Patch (and Why Your JPG Is a Problem)',
  slug: 'how-to-send-artwork-for-custom-patches',
  excerpt:
    'What file to send, what minimum text size survives in thread, why gradients do not translate, and the artwork mistakes that cost you a revision round.',
  coverImage: '/4 (1).webp',
  coverAlt: 'Detailed embroidered logo patch showing fine lettering stitched in thread',
  daysAgo: 7,
  content: `Nearly every delay on a patch order traces back to artwork. Not to production, not to shipping — to a file that could not be used as sent. The fix is almost always small, and knowing it in advance saves you two or three days.

Here is what actually happens to your file, and what makes it easy or hard.

## Your artwork is not what gets stitched

This is the part that surprises people. A patch is not printed from your file. It is stitched from a **digitised** file — a separate file that tells the embroidery machine where every needle goes, in what order, at what angle, with which thread.

A digitiser makes that file by tracing your artwork. So the question is not "is my file pretty", it is "can somebody trace clean edges from this".

That reframes everything below.

## The file to send

**Best: vector.** AI, EPS, SVG, or a PDF with live vector content. A vector has mathematical edges, so the digitiser traces exactly what you drew at any size. Nothing to interpret.

**Acceptable: high-resolution raster.** PNG or JPG at 300 DPI at the finished size, on a plain or transparent background. A 2-inch patch means roughly 600 x 600 pixels minimum. More is better.

**Problematic:** a logo pulled off a website, a screenshot, a photo of a business card, anything under about 300 pixels. At that size the edges are a soft gradient of pixels and the digitiser is guessing where your line ends. Whatever they guess, that is what gets stitched.

**Also fine:** a clear hand drawing, photographed straight-on in good light. Genuinely — a clean sketch is often easier to work from than a bad JPG, because the intent is unambiguous.

If you only have a low-resolution logo, say so upfront. Redrawing it as vector is a small job, and it is far better than discovering the problem on the proof.

## Size the artwork to the patch, not the screen

Send the finished dimensions in inches or millimetres — width and height — with the file. "About 3 inches wide" is enough. Without it we are scaling to a guess, and every detail decision below depends on the final size.

## What thread cannot do

Thread has physical limits that ink does not. These are the four that catch people out:

**Small text.** Keep the smallest lettering at **5mm tall or above** in the finished size. Below about 3mm, letters stop being legible — the counters in an 'a' or an 'e' fill in with thread and it becomes a smudge. If your design has a tagline that would land at 2mm, the options are: make the patch bigger, drop the tagline, or accept it will not read.

**Gradients.** Every shade needs its own thread colour, so a smooth gradient becomes visible bands. Simplifying it yourself into two or three flat colours nearly always looks better than letting it be approximated.

**Thin lines.** A stitched line has a minimum practical width of about 1mm. Hairlines either vanish or get thickened to survive, changing the proportions of your design.

**Exact colour matching.** Thread comes in a fixed palette — a few hundred shades. We match to the nearest, which is usually very close. If a specific brand colour is non-negotiable, send the Pantone number and we will confirm the closest thread before production rather than after.

## Simplify before you send

The best-looking patches are usually simpler than the artwork they came from. Six to eight thread colours is a comfortable range. Beyond that, cost rises and detail starts to fight itself in a small area.

If your logo has fine detail that only exists for print, consider a patch-specific version: same identity, fewer elements, heavier lines. Most brands end up with one. This matters most on [logo patches](/services/logo-patches) and [embroidered patches](/services/embroidered-patches), where the design has to work at chest size.

If your design genuinely cannot be simplified — photographic detail, tiny text, fine gradients — embroidery may be the wrong process. [PVC rubber patches](/services/pvc-rubber-patches) hold fine detail that thread cannot, and [woven labels](/services/woven-labels) use much thinner threads and handle small text far better.

## The proof stage

Before anything is produced you get a digital proof: how the patch will look, at size, with the thread colours marked.

Check it properly. Specifically:

- Spelling — on names, dates and place names especially, because these are the ones nobody proofreads
- The finished dimensions, including the border
- Thread colours against your brand
- Whether the smallest text is still legible at the size shown
- The backing and border type listed on the proof

Changes at proof stage are free and quick. Changes after production mean a remake. It takes two minutes and it is the single highest-value thing you can do on the whole order.

## Checklist before you hit send

- [ ] Vector file, or 300 DPI raster at finished size
- [ ] Finished width and height stated
- [ ] Smallest text is 5mm or larger
- [ ] Colour count is roughly eight or fewer
- [ ] Pantone numbers included, if colour is critical
- [ ] Backing and border noted, or a description of the garment

Tick those and your quote comes back the same day with a proof, not a list of questions. Attach the file to a [free quote request](/free-instant-quote) whenever you are ready.`,
},
{
  title: 'Embroidered, PVC, Woven or Chenille: Choosing the Right Patch Type',
  slug: 'embroidered-vs-pvc-vs-woven-vs-chenille-patches',
  excerpt:
    'Four patch materials, four very different jobs. What each one holds detail-wise, how it feels, what it survives, and which one your design should actually be.',
  coverImage: '/6.webp',
  coverAlt: 'A selection of custom patches in different materials and finishes',
  daysAgo: 2,
  content: `"Custom patch" covers four processes that look nothing alike in the hand. Picking the wrong one is the most common reason a finished order disappoints — not quality, just the wrong material for the design.

Here is what each one is actually good at.

## Embroidered

Thread stitched onto a twill backing. The classic patch, and the default for good reason.

**Texture:** raised and tactile. The stitch direction catches light, which is why embroidery looks alive in a way flat printing does not.

**Detail:** moderate. Text down to about 5mm, clean shapes, solid colour blocks. Fine gradients and photographic detail are beyond it.

**Durability:** excellent. Decades on a garment that is looked after.

**Best for:** club colours, uniforms, workwear, team kit, military and service patches, anything with a traditional feel. This is the right answer for most [embroidered patches](/services/embroidered-patches) enquiries, [biker patches](/services/biker-patches) and [military patches](/services/military-patches).

You also choose coverage here. **Fully embroidered** means thread covers the entire patch including the background — richer, heavier, more expensive. **Partially embroidered** leaves the twill visible as the background colour — lighter, more flexible, cheaper, and often the better look when the background is a single flat colour anyway.

## PVC rubber

Soft moulded PVC rather than textile. Liquid PVC is layered into a mould colour by colour and cured.

**Texture:** smooth, slightly rubbery, with defined raised levels. Feels modern and deliberately un-traditional.

**Detail:** the highest of the four. Sharp edges, very small text, precise logos, 2D or 3D relief. Anything you can mould, it holds.

**Durability:** completely waterproof, UV stable, and it does not fray, fade or absorb anything. Wipes clean. It outlives thread in wet and outdoor conditions.

**Best for:** outdoor gear, tactical and duty equipment, marine and industrial use, tech-brand logos, and any design too detailed for thread. [PVC rubber patches](/services/pvc-rubber-patches) are the answer whenever "it has to survive being soaked" or "the logo is too fine to stitch" comes up.

The trade-off is feel. PVC on a wool jacket looks like what it is. If the product is traditional, embroidery reads better.

## Woven

Also thread, but woven on a loom with much finer threads instead of stitched on top of fabric.

**Texture:** flat and smooth, almost like printed fabric.

**Detail:** high — well above embroidery. Because the threads are thinner, woven labels hold small text and fine lines that embroidery would blur.

**Durability:** very good, and notably thin and flexible.

**Best for:** clothing brand labels, care and size tags, inside-neck branding, anything where bulk is unwanted or the text is small. This is what [woven labels](/services/woven-labels) exist for. If your patch is essentially a small block of text, woven will look sharper than embroidered every time.

## Chenille

Looped yarn, cut to produce a deep fuzzy pile. The varsity letter.

**Texture:** thick, soft, high-pile. Unmistakable, and it photographs beautifully.

**Detail:** the lowest of the four. Big bold shapes only — letters, numbers, simple emblems. Fine detail is physically impossible in a pile that deep.

**Durability:** good, but it is a pile fabric, so it collects lint and does not want rough laundering.

**Best for:** varsity and letterman jackets, school and college awards, retro fashion pieces, statement branding. [Chenille patches](/services/custom-chenille-patches) are a style choice as much as a material one — chosen because they look like that, not because of performance.

## Side by side

| | Embroidered | PVC | Woven | Chenille |
|---|---|---|---|---|
| Detail | Moderate | Highest | High | Lowest |
| Min text size | ~5mm | ~2mm | ~3mm | Letters only |
| Texture | Raised thread | Smooth rubber | Flat, thin | Thick pile |
| Waterproof | No | Yes | No | No |
| Feel | Traditional | Modern | Discreet | Retro |
| Typical use | Uniforms, clubs | Outdoor, tactical | Brand labels | Varsity |

## How to decide in one minute

Work through it in this order:

1. **Will it get wet, or live outdoors permanently?** → PVC.
2. **Is the smallest text under 5mm, or the artwork very fine?** → Woven, or PVC if it also needs to be tough.
3. **Is it a letter, number or bold emblem on a varsity-style garment?** → Chenille.
4. **Anything else** → Embroidered. It is the default because it fits most jobs.

Still torn between two? Order a sample of each before committing to a full run. On a bulk order the sample cost is negligible next to remaking 300 pieces in the wrong material — and it is far more useful than any description. Browse the [samples gallery](/samples) or [ask us for a quote](/free-instant-quote) with your artwork and we will tell you which process suits it.`,
},
];

const client = await new MongoClient(env.MONGODB_URI).connect();
const col = client.db(env.MONGODB_DB).collection('posts');
await col.createIndex({ slug: 1 }, { unique: true });

for (const { daysAgo, ...post } of posts) {
  const existing = await col.findOne({ slug: post.slug });
  if (existing) {
    console.log(`skip (exists): ${post.slug}`);
    continue;
  }
  const when = new Date(Date.now() - daysAgo * 86400000).toISOString();
  await col.insertOne({
    ...post,
    author: AUTHOR,
    published: true,
    createdAt: when,
    updatedAt: when,
  });
  console.log(`created: ${post.slug}  (${post.content.length} chars)`);
}

const all = await col.find({}).sort({ createdAt: -1 }).project({ title: 1, slug: 1, published: 1 }).toArray();
console.log(`\ntotal posts now: ${all.length}`);
for (const p of all) console.log(` - ${p.published ? '✓' : '·'} ${p.slug}`);
await client.close();
