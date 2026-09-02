# Process overview

## What I built

**Applied Anomalology** — a fictional, deadpan-serious level-3 course
(`SLOP1646`) whose subject is anomalous phenomena students have half-noticed
in ordinary campus life but never studied. It's built on the fixed
`astro-course-university`/`astro-theme-slop` harness: 12 weeks across five
phases (foundations → on-campus fieldwork → off-campus desk study →
literature synthesis → capstone), three weighted assessments, two staff,
one rewritten slide deck, and a small set of spec tests asserting the
content graph is internally consistent, not just individually well-formed.

## How I got here

Identity and structure came first, agreed with the student before any
content was written:
[`8b1fdbf`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/8b1fdbf)
set the course code, title, and dates;
[`95698b8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/95698b8)
marked that step complete and pointed the next step at week content.

Content was written phase by phase, each one checked and committed before
the next started, so a broken assumption in phase 2 wouldn't get built on
top of in phase 4:
[`41b99eb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/41b99eb)
(weeks 1–3, Foundations),
[`600daf3`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/600daf3)
(recorded that phase's completion),
[`b8b8929`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/b8b8929)
(weeks 4–12: fieldwork, desk study, synthesis, capstone),
[`d7762ed`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/d7762ed)
(the three assessments), and
[`bc50d44`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/bc50d44)
(replacing the starter cast with Dr. Perpetua Solano and Field Safety
Officer Jonah Whitcombe, and backfilling `teachers:` refs across all 12
sessions and 5 lectures).

Writing `final-capstone.md`'s holistic marking description
(commit `d7762ed`) hit a real YAML trap: an unquoted multi-line plain
scalar breaks on a bare `: ` mid-sentence, because the parser can't tell it
apart from a nested mapping key. Fixed by rewording rather than quoting,
then grepped every other new frontmatter field for the same pattern before
moving on — written up in `process-notes.md`.

[`f77e377`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/f77e377)
recorded a judgment call I had to make without stopping to ask: who teaches
what. The brief called week 3's warding unit "Whitcombe's" and gave Solano
the synthesis lectures, so I extended that same split by phase rather than
inventing a new axis — fieldwork weeks (3–6) to Whitcombe, everything
bracketing it to Solano, week 12 co-taught.

At this point the student handed off with an explicit standing instruction:

> From here, please proceed through all the remaining phases automatically
> without pausing for my confirmation between phases — I'll be away for a
> while. Continue to follow the harness's existing checkpoint rule (pnpm
> check green + commit after each phase, then update plan.md) as you go. If
> you hit a genuine ambiguity that needs my judgment call, make your best
> reasonable decision, note it clearly in plan.md or process-notes.md, and
> keep going rather than stopping to wait

Everything from
[`8bc5a46`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/8bc5a46)
onward ran under that instruction, with the checkpoint discipline it names
as the substitute for stopping to ask:

- [`8bc5a46`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/8bc5a46)
  rewrote the week-1 deck as a 9-slide orientation briefing, verified by
  counting rendered `<section>` slides and checking each `_class` landed on
  the right one in the built output, not just by reading the source MDX.
- Running `pnpm check:evidence` proactively, ahead of the schedule
  `plan.md` had set for it, surfaced required scope the original plan
  hadn't enumerated: unfinished homepage copy, an unfinished policies page,
  and two starter images past their hash gate. Treated as required rather
  than deferred, since the gate is pass/fail at submission time regardless
  of when it's run.
  [`150293f`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/150293f)
  wrote the homepage body and policies page for real;
  [`8103e49`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/8103e49)
  replaced both starter images with liminal-corridor artwork in the
  existing brand palette.
- That image work hit a second real bug: the theme's `socialImage` slot
  re-encodes its source to JPEG for link-preview scrapers, and Astro
  refuses to rasterize an SVG source for that step by default — even
  though the sibling `heroImage` slot, which has no re-encode step, accepts
  SVG fine. Rather than flipping a platform-wide `dangerouslyProcessSVG`
  flag to accommodate one file, I kept the card design as an SVG source and
  rasterized it once locally to a PNG. Full writeup, with the exact error
  text, in `process-notes.md`.
- [`7b19897`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/7b19897)
  added the three spec tests the plan called for: the course code retains
  its assigned suffix, assessment weights sum to 100 across the course (the
  schema only checks per-assessment marking-criteria sums, not the
  cross-assessment total), and at least one lecture's `slides` field
  resolves to an actually-built deck rather than a dangling reference.
- [`7e29e05`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/7e29e05)
  is the CSS visual pass — a `.redacted` text style for case-file excerpts —
  and the most interesting bug of the whole run. A first attempt put the
  rule in a `<style is:global>` block on `PageLayout.astro`; `pnpm check`
  passed clean. But CLAUDE.md's own rule is that the rendered page is the
  truth, not the check, so I grepped the built HTML anyway — and the rule
  was only reaching one of five page types. `PageLayout.astro` turns out to
  only be wired up for two plain-markdown pages via the theme's
  `defaultLayout` option; every content-collection detail page (sessions,
  lectures, assessments) and the homepage import `ContentLayout` from the
  theme package directly and never touch it. `pnpm check` has no way to
  catch that — it's a fact about which component a page renders through,
  not a syntax or type error. Fixed by centralizing the rule in
  `src/styles/global.css` and importing it explicitly into every page that
  needs it, then re-verifying the same way I'd found the bug: grepping the
  rebuilt HTML across all the affected page types. Both `process-notes.md`
  and a new permanent `CLAUDE.md` note capture this, since it's a general
  pitfall for this harness, not a one-off.
- [`dec883e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/dec883e)
  recorded that fix in the harness and the plan.

## Before you ship

`pnpm check:evidence` verifies that this comment is gone, that your citations
resolve to real commits, that a crit week's reflection entry is in
`reflections/`, and that your `CLAUDE.md` is there. It checks that your account
is traceable, not that it is good: that is the marker's call.

Images aren't checked: unlike a citation whose SHA doesn't resolve, a broken
image is visible the moment this file is rendered on GitHub.
