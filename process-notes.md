# Process notes

Raw moments, drafted as they happen. `PROCESS.md` is the curated file —
entries here get promoted there by hand, later, not automatically.

## YAML plain scalars break on a bare `: ` (colon-space) — 2027-09-03 (commit d7762ed)

Writing the Final Capstone's holistic `marking.description`, a sentence read
"The capstone is judged as a whole: whether the proposed protocol is...".
`astro check` failed with `can not read a block mapping entry; a multiline
key may not be an implicit key`, pointing at that line.

**What happened:** frontmatter values here are written as YAML plain
(unquoted) multi-line scalars. Any `: ` inside one — even mid-sentence, even
indented as a continuation line — is ambiguous with a nested mapping key,
and the parser fails the whole document rather than guessing. The other
assessment/session files happened to avoid this by chance (dashes, not
colons, in their prose).

**Fix applied:** reworded the sentence to drop the colon (`judged as a
whole, on whether...`) rather than quoting the whole multi-line block —
quoting a folded block correctly is fiddlier than just not writing a colon.

**This is a discarded-attempt/harness-gap moment, not a routine retry**: it's
a general trap for every future frontmatter description/spec field in this
repo, not a one-off typo. Worth promoting to `PROCESS.md` and/or a CLAUDE.md
note if it recurs — a quick self-check before committing new frontmatter
prose: scan for `: ` inside multi-line plain-scalar values.

## `socialImage` can't be SVG even though `heroImage` can — 2027-09-03 (commit 8103e49)

README documents SVG as a valid format for the theme's hero/card image
slots (confirmed in `astro-theme-university/images.ts`'s format allowlist).
Built both replacement images as SVG on that basis. `hero-home.svg` worked
immediately — the `Hero` component just passes it through. `card.svg`
failed the build: `UnsupportedImageFormat: SVG image processing is
disabled... set image.dangerouslyProcessSVG: true to rasterize SVG
sources.`

**What happened:** the format allowlist that both slots share is about what
*source* formats the theme's image resolver accepts, not about what happens
downstream. `socialImage` specifically gets re-encoded to JPEG (so link
scrapers that don't decode AVIF/SVG still get a preview), and that
re-encode step is a sharp rasterize call — which Astro's image pipeline
refuses to do on an SVG source by default, config untouched. `heroImage`
has no such downstream step, so the same source format that fails one slot
works fine in the other.

**Fix applied:** kept the design as an SVG source, rendered it once locally
with `sharp` to a 1200×630 PNG, committed the PNG, and pointed
`socialImage` at that — rather than flipping `image.dangerouslyProcessSVG`
in `astro.config.ts`, which would change platform behavior for every future
SVG asset just to accommodate one file's format.

**Judgment call, not just a bug fix**: the alternative (enable
`dangerouslyProcessSVG`) was rejected because it's a platform-wide config
change to work around a single asset choice — smaller blast radius to
rasterize once at authoring time than to loosen a safety default for the
whole build.

## A global style on `PageLayout.astro` doesn't reach content-collection pages — 2027-09-03 (commit 7e29e05)

Added a `.redacted` text-styling class (a demo excerpt in `week-06.md`'s
lecture body) as a `<style is:global>` block inside `src/layouts/
PageLayout.astro`. `pnpm check` passed clean, "no accessibility violations."
Manually grepped the built HTML for the rule anyway before trusting it, per
CLAUDE.md's manual-check discipline — and it was only present in
`dist/policies/index.html`. Absent from `dist/lectures/week-06/index.html`,
every session and assessment page, and the homepage.

**What happened:** `PageLayout.astro` is not a general page shell — it's
only reached via the theme integration's `defaultLayout` option, which
auto-injects a `layout:` frontmatter field into plain markdown pages under
`src/pages/` that don't declare their own (reaches `404.md` and
`policies/index.mdx`, and nothing else). `src/pages/{sessions,lectures,
assessments}/[slug].astro` and `src/pages/index.astro` each import
`ContentLayout` from `astro-theme-university` directly and render it
themselves — they never touch `PageLayout.astro` at all. A style scoped
there silently matches nothing on those pages: no build error, `pnpm check`
stays green, because nothing in the check suite asserts computed CSS
actually reaches specific pages.

**Fix applied:** moved the rule into a new `src/styles/global.css` (with a
comment explaining why it lives there instead of in a component-scoped
block) and imported it directly into `PageLayout.astro` plus each of the
three `[slug].astro` route files that use redacted-style excerpts.
Re-verified by grepping the rebuilt HTML for `.redacted{` across
`lectures/week-06`, a session page, an assessment page, and `policies` —
present in all four this time.

**This is a harness-gap moment, not a routine retry**: `pnpm check` cannot
catch "the CSS rule that's syntactically fine and scoped correctly never
reaches the element it's meant to style" — that's a routing fact about
which layout component a page actually renders through, invisible from
inside any single file. Worth a CLAUDE.md note (see below) since the
existing note about scoped styles + JS-created elements is the same failure
class one level up: a scoped rule silently matching nothing, no error,
just an unstyled page — here because of the wrong layout component, not
runtime-created DOM.

## Limits of the final manual check — no headless browser in this environment

Closing out the build, `pnpm check:evidence` passed clean (14/14 cited
commits resolve, no starter markers left). For the visual/viewport pass
CLAUDE.md asks for, this environment has no Playwright/Chromium/puppeteer
install and no way to launch one, so a real rendered-in-a-browser look
wasn't possible here. What was actually done instead: read the built HTML
and CSS directly (grepping computed rules and markup across every affected
page type, as in the `.redacted` fix above), and for the two new image
assets, rendered/rasterized them and viewed the actual pixels with the
image-reading tool rather than trusting a file existed. That's real
verification against the built artifact, not against a guess — but it
still isn't the same as opening the site in a browser and looking at
layout, spacing, and responsive behavior the way a human would. **Flagging
this for the student**: worth a quick `pnpm dev` + browser look before
submission, specifically at `/policies`, `/lectures/week-06`, and the
homepage hero, to catch anything a text-level check can't (e.g. how the
`.redacted` span reads inline in a blockquote, or how the new SVG hero
scales at different viewport widths).

