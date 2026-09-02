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
