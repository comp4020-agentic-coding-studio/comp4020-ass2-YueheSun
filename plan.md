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

## Current state (updated)

**Autonomous-execution note:** the student authorized proceeding through all
remaining phases below without pausing between them (they stepped away).
Standing rules still apply: `pnpm check` green before every commit, commit
after each completed phase, update this file at each boundary. Genuine
ambiguities get a documented judgment call here or in `process-notes.md`
instead of a stop-and-wait. The usual `/clear` between phases is skipped for
the same reason — this file is being kept current regardless, so a fresh
agent can still pick up correctly if the session breaks.

Identity done (`8b1fdbf`). **All 12 weeks of session/lecture content across
all 5 phases are written and committed** (`41b99eb`, `600daf3` for phase 1;
`b8b8929` for phases 2–5 — weeks 4–12). Table in "Agreed structure" above is
now fully realized in `src/content/sessions/` and `src/content/lectures/`.

**Assessments done (`d7762ed`)**: `case-file.md` (30, weighted), 
`literature-review.md` (30, weighted), `final-capstone.md` (40, holistic) —
weights sum to 100. Starter `assignment-1.md`/`final-project.md` deleted.
Hit one real bug here, written up in `process-notes.md`: a bare `: ` inside
an unquoted multi-line YAML plain scalar (prose in `final-capstone.md`'s
holistic `marking.description`) parses as an ambiguous nested mapping key
and fails the whole document. Fixed by rewording rather than quoting; then
grepped all other new frontmatter for the same pattern to rule out latent
copies.

**Cast done (`bc50d44`)**: Dr. Perpetua Solano (convenor) and Jonah
Whitcombe (Field Safety Officer) replace the starter people entries;
starter photos deleted, `photo`/`photoAlt` dropped (in-fiction: "withheld
per containment protocol"), satisfying `check:evidence`'s starter-hash
gate via deletion. `teachers:` backfilled on all 12 sessions + 5 lectures.

**Judgment call — teacher ownership split** (flagged as undecided in the
prior version of this file, now resolved): Solano owns theory/method/
desk-study/synthesis — weeks 1, 2, 7, 8, 9, 10, 11 sessions, plus lectures
week-01, week-06, week-09, week-11. Whitcombe owns fieldwork/warding — weeks
3, 4, 5, 6 sessions, plus lecture week-03. Week 12 (final debrief) is
explicitly co-taught (`teachers: [perpetua-solano, jonah-whitcombe]`),
matching its body text ("a joint session, run by both the convenor and the
Field Safety Officer"). Rationale: the Agreed structure already calls
week-3 warding "his" (Whitcombe's) unit and gives Solano the literature-
synthesis lectures, so this extends that same split forward/backward by
phase rather than introducing a new axis — fieldwork phase (3–6) to
Whitcombe, everything bracketing it to Solano.

`pnpm check` green after each of the three commits above.

## Next step

Done so far this phase: deck rewrite (`8bc5a46`), homepage body + policies
page (`150293f`), the two starter image assets replaced (`8103e49`) —
hero as SVG, card authored as SVG then rendered once to PNG (SVG can't be
`socialImage` directly; see `process-notes.md`) — and the three new spec
tests (`7b19897`: course-code suffix, assessment weights sum to 100, at
least one lecture resolves to a real built deck).

**CSS visual pass done (`7e29e05`)**: added a `.redacted` text-styling class
for case-file excerpts, exercised via a sample redacted log entry added to
`week-06.md`. Hit a real bug here: first put the rule in a
`<style is:global>` block on `PageLayout.astro`, and `pnpm check` passed —
but manually grepping the built HTML (not just trusting the check) showed
the rule only reached `dist/policies/index.html`, not the lecture/session/
assessment pages where the class is actually used. Root cause:
`PageLayout.astro` is only rendered via `defaultLayout` for plain markdown
pages (`404.md`, `policies/index.mdx`); the content-collection `[slug].astro`
routes import `ContentLayout` directly and never touch it. Fixed by moving
the rule into `src/styles/global.css` and importing it explicitly into
`PageLayout.astro` plus all three `[slug].astro` route files; re-verified by
grepping the rebuilt HTML across all four page types. Full writeup in
`process-notes.md`; a general CLAUDE.md note now documents the pitfall.

1. Write `PROCESS.md` for real (see judgment call above) — citing this
   session's actual commit hashes and the one real steering prompt (the
   autonomous "proceed through all remaining phases" instruction), not the
   template's placeholder hashes.
2. `pnpm check:evidence` + a final viewport check. Since no one is watching
   this session live, treat "manual check" as: build, then actually inspect
   the rendered output (fetch/read the built HTML, or render key pages/
   images to PNG and view them, as already done for the two new image
   assets and the `.redacted` CSS) rather than assuming a green `pnpm check`
   implies the page looks right — and note in `process-notes.md` if a real
   human look is still needed before this is truly done.

Check + commit after each numbered step, same discipline as the content
phases above.

**Judgment call — scope discovery from running `pnpm check:evidence` early:**
running it now (rather than only at the very end) surfaced starter-content
gates the original "Agreed structure" didn't enumerate: the homepage body
copy and hero alt-text comment in `src/pages/index.astro`, the whole of
`src/pages/policies/index.mdx`, and `PROCESS.md` itself (template comment +
two placeholder commit citations that don't resolve in this repo). Treating
these as in-scope required work, not optional polish, since step 8's
`pnpm check:evidence` is a hard gate and "never commit a red state" implies
getting it green eventually. Added as steps 1a/1b below; `PROCESS.md` moves
to its own late step so it can honestly cite the commits made after it would
otherwise have been written.

1a. Rewrite the homepage body (`src/pages/index.astro`: "What you will do",
    "Who it is for" sections, remove the STARTER_CONTENT comments) and
    `src/pages/policies/index.mdx` (real late-work/extension/integrity/help
    rules for this fictional course).
1b. Write `PROCESS.md` for real, near the end, citing this session's actual
    commits and the one real steering prompt that mattered (the autonomous
    "proceed through all remaining phases" instruction) — not the template's
    placeholder hashes.
