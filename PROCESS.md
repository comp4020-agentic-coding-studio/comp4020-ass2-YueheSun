# Process overview

## What I built

**Applied Anomalology** — a fictional, deadpan-serious course (`SLOP3646`)
about anomalous phenomena in ordinary campus life. The course treats urban
legends and campus horror stories as real, recurring phenomena, and teaches
students how to observe, classify, compare, investigate, and safely respond
to them as practical problems. Its 12-week curriculum follows one
continuous method — **observe → classify → compare → test/countermeasure →
apply** — while using an academic tone and bureaucratic seriousness to
create an unsettling contrast with its subject matter. Built on the fixed
Slop harness: 12 weeks across five phases, three weighted assessments, two
staff, a full lecture deck per week, and spec tests asserting the content
graph stays internally consistent, not just individually well-formed.

## How I got here

Identity and structure were agreed first
([`8b1fdbf`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/8b1fdbf),
[`95698b8`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/95698b8)),
then content went in phase by phase, checked and committed before the next
started
([`41b99eb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/41b99eb)
Foundations,
[`b8b8929`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/b8b8929)
weeks 4–12,
[`d7762ed`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/d7762ed)
assessments,
[`bc50d44`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/bc50d44)
cast).

A standing instruction from the student then authorized running ahead
across phases without pausing, judgment calls noted rather than asked. The
one this covered that mattered most:
[`f77e377`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/f77e377)'s
teacher-ownership split. The brief called week 3's warding unit
"Whitcombe's" and gave Solano the synthesis lectures; I extended that same
split by phase (fieldwork weeks to Whitcombe, everything bracketing it to
Solano) rather than inventing a new axis, since it was the smallest
extension of a decision already made for me, not a fresh one.

The build then reported itself finished — wrongly.
[`6bdb53d`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/6bdb53d)
claimed "all 12 weeks now have lecture + deck," but a direct question about
why week 2 had none surfaced that the claim measured the wrong thing:
content existing, not content that could carry a real lecture.
[`6b8125e`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/6b8125e)
corrected the record and made "every week needs a lecture and a deck" an
explicit requirement, not something achieved by omission.

Before rewriting content to fix that, I ran a research pass kept
deliberately separate from any content edit, because the content it would
replace failed its own citation standard: `research/01-theory-audit.md`
checked every theory the site presented as established against a live web
search, dated in the file itself, and found two of week 10's named
frameworks — "cosmic prisoner theory," "shadow domain theory" — traced to
no real source at all; neither phrase turns up anywhere in SCP,
creepypasta, or paranormal literature. That audit, a week-by-week
content-depth gap inventory, and a corpus merged from five separate
research passes (`research/sources.md`, 1,828 lines folding together
`sources-phase1.md` through `sources-phase3-supplement.md`) all landed in
one commit,
[`84b4b13`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/84b4b13) —
roughly 2,500 lines of sourced research committed alongside, not instead
of, the phase-1 rewrite it justified, so the reasoning behind replacing two
generic warding traditions with nine named, real ones is checkable rather
than asserted.

The last real bug was a check that lied by omission.
[`7e29e05`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-YueheSun/commit/7e29e05)'s
`.redacted` CSS passed `pnpm check` from a `PageLayout.astro` style block —
but that layout only wires up two plain-markdown pages; every
content-collection page imports `ContentLayout` directly and never sees
it. Caught by grepping the built HTML instead of trusting the green check,
per this repo's own "the rendered page is the truth" rule, now a permanent
harness note.

## Before you ship

`pnpm check:evidence` verifies this comment is gone, citations resolve,
and `CLAUDE.md` is present — it checks the account is traceable, not that
it's good; that's the marker's call. Images aren't checked by it, since a
broken image is visible the moment this file renders on GitHub.
