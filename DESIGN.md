---
name: JPI · Juan Pablo
description: Studio index for a one-person web studio; dark navy void, hairline rules, electric blue rationed to action.
colors:
  void: "#03050d"
  ink: "#070b18"
  panel: "#0b1224"
  line: "rgba(150, 170, 220, .14)"
  line-strong: "rgba(150, 170, 220, .28)"
  text: "#eef2fa"
  text-2: "#a9b3cc"
  text-3: "#8a95b1"
  white: "#ffffff"
  blue: "#2f5bff"
  blue-hover: "#2149e6"
  blue-text: "#7a9dff"
  field: "#2a55f5"
  field-text: "#dfe7ff"
  available: "#5ee39a"
typography:
  display:
    fontFamily: "Mona Sans, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.625rem, 1.3rem + 5vw, 5.5rem)"
    fontWeight: 580
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 106"
  headline:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.5rem + 3vw, 4rem)"
    fontWeight: 560
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 108"
  index:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, .9rem + 4vw, 4.75rem)"
    fontWeight: 450
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 118"
  title:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1rem + 1.5vw, 2.25rem)"
    fontWeight: 520
    lineHeight: 1.1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 108"
  title-sm:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1rem + .75vw, 1.625rem)"
    fontWeight: 520
    lineHeight: 1.1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 108"
  lead:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + .4vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "'wdth' 100"
  small:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: ".9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: ".8125rem"
    fontWeight: 400
    lineHeight: 1.5
    fontFeature: "'tnum'"
  button:
    fontFamily: "Mona Sans, system-ui, sans-serif"
    fontSize: ".9375rem"
    fontWeight: 560
    letterSpacing: ".005em"
    fontVariation: "'wdth' 104"
rounded:
  img: "6px"
  panel: "14px"
  photo: "28px"
  pill: "999px"
  round: "50%"
spacing:
  gutter: "clamp(20px, 5vw, 64px)"
  col-gap: "clamp(16px, 2vw, 32px)"
  section: "clamp(96px, 11vw, 176px)"
  shell: "1360px"
  header-h: "72px"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.blue-hover}"
  button-primary-lg:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-primary-sm:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "40px"
  button-light:
    backgroundColor: "{colors.white}"
    textColor: "{colors.void}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  button-light-hover:
    backgroundColor: "{colors.field-text}"
  button-ghost:
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 22px"
    height: "48px"
  button-outline-light:
    textColor: "{colors.white}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "56px"
  social-icon:
    textColor: "{colors.text-2}"
    rounded: "{rounded.round}"
    size: "44px"
  mobile-cta:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    height: "54px"
  chat-demo:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
    padding: "20px"
  case-sheet:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.text}"
    width: "min(960px, 100%)"
---

# Design System: JPI · Juan Pablo

## Overview

**Creative North Star: "The Studio Index"**

The site reads like the index of a small studio, not a template stack. Work, services, process and commitments are ruled typographic rows at display scale on a near-black navy void; images surface only when you reach a name. The void is literally the background of Juan's studio portrait, so the photograph has no frame: it feathers into the page and the page becomes the studio.

Density is low and the rhythm is editorial: big expanded Mona Sans for names and headings, normal-width Mona Sans for reading, 1px blue-gray hairlines as the only structure. Electric blue is rationed: the primary WhatsApp action, active states, and one drenched closing field. Everything else is white, bluish gray and the void. The feel is a premium digital studio; it is never hacker, gamer or cyberpunk, and nothing glows.

