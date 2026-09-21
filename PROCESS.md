# Process overview

## What I built

**Applied Anomalology** — a fictional, deadpan-serious course (`SLOP3646`)
about anomalous phenomena in ordinary campus life. It treats urban legends
and campus horror stories as real, recurring phenomena, and teaches
students to observe, classify, compare, investigate, and safely respond to
them as practical problems, across one continuous method — **observe →
classify → compare → test/countermeasure → apply** — with an academic
tone and bureaucratic seriousness creating an unsettling contrast with the
subject matter. Built on the fixed Slop harness: 12 weeks across five
phases, three weighted assessments, two staff, a full lecture deck per
week, and spec tests asserting the content graph stays internally
consistent.

## How I got here

Identity and structure were agreed first
([`8b1fdbf`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/8b1fdbf)),
then content went in phase by phase — Foundations, weeks 4–12, assessments,
cast — each checked and committed before the next started
([`bc50d44`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/bc50d44)).

A standing instruction then authorized running ahead across phases without
pausing, judgment calls noted rather than asked. The one that mattered
most:
[`f77e377`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/f77e377)'s
teacher-ownership split. The brief gave week 3's warding unit to Whitcombe
and the synthesis lectures to Solano; I extended that same split by phase
(fieldwork weeks to Whitcombe, everything bracketing it to Solano) as the
smallest extension of a decision already made.

The build then reported itself finished — wrongly.
[`6bdb53d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/6bdb53d)
claimed "all 12 weeks now have lecture + deck," but a direct question about
week 2 surfaced that the claim measured the wrong thing: content existing,
not content that could carry a lecture.
[`6b8125e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/6b8125e)
corrected the record and made full coverage an explicit requirement, not
something achieved by omission.

Before rewriting content to fix that, I ran a research pass kept
deliberately separate from any content edit, because the content it would
replace failed its own citation standard: `research/01-theory-audit.md`
checked every theory the site presented as established against a live web
search and found two of week 10's named frameworks — "cosmic prisoner
theory," "shadow domain theory" — traced to no real source at all. That
audit and a corpus merged from five research passes landed in one commit,
[`84b4b13`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/84b4b13),
alongside — not instead of — the phase-1 rewrite it justified, so replacing
two generic warding traditions with nine named, real ones is checkable
rather than asserted.

The last real bug was a check that lied by omission.
[`7e29e05`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/7e29e05)'s
`.redacted` CSS passed `pnpm check` from a `PageLayout.astro` style block,
but that layout only reaches two plain-markdown pages — every
content-collection page imports `ContentLayout` directly and never sees
it. Caught by grepping the built HTML instead of trusting the green check,
now a permanent harness note.

A shared working directory caused the one incident that wasn't a build
bug. Another Claude session's `git checkout -b` moved this one onto
`atmosphere-effects` mid-task, and a broad `git add -A` swept that
session's uncommitted work in alongside the real lecture-subtitle changes,
landing both on `origin/atmosphere-effects` as
[`b4f43a9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/b4f43a9)/[`10676e9`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/10676e9).
Noticed only because the student asked why the push went to that branch.
Fixed with `cherry-pick -n` and per-file `restore`, grepped for the other
session's markers, and committed only the subtitle changes to `main` as
[`85716c0`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/85716c0);
`atmosphere-effects` was left untouched. The fix is now a `CLAUDE.md`
rule: check the branch before every git operation, never `git add -A`,
give concurrent sessions their own `git worktree`.

## Before you ship

`pnpm check:evidence` verifies this comment is gone, citations resolve,
and `CLAUDE.md` is present — it checks the account is traceable, not that
it's good; that's the marker's call. Images aren't checked by it, since a
broken image is visible the moment this file renders on GitHub.
