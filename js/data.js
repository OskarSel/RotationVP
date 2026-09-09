/**
 * data.js
 * ---------------------------------------------------------------------------
 * Single source of truth for course content. Nothing else in the app should
 * hardcode chapter or lesson info — learn.html, chapter.html and lesson.html
 * all read from `CHAPTERS` and render themselves from it.
 *
 * Chapter 1 ("Volleyball Basics") carries real, written content below.
 * Chapters 2–8 are still placeholder-only (see project brief) — swap the
 * `title` / `summary` strings for real content later without touching any
 * rendering code, following the same lesson shape used in Chapter 1.
 *
 * Lesson shape:
 *   id, title, summary, durationMin,
 *   theory: string[] | null        — paragraphs shown in "Introduction"
 *   keyTakeaway: string | null     — one-line summary callout
 *   showAnimation: boolean         — whether a "Visualization" panel is shown
 *   isTest: boolean                — chapter-test lessons skip theory/animation
 *   quiz: QuizQuestion[] | null    — null falls back to the placeholder demo
 *
 * QuizQuestion shape: { question, answers: [{ text, correct, explanation }] }
 * (exactly 4 answers, exactly 1 with correct: true)
 */

const TOTAL_CHAPTERS = 8;
const LESSONS_PER_CHAPTER = 10;

/* ---------------------------------------------------------------------- */
/* Chapter 1 — Volleyball Basics (real content)                           */
/* ---------------------------------------------------------------------- */

