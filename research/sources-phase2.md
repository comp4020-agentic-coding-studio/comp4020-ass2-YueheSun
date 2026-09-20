# Research sources

## Phase 2: on-campus fieldwork

Research pass for weeks 4-6 (fieldwork safety protocol / case clinic 1 /
case clinic 2). Goal: find real rules-based-horror (规则怪谈) and campus
legend material with genuine rule structure to **adapt** for the two weak
in-universe cases currently drafted (library sub-basement that rearranges;
13-step stairwell) — see `research/00-gap-inventory.md` for the diagnosis
of why those two are currently too thin. Nothing below is copied; every
kept item ends with a sketch of a SlopU-specific rewrite, renamed and
relocated, per the exclusion rule (no real named people/deaths/institutions).

Search log: Reddit (r/nosleep, r/creepypasta, r/backrooms), SCP Wiki (EN
and CN branches), Douban group "啊这恐惧竟该死的甜美", Zhihu threads on
校园规则怪谈, Backrooms Wiki, plus real-world safety-protocol sources for
week 4. **16 candidates surveyed, 12 kept, 4 rejected** (rejection reasons
given inline). Two access channels were blocked/limited — noted explicitly
below rather than inventing content from them.

### Access notes (channels attempted, not fully usable)

- **Reddit (r/nosleep, r/creepypasta, r/backrooms, r/scarystories)**:
  direct fetch of reddit.com and the `.json` search endpoint both failed —
  tool error "Claude Code is unable to fetch from www.reddit.com" (no
  login prompt shown, just a hard block). WebSearch surfaced only
  secondary references (e.g. a title "My new school rules" attributed to
  u/Chilli_Man1) that I could not independently verify by reading the
  actual post text. **I am not treating that title as a verified source**
  and have not summarized or adapted it — flagging it only as an
  unconfirmed lead if a future pass gets Reddit access some other way.
