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

My first
[`8b1fdbf`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/8b1fdbf)
`plan.md` settled the topic and the course's logic: foundations, then
on-campus fieldwork, then an off-campus desk study, then a
literature-synthesis phase comparing frameworks for their cause. That
last phase raised the idea of one unifying account, but the plan was
explicit that reaching one wasn't the goal.

Turning that logic into real weeks meant gathering material first.
[`84b4b13`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/84b4b13)'s
`research/sources.md` pulled from SCP, Reddit, other wikis, and classic
horror fiction and film; the same commit's
`research/01-theory-audit.md` checked the plan's two week-10 theory names
and found neither traced to anything real. Not everything gathered made
the cut — material only qualified if a student could plausibly meet it
in daily life and taught a concept, not just a scary story. Under that
test, "The Dunwich Horror," "The Painted Skin," and SCP-093 were dropped
as too exotic for ordinary life, replaced by real substitutes teaching
the same lesson.

That same commit's `course-logic-proposal.md` fixed a structural problem
underneath the phases: weeks 5–6 tested a week-3 warding measure's
effect, but week 3 had no real procedure yet to test against. I fixed it
by pairing each desk-study case with its theory in the same week.

That fix wouldn't have been needed with proper review at the start. That
same `plan.md` also gave the course a department and named "cosmic
prisoner theory" and "shadow domain theory" for week 10 — both made up
on the spot, neither checked. Because everything afterward built on that
plan, both spread into sessions, lectures, decks, both People bios, and
the assessments
([`b8b8929`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/b8b8929)).
Removing the department alone
([`da33788`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/da33788))
touched 65 lines across 23 files, and
[`16f1623`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/16f1623)
carried the audited theory into week 10's lecture — unwinding both cost
far more than reading the plan once would have. An early planning
document becomes the foundation everything after it stands on: a mistake
there doesn't stay local, it snowballs — the first document is the one
that most needs careful review.

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
