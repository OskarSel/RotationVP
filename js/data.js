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

/**
 * Builds the course structure. Chapter 1 uses the real content above;
 * Chapters 2–8 remain placeholder-only until their content is written.
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
