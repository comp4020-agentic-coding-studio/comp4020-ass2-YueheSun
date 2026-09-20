# Applied Anomalology — build plan

## Status: content redesign in progress — Phase 1 (weeks 1–3) session content rewritten, lecture/deck coverage incomplete

The build described below (identity, cast, page structure, decks, assets,
spec tests, visual pass) is still complete and still green — nothing in
"Agreed structure" has been touched or is at risk. What changed: the
*content* filled into that structure was audited and found too thin (5 of
12 lectures exist, 2 of 12 have real content depth) and, in three places,
factually dishonest about its own sourcing (two "competing frameworks" in
week 10 are invented with no real source at all — see the theory audit).
A full research pass (`research/`) and a course-logic proposal
(`course-logic-proposal.md`, `lecture-plan.md`) now exist to fix this
without touching the structural build. See "Current redesign" below for
where that stands and what a cold reader needs to pick it up.

## Current redesign — where this stands

**Why this started:** the site structurally exists (12 weeks, 3
assessments, all pages render) but the content in most weeks is a
placeholder asserting a corpus ("the international corpus," "two regional
cases") that was never actually written, and week 10's two named theories
("cosmic prisoner theory," "shadow domain theory") don't trace to any real
source — see `research/01-theory-audit.md`. Fixing this needed real source
material before any lecture could be rewritten, so a research pass ran
first, deliberately kept separate from any code/content change.

**Design principle settled during this pass (governs all content
decisions from here on, screen every future addition against it):** the
course's purpose is to surface **the eeriness hidden beneath the surface
of ordinary life** — for an audience of ordinary university students. A
case, tradition, or theory earns a place in the course only if it's
something an ordinary person could plausibly brush up against (a
threshold in their own home, a library, an elevator, a dorm chat group,
a VHS tape, a chain email) — not exotic occult lore, government-facility
containment mythology, or monster-of-the-week content. This is a
screening filter, not a retroactive rewrite of what's already agreed
(the "no grand unifying theory" and "open secret = the phenomena, not the
course" decisions already satisfy it and don't need to change) — see
`course-logic-proposal.md`'s "Ordinary-life audit" section for how every
sourced research candidate was checked against it, and which ones failed.

**Mid-pass correction (this update):** after the first research pass, the
student asked two follow-up questions that changed the corpus, not just
the plan text: (1) audit everything already gathered against the
ordinary-life design principle above, and (2) remove what fails, then
search widely for real, better-fitting replacements. That produced two
supplement research files (`sources-phase1-supplement.md`,
`sources-phase3-supplement.md`), which have now been read in full,
cross-checked against each other for overlap (Slender Man and BEN Drowned
were candidates in both — resolved and documented, see `sources.md`), and
merged into `sources.md` and `course-logic-proposal.md` §0. Nothing was
deleted outright: every demoted item is reclassified in place with its
new role (literary comparison, contrast case) so the earlier research
investment stays visible, and the new material is added as its own
clearly-marked subsections rather than renumbering the original corpus.

**What exists now:**
- `research/00-gap-inventory.md` — week-by-week content-depth audit plus a
  diagnosis of why the two on-campus cases (rearranging sub-basement,
  13-step stairwell) don't work as horror (no rule, no stakes, no link to
  week 3's warding material).
- `research/01-theory-audit.md` — verifies every theory/tradition the site
  currently presents as established. Two week-10 frameworks are fabricated
  outright; the week-11 "fourth-dimensional hypothesis" is a real trope
  *family* (Kripal) wearing an invented specific name; the week-3 warding
  material is real but under-cited and missing concrete procedure.
- `research/sources.md` (merged from `sources-phase1.md`/`-phase2.md`/
  `-phase3-5.md`, then further merged with `sources-phase1-supplement.md`/
  `-phase3-supplement.md` after the ordinary-life audit) — the full sourced
  corpus for all 5 phases, now including: 9 real warding traditions for
  week 3 (5 original + 4 from the expansion pass: witch bottles, mezuzah
  fraud, witch balls, nazar amulets, mirror-covering), a week-1 hook
  ("Candle Cove"), 12 campus rules-horror candidates for weeks 4–6, a full
  week 7/8 replacement pipeline for the demoted SCP-093 (Polybius,
  Halloween-candy legend, Petscop, BEN Drowned, SCP-1048, Bloody Mary,
  Hanako-san, Charlie Charlie Challenge), and 6 real citable frameworks for
  weeks 9–11 (2 of which — Tolbert/Slender Man+Marble Hornets, Fisher/The
  Stone Tape — now have a directly paired real case, not just a citation).
- `course-logic-proposal.md` — the course's through-line, 2–3 alternative
  progression structures with trade-offs, explicit weak-link callouts, and
  the ordinary-life audit of every sourced candidate, updated after the
  expansion pass with sharper recommendations (drop vs. relabel) now that
  real replacements exist for most demoted items.
- `lecture-plan.md` (marked DRAFT) — per-week title/role/points/sourced
  case/hook/assessment-link for all 12 weeks, a week-1 slide-by-slide
  outline, and week 3's practical-measures-in-use slide section with
  explicit cross-references to which week 4–6 case uses which week-3
  measure, built from the finalized (but not yet student-approved) corpus.

**Course logic is now settled (2026-09-21)** — full record in
`course-logic-proposal.md` §5. In brief:
- **Progression:** A+C blend — keep the existing phase/week/assessment
  boundaries, fold case-theory pairing into how weeks 9–11 are written.
- Dunwich Horror and Painted Skin **dropped outright** (witch bottles,
  mezuzah fraud replace their teaching roles); Hōichi stays
  literary-comparison-only.
- SCP-093 **dropped outright** (full week 7/8 replacement pipeline stands
  in its place).
- Week 3 traditions are **named explicitly as themselves**, not
  in-universe-renamed.
- Case swaps confirmed: library sub-basement → SCP-2093-derived seminar
  room (wk 5); stairwell keeps its setting, gains an SCP-087-derived edge
  case (wk 6).
- Week 3's supplementary traditions **trimmed to two of three**: nazar
  amulets and mirror-covering kept (both have real downstream uses —
  see `lecture-plan.md`'s cross-reference table and the week 9 Tolbert
  pairing); witch balls cut (weakest fit, unused anywhere else). Final
  week-3 tradition count: 9.
- Tolbert/Slender-Man-origin+*Marble Hornets* and Fisher/*The Stone Tape*
  pairings **confirmed** for weeks 9–10 (creature still excluded from the
  case corpus). "Candle Cove" **confirmed** as the week 1 hook.

`lecture-plan.md` has been updated to reflect every decision above (all
`[PENDING Q#]` markers resolved to `[SETTLED Q#]` in place, so the
reasoning trail stays visible).

## Hard requirement: every week needs a lecture page and a full deck

Settled 2026-09-21, supersedes the "Agreed structure" week-by-week table's
`—` entries further down wherever they conflict: **all 12 weeks must each
have a lecture content-collection file and a full slide deck**, not just
the 5 weeks `lecture-plan.md` originally scoped a lecture for. A student
following the timetable should never hit a week with a practical but
nothing to read or present. This does not change teacher ownership or the
phase/assessment structure — it only fixes the lecture/deck column, which
was `—` for 7 of 12 weeks by omission, not for any content reason.

**Sourcing and distribution:** each week's lecture/deck content is drawn
from `research/sources.md`, allocated by volume across the weeks in its
phase so no single week is overloaded and none is thin —
`lecture-plan.md`'s per-week breakdown already does this allocation (e.g.
phase 2's SCP-2093/SCP-087 material split across weeks 4–6, phase 3's
sourcing-failure-mode corpus split across weeks 7–9); writing each week's
lecture means turning that existing allocation into prose, not
re-deciding how much material each week gets. If a week's allocated
material genuinely doesn't support a full lecture, this file says so
plainly rather than the content being padded to look complete.

## Phase 1 (weeks 1–3) — session content rewritten and manually verified; lecture/deck coverage still incomplete

**Correction (2026-09-21): the previous version of this section claimed
Phase 1 was "implemented and verified," which overstated what was
actually done.** What's true: session-page prose for weeks 1–3 was
rewritten and verified (below), and week 1 alone gained a real deck. Week
2 has no lecture file at all, and neither week 2 nor week 3 has a deck —
this was previously described as "by design, not a gap," which was wrong.
`lecture-plan.md` itself already flagged week 2's missing lecture as a
gap to fill, and the new hard requirement above means every week needs
both regardless of the original structure. Caught when directly asked why
week 2 had no lecture and why only week 1 had slides — see
`process-notes.md` for how this was found and why "implemented and
verified" was the wrong claim to have made.

Turned `lecture-plan.md`'s settled Phase 1 points into actual content
edits, cross-checked against `research/sources.md` for procedural detail
rather than paraphrased from the plan alone:

- **Week 1** — `src/decks/week-01.deck.mdx` gained two new slides right
  after the title: a "Case file, unlogged" hook (the Candle Cove-style
  in-universe forum thread, `sources.md`'s own suggested adaptation) and a
  `_class: banner` slide stating the ordinary-life design thesis
  explicitly, both before the existing "Applied is not decoration" slide.
  Deck is now 11 slides (was 9); rebuilt and reverified section-by-section,
  same as the original 9-slide check. `src/content/lectures/week-01.md`
  gained the same thesis statement in prose plus a sourcing-standard
  preview bullet ("behaviour, not atmosphere, corroborated"). Session file
  (`01-observational-method.md`) was already solid — untouched. **Lecture
  and deck both exist — this week is the only fully-covered one.**
- **Week 2** — `src/content/sessions/02-historical-taxonomies.md` gained
  two paragraphs: an explicit callout that all three retired taxonomies
  are described generically, with no invented "case zero" incident (the
  same sourcing discipline the course holds its own cases to), and a
  concrete preview of *why* non-exclusive classification matters — the
  SCP-1048 "Builder Bear" persistent-plus-dormant case, held back for its
  full treatment in week 7. **No lecture file and no deck exist for week
  2 — a real gap**, now first in line under Part 3 below.
- **Week 3** — the big rewrite. `03-comparative-warding.md` replaced two
  generic tradition-categories with all **nine** named, real traditions
  from `course-logic-proposal.md` §5's settled corpus: iron/salt
  thresholds, fú talisman consecration, spirit walls, mezuzah placement,
  ofuda/kamidana/shimenawa (the five originals) plus English witch
  bottles, mezuzah fraud, nazar amulets, and mirror-covering during shiva
  (the four supplementary ones — witch balls cut per the settled
  decision). Each is named explicitly as itself per `[SETTLED Q4]`, with
  real procedure/sequence/failure detail pulled from `sources.md`'s
  practical-measures table, not just cited by name. Spec bullets rewritten
  to match (procedure/sequence/failure of ≥3 traditions; convergence
  across ≥2; why explicit naming matters). `week-03.md` lecture updated to
  match the nine-tradition scope and state the explicit-naming rationale.
  **Lecture exists; no deck yet** — the deck is next after week 2's
  lecture, and must include a "how to use protective measures in
  practice" section per the practical-measures cross-reference table in
  `lecture-plan.md`.

**Manually verified**, not just `pnpm check`-green (which also passed):
built the site, grepped rendered HTML for the new content, then drove a
real headless Firefox (via a cached Playwright install + the
`LD_LIBRARY_PATH`-pointed-at-extracted-`libasound.so.2` workaround already
recorded in `process-notes.md`) across all five touched pages plus stepped
through the deck slide-by-slide with keyboard nav. No console errors on
any page; the new banner slide renders identically styled to the existing
"Fieldwork starts week 4" banner slide (confirms the `_class` comment
parsed correctly, not just that a slide-boundary `---` was inserted); week
2/3 session pages render with correct headings, bold terms, numbered
lists, and the 符 CJK character displaying correctly.

## Lecture + deck coverage status

Tracks the hard requirement above, one row per week. Updated as each
phase of Part 3 work completes — this is the authoritative place to check
what's actually done, not the historical week-by-week table further down.

| Week | Phase | Lecture page | Deck | Status |
|---|---|---|---|---|
| 1 | Foundations | ✅ | ✅ | done |
| 2 | Foundations | ✅ | ✅ | done |
| 3 | Foundations | ✅ | ✅ | done |
| 4 | On-campus fieldwork | ✅ | ✅ | done |
| 5 | On-campus fieldwork | ❌ | ❌ | missing |
| 6 | On-campus fieldwork | ✅ | ❌ | deck missing |
| 7 | Off-campus desk study | ❌ | ❌ | missing |
| 8 | Off-campus desk study | ❌ | ❌ | missing |
| 9 | Off-campus desk study | ✅ | ❌ | deck missing |
| 10 | Literature synthesis | ❌ | ❌ | missing |
| 11 | Literature synthesis | ✅ | ❌ | deck missing |
| 12 | Capstone | ❌ | ❌ | missing |

**Progress:** week 2 is done (lecture built around applying the
classification scheme as method, honestly flagged as thin since no
sourced material targets week 2 specifically; deck follows the same
content, 10 slides, verified against built HTML for slide count and
`_class` styling). Week 3's deck is done (13 slides, includes the
required "how to use these in practice" section walking through the
when/how/sequence/limit/failure reading of a countermeasure and three
worked examples pulled from `sources.md`'s practical-measures table;
verified against built HTML for slide count, class styling, and section
presence).

**Next step, in the agreed order:** (1) one week per remaining phase
(pick from 4–6, 7–9, 10–11) to get every phase at least one full
lecture+deck; (2) the rest, in whatever order keeps each phase's
`pnpm check` green before moving on. Commit after each phase and update
the table above as it goes. If work stops before all 12 weeks are
covered, this table — not prose elsewhere in this file — is what should
say exactly what's left. **Checkpoint now, before starting**: this
section is updated; run `/clear` and reload with `@plan.md` before
beginning implementation.

## What this course is

**Applied Anomalology** (`SLOP3646`, level 3, "Applied Anomalology"). An
ordinary, openly-existing course at Slop University — nothing about the
course is secret. There is no department; the course is the whole
institutional unit in-fiction, run by its own convenor and field safety
officer. What's an open secret is its subject matter: anomalous
phenomena that students have more or less encountered somewhere in their
everyday campus life, but never paid close attention to or dared think too
hard about, written up with total institutional deadpan as legitimate
findings (sourced from real internet creepypasta — Backrooms-style liminal
spaces, rule-based entities, cosmic-horror incursions).

The course is **applied, not theoretical** — that word in the title is
load-bearing. Its core purpose is observing anomalous phenomena, classifying
them, and studying practical countermeasures and responses to them. The
comparative Western/Chinese warding-tradition unit (week 3) is central to
this, not a curiosity bolted on. A later phase widens to a comparative desk
study of regional/global cases, and a literature-synthesis phase surveys
competing theoretical frameworks for cause — including a "fourth-dimensional
space" hypothesis some cases converge on, presented as contested and actively
argued over. **That hypothesis is one topic raised during synthesis, not the
course's goal or spine** — the course does not exist to arrive at a grand
unifying theory, and the capstone does not ask students to settle one.

On-campus anomalies (weeks 4–6) are original inventions set at the fictional
Slop University campus (not real ANU locations); off-campus material
(weeks 7–9) draws on existing creepypasta framed as case data.

## Agreed structure (fully realized)

### Identity — `src/course-config.ts`, `src/site-config.ts`

Course code `SLOP3646` (kept assigned `646` suffix), level 3, "Semester 1"
2027, date range `2027-02-22`–`2027-05-28`. `sessionLabels` renamed to
**Practicals** (collection key/URL/refs stay `sessions`). `socialImage`/
`socialImageAlt` point at the replacement card/hero assets.

### Cast — `src/content/people/`

- **Dr. Perpetua Solano** — Course Convenor, Applied Anomalology (SLOP3646).
  Owns theory, classification frameworks, and the literature-synthesis
  lectures.
- **Teaching Fellow Jonah Whitcombe** — Field Safety Officer. Runs the
  field practicals and the comparative warding-traditions unit; owns
  fieldwork safety protocol.

Photos dropped rather than replaced — in-fiction: "identifying photograph
withheld per containment protocol" (both `photo`/`photoAlt` are optional in
the schema; a deleted starter file passes `check:evidence`'s hash gate).

**Teacher ownership split** (a judgment call, not specified up front):
Solano owns theory/method/desk-study/synthesis — weeks 1, 2, 7, 8, 9, 10, 11
sessions, plus lectures week-01, week-06, week-09, week-11. Whitcombe owns
fieldwork/warding — weeks 3, 4, 5, 6 sessions, plus lecture week-03. Week 12
(final debrief) is co-taught. Rationale: the brief already called week 3's
warding unit "his" and gave Solano the synthesis lectures, so this extends
that same split by phase rather than inventing a new axis.

### Week-by-week (12 weeks, 5 phases)

| Wk | Phase | Practical (session) | Lecture |
|----|-------|----------------------|---------|
| 1 | Foundations | Orientation: observational method basics | **Lecture + deck**: course overview, why anomalology, method |
| 2 | Foundations | Historical taxonomies of anomalous phenomena | — |
| 3 | Foundations | Comparative warding: Western practice (salt, iron, threshold rites) & Chinese practice (feng shui boundary theory, fú talismans) | Lecture: protective practice as applied research, not superstition |
| 4 | On-campus fieldwork | Fieldwork method & safety protocol (consent, buddy system, disengagement rule) | — |
| 5 | On-campus fieldwork | Case clinic 1: the library sub-basement stacks that rearrange overnight | — |
| 6 | On-campus fieldwork | Case clinic 2: the stairwell that returns you to your starting floor after 13 steps — **Case File due** | Lecture: writing up a case file, review of the two campus cases |
| 7 | Off-campus desk study | Regional case survey: comparative method | — |
| 8 | Off-campus desk study | Global case survey: the international corpus as primary source data | — |
| 9 | Off-campus desk study | Comparative analysis: convergence across cases — **Comparative Literature Review due** | Lecture: does it converge on one cause? |
| 10 | Literature synthesis | Competing frameworks (cosmic prisoner theory, shadow domain theory, others) | — |
| 11 | Literature synthesis | The unifying fourth-dimensional hypothesis, presented as leading-but-contested | Lecture: current state of the field, open dissent |
| 12 | Capstone | Final debrief / practical wrap-up — **Final Capstone due** | — |

This table is also the design source for **`/timetable/`** (new page:
`src/pages/timetable.astro` + `src/components/TimetableGrid.astro`), which
renders it live from the `sessions`/`lectures`/`assessments` content
collections instead of transcribing it — so session/lecture titles, dates
and due-week badges can never drift from the real content. The one thing
that *is* hardcoded there is the Phase column itself (the 1–3/4–6/7–9/10–11/12
week ranges above): `content.config.ts`'s schema has no `phase` field, and
adding one just to back this label would mean touching all 12 session
frontmatters for no other benefit. If a future edit changes which weeks
belong to which phase, update both this table and the `PHASES` array in
`TimetableGrid.astro` — they're two representations of the same decision,
not one deriving from the other.

### Assessments — `src/content/assessments/`

- **Field Case File** — due wk 6, 30%, weighted marking (documentation
  rigor / safety-protocol adherence / analytical quality). Phases 1–2.
- **Comparative Literature Review** — due wk 9, 30%, weighted marking
  (breadth of comparison / quality of evaluation of competing theories).
  Phase 3.
- **Final Capstone** — due wk 12, 40%, holistic marking. Phases 4–5:
  propose a containment/warding protocol for a novel case, grounded in the
  course's classification and countermeasure material.

Weights sum to 100 (asserted by `spec/assessment-weights.test.ts`).

### Deck — `src/decks/week-01.deck.mdx`

Rewritten as the week 1 orientation briefing: what anomalology is, the
applied observe → classify → apply-countermeasure method, safety-first
framing for fieldwork to come. 9 slides, verified by counting rendered
`<section>`s in the built output and checking each `_class` (`impact`,
`banner`, `quote`, `centered`) landed correctly.

### Assets — `src/assets/images/`

`card.png` and `hero-home.avif` (starter, hash-gated) replaced with
liminal-corridor artwork in the existing Slop gold/black brand palette:
`hero-home.svg` (converging-corridor perspective) and `card.png` (a
repeating light-panel grid with one dark door breaking the pattern — see
"platform constraint" below for why this one is a PNG, not SVG).

### Spec tests — `spec/`

Alongside supplied `data-integrity.test.ts`:

1. `course-identity.test.ts` — course code retains assigned `646` suffix.
2. `assessment-weights.test.ts` — weights sum to 100 across the course.
3. `deck-links.test.ts` — at least one lecture's `meta.slides` resolves to
   a real, generated `dist/decks/<slug>/index.html`.

### Visual pass

A `.redacted` text-styling class for case-file excerpts, in
`src/styles/global.css` (imported explicitly into every page that uses
it — see the layout-routing pitfall below), exercised by a sample redacted
log entry in `week-06.md`.

## Two platform constraints hit during the build (full detail in `process-notes.md`)

- **`socialImage` can't be SVG even though `heroImage` can.** `socialImage`
  gets re-encoded to JPEG downstream (for scrapers that can't decode modern
  formats); that re-encode is a sharp rasterize call that Astro refuses to
  run on an SVG source. `heroImage` has no such step, so SVG works there.
  Fix: kept the card design as an SVG source, rasterized it once locally to
  PNG, committed the PNG — narrower blast radius than flipping the global
  `image.dangerouslyProcessSVG` config flag for one asset.
- **A global style on `PageLayout.astro` doesn't reach content-collection
  pages.** `PageLayout.astro` is only wired up via the theme's
  `defaultLayout` option, which reaches exactly two plain-markdown pages
  (`404.md`, `policies/index.mdx`). `src/pages/{sessions,lectures,
  assessments}/[slug].astro` and `src/pages/index.astro` import
  `ContentLayout` from the theme package directly and never touch it — a
  style scoped to `PageLayout.astro` silently matches nothing there, no
  build error, `pnpm check` stays green throughout. Caught by manually
  grepping built HTML for the rule rather than trusting the check. Fixed by
  centralizing shared CSS in `src/styles/global.css` and importing it
  explicitly into every page that needs it. Now also a permanent CLAUDE.md
  note (sibling to the existing scoped-styles-vs-JS-DOM one) so it isn't
  rediscovered on the next style added to this repo.

## Flagged limitation — resolved

An earlier session flagged that this environment had no headless browser
for a real visual check. That was wrong: a cached Playwright install and
browser binaries already existed on disk from some prior `npx` run
elsewhere on the machine, and a missing `libasound.so.2` (the one shared
lib blocking Firefox) was fixable without root via `apt-get download
libasound2t64` + `dpkg-deb -x`. Driven headless with Firefox, screenshots
of `/`, `/timetable/`, `/policies/`, and `/lectures/week-06/` all confirmed
correct: homepage hero renders the SVG artwork correctly, the timetable
table matches this doc's week-by-week table exactly (12 rows, right phase
bands, due-badges on the right rows with correct dates), the `.redacted`
span renders as a proper redaction box inline in the sample log entry, and
no console errors on any page. Full detail (including the workaround
recipe) in `process-notes.md`'s final entry.

## Commit log for this build (chronological)

`f18ed41` harness carried forward · `8b1fdbf` identity · `95698b8` plan
checkpoint · `41b99eb` weeks 1–3 · `600daf3` plan checkpoint · `b8b8929`
weeks 4–12 · `d7762ed` assessments · `bc50d44` cast + teacher backfill ·
`f77e377` plan checkpoint · `8bc5a46` deck rewrite · `150293f` homepage +
policies copy · `8103e49` image assets · `ecf762d` plan checkpoint ·
`7b19897` spec tests · `7e29e05` `.redacted` CSS + layout-routing fix ·
`dec883e` plan/harness checkpoint · `281ab7a` `PROCESS.md` · `ff9d1cf`
plan checkpoint.

Full prose account with reasoning: `PROCESS.md`. Raw process moments (YAML
colon trap, SVG/`socialImage` constraint, layout-routing bug, this
limitation): `process-notes.md`.
