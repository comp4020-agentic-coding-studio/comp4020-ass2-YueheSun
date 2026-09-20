# Gap inventory — where the course currently stands

Read directly from `src/content/{sessions,lectures,assessments}/*.md` and
`src/decks/week-01.deck.mdx` on 2026-09-21. This is a snapshot, not a
judgment about what should replace it — that's for `course-logic-proposal.md`
and `lecture-plan.md`.

## Week-by-week: what exists, what's missing

Phase boundaries per `plan.md`: Foundations 1–3, On-campus fieldwork 4–6,
Off-campus desk study 7–9, Literature synthesis 10–11, Capstone 12.

| Wk | Session | Lecture | Slides | Content depth |
|----|---------|---------|--------|----------------|
| 1 | ✅ Orientation: observation protocol (log/corroborate/classify) | ✅ Course overview | ✅ 9 slides | Session is solid — concrete 3-step protocol, a specific failure mode (skipping order → case file bounced). **Deck is thin**: table-of-phases slide, safety bullet points, a pull quote, a "what this course doesn't ask" slide. No worked example, no sample observation, no image/artifact, nothing that couldn't be said in prose. See diagnosis below. |
| 2 | ✅ Historical taxonomies (3 retired schemes → current 4-category scheme) | — | — | Session content is genuinely good (named failure per retired scheme). No lecture — for a week introducing the vocabulary every later week depends on, that's a real gap: the deck-level "why" (why *these* four categories, why they're not mutually exclusive) never gets slide-level elaboration. |
| 3 | ✅ Comparative warding (Western threshold/boundary vs Chinese feng shui/fú) | ✅ Protective practice as applied research | — | Best-developed session in Phase 1. Lecture is method-level ("why superstition-dismissal isn't an argument") but has **zero concrete ritual detail** — no actual described practice, sequence, or failure case. This is the week CLAUDE.md flags for a practical-use section (when/how/order/limits/failure), and right now none of that exists anywhere. |
| 4 | ✅ Fieldwork safety protocol (consent, buddy, disengagement) | — | — | Solid, procedural, has a real trigger condition for disengagement. No lecture — arguably fine, since week 4 is paperwork, but nothing here connects the safety protocol back to the warding countermeasures from week 3 (a natural link: does a warding measure ever double as a disengagement aid?). |
| 5 | ✅ Case clinic 1: sub-basement stacks rearrange | — | — | **This is the weakest case in the course.** See diagnosis below. |
| 6 | ✅ Case clinic 2: 13-step stairwell | ✅ Writing up a case file | — | Case is stronger than week 5's (has a number, a rule) but still thin. Lecture is a genuinely good, concrete write-up rubric — one of the better lectures in the course structurally, just let down by having weak case material to review. |
| 7 | ✅ Regional case survey: comparative method (sourcing/behaviour/corroboration) | — | — | Method is fine and reusable. **Zero actual cases named** — "two regional cases" is a placeholder, not content. This is where real adapted creepypasta/campus-legend material needs to land. |
| 8 | ✅ Global case survey | — | — | Same gap, worse: "the international corpus" is asserted, never populated. No case has a name, a source type, or a behaviour description anywhere in the file. |
| 9 | ✅ Comparative analysis: convergence | ✅ Does it converge on one cause? | — | Both files talk *about* convergence in the abstract ("certain triggers — thresholds, repeated counts, specific times — recur") without ever citing which cases converge. Reads as summary of a corpus that doesn't exist yet in the site. |
| 10 | ✅ Competing frameworks (cosmic prisoner theory, shadow domain theory) | — | — | **Theory-audit flag**: names two frameworks as if surveying real, circulating literature. Neither traces to a checkable source — see `01-theory-audit.md`. Structurally the session is fine (falsifiability framing, "what would break it") — the problem is the two named frameworks are invented and presented with no signal that they're in-universe fiction vs citation of a real fandom trope. |
| 11 | ✅ Fourth-dimensional hypothesis | ✅ Current state of the field | — | Plan.md is explicit this is meant to be "one contested view," and the session text does hedge ("leading, not settled"). But it's built entirely on the invented week-10 frameworks with no real external reference point (not even a labelled homage to a known trope, e.g. SCP's "extradimensional" tag or Backrooms lore) to anchor it as *recognizably* part of a real subgenre. |
| 12 | ✅ Final debrief | — | — | Fine as a wrap-up; depends on everything above being stronger to have something to wrap up. |

