# Applied Anomalology — build plan

## Status: build complete

Everything in "Agreed structure" below is built, checked, and committed.
`pnpm check` and `pnpm check:evidence` are both green as of the latest
commit. There is no required next step — see "One flagged limitation" for
the one thing an autonomous session couldn't verify and should get a human
look before submission.

## What this course is

**Applied Anomalology** (`SLOP3646`, level 3, "Applied Anomalology"). An
ordinary, openly-existing department at Slop University — nothing about the
department is secret. What's an open secret is its subject matter: anomalous
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

- **Dr. Perpetua Solano** — Convenor. Owns theory, classification
  frameworks, and the literature-synthesis lectures.
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