- **Douban group "啊这恐惧竟该死的甜美"** (https://www.douban.com/group/loudaaaaaa/):
  successfully fetched, no login wall or CAPTCHA. However its front-page
  topic list at fetch time (2026-09-21) had no campus/school/dorm/library
  content — the group's actual focus is general "sweet fear" imagery
  (insects, AI glitches, objects, dreams), not rules-horror specifically.
  Not excluded for access reasons, just not a productive source for this
  brief; two adjacent 豆列 (Douban lists) were found via search
  (`doulist/155694850`, `doulist/155474631`) but likewise skew
  general-atmosphere rather than campus/rule-structured.
- **SCP-CN (scp-wiki-cn.wikidot.com)**: reachable, but no dedicated
  school/campus/library entry surfaced in search the way the EN wiki's
  SCP-2093/2602 did — the CN branch's series-index pages were the only
  hits. Not pursued further given the EN wiki already supplied strong
  campus-shaped material.

---

### Kept candidates

#### 1. SCP-087 — "The Stairwell"
- **URL**: https://scp-wiki.wikidot.com/scp-087 · SCP Foundation Wiki (EN), object class Euclid
- **Week fit**: 6 (case clinic 2 — direct replacement/upgrade for the 13-step stairwell)
- **Tags**: stairwell, descent, countable-geometry, entity, redacted-failure
- Premise: an unlit staircase descending at a fixed angle, 13 steps per
  flight, reversing 180° at each landing, visibility capped at ~1.5
  flights. Rule/mechanic: normal light sources above 75W don't work; a
  distressed child's voice is heard from ~200m below but descent never
  gets subjects closer to it — the geometry doesn't behave normally. An
  eyeless "face" entity (SCP-087-1) appears periodically, provoking fear
  without being the crying's source. Edge case/failure state: the deepest
  recorded expedition ended in a still-redacted incident after which all
  further access is forbidden, and knocking was heard from the sealed
  door afterward. Why it works: it has exactly the property the current
  stairwell case lacks — a stated numeric rule (13 steps, 180° turns)
  *and* a documented case where descending further breaks the pattern
  with a real consequence. Teaches: the difference between a rule that
  holds and a rule that has an undocumented edge case — i.e. the actual
  content gap the gap-inventory flagged.
- **SlopU rewrite sketch**: keep the countable-steps hook from the current
  draft but add: (a) a specific non-visual anomaly (temperature drop,
  or ordinary light fixtures dimming below a wattage threshold) as a
  detectable, loggable signal per week-1's observation protocol; (b) an
  edge case at a specific alternate count (e.g. 14 steps skips a floor
  instead of returning to start); (c) one redacted/withdrawn expedition
  in the case file's history, giving week 4's disengagement rule
  something concrete it once failed to catch — framed as "Incident
  SU-6-04, access since restricted," no gore, deadpan institutional tone.

#### 2. SCP-3008 — "A Wonderful Gift"
- **URL**: https://scp-wiki.wikidot.com/scp-3008 · SCP Foundation Wiki (EN), object class Euclid
- **Week fit**: 5 or 6 (good escalation case — day/night rule plus a
  countermeasure practice, i.e. exactly the week-3 link the gap
  inventory says is missing)
- **Tags**: day-night-cycle, retail-liminal, survival-society, body-disposal-rule
- Premise: a big-box retail store where losing sight of the exit doors
  shifts you into an endless pocket-dimension version of the same store.
  Rule/mechanic: the space runs on the store's real opening hours —
  staff-entities are passive by day, hostile by night, announcing
  closing and telling people to leave. Survivors have built settlements
  using store materials, scavenge by day, fortify by night. Edge
  case/failure: exits exist but have no fixed location (escape is
  chance-based); a stated procedural rule — move killed staff-entities'
  remains away from camp, or their bodies attract more attackers — is a
  genuine actionable countermeasure with a failure consequence when
  ignored (a named settlement is overrun). Why it works: it has a full
  rule *system* (schedule + roles + a specific disposal procedure) rather
  than one isolated fact. Teaches: countermeasure practice with a
  documented failure mode when skipped — the strongest transferable
  structure for linking week 3's warding unit into fieldwork.
- **SlopU rewrite sketch**: relocate to a campus facility with a real
  day/night operational rhythm already built in — e.g. the 24-hour
  computer lab or the student union's convenience store. By day, staff
  and patrons behave normally; after posted closing time, anyone still
  inside who hasn't left through the correctly-lit exit finds the
  space "still open" in a way that doesn't match the sign. Introduce one
  concrete disposal/avoidance procedure tied to week 3's warding
  vocabulary (e.g. a threshold marking left at the door voids after a
  fixed hour count) with a logged incident where a team skipped it.

#### 3. SCP-2093 — spatial anomaly in a high school drama room
- **URL**: https://scp-wiki.wikidot.com/scp-2093 · SCP Foundation Wiki (EN), object class Euclid
- **Week fit**: 5 (case clinic 1 — direct replacement for the
  rearranging-library case; this is a much stronger version of the same
  "building recreates/expands itself" idea)
- **Tags**: school-building, spatial-recreation, measurable-signature, external-rescue-rule, self-patching
- Premise: a drama room in an abandoned high school pulls anyone who
  enters into a full recreation of the school extending into false
  grassland beyond the real footprint. Rule/mechanic: the recreated
  interior is measurably cooler/less humid than the real building
  (detectable with thermal imaging — a genuinely loggable, instrument-based
  signal, not vibes); people inside cannot self-extract, someone *outside*
  must physically open the door. Room layouts and lock states shift
  between visits, and a recovered in-universe "changelog" implies active,
  deliberate maintenance of the space. Edge case/failure: a group of
  unrelated trapped creatures is found inside and can't get home; later
  visits find the space sealed off with barriers and evidence erased.
  Why it works: unlike the current library case, this has (a) an
  instrument-verifiable rule (thermal signature) an observer can actually
  test per week-1's protocol, (b) a stated external-rescue mechanic
  that gives the buddy-system requirement in week 4 real teeth (you
  cannot self-rescue; your buddy is the only way out), and (c) a
  self-sealing failure state.
- **SlopU rewrite sketch**: relocate to a disused seminar room or an
  underused rehearsal space with an ordinary architectural quirk (blocked
  fire exit, load-bearing pillar) that made it get marked "do not
  reassign" on a facilities floor plan years ago. Anyone who enters
  finds a recreation of the same room extending further than the real
  footprint allows; instrument signal = an anomalous humidity/temperature
  reading loggable against the corridor outside. Hard rule: only a
  second person standing outside and opening the door from that side
  breaks the loop — direct, mechanical link to week 4's buddy-system
  paperwork actually mattering in week 5's case.

#### 4. SCP-2602 — the building that used to be a library
- **URL**: https://scp-wiki.wikidot.com/scp-2602 · SCP Foundation Wiki (EN), object class Safe/Euclid-adjacent
- **Week fit**: 5, as a secondary/comparison case for the classification
  lecture link (ties back to week 2's taxonomy work)
- **Tags**: library, forced-reinterpretation, classification-corruption, testimony-reliability
- Premise: a building that stopped being a library decades ago compels
  anyone discussing it to keep mentioning that it used to be a library —
  and, more importantly, compels witnesses to reinterpret anomalous
  contents (torture devices, radiation sources) as mundane "library"
  equipment (e.g. reframed as "book-binding machinery"). Rule/mechanic:
  the compulsion applies to description/testimony itself, not just
  physical space — it's a rule about how observers report what they see.
  Edge case: the reinterpretation is total and automatic; there's no
  documented way an exposed witness resists it, which is itself the
  failure state (unreliable primary-source testimony). Why it works: it's
  the rare rules-horror case about *epistemics* rather than geometry —
  directly useful for a course whose spine is observation/classification.
  Teaches: why corroboration (multiple independent observers) matters —
  a single witness's classification can be systematically wrong in a way
  they can't detect from inside their own report.
- **SlopU rewrite sketch**: a campus space with a genuine institutional
  history of repurposing (an old exam hall now used as storage, say).
  Witnesses touring it produce field notes that keep reclassifying
  clearly anomalous fixtures as leftover exam-hall furniture, in
  official-sounding facilities language, no matter what's actually
  there. Use as a short comparison case in week 5's clinic to make the
  point that the safety protocol's "log before classify" ordering
  (from week 1) exists specifically to catch this failure mode.

#### 5. Elevator-encounter motif — "《后街707号公寓楼》" ("Back Street Apartment No. 707")
- **URL**: https://zhuanlan.zhihu.com/p/628578096 · Zhihu (illustrated 规则怪谈 retelling), Chinese
- **Week fit**: 5
- **Tags**: elevator, do-not-acknowledge, mirror-reflection, floor-mismatch
- Premise/rule: if an elevator arrives already occupied, don't let the
  occupant realize you've noticed it; the protagonist presses a wrong
  floor and, via the reflection in the elevator's metal wall, sees the
  figure behind them staring the whole ride. Recurring motif: the
  "don't-acknowledge" rule paired with an indirect-viewing method
  (reflection, peripheral vision) as the only safe way to observe. Why it
  works: the rule is simple, has one clear violation condition (being
  noticed noticing), and the indirect-observation method is itself a
  teachable technique. Teaches: an observation method — recording via an
  indirect channel (reflection/recording device) rather than direct
  confrontation — that maps cleanly onto week 1's "log before engaging"
  protocol.
- **SlopU rewrite sketch**: campus service elevator (library or lab
  building) that occasionally arrives already "occupied" per building
  logs even when no one requested it from that floor. Rule: acceptable to
  ride with it, but do not make eye contact via the polished panel
  reflection — the case file records fieldwork technique as "observe via
  indirect reflection only," giving students a concrete field method to
  practice, not just a spooky fact.

#### 6. Zhihu compiled campus rule-sets (library/self-study time limits, "only three buildings")
- **URLs**: https://zhuanlan.zhihu.com/p/440078798 ("校园规则怪谈合集整理") and https://www.zhihu.com/question/517278115 ("有哪些校园规则怪谈？") · Zhihu, Chinese (aggregated via search — both pages 403'd on direct fetch, so summarized from WebSearch's synthesis of their visible text, not full original prose)
- **Week fit**: 5
- **Tags**: library, self-study-room, time-limit, building-count, hidden-fourth-building
- Premise/rules (composite, multiple posts in this thread cluster): the
  library/self-study room may be entered at most twice a day, one hour
  each time; don't linger past 30 minutes; the campus officially has
  three teaching buildings — if you ever find a fourth, act as though
  you haven't noticed it. Recurring motif: numeric usage caps on
  otherwise-mundane spaces, and a "building count" rule where the
  anomaly is *arithmetic* (there being one too many buildings) rather
  than any visible monster. Why it works: the caps are trivially
  checkable/loggable (count your visits, count the buildings) and the
  horror is entirely in the discrepancy between official count and
  observed count — a clean fit for a course about corroboration and
  classification. Teaches: comparing an official baseline record (the
  facilities map) against direct observation as a method.
- **SlopU rewrite sketch**: SlopU's facilities map lists three lecture
  blocks. The week-5 case clinic gives students the official floor plan
  and a set of field logs; one log describes a fourth block, correctly
  numbered and consistent with the campus's addressing scheme, that
  doesn't appear on the map. Rule for the case file: do not attempt to
  enter it, and do not report its number aloud to facilities staff —
  log it under the standard protocol and escalate through the case-file
  process instead, tying directly into week 6's write-up lecture.

#### 7. Dorm corridor "wall"/"door" anomaly with a counter-object (tinted glasses)
- **URLs**: same Zhihu cluster as #6, specifically the sub-thread summarized under "宿舍楼与'墙'、'门'的诡异设定" (dorm-building "wall"/"door" motif), plus https://zhuanlan.zhihu.com/p/687263447 ("■■■■大学宿舍规则怪谈（全集）") and https://zhuanlan.zhihu.com/p/440615068 ("宿舍规则怪谈") · Zhihu, Chinese (via search synthesis; direct fetch 403'd)
- **Week fit**: 6 (best fit — this is the one candidate with a literal
  physical countermeasure object, i.e. the missing week-3 link)
- **Tags**: dormitory, wall-anomaly, door-anomaly, countermeasure-object, corroboration
- Premise/rules: if a "wall" appears where a corridor's end window
  should be, stay calm and walk toward the opposite stairwell instead
  (each dorm building has two, usually at the corners); if a "door"
  appears where none should be, you may go through it, but only while
  wearing a specific pair of tinted (blue) glasses. Recurring motif:
  anomalous architecture paired with a *specific, acquirable object*
  that changes the safe action from "avoid" to "may proceed." Why it
  works: it's structurally a countermeasure-testing case — the object
  either works or it doesn't, and a case file could report the
  glasses' effect as a variable, exactly the "did the ward have any
  effect" test the gap inventory says is missing. Teaches: countermeasure
  verification method (having a control condition — what happens without
  the glasses — is a natural extension a case clinic could assign as
  homework).
- **SlopU rewrite sketch**: a residence corridor where a blocked-off
  "wall" occasionally appears at the far window end; standard response
  is to route to the building's other stairwell (all SlopU dorms are
  built with two, by design, so this is a real, checkable architectural
  fact). On rarer occasions a door appears where the floor plan shows
  none; passage is only attempted with a specific week-3 warding item
  carried along (reframe the tinted glasses as SlopU's own established
  threshold-marking object from week 3, so week 6's case literally reuses
  week 3's countermeasure and reports whether it worked).

#### 8. "New-student group chat" digital-bureaucracy legend (headcount-triggered reveal)
- **URLs**: same Zhihu cluster (search-synthesized from https://zhuanlan.zhihu.com/p/687263447 and related campus rule-horror threads) · Zhihu, Chinese; direct fetch blocked
- **Week fit**: 4 (good low-stakes opener — establishes that fieldwork
  triggers can be purely administrative/digital, priming students for
  why the safety protocol treats "someone claiming institutional
  authority" as a category of risk, not just physical spaces)
- **Tags**: digital-legend, headcount-trigger, impersonation, orientation-week
- Premise/rule: an official-looking incoming-student group chat is
  created before term starts, with a single silent "admin"; once
  membership reaches a specific number (248 in the source material),
  the admin posts, introducing themselves as a senior student — a reveal
  that recontextualizes everything posted before it. Recurring motif: a
  numeric threshold as the trigger (like the stairwell's step count),
  but applied to a bureaucratic/digital object instead of a physical
  space. Why it works: no monster, no gore — the horror is entirely
  procedural (a headcount function no student can see or control
  firing an event). Teaches: why verifying the *source* of an
  institutional communication (not just its content) matters — a clean
  bridge into week 4's consent/buddy-system material, since fieldwork
  often starts with trusting an official-looking notice.
- **SlopU rewrite sketch**: SlopU's real orientation-week chat channel
  (mentioned elsewhere in the course) gets a shadow: a second,
  visually identical channel appears each intake with no visible
  creator, silent until enrolment hits a specific count, then posts
  a single welcome message from someone who is not on any staff list.
  Week 4's protocol gains a concrete first rule: verify a channel's
  origin against the registrar's published list before treating any
  instruction in it as legitimate.

#### 9. Network-administrator impersonation rule
- **URL**: same Zhihu cluster (search-synthesized) · Chinese; direct fetch blocked
- **Week fit**: 4
- **Tags**: impersonation, verification-protocol, dorm-registration, corroboration
- Premise/rule: the campus's real "network information administrator"
  never visits buildings outside their assigned one; if someone claiming
  that title appears in the wrong building and offers to "re-register"
  your room information, do not let them, and leave as quickly as
  possible. Recurring motif: a legitimate-sounding institutional role
  used as the disguise, with the anomaly being a jurisdiction violation
  (right title, wrong building) rather than anything visibly wrong with
  the person. Why it works: the tell is purely procedural/checkable
  (which building is this role authorized for) — a genuinely useful
  training scenario for teaching students to verify credentials against
  a known scope rather than a gut read. Teaches: scope-of-authority
  verification, directly reusable as a week-4 protocol drill.
- **SlopU rewrite sketch**: fold directly into week 4's consent/buddy
  material as a named failure case: "Incident type: unauthorized
  re-registration attempt" — a role (residence IT support, say) that is
  building-scoped by design; the safety protocol's first checkable rule
  becomes "does this person's claimed authority match this building,"
  independently of anything supernatural.

#### 10. Dorm lights-out rule (simple time-trigger, minimal stakes)
- **URL**: same Zhihu cluster (search-synthesized) · Chinese; direct fetch blocked
- **Week fit**: 4 (deliberately the simplest item kept — good as a
  warm-up/teaching example of bare rule structure before the more
  developed week 5/6 cases)
- **Tags**: time-trigger, minimal-rule, escalation-ladder
- Premise/rule: lights in the dorm must be off by 10:00pm sharp; if any
  light is still on at 10:01, "the consequences are yours to bear" (rule
  stated, consequence left unspecified in the source). Why it's kept
  despite being thin: it's a genuinely useful *teaching* artifact
  precisely because it's minimal — a single trigger, no stated mechanism,
  no described entity — good as the first rung of a difficulty ladder
  the course could build across weeks 4→5→6 (bare rule → rule with an
  observable mechanism → rule with a tested countermeasure). Teaches:
  what a bare, untested rule looks like, as a contrast case against the
  more developed ones above.
- **SlopU rewrite sketch**: use as the week-4 session's opening example
  of "a rule with no theory behind it yet" — the kind of raw field report
  a first-year is expected to log and escalate, not resolve, modeling
  the protocol's log→corroborate→classify order from week 1 before any
  case clinic content appears.

#### 11. Roblox Creepypasta — "The Survival Instruction" (numbered building rules)
- **URL**: https://robloxcreepypasta.fandom.com/wiki/The_Survival_Instruction · Creepypasta Fandom wiki (EN)
- **Week fit**: reference/structural only — English-language example of
  the genre's form, not itself campus-set (it's a hotel/dorm-like
  building)
- **Tags**: numbered-rules, time-window, off-limits-floor, structural-template
- Premise/rules: numbered survival rules for residents of a
  hotel-like building — never use the elevator between specific
  overnight hours; don't talk to or visit residents of a specific floor
  range; a strict evening ritual (be inside, locked in, holding a
  specific object, by a specific minute). Why kept: it's a clean
  **structural template** for the numbered-list rules format in English,
  useful for calibrating tone/length rather than for its content
  (generic hotel setting, not adaptable to campus without heavy rework).
  Teaches: the numbered-rule-list format itself as a document type week
  6's write-up lecture could reference when specifying what a case file's
  "known constraints" section should look like.
- **SlopU rewrite sketch**: not adapted directly; keep only as a formatting
  reference for how week 6's case-file rubric could ask students to
  present a case's known rule set as a short numbered list.

#### 12. "Zoo rules" 规则怪谈 ("动物园规则怪谈") — genre-origin structural template
- **URLs**: referenced via https://www.zhihu.com/question/503700826 and https://www.zhihu.com/question/501736883 (discussion of the piece, not the original A岛 post, which is no longer reachable — A岛 itself has shut down per search results) · Chinese
- **Week fit**: reference/structural only — not campus-set, zoo/aquarium
- **Tags**: genre-origin, interlocking-rule-sets, multi-perspective
- Premise: widely cited as one of the founding texts of the 规则怪谈
  genre — visitor rules, zoo-staff rules, and aquarium-staff rules
  presented as three separate, partially contradictory rule sets whose
  overlaps and gaps are where the horror/puzzle lives. Why kept as
  reference: the multi-perspective structure (same space, different
  rule sets for different roles) is a genuinely useful device the
  course doesn't currently use anywhere — e.g. "student rules" vs
  "facilities-staff rules" for the same anomalous space, disagreeing at
  the edges. Not directly adaptable (wrong setting, and the original text
  itself is unreachable — flagging structure only, not content).
- **SlopU rewrite sketch**: structural idea only — a future case could
  give students two rule sets for the same space (one from a student
  handbook, one from a facilities-staff manual) that disagree at exactly
  one point, and ask the case file to identify which discrepancy is the
  actual anomaly.

---

### Rejected candidates (atmosphere-only, no usable rule structure)

- **Backrooms Wiki, Level 806 "Back to School"** (https://backrooms.fandom.com/wiki/Level_806) —
  infinite modern school, memory-based nostalgia effect on entering
  classrooms. Rejected: no trigger condition, no numbered rule, no
  failure state — purely descriptive atmosphere, nothing to test or
  violate.
- **Backrooms Wiki (Blix), Level 52 "Schoolrooms"** (https://backrooms-blix.fandom.com/wiki/Level_52) —
  1990s-style school full of hostile "Partygoers." Rejected: it's a
  monster-infestation description, not a rule system; nothing an
  observer could log as a testable rule.
- **Escape the Backrooms game wiki, Level 52** (https://escapethebackrooms.fandom.com/wiki/Level_52) —
  same rejection as above; game-mechanical hazard list, not an
  in-fiction rule structure with edge cases.
- **General Douban "sweet fear" content** (doulist/155694850,
  doulist/155474631, and the loudaaaaaa group's front page) — genuinely
  atmospheric and well-curated, but not campus-set and not rule-structured
  (single unsettling images/anecdotes, no numbered constraints). Kept
  only as a noted access-channel result, not as adaptable content.

---

### Real-world safety-protocol material for week 4

Three source clusters to lend procedural texture to the fieldwork safety
protocol session (consent, buddy system, disengagement rule):

1. **Paranormal-investigation safety guidance** (aggregate of
   https://www.smart-investigations.org/about-the-paranormal and
   https://hauntedhosts.com/library/explainers/ghost-hunting-ethics-dos-and-donts/,
   among similar guides). Recurring elements: never investigate alone;
   do a daylight walk-through first to map hazards and communicate them
   to the whole team; sobriety requirement (impairment both a physical
   risk and an observation-reliability risk — directly reusable framing
   for SlopU); inform a third party of your plan and expected return
   time; carry emergency contacts and an exit plan; explicit "set clear
   boundaries" language for disengaging from something once contact is
   made — the closest real-world analogue to SlopU's disengagement rule.

2. **Urban-exploration (urbex) safety/ethics guides** (aggregate of
   https://www.mapurbex.com/us/en/blog/the-golden-rules-of-urbex-ethics-and-safety-for-responsible-exploration
   and https://nocamerabag.com/blog/urbex-rules/). Recurring elements: the
   buddy system explicitly compared to scuba diving's "never dive alone"
   rule; assigned team roles (lead navigator, rear watcher, safety
   spotter); a named outside contact with a deadline ("if you haven't
   heard from us by X, call for help"); pre-visit risk assessment of the
   specific site; a leave-no-trace/minimum-impact ethical code, including
   digital-privacy practice (no geotags, sanitized reports) — useful for
   the "corroborate before publishing a case file" step of SlopU's
   protocol.

3. **Academic fieldwork risk-assessment policy** (Oxford CUREC good-practice
   guide, https://researchsupport.admin.ox.ac.uk/files/bpg01researchersafetypdf;
   York St John's fieldwork risk-assessment guidance,
   https://www.yorksj.ac.uk/policies-and-documents/research/ethics-and-integrity/data-collection-and-fieldwork-risk-assessment/).
   Recurring elements: a formal, required risk assessment before any
   fieldwork; explicit lone-working evaluation (is a second person
   required for this specific site); a structured hazard framework
   (York St John's "People / Environment / Tasks" model); a designated
   check-in contact with a defined response-if-silent procedure; and —
   distinct from the ghost-hunting/urbex sources — an explicit
   **psychological distress protocol** alongside the physical one, i.e.
   a plan for what happens if a team member is shaken by what they
   observed, not just injured. This is the one real-world source with an
   institutional-paperwork register that matches SlopU's own deadpan
   voice most closely — good source of authentic bureaucratic phrasing
   for week 4's protocol document.
