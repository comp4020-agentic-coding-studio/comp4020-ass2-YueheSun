# Applied Anomalology — build plan

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

## Current state

Harness carried forward from `comp4020-crit5-YueheSun`, committed
(`f18ed41`). Baseline `pnpm check` green. Course concept, identity, structure,
assessments, cast, assets and spec-test plan all agreed with the student —
see the full agreed structure below. No content files have been touched yet;
everything from here is execution.

## Agreed structure

### Identity — `src/course-config.ts`, `src/site-config.ts`

- `courseMeta`: code `SLOP3646` (keep assigned `646`), level `3`, title
  "Applied Anomalology", session "Semester 1", year `2027`, reuse the
  existing date range (`2027-02-22`–`2027-05-28`) so week dates stay inside
  the checked period. Description (80–300 chars) frames it as an applied
  research methods course. Tags e.g. `["fieldwork", "anomalous phenomena",
  "applied science"]`.
- `sessionLabels`: rename to **Practicals** (collection key/URL/refs stay
  `sessions`).
- `socialImage`/`socialImageAlt` point at the new hero/card asset (below);
  alt text updates automatically from `courseMeta`.

### Cast — `src/content/people/`

Replace both starter entries (delete old files, add new):

- **Dr. Perpetua Solano** — Convenor, Department of Applied Anomalology
  (School of Invented Disciplines). Owns theory, classification frameworks,
  and the literature-synthesis lectures.
- **Teaching Fellow Jonah Whitcombe** — Field Safety Officer. Runs the field
  practicals and the comparative warding-traditions unit; owns fieldwork
  safety protocol.

Photos: delete both starter `.avif` files, drop `photo`/`photoAlt`
frontmatter (both optional in the schema) rather than generating replacement
portraits — framed in-fiction as "identifying photograph withheld per
containment protocol." A deleted file passes `check:evidence`'s
starter-asset-hash gate.

### Week-by-week (12 weeks, 5 phases)

Sessions (Practicals) run every week; lectures sit at phase transitions.
Existing `sessions/01-*.md`, `sessions/02-*.md`, `lectures/week-01.md`,
`lectures/week-02.md`, and the deck get renamed/rewritten in place.

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

Rename convention: sessions `NN-topic-slug.md` (e.g. `06-case-clinic-2.md`),
lectures `week-NN.md` (kept, matching the deck's existing `/decks/week-01/`
path). `related:` refs between sessions/lectures/assessments get updated to
match the new slugs.

### Assessments — `src/content/assessments/`

Three-part, one per checkpoint (`assignment-1.md` → `case-file.md`,
`final-project.md` → `final-capstone.md`, add `literature-review.md`):

- **Field Case File** — due wk 6, **30%**, weighted marking (documentation
  rigor / safety-protocol adherence / analytical quality). Covers phases 1–2.
- **Comparative Literature Review** — due wk 9, **30%**, weighted marking
  (breadth of comparison / quality of evaluation of competing theories).
  Covers phase 3.
- **Final Capstone** — due wk 12, **40%**, holistic marking. Covers phases
  4–5: propose a containment/warding protocol for a novel case, grounded in
  the course's classification and countermeasure material. A position on the
  contested unifying theory may inform the protocol's design, but the
  deliverable is the protocol, not a verdict on the theory.

### Deck — `src/decks/week-01.deck.mdx`

Rewrite as the week 1 orientation briefing: what anomalology is, the applied
observe → classify → apply-countermeasure method that structures the course
(comparative/literature-synthesis phases are an extension of it, not the
point of it), safety-first framing for fieldwork to come.

### Assets — `src/assets/images/`

Replace `card.png` and `hero-home.avif` (starter-hash-gated) with two small
custom SVG images in a liminal-space motif (empty fluorescent corridor /
repeating geometric backrooms pattern), built in the existing Slop brand
palette.

### New spec tests — `spec/`

Alongside supplied `data-integrity.test.ts`:

1. Course code retains assigned `646` suffix.
2. Assessment weights sum to 100 across the whole course (schema only checks
   per-assessment criteria sums, not cross-assessment `weight`).
3. At least one lecture links a real, generated deck (API `meta.slides` set +
   `dist/decks/<slug>/index.html` exists).

### Visual pass (light touch)

Small atmosphere layer in `PageLayout.astro`'s global style block: a
"classified/redacted" text-styling class for case-file excerpts. Minimal,
on top of fixed brand tokens, not structural.

## Next step

1. Update `src/course-config.ts` and `src/site-config.ts` (identity +
   `sessionLabels`) — this is the smallest change that should immediately
   make the date-integrity check meaningful again. Run `pnpm check`, commit.
2. Write the 12-week session/lecture content, phase by phase (Foundations →
   fieldwork → desk study → synthesis → capstone), checking and committing
   after each phase.
3. Write the three assessment files (renamed, correct weights) and update
   `related:` refs.
4. Replace cast (`people/`) entries and delete starter photos.
5. Rewrite the week-01 deck.
6. Replace the two starter image assets.
7. Add the three new spec tests.
8. Add the light CSS visual pass.
9. `pnpm check:evidence` + manual viewport check.

At each phase boundary: update this file with current state + reasoning,
`/clear`, reload with `@plan.md`.