**Total: 12/12 sessions exist. 5/12 lectures exist (weeks 1, 3, 6, 9, 11).
7 weeks have no lecture at all** (2, 4, 5, 7, 8, 10, 12) — this is the
literal count behind problem #3 ("too few lectures"). Only week 1 has slides.

## Why the two on-campus anomalies aren't interesting enough

Both cases are structurally *events*, not *systems*. Good rules-based
horror (规则怪谈) and good campus legends both work because they specify a
**rule with a consequence for breaking it, and room for the rule to have
edge cases** — something a reader/player can reason about and get wrong.
Neither current case has that.

**Case 1 — sub-basement stacks rearrange overnight.** This is the weaker of
the two:

- No rule, just a fact ("it's different sometimes, not always"). There's
  nothing to test, follow, or violate — an observer can only record that
  it happened, not predict or provoke it.
  - No trigger condition (time, count, action) — contrast with the
  stairwell, which at least has "thirteen steps."
- No stakes or failure state. Nothing bad is described as possible; the
  safety protocol's disengagement rule has literally nothing to trigger it
  here, which makes week 5 feel disconnected from week 4's paperwork.
- No sensory specificity beyond "original lighting" and "bring a torch" —
  no detail a reader would actually remember (compare to real backrooms/SCP
  writing, which usually gives you one uncanny, checkable, physical detail:
  a smell, a sound, a texture, a light behaviour).
- No connection to week 3's warding material — the whole point of a
  fieldwork phase following a countermeasures unit is that students should
  get to *try* a countermeasure and watch it succeed or fail. Neither case
  currently offers that hook.
- Generic premise: "library that rearranges" is one of the most common
  liminal-space tropes going (Backrooms-adjacent); without a specific twist
  it reads as filler rather than a worked example.

**Case 2 — 13-step stairwell.** Stronger bones (a countable trigger, a
predictable-vs-actual geometry contrast: "ascending: sixteen steps, arrives
one floor above starting point as geometry predicts") but still
underdeveloped:

- The rule is stated but not exercised — there's no described variant
  behaviour (what happens at 12 steps? 14? does it ever fail to reset?),
  so there's nothing for a case file to actually analyse beyond "we counted
  thirteen, we arrived where we started." Good rules-horror usually has at
  least one *edge case that breaks the pattern* to give investigation
  something to chase.
  - No connection to any countermeasure — same gap as case 1. Nothing in
  the session tests whether a threshold ward (week 3's most directly
  relevant convergence point — thresholds/transitions) has any effect on
  the stairwell's behaviour, despite the stairwell being exactly a
  threshold/transition space.
- No escalation between week 5 and week 6 — the two cases are presented as
  parallel, same-weight examples rather than a deliberate escalation (e.g.
  case 1 = passive/observational, case 2 = interactive/rule-triggered would
  already be a clearer arc, but nothing marks that as intentional).

**Structural fix implied (for later phase-by-phase discussion, not decided
here):** both cases need (a) an explicit rule with at least one edge case,
(b) a stakes/failure condition that gives the safety protocol something to
actually be *for*, and (c) a tested link to a week-3 warding measure so
Phase 2 reads as applying Phase 1, not just restarting from zero.

## Other structural observations for the logic proposal

- **Phases 3–4 (weeks 7–11) currently have no primary source material at
  all** — every session and lecture talks about a corpus of cases and
  frameworks that is asserted, never shown. This is the single biggest
  content gap in the course, bigger even than the missing lectures, because
  the two assessments due in this window (Literature Review, week 9; and
  half of the Capstone's grounding, week 12) both require citable material
  that currently doesn't exist anywhere in the site.
- **The theory-audit problem (cosmic prisoner theory, etc.) sits exactly in
  this gap** — invented frameworks were presumably added to fill the "no
  real corpus" hole, which is a symptom of the same underlying problem
  rather than an isolated content-quality slip.
- **Week 3's warding material never gets reused.** It's introduced once,
  well, then never explicitly returns — not in the fieldwork cases (above),
  not in the desk-study phase, not explicitly in the capstone brief beyond
  "may draw on." For a course whose spine is meant to be
  observe→classify→countermeasure, the countermeasure step is the least
  exercised of the three after week 3.