**Key Characteristics:**
- One dark ground (the portrait's own background), continuous from hero to footer, broken once by the blue closing field.
- Ruled index rows (hairline top border per row, hairline bottom on the list) as the universal content container; no card grids.
- Variable width axis as hierarchy: expanded (104–118%) for display, index names, titles and actions; 100% for text.
- Pill actions, softly radiused imagery, round toggles; flat surfaces separated by tone and hairlines.
- Motion is one orchestrated hero entrance plus quiet reveals and state transitions on a single ease-out curve.

## Colors

A near-monochrome navy-and-white world with one electric blue voice.

### Primary
- **Electric Blue** (blue): the primary action fill (every WhatsApp pill, the fixed mobile CTA), text selection, and the source hue of the hero slash. Never used as decoration or on text.
- **Pressed Electric** (blue-hover): hover state of blue fills; darkens rather than lightens so white labels stay above 4.5:1.
- **Signal Blue Text** (blue-text): the legible blue for type and strokes on the void: active nav dot, open accordion toggle, process rail fill and active step, case fact labels, arrow links, focus outline, the `</>` mark.
- **Closing Field** (field): the single drenched section (Contato). One tone below blue on purpose, so the secondary text on it (field-text) passes 4.5:1.
- **Field Ice** (field-text): secondary text on the closing field and the hover fill of the light button.

### Tertiary
- **Available Green** (available): the 6px availability dot in the hero caption only. A status signal, not a palette color.

### Neutral
- **Portrait Void** (void): page background, light-button label.
- **Deep Ink** (ink): the one tonal step up for the process section and the case sheet.
- **Panel Navy** (panel): contained surfaces (chat demo) and image placeholders.
- **Hairline** (line): every rule, row divider and panel border.
- **Strong Hairline** (line-strong): interactive outlines (ghost button, toggles, close button), the process rail track, the hero caption rule, underline color of quiet links.
- **Paper White** (text): headings and primary text. Pure white (white) is reserved for labels on blue fills and type on the closing field.
- **Mist** (text-2): secondary copy, nav links at rest, metadata.
- **Slate** (text-3): tertiary labels: row numbers, captions, legal line, the quiet "Esboço" suffix.

### Named Rules
**The Rationed Blue Rule.** Electric blue fills only the primary action; blue on the void appears only as blue-text on active, open or focused things. If a screen shows blue on something that is neither an action nor a state, remove it.

**The One Field Rule.** A page gets at most one drenched blue field, and it is the closing ask. Its fill is field, not blue, for the contrast of its secondary text.

**The Continuous Void Rule.** The page background is the portrait's background. Never frame, card or border the portrait; mask its edges into the void instead.

## Typography

**Display Font:** Mona Sans variable (wdth 75–125, wght 200–900), with system-ui fallback
**Body Font:** Mona Sans at 100% width

**Character:** One family doing two jobs through its width axis: expanded, tightly tracked and medium weight for anything that names or acts; normal width and relaxed leading for anything read.

### Hierarchy
- **Display** (580, fs-display, 0.98, width 106%): the hero H1 and the closing title. Hero lines are split into masked spans for the entrance.
- **Headline** (560, fs-h2, 1, width 108%): section titles and case sheet titles.
- **Index** (450, fs-index, 1.02, width 118%): project names in the work index. The widest, lightest cut: names as objects.
- **Title** (520, fs-service / fs-service-sm, 1.1, width 108%): service names (main services larger), promise lines, process step titles (540).
- **Lead** (400, fs-lead, 1.5–1.55): section leads and hero subline, capped at 40–44ch.
- **Body** (400, 1.0625rem, 1.6): running text, capped at 52–56ch.
- **Small** (0.9375rem): row questions, metadata, footer links, button labels.
- **Label** (0.8125rem, tabular numerals): row numbers 01–03, step numbers 01–04, captions, fact terms. Sentence case, no tracking, never uppercase.

### Named Rules
**The Width Axis Rule.** Hierarchy comes from width before size: display, index, titles, brand and buttons use 104–118%; body text stays at 100%. On phones the hero title drops to 100% to hold its line breaks.

**The Tracking Floor Rule.** Negative tracking bottoms out at -0.035em (display, headline, index). Titles sit at -0.02 to -0.025em; text is untracked.

**The Content Numbering Rule.** Numbers appear only where order is content: the project index (01–03) and the process (01–04, the client-facing names Conversa, Planejamento, Desenvolvimento, Entrega). No section numbers, no labels above headings.

## Layout

A 12-column grid (column gap col-gap) inside a shell of max 1360px plus gutter padding on each side, with safe-area insets respected. Section heads split 7 / 5 at 960px and up (title left, lead right, aligned to the bottom), sitting under a hairline with 22px of air.

Vertical rhythm comes from one token: sections open with a full section of space and close with half. A section that follows a ruled list (Soluções after Projetos, Sobre after Soluções) opens with only half and drops its own top rule, because the list's bottom hairline already closes the previous block. The process section closes with a full section before the blue field.

The hero is a full-viewport centred grid: copy in columns 1–6, the framed portrait in columns 8–12, the caption under the copy. Under the actions sits a row of four 44px circular icon links (GitHub, LinkedIn, Instagram, WhatsApp). Below 960px the grid becomes one column and the portrait comes first, capped at 280px and square.

The Projetos section opens with a scroll stage: a 200vh block (150vh below 960px) whose sticky viewport holds the word. Breakpoints: 479px (full-width hero buttons), 640px (case facts in 3 columns, gallery 3:1), 960px (desktop grids, header nav; below it the dropdown menu panel and fixed CTA), 960–1199px (hero caption relocation), 1400px with a fine pointer (resting thumbnails in the project index), hover/fine-pointer queries for the cursor preview, and max-height 520px below 960px for landscape phones.

**The Ruled Row Rule.** Lists are rows, not cards: each row has a 1px line top border, the list has a 1px line bottom border, and rows breathe with clamp padding (about 22–44px).

## Elevation & Depth

Flat. Depth comes from tone (void, then ink, then panel), hairlines, the portrait's own light, and the one glass layer on the header. The header glass lives on a pseudo-element (void at 78%, blur 14px, saturate 140%, hairline bottom) that fades in once the page scrolls, so the mobile menu is not trapped inside the header. The case sheet dims the page with a void-tinted backdrop at 72%; the mobile menu dims it with a scrim at 55%.

### Shadow Vocabulary
- **Floating CTA** (`box-shadow: 0 14px 32px -10px rgba(0, 0, 0, .8)`): on the fixed mobile WhatsApp pill, to separate it from content scrolling underneath. Black, not blue.

### Named Rules
**The No Glow Rule.** No colored shadows, blurs of blue, gradient text or luminous halos anywhere in the page's own chrome. **One documented exception, by the owner's explicit request (2026-09-20):** the hero portrait keeps its legacy treatment from the previous site — a navy drop shadow, a blue inner glow, a glowing availability dot and a blinking cursor in the badge. It is a single framed object, not a licence to reintroduce glow elsewhere.

## Shapes

Three shapes: the pill (999px) for every action and the fixed CTA; the circle (50%) for accordion toggles, the case close button, the step nodes and the status dot; soft 6px corners for project imagery (thumbnails, the cursor preview, case covers and galleries). The hero portrait card is the one 28px surface, with a 32px ring around it. The one contained surface, the chat demo, uses 14px. Everything else is square and structured by 1px hairlines. The hero is crossed by a single 1px electric "/" (the stroke of the `</>` mark) with a vertical fade, and the closing field carries a large `</>` outline at 13% white behind the headline, bleeding off the bottom-left corner and clear of the buttons.

## Components

### Buttons
Confident pills, expanded labels, no shadows.
- **Shape:** full pill (999px); 48px tall by default, 40px small (header), 56px large (hero, closing), 52px full-width in the mobile menu panel.
- **Primary:** electric blue fill, white label, optional 18px WhatsApp glyph (the brand's real icon, inline SVG).
- **Light:** white fill, void label; used only on the blue closing field, where a blue button would vanish. Hover fills field-text.
- **Ghost:** transparent with a strong-hairline border; hover lifts the border to text-2.
- **Outline light:** the secondary action on the blue closing field (e-mail, Instagram): same pill and size as the light WhatsApp button, transparent with a 1px white border at 60%, white label and icon; hover fills white at 12%. The WhatsApp button stays the only filled one, so the hierarchy holds.
- **Icon link:** a 44px circle with a strong-hairline border and an 18px icon in text-2; hover goes to text and lifts 2px. Used only for the social row under the hero actions, always with an aria-label.
- **Hover / Active:** color shifts over 0.3s on the ease-out curve; the icon tilts slightly; press scales to 0.98. Focus is a 2px blue-text outline at 4px offset (white on the closing field).
- **Quiet link:** text-2 with a 1px strong-hairline underline at 7px offset; hover goes to text and the arrow nudges down. **Arrow link:** blue-text, weight 540, arrow slides right on hover; used for per-service WhatsApp asks.

### Navigation
The brand is the `</>` mark in blue-text plus "Juan Pablo" at 110% width. Desktop links are text-2, 0.9375rem; hover and current section go to text, and the current section gains a 4px blue-text dot. On scroll the glass layer fades in. Below 960px the nav becomes a dropdown panel under the header, not a full-screen takeover: up to 380px wide, right-aligned to the gutter, ink fill, strong-hairline border, 14px corners, links at 1.5rem (112% width) separated by hairlines, the current one in blue-text, with a full-width WhatsApp pill and a note at the foot. A 55% scrim dims the page behind it. While it is open the rest of the page is inert and scroll is locked; tapping anywhere outside the panel, a link, or Escape closes it.

### Hero Portrait (legacy frame)
The portrait sits in a 3/4 card (28px corners, hairline border, navy drop shadow `0 30px 60px -20px rgba(0,10,40,.7)` plus an inner blue glow), ringed by a 32px hairline frame inset -26px that rotates once every 26 seconds and carries a short blue gradient tick on its top edge. Two thin blue gradient lines cross the top-left and the right side. A glass pill hangs off the bottom edge with a glowing green dot, the lowercase line "disponível para novos projetos" and a blinking cursor. Square, capped at 280px, above the copy below 960px. This is the one place the No Glow Rule is suspended.

### Projects Opening (signature)
The Projetos section opens with a 200vh stage (150vh below 960px) whose sticky inner viewport centres the word "Projetos" at 17.5vw (22vw, capped at 7rem, below 960px) in 125% width. Scroll drives two custom properties on the stage: `--enter` (0→1 over the first 18%) wipes the word in from the left with a clip-path inset, and `--t` (0→1 over the whole stage) both scales it from 0.88 to 1.04 and pans a horizontal strip of the three project screenshots through the letters via `background-clip: text`. A 1px blue-gray text stroke keeps the letterforms legible over the darker frames. Without JS or with reduced motion the word rests at mid-progress, fully visible. The index rows follow under a ruled lead paragraph.

### Project Index (signature)
Each project is a full-width row: number, name at index scale, meta line ending in a quiet slate "· Esboço", and an arrow. With a mouse, hovering dims the other names to text-3, shifts the hovered name 14px right, turns the arrow blue-text, and a 16:10 preview (6px corners) follows the cursor, opening from an inset clip. At 1400px and up a desaturated 128px thumbnail rests in each row and comes to full color on hover or focus. On touch the thumbnail sits above the row. Every row opens the case sheet.

### Case Sheet
A native dialog sliding in from the right (up to 960px wide, full height, ink background, hairline left border), with a sticky round close button that rotates on hover. Contents: a metadata line, a headline title, a cover image, three ruled facts (Problema, Direção, Solução, with blue-text terms), a "Resultado visual" gallery and a link out to the live sketch.

### Service Accordion
Native details rows. Summary: service name (main services larger), the client's question in text-2, and a 32px round toggle whose plus becomes a minus and turns blue-text when open. At 960px the summary splits 7 / 5 / toggle. Opening fades the body up and, where supported, animates height.

### Chat Demo
A panel (panel fill, hairline border, 14px corners, 20px padding, max 420px) showing a short illustrative conversation with timestamped bubbles; incoming bubbles are dark navy, outgoing deep blue, with a 4px tail corner. It is always captioned "Exemplo ilustrativo" and messages stagger in when the service opens.

### Process Rail
Four steps on a 1px rail (vertical on phones, horizontal at 960px) whose blue-text fill scales with scroll progress; each step's node and number turn blue-text as it becomes active. Without JS the rail shows fully filled.

### Fixed Mobile CTA
Below 960px a full-width blue WhatsApp pill slides up once the hero leaves view and hides while the menu or case sheet is open.

### Motion
One easing for arrivals, `cubic-bezier(.16, 1, .3, 1)`, and `cubic-bezier(.65, 0, .35, 1)` for exits and wipes. The hero is the only orchestrated moment: title lines rise out of masks in sequence, the subline, actions and caption fade up, the portrait resolves from dark, the slash wipes down. Elsewhere content reveals 20px up on scroll with a 90ms stagger; the no-JS default is fully visible. Two scroll-linked moments carry the page: the Projetos word stage and the process rail. Under prefers-reduced-motion every animation and transition collapses to instant and scroll-linked effects stop.

## Do's and Don'ts

### Do:
- **Do** send every primary action to WhatsApp through the shared link builder, with a service-specific message where the context knows the topic.
- **Do** build lists as ruled rows with a hairline between each row and one closing the list.
- **Do** use the width axis for hierarchy: 104–118% for names, headings and actions, 100% for reading text.
- **Do** keep blue fills to actions and blue-text to active, open and focused states.
- **Do** label concept work as "Esboço" quietly in slate, inside the metadata, never as a badge.
- **Do** caption any simulated data "Exemplo ilustrativo".
- **Do** make every reveal start from visible content without JS and give every motion a reduced-motion fallback.

### Don't:
- **Don't** add glows, colored shadows, gradient text or blue halos; the only shadow is the one on the floating mobile CTA.
- **Don't** put labels or kickers above headings, or number sections; numbering is only for the project index and the process.
- **Don't** use icon-card grids; services, work and promises are rows.
- **Don't** frame or card the portrait; it dissolves into the void.
- **Don't** add a second drenched blue section.
- **Don't** show invented numbers, metrics, testimonials, client names, prices or timelines, including figures copied from the concept sites.
- **Don't** track tighter than -0.035em or uppercase small labels.
