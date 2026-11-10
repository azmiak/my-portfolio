# DESIGN.md

Direction for the portfolio. Written by the agent (antislop path B.2), from the owner's brief:
software engineering student or fresh graduate, viewers are recruiters and clients,
mood "sharp and technical", bright green accent, dark default, light as an option.

Warning kept on record: agent-written direction trends toward default taste. The owner
should override any line below that does not feel like them.

Reading this as: personal portfolio for recruiters and clients, in a sharp technical style, dial ENERGY 2 / RHYTHM 3 / MOTION 1.

Dial: ENERGY 2 / RHYTHM 3 / MOTION 1

## Palette (2 core colors + 1 accent, plus neutrals)

| Token | Dark (default) | Light | Reason |
|---|---|---|---|
| canvas | #0B0E0C | #F5F7F5 | Near-black with a green undertone ties the neutrals to the accent. |
| surface | #121714 | #FFFFFF | One step off canvas, used only for the featured project and contact block. |
| fg | #EAF0EC | #0B120D | Body text, 16.8:1 on dark and 17.6:1 on light. |
| muted | #A3AFA7 | #4B5850 | Secondary text, 8.5:1 on dark and 6.9:1 on light. |
| accent (ink) | #46E08C | #0A6B33 | Links, index numbers, focus. 11.4:1 on dark, 6.2:1 on light. |
| accent (fill) | #46E08C | #46E08C | Primary button only, with near-black text (11.2:1). |

Why a bright green: the owner asked for it, and it is the single signal for "you can act
here" (links, primary button, focus ring). It appears nowhere else, so it stays a deliberate accent.
Light mode needs a darker green for text because the bright one fails contrast on white.
No gradients, glows or glass.

## Typography

- IBM Plex Sans for headings and body. Reason: designed for technical documentation, reads as engineered without looking like a terminal, and is not one of the usual model defaults.
- IBM Plex Mono for small metadata only (section index, dates, tech tags). Reason: engineers read dates and stack names as data. Never used for headings or paragraphs, so there is no terminal costume.
- Section labels are sentence case, no wide tracking.

## Shape and depth

- Radius 2px everywhere, the same value on buttons, tags, cards and the portrait. Reason: sharp is the brief, and one value keeps it consistent. Nothing is pill-shaped.
- No shadows. Depth comes from a 1px line and a surface tone. Reason: shadows make everything float, which fights "sharp".

## Identity motif

A hard 2px accent rule, 40px wide, above every section heading, paired with a mono index ("01").
The portrait sits on an offset accent-colored plate. Both repeat the same gesture: a short, precise
green line against a square block.

## Layout and rhythm (RHYTHM 3)

Sections intentionally use different compositions, driven by their content:

- Hero: asymmetric, large name left, portrait right.
- About: sticky heading left, prose and a facts list right.
- Education: ruled rows, date column left.
- Skills: grouped definition rows, not cards.
- Projects: one featured project at full width, the rest in a compact two-column set. Reason: projects differ in weight, so the layout shows which one leads.
- Experience and credentials: stacked groups with timeline-style rows, certificates as a plain list.
- Contact: one large mailto line on a surface block.

Sections that have no content are omitted, and their navigation entry is omitted with them.

## Motion (MOTION 1)

Hover and focus transitions only, 150ms, disabled under prefers-reduced-motion. Reason: a recruiter
scans fast. Motion would add nothing to the content. Anchor scrolling is smooth only when the
visitor has not asked for reduced motion.

## Rules this site deliberately holds to

- No statistics, testimonials, FAQ, logo bar, fake terminal, bento grid, or three-step process.
- No stock illustrations. The portrait is a labeled geometric placeholder until a real photo is added.
- Every link goes to a real destination or is not rendered.
