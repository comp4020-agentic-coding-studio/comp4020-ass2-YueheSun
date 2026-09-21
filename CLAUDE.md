# Your harness

The platform under you is fixed and documented in `README.md`, and the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
publishes this deliverable's brief and spec. Read both before you plan or build.

## How to work in here

- Keep the dev server running (`pnpm dev`) so you see changes as you make them.
- Run `pnpm check` before you push.
- Open the page in a browser and look at it. The rendered page is the truth;
  your mental model of it isn't.
- When a check fails, read its output before you change anything.
- Never commit a red state.

## Astro's scoped styles and JS-created elements don't mix

A page's `<style>` block is scoped by default: Astro stamps a
`data-astro-cid-*` attribute onto the elements in that page's own template
and rewrites the block's selectors to require it. Anything a script creates
at runtime with `document.createElement` never gets that attribute, so any
scoped rule targeting it silently matches nothing — no error, just a page
that looks unstyled. If a component builds part of its DOM in a `<script>`,
give the `<style>` block covering those parts `is:global`, or move those
rules into `global.css`. Check the built page's CSS for an `astro-*` hash on
the rule in question if styles seem to be silently not applying.

## Not every page renders through `PageLayout.astro`

`PageLayout.astro` only reaches pages via the theme's `defaultLayout`
option, which auto-injects a `layout:` field into plain markdown pages under
`src/pages/` that don't declare their own. Content-collection detail pages
(`src/pages/{sessions,lectures,assessments}/[slug].astro`) and
`src/pages/index.astro` import `ContentLayout` from `astro-theme-university`
directly and never touch it — so a style scoped to `PageLayout.astro` is
silently absent from most of the site, no build error, `pnpm check` still
green. Put shared global CSS in `src/styles/global.css` and import it
explicitly from every page/route that needs it, rather than assuming a
layout-level style block reaches the whole site. When in doubt, grep the
built HTML for the rule across a few different page types before trusting
that a style landed.

## MDX's inline markup isn't JSX — camelCase SVG attributes pass through literally

`.deck.mdx`/`.mdx` files let you write markup that looks like JSX
(`<svg>`, `<g>`, camelCase props), but this pipeline is not a React
runtime: it compiles that markup directly into static HTML without
normalizing prop names. A camelCase SVG presentation attribute
(`fontSize`, `strokeWidth`, `textAnchor`, `fontFamily`) is emitted
verbatim as a literal camelCase HTML attribute, which browsers don't
recognize — they require kebab-case (`font-size`, `stroke-width`, etc.).
Nothing in `pnpm check` (build, a11y check, deck structural check) renders
the page and looks at it, so this fails silently: no error anywhere, just
oversized/overflowing text once you actually open the slide. The one
exception is `style={{...}}` object syntax, which *is* specially handled
and does serialize correctly to a kebab-case `style="..."` string. Write
inline SVG presentation properties as `style={{ fontSize: "26px", ... }}`
objects rather than bare attributes, so you're relying on the one path
this pipeline actually gets right instead of hand-tracking which raw
attribute names need kebab-casing.

## A shared checkout means another session's git state can become yours

If this working directory might be shared with another concurrent Claude
session, don't trust `git status` to reflect only your own edits, and never
`git add -A` — stage the files you actually touched, by name. A broad stage
can silently absorb another session's uncommitted work into your commit,
and a branch checkout by either session changes what "current branch" means
for both, mid-command, with no error. Run `git branch --show-current`
before every git operation, and if it isn't the branch you expect, stop and
tell the student rather than proceeding. When two sessions are known to be
running against the same repo, give each its own `git worktree` instead of
sharing one checkout.

## Auto-commit

Commit automatically whenever a feature is added, removed, or adjusted —
don't wait to be asked each time. A "feature" boundary is a working,
checked increment (e.g. one step of a manual-check sequence below, one
item from `plan.md`'s next-steps list), not every individual file edit.
Still never commit a red state (`pnpm check` must pass first), and this
durable authorization doesn't extend to push, force-push, or history
rewrites — those still need an explicit ask each time.

## Manual checks, one step at a time

`pnpm check` proves internal consistency (types, build, the rules you
thought to write a test for) — not that the thing behaves right against
reality. Anything where correctness is a judgment call rather than a
pass/fail assertion — course content, a page's layout, timing/feel,
anything parsed or synthesized from real-world input — needs a human to
actually look at the real output before more gets built on top of it.

- Break that kind of work into steps small enough that each one produces
  something checkable — a rendering, a number stream, a short recording —
  before starting the next step. Don't chain several unverified
  assumptions together and only check at the end: when it's wrong, you
  won't know which step broke it, and unwinding costs more the longer you
  waited.
- Build a small dev-only tool for the check when a console log or a
  static number isn't enough to judge it — e.g. something that lets a
  human see *and* hear generated output against the real source at the
  same time. Gate it out of the production build (`import.meta.env.DEV`
  or equivalent) and confirm it's actually stripped from `dist/`.
- Ask for the manual check explicitly and wait for the verdict before
  moving to the next step; don't assume a plausible-looking number means
  the step is done.
- When a manual check turns up a problem, check whether the *design* is
  wrong before reaching for a tuning knob — a threshold tweak can hide a
  bad assumption instead of fixing it.

## Capture process moments as they happen

When a non-obvious approach really helps --- a test flips, a bug stops
recurring, an attempt gets thrown away for a better one --- draft the moment
into `process-notes.md` then, while the why is fresh, not at the end. Note
which kind it is: the strongest moments land the fix in the harness (a
`CLAUDE.md` rule, a wired-up check, a discarded attempt), not in a retry ---
retrying until it passes is the routine case. `PROCESS.md` stays the curated
file --- moments get promoted into it later, by hand, not every draft.

## Phase checkpoints

`plan.md` (once it exists) tracks the stages of the current build. When a
task or phase from it is completed, stop and remind the student to:

1. update `plan.md` with the current state and next steps,
2. run `/clear`,
3. reload context with `@plan.md`.

Do this at each phase boundary, not only at the end.

`plan.md` is a living file with two jobs at once: record the reasoning behind
decisions already made in the code (not just what was built), and hand off
to a fresh agent instance with zero other context — since `/clear` follows
right after every update. Each update should therefore:

- state the current/completed state plus the reasoning behind it, clearly
  enough for a cold reader to understand why, not only what;
- call out the latest agreed-upon direction explicitly, even if
  implementation hasn't started yet;
- give a clear, ordered next step plus the following tasks, so a blank agent
  can act without re-deriving anything;
- stay clearly structured (sections/headings), not a chronological log;
- prune or rewrite stale sections rather than only appending, since the next
  reader has no other context to reconcile against.

## This file is yours

What you add to it is the harness, and the harness is assessed. This file and
the sensors you wire into `check` carry across the course. The platform under
this repo (the Slop identity, the content model, the base path, the generated
API) is fixed and documented in `README.md` — don't restate it here.