**Update, 2026-09-20: this limitation was wrong — a browser was launchable
after all.** `npx playwright` refuses to install without confirmation, but
cached `playwright` npm installs (`~/.npm/_npx/*/node_modules/playwright`)
and cached browser binaries (`~/.cache/ms-playwright/{chromium,firefox}-*`)
already existed on disk from some earlier `npx` invocation elsewhere on this
machine — `require()`-ing the package directly from that cache path worked
fine. Two shared libs were still missing system-wide (no root, no
passwordless `sudo`): Chromium's headless-shell binary and the full Chrome
binary both hard-require `libnspr4.so`/`libnss3.so`/`libasound.so.2`, none
present via `ldd`. Firefox's own install directory bundles its own
`libnspr4`/`libnss3` copies, so it got past those — the one remaining gap was
`libasound.so.2`, which isn't provided by anything already unpacked.
`apt-get download libasound2t64` (no root needed — it just fetches the
`.deb` into the cwd) plus `dpkg-deb -x <deb> <dir>` extracted the `.so` into
a plain directory, and pointing `LD_LIBRARY_PATH` at it before launching
Firefox was enough for Playwright to drive it headless and capture real
screenshots of `/`, `/timetable/`, `/policies/`, and `/lectures/week-06/` —
confirming the hero, the new `.redacted` styling, and the whole timetable
table render as intended.

**This is a discarded-assumption moment, not a routine retry**: "no
Playwright/Chromium in this environment" was stated as a hard fact and
closed off the manual-check step entirely, when the actual blocker was two
missing shared libraries — fixable without root via `apt-get download` +
`dpkg-deb -x`, a trick worth remembering for any future "no browser
available" situation in a similarly locked-down container. Before declaring
a manual visual check impossible, check `~/.cache/ms-playwright` and
`~/.npm/_npx` for a stray cached install, and try the userspace
deb-extraction trick before giving up on a missing shared lib.

