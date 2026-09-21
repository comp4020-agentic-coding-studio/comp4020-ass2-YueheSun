# Process overview

## What I built

**Applied Anomalology** — a fictional, deadpan-serious course (`SLOP3646`)
about anomalous phenomena in ordinary campus life, teaching students to
observe, classify, compare, and safely respond to them across one method —
**observe → classify → compare → test/countermeasure → apply** — over 12
weeks, five phases, and three weighted assessments.

## How I got here

I decided early a good course here had to pass three tests: an ordinary
student could plausibly run into whatever a lecture covers; every lecture
teaches a concept or a method, not just narrates a scary story; and every
claim traces to something real, not invented for convenience. None of the
three became a `CLAUDE.md` rule or `spec/` test — `spec/` only checks
structure (assessment weights sum to 100, decks resolve, dates stay inside
term), and `CLAUDE.md` only encodes build-time hazards (Astro's scoped
styles, MDX's camelCase attributes, the shared-checkout rule below). The
harness enforces just one thing downstream of this: `pnpm check:evidence`
fails this file if a cited commit doesn't resolve — honest process, not
good content. Whether a case read as "ordinary enough" or a theory was
real stayed a judgment call, the kind `spec/README.md` leaves to the crit
rather than a test.

I didn't apply that discipline from the start.
[`8b1fdbf`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/8b1fdbf)'s
`plan.md` invented a "department" running the course and, for week 10, two
theories I made up on the spot — "cosmic prisoner theory" and "shadow
domain theory." I never re-read that plan before letting later work build
on it, so both spread everywhere content touched: sessions, lectures,
decks, both People bios, the assessments themselves
([`b8b8929`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/b8b8929)).
[`da33788`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/da33788)'s
fix, pulling the department back out, touched 65 lines across 23 files —
unwinding it cost far more than reading the plan once would have. The
lesson landed harder than any test could: an unreviewed early document
becomes the base everything after it inherits, so its mistakes snowball
rather than staying local, and the only defence is a human actually
reading what the agent commits early, not trusting a plausible-looking
plan.

Fixing the theories meant sourcing real material before touching content
again.
[`84b4b13`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/84b4b13)'s
`research/01-theory-audit.md` checked both week-10 names against a live
search and found neither traced to anything real; `research/sources.md`
then screened a wide pull — forums and wikis, classic horror fiction and
film, folklore and religious tradition, named scholarship — against the
same two tests above. "The Dunwich Horror," "The Painted Skin," and
SCP-093 all failed on register, exotic-occult or artifact-horror rather
than ordinary life, and were dropped for real substitutes teaching the
same lesson. The same commit's `course-logic-proposal.md` worked out how
the phases should connect — theory, on-campus fieldwork, off-campus desk
study, literature synthesis, capstone — and found weak links, sharpest at
weeks 5–6 testing a week-3 warding measure that week 3 didn't yet have a
real procedure for. Of the three progression options it compared, I took
an A+C blend: keep the existing phase boundaries, but pair each desk-study
case with its theory in the same week instead of three weeks apart, and
end on the frameworks' genuine disagreement rather than force a unifying
theory the sources don't support.
[`16f1623`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/16f1623)
carried the fixed theory into week 10's actual lecture.

One more moment, briefly: two Claude sessions shared one checkout and
mixed an unrelated session's work into a push
([`b4f43a9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/b4f43a9)),
[`85716c0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/85716c0)
re-landed only the real changes, and the fix — a worktree per session — is
now a `CLAUDE.md` rule
([`99b226c`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/99b226c)).

## Before you ship

`pnpm check:evidence` checks this account exists, its citations resolve,
and `CLAUDE.md` is present — traceable, not good; that's the marker's
call.
