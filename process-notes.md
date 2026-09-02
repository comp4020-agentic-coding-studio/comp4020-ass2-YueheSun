# Process notes

Raw moments, drafted as they happen. `PROCESS.md` is the curated file —
entries here get promoted there by hand, later, not automatically.

## YAML plain scalars break on a bare `: ` (colon-space) — 2027-09-03 (commit d7762ed)

Writing the Final Capstone's holistic `marking.description`, a sentence read
"The capstone is judged as a whole: whether the proposed protocol is...".
`astro check` failed with `can not read a block mapping entry; a multiline
key may not be an implicit key`, pointing at that line.

**What happened:** frontmatter values here are written as YAML plain
(unquoted) multi-line scalars. Any `: ` inside one — even mid-sentence, even
indented as a continuation line — is ambiguous with a nested mapping key,
and the parser fails the whole document rather than guessing. The other
assessment/session files happened to avoid this by chance (dashes, not
colons, in their prose).

**Fix applied:** reworded the sentence to drop the colon (`judged as a
whole, on whether...`) rather than quoting the whole multi-line block —
quoting a folded block correctly is fiddlier than just not writing a colon.

**This is a discarded-attempt/harness-gap moment, not a routine retry**: it's
a general trap for every future frontmatter description/spec field in this
repo, not a one-off typo. Worth promoting to `PROCESS.md` and/or a CLAUDE.md
note if it recurs — a quick self-check before committing new frontmatter
prose: scan for `: ` inside multi-line plain-scalar values.