## `plan.md`'s "Phase 1 implemented and verified" status was wrong — 2026-09-21

`plan.md` stated "Phase 1 (weeks 1–3) implemented and manually verified,"
and separately claimed week 2's missing lecture file was "by design... not
a gap, matches the original structure." Neither was accurate: week 2 has
no lecture file or deck at all, and week 3 has a lecture but no deck —
only week 1 has both. The plan text conflated "the session prose for weeks
1–3 was rewritten and verified" (true) with "weeks 1–3 have complete
lecture/deck coverage" (false), and papered over a real content gap
(`lecture-plan.md` itself already listed week 2's missing lecture as a gap
to fill) by reframing it as intentional.

**How this was found:** not by re-auditing the plan — by being asked
directly, "why does week 2 still have no lecture, and why do all the
lectures except week 1 still have no slides?" That prompted an actual
`ls src/content/lectures/` and `ls src/decks/`, which immediately showed
5 lecture files and 1 deck against a claimed "implemented and verified"
Phase 1. The plan's own prose had described the gap accurately in its
"Status" section further up (`5 of 12 lectures exist, 2 of 12 have real
content depth`) while a lower section simultaneously claimed the opposite
for weeks 1–3 specifically — the two sections weren't cross-checked
against each other before either was written.

**This is a discarded-assumption / harness-gap moment, not a routine
retry**: a status claim in `plan.md` went unverified against the actual
file tree before being written down, and nothing in `pnpm check` catches
a false claim in a planning document — that class of error is only caught
by someone reading the doc and doubting it, which is what happened here.
Worth remembering for any future plan.md status update: before writing
"implemented" or "verified," run the `ls`/`grep` that would falsify it,
the same discipline already applied to code changes.

## MDX's inline SVG passes camelCase JSX attributes through literally — 2026-09-21 (commit pending)

Added an inline SVG diagram to week 2's deck (`.deck.mdx`), written with
JSX-style camelCase presentation attributes (`fontSize`, `strokeWidth`,
`textAnchor`, `fontFamily`) — the natural way to write it, since MDX's
markup looks like JSX. `pnpm check` passed clean (build, a11y check, deck
structural check, all green). A screenshot of the actual rendered slide
(headless Firefox, per the technique in the note above) showed the labels
rendered at a huge fallback size, overflowing both their boxes and the
slide viewport.

**What happened:** this MDX-to-HTML pipeline is not a React runtime — it
compiles JSX-like markup directly into static HTML, and does not normalize
JSX prop names to their HTML/SVG equivalents. Confirmed by grepping the
built `dist/decks/week-02/index.html`: `fontSize="26"` came through
verbatim as a literal attribute name, which browsers don't recognize as an
SVG presentation attribute (they require kebab-case: `font-size`). No
build or check error at any stage — this only fails visually, in a
browser. The one exception is `style={{...}}` object syntax, which *is*
specially handled and does compile to a real kebab-case `style="..."`
string.

**Fix applied:** moved every presentational attribute into `style={{
fontSize: "26px", strokeWidth: 2, textAnchor: "middle", ... }}` objects
instead of bare attributes, relying on the one syntax this pipeline does
serialize correctly rather than trying to remember which raw attribute
names need kebab-casing by hand. Re-verified via `dist/` grep (kebab-case
CSS properties present) and a fresh screenshot (correctly-sized,
non-overflowing text).

**This is a harness-gap moment, not a routine retry**: `pnpm check`'s
deck-structural checker and the a11y checker both stayed green through a
visibly broken slide, because neither renders and looks at the page — the
same failure class as the two layout/scoped-style notes above (a
syntactically valid rule or attribute that silently matches nothing a
browser honors). Promoted to CLAUDE.md as a platform-gotcha note, next to
the scoped-styles one, since any future inline SVG in a `.deck.mdx` file
will hit this the same way.
