# Process overview

## What I built

**Applied Anomalology** is a fictional, deadpan-serious university course
(`SLOP3646`) about anomalous phenomena in ordinary campus life. It treats
urban legends and campus horror stories as real, recurring phenomena — an
ordinary student has probably already brushed against one without
recognising it. The course teaches that encounter as a practical problem:
observe, classify, compare, investigate, test a countermeasure, respond
safely — across 12 weeks, five phases, three weighted assessments. The
tone is deliberately bureaucratic: an impossible subject taught with the
seriousness of an ordinary syllabus is where the unsettling effect
actually comes from.

## How I got here

I didn't review my own early planning closely enough. My first
[`8b1fdbf`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/8b1fdbf)
`plan.md` gave the course a department and, for week 10, two theories I
made up on the spot — "cosmic prisoner theory" and
"shadow domain theory." Nothing checked them against anything real, and
because everything built afterward stood on that plan, the department and
the invented theories spread into sessions, lectures, decks, both People
bios, and the assessments themselves
([`b8b8929`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/b8b8929)).
Removing the department alone
([`da33788`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/da33788))
touched 65 lines across 23 files — unwinding it cost far more than reading
the plan once, at the start, would have. The lesson: an early planning
document becomes the foundation everything after it stands on, so a
mistake made there doesn't stay local, it snowballs — the document that
most needs careful review is the first one.

Fixing the theories meant treating research as its own step, separate
from writing content.
[`84b4b13`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/84b4b13)'s
`research/01-theory-audit.md` checked both invented names against a live
search and confirmed neither traced to anything real. `research/sources.md`
then screened real material — forums and wikis, horror fiction and film,
folklore and religion, named scholarship — keeping what an ordinary
student could plausibly encounter and what taught a concept, not just a
scary story. "The Dunwich Horror," "The Painted Skin," and SCP-093 failed
that test — too exotic-occult for ordinary campus life — and were replaced
with real substitutes teaching the same lesson. The same commit's
`course-logic-proposal.md` used that grounding to fix a structural problem
underneath: weeks 5–6 tested a week-3 warding measure's effect, but week 3
had no real procedure yet to test against. I compared three ways to
restructure the phases and settled on pairing each desk-study case with
its theory in the same week instead of three weeks apart, ending the
course on the frameworks' genuine disagreement rather than forcing an
answer the sources didn't support.
[`16f1623`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/16f1623)
carried the fixed theory into week 10's lecture. The premise stayed
fictional; the material teaching through it didn't.

A separate mistake came from process, not content: two Claude sessions
worked in the same checkout, and an unrelated session's uncommitted work
got mixed into a push meant only to land a lecture-title pass
([`b4f43a9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/b4f43a9)).
[`85716c0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/85716c0)
re-landed only the changes that belonged to that work, sorting the rest
back out by hand. The lesson was procedural, not creative: two agents need
two worktrees, not one shared directory, or neither session's git state
stays trustworthy.

None of this — the department, the invented theories, the shared-checkout
mixup — was something `pnpm check` could catch. Automated checks are good
at structural consistency: the build compiles, links resolve, deck slides
exist, weights sum to 100, every commit cited here exists. They can't
judge whether a case reads like an ordinary campus encounter, whether a
theory is academically sound rather than merely plausible, whether the
phases teach in sensible order, or whether the tone lands as unsettling
rather than silly. That judgment happened by hand, every time — it's what
I spent most of the project actually doing.