const CHAPTER_1_LESSONS = [
  {
    id: 1,
    title: "The Volleyball Court",
    summary: "Learn the size and layout of a standard indoor volleyball court.",
    durationMin: 7,
    theory: [
      "A standard indoor volleyball court is a rectangle measuring 18 metres long and 9 metres wide. The net splits it exactly in half, so each team defends a 9 x 9 metre square.",
      "Around the playing surface there is a free zone — open space where players are still allowed to play the ball after it crosses the boundary lines. In official competitions this free zone is several metres wide on every side.",
      "The net height is different for men's and women's indoor volleyball: 2.43 m for men and 2.24 m for women. Youth and recreational leagues often lower the net further.",
      "These dimensions are the same at every level of the sport that uses regulation rules — a small local league court and a court used at the Olympics share the exact same 18 x 9 m footprint, with only the net height changing by category. Getting comfortable with these numbers now makes every zone and rule later in this chapter much easier to picture.",
    ],
    keyTakeaway: "A volleyball court is 18 m long and 9 m wide, split into two 9 x 9 m halves by the net, with open free zone space around it.",
    showAnimation: false,
    isTest: false,
    quiz: [
      {
        question: "What are the total dimensions of a standard volleyball court?",
        answers: [
          { text: "18 m long by 9 m wide", correct: true, explanation: "Correct — the full court is twice as long as it is wide." },
          { text: "12 m long by 6 m wide", correct: false, explanation: "Too small — that's closer to a badminton court." },
          { text: "24 m long by 12 m wide", correct: false, explanation: "Too large — no standard volleyball court is this big." },
          { text: "18 m long by 18 m wide", correct: false, explanation: "A volleyball court is not square." },
        ],
      },
      {
        question: "How big is each team's half of the court?",
        answers: [
          { text: "9 m x 9 m", correct: true, explanation: "Correct — the net splits the 18 x 9 m court into two equal squares." },
          { text: "18 m x 4.5 m", correct: false, explanation: "That halves the width instead of the length." },
          { text: "6 m x 9 m", correct: false, explanation: "This is too small to be half of the full court." },
          { text: "9 m x 4.5 m", correct: false, explanation: "This is a quarter of the court, not a half." },
        ],
      },
      {
        question: "What divides the court into two halves?",
        answers: [
          { text: "The net", correct: true, explanation: "Correct — the net sits directly above the centerline." },
          { text: "The attack line", correct: false, explanation: "The attack line separates front and back zones on the same side, not the two teams." },
          { text: "The free zone", correct: false, explanation: "The free zone is the space around the court, not a dividing line." },
          { text: "The service zone", correct: false, explanation: "The service zone is behind the end line, used only for serving." },
        ],
      },
      {
        question: "What is the standard net height in men's indoor volleyball?",
        answers: [
          { text: "2.43 m", correct: true, explanation: "Correct — this is the official men's net height." },
          { text: "2.24 m", correct: false, explanation: "That is the women's net height." },
          { text: "2.00 m", correct: false, explanation: "That is lower than any standard adult net height." },
          { text: "3.00 m", correct: false, explanation: "No standard indoor volleyball net is set this high." },
        ],
      },
      {
        question: "What is the standard net height in women's indoor volleyball?",
        answers: [
          { text: "2.24 m", correct: true, explanation: "Correct — this is the official women's net height." },
          { text: "2.43 m", correct: false, explanation: "That is the men's net height." },
          { text: "2.10 m", correct: false, explanation: "This is lower than the official women's height." },
          { text: "2.55 m", correct: false, explanation: "This is higher than either standard adult net height." },
        ],
      },
      {
        question: "What is the space around the court called, where a ball can still legally be played?",
        answers: [
          { text: "The free zone", correct: true, explanation: "Correct — players may chase and play balls in the free zone." },
          { text: "The service zone", correct: false, explanation: "The service zone is only used behind the end line for serving." },
          { text: "The attack zone", correct: false, explanation: "The attack (front) zone is inside the court, near the net." },
          { text: "The substitution zone", correct: false, explanation: "That's a small area near the scorer's table, unrelated to ball play." },
        ],
      },
      {
        question: "Where do players stand when serving the ball?",
        answers: [
          { text: "Behind the end line, inside the service zone", correct: true, explanation: "Correct — servers must stay behind the end line until after contact." },
          { text: "On the attack line", correct: false, explanation: "The attack line is inside the court, not behind the end line." },
          { text: "Anywhere inside the court", correct: false, explanation: "Serving from inside the court is not allowed." },
          { text: "Directly under the net", correct: false, explanation: "This is the opposite end of the court from the service zone." },
        ],
      },
      {
        question: "What shape is a volleyball court?",
        answers: [
          { text: "A rectangle", correct: true, explanation: "Correct — 18 m by 9 m makes a rectangle, not a square." },
          { text: "A square", correct: false, explanation: "The court's length is double its width, so it isn't square." },
          { text: "A trapezoid", correct: false, explanation: "All four boundary lines are straight and parallel in pairs." },
          { text: "A circle", correct: false, explanation: "Volleyball courts have straight boundary lines, not curves." },
        ],
      },
      {
        question: "Which line marks the boundary at each short end of the court?",
        answers: [
          { text: "The end line", correct: true, explanation: "Correct — the end line (back line) marks the 9 m width at each end." },
          { text: "The sideline", correct: false, explanation: "Sidelines run along the long 18 m edges." },
          { text: "The centerline", correct: false, explanation: "The centerline runs under the net, between the two halves." },
          { text: "The attack line", correct: false, explanation: "The attack line is 3 m in from the net, not at the end of the court." },
        ],
      },
      {
        question: "Why does a volleyball court have a free zone around it?",
        answers: [
          { text: "So players can chase and legally play balls that cross the boundary lines", correct: true, explanation: "Correct — the free zone lets rallies continue near the edges of play." },
          { text: "So spectators can sit closer to the action", correct: false, explanation: "The free zone is a playing-rules feature, not a spectator area." },
          { text: "So the net can be attached to the poles", correct: false, explanation: "The net posts are outside the sidelines, unrelated to the free zone's purpose." },
          { text: "So substitutes can warm up during rallies", correct: false, explanation: "Substitutes wait near the bench, not in the free zone during play." },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Court Lines and Zones",
    summary: "The lines and numbered zones that organize every position on court.",
    durationMin: 7,
    theory: [
      "Every part of the court is marked by lines: two sidelines (the long edges), two end lines (the short edges), a centerline under the net, and an attack line 3 metres from the centerline on each side.",
      "The attack line splits each half into a front zone (between the net and the attack line) and a back zone (between the attack line and the end line). These zones decide what a player is allowed to do, which you'll cover in Chapter 2.",
      "For rotation and scorekeeping, each half of the court is also split into six numbered zones (1 through 6), arranged in two rows of three. Zone 1 is the right-back zone, where the serve is hit from.",
      "The six zones aren't just labels — they follow a fixed rotation order (1 → 2 → 3 → 4 → 5 → 6 → back to 1). Whenever a team wins back the serve, every player shifts one zone clockwise. Over the course of a set, that's exactly what moves a player from the back row into the front row and eventually back again.",
    ],
    keyTakeaway: "The attack line (3 m from the net) splits each side into a front zone and a back zone, and the court is further organized into six numbered zones for rotation.",
    showAnimation: false,
    isTest: false,
    quiz: [
      {
        question: "How far from the net is the attack line?",
        answers: [
          { text: "3 metres", correct: true, explanation: "Correct — the attack line sits 3 m from the centerline on each side." },
          { text: "1 metre", correct: false, explanation: "That's too close to the net to divide the zones meaningfully." },
          { text: "5 metres", correct: false, explanation: "That's further than the official attack-line distance." },
          { text: "9 metres", correct: false, explanation: "That would place it at the end line, not inside the court." },
        ],
      },
      {
        question: "What does the attack line separate on each side of the court?",
        answers: [
          { text: "The front zone from the back zone", correct: true, explanation: "Correct — it marks where front-zone rules stop applying." },
          { text: "The court from the free zone", correct: false, explanation: "The sidelines and end lines mark that boundary, not the attack line." },
          { text: "One team's half from the other's", correct: false, explanation: "The net and centerline separate the two teams' halves." },
          { text: "The service zone from the court", correct: false, explanation: "The end line marks that boundary." },
        ],
      },
      {
        question: "How many numbered zones make up each team's side of the court?",
        answers: [
          { text: "Six", correct: true, explanation: "Correct — zones 1 through 6, in two rows of three." },
          { text: "Four", correct: false, explanation: "Each side has more than four zones." },
          { text: "Eight", correct: false, explanation: "There are fewer than eight zones per side." },
          { text: "Three", correct: false, explanation: "Three is only the number of zones in one row (front or back), not the total." },
        ],
      },
      {
        question: "Which zone is the ball served from?",
        answers: [
          { text: "Zone 1", correct: true, explanation: "Correct — zone 1 (right-back) is the serving position." },
          { text: "Zone 4", correct: false, explanation: "Zone 4 is a front-row zone, not the serving zone." },
          { text: "Zone 6", correct: false, explanation: "Zone 6 is the back-middle zone, not where serves start." },
          { text: "Zone 3", correct: false, explanation: "Zone 3 is the front-middle zone, not the serving zone." },
        ],
      },
      {
        question: "Which lines mark the long edges of the court?",
        answers: [
          { text: "The sidelines", correct: true, explanation: "Correct — sidelines run the full 18 m length of the court." },
          { text: "The end lines", correct: false, explanation: "End lines mark the short 9 m edges." },
          { text: "The attack lines", correct: false, explanation: "Attack lines run parallel to the net, not along the court's length." },
          { text: "The centerline", correct: false, explanation: "The centerline sits under the net, across the width of the court." },
        ],
      },
      {
        question: "What is the area between the net and the attack line called?",
        answers: [
          { text: "The front zone", correct: true, explanation: "Correct — this 3 m strip nearest the net is the front zone." },
          { text: "The back zone", correct: false, explanation: "The back zone is between the attack line and the end line." },
          { text: "The free zone", correct: false, explanation: "The free zone is outside the court's boundary lines." },
          { text: "The service zone", correct: false, explanation: "The service zone is behind the end line." },
        ],
      },
      {
        question: "Which line runs directly under the net?",
        answers: [
          { text: "The centerline", correct: true, explanation: "Correct — the centerline marks the boundary between the two teams' courts." },
          { text: "The sideline", correct: false, explanation: "Sidelines run along the length of the court, perpendicular to the net." },
          { text: "The attack line", correct: false, explanation: "The attack line is 3 m away from the net, not under it." },
          { text: "The end line", correct: false, explanation: "The end line is at the far edge of each half, away from the net." },
        ],
      },
      {
        question: "In the six-zone layout, which three zones make up the front row?",
        answers: [
          { text: "Zones 2, 3, and 4", correct: true, explanation: "Correct — these three zones sit in the front zone, closest to the net." },
          { text: "Zones 1, 5, and 6", correct: false, explanation: "These make up the back row instead." },
          { text: "Zones 1, 2, and 3", correct: false, explanation: "This mixes a back-row zone (1) with front-row zones." },
          { text: "Zones 4, 5, and 6", correct: false, explanation: "This mixes a front-row zone (4) with back-row zones." },
        ],
      },
      {
        question: "What is the purpose of numbering the six zones on each side?",
        answers: [
          { text: "To track player positions and rotation order", correct: true, explanation: "Correct — the numbers define where each player stands and how the team rotates." },
          { text: "To mark where the ball is allowed to bounce", correct: false, explanation: "The ball can be played anywhere within the boundary lines, not restricted by zone number." },
          { text: "To show which team is serving", correct: false, explanation: "The scoreboard and referee signals track serving, not the zone numbers." },
          { text: "To divide the court between two matches at once", correct: false, explanation: "Zone numbers apply within a single match, not to sharing a court." },
        ],
      },
      {
        question: "Which zone sits in the back-middle position?",
        answers: [
          { text: "Zone 6", correct: true, explanation: "Correct — zone 6 is the back-middle zone." },
          { text: "Zone 3", correct: false, explanation: "Zone 3 is the front-middle zone." },
          { text: "Zone 5", correct: false, explanation: "Zone 5 is the back-left zone." },
          { text: "Zone 2", correct: false, explanation: "Zone 2 is a front-row zone, on the right." },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "How a Rally Works",
    summary: "The basic flow of play, from serve to the end of a point.",
    durationMin: 6,
    theory: [
      "A rally is the sequence of play that starts the moment the ball is served and ends the moment it becomes 'dead' — when it hits the floor, goes out of bounds, or a team commits a fault.",
      "During a rally, the ball travels back and forth over the net as each team tries to return it legally within their allowed number of contacts, and eventually put it down on the opponent's side.",
      "A rally can end in several ways: the ball lands inside the opponent's court, the ball goes out of bounds, a team fails to return the ball over the net, or a team commits a rule violation (a 'fault'), such as touching the net.",
      "A single rally can last anywhere from under a second — an ace that lands untouched right off the serve — to well over thirty seconds in a high-level match, with the ball crossing the net a dozen times or more as both teams dig, set and attack in turn. Regardless of how long it runs, the same basic ending rules apply every single time.",
    ],
    keyTakeaway: "A rally runs from serve to the moment the ball becomes dead, and can end by a ball landing in, going out, or a fault by either team.",
    showAnimation: false,
    isTest: false,
    quiz: [
      {
        question: "When does a rally begin?",
        answers: [
          { text: "The moment the ball is served", correct: true, explanation: "Correct — the serve is always the first action of a rally." },
          { text: "The moment the referee blows the whistle at the end", correct: false, explanation: "That whistle signals the end of a rally, not the start." },
          { text: "When a team wins the point", correct: false, explanation: "Winning the point is the outcome of the rally, not its start." },
          { text: "When the ball crosses the net for the first time", correct: false, explanation: "The serve itself, before crossing the net, is what starts the rally." },
        ],
      },
      {
        question: "What is a 'dead ball'?",
        answers: [
          { text: "A ball that is no longer in active play because the rally has ended", correct: true, explanation: "Correct — once the rally ends, the ball is considered dead until the next serve." },
          { text: "A ball that has lost its air pressure", correct: false, explanation: "This describes a physical problem with the ball, not a rules term." },
          { text: "A serve that is illegal", correct: false, explanation: "An illegal serve is a fault, a different concept from a dead ball." },
          { text: "The ball used only for warm-ups", correct: false, explanation: "This isn't a recognized rules term in volleyball." },
        ],
      },
      {
        question: "Which of these can end a rally?",
        answers: [
          { text: "The ball landing out of bounds", correct: true, explanation: "Correct — an out-of-bounds ball immediately ends the rally." },
          { text: "A player calling a timeout mid-swing", correct: false, explanation: "Timeouts are requested between rallies, not mid-action." },
          { text: "A team completing exactly one contact", correct: false, explanation: "One contact alone doesn't end a rally unless it also sends the ball out or into the net." },
          { text: "The ball crossing the net for the first time", correct: false, explanation: "Crossing the net is normal mid-rally play, not an ending event." },
        ],
      },
      {
        question: "What is a 'fault' in volleyball?",
        answers: [
          { text: "A rule violation that ends the rally in the opposing team's favor", correct: true, explanation: "Correct — faults are rule breaks, such as touching the net or double-hitting illegally." },
          { text: "A missed serve attempt that gets replayed", correct: false, explanation: "There is no automatic replay for a missed serve — a bad serve is itself a fault." },
          { text: "A successful block", correct: false, explanation: "A successful block is legal play, not a rule violation." },
          { text: "A substitution request", correct: false, explanation: "Substitutions are a normal part of the game, not a violation." },
        ],
      },
      {
        question: "During a rally, what is each team trying to do?",
        answers: [
          { text: "Legally return the ball and eventually ground it on the opponent's side", correct: true, explanation: "Correct — that's the core objective of every rally." },
          { text: "Keep the ball in the air forever without ever attacking", correct: false, explanation: "The goal is to win the point, not avoid attacking." },
          { text: "Touch the net as many times as possible", correct: false, explanation: "Touching the net is a fault, not a goal." },
          { text: "Serve the ball twice in a row", correct: false, explanation: "Only one serve starts each rally; you can't serve twice in the same rally." },
        ],
      },
      {
        question: "Can a rally end without the ball touching the floor?",
        answers: [
          { text: "Yes, for example if a team commits a net-touch fault", correct: true, explanation: "Correct — faults like touching the net end the rally instantly, regardless of where the ball is." },
          { text: "No, the ball must always hit the floor to end a rally", correct: false, explanation: "Many rallies end on a fault before the ball ever lands." },
          { text: "No, only the referee's whistle can end a rally", correct: false, explanation: "The whistle confirms the end, but the ending event (fault, out, etc.) is what actually stops play." },
          { text: "Only if both teams agree to stop", correct: false, explanation: "Rallies end according to the rules, not by agreement between teams." },
        ],
      },
      {
        question: "What typically happens immediately after a rally ends?",
        answers: [
          { text: "A point is awarded and the next serve is prepared", correct: true, explanation: "Correct — under rally-point scoring, every completed rally awards a point." },
          { text: "Both teams switch ends of the court", correct: false, explanation: "Teams only switch ends between sets (or partway through a deciding set), not after every rally." },
          { text: "The match automatically restarts from zero", correct: false, explanation: "Only a completely new match would restart the score, not a single rally." },
          { text: "The losing team gets an extra contact next rally", correct: false, explanation: "The three-contact rule doesn't change based on the previous rally's result." },
        ],
      },
      {
        question: "What is the maximum number of times the ball can cross the net during a rally?",
        answers: [
          { text: "There's no fixed limit — it goes back and forth until the rally ends", correct: true, explanation: "Correct — a rally can involve many exchanges before it ends." },
          { text: "Exactly once", correct: false, explanation: "A rally almost always involves multiple crossings before it ends." },
          { text: "Exactly three times", correct: false, explanation: "Three is the contact limit per team per side, not a net-crossing limit." },
          { text: "Exactly twice", correct: false, explanation: "There is no such fixed limit in the rules." },
        ],
      },
      {
        question: "If the ball touches the floor inside the boundary lines, what happens to the rally?",
        answers: [
          { text: "It ends immediately", correct: true, explanation: "Correct — a ball landing in bounds ends the rally right away." },
          { text: "Play continues as normal", correct: false, explanation: "The ball touching the floor in bounds always ends the rally." },
          { text: "The serving team automatically loses the point", correct: false, explanation: "The point goes to whichever team's opponent the ball landed on, not automatically to the server." },
          { text: "The point is replayed", correct: false, explanation: "A ball landing in bounds is a clear result, not a replay situation." },
        ],
      },
      {
        question: "Which best describes the overall shape of a rally?",
        answers: [
          { text: "Serve, then a back-and-forth exchange, then an ending event", correct: true, explanation: "Correct — this is the basic structure of every rally." },
          { text: "Serve, then an automatic point with no further play", correct: false, explanation: "Most rallies involve extended play beyond the serve." },
          { text: "A fixed sequence of exactly three hits before the rally ends", correct: false, explanation: "A rally lasts until it actually ends — it isn't capped at three total hits." },
          { text: "Two serves in a row from the same team", correct: false, explanation: "A rally always starts with a single serve." },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Scoring and Winning a Set",
    summary: "How points, sets, and matches are won under rally-point scoring.",
    durationMin: 7,
    theory: [
      "Modern volleyball uses rally-point scoring: every completed rally awards exactly one point to a team, whether or not that team served. This is different from older systems where only the serving team could score.",
      "A set is normally won by the first team to reach 25 points, provided they lead by at least 2 points. If the score reaches 24-24, play continues until one team leads by 2 (25-23, 26-24, 30-28, and so on).",
      "A match is usually played as best-of-five sets: the first team to win 3 sets wins the match. If the match reaches a deciding 5th set, that set is played to 15 points instead of 25, still requiring a 2-point lead to win.",
      "Because the receiving team can score just as easily as the serving team, momentum can swing quickly — a team can go from serving comfortably at 20-15 to trailing 20-22 within a handful of rallies. This is part of why rally-point scoring, which replaced older systems where only the server could score, changed the sport's pace so dramatically.",
    ],
    keyTakeaway: "Under rally-point scoring every rally scores a point; sets go to 25 (win by 2), and a deciding 5th set goes to 15 (also win by 2).",
    showAnimation: false,
    isTest: false,
    quiz: [
      {
        question: "Under rally-point scoring, who scores a point when a rally ends?",
        answers: [
          { text: "Whichever team wins the rally, regardless of who served", correct: true, explanation: "Correct — this is the core idea of rally-point scoring." },
          { text: "Only the serving team, if it wins the rally", correct: false, explanation: "That describes an older, side-out scoring system, not modern rally-point scoring." },
          { text: "Both teams, every rally", correct: false, explanation: "Only the winning team of the rally scores a point." },
          { text: "Neither team — points are awarded at the end of the set only", correct: false, explanation: "Points are awarded after every single rally, not saved up." },
        ],
      },
      {
        question: "How many points are typically needed to win a regular set?",
        answers: [
          { text: "25, with at least a 2-point lead", correct: true, explanation: "Correct — sets 1 through 4 in a five-set match go to 25." },
          { text: "21, no lead required", correct: false, explanation: "Volleyball sets require both reaching the target and a 2-point lead." },
          { text: "15, with at least a 2-point lead", correct: false, explanation: "15 points is the target for a deciding 5th set, not a regular set." },
          { text: "30, no lead required", correct: false, explanation: "30 isn't the standard target, and a lead is always required." },
        ],
      },
      {
        question: "If the score reaches 24-24, what happens?",
        answers: [
          { text: "Play continues until one team leads by 2 points", correct: true, explanation: "Correct — for example the set could end 26-24 or later." },
          { text: "The set ends immediately in a tie", correct: false, explanation: "Volleyball sets cannot end in a tie." },
          { text: "The set restarts from 0-0", correct: false, explanation: "The score is never reset mid-set." },
          { text: "Sudden death — the very next point wins", correct: false, explanation: "A 2-point lead is still required, not just the next point." },
        ],
      },
      {
        question: "How many sets does a team need to win to win the match, in a standard best-of-five format?",
        answers: [
          { text: "3", correct: true, explanation: "Correct — the first team to win 3 sets wins the match." },
          { text: "2", correct: false, explanation: "2 sets is not enough to clinch a best-of-five match." },
          { text: "4", correct: false, explanation: "A match ends once a team reaches 3 set wins; a 4th isn't needed." },
          { text: "5", correct: false, explanation: "Winning all 5 sets isn't required — only 3 wins are." },
        ],
      },
      {
        question: "How many points does a deciding 5th set go to?",
        answers: [
          { text: "15, with at least a 2-point lead", correct: true, explanation: "Correct — the deciding set uses a shorter target than the other sets." },
          { text: "25, with at least a 2-point lead", correct: false, explanation: "25 is the target for sets 1–4, not the deciding set." },
          { text: "10, no lead required", correct: false, explanation: "10 points is too low, and a lead is still required." },
          { text: "15, no lead required", correct: false, explanation: "The 2-point lead rule still applies in the deciding set." },
        ],
      },
      {
        question: "What is the minimum number of sets a match can end in (best-of-five format)?",
        answers: [
          { text: "3, if one team wins the first three sets", correct: true, explanation: "Correct — a 3-0 sweep ends the match immediately." },
          { text: "5, every match must go the full distance", correct: false, explanation: "A match ends as soon as a team reaches 3 set wins." },
          { text: "1", correct: false, explanation: "A single set is never enough to decide a best-of-five match." },
          { text: "4", correct: false, explanation: "4 is possible but not the minimum — 3 is." },
        ],
      },
      {
        question: "Which scoring system does modern indoor volleyball use?",
        answers: [
          { text: "Rally-point scoring", correct: true, explanation: "Correct — a point is scored on every rally." },
          { text: "Side-out scoring only", correct: false, explanation: "Side-out-only scoring (where only the server can score) was replaced by rally-point scoring." },
          { text: "Time-based scoring, like a running clock", correct: false, explanation: "Volleyball has no game clock — sets are won by points, not time." },
          { text: "Golden-point scoring on every set", correct: false, explanation: "Sets are still played to 25 (or 15) points, not decided by a single golden point." },
        ],
      },
      {
        question: "Can a set score end 25-24?",
        answers: [
          { text: "No, because the winning team must lead by at least 2 points", correct: true, explanation: "Correct — a 1-point lead at 25 is not enough to win the set." },
          { text: "Yes, reaching 25 first always wins immediately", correct: false, explanation: "Reaching 25 alone isn't enough without the 2-point lead." },
          { text: "Yes, but only in the deciding set", correct: false, explanation: "The 2-point lead rule applies in every set, including the decider." },
          { text: "No, because sets can only end on even numbers", correct: false, explanation: "Sets can end on odd numbers too, such as 27-25, as long as the lead is 2." },
        ],
      },
      {
        question: "What determines the winner of the overall match?",
        answers: [
          { text: "The first team to win 3 sets", correct: true, explanation: "Correct — set wins decide the match, not total points scored." },
          { text: "The team with the higher total point count across all sets", correct: false, explanation: "Total points across sets don't decide the match — set wins do." },
          { text: "The team that wins the first set", correct: false, explanation: "Winning the first set gives no automatic advantage in deciding the match." },
          { text: "The team that scores first in the match", correct: false, explanation: "Scoring first has no special bearing on who ultimately wins." },
        ],
      },
      {
        question: "Why might a set score reach a high number like 30-28?",
        answers: [
          { text: "Because a team must win by 2 points, so play continues past 25 if needed", correct: true, explanation: "Correct — the 2-point lead rule can extend a set well past 25." },
          { text: "Because the set target changes to 30 automatically", correct: false, explanation: "The target stays 25 (or 15) — it's the lead requirement that extends play." },
          { text: "Because of a scoring error that must be corrected", correct: false, explanation: "A high score like 30-28 is a normal, valid outcome under the rules." },
          { text: "Because extra points are awarded for long rallies", correct: false, explanation: "Every rally is worth exactly one point, no matter how long it lasts." },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Serving Basics",
    summary: "How every rally begins: the rules and basic technique of the serve.",
    durationMin: 7,
    theory: [
      "The serve starts every rally. The server stands in the service zone, behind the end line, and must strike the ball to send it over the net into the opponent's court within the sidelines.",
      "The server may not step on or over the end line before contacting the ball — doing so is a foot fault. After the serve, the server may land inside the court, since the restriction only applies at the moment of contact.",
      "If the serve goes into the net, lands outside the court, or crosses over/under the antenna, it's a fault and the receiving team is awarded the point (and the right to serve next). Common serve types include the float serve and the jump serve, both legal as long as they're struck from the service zone.",
      "Different serve types trade off risk and reward. A float serve is hit with little spin, making its path harder to read, while a jump serve adds power and topspin at the cost of more control, and is more likely to force a weak return if it lands well. Which one a player uses often depends on the score and the situation in the match.",
    ],
    keyTakeaway: "The serve is hit from behind the end line inside the service zone; stepping on the line before contact, or missing the court, is a fault that gives the point to the other team.",
    showAnimation: false,
    isTest: false,
    quiz: [
      {
        question: "Where must a player stand to legally serve?",
        answers: [
          { text: "Behind the end line, within the service zone", correct: true, explanation: "Correct — this is the only legal serving position." },
          { text: "On the attack line", correct: false, explanation: "The attack line is well inside the court, not a serving position." },
          { text: "Anywhere along the sideline", correct: false, explanation: "Serving must happen from the service zone specifically, not any point on the sideline." },
          { text: "Directly beside the net", correct: false, explanation: "This is the opposite end of the court from the service zone." },
        ],
      },
      {
        question: "What is a 'foot fault' during a serve?",
        answers: [
          { text: "Stepping on or over the end line before contacting the ball", correct: true, explanation: "Correct — the server's feet must stay behind the line until after contact." },
          { text: "Kicking the ball instead of hitting it with a hand", correct: false, explanation: "Serving with the foot isn't the issue here — foot placement is." },
          { text: "Missing the serve entirely", correct: false, explanation: "A missed serve is simply an out serve, a different kind of fault." },
          { text: "Serving without shoes", correct: false, explanation: "Footwear isn't what defines a foot fault in this context." },
        ],
      },
      {
        question: "What happens if a serve lands outside the court?",
        answers: [
          { text: "The receiving team is awarded the point and gains the serve", correct: true, explanation: "Correct — an out serve is a fault that benefits the other team." },
          { text: "The serve is automatically replayed", correct: false, explanation: "There is no automatic replay for a missed serve in standard play." },
          { text: "The serving team gets a second attempt", correct: false, explanation: "Each rally allows only one serve attempt." },
          { text: "Nothing — the rally simply restarts", correct: false, explanation: "An out serve ends the rally with a clear result, not a restart." },
        ],
      },
      {
        question: "Can the server land inside the court immediately after serving?",
        answers: [
          { text: "Yes, the foot-fault rule only applies at the moment of contact", correct: true, explanation: "Correct — servers commonly step or jump into the court right after striking the ball." },
          { text: "No, the server must always land outside the court", correct: false, explanation: "There's no rule requiring the server to land outside the court." },
          { text: "No, doing so is always a fault", correct: false, explanation: "Landing inside the court after the serve is completely normal and legal." },
          { text: "Only on a jump serve", correct: false, explanation: "This applies to any legal serve type, not just the jump serve." },
        ],
      },
      {
        question: "Which of these is a legal type of serve?",
        answers: [
          { text: "A jump serve", correct: true, explanation: "Correct — jump serves are a common, legal serving technique." },
          { text: "A serve thrown with two hands like a basketball pass", correct: false, explanation: "The ball must be struck, not thrown, to be a legal serve." },
          { text: "A serve hit from inside the court", correct: false, explanation: "Serves must be struck from behind the end line." },
          { text: "A serve where a teammate tosses the ball over the net for you", correct: false, explanation: "The server themselves must contact and send the ball, not a teammate." },
        ],
      },
      {
        question: "What must happen for a serve to be legal, besides correct foot position?",
        answers: [
          { text: "The ball must cross the net within the antennas and land in the opponent's court (or be played by them)", correct: true, explanation: "Correct — the serve must be catchable within the court boundaries." },
          { text: "The ball must bounce once before crossing the net", correct: false, explanation: "There's no bounce requirement for a serve." },
          { text: "The ball must be served underhand only", correct: false, explanation: "Overhand serves, including jump serves, are fully legal." },
          { text: "The ball must travel in a straight line", correct: false, explanation: "Serves can curve or float — there's no straight-line requirement." },
        ],
      },
      {
        question: "What is a 'float serve'?",
        answers: [
          { text: "A serve hit with little to no spin, so it moves unpredictably in the air", correct: true, explanation: "Correct — the lack of spin makes the ball's flight harder to read." },
          { text: "A serve that bounces on the floor before reaching the net", correct: false, explanation: "A float serve still must clear the net directly, without bouncing first." },
          { text: "A serve that must land outside the court on purpose", correct: false, explanation: "A serve landing outside the court is simply a fault, not a serve type." },
          { text: "A serve performed while sitting down", correct: false, explanation: "This describes seated volleyball, a different discipline, not a serve technique." },
        ],
      },
      {
        question: "If the serve touches the net but still lands legally in the opponent's court, what happens under modern rules?",
        answers: [
          { text: "Play continues — it's a legal 'let serve'", correct: true, explanation: "Correct — modern rules allow the ball to clip the net on a serve as long as it still crosses legally." },
          { text: "It's always a fault", correct: false, explanation: "Older rule sets treated any net touch as a fault, but modern rules allow it." },
          { text: "The point is automatically replayed", correct: false, explanation: "There's no replay needed — the serve is simply live." },
          { text: "The server is warned but not penalized", correct: false, explanation: "No warning is issued; the serve is simply legal." },
        ],
      },
      {
        question: "What happens if the server steps fully over the end line before contact?",
        answers: [
          { text: "It's a foot fault, awarding the point to the receiving team", correct: true, explanation: "Correct — the server's feet must stay behind the end line until contact." },
          { text: "Nothing, as long as the serve is otherwise good", correct: false, explanation: "Foot position is checked independently of where the serve lands." },
          { text: "The serve is replayed", correct: false, explanation: "A foot fault is a fault, not a replay situation." },
          { text: "The server receives a yellow card", correct: false, explanation: "This is a standard fault, not a disciplinary card situation." },
        ],
      },
      {
        question: "Why is the serve considered the start of every rally?",
        answers: [
          { text: "Because no other action can put the ball into play", correct: true, explanation: "Correct — every single rally begins with a serve, with no exceptions." },
          { text: "Because it's the only contact that can score a point", correct: false, explanation: "Any contact by the winning team in a rally can lead to the scoring hit — not just the serve." },
          { text: "Because the server is guaranteed to win the rally", correct: false, explanation: "The server has no guaranteed advantage — either team can win the rally." },
          { text: "Because the serve doesn't count as one of the three contacts", correct: false, explanation: "The serve is the serving team's first contact of that rally." },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "The Three-Contact Rule",
    summary: "How many times a team may touch the ball before sending it back over.",
    durationMin: 6,
    theory: [
      "Each team is allowed a maximum of three contacts with the ball to return it over the net. This is why the classic pattern of play is dig (1st contact), set (2nd contact), attack (3rd contact).",
      "A team that uses a fourth contact commits a fault, and the rally is awarded to the other team. Using fewer than three contacts — even just one — is completely legal.",
      "One important exception: a touch on the ball during a block does not count toward the three-contact limit. So a team can block the ball and still use a full three contacts afterward.",
      "A single player is also not allowed to hit the ball twice in a row (two consecutive contacts), except immediately following a blocking attempt, where the blocker may then play the very next contact.",
      "In fast-moving defensive situations, teams don't always get a clean dig-set-attack. A ball might be touched accidentally by a diving player on the first contact and deflected awkwardly on the second, yet still be legally attacked on the third — the rule only cares about the total count and who touched it, not how clean each individual contact looked.",
    ],
    keyTakeaway: "A team gets up to three contacts (commonly dig-set-attack) to return the ball, a block touch doesn't count toward that limit, and no player may hit twice in a row except right after blocking.",
    showAnimation: false,
    isTest: false,
    quiz: [
      {
        question: "What is the maximum number of contacts a team may use to return the ball (not counting a block touch)?",
        answers: [
          { text: "Three", correct: true, explanation: "Correct — this is the standard three-contact rule." },
          { text: "Two", correct: false, explanation: "Teams are allowed one more contact than this." },
          { text: "Four", correct: false, explanation: "Four contacts (excluding a block touch) is one too many and is a fault." },
          { text: "One", correct: false, explanation: "Teams are allowed up to three, not just one." },
        ],
      },
      {
        question: "What is the classic three-contact sequence called?",
        answers: [
          { text: "Dig, set, attack", correct: true, explanation: "Correct — pass to control it, set to position it, attack to send it over." },
          { text: "Serve, block, dig", correct: false, explanation: "The serve happens before the rally's return sequence, and blocking doesn't count as one of the three." },
          { text: "Attack, set, dig", correct: false, explanation: "This reverses the usual order — the attack is normally last, not first." },
          { text: "Block, block, attack", correct: false, explanation: "A block touch doesn't count toward the three-contact limit at all." },
        ],
      },
      {
        question: "Does a block touch count toward a team's three-contact limit?",
        answers: [
          { text: "No, a block touch does not count", correct: true, explanation: "Correct — the team can still use three full contacts after a block." },
          { text: "Yes, it always counts as the first contact", correct: false, explanation: "A block touch is specifically excluded from the count." },
          { text: "Yes, it counts as the team's final contact", correct: false, explanation: "This isn't correct — a block touch isn't counted at all." },
          { text: "It depends on which player performed the block", correct: false, explanation: "The rule applies the same way no matter who performs the block." },
        ],
      },
      {
        question: "Is a team required to use all three contacts before sending the ball back?",
        answers: [
          { text: "No, using fewer than three (even just one) is legal", correct: true, explanation: "Correct — a team can return the ball on the first or second contact if they choose." },
          { text: "Yes, exactly three contacts must always be used", correct: false, explanation: "Three is only the maximum, not a requirement." },
          { text: "No, but using fewer than three is a fault", correct: false, explanation: "Using fewer contacts than the maximum is completely legal." },
          { text: "Yes, unless the team is losing the set", correct: false, explanation: "The score has no effect on the contact rule." },
        ],
      },
      {
        question: "What happens if a team touches the ball a fourth time (not counting a block)?",
        answers: [
          { text: "It's a fault, and the rally goes to the other team", correct: true, explanation: "Correct — a fourth contact breaks the three-contact rule." },
          { text: "Nothing, as long as the ball still crosses the net", correct: false, explanation: "The fourth contact is a fault regardless of the outcome." },
          { text: "The team loses their next serve only", correct: false, explanation: "The consequence is losing the current rally, not a future serve." },
          { text: "The referee gives a warning first", correct: false, explanation: "A fourth contact is called as a fault immediately, with no warning." },
        ],
      },
      {
        question: "Can the same player generally hit the ball twice in a row?",
        answers: [
          { text: "No, except right after a blocking attempt", correct: true, explanation: "Correct — consecutive contacts by the same player are otherwise a fault." },
          { text: "Yes, at any point during a rally", correct: false, explanation: "Two consecutive touches by the same player is a fault outside the blocking exception." },
          { text: "Yes, but only on the team's first contact", correct: false, explanation: "There is no such exception for the first contact specifically." },
          { text: "No, under no circumstances at all", correct: false, explanation: "There is one recognized exception, immediately following a block touch." },
        ],
      },
      {
        question: "What is this rule against consecutive touches by the same player called?",
        answers: [
          { text: "A double contact (or double hit) violation", correct: true, explanation: "Correct — hitting the ball twice in a row by one player is a fault." },
          { text: "A rotation fault", correct: false, explanation: "Rotation faults involve player position order, not repeated touches." },
          { text: "A carrying violation", correct: false, explanation: "Carrying (or a 'lift') is about how the ball is contacted, not how many times." },
          { text: "A footfault", correct: false, explanation: "A foot fault is specifically about serving position, unrelated to this rule." },
        ],
      },
      {
        question: "After a player touches the ball during a block, can that same player make the next contact?",
        answers: [
          { text: "Yes, that's the one exception to the double-contact rule", correct: true, explanation: "Correct — the block touch doesn't count as their 'first' hit in a row." },
          { text: "No, a different player must touch it next no matter what", correct: false, explanation: "The blocker specifically is allowed to make the very next contact." },
          { text: "Only if the block was unsuccessful", correct: false, explanation: "The exception applies regardless of whether the block stopped the ball." },
          { text: "Only in the deciding set", correct: false, explanation: "This rule applies in every set, not just a deciding set." },
        ],
      },
      {
        question: "If a team uses only two contacts (a pass and an attack, no set) to return the ball, is this legal?",
        answers: [
          { text: "Yes, using fewer than three contacts is always allowed", correct: true, explanation: "Correct — three is a maximum, not a required number." },
          { text: "No, a set is always mandatory", correct: false, explanation: "There's no rule requiring a specific type of touch, like a set." },
          { text: "No, at least three touches are required every time", correct: false, explanation: "Teams may legally return the ball in one, two, or three contacts." },
          { text: "Only if the team is currently serving", correct: false, explanation: "This has nothing to do with which team served." },
        ],
      },
      {
        question: "Why does the three-contact rule exist?",
        answers: [
          { text: "To balance the game by giving a defending team a fair chance to organize an attack", correct: true, explanation: "Correct — it allows enough touches to control, set up, and attack the ball." },
          { text: "To make rallies as short as possible", correct: false, explanation: "The rule actually enables longer, more organized rallies by allowing multiple touches." },
          { text: "To guarantee every rally ends in a kill shot", correct: false, explanation: "There's no such guarantee — teams can still make errors within their three contacts." },
          { text: "To decide which team serves next automatically", correct: false, explanation: "The next server is decided by who wins the rally, not by the contact count." },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Ball In or Out?",
    summary: "How to tell whether a ball is legally in play or has gone out of bounds.",
    durationMin: 6,
    theory: [
      "The boundary lines (sidelines and end lines) are considered part of the court. A ball that touches any part of a boundary line is 'in' — it does not need to land fully inside the lines.",
      "A ball is 'out' if it lands completely outside the boundary lines, touches an object or the floor outside the court, or touches the antenna (the flexible rods marking the outer edge of the net) while crossing.",
      "When crossing the net, the ball must pass between the antennas — going over the net but outside the antenna's vertical plane counts as 'out', even if the ball would otherwise have landed inside the opponent's court.",
      "Because these calls can be extremely close — sometimes a matter of millimetres — many higher-level competitions use line judges positioned at each corner of the court, and some use video review as well, specifically to confirm marginal in/out decisions that the main referees might not see clearly from their own position.",
    ],
    keyTakeaway: "Touching a boundary line counts as 'in'; landing fully outside the lines, or crossing the net outside the antennas, counts as 'out'.",
    showAnimation: false,
    isTest: false,
    quiz: [
      {
        question: "If a ball touches a boundary line when it lands, is it in or out?",
        answers: [
          { text: "In — the lines are part of the court", correct: true, explanation: "Correct — any contact with a boundary line counts as landing in bounds." },
          { text: "Out — only the space between the lines counts", correct: false, explanation: "The lines themselves are included as part of the legal court surface." },
          { text: "It depends on which line is touched", correct: false, explanation: "All boundary lines (sidelines and end lines) are treated the same way." },
          { text: "The rally is replayed", correct: false, explanation: "A line touch has a clear ruling (in) — no replay is needed." },
        ],
      },
      {
        question: "What are the antennas on a volleyball net for?",
        answers: [
          { text: "To mark the outer limits the ball must pass between when crossing the net", correct: true, explanation: "Correct — they extend the sideline boundary vertically above the net." },
          { text: "To hold the net up at the correct height", correct: false, explanation: "The net posts, not the antennas, are what support the net's height." },
          { text: "To measure wind speed during outdoor matches", correct: false, explanation: "Antennas are a boundary marker, not a measuring device." },
          { text: "To indicate where the referee should stand", correct: false, explanation: "Antennas mark the net's playing width, unrelated to referee positioning." },
        ],
      },
      {
        question: "If the ball crosses over the net but outside the antenna, what is the ruling?",
        answers: [
          { text: "Out, even if it would have landed inside the opponent's court", correct: true, explanation: "Correct — the ball must pass within the antennas to remain in play." },
          { text: "In, as long as it lands inside the court lines", correct: false, explanation: "Crossing outside the antenna makes it out, regardless of where it lands." },
          { text: "It's a let, and the point is replayed", correct: false, explanation: "There's no 'let' or replay for this situation — it's simply ruled out." },
          { text: "In, but the serving team loses a point", correct: false, explanation: "The correct call is 'out', not an in-play result with a penalty." },
        ],
      },
      {
        question: "What determines whether a ball landing near the sideline is 'in' or 'out'?",
        answers: [
          { text: "Whether any part of the ball made contact with the line or the court surface inside it", correct: true, explanation: "Correct — even a small contact with the line counts as in." },
          { text: "Whether the ball bounced more than once", correct: false, explanation: "A single bounce inside or on the line already decides the ball is in." },
          { text: "How fast the ball was traveling", correct: false, explanation: "Speed has no bearing on the in/out ruling — only where it lands matters." },
          { text: "Which team hit the ball last", correct: false, explanation: "The landing spot decides in/out, regardless of who hit it." },
        ],
      },
      {
        question: "Is a ball that lands completely outside all boundary lines 'in' or 'out'?",
        answers: [
          { text: "Out", correct: true, explanation: "Correct — with no contact on any line, the ball is simply out of bounds." },
          { text: "In, if it's close enough to the line", correct: false, explanation: "Proximity doesn't matter — only actual contact with the line or court does." },
          { text: "It depends on the referee's discretion alone, with no fixed rule", correct: false, explanation: "There is a fixed rule; officials apply it, they don't invent it case by case." },
          { text: "In, as long as no player touches it after landing", correct: false, explanation: "Whether a player touches it afterward doesn't change the in/out ruling." },
        ],
      },
      {
        question: "Who typically helps confirm whether a close ball was in or out during official matches?",
        answers: [
          { text: "Line judges", correct: true, explanation: "Correct — line judges are positioned at the court corners to make these calls." },
          { text: "The team captains", correct: false, explanation: "Captains may discuss calls with officials but don't make the ruling themselves." },
          { text: "The scorekeeper", correct: false, explanation: "The scorekeeper tracks the score and rotations, not boundary calls." },
          { text: "The head coach", correct: false, explanation: "Coaches manage strategy and substitutions, not line calls." },
        ],
      },
      {
        question: "If the ball touches the top of the net and then lands inside the opponent's court during a rally (not a serve), is it in play?",
        answers: [
          { text: "Yes, touching the net during a rally is legal as long as the ball still lands in", correct: true, explanation: "Correct — the ball itself touching the net during play doesn't cause a fault." },
          { text: "No, any net contact by the ball is automatically out", correct: false, explanation: "It's players touching the net that's restricted — the ball touching the net is normal play." },
          { text: "It's a fault only if it happens on the first contact", correct: false, explanation: "There's no such exception based on which contact touches the net." },
          { text: "It's replayed as a let", correct: false, explanation: "There's no 'let' ruling for the ball clipping the net mid-rally." },
        ],
      },
      {
        question: "Which of these would be ruled 'out'?",
        answers: [
          { text: "A ball landing entirely beyond the end line, with no line contact", correct: true, explanation: "Correct — no contact with the line means it's fully outside the court." },
          { text: "A ball landing exactly on the sideline", correct: false, explanation: "Touching the sideline counts as in, since lines are part of the court." },
          { text: "A ball landing just inside the end line", correct: false, explanation: "Landing inside the lines is clearly in bounds." },
          { text: "A ball touching the centerline under the net", correct: false, explanation: "The centerline isn't a court boundary — it doesn't determine in/out for a landed ball." },
        ],
      },
      {
        question: "Does the ball need to land fully inside the lines to be considered 'in'?",
        answers: [
          { text: "No, partial contact with a boundary line is enough", correct: true, explanation: "Correct — the line is part of the court, so any touch counts." },
          { text: "Yes, the entire ball must be inside the lines", correct: false, explanation: "This overstates the requirement — line contact alone is sufficient." },
          { text: "Yes, unless a line judge rules otherwise", correct: false, explanation: "The rule itself only requires line contact, not full containment." },
          { text: "No, the ball can land anywhere on the court, lines or not", correct: false, explanation: "It still needs contact with the court surface or its boundary lines, not just anywhere nearby." },
        ],
      },
      {
        question: "Why is the antenna rule important for high serves or attacks near the sideline?",
        answers: [
          { text: "Because a ball can look like it will land in but still be ruled out if it crossed outside the antenna", correct: true, explanation: "Correct — the crossing point matters just as much as the landing point." },
          { text: "Because it changes how many contacts a team gets", correct: false, explanation: "The antenna rule is about crossing the net legally, unrelated to the contact count." },
          { text: "Because it only applies to serves, never to attacks", correct: false, explanation: "The antenna rule applies to any ball crossing the net, not just serves." },
          { text: "Because it decides which team serves next", correct: false, explanation: "This determines in/out, and the next server follows from who wins the rally." },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Net and Center-Line Rules",
    summary: "What players can and can't do near the net and the centerline.",
    durationMin: 7,
    theory: [
      "Players are not allowed to touch the net while the ball is in play — doing so is a fault, since the net is treated as part of the boundary between the two teams and touching it can interfere with the other team.",
      "The centerline runs under the net between the two courts. Players may cross under the net into the opponent's space during play, but it's a fault if a foot or hand fully crosses the centerline and touches the floor on the opponent's side. Partial crossing, where part of the foot or hand remains on or above the centerline, is legal.",
      "Blocking is a specific exception near the net: a front-row player may reach over the net to block the ball, as long as they don't contact the ball on the opponent's side before the opponent has completed their attack-hit.",
      "These rules mainly exist to stop the net and centerline from becoming a physical advantage. Without them, a player could lean on the net for balance while blocking, or plant a foot deep in the opponent's court to get a better attacking angle — either would turn the contest into something other than a fair test of skill and timing.",
    ],
    keyTakeaway: "Touching the net during play is a fault; fully crossing the centerline onto the opponent's side is a fault, but blocking with a hand reaching over the net (without touching the ball early) is legal.",
    showAnimation: false,
    isTest: false,
    quiz: [
      {
        question: "Is it legal for a player to touch the net while the ball is in play?",
        answers: [
          { text: "No, touching the net is a fault", correct: true, explanation: "Correct — net contact by a player during play is not allowed." },
          { text: "Yes, as long as it's accidental", correct: false, explanation: "Basic net-touch rules treat contact during play as a fault regardless of intent." },
          { text: "Yes, once per rally", correct: false, explanation: "There's no 'one free touch' allowance in the basic rule." },
          { text: "Only the front-row players may touch it", correct: false, explanation: "The restriction applies to all players, not just back-row ones." },
        ],
      },
      {
        question: "What is the centerline?",
        answers: [
          { text: "The line under the net separating the two teams' courts", correct: true, explanation: "Correct — it marks the direct boundary between the two halves." },
          { text: "The line 3 metres from the net on each side", correct: false, explanation: "That describes the attack line, not the centerline." },
          { text: "The outer edge of the service zone", correct: false, explanation: "The service zone is defined by the end line, not the centerline." },
          { text: "The line marking the free zone's outer limit", correct: false, explanation: "The free zone has no single defined 'line' like this." },
        ],
      },
      {
        question: "When is crossing the centerline a fault?",
        answers: [
          { text: "When a player's whole foot or hand crosses and touches the floor on the opponent's side", correct: true, explanation: "Correct — full crossing with contact on the opponent's side is the violation." },
          { text: "Whenever any part of a player's body passes over the centerline", correct: false, explanation: "Partial crossing, with part of the foot or hand still on the line, is legal." },
          { text: "Only if the player is holding the ball at the time", correct: false, explanation: "The fault is about foot/hand position, not whether the ball is being held." },
          { text: "Never — crossing the centerline is always allowed", correct: false, explanation: "Full crossing with contact on the opponent's side is specifically restricted." },
        ],
      },
      {
        question: "Is partial crossing of the centerline (with part of the foot still on the line) legal?",
        answers: [
          { text: "Yes, as long as some part remains on or above the centerline", correct: true, explanation: "Correct — this is explicitly allowed under the rule." },
          { text: "No, any crossing at all is a fault", correct: false, explanation: "Only a full, unsupported crossing onto the opponent's side is a fault." },
          { text: "Only for the setter", correct: false, explanation: "This rule applies to every player, not one specific position." },
          { text: "Only during a block", correct: false, explanation: "This applies generally, not just to blocking situations." },
        ],
      },
      {
        question: "What is a 'block' in the context of net rules?",
        answers: [
          { text: "A front-row player reaching above the net to stop or redirect an attack", correct: true, explanation: "Correct — this is a specific, legal exception near the net." },
          { text: "Any time a player touches the net accidentally", correct: false, explanation: "This describes a net-touch fault, not a block." },
          { text: "A serve that is stopped before crossing the net", correct: false, explanation: "That's simply a serving error, not a block." },
          { text: "A substitution made during a timeout", correct: false, explanation: "Substitutions are unrelated to blocking at the net." },
        ],
      },
      {
        question: "Can a blocker legally reach over the net with their hands?",
        answers: [
          { text: "Yes, as long as they don't contact the ball before the opponent's attack-hit is completed", correct: true, explanation: "Correct — this is the specific condition that makes reaching over legal for a block." },
          { text: "No, hands must always stay on the blocker's own side", correct: false, explanation: "Reaching over the net is specifically allowed for blocking, under the right timing." },
          { text: "Yes, at any time regardless of the opponent's attack", correct: false, explanation: "Reaching over is only legal relative to the timing of the opponent's attack-hit." },
          { text: "Only if the blocker is a back-row player", correct: false, explanation: "Blocking (including reaching over the net) is a front-row action — back-row players may not block." },
        ],
      },
      {
        question: "Why is touching the net treated as a fault?",
        answers: [
          { text: "Because it can interfere with play and give an unfair advantage near the net", correct: true, explanation: "Correct — the net is a shared boundary that shouldn't be used for support or leverage." },
          { text: "Because it damages the equipment", correct: false, explanation: "Equipment durability isn't the rule's purpose — fair, undisturbed play is." },
          { text: "Because only the referee is allowed to touch the net", correct: false, explanation: "This isn't the reasoning behind the rule." },
          { text: "It isn't actually a fault in modern volleyball", correct: false, explanation: "Net contact by a player during play remains a fault in the basic rules." },
        ],
      },
      {
        question: "If a player's hand fully crosses the centerline and lands flat on the opponent's floor, what is the ruling?",
        answers: [
          { text: "A fault, since the hand fully crossed and touched the opponent's side", correct: true, explanation: "Correct — this matches the definition of a centerline violation." },
          { text: "Legal, since hands are allowed to cross freely", correct: false, explanation: "A full, supported crossing onto the opponent's side is not allowed." },
          { text: "Legal, only if it happens during a block", correct: false, explanation: "Blocking doesn't grant an exception to the centerline rule." },
          { text: "A fault only if the opponent complains", correct: false, explanation: "The rule applies regardless of whether the opposing team reacts." },
        ],
      },
      {
        question: "Which of these players is allowed to reach over the net to block?",
        answers: [
          { text: "A front-row player", correct: true, explanation: "Correct — blocking is restricted to front-row players." },
          { text: "Any player on the team, front or back row", correct: false, explanation: "Back-row players are specifically not allowed to block." },
          { text: "Only the libero", correct: false, explanation: "The libero is actually one of the players most restricted from blocking or attacking near the net." },
          { text: "Only the player who served that rally", correct: false, explanation: "Who served has no bearing on who is allowed to block." },
        ],
      },
      {
        question: "What is the general rule about the space directly under the net, between the two courts?",
        answers: [
          { text: "Players may pass through it during play, as long as they don't interfere with the opponent or fully cross onto their side", correct: true, explanation: "Correct — the centerline rule allows movement but limits full crossing." },
          { text: "It is completely off-limits to all players at all times", correct: false, explanation: "Players are allowed to move through this space under the right conditions." },
          { text: "Only the setter may enter this space", correct: false, explanation: "This space isn't restricted to any single position." },
          { text: "It only matters during a serve", correct: false, explanation: "The centerline rule applies throughout the rally, not only during serving." },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Front Row and Back Row",
    summary: "The two groups of three players and what each is allowed to do.",
    durationMin: 7,
    theory: [
      "At any moment, a team's six players are split into two groups of three: the front row (zones 2, 3, and 4, nearest the net) and the back row (zones 1, 6, and 5, further from the net).",
      "Front-row players may block and attack the ball from anywhere, including right at the net. Back-row players are not allowed to block at all, and may only attack the ball above net height if they jump from behind the attack (3 m) line.",
      "If a back-row player takes off in front of the attack line and hits the ball above net height into the opponent's court, this is a fault known as a back-row attack violation.",
      "Player positions rotate clockwise through the six zones each time a team wins the serve back from the opponent, which is what moves players between the front row and the back row over the course of a set.",
      "This split is also why teams build different players for different roles: a team's tallest, best-blocking players are usually positioned to make the most of their front-row turns, while quicker, defense-focused players are relied on more heavily during their back-row rotations. You'll look at these specific roles in detail in the next chapter.",
    ],
    keyTakeaway: "Front-row players (zones 2, 3, 4) may block and attack anywhere; back-row players (zones 1, 6, 5) can't block and may only attack above the net if they jump from behind the 3 m attack line.",
    showAnimation: false,
    isTest: false,
    quiz: [
      {
        question: "Which zones make up the front row?",
        answers: [
          { text: "Zones 2, 3, and 4", correct: true, explanation: "Correct — these three zones are closest to the net." },
          { text: "Zones 1, 5, and 6", correct: false, explanation: "These make up the back row instead." },
          { text: "Zones 1, 2, and 3", correct: false, explanation: "This mixes a back-row zone (1) with front-row zones." },
          { text: "Zones 4, 5, and 6", correct: false, explanation: "This mixes a front-row zone (4) with back-row zones." },
        ],
      },
      {
        question: "Can back-row players block at the net?",
        answers: [
          { text: "No, blocking is restricted to front-row players", correct: true, explanation: "Correct — back-row players are never allowed to block." },
          { text: "Yes, as long as they jump from behind the attack line", correct: false, explanation: "The attack-line exception applies to attacking, not to blocking, which back-row players may never do." },
          { text: "Yes, but only against a serve", correct: false, explanation: "Blocking a serve isn't a recognized action at all, and back-row players still can't block." },
          { text: "Yes, if the setter allows it", correct: false, explanation: "This isn't determined by another player — it's a positional rule." },
        ],
      },
      {
        question: "Under what condition can a back-row player legally attack the ball above net height?",
        answers: [
          { text: "If they jump from behind the attack (3 m) line", correct: true, explanation: "Correct — taking off from behind the line makes the attack legal." },
          { text: "If the ball is below net height when contacted", correct: false, explanation: "A ball played below net height isn't restricted by this rule at all — the rule specifically concerns above-net-height contact." },
          { text: "Only if they are the team captain", correct: false, explanation: "Team leadership role has no bearing on this rule." },
          { text: "Never, back-row players can never attack the ball above net height", correct: false, explanation: "They can, but only when taking off from behind the attack line." },
        ],
      },
      {
        question: "What is a 'back-row attack violation'?",
        answers: [
          { text: "A back-row player taking off in front of the attack line and hitting the ball above net height into the opponent's court", correct: true, explanation: "Correct — this breaks the back-row attacking restriction." },
          { text: "A back-row player serving the ball", correct: false, explanation: "Serving is a normal action for any player, including back-row players." },
          { text: "A back-row player passing the first contact", correct: false, explanation: "Passing (digging) is a completely normal back-row action." },
          { text: "A front-row player blocking at the net", correct: false, explanation: "Front-row players are allowed to block — that's not a violation." },
        ],
      },
      {
        question: "What allows front-row players to attack the ball anywhere, including right at the net?",
        answers: [
          { text: "Their position in zones 2, 3, or 4 carries no attack-line restriction", correct: true, explanation: "Correct — the attack-line rule only restricts back-row players." },
          { text: "They are always taller than back-row players", correct: false, explanation: "Height isn't what defines this rule — court position (row) is." },
          { text: "They are given extra contacts", correct: false, explanation: "The three-contact rule applies to the whole team, not by row." },
          { text: "They wear a different colored jersey", correct: false, explanation: "Jersey color (like the libero's) marks a role, not this specific rule." },
        ],
      },
      {
        question: "What causes players to move between the front row and the back row during a set?",
        answers: [
          { text: "Rotating clockwise through the zones each time their team wins back the serve", correct: true, explanation: "Correct — rotation is what shifts players between rows over time." },
          { text: "The coach manually reassigning positions every rally", correct: false, explanation: "Rotation follows a fixed clockwise order, not coach reassignment rally by rally." },
          { text: "Players switching rows whenever they want", correct: false, explanation: "Row assignment follows the rotation order, not free choice." },
          { text: "Scoring a certain number of points", correct: false, explanation: "Rotation is tied to winning the serve, not to a points total." },
        ],
      },
      {
        question: "If a back-row player jumps from inside the attack line and hits the ball above the net, what is the result?",
        answers: [
          { text: "A fault (back-row attack violation), and the rally goes to the other team", correct: true, explanation: "Correct — taking off in front of the line makes this attack illegal." },
          { text: "A legal attack, since any player may hit the ball", correct: false, explanation: "The take-off position specifically makes this illegal for a back-row player." },
          { text: "A warning only, with play continuing", correct: false, explanation: "This is called immediately as a fault, not just a warning." },
          { text: "It's only a fault if the attack scores a point", correct: false, explanation: "The violation is in the action itself, regardless of the outcome." },
        ],
      },
      {
        question: "Which zones make up the back row?",
        answers: [
          { text: "Zones 1, 6, and 5", correct: true, explanation: "Correct — these three zones are furthest from the net." },
          { text: "Zones 2, 3, and 4", correct: false, explanation: "These make up the front row instead." },
          { text: "Zones 1, 2, and 6", correct: false, explanation: "This mixes a front-row zone (2) with back-row zones." },
          { text: "Zones 3, 4, and 5", correct: false, explanation: "This mixes a front-row zone (3, 4) with a back-row zone (5)." },
        ],
      },
      {
        question: "Can a back-row player attack the ball if it's below net height when they contact it?",
        answers: [
          { text: "Yes, the attack-line restriction only applies to contact above net height", correct: true, explanation: "Correct — a below-net-height hit isn't restricted by this rule." },
          { text: "No, back-row players can never hit the ball offensively", correct: false, explanation: "They can, both below net height anywhere, and above net height if jumping from behind the line." },
          { text: "Only if a front-row player touches it first", correct: false, explanation: "There's no such requirement for a below-net-height back-row hit." },
          { text: "Only during a deciding set", correct: false, explanation: "This rule is the same in every set of the match." },
        ],
      },
      {
        question: "Why does volleyball separate players into front-row and back-row roles?",
        answers: [
          { text: "To balance offense and defense by limiting what players further from the net may do at the net", correct: true, explanation: "Correct — it keeps blocking and close-range attacking to those positioned at the net." },
          { text: "To make substitutions easier to track", correct: false, explanation: "This distinction is about legal actions during play, not substitution bookkeeping." },
          { text: "To decide who serves each rally", correct: false, explanation: "Serve order follows the rotation position, not the front/back-row distinction directly." },
          { text: "To determine which team wins ties", correct: false, explanation: "This has no connection to how ties or sets are decided." },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "First Volleyball Knowledge Check",
    summary: "A mixed review pulling together everything covered so far in Chapter 1.",
    durationMin: 8,
    theory: [
      "You've now covered the fundamentals: the court and its zones, how a rally works, how sets and matches are scored, the basics of serving, the three-contact rule, in/out calls, net and centerline rules, and the front-row/back-row split.",
      "This lesson mixes questions from all of those topics together, the way they'd come up in a real match, to check that the pieces are starting to connect rather than staying separate facts.",
      "Notice how each topic depends on the ones before it: you can't fully understand the three-contact rule without knowing what a rally is, and you can't understand a back-row attack violation without knowing the zones. Chapter 2 builds directly on this foundation by looking at what each of the six on-court positions is actually responsible for.",
    ],
    keyTakeaway: "The basics of volleyball fit together as one system: court layout shapes the zones, zones shape the rules for rows, and all of it plays out inside the structure of a rally and the scoring system.",
    showAnimation: false,
    isTest: false,
    quiz: [
      {
        question: "How many players from each team are on the court at once?",
        answers: [
          { text: "Six", correct: true, explanation: "Correct — three front-row and three back-row players." },
          { text: "Five", correct: false, explanation: "Volleyball is played with more than five players per side." },
          { text: "Seven", correct: false, explanation: "Six is the standard number, not seven." },
          { text: "Four", correct: false, explanation: "Four is too few — six players make up a full side." },
        ],
      },
      {
        question: "What scoring system awards a point on every rally, regardless of who served?",
        answers: [
          { text: "Rally-point scoring", correct: true, explanation: "Correct — this is the scoring system used in modern volleyball." },
          { text: "Side-out scoring", correct: false, explanation: "Side-out scoring only awarded points to the serving team, and isn't used today." },
          { text: "Golden-point scoring", correct: false, explanation: "This isn't the system volleyball sets are decided by." },
          { text: "Advantage-only scoring", correct: false, explanation: "This isn't a recognized volleyball scoring format." },
        ],
      },
      {
        question: "What is the maximum number of contacts a team can use to return the ball, not counting a block touch?",
        answers: [
          { text: "Three", correct: true, explanation: "Correct — the three-contact rule." },
          { text: "Two", correct: false, explanation: "Teams are allowed one more than this." },
          { text: "Five", correct: false, explanation: "This is far more than the actual limit." },
          { text: "Unlimited", correct: false, explanation: "There is a fixed limit of three." },
        ],
      },
      {
        question: "Where must a serve be hit from?",
        answers: [
          { text: "Behind the end line, in the service zone", correct: true, explanation: "Correct — this is the only legal serving position." },
          { text: "Anywhere inside the court", correct: false, explanation: "Serving from inside the court is not allowed." },
          { text: "On the attack line", correct: false, explanation: "The attack line is well inside the court." },
          { text: "Beside the net", correct: false, explanation: "This is the opposite end of the court from where serves are hit." },
        ],
      },
      {
        question: "If the score in a regular set reaches 24-24, what is required to win?",
        answers: [
          { text: "A 2-point lead", correct: true, explanation: "Correct — play continues until one team is ahead by 2." },
          { text: "The very next point", correct: false, explanation: "A single point isn't enough — a 2-point lead is required." },
          { text: "The next two points, even if split between teams", correct: false, explanation: "It must be a genuine 2-point lead, not just any two points played." },
          { text: "Nothing extra — the set ends in a tie", correct: false, explanation: "Volleyball sets are never allowed to end tied." },
        ],
      },
      {
        question: "Which players are not allowed to block at the net?",
        answers: [
          { text: "Back-row players", correct: true, explanation: "Correct — only front-row players may block." },
          { text: "Front-row players", correct: false, explanation: "Front-row players are specifically the ones allowed to block." },
          { text: "The server", correct: false, explanation: "Serving doesn't determine blocking eligibility — court row does." },
          { text: "No one — all players may block", correct: false, explanation: "Back-row players are restricted from blocking." },
        ],
      },
      {
        question: "What happens if a ball touches a sideline as it lands?",
        answers: [
          { text: "It's ruled 'in'", correct: true, explanation: "Correct — boundary lines are part of the court." },
          { text: "It's ruled 'out'", correct: false, explanation: "Touching the line counts as landing inside the court." },
          { text: "It's replayed", correct: false, explanation: "A line touch has a clear in/out ruling, with no need for a replay." },
          { text: "It depends on which team is serving", correct: false, explanation: "The serving team has no bearing on this ruling." },
        ],
      },
      {
        question: "How far is the attack line from the net?",
        answers: [
          { text: "3 metres", correct: true, explanation: "Correct — this line separates the front and back zones." },
          { text: "1 metre", correct: false, explanation: "That's too close to divide the zones meaningfully." },
          { text: "9 metres", correct: false, explanation: "That distance would reach the end line instead." },
          { text: "5 metres", correct: false, explanation: "This is further than the official distance." },
        ],
      },
      {
        question: "How many sets does a team need to win a standard best-of-five match?",
        answers: [
          { text: "3", correct: true, explanation: "Correct — the first team to 3 set wins takes the match." },
          { text: "5", correct: false, explanation: "A team doesn't need to win every set, just 3." },
          { text: "2", correct: false, explanation: "2 set wins isn't enough to clinch a best-of-five match." },
          { text: "4", correct: false, explanation: "The match ends once a team reaches 3 wins, before a 4th is needed." },
        ],
      },
      {
        question: "What is a fault that happens when a player fully crosses the centerline and touches the opponent's floor called?",
        answers: [
          { text: "A centerline violation", correct: true, explanation: "Correct — this describes exactly that rule." },
          { text: "A foot fault", correct: false, explanation: "A foot fault is specifically a serving-position violation, not a centerline crossing." },
          { text: "A back-row attack violation", correct: false, explanation: "That fault involves an illegal above-net attack by a back-row player, not the centerline." },
          { text: "A double contact", correct: false, explanation: "That fault involves the same player hitting the ball twice in a row." },
        ],
      },
    ],
  },
];

const CHAPTER_1_TEST = {
  id: 11,
  title: "Chapter 1 Test",
  summary: "A 20-question test covering everything from Volleyball Basics.",
  durationMin: 15,
  theory: null,
  keyTakeaway: null,
  showAnimation: false,
  isTest: true,
  quiz: [
    {
      question: "What are the dimensions of a standard indoor volleyball court?",
      answers: [
        { text: "18 m by 9 m", correct: true, explanation: "Correct — the full court is twice as long as it is wide." },
        { text: "12 m by 6 m", correct: false, explanation: "Too small for a regulation court." },
        { text: "20 m by 10 m", correct: false, explanation: "Too large for a regulation court." },
        { text: "9 m by 9 m", correct: false, explanation: "That's the size of one team's half, not the full court." },
      ],
    },
    {
      question: "How far is the attack line from the net?",
      answers: [
        { text: "3 metres", correct: true, explanation: "Correct — it marks the edge of the front zone." },
        { text: "1 metre", correct: false, explanation: "Too close to divide the zones meaningfully." },
        { text: "4.5 metres", correct: false, explanation: "That's halfway across a team's half, further than the attack line." },
        { text: "9 metres", correct: false, explanation: "That would reach the end line instead." },
      ],
    },
    {
      question: "How many numbered zones are on each side of the court?",
      answers: [
        { text: "Six", correct: true, explanation: "Correct — three front-row and three back-row zones." },
        { text: "Four", correct: false, explanation: "There are more than four zones per side." },
        { text: "Eight", correct: false, explanation: "There are fewer than eight zones per side." },
        { text: "Two", correct: false, explanation: "Two would only cover front and back, not the full zone count." },
      ],
    },
    {
      question: "Which zone does a player serve from?",
      answers: [
        { text: "Zone 1", correct: true, explanation: "Correct — the right-back zone is the serving position." },
        { text: "Zone 6", correct: false, explanation: "Zone 6 is the back-middle zone." },
        { text: "Zone 4", correct: false, explanation: "Zone 4 is a front-row zone." },
        { text: "Zone 2", correct: false, explanation: "Zone 2 is a front-row zone." },
      ],
    },
    {
      question: "When does a volleyball rally begin?",
      answers: [
        { text: "The moment the ball is served", correct: true, explanation: "Correct — every rally starts with a serve." },
        { text: "When the ball first crosses the net", correct: false, explanation: "The serve itself starts the rally, before it crosses the net." },
        { text: "When a team wins the point", correct: false, explanation: "That's the end of the rally, not its start." },
        { text: "When the referee raises a flag", correct: false, explanation: "The whistle and flags confirm calls, but the serve is what starts play." },
      ],
    },
    {
      question: "Under rally-point scoring, which team scores when a rally ends?",
      answers: [
        { text: "Whichever team wins the rally, regardless of who served", correct: true, explanation: "Correct — this is the core feature of rally-point scoring." },
        { text: "Only the serving team, if it wins", correct: false, explanation: "That describes the older side-out scoring system, not the modern one." },
        { text: "Both teams", correct: false, explanation: "Only the winning team scores a point per rally." },
        { text: "Neither team until the set ends", correct: false, explanation: "Points are awarded rally by rally, not saved for later." },
      ],
    },
    {
      question: "How many points are needed to win a regular (non-deciding) set, with the required lead?",
      answers: [
        { text: "25 points, winning by at least 2", correct: true, explanation: "Correct — this is the standard target for sets 1 through 4." },
        { text: "15 points, winning by at least 2", correct: false, explanation: "15 is the deciding (5th) set's target, not a regular set's." },
        { text: "21 points, no lead required", correct: false, explanation: "Volleyball always requires a 2-point lead to win a set." },
        { text: "25 points, no lead required", correct: false, explanation: "A 2-point lead is required, even after reaching 25." },
      ],
    },
    {
      question: "How many points does a deciding 5th set go to?",
      answers: [
        { text: "15, winning by at least 2", correct: true, explanation: "Correct — the decider uses a shorter target than the other sets." },
        { text: "25, winning by at least 2", correct: false, explanation: "25 is the target for the first four sets." },
        { text: "10, no lead required", correct: false, explanation: "10 is too low, and a lead is still required." },
        { text: "20, winning by at least 2", correct: false, explanation: "20 isn't the standard deciding-set target." },
      ],
    },
    {
      question: "How many sets are needed to win a standard best-of-five match?",
      answers: [
        { text: "3", correct: true, explanation: "Correct — the first team to 3 set wins takes the match." },
        { text: "4", correct: false, explanation: "A match ends as soon as a team reaches 3 wins." },
        { text: "5", correct: false, explanation: "Winning every set isn't required — only 3 wins are." },
        { text: "2", correct: false, explanation: "2 wins alone isn't enough in a best-of-five format." },
      ],
    },
    {
      question: "Where must a player stand to legally serve the ball?",
      answers: [
        { text: "Behind the end line, within the service zone", correct: true, explanation: "Correct — this is the only legal serving position." },
        { text: "Anywhere inside the court", correct: false, explanation: "Serving from inside the court isn't allowed." },
        { text: "On the attack line", correct: false, explanation: "The attack line is well inside the court." },
        { text: "Beside the net", correct: false, explanation: "This is the far end of the court from the serving zone." },
      ],
    },
    {
      question: "What is a 'foot fault' on a serve?",
      answers: [
        { text: "Stepping on or over the end line before contacting the ball", correct: true, explanation: "Correct — feet must stay behind the line until contact is made." },
        { text: "Missing the serve entirely", correct: false, explanation: "A missed serve is simply an out serve, not specifically a foot fault." },
        { text: "Serving without proper footwear", correct: false, explanation: "Footwear isn't what defines a foot fault." },
        { text: "Kicking the ball on serve", correct: false, explanation: "Foot faults are about serving position, not how the ball is contacted." },
      ],
    },
    {
      question: "What is the maximum number of contacts a team may use to return the ball, not counting a block touch?",
      answers: [
        { text: "Three", correct: true, explanation: "Correct — the classic three-contact rule." },
        { text: "Two", correct: false, explanation: "Teams are allowed one more than this." },
        { text: "Four", correct: false, explanation: "Four (excluding a block touch) is one too many." },
        { text: "Five", correct: false, explanation: "Five is far more than the actual limit." },
      ],
    },
    {
      question: "Does a block touch count toward a team's three-contact limit?",
      answers: [
        { text: "No, a block touch is not counted", correct: true, explanation: "Correct — the team can still use three full contacts after a block." },
        { text: "Yes, it always counts as the first contact", correct: false, explanation: "A block touch is specifically excluded from the count." },
        { text: "Yes, it counts as the last of the three", correct: false, explanation: "It isn't counted at all, not as the first or the last." },
        { text: "Only if the block is successful", correct: false, explanation: "The exception applies regardless of whether the block stops the ball." },
      ],
    },
    {
      question: "Can the same player hit the ball twice in a row during a rally?",
      answers: [
        { text: "No, except right after a blocking attempt", correct: true, explanation: "Correct — this is the one recognized exception." },
        { text: "Yes, at any point in a rally", correct: false, explanation: "Two consecutive touches by one player is generally a fault." },
        { text: "Yes, but only on the final contact", correct: false, explanation: "There's no such exception for the final contact." },
        { text: "No, under no circumstances", correct: false, explanation: "There is one exception — immediately following a block touch." },
      ],
    },
    {
      question: "If a ball touches a boundary line as it lands, is it 'in' or 'out'?",
      answers: [
        { text: "In — the lines are part of the court", correct: true, explanation: "Correct — any contact with a boundary line counts as in bounds." },
        { text: "Out — only the space between the lines counts", correct: false, explanation: "The lines themselves are included as part of the court." },
        { text: "It depends on which line", correct: false, explanation: "All boundary lines are treated the same way." },
        { text: "It's automatically replayed", correct: false, explanation: "A line touch is a clear ruling, needing no replay." },
      ],
    },
    {
      question: "What is the purpose of the antennas on the net?",
      answers: [
        { text: "To mark the outer limits the ball must pass between when crossing the net", correct: true, explanation: "Correct — they extend the sideline boundary above the net." },
        { text: "To hold the net at the correct height", correct: false, explanation: "The net posts hold the net's height, not the antennas." },
        { text: "To signal timeouts", correct: false, explanation: "Timeouts are signaled by officials, not the antennas." },
        { text: "To mark the service zone", correct: false, explanation: "The service zone is marked by the end line and its extensions, not the antennas." },
      ],
    },
    {
      question: "Is it legal for a player to touch the net during play?",
      answers: [
        { text: "No, touching the net is a fault", correct: true, explanation: "Correct — net contact by a player during play is not allowed." },
        { text: "Yes, once per rally", correct: false, explanation: "There's no 'one free touch' rule for the net." },
        { text: "Yes, always", correct: false, explanation: "Basic net-touch rules treat this as a fault." },
        { text: "Only front-row players may touch it", correct: false, explanation: "This restriction applies to every player." },
      ],
    },
    {
      question: "What happens if a player's foot fully crosses the centerline and touches the opponent's floor?",
      answers: [
        { text: "It's a fault (centerline violation)", correct: true, explanation: "Correct — a full crossing with contact on the opponent's side breaks the rule." },
        { text: "It's legal, since crossing is always allowed", correct: false, explanation: "Only partial crossing, with part of the foot still on the line, is legal." },
        { text: "It's only a fault during a block", correct: false, explanation: "This rule applies throughout play, not just while blocking." },
        { text: "It's a fault only in the deciding set", correct: false, explanation: "The rule applies in every set." },
      ],
    },
    {
      question: "Which players are allowed to block at the net?",
      answers: [
        { text: "Front-row players only", correct: true, explanation: "Correct — back-row players may never block." },
        { text: "Any player on the court", correct: false, explanation: "Back-row players are specifically restricted from blocking." },
        { text: "Only the setter", correct: false, explanation: "Blocking eligibility depends on row, not on playing a specific role." },
        { text: "Only the server", correct: false, explanation: "Who served has no bearing on who may block." },
      ],
    },
    {
      question: "Under what condition can a back-row player legally attack the ball above net height?",
      answers: [
        { text: "If they jump from behind the attack (3 m) line", correct: true, explanation: "Correct — taking off from behind the line makes the attack legal." },
        { text: "If a teammate assists the jump", correct: false, explanation: "Assisted jumps aren't part of this rule — take-off position is what matters." },
        { text: "Never, under any circumstances", correct: false, explanation: "They can, as long as they take off from behind the attack line." },
        { text: "Only if the ball is served, not rallied", correct: false, explanation: "This rule applies to attacking generally, not tied to serve-only situations." },
      ],
    },
  ],
};

/* ---------------------------------------------------------------------- */
/* Chapter 2 — Player Positions and Roles (real content)                  */
/* ---------------------------------------------------------------------- */

const CHAPTER_2_LESSONS = [
  {
    id: 1,
    title: "Outside Hitter",
    summary: "The primary left-side attacker, and usually the most-used hitter on the team.",
    durationMin: 8,
    theory: [
      "The Outside Hitter (OH) attacks mainly from Zone 4, on the left side of the net from the server's perspective. Because Zone 4 sets are simple and reliable to deliver, the OH usually ends up handling the largest share of a team's attacks.",
      "The OH isn't only an attacker. When their rotation places them in the back row, they take on serve-receive and digging duties too, so the position demands both offensive power and solid defensive fundamentals.",
      "Most teams carry two outside hitters, positioned opposite each other in the rotation. That way, one of them is always in the front row and available to attack near Zone 4, no matter how the team has rotated.",
      "Outside hitters are especially valuable on broken plays — when the first pass isn't clean, a simpler, more reliable set to the OH is often the safest way to keep the attack dangerous.",
    ],
    keyTakeaway: "The Outside Hitter attacks mainly from Zone 4, carries a large share of a team's offense, and also passes and digs when rotated to the back row.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The Outside Hitter (OH), lined up in Zone 4, attacks a set delivered from the setter near the net, approaching and jumping close to the left antenna.",
      activeZones: [4],
      labels: { 4: "OH" },
      motions: { 4: { dx: 0, dy: -16 } },
      ball: { from: { x: 50, y: 24 }, to: { x: 18, y: 8 } },
    },
    quiz: [
      {
        question: "Which zone does the Outside Hitter primarily attack from?",
        answers: [
          { text: "Zone 4", correct: true, explanation: "Correct — Zone 4 is the standard outside-attack position on the left side." },
          { text: "Zone 1", correct: false, explanation: "Zone 1 is the back-right serving zone, not the OH's attacking spot." },
          { text: "Zone 2", correct: false, explanation: "Zone 2 is the right-side attacking zone, typically the Opposite Hitter's spot." },
          { text: "Zone 3", correct: false, explanation: "Zone 3 is the middle front zone, usually the Middle Blocker's attacking area." },
        ],
      },
      {
        question: "Besides attacking, what does an Outside Hitter typically also do?",
        answers: [
          { text: "Pass serves and dig when rotated to the back row", correct: true, explanation: "Correct — the OH plays both ends of the court depending on rotation." },
          { text: "Only serve, never attack", correct: false, explanation: "Attacking is actually the OH's main job, not just serving." },
          { text: "Referee the match", correct: false, explanation: "Refereeing is done by officials, not players." },
          { text: "Only block the opposing setter", correct: false, explanation: "Blocking targets attackers generally, not specifically the setter." },
        ],
      },
      {
        question: "Why do most teams use two outside hitters?",
        answers: [
          { text: "So one of them is always in the front row to attack from Zone 4", correct: true, explanation: "Correct — positioning them opposite each other guarantees front-row coverage." },
          { text: "Because the rules require exactly two outside hitters", correct: false, explanation: "There's no rule fixing the number of outside hitters — it's a tactical choice." },
          { text: "So they can substitute for the libero", correct: false, explanation: "Libero substitutions follow separate rules unrelated to outside-hitter pairing." },
          { text: "Because outside hitters are not allowed in the back row", correct: false, explanation: "Outside hitters do play the back row during their rotation." },
        ],
      },
      {
        question: "Near which part of the net does the Outside Hitter usually attack?",
        answers: [
          { text: "Near the left antenna, on the Zone 4 side", correct: true, explanation: "Correct — this matches the Zone 4 attacking position." },
          { text: "Near the right antenna", correct: false, explanation: "That side is typically the Opposite Hitter's attacking area." },
          { text: "Directly behind the setter", correct: false, explanation: "The OH attacks from the net, not from behind a teammate." },
          { text: "Only from the back row, never near the net", correct: false, explanation: "The OH's main attacks happen at the net in the front row." },
        ],
      },
      {
        question: "How much of a team's offense does the Outside Hitter typically handle?",
        answers: [
          { text: "A large share — often the most-used attacker on the team", correct: true, explanation: "Correct — reliable Zone 4 sets make the OH a frequent target." },
          { text: "None — outside hitters only play defense", correct: false, explanation: "Attacking is a core part of the OH's role." },
          { text: "Exactly half, always split evenly with every teammate", correct: false, explanation: "There's no rule enforcing an even split of attacks." },
          { text: "Only on serves, never during a rally", correct: false, explanation: "The OH attacks during rallies, not just on serve." },
        ],
      },
      {
        question: "What is a 'broken play', in the context of why the OH is used so often?",
        answers: [
          { text: "A rally where the first pass isn't clean, forcing a simpler, safer set", correct: true, explanation: "Correct — this is exactly when a reliable Zone 4 set becomes valuable." },
          { text: "A rule violation that ends the rally immediately", correct: false, explanation: "That would just be a fault, not a 'broken play'." },
          { text: "A rotation order mistake", correct: false, explanation: "A rotation mistake is a different, separate issue from a messy first pass." },
          { text: "A serve that clips the net", correct: false, explanation: "That's a let serve situation, unrelated to broken-play offense." },
        ],
      },
      {
        question: "Can an Outside Hitter play in the back row?",
        answers: [
          { text: "Yes, whenever their rotation places them there", correct: true, explanation: "Correct — like every player, the OH rotates through both rows." },
          { text: "No, outside hitters only ever play the front row", correct: false, explanation: "Outside hitters rotate through the back row just like everyone else." },
          { text: "Only if they are also the team's libero", correct: false, explanation: "Being an OH and being the libero are separate, unrelated roles." },
          { text: "Only during a timeout", correct: false, explanation: "Court position is about rotation, not about timeouts." },
        ],
      },
      {
        question: "What two skills must an Outside Hitter combine most?",
        answers: [
          { text: "Attacking and back-row defense/passing", correct: true, explanation: "Correct — the position demands strength on both sides of the ball." },
          { text: "Only jumping height, nothing else", correct: false, explanation: "Jumping helps, but passing and defense matter just as much." },
          { text: "Only serve speed", correct: false, explanation: "Serving is only one small part of the OH's overall job." },
          { text: "Only rules knowledge", correct: false, explanation: "Rules knowledge matters for everyone, but isn't the OH's defining skill." },
        ],
      },
      {
        question: "If a team's first pass is poor, who often still gets a big share of the sets?",
        answers: [
          { text: "The Outside Hitter", correct: true, explanation: "Correct — a simple, reliable Zone 4 set is the classic fallback option." },
          { text: "The opposing team", correct: false, explanation: "Sets go to a teammate, never to the opposing team." },
          { text: "The line judge", correct: false, explanation: "Line judges are officials, not part of the attacking play." },
          { text: "Whoever served last", correct: false, explanation: "Who served has no bearing on who receives the set." },
        ],
      },
      {
        question: "Why is the Outside Hitter position considered demanding?",
        answers: [
          { text: "They attack constantly and also handle serve-receive and defense", correct: true, explanation: "Correct — few positions combine offense and defense so heavily." },
          { text: "They never leave the court for the entire match", correct: false, explanation: "Substitution rules apply to every position, including the OH." },
          { text: "They must always serve underhand", correct: false, explanation: "There's no such serving restriction on outside hitters." },
          { text: "They control the scoreboard during play", correct: false, explanation: "Scorekeeping is handled by the scorer's table, not the OH." },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Opposite Hitter",
    summary: "The right-side attacker who lines up across the rotation from the setter.",
    durationMin: 8,
    theory: [
      "The Opposite Hitter (OP), sometimes called the right-side hitter, attacks mainly from Zone 2. Their name comes from where they sit in the rotation: directly opposite the setter, so when the setter is in the front row, the OP is in the back row, and vice versa.",
      "Because the OP is often in the back row exactly when the setter is up front, they become a key backup — if the setter has to dig or chase down a bad pass, the OP is frequently the one who steps in to set instead.",
      "When the OP is in the back row, they can still attack from behind the 3 m attack line, adding a second scoring option from deep. When they rotate to the front row, they attack from Zone 2 near the right antenna, and are usually the team's best blocker against the opponent's Outside Hitter.",
      "A strong opposite hitter lets a team attack from both sides of the court at once, which makes it much harder for the opposing blockers to focus on a single attacker.",
    ],
    keyTakeaway: "The Opposite Hitter attacks mainly from Zone 2, sits opposite the setter in the rotation, and often becomes the emergency setter or a back-row attacking threat.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The Opposite Hitter (OP), lined up in Zone 2, mirrors the Outside Hitter on the right side, attacking a set near the right antenna.",
      activeZones: [2],
      labels: { 2: "OP" },
      motions: { 2: { dx: 0, dy: -16 } },
      ball: { from: { x: 50, y: 24 }, to: { x: 82, y: 8 } },
    },
    quiz: [
      {
        question: "Which zone does the Opposite Hitter primarily attack from?",
        answers: [
          { text: "Zone 2", correct: true, explanation: "Correct — Zone 2 is the right-side attacking position." },
          { text: "Zone 4", correct: false, explanation: "Zone 4 is the left-side attacking position, usually the Outside Hitter's." },
          { text: "Zone 6", correct: false, explanation: "Zone 6 is the back-middle zone, not a front-row attacking spot." },
          { text: "Zone 5", correct: false, explanation: "Zone 5 is a back-row zone, not the OP's main attacking zone." },
        ],
      },
      {
        question: "Why is this position called the 'Opposite' Hitter?",
        answers: [
          { text: "Because they line up opposite the setter in the rotation order", correct: true, explanation: "Correct — that's exactly where the name comes from." },
          { text: "Because they refuse to follow team strategy", correct: false, explanation: "The name refers to rotation position, not attitude." },
          { text: "Because they only play on away courts", correct: false, explanation: "Home and away courts have nothing to do with the name." },
          { text: "Because they attack with their non-dominant hand", correct: false, explanation: "Hand dominance isn't related to this position's name." },
        ],
      },
      {
        question: "When the setter is in the front row, where is the Opposite Hitter?",
        answers: [
          { text: "In the back row", correct: true, explanation: "Correct — because they sit opposite the setter in the rotation." },
          { text: "Also in the front row, right beside the setter", correct: false, explanation: "Being 'opposite' in the rotation means they're on the other side, in the back row." },
          { text: "Off the court entirely", correct: false, explanation: "Being on the back row doesn't mean being off the court." },
          { text: "Serving from Zone 1 no matter what", correct: false, explanation: "Their back-row zone depends on the specific rotation, not fixed to Zone 1." },
        ],
      },
      {
        question: "What often happens if the setter has to dig a hard-driven ball?",
        answers: [
          { text: "The Opposite Hitter frequently steps in to set instead", correct: true, explanation: "Correct — the OP is the most common emergency setter." },
          { text: "The rally is automatically replayed", correct: false, explanation: "There's no replay rule for this situation — play continues normally." },
          { text: "The team automatically loses the point", correct: false, explanation: "Losing the point isn't automatic just because the setter had to dig." },
          { text: "The libero is required to set instead", correct: false, explanation: "There's no rule requiring the libero specifically to set in this case." },
        ],
      },
      {
        question: "Can the Opposite Hitter attack from the back row?",
        answers: [
          { text: "Yes, from behind the 3 m attack line", correct: true, explanation: "Correct — like any back-row player, they can attack above net height only from behind that line." },
          { text: "No, opposites can never attack from the back row", correct: false, explanation: "Back-row attacks from behind the attack line are legal for any player, including the OP." },
          { text: "Only if the setter gives permission", correct: false, explanation: "This isn't decided by another player — it's simply a positional rule." },
          { text: "Only during the deciding set", correct: false, explanation: "This rule is the same in every set of the match." },
        ],
      },
      {
        question: "What is a common secondary responsibility for a front-row Opposite Hitter?",
        answers: [
          { text: "Blocking against the opponent's Outside Hitter", correct: true, explanation: "Correct — the OP is typically a team's strongest blocker on that side." },
          { text: "Serving underhand only", correct: false, explanation: "There's no such serving restriction placed on the OP." },
          { text: "Standing out of bounds during rallies", correct: false, explanation: "Players stay within the court and free zone during play, not deliberately out of bounds." },
          { text: "Calling every serve for the team", correct: false, explanation: "Serve order follows the rotation, not a single player's calls." },
        ],
      },
      {
        question: "Why does having a strong Opposite Hitter help a team's offense?",
        answers: [
          { text: "It lets the team attack from both sides of the court at once", correct: true, explanation: "Correct — this spreads out the opposing block." },
          { text: "It lets the team skip using a setter", correct: false, explanation: "A setter is still needed regardless of how strong the OP is." },
          { text: "It allows an extra serve each rotation", correct: false, explanation: "Serve order doesn't change based on player strength." },
          { text: "It removes the need for a libero", correct: false, explanation: "The libero's role is unrelated to how strong the opposite hitter is." },
        ],
      },
      {
        question: "Which of these is closest to the Opposite Hitter's attacking zone?",
        answers: [
          { text: "The right antenna", correct: true, explanation: "Correct — Zone 2 sits on the right side, near the right antenna." },
          { text: "The left antenna", correct: false, explanation: "That's closer to Zone 4, the Outside Hitter's attacking area." },
          { text: "The centerline directly under the net", correct: false, explanation: "That's closer to Zone 3, the Middle Blocker's attacking area." },
          { text: "The service zone", correct: false, explanation: "The service zone is behind the end line, not near the net." },
        ],
      },
      {
        question: "What rotation relationship defines the Opposite Hitter?",
        answers: [
          { text: "Being positioned opposite the setter at all times", correct: true, explanation: "Correct — this fixed relationship is the definition of the role." },
          { text: "Always serving first in every set", correct: false, explanation: "Serve order depends on the starting rotation, not fixed to one role." },
          { text: "Never touching the ball twice in a match", correct: false, explanation: "That would make the position unplayable — this isn't a real restriction." },
          { text: "Switching positions with the libero every rotation", correct: false, explanation: "The OP and libero are separate, independent roles." },
        ],
      },
      {
        question: "What makes the Opposite Hitter valuable on defense as well as offense?",
        answers: [
          { text: "They're often the team's best blocker against the opponent's main attacker", correct: true, explanation: "Correct — strong front-row blocking is a key part of the role." },
          { text: "They referee close calls near the net", correct: false, explanation: "Officiating is handled by referees, not players." },
          { text: "They are exempt from all back-row rules", correct: false, explanation: "The OP follows the same back-row rules as every other player." },
          { text: "They always sub out for the libero", correct: false, explanation: "There's no rule requiring this substitution pattern." },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Libero",
    summary: "A dedicated defensive specialist with special substitution rules and a different jersey.",
    durationMin: 8,
    theory: [
      "The Libero (L) is a defensive specialist who wears a different colored jersey from the rest of the team, making them easy to spot. Their entire job centers on passing serves and digging attacks — the two most important defensive skills in the game.",
      "The libero benefits from special substitution rules: they can swap in and out for back-row players without counting against the team's normal substitution limit, which is why teams can use them so freely throughout a set.",
      "In exchange for that flexibility, the libero faces real restrictions. They can never block, and they can never complete an attack hit on a ball that is entirely above the top of the net, no matter where they're standing on the court.",
      "Because they never rotate to the front row, the libero effectively replaces whichever back-row player would otherwise be the weakest passer or digger, strengthening the defense every single rotation.",
    ],
    keyTakeaway: "The Libero is a specialized back-row defender, identified by a different jersey, who can sub freely for back-row players but can never block or attack the ball above net height.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The Libero (L), in Zone 6, moves to dig a hard-driven serve arriving from the back corner and controls it into a clean pass.",
      activeZones: [6],
      labels: { 6: "L" },
      motions: { 6: { dx: -8, dy: -4 } },
      ball: { from: { x: 90, y: 100 }, to: { x: 42, y: 72 } },
    },
    quiz: [
      {
        question: "What visually identifies the Libero on court?",
        answers: [
          { text: "A different colored jersey from their teammates", correct: true, explanation: "Correct — this makes it easy for referees and spectators to spot the libero." },
          { text: "A number written on their forehead", correct: false, explanation: "Player numbers are on jerseys, not written on the body." },
          { text: "They are always the shortest player", correct: false, explanation: "Height isn't a rule-based identifier — the jersey color is." },
          { text: "A captain's armband", correct: false, explanation: "An armband identifies the team captain, not the libero." },
        ],
      },
      {
        question: "What are the libero's two main defensive jobs?",
        answers: [
          { text: "Passing serves and digging attacks", correct: true, explanation: "Correct — these are the core libero responsibilities." },
          { text: "Blocking and serving only", correct: false, explanation: "The libero cannot block at all, so this isn't right." },
          { text: "Setting and attacking", correct: false, explanation: "Attacking above net height is restricted for the libero." },
          { text: "Refereeing and scorekeeping", correct: false, explanation: "Those are jobs for match officials, not players." },
        ],
      },
      {
        question: "What special substitution benefit does the libero have?",
        answers: [
          { text: "They can sub for back-row players without using up normal substitutions", correct: true, explanation: "Correct — this is what makes libero substitutions so frequent." },
          { text: "They can substitute for any player, including front-row attackers, freely", correct: false, explanation: "The libero substitution rule specifically covers back-row players." },
          { text: "They never need to be substituted at all", correct: false, explanation: "Libero substitutions still happen — they're just not counted the same way." },
          { text: "They can play on both teams in the same match", correct: false, explanation: "A libero belongs to one team only, like every other player." },
        ],
      },
      {
        question: "Is the libero allowed to block?",
        answers: [
          { text: "No, never", correct: true, explanation: "Correct — blocking is completely off-limits for the libero." },
          { text: "Yes, at any time", correct: false, explanation: "Blocking is one of the libero's clearest restrictions." },
          { text: "Only against back-row attacks", correct: false, explanation: "Blocking targets front-row attacks in general, and the libero can't do it at all." },
          { text: "Only in the deciding set", correct: false, explanation: "This restriction applies in every set, not just the decider." },
        ],
      },
      {
        question: "Can the libero attack a ball that is entirely above the top of the net?",
        answers: [
          { text: "No, not from anywhere on the court", correct: true, explanation: "Correct — this restriction applies no matter where the libero is standing." },
          { text: "Yes, if they are in the front row", correct: false, explanation: "The libero never plays in the front row, and this attack is restricted regardless of position." },
          { text: "Yes, if they jump from behind the attack line", correct: false, explanation: "Unlike a normal back-row player, the libero cannot complete this specific attack at all." },
          { text: "Yes, but only on the third contact", correct: false, explanation: "Which contact number it is doesn't change this restriction." },
        ],
      },
      {
        question: "Does the libero ever rotate into the front row?",
        answers: [
          { text: "No, they stay in back-row substitution roles", correct: true, explanation: "Correct — the libero's entire role is built around back-row defense." },
          { text: "Yes, every rotation like any other player", correct: false, explanation: "The libero's substitution pattern specifically avoids front-row rotation." },
          { text: "Only if the team is losing", correct: false, explanation: "The score doesn't change how the libero rotates." },
          { text: "Only during a timeout", correct: false, explanation: "Timeouts don't affect the libero's rotation pattern." },
        ],
      },
      {
        question: "Why are libero substitutions so frequent during a set?",
        answers: [
          { text: "Because they don't count against the team's normal substitution limit", correct: true, explanation: "Correct — this is exactly what makes frequent libero swaps possible." },
          { text: "Because the libero gets tired faster than other players", correct: false, explanation: "Fatigue isn't the rule-based reason for frequent libero substitutions." },
          { text: "Because referees require it after every rally", correct: false, explanation: "There's no such requirement after every rally." },
          { text: "Because the libero must switch jerseys constantly", correct: false, explanation: "The jersey stays the same — it's the substitution rule that's special." },
        ],
      },
      {
        question: "What kind of player does the libero typically replace?",
        answers: [
          { text: "Whichever back-row player would otherwise be the weaker passer or digger", correct: true, explanation: "Correct — this is the whole point of the position." },
          { text: "The team's strongest attacker", correct: false, explanation: "The libero replaces back-row defenders, not front-row attackers." },
          { text: "The referee", correct: false, explanation: "The libero is a player position, unrelated to officiating." },
          { text: "The opposing team's server", correct: false, explanation: "Substitutions only affect a team's own lineup, not the opponent's." },
        ],
      },
      {
        question: "What is the main trade-off of being a libero?",
        answers: [
          { text: "Extra substitution flexibility in exchange for blocking and attacking restrictions", correct: true, explanation: "Correct — that trade-off defines the whole role." },
          { text: "A shorter serving distance in exchange for more points", correct: false, explanation: "There's no such serving-distance rule for liberos." },
          { text: "A bigger jersey number in exchange for fewer rotations", correct: false, explanation: "Jersey numbers don't affect rotation rules." },
          { text: "Permission to play on either team in exchange for less playing time", correct: false, explanation: "A libero, like any player, belongs to a single team." },
        ],
      },
      {
        question: "Which best summarizes the libero's role on the team?",
        answers: [
          { text: "A back-row defensive specialist who strengthens passing and digging every rotation", correct: true, explanation: "Correct — that's the core purpose of the position." },
          { text: "A front-row power attacker", correct: false, explanation: "Attacking above net height is restricted, and the libero doesn't play front row." },
          { text: "The team's primary blocker", correct: false, explanation: "Blocking is completely off-limits for the libero." },
          { text: "A backup referee", correct: false, explanation: "The libero is a player role, not an officiating role." },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Setter",
    summary: "The player who runs the offense and delivers the second contact to the hitters.",
    durationMin: 8,
    theory: [
      "The Setter (S) is usually the team's second contact on nearly every rally, taking the pass or dig from a teammate and placing the ball precisely for an attacker to hit. Good setting is less about power and more about consistency, footwork, and decision-making.",
      "Because the setter needs to reach the net quickly from wherever their rotation places them, they often cover a lot of ground during a rally — sprinting from a back-row serve-receive position all the way to the net to set.",
      "A team may run a '5-1' system, with a single setter on court at all times, or a '6-2' system, with two setters who alternate so there's always a front-row attacker available in the setter's place when they rotate back.",
      "Setters are also usually strong all-around players: many block and serve well too, since they still rotate through every zone like everyone else on the team.",
    ],
    keyTakeaway: "The Setter takes the second contact and delivers the ball to attackers, often sprinting from the back row to the net, and different offensive systems use one or two setters.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The Setter (S) starts in Zone 1 for serve-receive, then sprints to the net to set the ball that a teammate has passed.",
      activeZones: [1],
      labels: { 1: "S" },
      motions: { 1: { dx: -32, dy: -52 } },
      ball: { from: { x: 30, y: 85 }, to: { x: 50, y: 24 } },
    },
    quiz: [
      {
        question: "Which contact does the setter usually take during a rally?",
        answers: [
          { text: "The second contact", correct: true, explanation: "Correct — pass, set, attack is the classic order." },
          { text: "Always the first contact", correct: false, explanation: "The first contact is typically a pass or dig from another player." },
          { text: "Always the third contact", correct: false, explanation: "The third contact is usually the attack, not the set." },
          { text: "Only the serve", correct: false, explanation: "Serving is a separate action, not what defines the setter's main job." },
        ],
      },
      {
        question: "What matters most for good setting?",
        answers: [
          { text: "Consistency, footwork, and decision-making", correct: true, explanation: "Correct — precision matters far more than raw power." },
          { text: "Hitting the ball as hard as possible", correct: false, explanation: "Power is far less important for a set than accuracy and consistency." },
          { text: "Serving distance", correct: false, explanation: "Serving distance has nothing to do with setting quality." },
          { text: "Wearing a different colored jersey", correct: false, explanation: "That's a libero rule, unrelated to setting." },
        ],
      },
      {
        question: "Why does a setter often cover a lot of court during a rally?",
        answers: [
          { text: "They may need to sprint from a back-row position to the net to set", correct: true, explanation: "Correct — reaching the net quickly is a core part of the job." },
          { text: "They are required to touch every zone before setting", correct: false, explanation: "There's no such requirement — movement is about reaching the ball, not touching zones." },
          { text: "They must chase down every serve personally", correct: false, explanation: "Serve-receive is shared across the team, not solely the setter's job." },
          { text: "They swap positions with the libero mid-rally", correct: false, explanation: "Players don't swap positions in the middle of a rally." },
        ],
      },
      {
        question: "What is a '5-1' offensive system?",
        answers: [
          { text: "A system with a single setter on court in every rotation", correct: true, explanation: "Correct — 5 other attackers/players plus 1 dedicated setter." },
          { text: "A system with five setters and one attacker", correct: false, explanation: "That reverses the actual meaning of a 5-1 system." },
          { text: "A scoring rule allowing 5 points before rotating", correct: false, explanation: "This isn't a scoring rule — it describes a lineup structure." },
          { text: "A serving order used only in the fifth set", correct: false, explanation: "The '5-1' label isn't tied to a specific set number." },
        ],
      },
      {
        question: "What is a '6-2' offensive system?",
        answers: [
          { text: "A system using two setters who alternate, keeping a front-row attacker available", correct: true, explanation: "Correct — this system trades one setter's front-row attack for extra hitting power." },
          { text: "A system with six setters and two attackers", correct: false, explanation: "That reverses the meaning — it's two setters, not six." },
          { text: "A rule requiring six substitutions per set", correct: false, explanation: "This isn't about substitution counts." },
          { text: "A serving rotation used only for liberos", correct: false, explanation: "This system describes setters, not libero rules." },
        ],
      },
      {
        question: "Why might a team choose a 6-2 system over a 5-1?",
        answers: [
          { text: "To always have an extra front-row attacker available in the setter's rotation slot", correct: true, explanation: "Correct — this is the main tactical benefit of using two setters." },
          { text: "Because the rules require it in tournament play", correct: false, explanation: "Teams choose their system by strategy, not by a fixed rule." },
          { text: "Because it uses fewer total players", correct: false, explanation: "Both systems still use a full six-player lineup on court." },
          { text: "Because it removes the need for a libero", correct: false, explanation: "The libero role is independent of which setting system is used." },
        ],
      },
      {
        question: "Are setters usually skilled only at setting?",
        answers: [
          { text: "No, many are also strong blockers and servers", correct: true, explanation: "Correct — setters rotate through every zone, so all-around skill helps." },
          { text: "Yes, setting is their only responsibility ever", correct: false, explanation: "Setters still rotate through blocking and serving duties like anyone else." },
          { text: "Yes, they are not allowed to block by rule", correct: false, explanation: "There's no rule preventing a setter from blocking." },
          { text: "Yes, they are substituted out before every serve", correct: false, explanation: "There's no such automatic substitution rule." },
        ],
      },
      {
        question: "What does the setter typically do with the ball once they receive it?",
        answers: [
          { text: "Place it precisely for an attacker to hit", correct: true, explanation: "Correct — accurate placement is the whole purpose of the set." },
          { text: "Serve it immediately", correct: false, explanation: "Serving only happens at the start of a rally, not on the second contact." },
          { text: "Send it directly over the net themselves as an attack", correct: false, explanation: "That's an option occasionally, but it's not the setter's typical job — setting to a hitter is." },
          { text: "Hold it until the shot clock runs out", correct: false, explanation: "Volleyball has no shot clock." },
        ],
      },
      {
        question: "In a 5-1 system, how many dedicated setters are used?",
        answers: [
          { text: "One", correct: true, explanation: "Correct — that's exactly what the '1' in 5-1 refers to." },
          { text: "Five", correct: false, explanation: "Five refers to the rest of the lineup, not the number of setters." },
          { text: "Two", correct: false, explanation: "Two setters describes a 6-2 system, not a 5-1." },
          { text: "Six", correct: false, explanation: "Six is the full team size on court, not the setter count." },
        ],
      },
      {
        question: "What overall description best fits the setter's role?",
        answers: [
          { text: "The player who directs the offense by delivering accurate sets to attackers", correct: true, explanation: "Correct — this captures the core of the position." },
          { text: "The player solely responsible for blocking", correct: false, explanation: "Blocking is a shared team responsibility, not the setter's defining job." },
          { text: "The player who calls every serve", correct: false, explanation: "Serve order follows the rotation, not a single player's calls." },
          { text: "The player who never touches the ball", correct: false, explanation: "The setter touches the ball constantly — usually every single rally." },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Middle Blocker",
    summary: "The player who anchors the block at the net and reads the opponent's quick attacks.",
    durationMin: 8,
    theory: [
      "The Middle Blocker (MB), sometimes called a middle hitter, plays in Zone 3, right in the center of the net. Their main job on defense is to read the opponent's offense and get in front of whichever attacker is about to hit, often needing to move quickly in either direction.",
      "On offense, middle blockers frequently run fast, quick sets designed to be hit before the opposing block is fully organized, taking advantage of their central position and quick footwork.",
      "Because blocking against fast, unpredictable middle attacks is physically demanding, teams often substitute a libero or defensive specialist in for the middle blocker when they rotate to the back row, since backcourt defense isn't usually the MB's strongest skill.",
      "A good middle blocker needs excellent timing and lateral speed more than raw jumping power alone — arriving at the right spot half a second early is often the difference between a stuffed block and a blown-past attacker.",
    ],
    keyTakeaway: "The Middle Blocker, in Zone 3, reads the opponent's offense and shuffles sideways to block, while also hitting fast quick-sets of their own near the center of the net.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The Middle Blocker (MB), in Zone 3, shuffles sideways along the net to get in front of the opponent's attacker before they hit.",
      activeZones: [3],
      labels: { 3: "MB" },
      motions: { 3: { dx: 14, dy: 0 } },
      ball: null,
    },
    quiz: [
      {
        question: "Which zone does the Middle Blocker mainly play in?",
        answers: [
          { text: "Zone 3", correct: true, explanation: "Correct — Zone 3 is the center front zone, right at the net." },
          { text: "Zone 1", correct: false, explanation: "Zone 1 is a back-row serving zone, not the MB's main spot." },
          { text: "Zone 5", correct: false, explanation: "Zone 5 is a back-row zone, not the MB's usual position." },
          { text: "Zone 6", correct: false, explanation: "Zone 6 is the back-middle zone, not the front-row MB position." },
        ],
      },
      {
        question: "What is the Middle Blocker's main defensive job?",
        answers: [
          { text: "Reading the opponent's offense and getting in front of the attacker to block", correct: true, explanation: "Correct — quick reads and footwork define this role defensively." },
          { text: "Serving every point for the team", correct: false, explanation: "Serve order follows the rotation, not one fixed player." },
          { text: "Staying still in the center of the court at all times", correct: false, explanation: "Middle blockers must move quickly side to side, not stay still." },
          { text: "Calling the score after each rally", correct: false, explanation: "Scorekeeping is the scorer's job, not the middle blocker's." },
        ],
      },
      {
        question: "What kind of sets do middle blockers often hit on offense?",
        answers: [
          { text: "Fast, quick sets meant to beat the opposing block", correct: true, explanation: "Correct — speed is the point of these quick attacks." },
          { text: "Only high, slow sets from the back row", correct: false, explanation: "High back-row sets aren't the MB's typical attacking option." },
          { text: "Only underhand serves", correct: false, explanation: "Serving style isn't related to the MB's attacking sets." },
          { text: "Sets that must bounce once before being hit", correct: false, explanation: "There's no such bounce requirement in volleyball." },
        ],
      },
      {
        question: "Why do teams often substitute a libero in for the middle blocker in the back row?",
        answers: [
          { text: "Backcourt defense usually isn't the middle blocker's strongest skill", correct: true, explanation: "Correct — this swap strengthens the team's back-row defense." },
          { text: "Middle blockers are not allowed in the back row by rule", correct: false, explanation: "There's no such rule — this substitution is a tactical choice, not a requirement." },
          { text: "The middle blocker must rest every rotation", correct: false, explanation: "This isn't a mandatory rest rule — it's a defensive strategy." },
          { text: "The libero and middle blocker must always swap by rule", correct: false, explanation: "This substitution is optional strategy, not a fixed rule." },
        ],
      },
      {
        question: "What physical qualities matter most for a middle blocker?",
        answers: [
          { text: "Timing and lateral speed", correct: true, explanation: "Correct — arriving at the right spot at the right time matters most." },
          { text: "Serving distance only", correct: false, explanation: "Serving distance isn't the defining skill for this position." },
          { text: "Being the tallest player on the team, with no other requirement", correct: false, explanation: "Height helps, but timing and footwork matter just as much." },
          { text: "Refereeing knowledge", correct: false, explanation: "That's unrelated to on-court blocking performance." },
        ],
      },
      {
        question: "Why is arriving 'half a second early' important for a block?",
        answers: [
          { text: "It's often the difference between a successful block and being beaten by the attack", correct: true, explanation: "Correct — timing is critical against fast middle attacks." },
          { text: "It guarantees an extra point automatically", correct: false, explanation: "No timing rule awards automatic points." },
          { text: "It lets the blocker switch to the libero jersey", correct: false, explanation: "Jersey rules are unrelated to block timing." },
          { text: "It resets the shot clock", correct: false, explanation: "Volleyball doesn't use a shot clock." },
        ],
      },
      {
        question: "What direction does a middle blocker usually need to move quickly?",
        answers: [
          { text: "Sideways, along the net", correct: true, explanation: "Correct — they must reach attackers on either side of Zone 3." },
          { text: "Only straight backward", correct: false, explanation: "Backward movement isn't the main requirement for blocking at the net." },
          { text: "Only diagonally toward the referee", correct: false, explanation: "Referee position has nothing to do with blocking movement." },
          { text: "They never need to move — attackers come to them", correct: false, explanation: "Middle blockers must actively move to reach attackers." },
        ],
      },
      {
        question: "Which of these best describes a middle blocker's overall role?",
        answers: [
          { text: "A central net defender who also hits fast, quick attacks", correct: true, explanation: "Correct — this combines the position's offensive and defensive sides." },
          { text: "A purely defensive back-row player", correct: false, explanation: "The middle blocker's main position is front row, not back row." },
          { text: "A player who never attacks the ball", correct: false, explanation: "Quick middle attacks are a normal part of this role." },
          { text: "A substitute for the setter", correct: false, explanation: "The middle blocker and setter are separate, distinct roles." },
        ],
      },
      {
        question: "What makes middle attacks dangerous for the defense to face?",
        answers: [
          { text: "They are fast and can be hit before the block is fully set", correct: true, explanation: "Correct — speed is what makes them hard to defend." },
          { text: "They are always served underhand", correct: false, explanation: "Serving style is unrelated to how attacks are set up mid-rally." },
          { text: "They must be announced out loud before the hit", correct: false, explanation: "There's no such announcement requirement in volleyball." },
          { text: "They can only happen in the deciding set", correct: false, explanation: "Quick middle attacks can happen in any set." },
        ],
      },
      {
        question: "Why is footwork especially important for a middle blocker?",
        answers: [
          { text: "They must consistently beat attackers to the correct spot on the net", correct: true, explanation: "Correct — good footwork is what makes that possible." },
          { text: "It determines how many substitutions the team gets", correct: false, explanation: "Substitution counts are unrelated to individual footwork." },
          { text: "It decides who serves first in the set", correct: false, explanation: "Serve order is decided before the set, not by footwork." },
          { text: "It changes the height of the net for that rally", correct: false, explanation: "Net height is fixed and does not change during play." },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Serving Specialist",
    summary: "A player brought on specifically to deliver a strong, tactical serve.",
    durationMin: 7,
    theory: [
      "A Serving Specialist (sometimes labeled SV) is substituted into the lineup for one specific purpose: to serve. Coaches use this substitution when they want a particularly aggressive or reliable serve at a key moment, rather than relying on whichever player's rotation turn it happens to be.",
      "This role exists because serving is a standalone skill — a player can be an excellent serving specialist without necessarily being a strong all-around attacker, blocker, or passer.",
      "Because a serving specialist typically only serves before rotating out again, their appearance on court is usually brief but tactically important, especially at tight moments in a close set.",
      "Some serving specialists are chosen for a consistent, hard-to-return float serve, while others specialize in a powerful jump serve meant to force a weak first pass from the opponent.",
    ],
    keyTakeaway: "A Serving Specialist is substituted in purely to deliver one strong, tactical serve, using serving as a standalone skill rather than an all-around playing role.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The Serving Specialist (SV) enters just to serve from behind the end line, sending the ball on a low, fast path across the net.",
      activeZones: [1],
      labels: { 1: "SV" },
      motions: { 1: { dx: 0, dy: 2 } },
      ball: { from: { x: 82, y: 70 }, to: { x: 38, y: 4 } },
    },
    quiz: [
      {
        question: "What is a Serving Specialist substituted in to do?",
        answers: [
          { text: "Deliver one specific, tactical serve", correct: true, explanation: "Correct — that single serve is the entire purpose of the substitution." },
          { text: "Play the rest of the set at outside hitter", correct: false, explanation: "That would make them an outside hitter, not a serving specialist." },
          { text: "Take over as libero for the rest of the match", correct: false, explanation: "The libero is a separate, ongoing defensive role, not a one-serve substitution." },
          { text: "Referee the next rally", correct: false, explanation: "Officiating is done by referees, not substituted players." },
        ],
      },
      {
        question: "Why does the serving specialist role exist as a separate tactic?",
        answers: [
          { text: "Because serving is a standalone skill, separate from attacking or passing", correct: true, explanation: "Correct — a great server doesn't need to excel at everything else too." },
          { text: "Because the rules require every team to use one", correct: false, explanation: "Using a serving specialist is a coaching choice, not a rule requirement." },
          { text: "Because only certain players are legally allowed to serve", correct: false, explanation: "Any player in the correct rotation position may serve — there's no such restriction." },
          { text: "Because serving specialists wear a required different jersey", correct: false, explanation: "That distinct-jersey rule applies to the libero, not a serving specialist." },
        ],
      },
      {
        question: "How long does a serving specialist typically stay on the court?",
        answers: [
          { text: "Often briefly — just to serve, before rotating or subbing out again", correct: true, explanation: "Correct — their appearance is usually short and targeted." },
          { text: "For the remainder of the entire match", correct: false, explanation: "Their role is typically limited to the serving moment, not the whole match." },
          { text: "Exactly two full sets", correct: false, explanation: "There's no fixed duration tied to this substitution." },
          { text: "Only until the opposing team calls a timeout", correct: false, explanation: "Timeouts don't determine how long this substitution lasts." },
        ],
      },
      {
        question: "When might a coach choose to bring in a serving specialist?",
        answers: [
          { text: "At a key moment when a strong, tactical serve could disrupt the opponent", correct: true, explanation: "Correct — timing this substitution well can shift momentum." },
          { text: "Only at the very start of the match", correct: false, explanation: "This substitution can happen at any strategic point, not just the start." },
          { text: "Only if the libero is injured", correct: false, explanation: "This substitution is unrelated to the libero's availability." },
          { text: "Only during a challenge or video review", correct: false, explanation: "This substitution is a tactical choice, not tied to reviews." },
        ],
      },
      {
        question: "What type of serve might a serving specialist be chosen for?",
        answers: [
          { text: "A consistent float serve or a powerful jump serve", correct: true, explanation: "Correct — both are common specialties for this role." },
          { text: "Only a serve thrown two-handed like a basketball pass", correct: false, explanation: "A legal serve must be struck, not thrown with two hands." },
          { text: "Only a serve hit from inside the court", correct: false, explanation: "All serves must be hit from behind the end line, specialist or not." },
          { text: "A serve that bounces before crossing the net", correct: false, explanation: "There's no such bounce requirement for a legal serve." },
        ],
      },
      {
        question: "Does a serving specialist need to be a strong all-around attacker?",
        answers: [
          { text: "No — serving is treated as its own standalone skill", correct: true, explanation: "Correct — this is exactly why the role exists separately." },
          { text: "Yes, they must also be the team's best hitter", correct: false, explanation: "A serving specialist's value comes specifically from their serve." },
          { text: "Yes, they must also block every rotation", correct: false, explanation: "Blocking ability isn't a requirement for this role." },
          { text: "Yes, they must also be the setter", correct: false, explanation: "Setting and serving-specialist duties are unrelated roles." },
        ],
      },
      {
        question: "What is the main goal of bringing in a strong server tactically?",
        answers: [
          { text: "Forcing a weak first pass from the opponent", correct: true, explanation: "Correct — a tough serve can disrupt the opponent's whole offense." },
          { text: "Automatically winning the rally by rule", correct: false, explanation: "No serve automatically wins a rally — play still has to continue." },
          { text: "Guaranteeing a block on the next attack", correct: false, explanation: "Serving and blocking are separate actions in different parts of the rally." },
          { text: "Skipping the team's next rotation", correct: false, explanation: "Rotation order isn't affected by using a serving specialist." },
        ],
      },
      {
        question: "Is bringing in a serving specialist a required rule or a coaching choice?",
        answers: [
          { text: "A coaching choice", correct: true, explanation: "Correct — teams may use this tactic, but nothing requires it." },
          { text: "A required rule enforced by the referee", correct: false, explanation: "No rule forces a team to use a serving specialist." },
          { text: "A requirement only in the deciding set", correct: false, explanation: "There's no such requirement in any set." },
          { text: "A requirement only for youth leagues", correct: false, explanation: "This is a tactical option available at any level, not a requirement." },
        ],
      },
      {
        question: "What happens after a serving specialist finishes serving, in many systems?",
        answers: [
          { text: "They are often substituted back out for the regular rotation player", correct: true, explanation: "Correct — this keeps their appearance brief and purpose-built." },
          { text: "They must remain in that exact position for the rest of the set", correct: false, explanation: "Whether they stay or sub out depends on team strategy, not a fixed rule." },
          { text: "The team forfeits their next serve", correct: false, explanation: "There's no such penalty for using a serving specialist." },
          { text: "The opposing team gets to choose the next server", correct: false, explanation: "Each team manages its own lineup and serve order independently." },
        ],
      },
      {
        question: "Which statement best captures the serving specialist's purpose?",
        answers: [
          { text: "A tactical substitution built entirely around one strong serve", correct: true, explanation: "Correct — that single serve is the whole point of the role." },
          { text: "A permanent defensive replacement for the libero", correct: false, explanation: "That describes a defensive specialist, not a serving specialist." },
          { text: "A backup setter", correct: false, explanation: "Setting and serving-specialist duties are unrelated roles." },
          { text: "An extra blocker added at the net", correct: false, explanation: "This role is about serving, not blocking." },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Defensive Specialist",
    summary: "A back-row substitute who strengthens passing and digging, without the libero's special rules.",
    durationMin: 7,
    theory: [
      "A Defensive Specialist (DS) is a player substituted in specifically to strengthen back-row defense — usually passing and digging — much like a libero, but without the libero's unique rules or distinct jersey.",
      "Because a defensive specialist is a normal substitution, it counts against the team's regular substitution limit, unlike libero swaps, which are unlimited and separate from that count.",
      "Unlike the libero, a defensive specialist has no special attacking restriction beyond the normal back-row rules — they may attack the ball above net height if they jump from behind the 3 m attack line, just like any other back-row player.",
      "Coaches often use a defensive specialist when they want extra back-row strength but have already used their libero substitution for a different player, or want a second, differently skilled defender on court.",
    ],
    keyTakeaway: "A Defensive Specialist strengthens back-row defense like a libero, but as a normal substitution — it counts against the substitution limit, and none of the libero's special restrictions apply.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The Defensive Specialist (DS), in Zone 5, shifts across to dig an angled attack and keep the rally alive.",
      activeZones: [5],
      labels: { 5: "DS" },
      motions: { 5: { dx: 10, dy: -6 } },
      ball: { from: { x: 60, y: 100 }, to: { x: 26, y: 70 } },
    },
    quiz: [
      {
        question: "What is a Defensive Specialist's main purpose on court?",
        answers: [
          { text: "Strengthening back-row passing and digging", correct: true, explanation: "Correct — this mirrors the libero's purpose, but through a normal substitution." },
          { text: "Delivering one tactical serve only", correct: false, explanation: "That describes a serving specialist, a different role entirely." },
          { text: "Blocking at the net", correct: false, explanation: "Defensive specialists play in the back row, not blocking at the net." },
          { text: "Running the offense as a second setter", correct: false, explanation: "Setting is a separate role from a defensive specialist's job." },
        ],
      },
      {
        question: "How does a defensive-specialist substitution count against team limits?",
        answers: [
          { text: "It counts as a normal substitution, unlike libero swaps", correct: true, explanation: "Correct — this is the key rules difference from the libero." },
          { text: "It doesn't count at all, exactly like the libero", correct: false, explanation: "Only libero substitutions get that special unlimited treatment." },
          { text: "It counts double against the limit", correct: false, explanation: "There's no double-counting rule for this substitution." },
          { text: "It only counts in the deciding set", correct: false, explanation: "This counts as a normal substitution in every set." },
        ],
      },
      {
        question: "Does a defensive specialist wear a special jersey like the libero?",
        answers: [
          { text: "No, they wear a normal team jersey", correct: true, explanation: "Correct — the distinct-jersey rule is specific to the libero." },
          { text: "Yes, an identical jersey rule applies", correct: false, explanation: "The special jersey requirement is unique to the libero role." },
          { text: "Yes, but only in international competitions", correct: false, explanation: "There's no such jersey requirement for a defensive specialist at any level." },
          { text: "Yes, but only during serve-receive", correct: false, explanation: "Jersey rules don't change based on the phase of play." },
        ],
      },
      {
        question: "Can a defensive specialist attack the ball above net height from the back row?",
        answers: [
          { text: "Yes, if they jump from behind the 3 m attack line", correct: true, explanation: "Correct — normal back-row attacking rules apply to them." },
          { text: "No, this is completely forbidden for a defensive specialist", correct: false, explanation: "Unlike the libero, a defensive specialist has no such special restriction." },
          { text: "Only if they first ask the referee for permission", correct: false, explanation: "No such permission request exists in the rules." },
          { text: "Only in the deciding set", correct: false, explanation: "This rule is the same in every set of the match." },
        ],
      },
      {
        question: "What is the main rules difference between a libero and a defensive specialist?",
        answers: [
          { text: "The libero has unlimited special substitutions and unique restrictions; the DS does not", correct: true, explanation: "Correct — this is the core distinction between the two roles." },
          { text: "The defensive specialist can block, but the libero cannot", correct: false, explanation: "Blocking rules aren't the defining difference here — substitution rules are." },
          { text: "The libero must serve every rotation", correct: false, explanation: "There's no such serving requirement for the libero." },
          { text: "The defensive specialist is not allowed on the court during serve-receive", correct: false, explanation: "Serve-receive is exactly when a defensive specialist is most useful." },
        ],
      },
      {
        question: "When might a coach use a defensive specialist instead of the libero?",
        answers: [
          { text: "When they want a second defender with a different skill set, or have already used their libero swap for someone else", correct: true, explanation: "Correct — this gives coaches more defensive flexibility." },
          { text: "Whenever the libero is not present at the match", correct: false, explanation: "A defensive specialist can be used regardless of whether a libero is present." },
          { text: "Only when the team has no substitutes left", correct: false, explanation: "Using a defensive specialist itself is a substitution — it requires one to be available." },
          { text: "Only after the first set", correct: false, explanation: "This substitution can be used starting from the very first set." },
        ],
      },
      {
        question: "Which zones does a defensive specialist typically play?",
        answers: [
          { text: "Back-row zones, such as Zone 5, 6, or 1", correct: true, explanation: "Correct — this matches their back-row defensive purpose." },
          { text: "Only Zone 3 at the net", correct: false, explanation: "Zone 3 is a front-row attacking/blocking zone, not this role's focus." },
          { text: "Only the service zone behind the end line", correct: false, explanation: "The service zone is used briefly for serving, not as a playing position." },
          { text: "Only Zone 2 and Zone 4 together", correct: false, explanation: "Those are front-row attacking zones, not typical defensive-specialist zones." },
        ],
      },
      {
        question: "Why might a team value having both a libero and a defensive specialist?",
        answers: [
          { text: "It gives the team two different options for strengthening back-row defense", correct: true, explanation: "Correct — different players can bring different defensive strengths." },
          { text: "Because the rules require both roles to be filled", correct: false, explanation: "Neither role is mandatory — both are optional tactical choices." },
          { text: "Because a libero cannot play without a defensive specialist on court", correct: false, explanation: "The libero can be used independently of whether a DS is also on the roster." },
          { text: "Because it doubles the team's serving options", correct: false, explanation: "This isn't primarily about serving — it's about defensive coverage." },
        ],
      },
      {
        question: "Is using a defensive specialist a required tactic?",
        answers: [
          { text: "No, it's an optional coaching choice", correct: true, explanation: "Correct — teams may use this substitution if it helps their strategy." },
          { text: "Yes, every team must use one every set", correct: false, explanation: "There's no requirement to use a defensive specialist at all." },
          { text: "Yes, but only in the final set", correct: false, explanation: "This tactic can be used in any set, and isn't mandatory in any of them." },
          { text: "Yes, only for teams without a libero", correct: false, explanation: "Teams with a libero can still also use a defensive specialist." },
        ],
      },
      {
        question: "Which statement best distinguishes the defensive specialist from the libero?",
        answers: [
          { text: "Same defensive purpose, but through a normal substitution with no special restrictions", correct: true, explanation: "Correct — this captures the key difference precisely." },
          { text: "The defensive specialist is a front-row attacking role", correct: false, explanation: "Both roles focus on back-row defense, not front-row attacking." },
          { text: "The defensive specialist replaces the setter specifically", correct: false, explanation: "This role can replace any back-row player, not specifically the setter." },
          { text: "The defensive specialist must also serve every rotation", correct: false, explanation: "There's no such serving requirement tied to this role." },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Front-Row Responsibilities",
    summary: "What Zones 2, 3 and 4 are allowed to do that back-row players cannot.",
    durationMin: 7,
    theory: [
      "Front-row players — those currently in Zones 2, 3 and 4 — have privileges no back-row player has: they may block at the net, and they may attack the ball above net height from anywhere, including right next to the net.",
      "This is exactly why the strongest attackers and blockers on a team are usually positioned to make the most of their front-row rotations, timing their biggest offensive and defensive contributions for when they're up at the net.",
      "Being in the front row also comes with more physical demand at the net: constant jumping to block, reading the opponent's attackers, and being ready to attack immediately if a good set comes their way.",
      "Because front-row status is temporary — tied to the current rotation, not a fixed role — every player on the team experiences these privileges and responsibilities at some point in a set.",
    ],
    keyTakeaway: "Front-row players (Zones 2, 3 and 4) are the only ones allowed to block and to attack the ball above net height from anywhere, including right at the net.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "All three front-row players (Zones 2, 3 and 4) can jump to block or attack at the net — here they rise together to block an attack back onto the opponent's side.",
      activeZones: [2, 3, 4],
      motions: {
        2: { dx: 0, dy: -6 },
        3: { dx: 0, dy: -6 },
        4: { dx: 0, dy: -6 },
      },
      ball: { from: { x: 50, y: -4 }, to: { x: 50, y: 14 } },
    },
    quiz: [
      {
        question: "Which zones make up the front row?",
        answers: [
          { text: "Zones 2, 3 and 4", correct: true, explanation: "Correct — these three zones sit closest to the net." },
          { text: "Zones 1, 5 and 6", correct: false, explanation: "Those three zones make up the back row instead." },
          { text: "Zones 1, 2 and 3", correct: false, explanation: "This mixes a back-row zone (1) with front-row zones." },
          { text: "Zones 3, 4 and 5", correct: false, explanation: "This mixes a front-row zone (3, 4) with a back-row zone (5)." },
        ],
      },
      {
        question: "What can front-row players do that back-row players cannot?",
        answers: [
          { text: "Block at the net and attack above net height from anywhere", correct: true, explanation: "Correct — these are the two defining front-row privileges." },
          { text: "Serve the ball", correct: false, explanation: "Serving is done by any player in the serving rotation slot, not just front-row players." },
          { text: "Touch the ball at all", correct: false, explanation: "Back-row players touch the ball constantly too, just under different attacking rules." },
          { text: "Substitute themselves without a coach's signal", correct: false, explanation: "Substitution procedures apply the same way regardless of row." },
        ],
      },
      {
        question: "Why are strong attackers usually placed to make the most of front-row rotations?",
        answers: [
          { text: "Because attacking above net height from anywhere is a front-row-only privilege", correct: true, explanation: "Correct — this maximizes their offensive impact when they're up front." },
          { text: "Because back-row players are not allowed to touch the ball", correct: false, explanation: "Back-row players touch the ball often — they just face different attacking rules." },
          { text: "Because the front row scores double points", correct: false, explanation: "Every rally is worth exactly one point, regardless of row." },
          { text: "Because only front-row players may serve", correct: false, explanation: "Serving is tied to the serving rotation slot, not to row status generally." },
        ],
      },
      {
        question: "Is front-row status permanent for a specific player?",
        answers: [
          { text: "No, it's temporary and changes with each rotation", correct: true, explanation: "Correct — every player moves between rows as the team rotates." },
          { text: "Yes, once assigned, a player stays front row all match", correct: false, explanation: "Rotation moves every player between front and back row over time." },
          { text: "Yes, only substitutes can be back-row players", correct: false, explanation: "Both starters and substitutes rotate through both rows." },
          { text: "Yes, but only in the deciding set", correct: false, explanation: "Rotation applies the same way in every set." },
        ],
      },
      {
        question: "What extra physical demand comes with playing front row?",
        answers: [
          { text: "Frequent jumping to block and readiness to attack immediately", correct: true, explanation: "Correct — the net is a high-intensity area of the court." },
          { text: "Running the full length of the court every rally", correct: false, explanation: "Front-row play centers on the net area, not full-court sprints." },
          { text: "Serving twice as often", correct: false, explanation: "Serving frequency depends on rotation, not row status." },
          { text: "Wearing a heavier uniform", correct: false, explanation: "Uniform rules don't vary by row." },
        ],
      },
      {
        question: "Can a front-row player attack a ball that's below net height, just like a back-row player?",
        answers: [
          { text: "Yes, that kind of contact isn't restricted by row at all", correct: true, explanation: "Correct — the front-row/back-row rule specifically concerns contact above net height." },
          { text: "No, front-row players may never contact a low ball", correct: false, explanation: "There's no such restriction — this rule is only about above-net-height contact." },
          { text: "Only if they ask the referee first", correct: false, explanation: "No such request process exists in the rules." },
          { text: "Only during a timeout", correct: false, explanation: "This has nothing to do with timeouts." },
        ],
      },
      {
        question: "Why does every player eventually experience front-row responsibilities?",
        answers: [
          { text: "Because rotation cycles every player through every zone over time", correct: true, explanation: "Correct — the rotation order guarantees this for the whole team." },
          { text: "Because coaches are required to rotate players evenly", correct: false, explanation: "It's the rotation RULE, not a coaching requirement, that causes this." },
          { text: "Because only the tallest players are picked for front row", correct: false, explanation: "Rotation order determines row, not player height." },
          { text: "Because front-row players must sit out every other set", correct: false, explanation: "There's no such sitting-out rule tied to row." },
        ],
      },
      {
        question: "What is the main reason blocking is restricted to front-row players?",
        answers: [
          { text: "Blocking happens right at the net, where only front-row players are positioned", correct: true, explanation: "Correct — this ties directly to their zone location." },
          { text: "Back-row players are physically incapable of jumping", correct: false, explanation: "This is a positional rule, not a statement about physical ability." },
          { text: "Blocking is considered a serving action", correct: false, explanation: "Blocking and serving are two completely separate actions." },
          { text: "It depends on which team is currently ahead on the scoreboard", correct: false, explanation: "The score has no effect on who is allowed to block." },
        ],
      },
      {
        question: "Which of these is a correct pairing of zone and row?",
        answers: [
          { text: "Zone 4 — front row", correct: true, explanation: "Correct — Zone 4 is one of the three front-row zones." },
          { text: "Zone 6 — front row", correct: false, explanation: "Zone 6 is a back-row zone." },
          { text: "Zone 1 — front row", correct: false, explanation: "Zone 1 is a back-row zone." },
          { text: "Zone 5 — front row", correct: false, explanation: "Zone 5 is a back-row zone." },
        ],
      },
      {
        question: "What best summarizes the front row's role on the team?",
        answers: [
          { text: "The only players allowed to block and to attack above net height from anywhere", correct: true, explanation: "Correct — this is the defining privilege of front-row status." },
          { text: "The only players allowed to serve", correct: false, explanation: "Serving depends on rotation slot, not row." },
          { text: "The only players allowed to touch the ball", correct: false, explanation: "Every player, front or back row, regularly touches the ball." },
          { text: "The only players who rotate", correct: false, explanation: "All six players rotate, not just the front row." },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Back-Row Responsibilities",
    summary: "What Zones 1, 6 and 5 focus on, and the limits they play under.",
    durationMin: 7,
    theory: [
      "Back-row players — those currently in Zones 1, 6 and 5 — carry the defensive weight of the team: serve-receive, digging attacks, and covering the deep court behind the block.",
      "In exchange for playing further from the net, back-row players face two restrictions: they may never block, and they may only attack the ball above net height if they jump from behind the 3 m attack line.",
      "Because they aren't tied down at the net, back-row players often have more freedom to read the game and move to cover open space, especially right after their team's block touches (or misses) the ball.",
      "Good back-row play is frequently the difference between a rally that ends quickly and one where the team fights back from a tough dig into a scoring chance of their own.",
    ],
    keyTakeaway: "Back-row players (Zones 1, 6 and 5) focus on serve-receive and digging, and may never block or attack above net height unless they jump from behind the 3 m attack line.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The three back-row players (Zones 1, 6 and 5) step in to cover a deep ball, since none of them may block and they can only attack above the net from behind the 3 m line.",
      activeZones: [1, 6, 5],
      motions: {
        1: { dx: 0, dy: 6 },
        6: { dx: 0, dy: 6 },
        5: { dx: 0, dy: 6 },
      },
      ball: { from: { x: 50, y: -4 }, to: { x: 50, y: 70 } },
    },
    quiz: [
      {
        question: "Which zones make up the back row?",
        answers: [
          { text: "Zones 1, 6 and 5", correct: true, explanation: "Correct — these three zones sit furthest from the net." },
          { text: "Zones 2, 3 and 4", correct: false, explanation: "Those three zones make up the front row instead." },
          { text: "Zones 1, 2 and 6", correct: false, explanation: "This mixes a front-row zone (2) with back-row zones." },
          { text: "Zones 4, 5 and 6", correct: false, explanation: "This mixes a front-row zone (4) with back-row zones." },
        ],
      },
      {
        question: "What are the two main defensive jobs of back-row players?",
        answers: [
          { text: "Serve-receive and digging attacks", correct: true, explanation: "Correct — these are the core back-row responsibilities." },
          { text: "Blocking and setting", correct: false, explanation: "Back-row players may never block, so this isn't right." },
          { text: "Refereeing and line-judging", correct: false, explanation: "Those are official roles, not player responsibilities." },
          { text: "Serving and celebrating", correct: false, explanation: "Serving happens for whichever player is in the serving slot, not as a defining back-row job." },
        ],
      },
      {
        question: "Can a back-row player block at the net?",
        answers: [
          { text: "No, never", correct: true, explanation: "Correct — blocking is strictly a front-row privilege." },
          { text: "Yes, if they ask the setter first", correct: false, explanation: "No such permission process exists — this is a strict positional rule." },
          { text: "Yes, but only in the deciding set", correct: false, explanation: "This restriction applies in every set." },
          { text: "Yes, if the ball is below net height", correct: false, explanation: "Blocking specifically targets the net area and is never allowed for back-row players." },
        ],
      },
      {
        question: "When can a back-row player legally attack the ball above net height?",
        answers: [
          { text: "Only if they jump from behind the 3 m attack line", correct: true, explanation: "Correct — take-off position is what makes this legal." },
          { text: "At any time, from anywhere on the court", correct: false, explanation: "That freedom belongs only to front-row players." },
          { text: "Only during their team's own serve", correct: false, explanation: "This rule applies throughout the rally, not tied to serving." },
          { text: "Never, under any circumstance", correct: false, explanation: "They can, specifically when taking off from behind the attack line." },
        ],
      },
      {
        question: "Why do back-row players often have more freedom to read the game?",
        answers: [
          { text: "Because they aren't tied to a fixed spot at the net", correct: true, explanation: "Correct — this lets them move to cover open space more freely." },
          { text: "Because they are not required to follow team strategy", correct: false, explanation: "Back-row players still follow team strategy — they just aren't fixed at the net." },
          { text: "Because the ball is lighter in the back row", correct: false, explanation: "The ball doesn't change weight based on court position." },
          { text: "Because there are no rules in the back row", correct: false, explanation: "Back-row play still follows specific rules, like the no-blocking restriction." },
        ],
      },
      {
        question: "What often determines whether a rally continues after a tough dig?",
        answers: [
          { text: "How well the back-row players cover and control the ball", correct: true, explanation: "Correct — strong back-row play keeps rallies alive." },
          { text: "Whether the referee calls a replay", correct: false, explanation: "There's no automatic replay tied to a hard dig." },
          { text: "The serving team's score at that moment", correct: false, explanation: "The current score doesn't affect whether a dig succeeds." },
          { text: "Whether the ball touched the net earlier in the rally", correct: false, explanation: "A ball touching the net mid-rally is normal play and unrelated to digging success." },
        ],
      },
      {
        question: "What happens if a back-row player attacks above net height without jumping from behind the attack line?",
        answers: [
          { text: "It's a fault — a back-row attack violation", correct: true, explanation: "Correct — take-off position in front of the line makes this illegal." },
          { text: "Nothing, as long as the attack scores", correct: false, explanation: "The violation is in the action itself, regardless of the outcome." },
          { text: "The team gets a warning only, with play continuing", correct: false, explanation: "This is called immediately as a fault, not just a warning." },
          { text: "The point is automatically replayed", correct: false, explanation: "A back-row attack violation gives the point to the other team, not a replay." },
        ],
      },
      {
        question: "Which of these best matches a back-row responsibility?",
        answers: [
          { text: "Passing a serve to start the team's offense", correct: true, explanation: "Correct — serve-receive is a core back-row job." },
          { text: "Blocking the opponent's middle attacker", correct: false, explanation: "Blocking is restricted to front-row players." },
          { text: "Attacking freely from right next to the net", correct: false, explanation: "That freedom belongs to front-row players, not back-row players." },
          { text: "Deciding the rotation order for the whole team", correct: false, explanation: "Rotation order is fixed by the lineup, not decided by back-row players." },
        ],
      },
      {
        question: "Why is the 3 m attack line important for back-row players specifically?",
        answers: [
          { text: "It marks where they must take off from to legally attack above net height", correct: true, explanation: "Correct — this line defines the back-row attacking rule." },
          { text: "It marks where they must stand to serve", correct: false, explanation: "Serving happens from behind the end line, not the attack line." },
          { text: "It marks the boundary of the free zone", correct: false, explanation: "The free zone is defined by the space outside the court's boundary lines." },
          { text: "It has no special meaning for back-row players", correct: false, explanation: "It's specifically relevant to the legality of their attacks." },
        ],
      },
      {
        question: "What best summarizes the back row's role on the team?",
        answers: [
          { text: "The players who carry most of the serve-receive and digging load, under specific attacking limits", correct: true, explanation: "Correct — this captures both their job and their restrictions." },
          { text: "The players who are not allowed to touch the ball", correct: false, explanation: "Back-row players touch the ball constantly during serve-receive and digs." },
          { text: "The players who always serve first", correct: false, explanation: "Serve order depends on the starting rotation, not row status generally." },
          { text: "The players who referee close net calls", correct: false, explanation: "Officiating is handled by referees, not players." },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "How Six Players Work Together",
    summary: "Bringing every position together into one rotating, coordinated team.",
    durationMin: 8,
    theory: [
      "A volleyball team functions as six interlocking roles rather than six separate jobs. The outside hitters and opposite hitter attack from the edges, the middle blocker anchors the net, the setter directs traffic, and the libero or defensive specialist holds the back row together.",
      "All six players rotate through all six zones over the course of a set. Every time a team wins back the serve, everyone shifts one zone clockwise — the player in Zone 1 moves to Zone 2, Zone 2 to Zone 3, and so on all the way around, with Zone 6 moving back to Zone 1.",
      "This means every player experiences both front-row attacking/blocking duties and back-row defensive duties at different points in a set — the specific roles (outside hitter, setter, and so on) stay tied to the player, but their front-row or back-row status keeps changing.",
      "Understanding how these six roles fit together — who attacks, who sets, who blocks, who digs, and how they all rotate — is the foundation for everything tactical that comes later: reading rotations, setting up plays, and covering for teammates.",
    ],
    keyTakeaway: "All six players rotate clockwise through the six zones together, so every position experiences both front-row and back-row duty as the team's offense and defense stay connected.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "When a team wins back the serve, all six players rotate one position clockwise — 1 to 2, 2 to 3, 3 to 4, 4 to 5, 5 to 6, and 6 to 1.",
      activeZones: [1, 2, 3, 4, 5, 6],
      motions: {
        1: { dx: 0, dy: -52 },
        2: { dx: -32, dy: 0 },
        3: { dx: -32, dy: 0 },
        4: { dx: 0, dy: 52 },
        5: { dx: 32, dy: 0 },
        6: { dx: 32, dy: 0 },
      },
      ball: null,
    },
    quiz: [
      {
        question: "How many players from a team are on the court and rotating together?",
        answers: [
          { text: "Six", correct: true, explanation: "Correct — all six on-court players rotate as a unit." },
          { text: "Five", correct: false, explanation: "Volleyball uses more than five players per side on court." },
          { text: "Seven", correct: false, explanation: "Six is the correct number, not seven." },
          { text: "Four", correct: false, explanation: "Four is too few — six players make up a full side." },
        ],
      },
      {
        question: "What triggers a full-team rotation?",
        answers: [
          { text: "The team winning back the serve", correct: true, explanation: "Correct — rotation happens specifically when a team regains serve." },
          { text: "The end of a set", correct: false, explanation: "Rotation happens during a set, not just when a set ends." },
          { text: "A timeout being called", correct: false, explanation: "Timeouts don't trigger rotation." },
          { text: "The referee's discretion at any moment", correct: false, explanation: "Rotation is tied to winning serve, not referee discretion." },
        ],
      },
      {
        question: "In which order do players rotate through the zones?",
        answers: [
          { text: "1 to 2, 2 to 3, 3 to 4, 4 to 5, 5 to 6, 6 to 1", correct: true, explanation: "Correct — this is the fixed clockwise rotation order." },
          { text: "1 to 6, 6 to 5, 5 to 4, 4 to 3, 3 to 2, 2 to 1", correct: false, explanation: "That reverses the actual rotation direction." },
          { text: "A random order chosen by the coach each time", correct: false, explanation: "Rotation follows a fixed order, not a random or coach-chosen one." },
          { text: "Only front-row players rotate; back-row players stay fixed", correct: false, explanation: "All six players rotate together, not just the front row." },
        ],
      },
      {
        question: "Do specific roles like 'setter' or 'libero' change when the team rotates?",
        answers: [
          { text: "No — the role stays with the player, but their zone (and row) changes", correct: true, explanation: "Correct — rotation moves players through zones, not through roles." },
          { text: "Yes, roles are reassigned randomly every rotation", correct: false, explanation: "Roles are fixed to specific players for the match, not reshuffled." },
          { text: "Yes, the setter becomes the libero after each rotation", correct: false, explanation: "These are separate, unrelated roles that don't swap through rotation." },
          { text: "Yes, but only during the deciding set", correct: false, explanation: "Roles don't change due to rotation in any set." },
        ],
      },
      {
        question: "Why does every player eventually experience both front-row and back-row duty?",
        answers: [
          { text: "Because rotation cycles everyone through all six zones over time", correct: true, explanation: "Correct — this is a direct result of the rotation rule." },
          { text: "Because coaches must rotate players in and out constantly", correct: false, explanation: "This is about zone rotation, not coaching substitutions." },
          { text: "Because only some players are allowed in the back row", correct: false, explanation: "Every player rotates through every zone, back row included." },
          { text: "Because the libero swaps places with a different player each time", correct: false, explanation: "Libero substitutions are a separate mechanism from standard team rotation." },
        ],
      },
      {
        question: "Which role typically anchors the block at the net during front-row rotations?",
        answers: [
          { text: "The Middle Blocker", correct: true, explanation: "Correct — this is the middle blocker's central defensive job." },
          { text: "The Libero", correct: false, explanation: "The libero never plays front row and cannot block." },
          { text: "The Serving Specialist", correct: false, explanation: "That role is focused specifically on serving, not blocking." },
          { text: "The Defensive Specialist", correct: false, explanation: "That role focuses on back-row defense, not blocking at the net." },
        ],
      },
      {
        question: "Which role typically directs the offense by delivering sets?",
        answers: [
          { text: "The Setter", correct: true, explanation: "Correct — running the offense is the setter's defining job." },
          { text: "The Opposite Hitter", correct: false, explanation: "The OP is primarily an attacker, not the one directing sets." },
          { text: "The Middle Blocker", correct: false, explanation: "The MB focuses on blocking and quick attacks, not directing the offense." },
          { text: "The Serving Specialist", correct: false, explanation: "That role is about serving, not setting." },
        ],
      },
      {
        question: "Which role or roles typically hold the back row together defensively?",
        answers: [
          { text: "The Libero and Defensive Specialist", correct: true, explanation: "Correct — both roles exist specifically to strengthen back-row defense." },
          { text: "The Middle Blocker and Opposite Hitter", correct: false, explanation: "Those roles are more focused on front-row attacking and blocking." },
          { text: "The Setter and Serving Specialist", correct: false, explanation: "Those roles serve different specific purposes, not general back-row defense." },
          { text: "No one — the back row has no dedicated defensive role", correct: false, explanation: "The libero and defensive specialist exist precisely for this purpose." },
        ],
      },
      {
        question: "Why is understanding how all six roles fit together considered a foundation for tactics?",
        answers: [
          { text: "Because reading rotations, setting up plays, and covering teammates all depend on knowing each role", correct: true, explanation: "Correct — tactics build directly on this positional understanding." },
          { text: "Because tactics only matter in the deciding set", correct: false, explanation: "Tactical understanding matters in every set, not just the decider." },
          { text: "Because only the coach needs to understand rotations", correct: false, explanation: "Players themselves need this understanding to execute rotations correctly." },
          { text: "Because it determines the net height for the match", correct: false, explanation: "Net height is fixed by competition rules, unrelated to team roles." },
        ],
      },
      {
        question: "What best describes how a volleyball team functions as a whole?",
        answers: [
          { text: "As six interlocking roles that rotate together, covering both offense and defense", correct: true, explanation: "Correct — this captures the coordinated nature of the team." },
          { text: "As six independent players with no coordination required", correct: false, explanation: "Volleyball requires close coordination between all six players." },
          { text: "As a team where only the front row matters", correct: false, explanation: "Back-row defense is just as essential to the team's success." },
          { text: "As a team where positions never change during a set", correct: false, explanation: "Positions constantly change through rotation during a set." },
        ],
      },
    ],
  },
];

const CHAPTER_2_TEST = {
  id: 11,
  title: "Chapter 2 Test",
  summary: "A 20-question test covering everything from Player Positions and Roles.",
  durationMin: 15,
  theory: null,
  keyTakeaway: null,
  showAnimation: false,
  isTest: true,
  quiz: [
    {
      question: "Which zone does the Outside Hitter primarily attack from?",
      answers: [
        { text: "Zone 4", correct: true, explanation: "Correct — Zone 4 is the standard left-side attacking position." },
        { text: "Zone 2", correct: false, explanation: "Zone 2 is the Opposite Hitter's main attacking zone." },
        { text: "Zone 1", correct: false, explanation: "Zone 1 is a back-row serving zone." },
        { text: "Zone 3", correct: false, explanation: "Zone 3 is the Middle Blocker's main attacking zone." },
      ],
    },
    {
      question: "Why do teams usually carry two outside hitters?",
      answers: [
        { text: "So one is always in the front row to attack, whichever rotation the team is in", correct: true, explanation: "Correct — positioning them opposite each other guarantees coverage." },
        { text: "Because the rules require exactly two", correct: false, explanation: "There's no rule fixing the number of outside hitters." },
        { text: "So they can substitute for the libero", correct: false, explanation: "Libero substitutions are unrelated to outside-hitter pairing." },
        { text: "Because outside hitters cannot play back row", correct: false, explanation: "Outside hitters do rotate through the back row." },
      ],
    },
    {
      question: "Which zone does the Opposite Hitter primarily attack from?",
      answers: [
        { text: "Zone 2", correct: true, explanation: "Correct — Zone 2 is the right-side attacking position." },
        { text: "Zone 4", correct: false, explanation: "Zone 4 is the Outside Hitter's main attacking zone." },
        { text: "Zone 6", correct: false, explanation: "Zone 6 is a back-row zone, not a front-row attacking spot." },
        { text: "Zone 5", correct: false, explanation: "Zone 5 is a back-row zone." },
      ],
    },
    {
      question: "Why is this position called the 'Opposite' Hitter?",
      answers: [
        { text: "Because they line up opposite the setter in the rotation order", correct: true, explanation: "Correct — that's exactly where the name comes from." },
        { text: "Because they attack with their non-dominant hand", correct: false, explanation: "Hand dominance is unrelated to this position's name." },
        { text: "Because they play on the opposing team's side of the net", correct: false, explanation: "Every player stays on their own team's side of the net." },
        { text: "Because they are the opposite of the libero in height", correct: false, explanation: "Height comparisons have nothing to do with this position's name." },
      ],
    },
    {
      question: "What visually identifies the Libero on court?",
      answers: [
        { text: "A different colored jersey from their teammates", correct: true, explanation: "Correct — this makes the libero easy to identify." },
        { text: "A captain's armband", correct: false, explanation: "An armband identifies the team captain, not the libero." },
        { text: "Knee pads of a specific color", correct: false, explanation: "Knee pad color isn't a rule-based libero identifier." },
        { text: "They wear no number", correct: false, explanation: "The libero still wears a numbered jersey, just in a different color." },
      ],
    },
    {
      question: "Is the libero allowed to block?",
      answers: [
        { text: "No, never", correct: true, explanation: "Correct — blocking is completely off-limits for the libero." },
        { text: "Yes, at any time", correct: false, explanation: "Blocking is one of the libero's clearest restrictions." },
        { text: "Only against back-row attacks", correct: false, explanation: "The libero cannot block at all, regardless of the attack's origin." },
        { text: "Only in the deciding set", correct: false, explanation: "This restriction applies in every set." },
      ],
    },
    {
      question: "What special substitution benefit does the libero have?",
      answers: [
        { text: "They can sub for back-row players without using up normal substitutions", correct: true, explanation: "Correct — this is what makes libero substitutions so frequent." },
        { text: "They never need to be substituted at all", correct: false, explanation: "Libero substitutions still happen — they're just not counted the same way." },
        { text: "They can substitute for front-row attackers freely", correct: false, explanation: "The libero substitution rule specifically covers back-row players." },
        { text: "They can play for either team", correct: false, explanation: "A libero belongs to one team only." },
      ],
    },
    {
      question: "Which contact does the setter usually take during a rally?",
      answers: [
        { text: "The second contact", correct: true, explanation: "Correct — pass, set, attack is the classic order." },
        { text: "Always the first contact", correct: false, explanation: "The first contact is typically a pass or dig from another player." },
        { text: "Always the third contact", correct: false, explanation: "The third contact is usually the attack, not the set." },
        { text: "Only the serve", correct: false, explanation: "Serving is a separate action from the setter's main job." },
      ],
    },
    {
      question: "What is a '5-1' offensive system?",
      answers: [
        { text: "A system with a single setter on court in every rotation", correct: true, explanation: "Correct — 5 other players plus 1 dedicated setter." },
        { text: "A system with five setters and one attacker", correct: false, explanation: "That reverses the actual meaning of a 5-1 system." },
        { text: "A rule allowing 5 substitutions per set", correct: false, explanation: "This isn't about substitution counts." },
        { text: "A serving order used only in the fifth set", correct: false, explanation: "The '5-1' label isn't tied to a specific set number." },
      ],
    },
    {
      question: "Which zone does the Middle Blocker mainly play in?",
      answers: [
        { text: "Zone 3", correct: true, explanation: "Correct — Zone 3 is the center front zone, right at the net." },
        { text: "Zone 1", correct: false, explanation: "Zone 1 is a back-row serving zone." },
        { text: "Zone 5", correct: false, explanation: "Zone 5 is a back-row zone." },
        { text: "Zone 6", correct: false, explanation: "Zone 6 is the back-middle zone." },
      ],
    },
    {
      question: "Why do teams often substitute a libero in for the middle blocker in the back row?",
      answers: [
        { text: "Backcourt defense usually isn't the middle blocker's strongest skill", correct: true, explanation: "Correct — this swap strengthens the team's back-row defense." },
        { text: "Middle blockers are not allowed in the back row by rule", correct: false, explanation: "There's no such rule — this substitution is a tactical choice." },
        { text: "The middle blocker must rest every rotation", correct: false, explanation: "This isn't a mandatory rest rule." },
        { text: "The libero and middle blocker must always swap by rule", correct: false, explanation: "This substitution is optional strategy, not a fixed rule." },
      ],
    },
    {
      question: "What is a Serving Specialist substituted in to do?",
      answers: [
        { text: "Deliver one specific, tactical serve", correct: true, explanation: "Correct — that single serve is the entire purpose of the substitution." },
        { text: "Play the rest of the set at outside hitter", correct: false, explanation: "That would make them an outside hitter, not a serving specialist." },
        { text: "Take over as libero for the rest of the match", correct: false, explanation: "The libero is a separate, ongoing role, not a one-serve substitution." },
        { text: "Referee the next rally", correct: false, explanation: "Officiating is done by referees, not substituted players." },
      ],
    },
    {
      question: "Why does the serving specialist role exist as a separate tactic?",
      answers: [
        { text: "Because serving is a standalone skill, separate from attacking or passing", correct: true, explanation: "Correct — a great server doesn't need to excel at everything else too." },
        { text: "Because the rules require every team to use one", correct: false, explanation: "Using a serving specialist is a coaching choice, not a rule requirement." },
        { text: "Because only certain players are legally allowed to serve", correct: false, explanation: "Any player in the correct rotation position may serve." },
        { text: "Because serving specialists must wear the libero's jersey", correct: false, explanation: "That distinct-jersey rule applies to the libero, not a serving specialist." },
      ],
    },
    {
      question: "What is a Defensive Specialist's main purpose on court?",
      answers: [
        { text: "Strengthening back-row passing and digging", correct: true, explanation: "Correct — this mirrors the libero's purpose, through a normal substitution." },
        { text: "Delivering one tactical serve only", correct: false, explanation: "That describes a serving specialist, a different role." },
        { text: "Blocking at the net", correct: false, explanation: "Defensive specialists play in the back row, not blocking at the net." },
        { text: "Running the offense as a second setter", correct: false, explanation: "Setting is a separate role from a defensive specialist's job." },
      ],
    },
    {
      question: "What is the main rules difference between a libero and a defensive specialist?",
      answers: [
        { text: "The libero has unlimited special substitutions and unique restrictions; the DS does not", correct: true, explanation: "Correct — this is the core distinction between the two roles." },
        { text: "The defensive specialist can block, but the libero cannot", correct: false, explanation: "Blocking rules aren't the defining difference here." },
        { text: "The libero must serve every rotation", correct: false, explanation: "There's no such serving requirement for the libero." },
        { text: "The defensive specialist cannot play during serve-receive", correct: false, explanation: "Serve-receive is exactly when a defensive specialist is most useful." },
      ],
    },
    {
      question: "Which zones make up the front row?",
      answers: [
        { text: "Zones 2, 3 and 4", correct: true, explanation: "Correct — these three zones sit closest to the net." },
        { text: "Zones 1, 5 and 6", correct: false, explanation: "Those three zones make up the back row." },
        { text: "Zones 1, 2 and 3", correct: false, explanation: "This mixes a back-row zone (1) with front-row zones." },
        { text: "Zones 3, 4 and 5", correct: false, explanation: "This mixes front-row zones with a back-row zone (5)." },
      ],
    },
    {
      question: "What can front-row players do that back-row players cannot?",
      answers: [
        { text: "Block at the net and attack above net height from anywhere", correct: true, explanation: "Correct — these are the two defining front-row privileges." },
        { text: "Serve the ball", correct: false, explanation: "Serving depends on rotation slot, not row status generally." },
        { text: "Touch the ball at all", correct: false, explanation: "Back-row players touch the ball constantly too." },
        { text: "Substitute freely without a signal", correct: false, explanation: "Substitution procedures are the same regardless of row." },
      ],
    },
    {
      question: "When can a back-row player legally attack the ball above net height?",
      answers: [
        { text: "Only if they jump from behind the 3 m attack line", correct: true, explanation: "Correct — take-off position is what makes this legal." },
        { text: "At any time, from anywhere on the court", correct: false, explanation: "That freedom belongs only to front-row players." },
        { text: "Only during their team's own serve", correct: false, explanation: "This rule applies throughout the rally, not tied to serving." },
        { text: "Never, under any circumstance", correct: false, explanation: "They can, specifically when taking off from behind the attack line." },
      ],
    },
    {
      question: "In which order do players rotate through the zones?",
      answers: [
        { text: "1 to 2, 2 to 3, 3 to 4, 4 to 5, 5 to 6, 6 to 1", correct: true, explanation: "Correct — this is the fixed clockwise rotation order." },
        { text: "1 to 6, 6 to 5, 5 to 4, 4 to 3, 3 to 2, 2 to 1", correct: false, explanation: "That reverses the actual rotation direction." },
        { text: "A random order chosen by the coach each time", correct: false, explanation: "Rotation follows a fixed order, not a random one." },
        { text: "Only front-row players rotate", correct: false, explanation: "All six players rotate together." },
      ],
    },
    {
      question: "Do specific roles like 'setter' or 'libero' change when the team rotates?",
      answers: [
        { text: "No — the role stays with the player, but their zone (and row) changes", correct: true, explanation: "Correct — rotation moves players through zones, not through roles." },
        { text: "Yes, roles are reassigned randomly every rotation", correct: false, explanation: "Roles are fixed to specific players for the match." },
        { text: "Yes, the setter becomes the libero after each rotation", correct: false, explanation: "These are separate, unrelated roles that don't swap through rotation." },
        { text: "Yes, but only during the deciding set", correct: false, explanation: "Roles don't change due to rotation in any set." },
      ],
    },
  ],
};

/**
 * Builds the course structure. Chapters 1–2 use the real content above;
 * Chapters 3–8 remain placeholder-only until their content is written.
 */
function buildChapters() {
  const chapters = [];

  for (let c = 1; c <= TOTAL_CHAPTERS; c++) {
    if (c === 1) {
      chapters.push({
        id: 1,
        title: "Volleyball Basics",
        summary: "The court, the flow of a rally, and the core rules every player needs first.",
        lessons: [...CHAPTER_1_LESSONS, CHAPTER_1_TEST],
      });
      continue;
    }

    if (c === 2) {
      chapters.push({
        id: 2,
        title: "Player Positions",
        summary: "The six on-court roles, what each one does, and how they rotate together.",
        lessons: [...CHAPTER_2_LESSONS, CHAPTER_2_TEST],
      });
      continue;
    }

    const lessons = [];
    for (let l = 1; l <= LESSONS_PER_CHAPTER; l++) {
      lessons.push({
        id: l,
        title: `Lesson ${l}`,
        summary: 'Lesson description placeholder.',
        durationMin: 6,
      });
    }

    chapters.push({
      id: c,
      title: `Chapter ${c}`,
      summary: 'Chapter description placeholder — the topic scope will appear here.',
      lessons,
    });
  }

  return chapters;
}

const CHAPTERS = buildChapters();

/** Returns a chapter object by id, or null. */
function getChapter(chapterId) {
  return CHAPTERS.find((c) => c.id === Number(chapterId)) || null;
}

/** Returns a lesson object (plus parent chapter) by chapter/lesson id. */
function getLesson(chapterId, lessonId) {
  const chapter = getChapter(chapterId);
  if (!chapter) return null;
  const lesson = chapter.lessons.find((l) => l.id === Number(lessonId));
  if (!lesson) return null;
  return { chapter, lesson };
}

/** Total lessons across all chapters (chapter 1 has an extra Chapter Test lesson). */
const TOTAL_LESSONS = CHAPTERS.reduce((sum, c) => sum + c.lessons.length, 0);
