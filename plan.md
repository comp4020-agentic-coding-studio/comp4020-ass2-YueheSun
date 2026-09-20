# Applied Anomalology — build plan

## Status: content redesign complete (12/12 weeks); shipped and live at https://comp4020-agentic-coding-studio.github.io/comp4020-ass2-YueheSun/ (Assignment 2, due 2026-09-21T12:00). Post-ship polish audit is now **closed** — see "Full-site audit" below; 22 of 23 items done (1 partially — #22, a deliberately non-exhaustive pass, see that row), 1 demoed on a throwaway branch and rejected by the user after looking at it live (#23 — see that row). **Next step for a cold reader: there isn't one from this audit — it's fully worked through. Any further changes need a new reason to reopen it, not a continuation of this checklist.**

## Full-site audit (2026-09-21) — prioritized checklist

A full read-only review against the brief/rubric, readability, extra credit,
atmosphere, and refinements, done in three parallel passes (requirements,
content-quality, atmosphere/extra-credit) before any further edits. Ordered
high-priority/small-effort first per the review request. `status` tracks
work against this list; update in place as items are picked up — don't
duplicate rows.

| # | Finding | Dimension | Priority | Effort | Status |
|---|---|---|---|---|---|
| 1 | Repo private / GitHub Pages not deployed — brief graded live, deadline same-day | Requirements | High | Small | **Done** (shipped 2026-09-21, see "Ship status" above) |
| 2 | "Practicals" rename never reached content — homepage card copy, Solano's bio, and 23/24 session/lecture files still say "session" | Readability | High | Small | **Done** — prose nouns renamed sitewide (sessions/lectures/people/index); collection key, `/sessions/` URL, and `related:` slugs left as-is (deliberate label/identifier split, see `site-config.ts`) |
| 3 | `_class: banner` isn't a real theme class — 15 thesis-statement slides (one/week) render unstyled | Atmosphere | High | Small | **Done** — swapped all 15 to the real `impact` class; verified styled `<section>` in built decks, zero "banner" left in `dist/` |
| 4 | PROCESS.md doesn't cover the redesign work (theory audit, research pass, case swaps) — the reasoning that most satisfies the 45%-weighted process criterion | Requirements | High | Medium | **Done** (this session, see "Ship status" above) |
| 5 | "X, not Y" antithesis is the site's default sentence shape almost everywhere, reads as a tic across 12 weeks | Readability | High | Medium | **Done** — reworded ~half the instances in the 5 highest-density files (week-02/03/07 decks, week-12 lecture, week-3 warding session); kept headings and single worked-example callbacks as deliberate anchors. Sitewide count was 75; not exhaustively rewritten everywhere (see effort rating) |
| 6 | Turn the `.hero` slide fix into a real deck visual identity (reused phase backgrounds) | Extra credit | High | Medium | **Done** (commit `09a7ffa`) — `.impact` fill on 27 thesis slides across weeks 4–12 now keys off phase via a `phase-{fieldwork,deskstudy,synthesis,capstone}` class (weeks 1–3 stay the unsuffixed default gold), reusing only existing brand tokens (`--at-secondary`/`--at-tertiary`) plus two derived tint/shade hexes — no new colours invented. **Caught and fixed a real contrast bug along the way**: `deck.css`'s `--at-on-primary` ink is computed once at `:root` from the site's gold and never re-derives per element, so overriding `--at-primary` alone left bronze/warm-grey text sub-AA (3.6:1/3.5:1 by WCAG maths) and the dark-shade slide nearly illegible (1.4:1) — invisible in a quick look, only surfaced by screenshotting all four and running the actual contrast numbers, not by trusting the design on paper. Fixed by redeclaring `--at-on-primary`/`-alt` locally per phase in `src/decks/theme.css`, reusing `deck.css`'s own formula against each phase's own primary. All four now ≥4.5:1, screenshotted directly (headless Firefox, element scanned into `.present` via keyboard nav — Reveal's JS API (`window.Reveal`) doesn't exist on this page, so navigate by dispatching `ArrowRight` and polling `.present`'s class list, not by calling into a global) |
| 7 | Week 7 deck's three "failure mode" slides are paragraph-shaped, not slide-shaped, unlike every other deck's labeled pattern | Readability | Medium | Small | **Done** — rewrote as 3-bullet `**The case**/**What audit found**/**The lesson**` structure per slide, matching the rest of the deck's pattern; slide count unchanged |
| 8 | Inconsistent lecture closers — weeks 3, 9, 11 have no "after this lecture" bridge that every other week has | Readability | Medium | Small | **Done** — added closing sections to all three, each bridging into the specific next-week content |
| 9 | `final-capstone.md` missing the `related:` lecture cross-ref the other two assessments have | Refinements | Medium | Small | **Done** — added `lectures/week-12`; course-graph edges 17→18 |
| 10 | Homepage body copy drops the deadpan voice entirely below the hero | Atmosphere | Medium | Small | **Done** — rewrote "What you will do"/"Who it is for" into the site's declarative/procedural register |
| 11 | People index cards lose the "photograph withheld" line (only shows on detail pages) | Atmosphere | Medium | Small | **Done** — added the same conditional line to `PeopleGrid.astro`'s card body |
| 12 | A hidden/non-nav page (e.g. `/incidents/`) linked only from an in-body reference | Extra credit | Medium | Small | **Done, already satisfied by prior work** — `src/pages/incidents/index.mdx` (the "disengagement invocation log") already exists, builds to `dist/incidents/`, and is linked only once, in-body, from `jonah-whitcombe.md`'s bio; verified absent from every nav/header/footer in the built HTML. No edit needed — this item is a verification confirming the audit's own example already existed and works, not an actual gap |
| 13 | PROCESS.md over the indicative 400–600 word count (was 975) | Requirements | Medium | Medium | **Done** (this session — now 514 words, see "Ship status" above) |
| 14 | "Ordinary" repetition risks flattening into a slogan by week 8–10 | Readability | Medium | Medium | **Done** (commit `5b60b73`) — checked actual sitewide density first (grep): 12 uses across 12 weeks, evenly spread, not concentrated or excessive on its own — and the word is thematically load-bearing (it names the course's actual design principle, see "Current redesign" above), so scrubbing it everywhere would cost more than it fixes. Found one genuine instance where it actually reads as a slogan: week 10's deck thesis slide restated the week 10 lecture's own sentence on this almost verbatim, back-to-back in the same week's two artifacts. Reworded the deck slide only; the lecture keeps its canonical statement |
| 15 | Decks have zero visual elements beyond text (no image/diagram/background anywhere sampled) | Atmosphere | Medium | Medium | **Done** (week-02 deck) — added an inline SVG diagram to week 2's "Ask each case four questions" slide: 4 labeled category boxes plus a non-exclusivity caption, `currentColor`-based so it inherits the deck's ink/theme automatically. **Hit a real platform gotcha along the way**: this MDX pipeline is not a React runtime — plain camelCase JSX-style SVG attributes (`fontSize`, `strokeWidth`, `textAnchor`, `fontFamily`) pass straight through into the built HTML as literal camelCase attribute names, which browsers don't recognise as SVG presentation attributes, so the text rendered at a huge fallback size and overflowed the slide — no build/check error, only visible on an actual screenshot. `style={{...}}` object syntax, by contrast, does get serialized correctly (confirmed: compiles to a real kebab-case `style="..."` string), so the fix was to move every presentational attribute into `style={{ fontSize: "26px", ... }}` objects rather than bare attributes. Verified via `dist/decks/week-02/index.html` grep (kebab-case CSS properties present) and a full headless-Firefox screenshot showing correctly-sized, non-overflowing text. Same technique now available for item #21's cross-referenced field-kit diagram |
| 16 | Self-declared gap: 5 of 9 week-3 warding traditions never reappear after week 3 (iron/salt, fú talisman, spirit wall, witch ball, ofuda) | Requirements | Medium | Large | **Done, partially** (commit `80ee7b6`) — named 2 of the 5 (iron/salt threshold line, spirit wall) inside week 9's existing cross-case convergence discussion, as the folk-practice precedent the pooled-case pattern was already trading on; a natural fit since that paragraph's whole point is convergence. Checked week 6/lecture, week 9's lecture, and the Field Case File assessment as other candidate insertion points — none fit without forcing content that isn't there (week 6 is about classification write-up quality, week 9's lecture is outline-only, the case-file rubric is about classification defense, not tradition reasoning). fú talisman, witch ball, and ofuda remain open — no natural convergence-discussion hook found for them without inventing new case content, which is out of scope for a "close the gap" item |
| 17 | "Last updated"/document-metadata footer detail, deliberately slightly off | Extra credit | Low | Small | **Done** (commit `d8c2cf6`) — no such mechanism existed anywhere on the site or in the theme (checked both), so this was "add one," not "fix one." Added a quiet `*Document last reviewed: 2026-07-30.*` line to `/policies/`, the one page that reads as an actual institutional document. Made it "slightly off" the way the rest of the site does its wrongness — no lampshading, just a fact a reader who's also read `/incidents/` can catch: the disengagement rule's DL-01 entry says the rule's wording was rewritten "the following week" after 2026-08-14 (~2026-08-21), so a policy page whose own review stamp is 2026-07-30 is claiming to be current while predating that revision |
| 18 | Favicon not confirmed changed from starter default | Extra credit | Low | Small | **Done, already satisfied by prior work** — checked `dist/index.html`: the served favicon is `slop-crest.svg`, sourced from `astro-theme-slop`'s own `assets/` (the fixed platform's Slop-branding package, per README), not any generic Astro-starter icon. No `public/` directory exists in this repo to hold a leftover default one, either. Verification only, no edit needed |
| 19 | Long, clause-heavy sentences in a few spots (e.g. week 3 session's closing sentence) | Readability | Low | Medium | **Done** (commit `fd808ed`) — fixed the flagged week-3 example plus 2 more found by scanning every prose paragraph sitewide (not outline bullets, a deliberately denser genre) for sentences over ~45 words: week 12's final-debrief description and week 8's comparative-method paragraph. All three were single 50-90 word sentences nesting a colon, multiple dashes, and an "and" clause; split into 2-3 shorter sentences each, same content and voice. Not exhaustive — these were the genuine outliers, not a sitewide rewrite |
| 20 | Chrome (nav/footer/page titles) is generic theme boilerplate, no in-fiction framing | Atmosphere | Low | Medium | **Done, partially** (commit `514ebda`) — the real find here was `assessments/index.mdx`'s body copy, `"Weights should sum to 100."`, which reads as an author's leftover note-to-self rather than intended content (every other index page already carries real framing); replaced with a factual description of the three assessments. Also investigated the nav labels (Lectures/Timetable/Assessment/People/Policies) and the `/timetable/` page's unsuffixed `<title>` (every other top-level page's document title is `{page} — Slop University`; timetable's is bare `Timetable`) — traced the title gap to `ContentLayout` (used only by `timetable.astro`) conflating the document `<title>` with the visible `<h1>` via one shared `title` prop, unlike `MdxPageLayout` (used by every other index page) which keeps them separate; suffixing it the naive way leaks "— Slop University" into the visible on-page heading, so left as-is rather than risk a visible regression for a title-bar-only inconsistency. Judged the nav labels themselves as plain, clear English rather than generic boilerplate — not changed |
| 21 | Small reused diagram/field-kit image for nazar amulet / threshold salt, cross-referenced across weeks 3/5/9 | Extra credit | Low | Medium | **Done** (commit `0fbb3eb`) — same inline SVG (iron nail, salt, nazar amulet's concentric rings, all `currentColor`) dropped into week-03's iron/salt worked example, week-05's nazar-amulet slide, and week-09's pooling slide, matching item #15's `style={{...}}` technique. Added a matching convergence-callback sentence to week-09's *deck* ("Week 3's iron-and-salt line and spirit-wall placement were already trading on the same pattern...") echoing the prose callback item #16 already put in `09-comparative-analysis.md`, since the deck itself had no equivalent line. **Hit a second real rendering bug, same family as #15's**: the first caption draft ("field kit — iron nail and salt at a threshold, nazar amulet", 61 chars) overflowed the SVG's 220-unit viewBox and got silently clipped by the root `<svg>`'s default `overflow:hidden` — `pnpm check` stayed fully green throughout, since nothing in the check suite renders a page and looks at it. Caught only via headless-Firefox screenshot of all three decks; fixed by shortening the caption to "iron, salt, and nazar amulet" (29 chars). Re-verified with fresh screenshots after the fix — all three read cleanly at a legible size |
| 22 | Site-wide em-dash density (deliberate voice choice; only worth a pass if a full copy-edit happens anyway) | Readability | Low | Large | **Done, partially** (commit `3178119`) — user explicitly asked to run this one rather than leave it skipped. Counted sitewide first (277 across ~48 files) rather than guessing; reworked the 6 highest-density files (week-02/03/07/12 decks, week-3 warding session, week-10 lecture — 22/21/17/13/11/11 uses each) into varied constructions (period splits, colons, semicolons, parentheticals, plain commas), same exception categories item #5 established: left title/subtitle bylines ("Week N — ..."), numbered/bulleted list-item labels ("**Name** — description"), and quote-slide callbacks alone as deliberate, consistent design rather than voice-tic overuse. Sitewide count now 234. Not an exhaustive site-wide scrub — the remaining ~40 files were left untouched, consistent with the audit's own note that a full pass only makes sense alongside a complete copy-edit |
| 23 | No dark/"redacted-document" surface treatment anywhere outside the decks | Atmosphere | Low | Large | **Demoed, then discarded — user's decision.** Built and verified on a throwaway branch (`demo/redacted-surface`, never merged, never pushed): nav/footer redaction-bar accents plus a dashed content margin, scoped via the theme's existing `colorScheme="dark"` prop to exactly 3 pages (home, one session, one lecture), reusing only the theme's own contrast-tested `--at-*` tokens — no new colors invented, `pnpm check` (incl. a11y/contrast) green throughout. Verified twice: once via headless-Firefox screenshots (desktop + 390px phone) sent to the user, then a second time live — a `git worktree` running the branch's own `astro dev` on port 4323, alongside the existing main preview server, so the user could view both side by side in their own browser without touching main. User's call after looking: **do not merge — keep the site's original user-selectable light/dark background as-is.** Branch and worktree deleted post-decision (nothing pushed, so nothing lost upstream); `main` untouched throughout. Audit is now fully worked: 22/23 done (1 of those, #22, partially per its own explicit scope), 1 demoed and rejected by explicit user decision |

**Verified strengths, no action needed:** `pnpm check` and `pnpm check:evidence` both green; 49 built pages, zero broken links; all 12 lectures have a real linked deck; assessment weights sum to 100; `spec/` tests read as genuine course-design decisions; deadpan voice is excellent and consistent everywhere it's been written (sessions/lectures/policies); no typos or broken markdown found anywhere.

## Ship status — shipped and live (2026-09-21)

**Live URL:** https://comp4020-agentic-coding-studio.github.io/comp4020-ass2-YueheSun/

Shipped via the `/ship` skill this session: preflight clean (no uncommitted
work, everything pushed, `check:evidence` green), secret scan clean, repo
flipped public (explicit user authorization), GitHub Pages enabled as a
workflow site (`build_type=workflow`, not legacy branch-source — avoids the
race with GitHub's own auto-deploy job), `checks` workflow dispatched and
both `deploy`/`check` jobs green. Independently verified (not just trusting
the CI status code) with `verify-deploy.sh` against three pages — homepage,
`/timetable/`, and the `week-01` deck — each returning 200 with every
referenced JS/CSS asset also resolving under the `/comp4020-ass2-YueheSun/`
base path. This is Assignment 2, not a crit week, so no `crit-<n>` tag step
applies.

Assignment 2 is due **2026-09-21T12:00** (confirmed via
`next-deadline.sh`) — shipped same-day, ahead of the cutoff.

**Two process artifacts also updated and pushed this session, ahead of
shipping:**
- `PROCESS.md` rewritten from 975 to 514 words (indicative target
  400–600), now covering the research-first sourcing pass (commit
  `84b4b13`, `research/01-theory-audit.md` catching two fabricated
  week-10 frameworks by dated web search, `research/sources.md`'s 1,828-line
  merged corpus) alongside the teacher-split judgment call, the self-caught
  false "12/12 complete" claim, and the `PageLayout` routing bug. All 11
  cited commits verified resolving via `pnpm check:evidence`.
- The full-site audit checklist below, recorded before any of the listed
  fixes were made.

## Previous status (superseded by the audit above, kept for history)

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
| 5 | On-campus fieldwork | ✅ | ✅ | done |
| 6 | On-campus fieldwork | ✅ | ✅ | done |
| 7 | Off-campus desk study | ✅ | ✅ | done |
| 8 | Off-campus desk study | ✅ | ✅ | done |
| 9 | Off-campus desk study | ✅ | ✅ | done |
| 10 | Literature synthesis | ✅ | ✅ | done |
| 11 | Literature synthesis | ✅ | ✅ | done |
| 12 | Capstone | ✅ | ✅ | done |

**All 12 weeks now have both a lecture page and a full deck.** The hard
requirement stated above is satisfied — no week hits the timetable with a
practical but nothing to read or present.

**Progress:** week 2 is done (lecture built around applying the
classification scheme as method, honestly flagged as thin since no
sourced material targets week 2 specifically; deck follows the same
content, 10 slides, verified against built HTML for slide count and
`_class` styling). Week 3's deck is done (13 slides, includes the
required "how to use these in practice" section walking through the
when/how/sequence/limit/failure reading of a countermeasure and three
worked examples pulled from `sources.md`'s practical-measures table;
verified against built HTML for slide count, class styling, and section
presence). Week 4 is done (On-campus fieldwork's representative week —
lecture and 10-slide deck built from the three real safety-tradition
clusters sourced in `sources.md`'s week-4 material). Week 7 is done
(Off-campus desk study's representative week — lecture and 14-slide deck
covering the three sourcing-failure-mode teaching triad, case-format
literacy across text vs. video/software claims, the week-2
persistent-plus-dormant case's full reveal, and the Halloween-candy
scholarship bridge to week 8; both verified against built HTML for slide
count and `_class` styling). All real-world case titles (SCP entries,
creepypasta, ARGs) are described generically rather than named in
rendered body text, matching the existing sessions' own convention of
never naming a specific fictional-media title in-universe; only genuinely
real, citable academic material (e.g. the Halloween-candy-tampering
scholarship) is named directly, the same way week 3 names real warding
traditions. Week 10 is done (Literature synthesis's representative week
— lecture and 14-slide deck. Rather than edit the existing week-10
session file, which still names the two fabricated frameworks by title,
the new content uses the session's own already-present framing: cosmic
prisoner theory and shadow domain theory are restated and shown to fail
the falsifiability test the session itself sets, then Freud's uncanny,
Fisher's weird/eerie, and Turner's liminality — all real and citable —
fill the session's open "others, briefer" slot, each paired with a case
already on the site: the week-1 forum-thread hook, an in-universe
recording-hypothesis case file, and week 3's mirror-covering custom.
No fabricated theory is presented as real and no session file needed
editing to make that true). Week 12 is done (Capstone's representative
week — lecture and 11-slide deck, co-taught, reviewing the method end
to end in build order and reframing the Final Capstone as a design task
using every prior skill; offers 6 of `sources.md`'s 8 idea seeds as
non-mandatory starting points, all described generically per the same
fictional-media-anonymization convention used since week 7).

Weeks 5, 6, 8, 9, and 11 (the remaining gap) are now done too:

- **Week 5** — lecture + 10-slide deck, originally built around the case
  as it existed at the time (the library sub-basement), applying the
  four-category scheme to a case with no prior write-up and the buddy
  system tested rather than asserted. **Superseded 2026-09-21** — the
  underlying case was then swapped to the SCP-2093-derived seminar room
  (12-slide deck); see "Week 5/6 case swaps" below for the current
  content and reasoning. This entry is kept for the deck-slide-count/
  `_class` verification method, which carried over unchanged.
- **Week 6** — deck only (9 slides; lecture already existed). Matches
  the existing lecture's worked reviews of both campus cases and its
  sample redacted log entry — written as plain-text `[redacted]` rather
  than the `.redacted` CSS span, since `src/decks/theme.css` only imports
  `astro-theme-university`'s deck stylesheet, not this project's
  `global.css` where `.redacted` lives (confirmed by reading
  `theme.css`'s own header comment before writing the slide, not after
  finding it unstyled). **Extended 2026-09-21** with the SCP-087 edge
  case (deck now 13 slides) — see "Week 5/6 case swaps" below; the
  `.redacted`-avoidance finding above still holds for the new slides.
- **Week 8** — lecture + 12-slide deck, both new. Pairs Bloody Mary and
  Hanako-san as the two-country, no-plausible-contact case the session's
  own spec line asks for, with Langlois/Dundes's reflection-reframing
  finding extending week 10's Freud citation into a concrete case, plus
  the Charlie Charlie Challenge as a sourcing-integrity example (a real,
  older Spanish-language pencil-game family wearing a fabricated 2015
  brand name).
- **Week 9** — deck only (8 slides; lecture and session already
  existed). Matches the existing lecture's already-generic framing
  (convergence on category/trigger but not cause, competing frameworks
  "named here only to flag that it exists") rather than introducing the
  Brunvand/Tolbert material `lecture-plan.md` sketches for this week —
  that would have meant rewriting the lecture prose too, which was out of
  scope for "deck only."
- **Week 11** — deck only (9 slides; lecture and session already
  existed, and already matched the settled Kripal-trope-not-named-as-
  Kripal framing). Deck mirrors it directly: leading vs. settled,
  dissent treated as data.

All six new/changed decks and both new lecture pages were verified
against built HTML for slide count and `_class` styling, then driven
through headless Firefox (same cached-Playwright + `LD_LIBRARY_PATH`
workaround as the Phase 1 check) confirming HTTP 200 and zero console
errors on every page. **All 12 weeks now have a real lecture and a real
deck — the hard requirement above is met.**

## Week 5/6 case swaps (implemented 2026-09-21, was "Known follow-up")

`course-logic-proposal.md` §5 settled two case swaps that had gone
unimplemented through the "every week needs a lecture and a deck" pass
(that task was scoped to lecture/deck coverage, not this decision, so it
was correctly left as a named gap rather than force-fit). Both are now
built:

- **Week 5** — the library sub-basement case is fully replaced by an
  SCP-2093-derived case: a disused seminar room (Seminar Room 3, Arts
  Annex) flagged "do not reassign" after a fire exit was bricked over,
  which reads as extending past its real footprint. Instrument-verifiable
  signal (thermometer/hygrometer against a corridor baseline) and an
  external-rescue rule — an occupant can't self-extract, only a buddy
  outside opening the door ends the observation — finally pay off week
  4's lecture/deck, which already previewed this exact case for the
  buddy-system rule.
- **Week 6** — the 13-step stairwell keeps its setting (still the best
  ordinary-life fit) and gains an SCP-087-derived edge case: light
  fixtures dimming below a stated threshold as a non-visual, countable-
  independent signal; a fourteen-step count that skips a floor instead of
  returning to start, so "thirteen steps" reads as a stated rule with a
  documented edge rather than a coincidence; and one redacted/withdrawn
  expedition ("Incident SU-6-04") giving week 4's disengagement rule a
  concrete failure-to-catch precedent, used in week 6's lecture as a
  documentation-rigor example (citing a precedent you can't verify
  yourself).

**Scope was widened beyond the bare swap, by explicit user choice**
(asked directly rather than assumed): `lecture-plan.md`'s "Week 3
practical-measures cross-reference" table — a more granular document than
this one — recommended going further than the swap itself, since weak
link #5 (`course-logic-proposal.md` §2: "week 3's warding material never
reappears after week 3") was still open. The user chose the fuller scope,
so week 5's new case also closes two specific entries from that table:
the nazar amulet (the table's top recommendation — "the one measure a
student can watch change state during fieldwork") is now tested via a
supplementary self-signalling check logged next to the instrument
reading, honestly framed as a first test rather than a working
countermeasure claim; and the case's protocol is explicitly built as a
two-stage diagnose-then-respond structure, named in the lecture as
mirroring English witch bottles' diagnose-then-neutralize logic, closing
that table row too. The table's other, lower-priority rows (iron/salt at
thresholds, fú talisman, spirit wall, witch ball, ofuda) remain open gaps
— not addressed in this pass, and not claimed to be.

Also fixed in the same pass: `src/content/assessments/case-file.md` had
two literal "sub-basement stacks" mentions (spec bullet + brief
blockquote) that would otherwise have gone stale — renamed to "seminar
room."

All six touched files (`05-case-clinic-1.md`, `06-case-clinic-2.md`,
`week-05.md`/`week-06.md` lectures, `week-05.deck.mdx`/`week-06.deck.mdx`,
`case-file.md`) were verified in two steps (week 5 first, then week 6 +
the assessment file) per the manual-checks discipline: `pnpm check`
green after each step, built HTML grepped for the new content and for
correct `_class` slide styling, then driven through headless Firefox
(cached-Playwright + `LD_LIBRARY_PATH` workaround, same recipe as the
original visual pass) confirming HTTP 200 and zero console errors on all
seven affected pages, with screenshots reviewed for the session, deck,
and assessment pages. Committed as two separate commits (week 5, then
week 6 + the assessment rename) so each step stays independently
revertable.

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
| 5 | On-campus fieldwork | Case clinic 1: the seminar room past the bricked-over fire door | — |
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
plan checkpoint · `6bdb53d` plan checkpoint (all 12 weeks) · `bf18bc5`
week 5 case swap (seminar room, diagnose-then-respond, nazar test) ·
`1895196` week 6 SCP-087 edge case + assessment file rename.

Full prose account with reasoning: `PROCESS.md`. Raw process moments (YAML
colon trap, SVG/`socialImage` constraint, layout-routing bug, this
limitation): `process-notes.md`.
