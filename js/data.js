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
      "The playing surface itself matters too. Indoor courts use a matte, non-reflective floor — wood or a synthetic equivalent — so players can read the ball's flight without glare, and official venues require a minimum ceiling clearance above the court (commonly around 7 metres in top-level competition) so that high serves and attacks are never obstructed indoors.",
      "The two net posts sit outside the sidelines, not on them, so a player's arm or the ball can pass near the sideline without hitting the post structure itself. Cables or a winch mechanism tension the net between the posts, and the antennas are fixed to the outer edge of the net directly above each sideline.",
      "Just outside the free zone, teams have a bench area and a substitution zone — a small marked section beside the scorer's table, roughly level with the attack line, where players wait to enter the game. It's a small detail, but it keeps substitutions organized and quick.",
      "It helps to have a physical sense of scale: 9 metres is roughly the width of two adjoining doubles badminton courts side by side, and 18 metres end to end is long enough that a hard-driven serve from one end line still takes a fraction of a second to reach the other. That combination of width and depth is exactly why positioning and footwork matter so much later in this course.",
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
      "Every line on the court is required to be a standard width (5 cm), and — as you'll see in a later lesson — that width is actually part of the playing surface: a ball touching any part of a line counts as landing inside the court, not outside it.",
      "The service zone technically has no fixed depth in most competition rules — it extends backward from the end line as far as the free zone allows, bounded only by its width, which matches the 9 m width of the court between the imaginary extensions of the two sidelines.",
      "The six zones aren't just a labeling convenience for spectators — they're enforced before every serve. Each player must be positioned correctly relative to their immediate neighbors in the rotation (for example, a back-row player must stay behind their same-side front-row teammate). Standing out of order at that moment is a positional fault, even if it wouldn't otherwise affect play.",
      "As a concrete example: if a team's server is about to serve from Zone 1, their teammates fan out with two more players across the front zone (Zones 4, 3 and 2, left to right) and two more filling out the back zone (Zones 5 and 6), completing the six-zone formation before the serve is struck.",
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
      "During a rally, the first and second referees continuously watch for faults but usually let play continue uninterrupted — they only blow the whistle once a fault has actually occurred or the ball has clearly become dead. Line judges assist by signaling in/out calls with flags at the corners of the court.",
      "Teams don't switch ends of the court after every rally — only between sets (and partway through a deciding set, once a team reaches a set-point threshold). Within a set, players simply reset to their rotation positions and the next serve begins.",
      "Communication is constant during a rally: players call out who is playing the ball, warn teammates that it's drifting out, or call for a switch in defensive coverage. A well-organized team often wins simply because they talk through the rally more clearly than their opponents do.",
      "Because every rally under modern scoring directly produces a point, there's no such thing as a 'meaningless' rally — even a short exchange that ends in an unforced error still hands the opponent a point, which is part of why consistency matters just as much as flashy attacking.",
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
      "When a team is one point away from winning a set, that's called 'set point'; when they're one point away from winning the whole match, it's 'match point.' A team can face — and survive — several set or match points in a row before finally closing it out.",
      "Beyond timeouts called by coaches (each team is normally allowed a limited number of short timeouts per set, often two), some competitions also use short technical timeouts partway through the first four sets, giving both teams a brief pause to regroup — though the exact rules on this vary by competition.",
      "A match can end in a clean sweep — winning the first three sets outright (3-0) — or go the full distance to a deciding 5th set if the two teams split the first four. A sweep usually says a lot about a mismatch in form on the day, while a five-set match tends to come down to a handful of close moments.",
      "Because so much rides on just a handful of points at the end of a close set, players are taught to treat every single rally with the same focus whether the score is 5-5 or 24-23 — a rule that's easy to say and hard to actually do under pressure.",
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
      "Once a team's starting rotation order is set at the beginning of a set, it stays fixed for that entire set — the same six players always serve in the same relative order, even as they rotate through different zones.",
      "After the referee whistles for serve, the server has a limited window (commonly around 8 seconds) to actually contact the ball. Waiting too long past that window is itself a fault, just like stepping on the line.",
      "While the server prepares, the receiving team must also already be in their correct rotation order — this is checked at the moment the ball is contacted, not before, which is why teams often shift into their real defensive shape only at the last instant to disguise their formation.",
      "A serve that lands untouched by the opponent for an immediate point is called an ace — one of the cleanest ways to win a rally, since it skips the entire back-and-forth of digging, setting and attacking altogether.",
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
      "A related but separate fault is called a 'carry' or a lift — contacting the ball in a way that visibly holds, pushes or scoops it rather than striking it cleanly. This isn't about how many times the ball was touched, but about the quality of a single contact, and it's judged independently of the three-contact count.",
      "If two teammates touch the ball at the exact same moment — for example, both going for the same ball and making contact together — that's treated as a single contact for the team, not two, so it doesn't burn an extra touch from their allowance.",
      "A single contact is also allowed to involve more than one part of a player's body — for instance, the ball glancing off a forearm and a shoulder in one continuous action — as long as those touches happen essentially simultaneously and aren't a deliberate double action.",
      "Coaches drill the dig-set-attack sequence specifically because it lets a team use their full three-contact allowance to convert a difficult first touch into a controlled, purposeful attack, rather than just batting the ball back over the net in a panic.",
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
      "In lower-level or recreational games without line judges, the second referee, or sometimes the players themselves, may be asked to make in/out calls near the far sideline — one reason officiating experience matters more at higher levels of competition, since a call missed from the wrong angle can decide a rally.",
      "The same antenna principle applies to a serve: if a serve travels over the net but drifts outside the vertical plane of the antenna before crossing to the other side, it's called out, even though the ball never touched anything and, from some angles, looked like a perfectly normal serve.",
      "Because dust, chalk, or a slight scuff can sometimes be left on the floor or line, officials at some levels are trained to check for a visible mark as supporting evidence on a disputed call — though the referee's direct view of the landing is always the primary basis for the ruling, not the mark itself.",
      "Some competitions use an electronic review system, sometimes called a challenge, that lets a team request a slow-motion video check of a close in/out call, within a limited number of challenges per set — a modern equivalent of what line judges have always been there to help decide.",
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
      "A common point of confusion is what counts as 'the net' for this rule: only the mesh and the tape bands running along its top and bottom edges are restricted. Incidental contact with the net posts standing outside the court isn't judged the same way, since the posts aren't part of the net itself.",
      "The net-touch rule is specifically about interference during active play. If the ball has already touched the floor and the rally is clearly over, brushing the net afterward — for instance while stopping your own momentum — isn't penalized the same way, because there's nothing left to interfere with.",
      "Blocking is restricted to front-row players precisely because of the front-row/back-row split you'll see in the next lesson: a back-row player who reaches above the net to block, even in a genuine attempt to stop the ball, commits a fault just for being in that position at that moment, regardless of whether they touch the ball.",
      "In practice, many centerline faults happen not because a player deliberately tries to cross, but because their momentum carries them forward after an aggressive attack or a dive — which is why players are coached to control their landing and finish their motion on their own side whenever possible.",
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
      "It helps to think of the front-row/back-row split as being about proximity to the net at that moment, not about a player's assigned position name — a player known as an outside hitter is only restricted by the back-row attacking rule while rotation has actually placed them in the back row, and is free of that restriction once rotation brings them forward again.",
      "The back-row attack rule specifically cares about where a player's feet leave the floor, not where they land. A back-row player can jump from well behind the attack line, drift forward in the air, and still legally hit the ball above net height, because the take-off point is what officials judge.",
      "This is also why the libero — a specialized back-row defensive player you'll meet properly in Chapter 2 — is never allowed to attack the ball above net height from anywhere on the court, a stricter limitation than the ordinary back-row rule that applies to everyone else.",
      "Because rotation constantly cycles players between the front row and back row, a good team needs every player capable of at least the basic back-row skills — serving, passing, and defense — even when their main strength lies in front-row hitting or blocking.",
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
      "If any of the questions below feel harder than the ones in earlier lessons, that's intentional — mixing topics together is a better test of real understanding than testing them one at a time, and it's much closer to how you'll actually need to apply these rules while watching or playing a match.",
      "Take your time rather than rushing through it. Getting a question wrong here is a useful signal about which lesson is worth a quick second look, not a setback — that's exactly what a knowledge check is for.",
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
      "Because the OH attacks from a wide angle near the sideline, they can hit the ball down the line (close to the sideline, hugging the boundary) or cross-court toward the middle of the opponent's court, and switching between the two keeps blockers guessing about which direction is coming next.",
      "A tall, aggressive block is one of the biggest challenges an outside hitter faces, so many develop a secondary shot alongside the hard-driven spike: a soft, well-placed tip or roll shot that drops just past the blockers' hands into open floor.",
      "On serve-receive, the outside hitters usually take a large share of the passing responsibility alongside the libero, since a team generally wants its most dependable ball-handlers, not necessarily its tallest players, absorbing the first contact against a fast opposing serve.",
      "Because most sets in a rotation default toward Zone 4 when a play breaks down, opposing coaches often instruct their middle blocker to lean slightly toward that side as a rally gets scrappy, which is part of why a team's second, less-obvious attacking option still matters even when the OH is the priority.",
    ],
    keyTakeaway: "The Outside Hitter attacks mainly from Zone 4, carries a large share of a team's offense, and also passes and digs when rotated to the back row.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The setter delivers the ball to the Outside Hitter (OH) near the left antenna, who approaches, jumps, and attacks it back over the net.",
      activeZones: [4],
      labels: { 4: "OH" },
      motions: { 4: { dx: 0, dy: -16 } },
      ball: { path: [{ x: 50, y: 24 }, { x: 18, y: 8 }, { x: 30, y: -10 }] },
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
      "Because the OP so often finds themselves setting in an emergency, many teams practice this scenario deliberately, having the opposite hitter run set-drills during training even though setting isn't their primary job — a bad emergency set can waste a rally just as easily as a bad pass can.",
      "The OP also tends to face the opposing team's strongest blocker more often than other attackers do, since a well-coached opponent usually assigns their best blocking middle to help out on the right side specifically to slow the opposite hitter down.",
      "In many modern lineups, the opposite hitter is asked to be a genuine offensive equal to the outside hitter rather than a purely secondary option, which has made the position increasingly demanding: teams now often look for opposites who combine strong back-row attacking with front-row blocking, rather than picking one specialty and neglecting the other.",
      "Serve-receive responsibilities for the OP are usually lighter than for an outside hitter or libero, since when they're in the back row they're often kept further from the middle of the serve-receive formation, freeing them to focus on transitioning quickly into an attacking approach.",
    ],
    keyTakeaway: "The Opposite Hitter attacks mainly from Zone 2, sits opposite the setter in the rotation, and often becomes the emergency setter or a back-row attacking threat.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The setter delivers the ball to the Opposite Hitter (OP) near the right antenna, who approaches, jumps, and attacks it back over the net.",
      activeZones: [2],
      labels: { 2: "OP" },
      motions: { 2: { dx: 0, dy: -16 } },
      ball: { path: [{ x: 50, y: 24 }, { x: 82, y: 8 }, { x: 70, y: -10 }] },
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
      "The libero substitution itself is also unusual: it doesn't have to happen at the moment of a normal rotation, and it isn't tracked as one of a team's limited regular substitutions. Instead, the libero typically swaps in and out with the same back-row player at a consistent point in the rotation order, which is why once you know a team's pattern, you can often predict exactly when the libero will appear or disappear.",
      "Some competitions allow a second libero to be registered for a match, so if the first libero is injured or simply not performing well, the coach has a specialist backup rather than having to fall back on a regular back-row player for defense.",
      "Even though the libero can set the ball with an overhand pass like anyone else, there's an added restriction: if they set from inside the front zone (in front of the attack line), the ball they set cannot then be attacked above net height by a teammate. Setting from behind the attack line removes that restriction entirely.",
      "Because the libero touches the ball on defense so often, their passing consistency has an outsized effect on a team's overall offense — a clean dig or serve-receive from the libero gives the setter far more options than a scrambled, off-target one would.",
    ],
    keyTakeaway: "The Libero is a specialized back-row defender, identified by a different jersey, who can sub freely for back-row players but can never block or attack the ball above net height.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The Libero (L), in Zone 6, moves to dig a hard-driven ball arriving over the net, then controls it forward into a clean pass toward the setter.",
      activeZones: [6],
      labels: { 6: "L" },
      motions: { 6: { dx: -8, dy: -4 } },
      ball: { path: [{ x: 80, y: -8 }, { x: 42, y: 70 }, { x: 55, y: 38 }] },
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
      "Setters develop a handful of standard set types with names that tell hitters what to expect: a 'high ball' gives an attacker time to fully time their approach, while a 'quick' or 'shoot' set is delivered low and fast, aiming to beat the opposing block before it can fully form.",
      "A setter's body position when they contact the ball — facing the net square-on versus turned toward one antenna — gives away less information to the opposing blockers if it stays consistent no matter which hitter they're about to feed, which is part of why disguising intent is considered a real skill in setting.",
      "When the first pass is off-target, the setter has to decide instantly between their two remaining options: chase the ball down and still deliver a usable set, or, if it's truly unplayable, get it up softly for a teammate to take the second contact instead so the attack isn't lost entirely.",
      "Because setters touch the ball on almost every single rally their team plays, a setter with poor hands can quietly limit a team's whole offense — even world-class hitters struggle to score consistently off inaccurate sets.",
    ],
    keyTakeaway: "The Setter takes the second contact and delivers the ball to attackers, often sprinting from the back row to the net, and different offensive systems use one or two setters.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The Setter (S) starts in Zone 1 for serve-receive, sprints to the net, and sets the passed ball onward to a hitter near the left antenna.",
      activeZones: [1],
      labels: { 1: "S" },
      motions: { 1: { dx: -32, dy: -52 } },
      ball: { path: [{ x: 30, y: 85 }, { x: 50, y: 24 }, { x: 18, y: 12 }] },
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
      "Reading an offense means watching several cues at once: the pass quality, the setter's shoulders and hand position, and the approach of the other attackers, all in the split second before the ball is set — which is why experienced middle blockers often look like they're reacting before the set has even happened.",
      "Because they're constantly starting a block attempt on one side and then having to recover to help on the other, middle blockers often log more total lateral movement during a match than any other position, even though their footprint on the court looks small on paper.",
      "A double block — the middle blocker joining an outside or opposite hitter's block attempt at the antenna — is one of the most effective defensive tools in the sport, but it depends entirely on the middle getting there in time, which puts even more pressure on their first-step quickness.",
      "Many teams also use their middle blocker to close a rotation's biggest defensive gap: if a particular lineup leaves a soft spot between two other blockers, the middle is often the one whose footwork is trusted to cover it under pressure.",
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
      "A float serve gets its name from the way the ball moves: struck with almost no spin, it wobbles unpredictably through the air, which makes it deceptively hard to judge even though it usually travels slower than a jump serve.",
      "Coaches sometimes use serving specialists in a run of consecutive substitutions right after a timeout, specifically to target a weaker passer on the opponent's side while the receiving team's rotation briefly lines that player up to take the serve.",
      "Because a serve is the one action in volleyball that a player performs with no interference at all from the opposing team, it's also the moment where a specialist's practiced routine and consistency matter most — small technical habits, repeated the same way every time, tend to separate a reliable server from an erratic one.",
      "Even though the substitution is often brief, using a serving specialist still uses up one of the team's regular substitutions for that set, so coaches have to weigh the tactical benefit of the tougher serve against having fewer substitutions left for later in the set.",
    ],
    keyTakeaway: "A Serving Specialist is substituted in purely to deliver one strong, tactical serve, using serving as a standalone skill rather than an all-around playing role.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The Serving Specialist (SV) enters just to serve from behind the end line, sending the ball on a low, fast path across the net.",
      activeZones: [1],
      labels: { 1: "SV" },
      motions: { 1: { dx: 0, dy: 2 } },
      ball: { path: [{ x: 82, y: 70 }, { x: 20, y: -14 }] },
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
      "Because the substitution counts against the normal limit, a coach bringing in a defensive specialist is making a real trade-off — spending one of a limited number of substitutions for that set in exchange for stronger back-row defense at a specific moment.",
      "A defensive specialist is sometimes brought in for just one rotation, to cover a single weaker passer, and then swapped back out once that player's turn in the back row has passed and the original player returns.",
      "Because they aren't restricted the way a libero is, a defensive specialist who's also a capable back-row attacker can add an extra scoring threat that the libero, restricted from ever attacking above net height, simply isn't allowed to provide.",
      "Some teams intentionally develop players specifically for this role, valuing composure and consistent ball control under pressure over the raw attacking or blocking skills that headline other positions.",
    ],
    keyTakeaway: "A Defensive Specialist strengthens back-row defense like a libero, but as a normal substitution — it counts against the substitution limit, and none of the libero's special restrictions apply.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The Defensive Specialist (DS), in Zone 5, shifts across to dig an angled attack arriving over the net and keep the rally alive.",
      activeZones: [5],
      labels: { 5: "DS" },
      motions: { 5: { dx: 10, dy: -6 } },
      ball: { path: [{ x: 62, y: -8 }, { x: 26, y: 68 }, { x: 45, y: 40 }] },
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
      "Front-row players also share a specific defensive burden that back-row players don't face: covering the tip or roll shot. When a teammate blocks, the ball can rebound in unpredictable directions right around the net, so front-row players often have to be ready to scramble for a short recovery ball the instant their block attempt is finished.",
      "Coordinating a block between two or three front-row players adds another layer of difficulty: blockers need to close any gap between their hands so an attacker can't simply thread the ball through the seam, which takes practiced communication about who's responsible for which part of the net.",
      "Because all three front-row players can attack, opposing blockers who focus too heavily on defending just one of them leave the other two more open, which is why a well-run offense tries to keep all three genuinely live options rather than relying on a single go-to hitter.",
      "The attack line running 3 metres from the net doesn't restrict front-row players at all — it only matters for back-row attacks — so a front-row player can take off from anywhere between that line and the net itself when going up for an attack.",
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
      ball: { path: [{ x: 50, y: -8 }, { x: 50, y: 14 }, { x: 32, y: -10 }] },
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
      "Positioning matters as much as reaction speed for back-row defense: teams typically shade their back-row players toward whichever side of the court the opponent's set is heading, since anticipating where an attack is likely to go gives a defender a head start that pure reflexes can't make up on their own.",
      "During serve-receive specifically, back-row players usually split the court into overlapping zones of responsibility so that no server can find an obvious gap between two passers, and so any one of them can call for and take a serve heading toward the border between their zones.",
      "A well-executed dig doesn't need to be pretty — the goal is simply to keep the ball alive and controlled enough that a teammate can turn it into a real second contact, even if that means the ball pops up awkwardly off a forearm rather than a smooth, textbook platform.",
      "Because back-row players can't block, they instead rely on reading where a blocked or deflected ball is likely to land, positioning themselves to cover the specific angles a block leaves open rather than trying to guard the whole court at once.",
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
      ball: { path: [{ x: 50, y: -8 }, { x: 50, y: 70 }] },
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
      "Because the specialized substitutions you've learned about — the libero, the serving specialist, the defensive specialist — layer on top of this same six-zone rotation, they don't replace the rotation system, they work within it, swapping in and out for specific players at specific points in that cycle.",
      "Knowing a team's rotation lets a careful observer predict quite a lot before a rally even starts: which side the strongest attacker will hit from, whether the setter is currently front row or back row, and which zone is most likely to be targeted by an opposing serve looking to create a weaker passing shape.",
      "This is also why a single strong or weak rotation can matter so much in a close set — depending on exactly which six players are grouped together at a given moment, a team's blocking, serving, and attacking strength can shift noticeably from one rotation to the next.",
      "With the fundamentals from Chapter 1 and these six roles from Chapter 2 in place, you now have the vocabulary and structure needed to actually watch a match and follow what's happening — which position is doing what, why a substitution was made, and how the team in front of you is trying to win the next rally.",
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

/* ---------------------------------------------------------------------- */
/* Chapter 3 — Rotations (real content)                                    */
/* ---------------------------------------------------------------------- */

const CHAPTER_3_LESSONS = [
  {
    id: 1,
    title: "The Six Court Positions",
    summary: "The six numbered zones every player rotates through, and the front-row/back-row split.",
    durationMin: 7,
    theory: [
      "Every volleyball team has six players on court at once, and each of them stands in one of six numbered zones. These zones aren't random — they form a fixed map of the court that every team, at every level, uses the same way, which is exactly why officials, coaches and players can all talk about 'Zone 4' or 'Zone 1' and mean the same spot.",
      "Zones 2, 3 and 4 sit in the front row, closest to the net: Zone 4 on the left (from the server's perspective), Zone 3 in the middle, and Zone 2 on the right. Zones 5, 6 and 1 make up the back row, further from the net: Zone 5 on the back left, Zone 6 in the back middle, and Zone 1 on the back right — which is also where the serve is hit from.",
      "This front-row/back-row split isn't just geography — it decides what a player is legally allowed to do at that moment. Front-row players may block and attack the ball above net height from anywhere, while back-row players may never block and can only attack above net height if they jump from behind the 3 m attack line.",
      "A player's zone is not a fixed job assignment — it's a snapshot of where their rotation has placed them right now. The same player will pass through all six zones over the course of a set, spending part of the set in the front row and part in the back row, which is exactly what the next lessons in this chapter build on.",
      "Getting comfortable naming the six zones by number, and instantly knowing whether a given zone is front row or back row, is the single most useful habit for understanding everything else about rotations — nearly every rule in this chapter is stated in terms of these zone numbers.",
    ],
    keyTakeaway: "The court is divided into six numbered zones — 4, 3, 2 in the front row and 5, 6, 1 in the back row — and every rule about what a player may do depends on which of these zones they're currently standing in.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The six zones of the court: the front row (Zones 4, 3, 2) sits closest to the net, and the back row (Zones 5, 6, 1) sits deeper, further from the net.",
      activeZones: [4, 3, 2, 5, 6, 1],
      labels: { 4: "4", 3: "3", 2: "2", 5: "5", 6: "6", 1: "1" },
      motions: {
        4: { dx: 0, dy: -4 },
        3: { dx: 0, dy: -4 },
        2: { dx: 0, dy: -4 },
        5: { dx: 0, dy: 4 },
        6: { dx: 0, dy: 4 },
        1: { dx: 0, dy: 4 },
      },
      ball: null,
    },
    quiz: [
      {
        question: "How many numbered zones does a volleyball court's rotation system use?",
        answers: [
          { text: "Six", correct: true, explanation: "Correct — one zone for each of the six players on court." },
          { text: "Four", correct: false, explanation: "Four would leave two players without a numbered position." },
          { text: "Eight", correct: false, explanation: "Eight is more zones than there are players on court." },
          { text: "Five", correct: false, explanation: "Five doesn't match the six players a team fields." },
        ],
      },
      {
        question: "Which zones make up the front row?",
        answers: [
          { text: "Zones 4, 3 and 2", correct: true, explanation: "Correct — these three zones sit closest to the net." },
          { text: "Zones 5, 6 and 1", correct: false, explanation: "Those three zones make up the back row instead." },
          { text: "Zones 1, 2 and 3", correct: false, explanation: "This mixes a back-row zone (1) with front-row zones." },
          { text: "Zones 3, 4 and 5", correct: false, explanation: "This mixes front-row zones with a back-row zone (5)." },
        ],
      },
      {
        question: "Which zone is in the back-right, and also where serves are hit from?",
        answers: [
          { text: "Zone 1", correct: true, explanation: "Correct — Zone 1 is the back-right zone and the serving position." },
          { text: "Zone 4", correct: false, explanation: "Zone 4 is the front-left zone, not where serves are hit from." },
          { text: "Zone 6", correct: false, explanation: "Zone 6 is the back-middle zone." },
          { text: "Zone 2", correct: false, explanation: "Zone 2 is the front-right zone." },
        ],
      },
      {
        question: "Which zone sits in the middle of the front row?",
        answers: [
          { text: "Zone 3", correct: true, explanation: "Correct — Zone 3 is the front-middle zone, right at the net." },
          { text: "Zone 6", correct: false, explanation: "Zone 6 is the back-middle zone, not the front row." },
          { text: "Zone 2", correct: false, explanation: "Zone 2 is on the front-right, not the middle." },
          { text: "Zone 4", correct: false, explanation: "Zone 4 is on the front-left, not the middle." },
        ],
      },
      {
        question: "What determines whether a player may legally block at a given moment?",
        answers: [
          { text: "Whether they are currently in a front-row zone", correct: true, explanation: "Correct — blocking is a front-row-only privilege." },
          { text: "How tall the player is", correct: false, explanation: "Height isn't what the rule is based on — court position is." },
          { text: "Which zone they started the set in", correct: false, explanation: "It's their current zone that matters, not where they began the set." },
          { text: "Whether they are the team captain", correct: false, explanation: "Team leadership has no bearing on this rule." },
        ],
      },
      {
        question: "Is a player's zone a fixed job for the whole set?",
        answers: [
          { text: "No — rotation moves every player through all six zones over the set", correct: true, explanation: "Correct — a zone is a snapshot of the current moment, not a fixed assignment." },
          { text: "Yes, each player stays in one zone the entire set", correct: false, explanation: "Rotation continually moves players between zones." },
          { text: "Yes, but only for the setter", correct: false, explanation: "Every player, including the setter, moves through all six zones." },
          { text: "No, but only front-row players change zones", correct: false, explanation: "Back-row players rotate through zones too." },
        ],
      },
      {
        question: "Which zones make up the back row?",
        answers: [
          { text: "Zones 5, 6 and 1", correct: true, explanation: "Correct — these three zones sit furthest from the net." },
          { text: "Zones 2, 3 and 4", correct: false, explanation: "Those three zones make up the front row instead." },
          { text: "Zones 1, 2 and 6", correct: false, explanation: "This mixes a front-row zone (2) with back-row zones." },
          { text: "Zones 4, 5 and 6", correct: false, explanation: "This mixes a front-row zone (4) with back-row zones." },
        ],
      },
      {
        question: "Which zone is on the front-left of the court?",
        answers: [
          { text: "Zone 4", correct: true, explanation: "Correct — Zone 4 is the front-left zone." },
          { text: "Zone 5", correct: false, explanation: "Zone 5 is the back-left zone, not the front row." },
          { text: "Zone 2", correct: false, explanation: "Zone 2 is on the front-right, the opposite side." },
          { text: "Zone 1", correct: false, explanation: "Zone 1 is the back-right zone." },
        ],
      },
      {
        question: "Why do all teams use the same six zone numbers?",
        answers: [
          { text: "So players, coaches and officials can all refer to the same spot on court the same way", correct: true, explanation: "Correct — it's a shared, standard reference system." },
          { text: "Because the rules require exactly six players to have exactly six favorite numbers", correct: false, explanation: "The numbering is about shared communication, not personal preference." },
          { text: "Because zone numbers change every match", correct: false, explanation: "The zone map is fixed and doesn't change match to match." },
          { text: "Because only the referee needs to know the zone numbers", correct: false, explanation: "Players and coaches rely on this shared system constantly, not just officials." },
        ],
      },
      {
        question: "Which zone is on the back-left of the court?",
        answers: [
          { text: "Zone 5", correct: true, explanation: "Correct — Zone 5 is the back-left zone." },
          { text: "Zone 4", correct: false, explanation: "Zone 4 is the front-left zone, not the back row." },
          { text: "Zone 1", correct: false, explanation: "Zone 1 is the back-right zone, the opposite side." },
          { text: "Zone 6", correct: false, explanation: "Zone 6 is the back-middle zone." },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Rotation Order",
    summary: "The fixed clockwise order every team's players move through as they rotate.",
    durationMin: 7,
    theory: [
      "Rotation follows one fixed direction: clockwise through the six zones, in the order 1 → 2 → 3 → 4 → 5 → 6 → 1. Every team, in every match, rotates in exactly this order — there's no variation, no team-specific pattern, and no choice involved once a rotation is triggered.",
      "In practice, that means the player currently in Zone 1 moves to Zone 2, the player in Zone 2 moves to Zone 3, the player in Zone 3 moves to Zone 4, the player in Zone 4 moves to Zone 5, the player in Zone 5 moves to Zone 6, and the player in Zone 6 moves all the way around to Zone 1.",
      "All six players move at the same time, as a single unit — nobody rotates alone, and nobody skips a step. Whatever order the six players were standing in before the rotation, that same relative order is preserved; the whole formation simply shifts one zone around the circle.",
      "It helps to picture the six zones as positions on a clock face wrapped around the court: 1 and 2 on the right, 3 at the top-middle near the net, 4 and 5 on the left, and 6 at the bottom-middle. Moving 'clockwise' through that circle is exactly the 1-2-3-4-5-6-1 order described above.",
      "Because the rotation order never changes, a team's starting lineup — which player begins in which zone — determines every single rotation for the rest of that set. Coaches choose a starting lineup specifically because they know exactly how it will cycle through all six positions.",
    ],
    keyTakeaway: "Rotation always moves every player one zone in the same fixed direction — 1 to 2, 2 to 3, 3 to 4, 4 to 5, 5 to 6, and 6 back to 1 — with the whole team shifting together.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "When a team rotates, every player shifts one zone clockwise at the same time: 1 to 2, 2 to 3, 3 to 4, 4 to 5, 5 to 6, and 6 back to 1.",
      activeZones: [1, 2, 3, 4, 5, 6],
      labels: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6" },
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
        question: "In which direction do players rotate through the zones?",
        answers: [
          { text: "Clockwise: 1 to 2, 2 to 3, 3 to 4, 4 to 5, 5 to 6, 6 to 1", correct: true, explanation: "Correct — this fixed order never changes." },
          { text: "Counter-clockwise: 1 to 6, 6 to 5, and so on", correct: false, explanation: "That reverses the actual, fixed rotation direction." },
          { text: "Whichever direction the coach calls that rally", correct: false, explanation: "The direction is fixed by rule, not chosen per rally." },
          { text: "Randomly assigned each time a team rotates", correct: false, explanation: "Rotation always follows the same fixed clockwise order." },
        ],
      },
      {
        question: "When a team rotates, which player moves into Zone 1?",
        answers: [
          { text: "The player who was in Zone 6", correct: true, explanation: "Correct — Zone 6 rotates into Zone 1." },
          { text: "The player who was in Zone 2", correct: false, explanation: "Zone 2 rotates forward into Zone 3, not back into Zone 1." },
          { text: "The player who was already in Zone 1", correct: false, explanation: "That player moves on to Zone 2 during a rotation." },
          { text: "The player who was in Zone 4", correct: false, explanation: "Zone 4 rotates into Zone 5, not Zone 1." },
        ],
      },
      {
        question: "How many players move during a single team rotation?",
        answers: [
          { text: "All six", correct: true, explanation: "Correct — the entire team shifts together, all at once." },
          { text: "Only the front-row players", correct: false, explanation: "Back-row players rotate too, not just the front row." },
          { text: "Only one, chosen by the coach", correct: false, explanation: "Rotation moves every player, not a single chosen one." },
          { text: "Only the player about to serve", correct: false, explanation: "The whole team shifts, not just the new server." },
        ],
      },
      {
        question: "Does a rotation ever skip a zone?",
        answers: [
          { text: "No, each player always moves exactly one zone over", correct: true, explanation: "Correct — rotation always advances by exactly one zone." },
          { text: "Yes, players can skip ahead two zones at once", correct: false, explanation: "A rotation always moves players exactly one zone, never two." },
          { text: "Yes, if the team is losing", correct: false, explanation: "The score doesn't change how far a rotation moves players." },
          { text: "Only during the deciding set", correct: false, explanation: "The one-zone rule is the same in every set." },
        ],
      },
      {
        question: "What happens to the player who was in Zone 5 during a rotation?",
        answers: [
          { text: "They move to Zone 6", correct: true, explanation: "Correct — this follows the fixed clockwise order." },
          { text: "They move to Zone 4", correct: false, explanation: "That would be moving backward, against the rotation direction." },
          { text: "They stay in Zone 5", correct: false, explanation: "Every player moves during a rotation, including whoever is in Zone 5." },
          { text: "They move to Zone 1", correct: false, explanation: "Zone 5 moves to Zone 6 first, not directly to Zone 1." },
        ],
      },
      {
        question: "Why is it useful to picture the zones as a clock face around the court?",
        answers: [
          { text: "Because it makes the fixed clockwise rotation direction easy to visualize", correct: true, explanation: "Correct — the clock-face image matches the real rotation path." },
          { text: "Because the referee uses an actual clock during rotations", correct: false, explanation: "No clock is involved — it's just a helpful way to picture the direction." },
          { text: "Because rotations are timed to the game clock", correct: false, explanation: "Volleyball rotations aren't tied to any kind of timer." },
          { text: "Because zone numbers change based on the time of day", correct: false, explanation: "Zone numbers are fixed and never change." },
        ],
      },
      {
        question: "Does rotation ever change the relative order of the six players?",
        answers: [
          { text: "No — their order relative to each other stays the same, only the zones shift", correct: true, explanation: "Correct — the whole formation shifts together, preserving relative order." },
          { text: "Yes, players can swap places with any teammate during a rotation", correct: false, explanation: "Rotation shifts everyone by one zone — it isn't a free swap." },
          { text: "Yes, the coach can reorder players before each rotation", correct: false, explanation: "The rotation order is fixed once the set's lineup is set." },
          { text: "Yes, but only for the setter", correct: false, explanation: "No player, including the setter, changes the fixed rotation order." },
        ],
      },
      {
        question: "What decides how a team's rotation plays out for the rest of a set?",
        answers: [
          { text: "The starting lineup — which player begins in which zone", correct: true, explanation: "Correct — the fixed order means the starting lineup determines everything after it." },
          { text: "A new coin toss before each rotation", correct: false, explanation: "There's no repeated coin toss — only the starting lineup matters." },
          { text: "Whichever team is currently ahead on the scoreboard", correct: false, explanation: "The score doesn't affect the rotation order at all." },
          { text: "A vote among the six players", correct: false, explanation: "Rotation order is fixed by rule, not decided by player vote." },
        ],
      },
      {
        question: "If the player in Zone 3 rotates, which zone do they move to?",
        answers: [
          { text: "Zone 4", correct: true, explanation: "Correct — this follows the fixed clockwise order." },
          { text: "Zone 2", correct: false, explanation: "That would be moving backward, against the rotation direction." },
          { text: "Zone 6", correct: false, explanation: "Zone 3 moves to Zone 4 next, not straight to Zone 6." },
          { text: "Zone 1", correct: false, explanation: "Zone 3 is several steps away from Zone 1 in the rotation order." },
        ],
      },
      {
        question: "Is the clockwise rotation order the same for every team in every match?",
        answers: [
          { text: "Yes, it's a fixed rule with no variation between teams", correct: true, explanation: "Correct — every team rotates the same fixed way." },
          { text: "No, each team can choose their own rotation direction", correct: false, explanation: "The direction is fixed by rule, not a team choice." },
          { text: "No, it depends on which side of the net a team is on", correct: false, explanation: "Court side doesn't change the fixed rotation direction." },
          { text: "No, it changes between indoor and beach volleyball", correct: false, explanation: "This lesson covers indoor volleyball's fixed clockwise rule specifically." },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "When Does a Team Rotate?",
    summary: "The exact trigger that causes a rotation, and the situations where nothing rotates at all.",
    durationMin: 7,
    theory: [
      "A team rotates in exactly one situation: when they win the serve back from the opponent. This moment — going from not serving to serving — is called a side-out, and it's the only trigger for a rotation. The team that just won the right to serve rotates one position clockwise before their player serves.",
      "If the team that is currently serving wins the rally, the point is scored, but nothing rotates. The same player serves again, and the whole team stays exactly where it was for the next rally. Winning your own serve extends your turn — it doesn't advance the rotation.",
      "This means a single player can serve many times in a row during a hot streak, as long as their team keeps winning rallies. The rotation only turns over once that streak ends and the ball goes back to the other team, who then rotates before serving themselves.",
      "It's worth separating two things that happen on every rally: scoring a point and rotating. Under rally-point scoring, a point is scored on every single rally regardless of who served — but rotation only happens on the specific rallies where the serve changes hands.",
      "A simple way to check yourself: ask 'did the team that's about to serve just win the ball away from the other team?' If yes, that team rotates first. If a team is simply continuing to serve because they won their own serve, there is no rotation to think about at all.",
    ],
    keyTakeaway: "A team rotates only on a side-out — when they win the serve away from the opponent — and rotates before that next serve. Winning your own serve scores a point but triggers no rotation at all.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The player in Zone 1 serves. If the serving team wins the rally, nobody rotates and the same player serves again — rotation only happens on a side-out.",
      activeZones: [1],
      labels: { 1: "S" },
      motions: {},
      ball: { path: [{ x: 82, y: 70 }, { x: 20, y: -14 }] },
    },
    quiz: [
      {
        question: "What is the one trigger that causes a team to rotate?",
        answers: [
          { text: "Winning the serve back from the opponent (a side-out)", correct: true, explanation: "Correct — rotation only happens on a side-out." },
          { text: "Scoring any point, regardless of who served", correct: false, explanation: "Scoring alone doesn't trigger a rotation — only winning back the serve does." },
          { text: "The end of every three rallies", correct: false, explanation: "Rotation isn't tied to a fixed rally count." },
          { text: "A timeout being called", correct: false, explanation: "Timeouts don't affect rotation at all." },
        ],
      },
      {
        question: "If the serving team wins the rally, what happens to their rotation?",
        answers: [
          { text: "Nothing rotates — the same player serves again", correct: true, explanation: "Correct — winning your own serve doesn't trigger a rotation." },
          { text: "The whole team rotates one position", correct: false, explanation: "Rotation only happens on a side-out, not after a won serve." },
          { text: "Only the server rotates to the back row", correct: false, explanation: "There's no partial rotation — either the whole team rotates or nobody does." },
          { text: "The team rotates backward one position", correct: false, explanation: "Rotation never happens after a team wins its own serve." },
        ],
      },
      {
        question: "Can the same player serve multiple times in a row?",
        answers: [
          { text: "Yes, as long as their team keeps winning the rally", correct: true, explanation: "Correct — a winning streak on serve means no rotation, so the same server continues." },
          { text: "No, a different player must serve every single rally", correct: false, explanation: "The same server continues serving until their team loses a rally." },
          { text: "No, players must rotate every two rallies regardless of outcome", correct: false, explanation: "Rotation is tied to side-outs, not a fixed rally count." },
          { text: "Only if the coach requests a lineup change", correct: false, explanation: "This happens naturally from winning rallies, not a coach's request." },
        ],
      },
      {
        question: "Under rally-point scoring, is a point scored on every rally?",
        answers: [
          { text: "Yes, regardless of which team served", correct: true, explanation: "Correct — modern volleyball awards a point on every rally." },
          { text: "No, only the serving team can ever score", correct: false, explanation: "That describes old side-out-only scoring, not the current rally-point system." },
          { text: "No, points are only scored every other rally", correct: false, explanation: "Every rally results in a point for one team or the other." },
          { text: "Yes, but only in the deciding set", correct: false, explanation: "This applies in every set, not just the decider." },
        ],
      },
      {
        question: "Does scoring a point always mean a rotation also happens?",
        answers: [
          { text: "No — scoring and rotating are separate; rotation only happens on a side-out", correct: true, explanation: "Correct — every rally scores a point, but not every rally causes a rotation." },
          { text: "Yes, every scored point causes a rotation for someone", correct: false, explanation: "Only the specific rallies where serve changes hands cause a rotation." },
          { text: "Yes, but only for the team that lost the rally", correct: false, explanation: "The losing-serve team doesn't rotate — the newly-serving team does, and only on a side-out." },
          { text: "No, rotations and points are on completely unrelated schedules", correct: false, explanation: "They are related — rotation is triggered specifically by a side-out rally." },
        ],
      },
      {
        question: "Which team rotates when a side-out happens?",
        answers: [
          { text: "The team that just won the serve back", correct: true, explanation: "Correct — the team about to serve next is the one that rotates." },
          { text: "The team that just lost the rally and their serve", correct: false, explanation: "The team that lost serve does not rotate — the new server's team does." },
          { text: "Both teams rotate together", correct: false, explanation: "Only the team gaining the serve rotates; the other team stays as it is." },
          { text: "Neither team rotates on a side-out", correct: false, explanation: "A side-out is exactly the situation that does trigger a rotation." },
        ],
      },
      {
        question: "A team is currently serving and wins the next rally. Do they rotate before the following serve?",
        answers: [
          { text: "No, because they didn't just win the serve back — they already had it", correct: true, explanation: "Correct — only winning the serve away from the opponent triggers a rotation." },
          { text: "Yes, because they scored a point", correct: false, explanation: "Scoring alone, without a side-out, never triggers a rotation." },
          { text: "Yes, but only the server rotates", correct: false, explanation: "There's no rotation at all in this situation, partial or otherwise." },
          { text: "It depends on the current score", correct: false, explanation: "The score has no effect on whether a rotation happens." },
        ],
      },
      {
        question: "What quick question can you ask yourself to check whether a rotation should happen?",
        answers: [
          { text: "'Did the team about to serve just win the ball away from the other team?'", correct: true, explanation: "Correct — a 'yes' answer means a side-out just happened, which triggers rotation." },
          { text: "'How many points does the team have?'", correct: false, explanation: "Total score doesn't determine whether a rotation happens." },
          { text: "'Is it currently a deciding set?'", correct: false, explanation: "The rotation trigger is the same in every set." },
          { text: "'Has the team used all of its timeouts?'", correct: false, explanation: "Timeouts are unrelated to whether a rotation occurs." },
        ],
      },
      {
        question: "What is the volleyball term for winning the serve back from the opponent?",
        answers: [
          { text: "A side-out", correct: true, explanation: "Correct — this is the standard term for winning back the serve." },
          { text: "A let", correct: false, explanation: "A let refers to a different situation, unrelated to winning back serve." },
          { text: "A foot fault", correct: false, explanation: "That's a serving-position violation, not related to rotation triggers." },
          { text: "A carry", correct: false, explanation: "A carry is a ball-handling fault, unrelated to rotation." },
        ],
      },
      {
        question: "Team A is serving and loses the rally to Team B. What happens next?",
        answers: [
          { text: "Team B rotates one position clockwise, then serves", correct: true, explanation: "Correct — Team B just won a side-out, so they rotate before serving." },
          { text: "Team A rotates one position, even though they lost the point", correct: false, explanation: "The team that lost serve does not rotate — the team gaining serve does." },
          { text: "Both teams rotate one position", correct: false, explanation: "Only the team that just won back the serve rotates." },
          { text: "Neither team rotates, and Team A serves again", correct: false, explanation: "Losing the rally on serve means Team A loses their serve to Team B." },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Rotation Before the Serve",
    summary: "Why every player's zone must be legally correct at the exact moment the serve is contacted.",
    durationMin: 7,
    theory: [
      "The formation a team lines up in matters most at one precise instant: the moment the server actually contacts the ball. Every player must be standing in a position that is legal relative to their teammates right then — not a second before, and (as the next lesson covers) not necessarily a second after.",
      "'Legal' here means each player's rotational order must match the order established by the team's rotation — the same 1-2-3-4-5-6-1 sequence from Lesson 2. A player can't simply stand wherever they like; their position has to be consistent with where the rotation has placed them relative to their teammates.",
      "This is why the order players are lined up in before a serve matters so much: it's not about where exactly on the court someone stands (within reason), but about their position relative to their direct neighbors in the rotation — the zones immediately next to theirs.",
      "Officials watch specifically for this moment. A team can shift around before the serve and reposition immediately after, but if they are out of order at the exact instant of contact, it's called a positional fault, and the serving team is awarded the point.",
      "Because this check happens only at one instant, teams often disguise their real tactical positions right up until the last moment, then move immediately once the ball is served — which is exactly what the next lesson explains.",
    ],
    keyTakeaway: "Every player's position must be legally correct relative to their rotational neighbors at the exact moment the ball is served — that single instant is when the formation is checked.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "All six players hold their correct rotational order the instant the server in Zone 1 contacts the ball — this is the moment their formation must be legal.",
      activeZones: [1, 2, 3, 4, 5, 6],
      labels: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6" },
      motions: {},
      ball: { path: [{ x: 82, y: 70 }, { x: 20, y: -14 }] },
    },
    quiz: [
      {
        question: "At what exact moment must a team's formation be legally correct?",
        answers: [
          { text: "The instant the server contacts the ball", correct: true, explanation: "Correct — that single moment is when the formation is checked." },
          { text: "For the entire rally", correct: false, explanation: "The check is specifically at the moment of contact, not the whole rally." },
          { text: "Only at the start of the set", correct: false, explanation: "This check happens before every single serve, not just once per set." },
          { text: "Whenever the referee feels like checking", correct: false, explanation: "It's tied to a specific moment (serve contact), not an arbitrary check." },
        ],
      },
      {
        question: "What does 'legal position' mean in this context?",
        answers: [
          { text: "Each player's order is consistent with their rotational neighbors", correct: true, explanation: "Correct — it's about relative order, not an exact fixed spot." },
          { text: "Standing in the exact center of your numbered zone", correct: false, explanation: "The rule is about relative order between neighbors, not a precise fixed spot." },
          { text: "Standing wherever gives the best tactical advantage", correct: false, explanation: "Tactical value doesn't override the legal ordering requirement." },
          { text: "Standing closest to the net possible", correct: false, explanation: "Proximity to the net isn't what determines a legal position." },
        ],
      },
      {
        question: "What is it called when a team is out of order at the moment of serve?",
        answers: [
          { text: "A positional fault", correct: true, explanation: "Correct — this is the official term for the violation." },
          { text: "A carry", correct: false, explanation: "A carry is a ball-handling fault, unrelated to formation order." },
          { text: "A let", correct: false, explanation: "A let refers to a different situation entirely." },
          { text: "A back-row attack violation", correct: false, explanation: "That's a different fault, about attacking above the net illegally." },
        ],
      },
      {
        question: "What happens if a team commits a positional fault?",
        answers: [
          { text: "The serving team is awarded the point", correct: true, explanation: "Correct — a positional fault results in a point for the other side." },
          { text: "The rally is simply replayed", correct: false, explanation: "There's no replay for a positional fault — it results in a point." },
          { text: "Nothing, since it's only a warning the first time", correct: false, explanation: "A positional fault gives a real point, it isn't a warning-only rule." },
          { text: "The team loses their next rotation turn", correct: false, explanation: "The consequence is an awarded point, not a skipped rotation." },
        ],
      },
      {
        question: "Can a team reposition right before or right after the serve?",
        answers: [
          { text: "Yes, as long as they're legally ordered at the exact moment of contact", correct: true, explanation: "Correct — the check is only at that one instant." },
          { text: "No, players must stay completely still for the whole rally", correct: false, explanation: "Players can move before and after — just not be out of order at contact." },
          { text: "No, repositioning before a serve is never allowed", correct: false, explanation: "Pre-serve repositioning is common and legal, within limits." },
          { text: "Only the server is allowed to move at all", correct: false, explanation: "All players can reposition, not just the server." },
        ],
      },
      {
        question: "Why might teams disguise their real tactical positions right up until the serve?",
        answers: [
          { text: "Because they can move freely immediately after contact, but must be legal exactly at contact", correct: true, explanation: "Correct — this is exactly the tactic the next lesson explains further." },
          { text: "Because disguising position is required by the rules", correct: false, explanation: "It's a tactical choice, not a rule requirement." },
          { text: "Because it changes who is allowed to serve", correct: false, explanation: "Server identity is set by rotation, unrelated to disguising position." },
          { text: "Because it prevents the opposing team from serving", correct: false, explanation: "This tactic has no effect on the opposing team's serve." },
        ],
      },
      {
        question: "Is a legal position about a player's exact spot on the court, or their order relative to neighbors?",
        answers: [
          { text: "Their order relative to their rotational neighbors", correct: true, explanation: "Correct — it's a relative-order rule, not a fixed-spot rule." },
          { text: "Their exact spot, measured to the centimeter", correct: false, explanation: "The rule cares about relative order, not an exact measured position." },
          { text: "Neither — position legality doesn't actually exist as a rule", correct: false, explanation: "Position legality is a real, enforced rule (the positional fault)." },
          { text: "Only the server's exact spot matters", correct: false, explanation: "Every player's relative position matters, not just the server's." },
        ],
      },
      {
        question: "Who typically watches for positional faults during a match?",
        answers: [
          { text: "Match officials", correct: true, explanation: "Correct — officials watch for this at the moment of serve." },
          { text: "Only the opposing team's coach", correct: false, explanation: "Officials make the call, not a coach from the other side." },
          { text: "Only the serving player themselves", correct: false, explanation: "The server isn't responsible for judging the whole team's formation." },
          { text: "No one — it's checked automatically by a sensor", correct: false, explanation: "This is a human officiating call, not an automated sensor check." },
        ],
      },
      {
        question: "Does the positional-fault rule apply to every serve, or just the first one of a set?",
        answers: [
          { text: "Every single serve throughout the set", correct: true, explanation: "Correct — the formation is checked before each and every serve." },
          { text: "Only the very first serve of each set", correct: false, explanation: "This check happens before every serve, not just the first." },
          { text: "Only the last serve before a set-ending point", correct: false, explanation: "There's no special exception for a set-ending rally." },
          { text: "Only if the receiving team requests a check", correct: false, explanation: "Officials watch for this automatically, without needing a request." },
        ],
      },
      {
        question: "What is checked when officials look for a positional fault?",
        answers: [
          { text: "Whether each player's order is legal relative to their immediate rotational neighbors", correct: true, explanation: "Correct — this is exactly what the rule is checking." },
          { text: "Whether every player is touching their exact zone's center point", correct: false, explanation: "There's no requirement to stand on an exact center point." },
          { text: "Whether the team's jerseys are numbered correctly", correct: false, explanation: "Jersey numbers are unrelated to positional faults." },
          { text: "Whether the ball has crossed the net yet", correct: false, explanation: "That's unrelated to a team's formation legality." },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Overlap Rules",
    summary: "The specific left-right and front-back relationships that make a rotational formation legal.",
    durationMin: 8,
    theory: [
      "An 'overlap' is what happens when two neighboring players are standing in the wrong order relative to each other at the moment of serve. Overlap rules only apply between a player and their immediate neighbors in the rotation — not between every possible pair of players on the court.",
      "There are two kinds of relationships to check: left-right (between players in the same row) and front-back (between a player and the teammate directly in front of or behind them in the rotation). Both must be correct at the same time for the formation to be legal.",
      "For a left-right relationship: a player must stay to the correct side of their same-row neighbor. For example, the Zone 4 player must stay left of the Zone 3 player, and the Zone 3 player must stay left of the Zone 2 player — the same left-to-right order the zone numbers themselves suggest.",
      "For a front-back relationship: a front-row player must stay closer to the net than their back-row counterpart in the same column. The Zone 4 player must stay in front of the Zone 5 player, Zone 3 in front of Zone 6, and Zone 2 in front of Zone 1 — right up until the ball is served.",
      "A helpful way to think about it: overlap rules aren't about a player's absolute position on the court, they're about staying on the correct side of the specific teammates next to them in the rotation order. A player can stand almost anywhere within their zone, as long as they don't cross over their direct neighbors.",
    ],
    keyTakeaway: "Overlap rules compare a player only with their immediate rotational neighbors: same-row players must keep their left-right order, and same-column players must keep their front-back order, until the ball is served.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "Front-back overlap: the Zone 4 player must stay closer to the net than the Zone 5 player directly behind them, right up until the serve.",
      activeZones: [4, 5],
      labels: { 4: "4", 5: "5" },
      motions: {
        4: { dx: 0, dy: -6 },
        5: { dx: 0, dy: 6 },
      },
      ball: null,
    },
    quiz: [
      {
        question: "What is an 'overlap' in the context of rotation rules?",
        answers: [
          { text: "Two neighboring players standing in the wrong relative order at serve", correct: true, explanation: "Correct — this is exactly what an overlap fault is." },
          { text: "Two players touching the ball at the same time", correct: false, explanation: "That's a simultaneous contact situation, unrelated to overlap rules." },
          { text: "A player stepping outside the court boundary", correct: false, explanation: "That's a boundary issue, not a rotational overlap." },
          { text: "A serve that clips the net", correct: false, explanation: "That's a let-serve situation, unrelated to overlaps." },
        ],
      },
      {
        question: "Which players does the overlap rule compare against each other?",
        answers: [
          { text: "Only immediate neighbors in the rotation", correct: true, explanation: "Correct — overlap rules don't apply to every possible pair of players." },
          { text: "Every player against every other player on the court", correct: false, explanation: "Only immediate rotational neighbors are compared, not everyone." },
          { text: "Only the setter against the opposing setter", correct: false, explanation: "Overlap rules are about teammates, not comparisons across the net." },
          { text: "Only players in the same zone number as each other", correct: false, explanation: "No two teammates share the same zone at once, so this isn't the comparison made." },
        ],
      },
      {
        question: "In a left-right relationship, where must the Zone 4 player stay relative to Zone 3?",
        answers: [
          { text: "To the left of the Zone 3 player", correct: true, explanation: "Correct — this matches the left-to-right zone order." },
          { text: "To the right of the Zone 3 player", correct: false, explanation: "That would reverse the required left-right order." },
          { text: "Directly behind the Zone 3 player", correct: false, explanation: "That describes a front-back relationship, not left-right." },
          { text: "There is no required relationship between them", correct: false, explanation: "Zone 4 and Zone 3 are same-row neighbors, so a left-right rule applies." },
        ],
      },
      {
        question: "In a front-back relationship, where must the Zone 3 player stay relative to Zone 6?",
        answers: [
          { text: "Closer to the net than the Zone 6 player", correct: true, explanation: "Correct — Zone 3 is front row and must stay in front of Zone 6." },
          { text: "Further from the net than the Zone 6 player", correct: false, explanation: "That would reverse the required front-back order." },
          { text: "To the left of the Zone 6 player", correct: false, explanation: "That describes a left-right relationship, not front-back." },
          { text: "There is no required relationship between them", correct: false, explanation: "Zone 3 and Zone 6 are same-column neighbors, so a front-back rule applies." },
        ],
      },
      {
        question: "Until when must front-back and left-right relationships stay legal?",
        answers: [
          { text: "Until the ball is served", correct: true, explanation: "Correct — the check is at the moment of serve, as covered in the last lesson." },
          { text: "For the entire rally", correct: false, explanation: "Players are free to move once the ball is served." },
          { text: "Only during the first rotation of the set", correct: false, explanation: "This check applies before every single serve." },
          { text: "Until the ball crosses the net", correct: false, explanation: "The check is tied to the moment of serve contact, not the ball crossing the net." },
        ],
      },
      {
        question: "Must the Zone 2 player stay in front of the Zone 1 player before the serve?",
        answers: [
          { text: "Yes — Zone 2 is front row and Zone 1 is its back-row counterpart", correct: true, explanation: "Correct — this is a required front-back relationship." },
          { text: "No, Zone 2 and Zone 1 have no required relationship", correct: false, explanation: "They are same-column neighbors, so a front-back rule does apply." },
          { text: "No, Zone 1 must stay in front of Zone 2 instead", correct: false, explanation: "That reverses the actual required order — Zone 2 is the front-row zone." },
          { text: "Only during the deciding set", correct: false, explanation: "This rule applies in every set, not just the decider." },
        ],
      },
      {
        question: "Can a player stand anywhere within their zone as long as overlap rules are respected?",
        answers: [
          { text: "Yes, as long as they don't cross over their direct rotational neighbors", correct: true, explanation: "Correct — the rule is about relative order, not an exact spot." },
          { text: "No, every player must stand on one exact marked point", correct: false, explanation: "There's no requirement to stand on one precise point." },
          { text: "No, players may only stand in the very center of the court", correct: false, explanation: "Standing anywhere within the legal relative order is fine." },
          { text: "Only the server has any freedom of movement before serving", correct: false, explanation: "All players have this freedom, not just the server." },
        ],
      },
      {
        question: "Which of these is a left-right neighbor pair, not a front-back pair?",
        answers: [
          { text: "Zone 4 and Zone 3", correct: true, explanation: "Correct — these are same-row (front-row) neighbors." },
          { text: "Zone 4 and Zone 5", correct: false, explanation: "This is a front-back pair, both in the same column." },
          { text: "Zone 3 and Zone 6", correct: false, explanation: "This is a front-back pair, both in the same column." },
          { text: "Zone 2 and Zone 1", correct: false, explanation: "This is a front-back pair, both in the same column." },
        ],
      },
      {
        question: "Which of these is a front-back neighbor pair, not a left-right pair?",
        answers: [
          { text: "Zone 2 and Zone 1", correct: true, explanation: "Correct — these are same-column (front/back) neighbors." },
          { text: "Zone 4 and Zone 3", correct: false, explanation: "This is a left-right pair, both in the front row." },
          { text: "Zone 3 and Zone 2", correct: false, explanation: "This is a left-right pair, both in the front row." },
          { text: "Zone 5 and Zone 6", correct: false, explanation: "This is a left-right pair, both in the back row." },
        ],
      },
      {
        question: "What best summarizes what overlap rules are actually about?",
        answers: [
          { text: "Staying on the correct side of your direct rotational neighbors, not your absolute spot on court", correct: true, explanation: "Correct — this captures the core idea precisely." },
          { text: "Standing in the exact geometric center of the court at all times", correct: false, explanation: "Overlap rules don't require any exact fixed position." },
          { text: "Never moving at all until the rally ends", correct: false, explanation: "Movement is allowed once the ball is served — this is only about the moment of serve." },
          { text: "Making sure no two players ever touch the same line", correct: false, explanation: "Overlap rules are about relative order between neighbors, not lines." },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Moving After the Serve",
    summary: "Why formation legality only applies at contact, and what players are free to do the instant after.",
    durationMin: 7,
    theory: [
      "The formation rules from the last two lessons — legal order, no overlaps — apply only at one instant: the moment the server contacts the ball. The very next instant, every player is free to move anywhere they want on their side of the court, entirely independent of their rotational zone.",
      "This is what allows real tactics to exist at all. If players had to stay in their overlap-legal positions for the whole rally, a Zone 5 player could never help cover the middle of the court, and a front-row hitter could never sprint in from an angled approach — the game would look completely different.",
      "In practice, this means a team's real defensive or offensive shape often looks nothing like their serving formation within a second of the ball being contacted. Players sprint to their actual tactical spots — the setter releases to the net, blockers spread along the net, back-row defenders spread out to cover the court.",
      "The key distinction to hold onto: rotation legality is about the STARTING formation at one frozen instant, while what happens during the rally is about REAL tactical positioning, and the two are only loosely connected. A team can be perfectly legal at serve and still run a completely different-looking play a second later.",
      "This is also why disguising formation (mentioned in Lesson 4) works: a team can start players slightly out of their 'natural' tactical spot, purely to stay legally ordered, and then have everyone sprint to their real positions the instant the ball leaves the server's hand.",
    ],
    keyTakeaway: "Formation legality applies only at the instant of serve contact — the moment after, every player is free to move anywhere on their side of the court to reach their real tactical position.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The instant the server in Zone 1 contacts the ball, the Zone 3 player is free to release from their legal starting spot toward the net to begin blocking.",
      activeZones: [1, 3],
      labels: { 1: "S", 3: "MB" },
      motions: { 3: { dx: 0, dy: -8 } },
      ball: { path: [{ x: 82, y: 70 }, { x: 20, y: -14 }] },
    },
    quiz: [
      {
        question: "At which moment does formation legality actually apply?",
        answers: [
          { text: "Only the instant the server contacts the ball", correct: true, explanation: "Correct — legality is checked at that one instant only." },
          { text: "For the entire rally, start to finish", correct: false, explanation: "Legality only applies at the moment of serve contact." },
          { text: "Only after the ball crosses the net", correct: false, explanation: "The check happens at contact, before the ball even crosses." },
          { text: "Whenever a player calls for the ball", correct: false, explanation: "This isn't tied to calling for the ball at all." },
        ],
      },
      {
        question: "What are players free to do the instant after the ball is served?",
        answers: [
          { text: "Move anywhere on their side of the court", correct: true, explanation: "Correct — overlap rules no longer apply once the ball is served." },
          { text: "Nothing — they must hold their formation for the whole rally", correct: false, explanation: "Players are free to move immediately after the ball is served." },
          { text: "Only move within their original numbered zone", correct: false, explanation: "There's no such restriction once the ball has been served." },
          { text: "Only the server is allowed to move", correct: false, explanation: "Every player, not just the server, is free to move after contact." },
        ],
      },
      {
        question: "Why does this rule matter for real tactics?",
        answers: [
          { text: "Without it, players could never reach their real defensive or attacking positions", correct: true, explanation: "Correct — this freedom is what makes real tactical play possible." },
          { text: "It has no real effect on how the game is actually played", correct: false, explanation: "This rule is foundational to how volleyball tactics work." },
          { text: "It only matters for the serving team, not the receiving team", correct: false, explanation: "Both teams' players benefit from this freedom to move after serve." },
          { text: "It only applies to the setter", correct: false, explanation: "This freedom applies to every player on both teams." },
        ],
      },
      {
        question: "What is the key distinction between 'rotation legality' and a team's real tactical shape?",
        answers: [
          { text: "Rotation legality is about one frozen instant at serve; tactical shape happens during the live rally", correct: true, explanation: "Correct — this is exactly the distinction to hold onto." },
          { text: "There is no distinction — they are the same thing", correct: false, explanation: "They are related but distinct concepts, as this lesson explains." },
          { text: "Tactical shape is checked by officials, but rotation legality is not", correct: false, explanation: "It's the reverse — officials check rotation legality, not general tactical shape." },
          { text: "Rotation legality applies to the whole rally, and tactical shape only applies at serve", correct: false, explanation: "This reverses the actual relationship between the two ideas." },
        ],
      },
      {
        question: "Why might a team deliberately start in a slightly unusual formation before serving?",
        answers: [
          { text: "To disguise their real tactical plan while staying legally ordered", correct: true, explanation: "Correct — this is the disguising tactic from the previous lesson." },
          { text: "Because the rules require teams to rotate their starting spots randomly", correct: false, explanation: "There's no such rule — disguising position is a tactical choice." },
          { text: "Because it's required for the server to be allowed to serve", correct: false, explanation: "Server eligibility isn't related to this disguising tactic." },
          { text: "Because it earns the team bonus points", correct: false, explanation: "There's no bonus-point mechanic tied to formation disguising." },
        ],
      },
      {
        question: "Does a team's serving formation always match their real defensive shape a second later?",
        answers: [
          { text: "No, it often looks completely different once players reach their real spots", correct: true, explanation: "Correct — the two are only loosely connected." },
          { text: "Yes, they are required to be identical", correct: false, explanation: "There's no requirement for the two shapes to match." },
          { text: "Yes, but only during the deciding set", correct: false, explanation: "This isn't a set-specific rule at all." },
          { text: "No, but only the back row is allowed to move", correct: false, explanation: "All players, front and back row alike, are free to move." },
        ],
      },
      {
        question: "What might a middle blocker do immediately after their team's serve is contacted?",
        answers: [
          { text: "Release from their legal starting spot and move toward the net to prepare to block", correct: true, explanation: "Correct — this is a typical real tactical movement right after serve." },
          { text: "Stay frozen in their exact starting spot for the whole rally", correct: false, explanation: "Players are free to move as soon as the ball is contacted." },
          { text: "Switch zones with the setter", correct: false, explanation: "Zone assignments don't swap between players mid-rally." },
          { text: "Leave the court entirely", correct: false, explanation: "There's no rule requiring a player to leave the court at this moment." },
        ],
      },
      {
        question: "Once the ball is served, is a player still restricted by their zone number?",
        answers: [
          { text: "No, their zone number only mattered for the legality check at serve", correct: true, explanation: "Correct — after that check, zone number stops restricting their movement." },
          { text: "Yes, they must stay within that exact zone for the whole rally", correct: false, explanation: "Players are free to move anywhere on their side once the ball is served." },
          { text: "Yes, but only front-row players are restricted this way", correct: false, explanation: "No player, front or back row, is restricted to their zone after serve." },
          { text: "It depends on which zone they were in", correct: false, explanation: "The freedom to move applies equally regardless of starting zone." },
        ],
      },
      {
        question: "What happens to overlap rules once the ball leaves the server's hand?",
        answers: [
          { text: "They stop applying until the next serve", correct: true, explanation: "Correct — overlap rules are only checked at the moment of contact." },
          { text: "They become even stricter", correct: false, explanation: "The opposite happens — the restriction is lifted, not tightened." },
          { text: "They apply only to the back row from then on", correct: false, explanation: "Overlap rules simply stop applying at all until the next serve." },
          { text: "They apply only if the serving team loses the rally", correct: false, explanation: "The outcome of the rally doesn't change when overlap rules apply." },
        ],
      },
      {
        question: "Which best describes what this lesson adds to the previous two lessons on formation legality?",
        answers: [
          { text: "It defines the boundary of when those rules stop applying", correct: true, explanation: "Correct — it clarifies that legality is a single-instant check, not an ongoing restriction." },
          { text: "It introduces a brand new formation rule for mid-rally play", correct: false, explanation: "This lesson explains freedom from the rule, not a new restriction." },
          { text: "It cancels the overlap rules from the previous lesson entirely", correct: false, explanation: "The overlap rules still apply — just only at the moment of serve." },
          { text: "It only applies to teams that are currently losing", correct: false, explanation: "This applies to every team, regardless of the score." },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Setter Movement",
    summary: "Where a setter's rotation can place them, and how they release to the net after every serve.",
    durationMin: 8,
    theory: [
      "A setter's zone at the moment of serve depends entirely on where the team's rotation has placed them — it could be a front-row zone (2, 3 or 4) or a back-row zone (5, 6 or 1), and it changes every time the team rotates. There's no fixed 'setter's zone' the way there might seem to be for other roles.",
      "Whatever zone the setter starts in, their job right after the serve is the same: get to the net as quickly as possible to be ready for the second contact. If they started in the back row, this often means sprinting a significant distance — from deep in the court all the way up to the net.",
      "This is exactly the freedom covered in the last lesson. The setter only had to be in their legally ordered rotational spot for the instant of serve; the moment the ball is contacted, they're completely free to release and run toward the net regardless of which zone technically 'owns' them.",
      "Because the setter's starting zone changes constantly across a set's six rotations, the distance they have to cover to reach the net also changes — starting in Zone 1 or Zone 5 means a long sprint, while starting already in Zone 2 or Zone 3 means they're already close to where they need to be.",
      "Coaches build starting lineups with this in mind: some systems try to keep the setter's rotational neighbors positioned to make room for this sprint, since a clean, unobstructed release to the net is what lets the setter reach the ball in time for a well-timed second contact.",
    ],
    keyTakeaway: "A setter's starting zone depends on the current rotation and can be anywhere from 2 to 1, front row or back row — but the instant the ball is served, they release to the net to prepare for the second contact.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The Setter (S) starts this rotation in Zone 5, in the back row. The instant the serve is contacted, they sprint across the court to the net to get ready to set.",
      activeZones: [5],
      labels: { 5: "S" },
      motions: { 5: { dx: 47, dy: -52 } },
      ball: { path: [{ x: 50, y: -8 }, { x: 30, y: 20 }] },
    },
    quiz: [
      {
        question: "Is there one fixed zone the setter always starts a rotation in?",
        answers: [
          { text: "No — it depends on the current rotation and can be any of the six zones", correct: true, explanation: "Correct — the setter's starting zone changes with every rotation." },
          { text: "Yes, the setter is always in Zone 3", correct: false, explanation: "The setter's zone changes across the set's six rotations." },
          { text: "Yes, the setter is always in the back row", correct: false, explanation: "The setter can be in the front row or back row depending on rotation." },
          { text: "Yes, the setter is always wherever the coach points at the last second", correct: false, explanation: "The setter's zone is determined by rotation, not a last-second call." },
        ],
      },
      {
        question: "What is the setter's job the instant after their team serves?",
        answers: [
          { text: "Release to the net to prepare for the second contact", correct: true, explanation: "Correct — this is the setter's core job every single rally." },
          { text: "Stay exactly in their starting zone for the whole rally", correct: false, explanation: "The setter needs to move to the net, not stay put." },
          { text: "Immediately attempt to block at the net", correct: false, explanation: "Blocking is the middle blocker or front-row players' job, not the setter's specific task here." },
          { text: "Rotate the team one position early", correct: false, explanation: "Rotation isn't something a single player triggers mid-rally." },
        ],
      },
      {
        question: "If the setter starts a rotation in Zone 1, what does their release to the net look like?",
        answers: [
          { text: "A long sprint, since Zone 1 is deep in the back row", correct: true, explanation: "Correct — Zone 1 is far from the net, so the release covers real distance." },
          { text: "No movement is needed since Zone 1 is already at the net", correct: false, explanation: "Zone 1 is a back-row zone, far from the net." },
          { text: "A short sideways step only", correct: false, explanation: "Starting from Zone 1 requires a real, longer sprint to the net." },
          { text: "The setter cannot start a rotation in Zone 1", correct: false, explanation: "The setter can start in any of the six zones depending on rotation." },
        ],
      },
      {
        question: "Why does the setter's release distance change from rotation to rotation?",
        answers: [
          { text: "Because their starting zone changes with each rotation", correct: true, explanation: "Correct — a different starting zone means a different distance to the net." },
          { text: "Because the net moves between rotations", correct: false, explanation: "The net stays fixed — it's the setter's starting zone that changes." },
          { text: "Because the setter is substituted out every rotation", correct: false, explanation: "The same setter typically stays on, just in a different zone each time." },
          { text: "It doesn't change — the distance is always the same", correct: false, explanation: "The distance varies significantly depending on the setter's current zone." },
        ],
      },
      {
        question: "What rule from the previous lesson makes the setter's release to the net legal?",
        answers: [
          { text: "Players are free to move anywhere once the ball is served", correct: true, explanation: "Correct — this is exactly the freedom covered in Lesson 6." },
          { text: "Setters are given a special exception to all rotation rules", correct: false, explanation: "There's no special setter exception — this is the general post-serve freedom rule." },
          { text: "The setter is allowed to break formation before the serve", correct: false, explanation: "The setter must still be legally positioned at the moment of serve." },
          { text: "Overlap rules don't apply to setters at all", correct: false, explanation: "Overlap rules apply to every player, including the setter, at the moment of serve." },
        ],
      },
      {
        question: "When starting in Zone 2 or Zone 3, is the setter's release to the net shorter or longer than from Zone 1 or Zone 5?",
        answers: [
          { text: "Shorter, since Zone 2 and 3 are already close to the net", correct: true, explanation: "Correct — front-row zones require much less distance to cover." },
          { text: "Longer, since Zone 2 and 3 are further from the net", correct: false, explanation: "Zone 2 and 3 are front-row zones, close to the net." },
          { text: "Exactly the same distance every time", correct: false, explanation: "The distance depends heavily on which zone the setter starts in." },
          { text: "The setter never starts in Zone 2 or Zone 3", correct: false, explanation: "The setter can start in any of the six zones, including these." },
        ],
      },
      {
        question: "Why might a coach consider the setter's rotational neighbors when building a lineup?",
        answers: [
          { text: "To help make room for a clean, unobstructed release to the net", correct: true, explanation: "Correct — this is a real tactical consideration for lineup building." },
          { text: "Because neighbors must always be the same height as the setter", correct: false, explanation: "Height matching isn't the reason for this consideration." },
          { text: "Because it changes how many times the setter is allowed to touch the ball", correct: false, explanation: "Touch counts aren't affected by lineup neighbor choices." },
          { text: "Because it's required by the rules of positional legality", correct: false, explanation: "This is a tactical choice, not a legal requirement." },
        ],
      },
      {
        question: "What must be true about the setter's position at the exact moment of serve, regardless of their eventual sprint to the net?",
        answers: [
          { text: "They must be in a legal overlap position relative to their neighbors", correct: true, explanation: "Correct — the legality check still applies at that one instant." },
          { text: "They must already be standing at the net", correct: false, explanation: "There's no such requirement — only legal ordering matters at serve." },
          { text: "They must be touching the sideline", correct: false, explanation: "There's no rule requiring the setter to touch the sideline." },
          { text: "They must be facing the opposing setter directly", correct: false, explanation: "Facing direction isn't part of the legality check." },
        ],
      },
      {
        question: "Does the setter's role change depending on which zone they're currently in?",
        answers: [
          { text: "No — the role stays the same; only their starting distance to the net changes", correct: true, explanation: "Correct — their job (set the second contact) doesn't change with zone." },
          { text: "Yes, they only set the ball when they start in a front-row zone", correct: false, explanation: "The setter's core job is the same regardless of starting zone." },
          { text: "Yes, they become a blocker when they start in the back row", correct: false, explanation: "Role assignments like setter don't change based on rotation." },
          { text: "Yes, a different player takes over setting each rotation", correct: false, explanation: "The same player normally keeps the setter role through the set." },
        ],
      },
      {
        question: "What is the main takeaway about setter movement across a full set?",
        answers: [
          { text: "Their starting zone and release distance vary by rotation, but their job at the net stays constant", correct: true, explanation: "Correct — this captures the lesson's core idea." },
          { text: "The setter stands still in one exact spot the entire set", correct: false, explanation: "The setter moves substantially every single rally." },
          { text: "The setter's job changes completely with every rotation", correct: false, explanation: "Only their starting zone changes — their job stays the same." },
          { text: "The setter is exempt from all rotation rules", correct: false, explanation: "The setter follows the same rotation and overlap rules as everyone else." },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Hitter Movement",
    summary: "How outside hitters, opposite hitters and middle blockers transition into their attacking positions.",
    durationMin: 8,
    theory: [
      "Front-row hitters — the outside hitter, opposite hitter, and middle blocker — face the same freedom described in Lesson 6: legal at the moment of serve, free to move the instant after. What they do with that freedom is sprint into their specific attacking approach.",
      "The outside hitter (typically starting somewhere near Zone 4) moves to set up their approach toward the left antenna, ready to attack a ball delivered to that side. The opposite hitter does the same on the right, near Zone 2, while the middle blocker heads toward the center at Zone 3, ready for a quick attack or to shift along the net to block.",
      "Back-row hitters move too, just with an added restriction: whoever is currently in the back row can approach and attack, but only if they jump from behind the 3 m attack line. This means a back-row player's transition run has to end with a take-off that starts further from the net than a front-row teammate's would.",
      "Because these players are all released from their exact rotational spot only after the serve, the specific paths they run can look quite different from one rotation to the next — one rotation might put the outside hitter starting deep and needing a long angled run, while another has them starting already close to their attacking spot.",
      "What stays constant, no matter the rotation, is the destination each role is running toward: Zone 4 area for the outside hitter's approach, Zone 2 area for the opposite hitter, and Zone 3 area for the middle blocker — the same net-side landmarks introduced back in Lesson 1.",
    ],
    keyTakeaway: "Front-row hitters release from their legal serving spot and transition toward their attacking zones — roughly Zone 4 for the outside hitter, Zone 2 for the opposite, and Zone 3 for the middle blocker — with back-row hitters needing to take off from behind the attack line.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "After the serve, the three front-row hitters release toward their attacking spots: the outside hitter toward Zone 4, the middle blocker toward Zone 3, and the opposite hitter toward Zone 2.",
      activeZones: [4, 3, 2],
      labels: { 4: "OH", 3: "MB", 2: "OP" },
      motions: {
        4: { dx: 0, dy: -6 },
        3: { dx: 0, dy: -6 },
        2: { dx: 0, dy: -6 },
      },
      ball: { path: [{ x: 50, y: 30 }, { x: 18, y: 10 }] },
    },
    quiz: [
      {
        question: "Which zone area does the outside hitter typically transition toward?",
        answers: [
          { text: "Zone 4", correct: true, explanation: "Correct — this is the outside hitter's typical attacking area." },
          { text: "Zone 2", correct: false, explanation: "Zone 2 is the opposite hitter's typical attacking area." },
          { text: "Zone 1", correct: false, explanation: "Zone 1 is a back-row serving zone, not the OH's attacking spot." },
          { text: "Zone 6", correct: false, explanation: "Zone 6 is a back-row zone, not a front-row attacking spot." },
        ],
      },
      {
        question: "Which zone area does the opposite hitter typically transition toward?",
        answers: [
          { text: "Zone 2", correct: true, explanation: "Correct — this is the opposite hitter's typical attacking area." },
          { text: "Zone 4", correct: false, explanation: "Zone 4 is the outside hitter's typical attacking area." },
          { text: "Zone 5", correct: false, explanation: "Zone 5 is a back-row zone, not a front-row attacking spot." },
          { text: "Zone 3", correct: false, explanation: "Zone 3 is the middle blocker's typical attacking area." },
        ],
      },
      {
        question: "Which zone area does the middle blocker typically transition toward?",
        answers: [
          { text: "Zone 3", correct: true, explanation: "Correct — this is the middle blocker's central attacking area." },
          { text: "Zone 1", correct: false, explanation: "Zone 1 is a back-row serving zone." },
          { text: "Zone 4", correct: false, explanation: "Zone 4 is the outside hitter's typical attacking area." },
          { text: "Zone 6", correct: false, explanation: "Zone 6 is a back-row zone, not the middle blocker's front-row spot." },
        ],
      },
      {
        question: "What extra restriction applies to a back-row player attacking the ball?",
        answers: [
          { text: "They must jump from behind the 3 m attack line", correct: true, explanation: "Correct — this is the back-row attacking rule." },
          { text: "They may never attack the ball at all", correct: false, explanation: "Back-row players can attack, just with the attack-line restriction." },
          { text: "They must attack using an underhand motion", correct: false, explanation: "There's no such technique restriction on back-row attackers." },
          { text: "They must wait for a teammate's permission", correct: false, explanation: "No such permission requirement exists in the rules." },
        ],
      },
      {
        question: "Why can a hitter's transition path look different from one rotation to the next?",
        answers: [
          { text: "Because their starting zone before the serve changes with each rotation", correct: true, explanation: "Correct — a different starting point means a different transition run." },
          { text: "Because the court dimensions change between rotations", correct: false, explanation: "Court dimensions are fixed and never change." },
          { text: "Because a different hitter plays the role every rotation", correct: false, explanation: "The same players generally keep their roles; only their zone changes." },
          { text: "Because the net height changes between rotations", correct: false, explanation: "Net height is fixed throughout a match." },
        ],
      },
      {
        question: "When are front-row hitters free to begin their transition run?",
        answers: [
          { text: "The instant the ball is served", correct: true, explanation: "Correct — this follows the same rule covered in Lesson 6." },
          { text: "Only after the ball crosses the net", correct: false, explanation: "They can move as soon as the ball is contacted, before it even crosses." },
          { text: "Only once the opposing team touches the ball", correct: false, explanation: "The freedom to move begins at serve contact, not at the opponent's touch." },
          { text: "At any point before the serve as well", correct: false, explanation: "Before the serve, they must still hold a legal overlap position." },
        ],
      },
      {
        question: "What stays the same about hitter roles across every rotation?",
        answers: [
          { text: "The general zone area each role transitions toward", correct: true, explanation: "Correct — Zone 4 for OH, Zone 2 for OP, Zone 3 for MB, regardless of rotation." },
          { text: "The exact starting zone before every serve", correct: false, explanation: "The starting zone changes rotation to rotation — only the destination stays constant." },
          { text: "Whether they are front row or back row", correct: false, explanation: "A hitter's row status changes as the team rotates." },
          { text: "The distance they need to run", correct: false, explanation: "That distance changes depending on their current starting zone." },
        ],
      },
      {
        question: "If a hitter is currently in the back row this rotation, can they still attack the ball above net height?",
        answers: [
          { text: "Yes, if they take off from behind the 3 m attack line", correct: true, explanation: "Correct — this is the legal back-row attacking condition." },
          { text: "No, back-row players can never attack above net height", correct: false, explanation: "They can, specifically when jumping from behind the attack line." },
          { text: "Yes, from anywhere on the court, no restriction", correct: false, explanation: "That freedom belongs only to front-row players." },
          { text: "No, only the libero is allowed to attack from the back row", correct: false, explanation: "The libero is actually the one player never allowed to attack above net height." },
        ],
      },
      {
        question: "What landmark from Lesson 1 do hitter transition destinations match up with?",
        answers: [
          { text: "The same zone numbers and layout introduced in Lesson 1", correct: true, explanation: "Correct — Zones 4, 3 and 2 are the same front-row zones from that lesson." },
          { text: "The attack line specifically, not the zones", correct: false, explanation: "The destinations are described in terms of zones, not the attack line." },
          { text: "The service zone behind the end line", correct: false, explanation: "The service zone is unrelated to where hitters transition to attack." },
          { text: "The free zone surrounding the court", correct: false, explanation: "The free zone isn't where hitters are transitioning to attack from." },
        ],
      },
      {
        question: "What is the main idea of this lesson?",
        answers: [
          { text: "Hitters release from their legal serving spot and run toward their specific attacking zone", correct: true, explanation: "Correct — this summarizes the lesson precisely." },
          { text: "Hitters must stay in their exact rotational zone for the whole rally", correct: false, explanation: "The opposite is true — they're free to move once the ball is served." },
          { text: "Only the outside hitter is allowed to move after serve", correct: false, explanation: "All three front-row hitter roles transition after the serve." },
          { text: "Hitter roles are reassigned randomly at each rotation", correct: false, explanation: "Roles stay fixed to specific players; only their zone location changes." },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Libero and Rotation",
    summary: "How the libero fits into a team's rotation without ever appearing in the front row.",
    durationMin: 8,
    theory: [
      "The libero never actually appears in the front row, even though the team's rotation keeps cycling through all six zones. Instead, the libero substitutes in for whichever teammate's rotation turn has placed them in the back row — most often a middle blocker, whose back-row defense tends to be the position teams most want to strengthen.",
      "This substitution is special: it doesn't count against the team's normal, limited substitutions, and it doesn't have to happen exactly at the same moment as a rotation. Teams typically settle into a consistent pattern — swapping the libero in and out at the same points in the rotation cycle, rally after rally.",
      "As the team's rotation advances through its usual 1-2-3-4-5-6-1 cycle, the libero effectively 'rides along' inside the back row: when the player they replaced would rotate out of the back row and into the front row, the libero swaps back out, and their real teammate takes the front-row zone instead.",
      "Because of this, a team's on-court group of six often actually represents seven trained players across the full rotation — six starters plus the libero cycling in for whichever one of them is currently in the back row. The libero's own zone assignment effectively shadows their teammate's back-row zones without ever taking a front-row turn.",
      "This pattern also explains why the libero can play so many consecutive rallies: as long as their team's rotation keeps returning that particular back-row slot to the group, the libero simply keeps swapping in for it, rotation after rotation, without needing to be re-substituted from scratch each time.",
    ],
    keyTakeaway: "The libero substitutes into the back-row zone of whichever teammate's rotation has placed them there, riding along through the back row without ever taking a front-row turn, and swaps back out the moment that zone would rotate to the front row.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The Libero (L) has substituted in for a back-row teammate. As the rotation advances, the libero shifts between the back-row zones, never taking a front-row turn.",
      activeZones: [5],
      labels: { 5: "L" },
      motions: { 5: { dx: 32, dy: 16 } },
      ball: null,
    },
    quiz: [
      {
        question: "Does the libero ever appear in a front-row zone?",
        answers: [
          { text: "No — the libero never takes a front-row turn", correct: true, explanation: "Correct — the libero stays confined to back-row substitutions." },
          { text: "Yes, once every full rotation cycle", correct: false, explanation: "The libero swaps back out before their zone would reach the front row." },
          { text: "Yes, whenever the coach chooses", correct: false, explanation: "The libero is restricted from the front row by rule, not coach preference." },
          { text: "Yes, but only during the deciding set", correct: false, explanation: "This restriction applies in every set, with no exception." },
        ],
      },
      {
        question: "Whose place does the libero typically take?",
        answers: [
          { text: "Whichever teammate's rotation has placed them in the back row", correct: true, explanation: "Correct — most often a middle blocker, but based on the rotation, not a fixed player." },
          { text: "Always the setter, no matter the rotation", correct: false, explanation: "The libero isn't tied to substituting for the setter specifically." },
          { text: "A randomly chosen teammate each rally", correct: false, explanation: "The substitution pattern is consistent, not random." },
          { text: "Whichever teammate is currently in the front row", correct: false, explanation: "The libero substitutes for back-row players, not front-row ones." },
        ],
      },
      {
        question: "Does a libero substitution count against the team's normal substitution limit?",
        answers: [
          { text: "No, libero substitutions are unlimited and separate from that count", correct: true, explanation: "Correct — this is one of the libero's special rules." },
          { text: "Yes, it counts the same as any other substitution", correct: false, explanation: "Libero substitutions are specifically exempt from the normal limit." },
          { text: "Yes, but only after the third time it's used", correct: false, explanation: "There's no such threshold — libero substitutions are always exempt." },
          { text: "It depends on which set is being played", correct: false, explanation: "This exemption applies in every set, not just specific ones." },
        ],
      },
      {
        question: "What happens when the zone the libero occupies would rotate into the front row?",
        answers: [
          { text: "The libero swaps back out, and their teammate takes the front-row zone instead", correct: true, explanation: "Correct — this is exactly the swap-out pattern." },
          { text: "The libero moves to the front row anyway", correct: false, explanation: "The libero is never allowed to take a front-row turn." },
          { text: "The whole team stops rotating", correct: false, explanation: "Rotation continues normally — it's specifically the libero who swaps out." },
          { text: "The match is paused for a formal review", correct: false, explanation: "This swap is a routine, expected part of normal play." },
        ],
      },
      {
        question: "Why do teams often settle into a consistent libero substitution pattern?",
        answers: [
          { text: "Because the libero swaps in and out at the same points in the rotation cycle each time", correct: true, explanation: "Correct — this creates a predictable, repeating pattern." },
          { text: "Because the rules require an identical pattern every match", correct: false, explanation: "This is a natural consequence of the rotation cycle, not a written rule." },
          { text: "Because the libero must ask the referee for permission each time", correct: false, explanation: "No such repeated permission process exists." },
          { text: "Because opposing teams vote on the pattern", correct: false, explanation: "The opposing team has no say in a team's libero substitution pattern." },
        ],
      },
      {
        question: "How many trained players effectively rotate through a team's back row across a full cycle, counting the libero?",
        answers: [
          { text: "Seven — six starters plus the libero cycling into one back-row slot", correct: true, explanation: "Correct — this is exactly what makes the libero pattern distinctive." },
          { text: "Six, the same as without a libero", correct: false, explanation: "The libero effectively adds a seventh player into the back-row rotation." },
          { text: "Twelve, since the whole roster is involved", correct: false, explanation: "Only the six starters plus the libero are involved in this specific pattern." },
          { text: "Five, since the libero replaces one starter completely", correct: false, explanation: "The libero doesn't remove that starter from the lineup — they alternate in and out." },
        ],
      },
      {
        question: "Can the libero play many consecutive rallies without a fresh substitution each time?",
        answers: [
          { text: "Yes, as long as the rotation keeps returning that back-row slot to the group", correct: true, explanation: "Correct — the libero simply keeps swapping into that recurring slot." },
          { text: "No, the libero must be re-substituted from scratch every single rally", correct: false, explanation: "The libero's swaps follow the recurring rotation pattern, not a fresh process each time." },
          { text: "No, the libero can only play one rally per set", correct: false, explanation: "The libero can play many consecutive rallies under this pattern." },
          { text: "It depends on the current score of the set", correct: false, explanation: "The score doesn't affect how the libero substitution pattern works." },
        ],
      },
      {
        question: "Does the libero's zone assignment follow the same six-zone rotation as everyone else?",
        answers: [
          { text: "It shadows their teammate's back-row zones, without a front-row turn", correct: true, explanation: "Correct — this is the specific pattern described in this lesson." },
          { text: "No, the libero has no connection to the team's rotation at all", correct: false, explanation: "The libero's substitutions are directly tied to the rotation cycle." },
          { text: "Yes, exactly identically, including front-row zones", correct: false, explanation: "The libero specifically never takes a front-row zone." },
          { text: "No, the libero picks their own zone freely each rally", correct: false, explanation: "The libero's zone is determined by the substitution pattern, not free choice." },
        ],
      },
      {
        question: "Which position does a libero most often substitute for, and why?",
        answers: [
          { text: "A middle blocker, since strengthening their back-row defense is often most valuable", correct: true, explanation: "Correct — this is the most common, though not the only, pattern." },
          { text: "An opposite hitter, because that role never plays defense", correct: false, explanation: "Opposite hitters do play defense in the back row like any other role." },
          { text: "The setter, because setters are not allowed to play defense", correct: false, explanation: "Setters can and do play defense in the back row." },
          { text: "Another libero, since teams may field multiple liberos on court", correct: false, explanation: "Only one libero is on court for a team at a time." },
        ],
      },
      {
        question: "What is the core idea of how the libero fits into rotation?",
        answers: [
          { text: "They substitute into the back row for a teammate, riding along until that zone would go front row", correct: true, explanation: "Correct — this captures the whole pattern accurately." },
          { text: "The libero rotates through all six zones exactly like every other player", correct: false, explanation: "The libero specifically skips ever taking a front-row zone." },
          { text: "The libero has a single fixed zone they never leave", correct: false, explanation: "The libero's zone shifts along with the rotation, within the back row." },
          { text: "The libero's substitutions are unrelated to the team's rotation", correct: false, explanation: "The libero's substitution pattern is directly tied to the rotation cycle." },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Understanding a Full Rotation",
    summary: "How the six rotations of a set connect into one complete, repeating cycle.",
    durationMin: 8,
    theory: [
      "A team only has six unique rotational positions, and after six side-outs, the whole lineup has cycled all the way back to exactly where it started. This is the 'full rotation' — the complete loop through 1-2-3-4-5-6 and back to 1 that every lesson in this chapter has been building toward.",
      "Each of the six rotations gives the team a different mix of who's in the front row and who's in the back row, which is why some rotations feel 'stronger' or 'weaker' to coaches and players — a rotation with your best blockers up front and best passers in the back can feel very different from its opposite.",
      "Understanding the full cycle also makes it possible to predict what's coming: if you know your team's current rotation and its fixed order, you know exactly which rotation is next, and can already anticipate whether your best hitter is about to move to the front row or head to the back.",
      "This is also why rotations are often labeled by a single reference point — commonly, which zone the setter currently occupies. Calling out 'we're in setter-in-1' or 'setter-in-4' is a quick way to communicate the team's entire current formation, since every other role's zone follows automatically once the setter's zone is known.",
      "By the time a team has completed all six rotations, every player has taken a turn in every zone, experienced both front-row and back-row duty, and the team returns to its starting formation — ready for the exact same six-rotation cycle to begin again for as long as the set continues.",
    ],
    keyTakeaway: "A full rotation is the complete six-step cycle through every zone — after six side-outs the whole team is back exactly where it started, having passed through every zone and both rows along the way.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "A full rotation cycle: the ball travels through all six zones in order — 1, 2, 3, 4, 5, 6 and back to 1 — tracing the complete path every rotation follows.",
      activeZones: [1, 2, 3, 4, 5, 6],
      labels: { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6" },
      motions: {},
      ball: {
        path: [
          { x: 82, y: 76 },
          { x: 82, y: 24 },
          { x: 50, y: 24 },
          { x: 18, y: 24 },
          { x: 18, y: 76 },
          { x: 50, y: 76 },
          { x: 82, y: 76 },
        ],
      },
    },
    quiz: [
      {
        question: "How many unique rotational positions does a team have?",
        answers: [
          { text: "Six", correct: true, explanation: "Correct — one for each of the six zones." },
          { text: "Twelve", correct: false, explanation: "Twelve would be double the actual number of rotations." },
          { text: "Three", correct: false, explanation: "Three is too few — there are six zones and six rotations." },
          { text: "Unlimited", correct: false, explanation: "The cycle is fixed at exactly six rotations before repeating." },
        ],
      },
      {
        question: "After how many side-outs does a team's lineup return exactly to its starting formation?",
        answers: [
          { text: "Six", correct: true, explanation: "Correct — six side-outs complete one full rotation cycle." },
          { text: "Two", correct: false, explanation: "Two side-outs only moves the lineup a fraction of the way around." },
          { text: "Twenty-five", correct: false, explanation: "That's unrelated to the rotation cycle — it happens to be a common set point target." },
          { text: "It never returns to the starting formation", correct: false, explanation: "After six side-outs, the cycle repeats from the exact starting formation." },
        ],
      },
      {
        question: "Why might one rotation feel 'stronger' than another to a team?",
        answers: [
          { text: "Because each rotation has a different mix of players in the front row versus back row", correct: true, explanation: "Correct — this changes which strengths are available where." },
          { text: "Because the court size changes between rotations", correct: false, explanation: "Court size never changes — only which players are in which row does." },
          { text: "Because the net height is lowered for weaker rotations", correct: false, explanation: "Net height is fixed and doesn't change based on rotation." },
          { text: "Because some rotations are worth more points", correct: false, explanation: "Every rally is worth exactly one point, regardless of rotation." },
        ],
      },
      {
        question: "What is a common way teams label their current rotation?",
        answers: [
          { text: "By which zone the setter currently occupies", correct: true, explanation: "Correct — for example, 'setter-in-1' or 'setter-in-4'." },
          { text: "By the current score of the set", correct: false, explanation: "Rotation labeling isn't tied to the score." },
          { text: "By which team is currently ahead", correct: false, explanation: "This has nothing to do with identifying a specific rotation." },
          { text: "By the referee's current position", correct: false, explanation: "Referee position doesn't identify a team's rotation." },
        ],
      },
      {
        question: "Why does knowing the setter's zone tell you the whole team's formation?",
        answers: [
          { text: "Because every other role's zone follows automatically once the setter's zone is known", correct: true, explanation: "Correct — the fixed rotation order determines everyone else's position from there." },
          { text: "Because the setter is the only player whose zone actually matters", correct: false, explanation: "Every player's zone matters — the setter's zone is just a useful shorthand reference." },
          { text: "Because the setter tells every teammate where to stand out loud", correct: false, explanation: "It's the fixed rotation order that determines this, not verbal instruction." },
          { text: "It doesn't — every player's zone must be checked separately", correct: false, explanation: "Knowing the setter's zone is enough because the whole formation follows the same fixed order." },
        ],
      },
      {
        question: "By the end of a full six-rotation cycle, what has every player experienced?",
        answers: [
          { text: "A turn in every zone, and both front-row and back-row duty", correct: true, explanation: "Correct — the full cycle guarantees this for every player." },
          { text: "Only front-row duty, never back-row", correct: false, explanation: "Every player experiences both rows across the full cycle." },
          { text: "Exactly one serve and no more", correct: false, explanation: "How many times a player serves depends on rally outcomes, not a fixed count." },
          { text: "A chance to play every role, such as setter and libero", correct: false, explanation: "Roles stay fixed to specific players — only zones rotate, not roles." },
        ],
      },
      {
        question: "What happens once a team completes its sixth rotation in a set?",
        answers: [
          { text: "The same six-rotation cycle begins again from the starting formation", correct: true, explanation: "Correct — the cycle repeats for as long as the set continues." },
          { text: "The set automatically ends", correct: false, explanation: "Sets end based on score, not the rotation cycle completing." },
          { text: "The team is not allowed to rotate again for the rest of the set", correct: false, explanation: "The cycle simply repeats — there's no such restriction." },
          { text: "The team must choose six new starting players", correct: false, explanation: "There's no requirement to change the lineup after a full cycle." },
        ],
      },
      {
        question: "What connects all the individual lessons in this chapter into one bigger picture?",
        answers: [
          { text: "They each explain one piece of the complete six-rotation cycle", correct: true, explanation: "Correct — this lesson ties all of them together into that full cycle." },
          { text: "They are all unrelated topics with no shared thread", correct: false, explanation: "Every lesson in this chapter builds toward understanding the full rotation." },
          { text: "They only apply to the libero specifically", correct: false, explanation: "These lessons cover the whole team's rotation, not just the libero." },
          { text: "They only apply to back-row play", correct: false, explanation: "Both front-row and back-row rules are covered across this chapter." },
        ],
      },
      {
        question: "If a team is in 'setter-in-6', where is the setter positioned?",
        answers: [
          { text: "In Zone 6, the back-middle zone", correct: true, explanation: "Correct — the label directly names the setter's current zone." },
          { text: "In Zone 6 of the opposing team's court", correct: false, explanation: "Rotation zones refer to a team's own court, not the opponent's." },
          { text: "On the sideline, substituted out", correct: false, explanation: "'Setter-in-6' describes their on-court zone, not a substitution." },
          { text: "In Zone 2, ready to attack", correct: false, explanation: "'Setter-in-6' specifically means Zone 6, not Zone 2." },
        ],
      },
      {
        question: "What best summarizes a 'full rotation' as covered across this chapter?",
        answers: [
          { text: "The complete six-step clockwise cycle that returns a team to its exact starting formation", correct: true, explanation: "Correct — this is the full rotation concept in one sentence." },
          { text: "A single team's one-time shift from Zone 1 to Zone 2", correct: false, explanation: "That's just one step of the cycle, not the full six-step rotation." },
          { text: "The moment a substitution is made", correct: false, explanation: "Substitutions are a separate mechanism from the rotation cycle." },
          { text: "The order in which sets are played during a match", correct: false, explanation: "Set order is unrelated to a team's six-zone rotation cycle." },
        ],
      },
    ],
  },
];
const CHAPTER_3_TEST = {
  id: 11,
  title: "Chapter 3 Test",
  summary: "A 20-question test covering everything from Rotations, including scenario questions.",
  durationMin: 16,
  theory: null,
  keyTakeaway: null,
  showAnimation: false,
  isTest: true,
  quiz: [
    {
      question: "Which zones make up the front row?",
      answers: [
        { text: "Zones 4, 3 and 2", correct: true, explanation: "Correct — these three zones sit closest to the net." },
        { text: "Zones 5, 6 and 1", correct: false, explanation: "Those three zones make up the back row instead." },
        { text: "Zones 1, 2 and 3", correct: false, explanation: "This mixes a back-row zone (1) with front-row zones." },
        { text: "Zones 3, 4 and 5", correct: false, explanation: "This mixes front-row zones with a back-row zone (5)." },
      ],
    },
    {
      question: "In which order do players rotate through the zones?",
      answers: [
        { text: "1 to 2, 2 to 3, 3 to 4, 4 to 5, 5 to 6, 6 to 1", correct: true, explanation: "Correct — this fixed clockwise order never changes." },
        { text: "1 to 6, 6 to 5, 5 to 4, 4 to 3, 3 to 2, 2 to 1", correct: false, explanation: "That reverses the actual rotation direction." },
        { text: "A new random order each time a team rotates", correct: false, explanation: "Rotation always follows the same fixed order." },
        { text: "Only back-row players rotate each time", correct: false, explanation: "All six players rotate together, front and back row alike." },
      ],
    },
    {
      question: "Scenario: Team A is serving and wins the rally. What happens to their rotation?",
      answers: [
        { text: "Nothing rotates — the same player serves again", correct: true, explanation: "Correct — winning your own serve doesn't trigger a rotation." },
        { text: "The whole team rotates one position clockwise", correct: false, explanation: "Rotation only happens on a side-out, not after winning your own serve." },
        { text: "Only the server moves to the back row", correct: false, explanation: "No rotation, partial or otherwise, happens when the serving team wins." },
        { text: "The team rotates counter-clockwise as a penalty", correct: false, explanation: "There's no such penalty rotation in volleyball." },
      ],
    },
    {
      question: "Scenario: Team B is receiving serve and wins the rally. What happens next?",
      answers: [
        { text: "Team B rotates one position clockwise, then serves", correct: true, explanation: "Correct — winning the serve back (a side-out) triggers a rotation." },
        { text: "Team A rotates, even though they lost the point", correct: false, explanation: "The team that lost serve does not rotate — the team gaining serve does." },
        { text: "Both teams rotate together", correct: false, explanation: "Only the team that just won back the serve rotates." },
        { text: "Neither team rotates", correct: false, explanation: "Winning the serve back is exactly the trigger for a rotation." },
      ],
    },
    {
      question: "At what exact moment must a team's formation be legally ordered?",
      answers: [
        { text: "The instant the server contacts the ball", correct: true, explanation: "Correct — legality is checked at that one specific instant." },
        { text: "For the entire rally, from serve to point", correct: false, explanation: "The check is only at the moment of serve contact." },
        { text: "Only at the start of each set", correct: false, explanation: "This check happens before every single serve." },
        { text: "Only when the referee calls for a check", correct: false, explanation: "The check happens automatically at every serve, not on request." },
      ],
    },
    {
      question: "What is it called when a team is illegally ordered at the moment of serve?",
      answers: [
        { text: "A positional fault", correct: true, explanation: "Correct — this is the official term, and it awards a point to the other team." },
        { text: "A carry", correct: false, explanation: "A carry is a ball-handling fault, unrelated to formation order." },
        { text: "A let", correct: false, explanation: "A let refers to an unrelated situation." },
        { text: "A rotation violation replay", correct: false, explanation: "There's no replay — a positional fault directly awards a point." },
      ],
    },
    {
      question: "Scenario: at the moment of serve, the Zone 4 player is standing to the right of the Zone 3 player. What is this?",
      answers: [
        { text: "An illegal overlap — a left-right positional fault", correct: true, explanation: "Correct — Zone 4 must stay left of Zone 3, its same-row neighbor." },
        { text: "A completely legal formation", correct: false, explanation: "This reverses the required left-right order between same-row neighbors." },
        { text: "A front-back overlap, not left-right", correct: false, explanation: "Zone 4 and Zone 3 are same-row neighbors, so this is a left-right issue." },
        { text: "Not enforced unless it happens twice in a row", correct: false, explanation: "A single instance is enough to be called as a positional fault." },
      ],
    },
    {
      question: "Scenario: the Zone 5 player is standing closer to the net than the Zone 4 player at the moment of serve. What is this?",
      answers: [
        { text: "An illegal overlap — a front-back positional fault", correct: true, explanation: "Correct — Zone 4 (front row) must stay closer to the net than Zone 5 (back row)." },
        { text: "A completely legal formation", correct: false, explanation: "This reverses the required front-back order between same-column neighbors." },
        { text: "A left-right overlap, not front-back", correct: false, explanation: "Zone 4 and Zone 5 are same-column neighbors, so this is a front-back issue." },
        { text: "Only a problem if Zone 5 is also out of line with Zone 6", correct: false, explanation: "The Zone 4/Zone 5 relationship alone is enough to create a fault." },
      ],
    },
    {
      question: "Once the ball is served, are players still restricted to their legal pre-serve positions?",
      answers: [
        { text: "No — they are free to move anywhere on their side of the court", correct: true, explanation: "Correct — overlap rules stop applying the instant the ball is contacted." },
        { text: "Yes, for the whole rally", correct: false, explanation: "The restriction lifts the instant the ball is served." },
        { text: "Yes, but only the back row must hold position", correct: false, explanation: "No player, front or back row, is restricted to their zone after serve." },
        { text: "Only the setter is free to move", correct: false, explanation: "Every player is free to move after serve, not just the setter." },
      ],
    },
    {
      question: "Scenario: a setter starts a rotation in Zone 1. What must they do right after their team serves?",
      answers: [
        { text: "Sprint across the court to release to the net for the second contact", correct: true, explanation: "Correct — Zone 1 is far from the net, so this requires real distance." },
        { text: "Stay in Zone 1 for the whole rally", correct: false, explanation: "The setter needs to reach the net, not remain in Zone 1." },
        { text: "Immediately attempt to block", correct: false, explanation: "Blocking is not the setter's primary task here — reaching the net to set is." },
        { text: "Switch roles with the libero", correct: false, explanation: "Roles don't swap between players during a rally." },
      ],
    },
    {
      question: "Which zone area does the outside hitter typically transition toward after serve?",
      answers: [
        { text: "Zone 4", correct: true, explanation: "Correct — this is the outside hitter's typical attacking area." },
        { text: "Zone 2", correct: false, explanation: "Zone 2 is the opposite hitter's typical attacking area." },
        { text: "Zone 6", correct: false, explanation: "Zone 6 is a back-row zone, not a front-row attacking spot." },
        { text: "Zone 1", correct: false, explanation: "Zone 1 is the back-row serving zone." },
      ],
    },
    {
      question: "What extra restriction applies specifically to a back-row hitter attacking the ball above net height?",
      answers: [
        { text: "They must take off from behind the 3 m attack line", correct: true, explanation: "Correct — this is the back-row attacking rule." },
        { text: "They may never attack the ball under any circumstance", correct: false, explanation: "They can, specifically when jumping from behind the attack line." },
        { text: "They must attack only with an open hand", correct: false, explanation: "There's no such technique restriction tied to back-row attacking." },
        { text: "They must attack within one second of the set", correct: false, explanation: "There's no timing restriction like this in the rules." },
      ],
    },
    {
      question: "Does the libero ever take a front-row turn during rotation?",
      answers: [
        { text: "No — the libero never appears in the front row", correct: true, explanation: "Correct — the libero is restricted to back-row substitutions only." },
        { text: "Yes, once each full rotation cycle", correct: false, explanation: "The libero swaps back out before their zone would reach the front row." },
        { text: "Yes, if the coach requests it", correct: false, explanation: "This restriction applies regardless of coach preference." },
        { text: "Yes, but only in the deciding set", correct: false, explanation: "This restriction applies in every set with no exception." },
      ],
    },
    {
      question: "Do libero substitutions count against a team's normal substitution limit?",
      answers: [
        { text: "No, they are unlimited and tracked separately", correct: true, explanation: "Correct — this is one of the libero's defining special rules." },
        { text: "Yes, exactly like any other substitution", correct: false, explanation: "Libero substitutions are specifically exempt from the normal limit." },
        { text: "Only after the libero has played three rotations", correct: false, explanation: "There's no such threshold — the exemption applies from the very first swap." },
        { text: "Only in tournaments, not regular matches", correct: false, explanation: "This exemption applies at every level of play." },
      ],
    },
    {
      question: "Scenario: your team is 'setter-in-4' this rotation. Which zone is the setter currently in?",
      answers: [
        { text: "Zone 4", correct: true, explanation: "Correct — this labeling directly names the setter's current zone." },
        { text: "Zone 1", correct: false, explanation: "'Setter-in-4' specifically means Zone 4, not Zone 1." },
        { text: "Wherever the coach points at that moment", correct: false, explanation: "The label refers to a specific, fixed zone, not a flexible spot." },
        { text: "The opposing team's Zone 4", correct: false, explanation: "Rotation labels refer to a team's own court, not the opponent's." },
      ],
    },
    {
      question: "After how many side-outs does a team's lineup return exactly to where it started?",
      answers: [
        { text: "Six", correct: true, explanation: "Correct — six side-outs complete one full rotation cycle." },
        { text: "Three", correct: false, explanation: "Three side-outs only moves the lineup halfway around the cycle." },
        { text: "Twelve", correct: false, explanation: "Twelve would be double a full cycle — it repeats after just six." },
        { text: "It never returns to the same formation", correct: false, explanation: "After six side-outs, the exact starting formation returns." },
      ],
    },
    {
      question: "Scenario: a back-row player takes off from in front of the attack line and hits the ball above net height into the opponent's court. What is the ruling?",
      answers: [
        { text: "A fault — a back-row attack violation, and the point goes to the other team", correct: true, explanation: "Correct — taking off in front of the line makes this attack illegal." },
        { text: "A legal attack, since the ball crossed the net successfully", correct: false, explanation: "Take-off position, not the outcome, is what makes this illegal." },
        { text: "A warning only, with play continuing", correct: false, explanation: "This fault is called immediately, not just warned about." },
        { text: "Legal, as long as the player is the middle blocker", correct: false, explanation: "This rule applies to every back-row player, regardless of role." },
      ],
    },
    {
      question: "Scenario: at the moment of serve, the Zone 2 player is standing behind (further from the net than) the Zone 1 player. What is this?",
      answers: [
        { text: "An illegal overlap — Zone 2 must stay in front of Zone 1", correct: true, explanation: "Correct — this is a required front-back relationship." },
        { text: "A completely legal formation", correct: false, explanation: "This reverses the required front-back order for these same-column neighbors." },
        { text: "Irrelevant, since Zone 1 and Zone 2 have no required relationship", correct: false, explanation: "Zone 1 and Zone 2 are same-column neighbors, so a front-back rule applies." },
        { text: "Only a fault if it happens during the team's own serve", correct: false, explanation: "This positional rule applies to whichever team is about to serve, every time." },
      ],
    },
    {
      question: "Why is the setter's zone often used as a shorthand to describe a team's whole rotation?",
      answers: [
        { text: "Because every other role's zone follows automatically from the fixed rotation order once the setter's zone is known", correct: true, explanation: "Correct — this is exactly why the shorthand works." },
        { text: "Because the setter is the only player whose position is tracked", correct: false, explanation: "Every player's zone matters — the setter's zone is just a convenient reference." },
        { text: "Because the setter decides the whole team's positions out loud each rally", correct: false, explanation: "It's the fixed rotation order, not verbal calls, that determines this." },
        { text: "It isn't actually a real practice — teams don't do this", correct: false, explanation: "Labeling rotations by the setter's zone is a genuinely common practice." },
      ],
    },
    {
      question: "Scenario: your team just completed its sixth rotation of the set. What happens next?",
      answers: [
        { text: "The same six-rotation cycle begins again from the starting formation", correct: true, explanation: "Correct — the cycle repeats for as long as the set continues." },
        { text: "The set ends automatically", correct: false, explanation: "Sets end based on score, not the rotation cycle completing." },
        { text: "The team must select six entirely new starting players", correct: false, explanation: "There's no requirement to change the lineup after a full cycle." },
        { text: "The team is no longer allowed to rotate for the rest of the set", correct: false, explanation: "The cycle simply continues repeating." },
      ],
    },
  ],
};
/* ---------------------------------------------------------------------- */
/* Chapter 4 — Serve Receive (real content)                                */
/* ---------------------------------------------------------------------- */

const CHAPTER_4_LESSONS = [
  {
    id: 1,
    title: "What Is Serve Receive?",
    summary: "The first contact of a rally, and why a clean serve receive matters so much.",
    durationMin: 7,
    theory: [
      "Serve receive is the name for a team's very first contact of a rally: passing the opponent's serve under control so the team can begin building an attack. It's the foundation every rally is built on — nothing else in the rally can happen until the serve is received.",
      "The player who receives usually contacts the ball with a forearm pass, sometimes called a 'bump,' aiming to send the ball on a smooth, predictable path toward a target near the net rather than trying to place it perfectly by themselves. Control matters far more than power here.",
      "A good serve receive gives the setter every option: any hitter, any type of set, a full tempo attack. A poor serve receive narrows those options fast — the setter might only be able to reach one hitter, or might not even be able to set at all, forcing a simpler, safer play.",
      "Because the very first touch shapes everything that follows, teams spend enormous amounts of practice time on serve receive specifically. A team that receives serve well gives itself far more chances to win the rally than a team that struggles with this first contact.",
      "This chapter builds on the rotation concepts from the last one: exactly which players are responsible for receiving, and where they stand to do it, both depend on the team's current rotation — which is exactly what the next several lessons dig into.",
    ],
    keyTakeaway: "Serve receive is a team's first contact of the rally — a controlled pass of the opponent's serve toward the net — and how well it's done determines how many attacking options the setter has afterward.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The serve arrives deep in the court. The receiver passes it forward and up, sending it on a controlled path toward the target near the net.",
      activeZones: [6],
      labels: { 6: "R" },
      motions: {},
      ball: { path: [{ x: 50, y: -8 }, { x: 50, y: 70 }, { x: 45, y: 30 }] },
    },
    quiz: [
      {
        question: "What is serve receive?",
        answers: [
          { text: "A team's first contact of the rally, passing the opponent's serve", correct: true, explanation: "Correct — this is the definition of serve receive." },
          { text: "The action of hitting the ball over the net for a point", correct: false, explanation: "That describes an attack, not serve receive." },
          { text: "The referee's signal to begin a rally", correct: false, explanation: "Serve receive is a player action, not an officiating signal." },
          { text: "A type of serve used only in the back row", correct: false, explanation: "Serve receive is about receiving a serve, not a type of serve itself." },
        ],
      },
      {
        question: "What technique is most commonly used to receive a serve?",
        answers: [
          { text: "A forearm pass (bump)", correct: true, explanation: "Correct — this is the standard technique for serve receive." },
          { text: "An overhand set", correct: false, explanation: "Setting is typically the second contact, not how serves are usually received." },
          { text: "A one-handed tip", correct: false, explanation: "A tip is an attacking touch, not a serve-receive technique." },
          { text: "A two-handed overhead throw", correct: false, explanation: "Throwing the ball isn't a legal or standard technique at all." },
        ],
      },
      {
        question: "What matters most on a serve-receive contact?",
        answers: [
          { text: "Control — sending the ball on a smooth, predictable path", correct: true, explanation: "Correct — control matters far more than power on this contact." },
          { text: "Hitting the ball as hard as possible", correct: false, explanation: "Power isn't the goal here — a controlled, predictable pass is." },
          { text: "Making the pass land exactly on the centerline", correct: false, explanation: "The goal is a controlled pass toward a target near the net, not the centerline specifically." },
          { text: "Scoring a point directly off the reception", correct: false, explanation: "Serve receive is about starting the rally under control, not scoring immediately." },
        ],
      },
      {
        question: "What does a good serve receive give the setter?",
        answers: [
          { text: "Every attacking option — any hitter, any type of set", correct: true, explanation: "Correct — a clean pass keeps all offensive options open." },
          { text: "An automatic point", correct: false, explanation: "A good pass sets up the attack — it doesn't score automatically." },
          { text: "The right to serve next", correct: false, explanation: "The right to serve depends on winning the rally, not the pass quality." },
          { text: "A guaranteed substitution", correct: false, explanation: "Substitutions are unrelated to serve-receive quality." },
        ],
      },
      {
        question: "What can happen if a serve receive is poor?",
        answers: [
          { text: "The setter's options narrow, sometimes to just one hitter or a simpler play", correct: true, explanation: "Correct — a bad pass limits what the setter can do next." },
          { text: "The rally is automatically replayed", correct: false, explanation: "There's no automatic replay tied to a poor pass." },
          { text: "The receiving team automatically loses the point", correct: false, explanation: "A poor pass makes scoring harder, but doesn't automatically lose the point." },
          { text: "The serving team must serve again", correct: false, explanation: "The rally continues normally regardless of pass quality." },
        ],
      },
      {
        question: "Why do teams spend so much practice time on serve receive specifically?",
        answers: [
          { text: "Because it's the first touch and shapes everything that follows in the rally", correct: true, explanation: "Correct — nothing else can happen until the serve is received well." },
          { text: "Because it's the easiest skill to master, so it's a good warmup", correct: false, explanation: "It's actually considered a demanding skill, not an easy warmup." },
          { text: "Because rules require a fixed amount of receive practice", correct: false, explanation: "There's no such rule — this is a practical training choice." },
          { text: "Because only the libero is allowed to practice it", correct: false, explanation: "Serve receive practice involves multiple players, not just the libero." },
        ],
      },
      {
        question: "What does this chapter build on from the previous chapter?",
        answers: [
          { text: "Rotation — since receiving responsibilities depend on the current rotation", correct: true, explanation: "Correct — where each receiver stands depends on the team's rotation." },
          { text: "Scoring rules from a much earlier chapter", correct: false, explanation: "This chapter connects specifically to the rotation concepts just covered." },
          { text: "Substitution limits", correct: false, explanation: "This chapter's foundation is rotation, not substitution rules." },
          { text: "Net height regulations", correct: false, explanation: "Net height isn't the connecting concept for this chapter." },
        ],
      },
      {
        question: "Is serve receive considered part of the attack, or separate from it?",
        answers: [
          { text: "Separate — it's the first contact that sets up the attack that follows", correct: true, explanation: "Correct — serve receive comes before and enables the attack." },
          { text: "It is the attack itself", correct: false, explanation: "The attack is a separate, later contact in the sequence." },
          { text: "They are the exact same action", correct: false, explanation: "Receiving and attacking are distinct actions with different goals." },
          { text: "Serve receive happens after the attack", correct: false, explanation: "Serve receive is the very first contact, before any attack." },
        ],
      },
      {
        question: "What is the target that a serve-receive pass is usually aimed toward?",
        answers: [
          { text: "A spot near the net where the setter can reach it", correct: true, explanation: "Correct — this is the standard target for a serve-receive pass." },
          { text: "Directly back over the net to the opponent", correct: false, explanation: "That would end the rally immediately, not set up an attack." },
          { text: "The exact spot where the ball was served from", correct: false, explanation: "The target is near the setter's position, not the serve's origin." },
          { text: "Wherever the receiver happens to be standing", correct: false, explanation: "The pass is aimed at a specific target, not just wherever the receiver stands." },
        ],
      },
      {
        question: "What best summarizes the importance of serve receive?",
        answers: [
          { text: "It's the foundation of the rally — nothing else can happen until it's done", correct: true, explanation: "Correct — this captures why serve receive matters so much." },
          { text: "It's optional and can be skipped if the team prefers", correct: false, explanation: "Serve receive is a required first contact, not optional." },
          { text: "It only matters in the deciding set", correct: false, explanation: "Serve receive quality matters in every single rally, every set." },
          { text: "It's the least important contact in a rally", correct: false, explanation: "It's often considered one of the most important, since everything builds on it." },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Passing Zones",
    summary: "The back-row zones a team typically relies on to absorb the serve.",
    durationMin: 7,
    theory: [
      "Serve receive responsibility falls mainly on the back-row zones — Zones 5, 6 and 1 — since these are the players positioned deepest on the court and furthest from the net, giving them the best view and the most time to react to an incoming serve.",
      "Front-row players can and sometimes do receive as well, but teams generally try to keep their front-row attackers further from serve-receive duty, since those players need to save their energy and focus for transitioning into the attack once the ball is passed.",
      "Within the back row, the three zones don't cover perfectly equal areas — teams adjust who covers what based on serve speed, angle, and the specific strengths of their passers, but the general principle stays the same: the deep zones absorb the serve first.",
      "A team's passing zones aren't a fixed grid painted on the floor; they're a flexible area of responsibility that shifts depending on exactly where the serve is heading. A passer's 'zone' is really more about their area of primary responsibility than a strict boundary.",
      "Recognizing which zones are typically responsible for receiving is the first step toward understanding the specific receive formations covered in the next two lessons — three-person and two-person serve receive both build directly on this back-row foundation.",
    ],
    keyTakeaway: "Serve receive responsibility centers on the back-row zones — 5, 6 and 1 — since those players have the best view and most time to react, though the exact coverage shifts based on where the serve is heading.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The three back-row zones — 5, 6 and 1 — form a team's typical serve-receive area, each covering a portion of the court closest to their own position.",
      activeZones: [5, 6, 1],
      labels: { 5: "5", 6: "6", 1: "1" },
      motions: {},
      ball: null,
    },
    quiz: [
      {
        question: "Which zones typically hold the main serve-receive responsibility?",
        answers: [
          { text: "Zones 5, 6 and 1 — the back row", correct: true, explanation: "Correct — these deep zones have the best view and most reaction time." },
          { text: "Zones 2, 3 and 4 — the front row", correct: false, explanation: "Front-row players generally aren't the primary receivers." },
          { text: "Only Zone 1", correct: false, explanation: "Receiving responsibility spreads across all three back-row zones, not just one." },
          { text: "Whichever zone the setter is currently in", correct: false, explanation: "The setter's zone isn't what determines receiving responsibility." },
        ],
      },
      {
        question: "Why are back-row players well suited to receiving serve?",
        answers: [
          { text: "They're positioned deepest on the court, giving the best view and most reaction time", correct: true, explanation: "Correct — this positioning advantage is exactly why they receive." },
          { text: "They are required by rule to receive every serve", correct: false, explanation: "There's no such strict rule — it's a practical positioning advantage." },
          { text: "They are the tallest players on the team", correct: false, explanation: "Height isn't the reason — court position and reaction time are." },
          { text: "They are not allowed to attack, so receiving is their only job", correct: false, explanation: "Back-row players can attack under the attack-line rule — this isn't their only job." },
        ],
      },
      {
        question: "Why do teams often try to keep front-row attackers away from serve-receive duty?",
        answers: [
          { text: "So they can save energy and focus for transitioning into the attack", correct: true, explanation: "Correct — this lets attackers be ready to hit right after the pass." },
          { text: "Because front-row players are not allowed to touch the ball first", correct: false, explanation: "There's no rule preventing front-row players from receiving." },
          { text: "Because front-row players are always weaker passers", correct: false, explanation: "This is a strategic choice, not a statement about passing skill." },
          { text: "Because the ball can never reach the front row on a serve", correct: false, explanation: "Serves absolutely can be angled or driven toward the front row." },
        ],
      },
      {
        question: "Do the three back-row zones cover exactly equal areas of the court?",
        answers: [
          { text: "No — coverage is adjusted based on serve speed, angle and passer strengths", correct: true, explanation: "Correct — the split isn't a rigid equal division." },
          { text: "Yes, each always covers exactly one-third of the court", correct: false, explanation: "Coverage flexes based on the situation, not a fixed equal split." },
          { text: "Yes, and this never changes during a match", correct: false, explanation: "Teams adjust this actively depending on the serve they're facing." },
          { text: "No, only Zone 6 ever covers any area at all", correct: false, explanation: "All three back-row zones share receiving responsibility." },
        ],
      },
      {
        question: "Is a passer's 'zone' a strict, fixed boundary on the floor?",
        answers: [
          { text: "No — it's more of a flexible area of primary responsibility", correct: true, explanation: "Correct — it shifts depending on where the serve is actually heading." },
          { text: "Yes, marked with a painted line no player may cross", correct: false, explanation: "There's no such painted boundary restricting a passer's movement." },
          { text: "Yes, and stepping outside it is a rule violation", correct: false, explanation: "Passers can and do move outside their typical area to make a play." },
          { text: "No, passing zones don't really exist as a concept", correct: false, explanation: "They exist as a useful concept — they're just flexible, not rigid." },
        ],
      },
      {
        question: "What do these back-row passing zones set up for the next lessons in this chapter?",
        answers: [
          { text: "The specific three-person and two-person receive formations", correct: true, explanation: "Correct — both formations build directly on this back-row foundation." },
          { text: "The scoring rules for a set", correct: false, explanation: "Scoring rules were covered in an earlier chapter, unrelated to this one." },
          { text: "The libero's jersey color rule", correct: false, explanation: "That's a separate topic from serve-receive formations." },
          { text: "The net height regulations", correct: false, explanation: "Net height isn't connected to passing zone coverage." },
        ],
      },
      {
        question: "Can a front-row player ever be involved in serve receive?",
        answers: [
          { text: "Yes, though teams generally try to limit this", correct: true, explanation: "Correct — it happens, but isn't the preferred arrangement." },
          { text: "No, it's against the rules for a front-row player to receive", correct: false, explanation: "There's no rule against it — it's simply a tactical preference to avoid it." },
          { text: "Yes, and it's actually the most common arrangement", correct: false, explanation: "Back-row players are the more common, preferred receivers." },
          { text: "Only the middle blocker is allowed to receive from the front row", correct: false, explanation: "There's no such role-specific restriction." },
        ],
      },
      {
        question: "What factors influence how a team adjusts its passing-zone coverage?",
        answers: [
          { text: "Serve speed, angle, and the strengths of their passers", correct: true, explanation: "Correct — these are the main factors teams consider." },
          { text: "The current score of the set only", correct: false, explanation: "The score doesn't directly determine passing-zone coverage." },
          { text: "The color of the opposing team's jerseys", correct: false, explanation: "Jersey color has no bearing on passing-zone coverage." },
          { text: "The weather conditions only, in every match", correct: false, explanation: "Weather might matter outdoors, but it's not the defining factor described here." },
        ],
      },
      {
        question: "Which zone is on the back-right of the court, closest to where serves are hit from?",
        answers: [
          { text: "Zone 1", correct: true, explanation: "Correct — Zone 1 is the back-right, serving zone." },
          { text: "Zone 5", correct: false, explanation: "Zone 5 is on the back-left, not the back-right." },
          { text: "Zone 6", correct: false, explanation: "Zone 6 is in the back-middle, not the back-right." },
          { text: "Zone 2", correct: false, explanation: "Zone 2 is a front-row zone, not a back-row zone." },
        ],
      },
      {
        question: "What is the general principle behind which zones absorb the serve first?",
        answers: [
          { text: "The deep back-row zones absorb the serve first", correct: true, explanation: "Correct — this is the core principle of passing-zone coverage." },
          { text: "Whichever zone is closest to the net absorbs the serve first", correct: false, explanation: "This reverses the actual principle — the deep zones absorb it." },
          { text: "The team captain always takes the first touch", correct: false, explanation: "Team leadership role doesn't determine who receives." },
          { text: "It's decided randomly each rally by the referee", correct: false, explanation: "This is a tactical team decision, not a random referee assignment." },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Three-Person Serve Receive",
    summary: "A wider receiving formation that spreads coverage across three passers.",
    durationMin: 7,
    theory: [
      "Three-person serve receive uses three back-row players spread across the court to share the responsibility of covering every serve. This is a common, balanced formation — with three sets of eyes and three sets of hands on the ball, no single passer has to cover too much ground alone.",
      "The three receivers position themselves so their individual areas slightly overlap rather than leaving gaps, and communicate constantly — calling for the ball the instant they read where it's headed — so that even a serve landing between two of them still gets a clear, single answer for who takes it.",
      "Because three players are receiving, the remaining three players — usually including the setter — are freed up to focus entirely on their transition roles: the setter releasing to the net, and attackers preparing their approaches, without needing to worry about handling the first contact themselves.",
      "This formation tends to work especially well against fast, hard-driven serves, since a smaller area for each receiver to defend means less ground to cover and less time pressure on any single player to make a difficult read.",
      "The exact three zones used can shift depending on rotation and strategy, but the underlying idea stays the same: three receivers, evenly spread, sharing the court so that the whole receiving area is covered without gaps.",
    ],
    keyTakeaway: "Three-person serve receive spreads coverage across three back-row passers with slightly overlapping areas, freeing the setter and attackers to focus on their transition roles instead of receiving.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "Three receivers spread across the back row share the court, each shifting slightly to cover their area as the serve comes in.",
      activeZones: [5, 6, 1],
      labels: { 5: "R", 6: "R", 1: "R" },
      motions: {
        5: { dx: 6, dy: 0 },
        6: { dx: 0, dy: -4 },
        1: { dx: -6, dy: 0 },
      },
      ball: { path: [{ x: 60, y: -8 }, { x: 50, y: 68 }, { x: 45, y: 30 }] },
    },
    quiz: [
      {
        question: "How many receivers does three-person serve receive use?",
        answers: [
          { text: "Three", correct: true, explanation: "Correct — that's exactly what gives the formation its name." },
          { text: "Two", correct: false, explanation: "Two-person receive is a separate formation, covered in the next lesson." },
          { text: "Six", correct: false, explanation: "Using all six players to receive would leave no one to run the offense." },
          { text: "One", correct: false, explanation: "A single receiver would have to cover far too much court alone." },
        ],
      },
      {
        question: "What is the main benefit of spreading receive across three players?",
        answers: [
          { text: "No single passer has to cover too much ground alone", correct: true, explanation: "Correct — sharing the court reduces the burden on each individual receiver." },
          { text: "It automatically wins the point", correct: false, explanation: "This formation improves passing quality, not an automatic point." },
          { text: "It allows the team to skip the setter entirely", correct: false, explanation: "The setter's role is unaffected by how many players receive." },
          { text: "It lets the team serve twice in a row", correct: false, explanation: "Serve receive formation has no effect on serving turns." },
        ],
      },
      {
        question: "Why do the three receivers' areas slightly overlap rather than leave gaps?",
        answers: [
          { text: "So a serve landing between two of them still gets a clear answer for who takes it", correct: true, explanation: "Correct — overlap prevents confusion on seam balls." },
          { text: "Because the rules require overlapping coverage", correct: false, explanation: "This is a tactical choice, not a rule requirement." },
          { text: "So the receivers can practice tackling each other", correct: false, explanation: "Overlap is about coverage clarity, not physical contact." },
          { text: "Because the court is too small for non-overlapping zones", correct: false, explanation: "The overlap is a deliberate coverage strategy, not a court-size issue." },
        ],
      },
      {
        question: "What are the other three players (not receiving) usually free to focus on?",
        answers: [
          { text: "Their transition roles — the setter releasing, attackers preparing to approach", correct: true, explanation: "Correct — this is exactly what frees them up." },
          { text: "Serving the next point", correct: false, explanation: "Serving isn't relevant mid-rally during their own team's receive." },
          { text: "Leaving the court", correct: false, explanation: "They stay on court, just focused on different roles." },
          { text: "Blocking the opponent's next attack immediately", correct: false, explanation: "That comes later in the rally, not during serve receive itself." },
        ],
      },
      {
        question: "Against what type of serve does three-person receive tend to work especially well?",
        answers: [
          { text: "Fast, hard-driven serves", correct: true, explanation: "Correct — smaller individual areas help against tougher, faster serves." },
          { text: "Serves that never leave the server's hand", correct: false, explanation: "Every legal serve leaves the server's hand — this isn't a real distinction." },
          { text: "Only underhand serves", correct: false, explanation: "This formation isn't specifically tied to underhand serving." },
          { text: "Serves that are called illegal before they're hit", correct: false, explanation: "An illegal serve wouldn't need to be received at all." },
        ],
      },
      {
        question: "Does using three-person receive mean the setter also receives serve?",
        answers: [
          { text: "Usually not — the setter is typically one of the three players freed up to transition", correct: true, explanation: "Correct — three-person receive frees the setter from receiving duty." },
          { text: "Yes, the setter is always one of the three receivers", correct: false, explanation: "Teams generally keep the setter out of the receiving group when possible." },
          { text: "Yes, but only if the setter is in the front row", correct: false, explanation: "Regardless of row, teams generally try to free the setter from receiving." },
          { text: "It's impossible to know without seeing the exact rotation", correct: false, explanation: "The general pattern is to keep the setter out of the three receivers." },
        ],
      },
      {
        question: "Do the exact three zones used in this formation ever change?",
        answers: [
          { text: "Yes, depending on rotation and strategy", correct: true, explanation: "Correct — the specific zones can shift while the underlying idea stays the same." },
          { text: "No, it's always Zones 5, 6 and 1 with no variation", correct: false, explanation: "While these are common, the exact zones can shift by rotation and strategy." },
          { text: "No, the zones used are chosen by the opposing team", correct: false, explanation: "A team chooses its own receiving formation, not the opponent." },
          { text: "Yes, but only between different matches, never within one", correct: false, explanation: "Formation choices can shift within a single match based on rotation." },
        ],
      },
      {
        question: "What does constant communication between the three receivers help prevent?",
        answers: [
          { text: "Confusion over who takes a serve landing between two of them", correct: true, explanation: "Correct — calling for the ball clears up exactly this situation." },
          { text: "The ball from ever being served at all", correct: false, explanation: "Communication doesn't prevent a serve — it helps receive it cleanly." },
          { text: "The setter from being able to set", correct: false, explanation: "This communication supports the play, it doesn't hinder the setter." },
          { text: "The team from needing to rotate", correct: false, explanation: "Rotation is a separate mechanic, unrelated to receiver communication." },
        ],
      },
      {
        question: "What is the core idea behind three-person serve receive?",
        answers: [
          { text: "Three receivers spread evenly to share full court coverage without gaps", correct: true, explanation: "Correct — this is the essence of the formation." },
          { text: "One receiver covers the entire court alone while two rest", correct: false, explanation: "The whole point is to share the coverage across all three." },
          { text: "Three receivers all stand in the exact same spot", correct: false, explanation: "They spread out across the court, not cluster together." },
          { text: "Receivers switch positions with attackers mid-rally", correct: false, explanation: "This describes a swap, not the spread-coverage concept of this formation." },
        ],
      },
      {
        question: "Which row of players typically makes up a three-person receive formation?",
        answers: [
          { text: "The back row", correct: true, explanation: "Correct — back-row players are the typical receivers in this formation." },
          { text: "The front row", correct: false, explanation: "Front-row players are usually freed from receiving duty in this setup." },
          { text: "A mix of two front-row and one back-row player", correct: false, explanation: "The standard formation draws its three receivers from the back row." },
          { text: "Whichever players are closest to the net", correct: false, explanation: "Receivers are typically the deepest players, not the ones closest to the net." },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Two-Person Serve Receive",
    summary: "A leaner receiving formation used when a team wants more players free for offense.",
    durationMin: 7,
    theory: [
      "Two-person serve receive uses just two back-row players to cover the whole receiving area between them, freeing up a fourth player beyond what a three-person formation would allow — useful when a team wants to commit more players to their transition attack.",
      "With only two receivers, each one has to cover noticeably more court than they would in a three-person formation, so the two typically stand wider apart, splitting the width of the court roughly in half between them.",
      "This formation is often used by teams with a strong, dependable pair of passers — since there's less margin for error with only two people covering the same area three would otherwise share, the two chosen receivers usually have to be especially reliable.",
      "Two-person receive tends to be more vulnerable against a well-placed serve aimed right at the seam between the two receivers, since there's no third player nearby to help close that gap the way there would be in a three-person setup.",
      "Choosing between two-person and three-person receive is a real tactical decision teams make rotation by rotation — trading some passing security for extra attacking presence, or the reverse, depending on what the team values most in that specific lineup.",
    ],
    keyTakeaway: "Two-person serve receive uses only two back-row passers spread wide to split the court, freeing an extra player for offense at the cost of a bigger seam and less margin for error on each pass.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "Only two receivers cover the back row, spreading wide to split the court's width between them while a third back-row player is freed for another role.",
      activeZones: [5, 1],
      labels: { 5: "R", 1: "R" },
      motions: {
        5: { dx: -10, dy: 0 },
        1: { dx: 10, dy: 0 },
      },
      ball: { path: [{ x: 55, y: -8 }, { x: 65, y: 65 }, { x: 45, y: 30 }] },
    },
    quiz: [
      {
        question: "How many receivers does two-person serve receive use?",
        answers: [
          { text: "Two", correct: true, explanation: "Correct — that's exactly what gives the formation its name." },
          { text: "Three", correct: false, explanation: "Three-person receive is the separate formation from the previous lesson." },
          { text: "Four", correct: false, explanation: "Four receivers would be more than either standard formation uses." },
          { text: "Six", correct: false, explanation: "Using all six players to receive would leave no one to attack." },
        ],
      },
      {
        question: "What does using only two receivers free up compared to a three-person formation?",
        answers: [
          { text: "An extra player beyond what three-person receive would allow, for more offensive presence", correct: true, explanation: "Correct — this is the main trade-off of the formation." },
          { text: "An extra substitution for the match", correct: false, explanation: "Substitution counts are unrelated to receive formation choice." },
          { text: "An extra timeout for the set", correct: false, explanation: "Timeouts are a separate mechanic, unaffected by receive formation." },
          { text: "The team's serving turn", correct: false, explanation: "Serving turns are decided by rotation and rally outcomes, not receive formation." },
        ],
      },
      {
        question: "How do the two receivers typically position themselves?",
        answers: [
          { text: "Wider apart, splitting the court's width roughly in half between them", correct: true, explanation: "Correct — each has to cover more ground, so they spread out further." },
          { text: "Standing directly next to each other", correct: false, explanation: "Standing close together would leave large uncovered areas." },
          { text: "One in the front row, one in the back row", correct: false, explanation: "Both receivers in this formation are typically back-row players." },
          { text: "Exactly on the centerline", correct: false, explanation: "The centerline is under the net — receivers position themselves in the back row." },
        ],
      },
      {
        question: "Why might a team use two-person receive only with a strong, dependable pair of passers?",
        answers: [
          { text: "Because there's less margin for error with fewer people covering the same area", correct: true, explanation: "Correct — reliability matters more when fewer players share the load." },
          { text: "Because the rules require experienced players for this formation", correct: false, explanation: "There's no such rule — it's a practical, tactical consideration." },
          { text: "Because inexperienced players are not allowed in the back row", correct: false, explanation: "Any player can be in the back row — this is about tactical reliability." },
          { text: "Because two-person receive requires taller players", correct: false, explanation: "Height isn't the relevant factor here — passing reliability is." },
        ],
      },
      {
        question: "What is a common vulnerability of two-person receive?",
        answers: [
          { text: "A well-placed serve aimed at the seam between the two receivers", correct: true, explanation: "Correct — with no third player nearby, this seam is harder to cover." },
          { text: "It cannot be used against any serve at all", correct: false, explanation: "It's a fully usable formation — it just has this specific vulnerability." },
          { text: "It requires an illegal number of players", correct: false, explanation: "Two-person receive uses a perfectly legal number of receivers." },
          { text: "It only works if the opposing team agrees to it", correct: false, explanation: "A team chooses its own receive formation independently." },
        ],
      },
      {
        question: "What kind of decision is choosing between two-person and three-person receive?",
        answers: [
          { text: "A real tactical decision made rotation by rotation", correct: true, explanation: "Correct — teams weigh passing security against attacking presence." },
          { text: "A fixed rule that never changes during a match", correct: false, explanation: "Teams can and do change this choice throughout a match." },
          { text: "A decision made entirely by the referee", correct: false, explanation: "This is a team's own tactical choice, not an officiating decision." },
          { text: "A random choice with no strategic reasoning behind it", correct: false, explanation: "This choice is a deliberate trade-off, not a random one." },
        ],
      },
      {
        question: "What is the main trade-off a team accepts by using two-person receive?",
        answers: [
          { text: "Trading some passing security for extra attacking presence", correct: true, explanation: "Correct — this is exactly the trade-off described in this lesson." },
          { text: "Trading serving turns for extra timeouts", correct: false, explanation: "This formation choice doesn't affect serving turns or timeouts." },
          { text: "Trading net height for court width", correct: false, explanation: "Neither net height nor court dimensions change based on formation." },
          { text: "Trading the libero's role for the setter's role", correct: false, explanation: "Role assignments aren't swapped based on this formation choice." },
        ],
      },
      {
        question: "Compared to three-person receive, does each two-person receiver cover more or less court?",
        answers: [
          { text: "More", correct: true, explanation: "Correct — with one fewer receiver, each has to cover more ground." },
          { text: "Less", correct: false, explanation: "Fewer receivers means each one covers more area, not less." },
          { text: "The exact same amount", correct: false, explanation: "The coverage area per player changes with the number of receivers." },
          { text: "It depends entirely on the referee's positioning", correct: false, explanation: "Court coverage is a team tactical matter, unrelated to referee position." },
        ],
      },
      {
        question: "Is two-person receive a legal, standard formation in volleyball?",
        answers: [
          { text: "Yes, it's a legitimate tactical choice teams make", correct: true, explanation: "Correct — both two-person and three-person receive are standard options." },
          { text: "No, receiving always requires at least three players by rule", correct: false, explanation: "There's no such minimum-player rule for serve receive." },
          { text: "No, it was banned from modern volleyball", correct: false, explanation: "Two-person receive remains a normal, legal tactical option." },
          { text: "Only in beach volleyball, never indoors", correct: false, explanation: "This lesson covers indoor volleyball, where two-person receive is also used." },
        ],
      },
      {
        question: "What is the core idea behind two-person serve receive?",
        answers: [
          { text: "Fewer, more reliable receivers cover the court, freeing an extra player for offense", correct: true, explanation: "Correct — this captures the formation's purpose precisely." },
          { text: "Two receivers stand in the exact same spot for double coverage", correct: false, explanation: "They spread wide to split the court, not stack together." },
          { text: "The formation eliminates the need for a setter", correct: false, explanation: "The setter's role is unaffected by this receive formation." },
          { text: "It uses two front-row players instead of back-row players", correct: false, explanation: "The two receivers are typically back-row players, like other receive formations." },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Understanding Seams",
    summary: "The gaps between receivers, and how teams decide who takes responsibility for them.",
    durationMin: 7,
    theory: [
      "A 'seam' is the gap between two neighboring receivers — the space where it's genuinely unclear, at first glance, which of them should take the ball. Seams exist in every receive formation, whether it's two-person, three-person, or anything else, simply because no two players can occupy the same spot.",
      "Good servers deliberately target seams, since a ball landing right between two receivers is the hardest kind of serve to handle cleanly — both players might hesitate, both might reach, or worse, both might assume the other has it.",
      "The fix isn't positioning alone; it's communication. Receivers are trained to call out loudly and immediately — 'mine' or a teammate's name — the instant they've decided to take a ball in the seam, so there's no ambiguity left by the time either of them actually needs to move.",
      "As a general principle, the receiver moving forward (toward the net) usually has priority over a teammate moving sideways or backward to the same ball, since a player already moving toward the target has an easier path to a controlled pass than one scrambling sideways.",
      "Seams shift constantly, because they exist between whichever two players happen to be neighbors in that specific formation — a team using two-person receive has a very different, wider seam than one using three-person receive, which is part of why formation choice (the last two lessons) matters so much.",
    ],
    keyTakeaway: "A seam is the gap between two receivers where responsibility for the ball isn't automatically clear — good servers target it, and the fix is loud, early communication rather than positioning alone.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The serve is aimed right into the seam — the gap between two receivers. Whoever calls for it first and moves forward takes responsibility for the ball.",
      activeZones: [6, 1],
      labels: { 6: "R", 1: "R" },
      motions: {},
      ball: { path: [{ x: 70, y: -8 }, { x: 66, y: 62 }] },
    },
    quiz: [
      {
        question: "What is a 'seam' in serve receive?",
        answers: [
          { text: "The gap between two neighboring receivers", correct: true, explanation: "Correct — this is exactly what a seam refers to." },
          { text: "A stitched line on the volleyball itself", correct: false, explanation: "This lesson's 'seam' refers to court positioning, not the ball's construction." },
          { text: "The boundary line at the edge of the court", correct: false, explanation: "That's a sideline or end line, a different concept entirely." },
          { text: "The exact center of the net", correct: false, explanation: "A seam is between two receivers on court, not a net location." },
        ],
      },
      {
        question: "Why do seams exist in every receive formation?",
        answers: [
          { text: "Because no two players can occupy the exact same spot", correct: true, explanation: "Correct — any gap between neighboring receivers creates a seam." },
          { text: "Because the court is too large to cover completely", correct: false, explanation: "Seams exist due to player spacing, not overall court size." },
          { text: "Because the rules require a gap between receivers", correct: false, explanation: "There's no rule mandating a gap — it's simply a natural consequence of spacing." },
          { text: "Only in two-person receive, never in three-person receive", correct: false, explanation: "Seams exist in every formation, just in different places." },
        ],
      },
      {
        question: "Why do good servers deliberately target seams?",
        answers: [
          { text: "Because a ball landing between two receivers is hardest to handle cleanly", correct: true, explanation: "Correct — hesitation or confusion there often leads to a worse pass." },
          { text: "Because hitting a seam automatically scores a point", correct: false, explanation: "It makes the pass harder, but doesn't automatically win the rally." },
          { text: "Because it's the only legal place to serve", correct: false, explanation: "Servers can legally aim anywhere within the court, not just seams." },
          { text: "Because seams are marked with a special line", correct: false, explanation: "There's no physical line marking a seam — it's a positional gap." },
        ],
      },
      {
        question: "What is the main fix for handling seam balls well?",
        answers: [
          { text: "Loud, early communication between receivers", correct: true, explanation: "Correct — calling for the ball removes the ambiguity." },
          { text: "Standing perfectly still until the ball lands", correct: false, explanation: "Standing still doesn't resolve who should take the ball." },
          { text: "Always letting the taller player take it", correct: false, explanation: "Height isn't the deciding factor — communication and positioning are." },
          { text: "Switching to a completely different sport strategy", correct: false, explanation: "The fix is a communication habit within the same formation, not a strategy overhaul." },
        ],
      },
      {
        question: "What might happen if both receivers stay silent on a seam ball?",
        answers: [
          { text: "Both might hesitate, both might reach, or both might assume the other has it", correct: true, explanation: "Correct — this is exactly the risk of poor communication on a seam." },
          { text: "The ball automatically goes out of bounds", correct: false, explanation: "The ball's path isn't affected by whether receivers communicate." },
          { text: "The rally is stopped for a mandatory timeout", correct: false, explanation: "There's no rule triggering a timeout in this situation." },
          { text: "The referee assigns the ball to whichever player is closer", correct: false, explanation: "Officials don't assign responsibility for a ball between teammates." },
        ],
      },
      {
        question: "As a general priority rule, who usually takes a seam ball?",
        answers: [
          { text: "The receiver moving forward toward the net", correct: true, explanation: "Correct — moving toward the target gives an easier path to a controlled pass." },
          { text: "Whoever is standing furthest from the net", correct: false, explanation: "The general principle favors the player moving forward, not the furthest one." },
          { text: "The setter, regardless of position", correct: false, explanation: "The setter is usually not even one of the receivers involved." },
          { text: "Whichever player calls a timeout first", correct: false, explanation: "Timeouts have no connection to who takes a seam ball." },
        ],
      },
      {
        question: "Why does a player moving forward have priority over one moving sideways to the same ball?",
        answers: [
          { text: "They have an easier path to a controlled pass than a player scrambling sideways", correct: true, explanation: "Correct — this positioning advantage is the reasoning behind the priority." },
          { text: "Forward movement is required by the rules", correct: false, explanation: "This is a practical tactical guideline, not a formal rule." },
          { text: "Sideways movement is illegal during serve receive", correct: false, explanation: "Moving sideways is completely legal — it's just a harder angle for a clean pass." },
          { text: "It has nothing to do with the quality of the resulting pass", correct: false, explanation: "The whole reasoning is specifically about pass quality and control." },
        ],
      },
      {
        question: "Does a seam stay in the same place regardless of which receive formation is used?",
        answers: [
          { text: "No — it shifts depending on which two players are neighbors in that formation", correct: true, explanation: "Correct — different formations create different seams." },
          { text: "Yes, seams are fixed to the exact same spot on the court always", correct: false, explanation: "Seams move with whichever formation and players are currently receiving." },
          { text: "Yes, but only between Zone 5 and Zone 6", correct: false, explanation: "A seam can occur between any two neighboring receivers, not just those two zones." },
          { text: "No, seams only exist in two-person receive", correct: false, explanation: "Seams exist in every formation, including three-person receive." },
        ],
      },
      {
        question: "Why does formation choice (two-person vs. three-person) matter for seams?",
        answers: [
          { text: "A two-person formation creates a wider seam than a three-person one", correct: true, explanation: "Correct — fewer receivers spread wider apart means a bigger gap between them." },
          { text: "Formation choice has no effect on where seams appear", correct: false, explanation: "Formation choice directly changes how many seams exist and how wide they are." },
          { text: "Three-person receive has no seams at all", correct: false, explanation: "Even three-person receive has seams between its receivers, just smaller ones." },
          { text: "Seams only appear in two-person receive, never in three-person receive", correct: false, explanation: "Both formations have seams — the difference is in their size and number." },
        ],
      },
      {
        question: "What is the best summary of how a team should handle a serve aimed at a seam?",
        answers: [
          { text: "Communicate early and let the receiver best positioned to move forward take it", correct: true, explanation: "Correct — this combines both key principles from the lesson." },
          { text: "Ignore it and let the ball land untouched", correct: false, explanation: "Letting the ball land untouched would simply lose the rally." },
          { text: "Both receivers should always dive for it simultaneously", correct: false, explanation: "This risks collision — clear communication is the better approach." },
          { text: "Call a timeout immediately whenever a seam serve is spotted", correct: false, explanation: "There's no need for a timeout — this is handled through in-play communication." },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "The Setter's Target",
    summary: "The specific spot near the net a pass should reach, and why it matters so much.",
    durationMin: 7,
    theory: [
      "The 'target' is a specific, small area near the net — not the setter's exact body, but a consistent spot the setter can reach quickly and set from comfortably, usually somewhere around the middle of the front row, a step or two off the net.",
      "Aiming a pass at this fixed target, rather than directly at wherever the setter happens to be standing, matters because the setter is often on the move themselves — releasing from a back-row zone, as covered back in the rotation chapter. A ball aimed at a moving person is a much harder target than a ball aimed at a fixed spot.",
      "A pass that reaches the target lets the setter arrive, plant their feet, and set with their whole body under control, which is exactly what allows for accurate, varied sets. A pass that lands even a meter or two off target often forces the setter to reach, stretch, or run it down instead.",
      "Because the target is defined relative to the net and the court, not relative to the setter's current position, it actually stays the same target regardless of which rotation is in play or where the setter started that particular rotation.",
      "Coaches and passers train specifically toward this target using repetition — serve after serve, pass after pass — because consistently hitting the same small area is what turns serve receive from an unpredictable scramble into a repeatable, reliable part of the offense.",
    ],
    keyTakeaway: "The target is a fixed spot near the net, not the setter's exact body — a well-aimed pass reaches this spot so the setter can arrive under control and set accurately, rather than chasing a stray ball.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The receiver passes the serve toward a fixed target near the net — not toward the setter's exact position, but to a consistent spot the setter can run onto.",
      activeZones: [6],
      labels: { 6: "R" },
      motions: {},
      ball: { path: [{ x: 50, y: -8 }, { x: 50, y: 66 }, { x: 62, y: 14 }] },
    },
    quiz: [
      {
        question: "What is the 'target' in serve receive?",
        answers: [
          { text: "A specific, consistent spot near the net the pass should reach", correct: true, explanation: "Correct — this is the definition used in this lesson." },
          { text: "The exact spot where the serve was originally hit from", correct: false, explanation: "The target is near the net on the receiving team's side, unrelated to the serve's origin." },
          { text: "Wherever the setter happens to be standing at that instant", correct: false, explanation: "The target is a fixed spot, not the setter's current, possibly moving, position." },
          { text: "The centerline under the net", correct: false, explanation: "The target is a spot in the front row near the net, not the centerline itself." },
        ],
      },
      {
        question: "Why is the target a fixed spot rather than 'wherever the setter is standing'?",
        answers: [
          { text: "Because the setter is often on the move, and a fixed spot is easier to aim at than a moving person", correct: true, explanation: "Correct — this is exactly the reasoning given in this lesson." },
          { text: "Because setters are not allowed to move during a rally", correct: false, explanation: "Setters move constantly — that's precisely why a fixed target works better." },
          { text: "Because the target changes to match the score", correct: false, explanation: "The target's location is unrelated to the score." },
          { text: "Because only one target exists per entire match", correct: false, explanation: "The target concept applies to every single serve-receive pass, not once per match." },
        ],
      },
      {
        question: "What does a pass that reaches the target let the setter do?",
        answers: [
          { text: "Arrive, plant their feet, and set with their whole body under control", correct: true, explanation: "Correct — this control is what makes accurate, varied sets possible." },
          { text: "Automatically win the rally", correct: false, explanation: "A good pass sets up the play — it doesn't win the rally by itself." },
          { text: "Skip their turn to set", correct: false, explanation: "The setter still needs to set — a good pass just makes it easier." },
          { text: "Serve the next point immediately", correct: false, explanation: "Serving order is unrelated to how well a pass reaches the target." },
        ],
      },
      {
        question: "What often happens if a pass lands well off the target?",
        answers: [
          { text: "The setter has to reach, stretch, or run the ball down instead", correct: true, explanation: "Correct — an off-target pass makes the setter's job much harder." },
          { text: "The point is automatically awarded to the serving team", correct: false, explanation: "An off-target pass doesn't automatically end the rally." },
          { text: "The rally is replayed from scratch", correct: false, explanation: "There's no automatic replay for an off-target pass." },
          { text: "The setter is substituted out immediately", correct: false, explanation: "A single off-target pass doesn't trigger an automatic substitution." },
        ],
      },
      {
        question: "Does the target's location change depending on which rotation is currently in play?",
        answers: [
          { text: "No — it stays fixed relative to the net and court", correct: true, explanation: "Correct — the target's location doesn't shift by rotation." },
          { text: "Yes, it moves to match the setter's starting zone each rotation", correct: false, explanation: "The target is fixed, precisely so it doesn't depend on the setter's starting zone." },
          { text: "Yes, it moves to the opposite side of the court each rotation", correct: false, explanation: "There's no such shifting rule for the target." },
          { text: "It only exists during specific rotations", correct: false, explanation: "The target concept applies in every rotation, every rally." },
        ],
      },
      {
        question: "Why do coaches emphasize repetition when training toward the target?",
        answers: [
          { text: "Because consistently hitting the same small area turns receive into something reliable, not a scramble", correct: true, explanation: "Correct — this repeatability is the whole point of the training focus." },
          { text: "Because repetition is required by official volleyball rules", correct: false, explanation: "This is a training method, not a rule requirement." },
          { text: "Because it helps players memorize the scoring system", correct: false, explanation: "This training is about passing accuracy, unrelated to scoring rules." },
          { text: "Because it changes how many contacts a team is allowed", correct: false, explanation: "The three-contact rule is unrelated to target-passing practice." },
        ],
      },
      {
        question: "Roughly where is the target usually located?",
        answers: [
          { text: "Around the middle of the front row, a step or two off the net", correct: true, explanation: "Correct — this matches the typical target location described." },
          { text: "In the back-right corner of the court", correct: false, explanation: "The target is near the net in the front row, not the back-right corner." },
          { text: "Directly on the net itself", correct: false, explanation: "The target sits a step or two off the net, not touching it." },
          { text: "In the service zone behind the end line", correct: false, explanation: "The service zone is nowhere near the target's actual location." },
        ],
      },
      {
        question: "What is the relationship between a good pass and the setter's options?",
        answers: [
          { text: "A pass that hits the target gives the setter more options and more control", correct: true, explanation: "Correct — this connects directly to what earlier lessons covered too." },
          { text: "There is no relationship between them", correct: false, explanation: "Pass quality and setter options are closely connected." },
          { text: "A good pass always removes the setter's options", correct: false, explanation: "The opposite is true — a good pass expands the setter's options." },
          { text: "The setter's options are decided before the serve happens", correct: false, explanation: "The setter's real options depend heavily on how well the pass lands." },
        ],
      },
      {
        question: "Is aiming for the target only useful in specific rotations?",
        answers: [
          { text: "No, it applies on every single serve-receive pass, in every rotation", correct: true, explanation: "Correct — the target is a constant goal, not a rotation-specific one." },
          { text: "Yes, only when the setter starts in the back row", correct: false, explanation: "The target matters regardless of the setter's starting zone." },
          { text: "Yes, only during the deciding set", correct: false, explanation: "Aiming for the target matters in every set, not just the decider." },
          { text: "Yes, only against certain opposing servers", correct: false, explanation: "The target concept applies against every serve, not select opponents." },
        ],
      },
      {
        question: "What best summarizes why the target matters so much in serve receive?",
        answers: [
          { text: "It turns a moving, unpredictable target (the setter) into a fixed, reliable aiming point for passers", correct: true, explanation: "Correct — this captures the core reasoning of the lesson." },
          { text: "It guarantees the setter never has to move at all", correct: false, explanation: "The setter still moves to the target — the target just gives them a reliable spot to move toward." },
          { text: "It removes the need for a setter entirely", correct: false, explanation: "The setter's role remains essential — the target just makes their job easier." },
          { text: "It only matters for teaching beginners, not experienced teams", correct: false, explanation: "Even experienced, elite teams train and rely on hitting this target consistently." },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Moving From Receive to Attack",
    summary: "How a team's shape shifts from a receiving formation into an attacking one in the seconds after the pass.",
    durationMin: 8,
    theory: [
      "The moment a receiver contacts the serve, the whole team's job shifts: receivers who just passed begin recovering into a supportive position, the setter is already moving toward the target, and hitters begin their transition into an attacking approach — all within just a second or two.",
      "Front-row hitters typically start serve receive standing a little off the net, deeper than their eventual attacking spot, specifically to leave themselves room for a proper approach — a hitter starting right at the net has no runway left to build speed and power into their jump.",
      "As the pass travels toward the target, hitters read its flight and time their approach to arrive at the net just as the setter is about to deliver the ball to them — arriving too early means standing and waiting awkwardly, arriving too late means missing the timing of the set entirely.",
      "This whole sequence — pass, set, attack — has to happen quickly, but each part depends on the one before it: a clean pass gives the setter time to choose confidently, and a well-timed set gives the hitter a rhythm to attack on, rather than reacting to a surprise.",
      "Watching this transition closely is one of the best ways to judge a team's overall readiness: a team that flows smoothly from receiving shape into attacking shape, without hesitation or bunched-up players, usually has a well-drilled system running underneath it.",
    ],
    keyTakeaway: "The instant a serve is received, the team transitions fast: the setter releases to the target, hitters who started deep begin their timed approach to the net, and the whole shape shifts from a receiving formation into an attacking one within a second or two.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "As the pass travels toward the target, the Outside Hitter — who started deeper for a running start — approaches the net to time their attack.",
      activeZones: [6, 4],
      labels: { 6: "R", 4: "OH" },
      motions: { 4: { dx: 0, dy: -10 } },
      ball: { path: [{ x: 50, y: -8 }, { x: 50, y: 66 }, { x: 20, y: 14 }] },
    },
    quiz: [
      {
        question: "What begins the instant a receiver contacts the serve?",
        answers: [
          { text: "The whole team's transition into their next roles — recovery, setting and attacking", correct: true, explanation: "Correct — this transition begins immediately after the first touch." },
          { text: "A mandatory pause before anyone can move", correct: false, explanation: "There's no pause — the transition begins immediately." },
          { text: "The rotation of the entire team", correct: false, explanation: "Rotation only happens on a side-out, not after every serve receive." },
          { text: "The opposing team's substitution window", correct: false, explanation: "This is about the receiving team's own transition, not the opponent's substitutions." },
        ],
      },
      {
        question: "Why do front-row hitters often start serve receive standing off the net?",
        answers: [
          { text: "To leave room for a proper approach before attacking", correct: true, explanation: "Correct — starting right at the net leaves no runway to build speed and power." },
          { text: "Because they are not allowed to stand near the net during receive", correct: false, explanation: "There's no such rule — this is a tactical positioning choice." },
          { text: "Because the net is dangerous to stand near", correct: false, explanation: "Safety isn't the reasoning — approach distance is." },
          { text: "Because the libero requires that space", correct: false, explanation: "This positioning is about the hitter's own approach, not the libero." },
        ],
      },
      {
        question: "What are hitters doing as the pass travels toward the target?",
        answers: [
          { text: "Reading its flight and timing their approach to the net", correct: true, explanation: "Correct — this timing is crucial to a well-executed attack." },
          { text: "Standing completely still until the set is delivered", correct: false, explanation: "Hitters are actively moving and timing their run during this phase." },
          { text: "Leaving the court to be substituted", correct: false, explanation: "Hitters stay on court, actively preparing to attack." },
          { text: "Serving the next point", correct: false, explanation: "This all happens mid-rally, well before any next serve." },
        ],
      },
      {
        question: "What happens if a hitter arrives at the net too early?",
        answers: [
          { text: "They end up standing and waiting awkwardly for the set", correct: true, explanation: "Correct — early arrival disrupts a hitter's attacking rhythm." },
          { text: "They are awarded an automatic point", correct: false, explanation: "Early arrival doesn't score a point — it just hurts timing." },
          { text: "The set becomes illegal", correct: false, explanation: "There's no such rule tied to a hitter's arrival timing." },
          { text: "The rally is stopped", correct: false, explanation: "Play continues normally — the hitter simply has worse timing." },
        ],
      },
      {
        question: "What happens if a hitter arrives at the net too late?",
        answers: [
          { text: "They miss the timing of the set entirely", correct: true, explanation: "Correct — late arrival means the set may already be there without a hitter ready." },
          { text: "They are given a bonus contact to make up for it", correct: false, explanation: "There's no such rule providing an extra contact for mistimed arrival." },
          { text: "The team automatically rotates", correct: false, explanation: "Rotation is unrelated to a hitter's approach timing." },
          { text: "The opposing team must replay the point", correct: false, explanation: "Mistimed approaches don't trigger a replay." },
        ],
      },
      {
        question: "How does a clean pass affect the setter's decision-making?",
        answers: [
          { text: "It gives the setter time to choose confidently among options", correct: true, explanation: "Correct — a clean pass creates the time and control needed for good decisions." },
          { text: "It removes the setter's need to make any decision", correct: false, explanation: "The setter still chooses where to set — a clean pass just makes that choice easier." },
          { text: "It forces the setter to always set the same hitter", correct: false, explanation: "A clean pass actually opens up more options, not fewer." },
          { text: "It has no effect on the setter's decisions", correct: false, explanation: "Pass quality directly shapes what options the setter has available." },
        ],
      },
      {
        question: "What sequence does this lesson describe, in order?",
        answers: [
          { text: "Pass, then set, then attack", correct: true, explanation: "Correct — this is the standard sequence covered in this lesson." },
          { text: "Attack, then set, then pass", correct: false, explanation: "This reverses the actual order of the sequence." },
          { text: "Set, then pass, then attack", correct: false, explanation: "The pass always comes before the set in this sequence." },
          { text: "Serve, then attack, then pass", correct: false, explanation: "The serve itself starts the rally — pass, set, attack follows it." },
        ],
      },
      {
        question: "What is one good way to judge a team's overall readiness?",
        answers: [
          { text: "How smoothly they flow from receiving shape into attacking shape", correct: true, explanation: "Correct — this smooth transition reflects a well-drilled system." },
          { text: "How loudly the team celebrates after scoring", correct: false, explanation: "Celebration volume doesn't reflect tactical readiness." },
          { text: "How many substitutions the team makes", correct: false, explanation: "Substitution count isn't a direct measure of transition quality." },
          { text: "How tall the team's tallest player is", correct: false, explanation: "Height isn't what this lesson identifies as the readiness indicator." },
        ],
      },
      {
        question: "Roughly how much time does the whole pass-set-attack sequence typically take?",
        answers: [
          { text: "Just a second or two", correct: true, explanation: "Correct — this whole transition happens very quickly." },
          { text: "Several minutes", correct: false, explanation: "This sequence happens in seconds, not minutes." },
          { text: "An entire set", correct: false, explanation: "This sequence is a single rally's transition, not a whole set." },
          { text: "It has no time limit at all", correct: false, explanation: "While there's no formal timer, this transition happens quickly by necessity." },
        ],
      },
      {
        question: "Why does each part of the pass-set-attack sequence depend on the one before it?",
        answers: [
          { text: "A clean pass enables a good set, and a well-timed set enables a rhythm-based attack", correct: true, explanation: "Correct — this chain of dependency is exactly what the lesson describes." },
          { text: "They are actually completely independent of each other", correct: false, explanation: "The lesson specifically describes them as closely dependent steps." },
          { text: "Only the attack matters — the pass and set are optional", correct: false, explanation: "All three steps are necessary parts of the same sequence." },
          { text: "The order can be freely rearranged by the team", correct: false, explanation: "The sequence follows a fixed, logical order: pass, set, attack." },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Out-of-System Passing",
    summary: "What happens when a pass doesn't reach the target, and how a team adapts.",
    durationMin: 8,
    theory: [
      "'In system' describes a rally where the pass reached the target cleanly, giving the setter their full range of options. 'Out of system' describes the opposite: the pass landed away from the target, forcing the setter (or whoever ends up on the ball) to improvise instead of running the planned offense.",
      "Passes can go out of system for plenty of reasons — a tough serve, a miscommunication between receivers, a ball that clips the net on the way over, or simply a difficult read. However it happens, the result is the same: the ball is no longer where the offense was built to expect it.",
      "When out of system, the setter often has to chase the ball down themselves, or a completely different player has to step in to make the second contact, since the setter may be too far away to reach it in time. This often means giving up the ideal setter-to-hitter delivery entirely.",
      "Being out of system usually limits the attack to safer, simpler options — a high, slow set that any nearby hitter can still time, or even just sending the ball back over without a real attack at all, purely to keep the rally alive rather than force a low-percentage play.",
      "Good teams train specifically for out-of-system situations, because no team receives perfectly every single time. Knowing the fallback options in advance — who covers the second contact, which simple set to fall back on — turns a broken play into a manageable one instead of a lost point.",
    ],
    keyTakeaway: "'In system' means the pass reached the target and the setter has full options; 'out of system' means it didn't, forcing simpler, safer plays — and good teams train fallback plans specifically for this situation.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The pass drifts away from the target into open space. Out of system, the setter has to chase the ball down instead of running a normal play.",
      activeZones: [6, 3],
      labels: { 6: "R", 3: "S" },
      motions: { 3: { dx: -18, dy: 30 } },
      ball: { path: [{ x: 60, y: -8 }, { x: 30, y: 70 }] },
    },
    quiz: [
      {
        question: "What does 'in system' mean?",
        answers: [
          { text: "The pass reached the target cleanly, giving the setter full options", correct: true, explanation: "Correct — this is the definition used in this lesson." },
          { text: "The team has just won three rallies in a row", correct: false, explanation: "'In system' refers to pass quality, not a winning streak." },
          { text: "The team is currently serving", correct: false, explanation: "This term applies to receiving and running offense, not serving." },
          { text: "The setter has been substituted out", correct: false, explanation: "Substitutions are unrelated to whether a play is in or out of system." },
        ],
      },
      {
        question: "What does 'out of system' mean?",
        answers: [
          { text: "The pass landed away from the target, forcing improvisation", correct: true, explanation: "Correct — this is the opposite of an in-system play." },
          { text: "The team has run out of substitutions", correct: false, explanation: "This term is about pass quality, not substitution counts." },
          { text: "The serve was ruled illegal", correct: false, explanation: "An illegal serve is a separate issue from being out of system." },
          { text: "The rally has gone on too long and must be replayed", correct: false, explanation: "There's no such rally-length replay rule connected to this term." },
        ],
      },
      {
        question: "Which of these could cause a pass to go out of system?",
        answers: [
          { text: "A tough serve, a miscommunication, or simply a difficult read", correct: true, explanation: "Correct — all of these are realistic causes described in the lesson." },
          { text: "The team scoring too many points in a row", correct: false, explanation: "Scoring points doesn't cause a pass to go out of system." },
          { text: "The referee calling a timeout", correct: false, explanation: "Timeouts don't directly cause an out-of-system pass." },
          { text: "The net being set at the wrong height", correct: false, explanation: "Net height is fixed and checked before play, not a mid-rally cause." },
        ],
      },
      {
        question: "What often has to happen when the setter can't reach an out-of-system pass?",
        answers: [
          { text: "A different player steps in to make the second contact", correct: true, explanation: "Correct — this is a common adjustment when the setter is out of position." },
          { text: "The rally is automatically awarded to the opponent", correct: false, explanation: "The rally continues — a teammate can step in to keep it alive." },
          { text: "The team is charged a penalty point", correct: false, explanation: "There's no automatic penalty for an out-of-system pass." },
          { text: "The set must be repeated from the serve", correct: false, explanation: "Play continues live — there's no restart mechanism here." },
        ],
      },
      {
        question: "What kind of attack options does an out-of-system situation usually limit a team to?",
        answers: [
          { text: "Safer, simpler options like a high, slow set", correct: true, explanation: "Correct — this trades scoring upside for reliability." },
          { text: "Only illegal attacking options", correct: false, explanation: "Out-of-system attacks are still fully legal, just simpler and safer." },
          { text: "Exactly the same options as an in-system play", correct: false, explanation: "Options are typically more limited when out of system." },
          { text: "No options at all — the team must simply give up the rally", correct: false, explanation: "Teams still attempt to keep the rally alive with safer options." },
        ],
      },
      {
        question: "Why do good teams train specifically for out-of-system situations?",
        answers: [
          { text: "Because no team receives perfectly every single time", correct: true, explanation: "Correct — planning for this reality turns a broken play into a manageable one." },
          { text: "Because the rules require a specific out-of-system drill each practice", correct: false, explanation: "There's no such formal training requirement — it's a practical choice." },
          { text: "Because out-of-system plays are worth extra points", correct: false, explanation: "Every rally is worth exactly one point, regardless of system status." },
          { text: "Because it's the only situation teams are allowed to practice", correct: false, explanation: "Teams practice many situations — this is just one important one." },
        ],
      },
      {
        question: "What is a realistic fallback option a team might use out of system?",
        answers: [
          { text: "A high, slow set that any nearby hitter can still time", correct: true, explanation: "Correct — this is a described fallback in the lesson." },
          { text: "Refusing to return the ball at all", correct: false, explanation: "Not returning the ball would simply lose the rally." },
          { text: "Substituting the entire team", correct: false, explanation: "A full-team substitution isn't a realistic in-rally fallback." },
          { text: "Calling for a rotation early", correct: false, explanation: "Rotation timing isn't a fallback option for a broken pass." },
        ],
      },
      {
        question: "Is being out of system the same as automatically losing the rally?",
        answers: [
          { text: "No — it just limits the options, it doesn't end the rally", correct: true, explanation: "Correct — teams can still win the rally with a well-executed fallback." },
          { text: "Yes, an out-of-system pass always loses the point", correct: false, explanation: "The rally continues; it's simply harder to attack effectively." },
          { text: "Yes, but only if it happens twice in a row", correct: false, explanation: "There's no such two-strikes rule connected to this concept." },
          { text: "It depends on which set is being played", correct: false, explanation: "This concept works the same way in every set." },
        ],
      },
      {
        question: "What is the key difference between in-system and out-of-system play?",
        answers: [
          { text: "Whether the pass reached the target and preserved the setter's full options", correct: true, explanation: "Correct — this is exactly the distinguishing factor." },
          { text: "Whether the team is currently winning the set", correct: false, explanation: "The score doesn't determine system status — pass quality does." },
          { text: "Whether the libero is currently on the court", correct: false, explanation: "The libero's presence doesn't determine system status." },
          { text: "Whether the serve was legal", correct: false, explanation: "A legal serve can still result in an out-of-system pass by the receiving team." },
        ],
      },
      {
        question: "What best summarizes the value of having a fallback plan for out-of-system situations?",
        answers: [
          { text: "It turns a broken play into a manageable one instead of an automatic lost point", correct: true, explanation: "Correct — this is the practical value described in the lesson." },
          { text: "It guarantees the team will still score every time", correct: false, explanation: "A fallback plan improves the odds — it doesn't guarantee scoring." },
          { text: "It removes the need to ever pass accurately", correct: false, explanation: "Accurate passing is still the priority — fallback plans are for when it fails." },
          { text: "It only matters for teams with a libero", correct: false, explanation: "Every team benefits from having an out-of-system fallback plan." },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Serve Receive in Different Rotations",
    summary: "Why the same team's receiving shape looks different from one rotation to the next.",
    durationMin: 8,
    theory: [
      "A team's serve-receive formation isn't one fixed shape used all match — it shifts from rotation to rotation, because the players currently in the back row (and therefore available to receive) change every time the team rotates, exactly as covered back in the rotation chapter.",
      "In one rotation, a team's best passer might be in Zone 5, perfectly placed to take a big share of the court. A few rotations later, that same player has rotated to the front row, and a completely different teammate is now the one anchoring the back row instead.",
      "This is also where the libero, from the rotation chapter, becomes especially relevant: because the libero specifically substitutes into back-row zones, their presence in a given rotation often changes which players are receiving and how the formation is shaped, compared to a rotation where they aren't involved.",
      "Coaches often plan slightly different receive formations for different rotations specifically because of this — a rotation with two strong passers in the back row might comfortably run two-person receive, while a weaker-passing rotation might need the extra safety net of three-person receive instead.",
      "Recognizing that 'serve receive' isn't one static system, but six related systems (one per rotation) that share the same principles, is what lets players and coaches actually plan for a whole match rather than just one moment of it.",
    ],
    keyTakeaway: "A team's receive formation changes rotation by rotation because the specific players available in the back row — and whether the libero is currently on for one of them — changes every time the team rotates.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "As the team rotates, the specific players available to receive shift with it — the same formation shape, but different players filling each receiving role.",
      activeZones: [5, 6, 1],
      labels: { 5: "R", 6: "R", 1: "R" },
      motions: {
        5: { dx: 10, dy: -6 },
        6: { dx: -8, dy: 8 },
        1: { dx: -10, dy: -6 },
      },
      ball: null,
    },
    quiz: [
      {
        question: "Does a team use the exact same receive formation in every rotation?",
        answers: [
          { text: "No — it shifts based on which players are currently in the back row", correct: true, explanation: "Correct — this is the core idea of this lesson." },
          { text: "Yes, the formation never changes across a whole match", correct: false, explanation: "The formation adapts as different players rotate into the back row." },
          { text: "Yes, but only the setter's position changes, not the formation", correct: false, explanation: "The whole receiving formation can shift, not just the setter's spot." },
          { text: "No, formation is fixed by rule for the entire set", correct: false, explanation: "There's no such rule — formation is a team's own tactical choice each rotation." },
        ],
      },
      {
        question: "Why does the set of available receivers change from rotation to rotation?",
        answers: [
          { text: "Because rotation changes which players are currently in the back row", correct: true, explanation: "Correct — this directly connects back to the rotation chapter." },
          { text: "Because players are substituted out every rotation", correct: false, explanation: "Rotation moves the same players through zones — it doesn't substitute them." },
          { text: "Because the coach picks new players before each rotation", correct: false, explanation: "The lineup for the set stays fixed — it's their zones that change via rotation." },
          { text: "Because the court itself changes shape", correct: false, explanation: "The court is fixed — it's player positioning that changes." },
        ],
      },
      {
        question: "How does the libero connect to this lesson's topic?",
        answers: [
          { text: "Their presence in back-row zones changes who is receiving and how the formation looks", correct: true, explanation: "Correct — the libero's substitution pattern directly affects receive formations." },
          { text: "The libero has no connection to serve receive at all", correct: false, explanation: "The libero is often one of the primary receivers on the team." },
          { text: "The libero only participates in serving, not receiving", correct: false, explanation: "The libero focuses heavily on passing and digging, including serve receive." },
          { text: "The libero replaces the setter specifically for this purpose", correct: false, explanation: "The libero substitutes for back-row players generally, not specifically the setter." },
        ],
      },
      {
        question: "Why might a coach plan two-person receive for one rotation and three-person for another?",
        answers: [
          { text: "Because the passing strength available in the back row differs by rotation", correct: true, explanation: "Correct — stronger passing rotations can afford a leaner formation." },
          { text: "Because the rules require alternating formations each rotation", correct: false, explanation: "There's no such alternating requirement — it's a tactical choice based on personnel." },
          { text: "Because the referee assigns a different formation each time", correct: false, explanation: "Formation choice belongs to the team, not the officials." },
          { text: "Because the net is adjusted between rotations", correct: false, explanation: "Net height stays fixed throughout the match." },
        ],
      },
      {
        question: "Is 'serve receive' best understood as one single fixed system, or several related ones?",
        answers: [
          { text: "Several related systems — one shaped for each of the six rotations", correct: true, explanation: "Correct — this is exactly the reframing this lesson offers." },
          { text: "One single system that never varies", correct: false, explanation: "The system's principles stay the same, but its shape adapts per rotation." },
          { text: "Twelve separate systems, two per rotation", correct: false, explanation: "There are six rotations, and generally one receive plan per rotation." },
          { text: "A system that only exists in the deciding set", correct: false, explanation: "Serve receive planning applies in every set, not just the decider." },
        ],
      },
      {
        question: "What lets coaches and players actually plan for a whole match, according to this lesson?",
        answers: [
          { text: "Recognizing that receive formation is planned per rotation, not as one static shape", correct: true, explanation: "Correct — this recognition is exactly what this lesson emphasizes." },
          { text: "Memorizing the opposing team's lineup", correct: false, explanation: "This lesson focuses on planning your own team's formations, not the opponent's lineup." },
          { text: "Ignoring rotation entirely and using one formation always", correct: false, explanation: "That would be the opposite of the planning approach this lesson recommends." },
          { text: "Relying entirely on the referee's guidance", correct: false, explanation: "This planning is done by the team's own coaches and players." },
        ],
      },
      {
        question: "If a team's best passer rotates from the back row to the front row, what typically happens to the receive formation?",
        answers: [
          { text: "A different teammate becomes the new anchor of the back-row receive shape", correct: true, explanation: "Correct — the formation adapts to whichever players are currently in the back row." },
          { text: "The team is no longer allowed to receive serve that rotation", correct: false, explanation: "The team still receives — just with a different set of back-row players." },
          { text: "The best passer must remain in the back row regardless of rotation", correct: false, explanation: "Rotation moves every player, including strong passers, through all six zones." },
          { text: "The match is paused until the passer returns to the back row", correct: false, explanation: "Play continues normally — the formation simply adjusts to different players." },
        ],
      },
      {
        question: "Do the underlying principles of serve receive (target, seams, communication) change between rotations?",
        answers: [
          { text: "No — the principles stay the same, only the specific players and shape change", correct: true, explanation: "Correct — this is what makes it 'the same system' applied six different ways." },
          { text: "Yes, completely different principles apply in each rotation", correct: false, explanation: "The core principles from earlier lessons apply across every rotation." },
          { text: "Yes, but only the concept of seams changes between rotations", correct: false, explanation: "All these principles remain consistent — only personnel and shape shift." },
          { text: "No, but only the target concept applies across rotations", correct: false, explanation: "All the principles — target, seams, communication — apply across every rotation." },
        ],
      },
      {
        question: "What is the practical benefit of planning receive formations rotation by rotation?",
        answers: [
          { text: "It lets a team use its strongest available passers effectively in every rotation", correct: true, explanation: "Correct — this maximizes passing quality across the whole match." },
          { text: "It guarantees a technical foul against the opponent", correct: false, explanation: "This planning has nothing to do with fouls against the opposing team." },
          { text: "It allows the team to skip serve receive in weaker rotations", correct: false, explanation: "Every rotation still requires receiving — the plan just adapts to available players." },
          { text: "It changes how many points a rally is worth", correct: false, explanation: "Every rally is worth exactly one point, regardless of formation planning." },
        ],
      },
      {
        question: "What best summarizes this lesson's main point?",
        answers: [
          { text: "Receive formation adapts to whichever players rotation has placed in the back row", correct: true, explanation: "Correct — this captures the lesson's central idea." },
          { text: "Only one player ever receives serve, regardless of rotation", correct: false, explanation: "Multiple players share receiving responsibility, and this can shift by rotation." },
          { text: "Rotation and serve receive are completely unrelated topics", correct: false, explanation: "This lesson shows exactly how closely connected the two topics are." },
          { text: "Serve receive formations are chosen once and never revisited", correct: false, explanation: "Formations are actively planned and can differ for each of the six rotations." },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "Reading a Serve-Receive Formation",
    summary: "Putting it all together: recognizing roles, receivers and the setter's starting point at a glance.",
    durationMin: 8,
    theory: [
      "By now, you have all the pieces needed to look at a team lined up before a serve and actually understand what you're seeing: the six zones, the front-row/back-row split, rotation order, overlap rules, and how receive formations and the target work together.",
      "The first thing to identify is who's receiving: look for the players spread across the back row (and occasionally a front-row player) in a recognizable two-person or three-person shape, usually standing a little deeper in the court, ready to read the serve.",
      "The next thing to find is the setter — often the player standing slightly apart from the receiving shape, positioned to release quickly toward the net the instant the ball is contacted. If the setter is in the back row that rotation, they'll typically be the one player not sharing receiving responsibility with the others.",
      "From there, the front-row attackers become easier to spot too: they're usually standing a little off the net (as covered in Lesson 7), leaving themselves room for an approach, with their specific zone position hinting at whether they're likely to attack from the left, middle, or right.",
      "Being able to read a formation this way — quickly identifying receivers, the setter, and the attackers before a single serve is even hit — is a genuinely useful skill, whether you're playing, coaching, or simply watching a match with a sharper eye for what's about to happen.",
    ],
    keyTakeaway: "Reading a formation means spotting the receivers (usually two or three back-row players), finding the setter (often standing apart, ready to release to the net), and recognizing the attackers by their off-net starting spots.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "A full formation, ready to read: three receivers spread through the back row, the setter released and ready near the net, and hitters standing off the net for their approach.",
      activeZones: [5, 6, 1, 3, 4, 2],
      labels: { 5: "R", 6: "R", 1: "R", 3: "S", 4: "OH", 2: "OP" },
      motions: {
        4: { dx: 0, dy: -6 },
        2: { dx: 0, dy: -6 },
      },
      ball: null,
    },
    quiz: [
      {
        question: "What is the first thing to identify when reading a serve-receive formation?",
        answers: [
          { text: "Who is receiving — the players in the two-person or three-person receiving shape", correct: true, explanation: "Correct — this is the natural first thing to spot." },
          { text: "The final score of the set", correct: false, explanation: "The score isn't part of reading a formation before a serve." },
          { text: "The referee's exact position", correct: false, explanation: "Referee position isn't relevant to reading a team's formation." },
          { text: "The color of the ball", correct: false, explanation: "Ball color has nothing to do with reading a formation." },
        ],
      },
      {
        question: "How can you typically spot the setter in a formation?",
        answers: [
          { text: "They often stand slightly apart from the receiving shape, ready to release to the net", correct: true, explanation: "Correct — this positioning is a strong clue for finding the setter." },
          { text: "They always wear a different colored jersey", correct: false, explanation: "That distinct jersey belongs to the libero, not the setter." },
          { text: "They always stand exactly on the centerline", correct: false, explanation: "The setter's position depends on their current rotation zone, not the centerline." },
          { text: "They are always the tallest player on the team", correct: false, explanation: "Height isn't a reliable way to identify the setter." },
        ],
      },
      {
        question: "If the setter is currently in the back row, how do they typically relate to the receiving group?",
        answers: [
          { text: "They're usually the one player not sharing receiving responsibility with the others", correct: true, explanation: "Correct — teams generally free the setter from receiving duty when possible." },
          { text: "They always take the largest share of the receiving area", correct: false, explanation: "Teams generally try to keep the setter out of primary receiving duty." },
          { text: "They swap roles with the libero for that rotation", correct: false, explanation: "Roles like setter and libero don't swap between players." },
          { text: "They must stand exactly behind the server", correct: false, explanation: "There's no such positioning requirement tied to the setter." },
        ],
      },
      {
        question: "How can front-row attackers often be recognized before the serve?",
        answers: [
          { text: "By standing a little off the net, leaving room for their approach", correct: true, explanation: "Correct — this matches the positioning described in Lesson 7." },
          { text: "By standing directly against the net", correct: false, explanation: "Standing right at the net would leave no room for an approach." },
          { text: "By wearing a specially marked jersey", correct: false, explanation: "There's no special jersey marking front-row attackers." },
          { text: "By always standing in the exact center of the court", correct: false, explanation: "Their position relates to their zone and attacking role, not the court's center." },
        ],
      },
      {
        question: "What does a hitter's specific zone position hint at?",
        answers: [
          { text: "Whether they're likely to attack from the left, middle, or right", correct: true, explanation: "Correct — zone position lines up with the attacking areas from Lesson 8 of Chapter 3." },
          { text: "How many points the team currently has", correct: false, explanation: "Zone position has no connection to the current score." },
          { text: "Which team will win the rally", correct: false, explanation: "Formation reading doesn't predict rally outcomes, just likely roles." },
          { text: "Whether a substitution is about to happen", correct: false, explanation: "Zone position doesn't indicate an upcoming substitution." },
        ],
      },
      {
        question: "Which chapter concepts does reading a formation draw on?",
        answers: [
          { text: "Zones, front-row/back-row split, rotation order, overlap rules, and receive formations", correct: true, explanation: "Correct — this lesson pulls together everything from the whole chapter (and the last one)." },
          { text: "Only the scoring rules from a much earlier chapter", correct: false, explanation: "This skill draws on rotation and receive concepts specifically, not scoring rules." },
          { text: "Only the libero's jersey color rule", correct: false, explanation: "That's just one small piece — formation reading uses many more concepts than this." },
          { text: "Nothing from previous lessons — it's an entirely new topic", correct: false, explanation: "This lesson deliberately ties together everything learned so far." },
        ],
      },
      {
        question: "Who might find the skill of reading a formation useful?",
        answers: [
          { text: "Players, coaches, and even spectators watching with a sharper eye", correct: true, explanation: "Correct — this skill benefits anyone trying to understand what's about to happen." },
          { text: "Only professional referees", correct: false, explanation: "This skill is useful well beyond officiating specifically." },
          { text: "Only the team's setter", correct: false, explanation: "Every player, and even spectators, can benefit from reading formations." },
          { text: "Nobody — it has no practical use", correct: false, explanation: "Understanding formations has real, practical value for play and coaching." },
        ],
      },
      {
        question: "Why might a front-row player NOT be part of the primary receiving group?",
        answers: [
          { text: "So they can save position and energy for their attacking approach", correct: true, explanation: "Correct — this mirrors the reasoning from earlier lessons in this chapter." },
          { text: "Because front-row players are legally barred from receiving", correct: false, explanation: "There's no such legal restriction — it's a tactical choice." },
          { text: "Because only the libero is allowed to touch the ball first", correct: false, explanation: "Any eligible player can make the first contact, not only the libero." },
          { text: "Because front-row players must stand still until the point ends", correct: false, explanation: "Front-row players move actively to prepare their attacking approach." },
        ],
      },
      {
        question: "What would a two-person versus three-person receiving shape tell you about a team's formation choice?",
        answers: [
          { text: "Whether they're prioritizing extra attacking presence or extra passing security that rotation", correct: true, explanation: "Correct — this reflects the trade-off covered in earlier lessons." },
          { text: "Nothing — both shapes are functionally identical", correct: false, explanation: "The two shapes reflect a real tactical trade-off, as covered earlier in this chapter." },
          { text: "That the team is about to be called for a rotation violation", correct: false, explanation: "Formation choice alone doesn't indicate any kind of violation." },
          { text: "That the team has too few available substitutes", correct: false, explanation: "Formation choice is a tactical decision, unrelated to substitute availability." },
        ],
      },
      {
        question: "What is the overall value of being able to read a serve-receive formation, as this lesson summarizes it?",
        answers: [
          { text: "It lets you understand a team's likely plan before a single serve is even hit", correct: true, explanation: "Correct — this is the culminating skill this lesson (and chapter) builds toward." },
          { text: "It guarantees you can predict the exact outcome of every rally", correct: false, explanation: "It helps you understand likely roles and plans, not guarantee outcomes." },
          { text: "It replaces the need to understand any of the rules from this chapter", correct: false, explanation: "Reading formations relies directly on the rules and concepts from this chapter." },
          { text: "It only applies to professional-level matches", correct: false, explanation: "This skill applies at any level of play, not just professional matches." },
        ],
      },
    ],
  },
];
const CHAPTER_4_TEST = {
  id: 11,
  title: "Chapter 4 Test",
  summary: "A 20-question test covering everything from Serve Receive, including scenario questions.",
  durationMin: 16,
  theory: null,
  keyTakeaway: null,
  showAnimation: false,
  isTest: true,
  quiz: [
    {
      question: "What is serve receive?",
      answers: [
        { text: "A team's first contact of the rally, passing the opponent's serve", correct: true, explanation: "Correct — this is the foundation of every rally." },
        { text: "The act of scoring the final point of a set", correct: false, explanation: "That describes winning a set, not serve receive." },
        { text: "A referee's hand signal", correct: false, explanation: "Serve receive is a player action, not an officiating signal." },
        { text: "A specific type of serve", correct: false, explanation: "Serve receive is about receiving a serve, not a type of serve itself." },
      ],
    },
    {
      question: "Which zones typically hold the main serve-receive responsibility?",
      answers: [
        { text: "Zones 5, 6 and 1 — the back row", correct: true, explanation: "Correct — these deep zones give the best view and reaction time." },
        { text: "Zones 2, 3 and 4 — the front row", correct: false, explanation: "Front-row players generally aren't the primary receivers." },
        { text: "Only Zone 3", correct: false, explanation: "Zone 3 is a front-row zone, not a typical receiving zone." },
        { text: "Whichever zone is closest to the referee", correct: false, explanation: "Referee position has no bearing on receiving responsibility." },
      ],
    },
    {
      question: "Scenario: a team uses only two back-row players to receive, freeing a third for offense. What formation is this?",
      answers: [
        { text: "Two-person serve receive", correct: true, explanation: "Correct — this matches the definition of the formation exactly." },
        { text: "Three-person serve receive", correct: false, explanation: "Three-person receive uses three receivers, not two." },
        { text: "Six-person serve receive", correct: false, explanation: "Using all six players to receive isn't a standard formation." },
        { text: "Out-of-system receive", correct: false, explanation: "That term describes a broken pass, not a formation type." },
      ],
    },
    {
      question: "What is the main benefit of three-person serve receive over two-person?",
      answers: [
        { text: "Each receiver covers less court individually, sharing the load across three players", correct: true, explanation: "Correct — this is the main trade-off in favor of three-person receive." },
        { text: "It automatically wins the point", correct: false, explanation: "No formation automatically wins a rally — it just improves pass quality." },
        { text: "It allows the team to serve twice", correct: false, explanation: "Serving turns aren't affected by receive formation." },
        { text: "It removes the need for a setter", correct: false, explanation: "The setter's role stays the same regardless of receive formation." },
      ],
    },
    {
      question: "What is a 'seam' in serve receive?",
      answers: [
        { text: "The gap between two neighboring receivers", correct: true, explanation: "Correct — this is the definition used throughout the chapter." },
        { text: "A stitched line on the ball itself", correct: false, explanation: "This chapter's 'seam' refers to court positioning, not the ball's construction." },
        { text: "The boundary line at the edge of the court", correct: false, explanation: "That's a sideline, a completely different concept." },
        { text: "The exact center of the net", correct: false, explanation: "A seam is a gap between two players, not a net location." },
      ],
    },
    {
      question: "Scenario: a serve lands right between two receivers, and both hesitate. What is the recommended fix?",
      answers: [
        { text: "Loud, early communication — calling for the ball as soon as it's read", correct: true, explanation: "Correct — this removes the ambiguity before it becomes a problem." },
        { text: "Both players should dive for it at the same time", correct: false, explanation: "This risks a collision — clear communication is the better approach." },
        { text: "Letting the ball drop untouched", correct: false, explanation: "That would simply lose the rally rather than resolve the seam." },
        { text: "Calling an automatic timeout", correct: false, explanation: "There's no rule requiring a timeout for this situation." },
      ],
    },
    {
      question: "What is the 'target' in serve receive?",
      answers: [
        { text: "A specific, consistent spot near the net the pass should reach", correct: true, explanation: "Correct — a fixed spot, not the setter's exact moving position." },
        { text: "The exact spot the serve was hit from", correct: false, explanation: "The target is on the receiving side near the net, unrelated to the serve's origin." },
        { text: "Wherever the setter happens to be standing at that instant", correct: false, explanation: "The target is fixed, precisely because the setter is often moving." },
        { text: "The service zone behind the end line", correct: false, explanation: "The service zone is nowhere near the actual receiving target." },
      ],
    },
    {
      question: "Why is the target a fixed spot rather than the setter's current position?",
      answers: [
        { text: "Because the setter is often on the move, and a fixed spot is easier to aim at", correct: true, explanation: "Correct — this is the key reasoning behind using a fixed target." },
        { text: "Because setters are not allowed to move during a rally", correct: false, explanation: "Setters move constantly, which is exactly why a fixed target helps." },
        { text: "Because it changes based on the score", correct: false, explanation: "The target's location has nothing to do with the score." },
        { text: "Because only the libero is allowed to aim at a fixed spot", correct: false, explanation: "Any receiver aims for the same fixed target, not just the libero." },
      ],
    },
    {
      question: "Scenario: your team's pass reaches the target cleanly. What is this situation called?",
      answers: [
        { text: "In system", correct: true, explanation: "Correct — a clean pass to the target keeps the offense fully in system." },
        { text: "Out of system", correct: false, explanation: "Out of system describes the opposite: a pass that missed the target." },
        { text: "A positional fault", correct: false, explanation: "That's an unrelated rotation-legality violation, not a pass-quality term." },
        { text: "A side-out", correct: false, explanation: "A side-out refers to winning back the serve, unrelated to pass quality." },
      ],
    },
    {
      question: "Scenario: the pass sails well off target and the setter can't reach it. What typically happens?",
      answers: [
        { text: "A different player steps in to make the second contact, and the team runs a simpler, safer play", correct: true, explanation: "Correct — this is a typical out-of-system adjustment." },
        { text: "The point is automatically awarded to the opponent", correct: false, explanation: "The rally continues — a teammate can still step in and keep it alive." },
        { text: "The rally is automatically replayed", correct: false, explanation: "There's no automatic replay for an off-target pass." },
        { text: "The setter is substituted out immediately", correct: false, explanation: "A single off-target pass doesn't force an automatic substitution." },
      ],
    },
    {
      question: "Why do front-row hitters often start serve receive standing off the net?",
      answers: [
        { text: "To leave room for a proper attacking approach", correct: true, explanation: "Correct — starting right at the net leaves no runway to build speed and power." },
        { text: "Because standing at the net is against the rules during receive", correct: false, explanation: "There's no such rule — this is a tactical positioning choice." },
        { text: "Because the libero requires that exact space", correct: false, explanation: "This positioning is about the hitter's own approach, unrelated to the libero." },
        { text: "Because the net is considered unsafe to stand near", correct: false, explanation: "Safety isn't the reasoning here — approach distance is." },
      ],
    },
    {
      question: "What is the correct order of the pass-set-attack sequence?",
      answers: [
        { text: "Pass, then set, then attack", correct: true, explanation: "Correct — this is the standard sequence covered in this chapter." },
        { text: "Attack, then set, then pass", correct: false, explanation: "This reverses the actual order of the sequence." },
        { text: "Set, then pass, then attack", correct: false, explanation: "The pass always comes before the set." },
        { text: "Serve, then attack, then pass", correct: false, explanation: "The serve starts the rally; pass, set, attack is what follows for the receiving team." },
      ],
    },
    {
      question: "Scenario: a hitter arrives at the net too early, before the set is delivered. What is the likely result?",
      answers: [
        { text: "They end up standing and waiting awkwardly, disrupting their attacking rhythm", correct: true, explanation: "Correct — early arrival hurts timing rather than helping it." },
        { text: "They are awarded an automatic point", correct: false, explanation: "Early arrival doesn't score a point — it just hurts timing." },
        { text: "The set becomes illegal", correct: false, explanation: "There's no rule tied to a hitter's arrival timing making a set illegal." },
        { text: "The rally is stopped immediately", correct: false, explanation: "Play continues normally, just with worse attacking timing." },
      ],
    },
    {
      question: "Does a team's receive formation stay exactly the same across all six rotations?",
      answers: [
        { text: "No — it shifts because different players are in the back row each rotation", correct: true, explanation: "Correct — this connects receive formation directly to rotation." },
        { text: "Yes, the exact same formation and players are used all match", correct: false, explanation: "The available back-row players change as the team rotates." },
        { text: "Yes, but only the setter's position changes", correct: false, explanation: "The whole receiving group can shift, not just the setter's spot." },
        { text: "No, but it only changes once per set, not every rotation", correct: false, explanation: "It can meaningfully shift with each of the six rotations, not just once." },
      ],
    },
    {
      question: "How does the libero typically affect serve-receive formations?",
      answers: [
        { text: "Their presence in back-row zones changes who is receiving and how the formation is shaped", correct: true, explanation: "Correct — the libero's substitution pattern directly influences the receive shape." },
        { text: "The libero has no effect on serve receive at all", correct: false, explanation: "The libero is often one of the team's primary receivers." },
        { text: "The libero only affects serving, not receiving", correct: false, explanation: "The libero's core strengths are passing and digging, including serve receive." },
        { text: "The libero always receives alone, with no teammates", correct: false, explanation: "The libero receives as part of the team's formation, not alone." },
      ],
    },
    {
      question: "Scenario: you're watching a team line up before a serve. How can you typically spot the setter?",
      answers: [
        { text: "They often stand slightly apart from the receiving shape, ready to release to the net", correct: true, explanation: "Correct — this positioning is a strong clue for identifying the setter." },
        { text: "They always wear a visibly different colored jersey", correct: false, explanation: "That distinct jersey belongs to the libero, not the setter." },
        { text: "They are always the shortest player on the team", correct: false, explanation: "Height isn't a reliable indicator of who the setter is." },
        { text: "They always stand exactly on the sideline", correct: false, explanation: "The setter's position depends on their current zone, not a fixed sideline spot." },
      ],
    },
    {
      question: "Scenario: a hitter's zone position before the serve hints at what?",
      answers: [
        { text: "Whether they're likely to attack from the left, middle, or right", correct: true, explanation: "Correct — zone position lines up with typical attacking areas." },
        { text: "The current score of the set", correct: false, explanation: "Zone position has no connection to the score." },
        { text: "Whether a substitution is about to occur", correct: false, explanation: "Zone position doesn't indicate an upcoming substitution." },
        { text: "Which team will win the rally", correct: false, explanation: "Formation reading suggests likely roles, not rally outcomes." },
      ],
    },
    {
      question: "What is the key difference between in-system and out-of-system play?",
      answers: [
        { text: "Whether the pass reached the target and preserved the setter's full range of options", correct: true, explanation: "Correct — this distinction is exactly what separates the two terms." },
        { text: "Whether the team is currently ahead on the scoreboard", correct: false, explanation: "The score doesn't determine system status — pass quality does." },
        { text: "Whether the serve itself was legal", correct: false, explanation: "A legal serve can still result in an out-of-system pass for the receiving team." },
        { text: "Whether the libero is currently on the court", correct: false, explanation: "The libero's presence doesn't by itself determine system status." },
      ],
    },
    {
      question: "Why do good teams train specifically for out-of-system situations?",
      answers: [
        { text: "Because no team passes perfectly every single time, and a fallback plan turns a broken play into a manageable one", correct: true, explanation: "Correct — this is exactly the reasoning behind training for it." },
        { text: "Because the rules require a mandatory out-of-system drill", correct: false, explanation: "There's no such formal rule — it's a practical training choice." },
        { text: "Because out-of-system rallies are worth bonus points", correct: false, explanation: "Every rally is worth exactly one point, regardless of system status." },
        { text: "Because it's the only drill teams are permitted to run", correct: false, explanation: "Teams train many situations — this is simply one important one." },
      ],
    },
    {
      question: "What is the overall value of being able to read a serve-receive formation before the serve is hit?",
      answers: [
        { text: "It lets you understand a team's likely plan — receivers, setter, and attackers — before the ball is even served", correct: true, explanation: "Correct — this is the culminating skill this chapter builds toward." },
        { text: "It guarantees you can predict the exact outcome of every rally", correct: false, explanation: "It helps identify likely roles and plans, not guarantee a specific result." },
        { text: "It only matters for professional-level matches", correct: false, explanation: "This skill is useful at any level of play, not just professional ones." },
        { text: "It replaces the need to understand rotation rules", correct: false, explanation: "Reading a formation actually relies directly on understanding rotation rules." },
      ],
    },
  ],
};
/* ---------------------------------------------------------------------- */
/* Chapter 5 — Court Choreography (real content)                          */
/* ---------------------------------------------------------------------- */

const CHAPTER_5_LESSONS = [
  {
    id: 1,
    title: "One Rotation, Two Shapes",
    summary: "Why every rotation actually has two different shapes, and how this chapter is going to walk through both.",
    durationMin: 7,
    theory: [
      "Every team has six rotations, and this chapter is about exactly where six roles — the setter (R), a middle (Ś), the opposite (A), two outside hitters (P and P), and the libero (L) — stand on the floor in each one. But there's a catch worth clearing up before anything else: a single rotation number doesn't point to one fixed picture. It points to two.",
      "When the opponent is serving, the team lines up in a serve-receive shape: the players who pass are spread across the back row, ready to control the incoming ball, while everyone else stays positioned to keep every attacking option open once that pass is delivered.",
      "When the team has just finished serving, the ball is now on the opponent's side, so there's no fixed target to receive. Instead, the team snaps into a base defense shape — blockers set at the net, back row spread out to cover whatever attack comes back over.",
      "Through all of this, the six roles never break their order. The players keep exactly the same spacing around the court, rotation after rotation. The only thing that ever changes is which zone each of them currently happens to occupy.",
      "The next nine lessons walk through this in order: first the setter's one special rule, then a rotation-by-rotation tour of both shapes using this chapter's example lineup, and finally what the movement arrows between the two shapes actually mean.",
    ],
    keyTakeaway: "Each of the six rotations really has two shapes — a serve-receive formation while the opponent serves, and a base-defense formation right after the team's own serve — built from the same six roles kept in a fixed order around the court.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The same six zones make up every rotation. Which shape a team takes in each one is exactly what this chapter walks through.",
      activeZones: [1, 2, 3, 4, 5, 6],
      labels: {},
      motions: {},
      ball: null,
    },
    quiz: [
      {
        question: "According to this chapter, how many different 'shapes' can a single rotation number actually correspond to?",
        answers: [
          { text: "Two — a serve-receive shape and a base-defense shape", correct: true, explanation: "Correct — this is the key distinction this chapter is built around." },
          { text: "Always exactly one, fixed shape", correct: false, explanation: "The shape depends on whether the team is receiving or has just served." },
          { text: "Three, one per set", correct: false, explanation: "There are two shapes per rotation, not tied to how many sets are played." },
          { text: "It depends only on the score", correct: false, explanation: "The shape depends on who's serving, not the scoreboard." },
        ],
      },
      {
        question: "When does a team use its serve-receive shape?",
        answers: [
          { text: "While the opponent is serving", correct: true, explanation: "Correct — this is exactly when a receiving shape applies." },
          { text: "Right after the team's own serve", correct: false, explanation: "That moment calls for a base-defense shape instead." },
          { text: "Only during time-outs", correct: false, explanation: "Time-outs don't involve either formation being played out." },
          { text: "Only in the deciding set", correct: false, explanation: "This shape applies in every set, not just the deciding one." },
        ],
      },
      {
        question: "When does a team use its base-defense shape?",
        answers: [
          { text: "Right after the team's own serve, once the ball is on the opponent's side", correct: true, explanation: "Correct — this is exactly when a base-defense shape applies." },
          { text: "While waiting to receive the opponent's serve", correct: false, explanation: "That moment calls for a serve-receive shape instead." },
          { text: "Only when the libero is on the court", correct: false, explanation: "Base defense applies regardless of whether the libero is in that rotation." },
          { text: "Only after winning the point", correct: false, explanation: "It applies right after serving, before the point is even decided." },
        ],
      },
      {
        question: "What stays constant across every rotation, according to this lesson?",
        answers: [
          { text: "The fixed spacing and order of the six roles around the court", correct: true, explanation: "Correct — only the zones change, not the relative order." },
          { text: "The exact zone each player stands in", correct: false, explanation: "The zones are exactly what changes from one rotation to the next." },
          { text: "Which shape the team is using", correct: false, explanation: "The shape changes depending on who's serving." },
          { text: "The identity of the server", correct: false, explanation: "The server changes with each rotation, not stays fixed." },
        ],
      },
      {
        question: "What are the six roles this chapter uses to describe a lineup?",
        answers: [
          { text: "Setter (R), a middle (Ś), the opposite (A), two outside hitters (P), and the libero (L)", correct: true, explanation: "Correct — these are the six roles used throughout this chapter." },
          { text: "Six identical generic players with no distinct roles", correct: false, explanation: "Each of the six roles has a distinct job and label." },
          { text: "Only the setter and the libero", correct: false, explanation: "The chapter tracks all six roles, not just two of them." },
          { text: "Six substitutes waiting off court", correct: false, explanation: "These six roles are the players on the court, not substitutes." },
        ],
      },
      {
        question: "Why doesn't a serve-receive shape have a fixed target during a team's own serve?",
        answers: [
          { text: "Because the ball is on the opponent's side — there's nothing to receive yet", correct: true, explanation: "Correct — a target only makes sense once a serve is actually incoming." },
          { text: "Because targets are only used in three-person receive", correct: false, explanation: "Targets apply to receiving in general, not one specific formation." },
          { text: "Because the setter is not allowed to move", correct: false, explanation: "The setter moves constantly — that's not the reason at all." },
          { text: "Because base defense forbids passing targets entirely", correct: false, explanation: "Base defense simply doesn't need one yet, it isn't forbidden." },
        ],
      },
      {
        question: "What is the main purpose of a base-defense shape?",
        answers: [
          { text: "To position blockers at the net and cover the court against whatever attack comes back", correct: true, explanation: "Correct — this is exactly what base defense is for." },
          { text: "To receive the very next serve", correct: false, explanation: "That's the job of a serve-receive shape, not base defense." },
          { text: "To immediately win the rally", correct: false, explanation: "Base defense sets up coverage — it doesn't win the rally by itself." },
          { text: "To substitute the setter out", correct: false, explanation: "Substitutions are unrelated to base-defense positioning." },
        ],
      },
      {
        question: "What is this chapter's overall plan, as laid out in this first lesson?",
        answers: [
          { text: "Cover the setter's rule first, then walk through both shapes rotation by rotation, then explain the connecting arrows", correct: true, explanation: "Correct — this is exactly the order the chapter follows." },
          { text: "Jump straight into a written test with no explanation", correct: false, explanation: "The chapter builds up through lessons before any test." },
          { text: "Only cover base defense, skipping serve receive entirely", correct: false, explanation: "Both shapes are covered throughout the chapter." },
          { text: "Repeat Chapter 4's content without anything new", correct: false, explanation: "This chapter adds rotation-specific detail on top of Chapter 4." },
        ],
      },
      {
        question: "Does the order of the six roles around the court ever change during a set?",
        answers: [
          { text: "No — their relative spacing stays fixed; only their zones shift as the team rotates", correct: true, explanation: "Correct — this is the core structural rule behind every rotation." },
          { text: "Yes, the order reshuffles every rotation", correct: false, explanation: "The order stays fixed — only the zones each role occupies shift." },
          { text: "Yes, but only when a team calls a time-out", correct: false, explanation: "Time-outs don't reshuffle the fixed rotation order." },
          { text: "Yes, whenever the libero enters the game", correct: false, explanation: "The libero simply fills a spot — it doesn't reorder the lineup." },
        ],
      },
      {
        question: "Why is it useful to think of each rotation as having two shapes instead of one?",
        answers: [
          { text: "Because a team's positioning genuinely looks different depending on who's serving at that moment", correct: true, explanation: "Correct — this is exactly why the distinction matters." },
          { text: "Because it makes the court twice as large", correct: false, explanation: "The court size never changes — only the formation does." },
          { text: "Because rules require exactly two named formations per rotation", correct: false, explanation: "There's no such rule — it simply reflects how teams actually play." },
          { text: "Because otherwise the libero couldn't be used", correct: false, explanation: "The libero can be used in either shape — that's not the reason." },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "The Setter's Hiding Spot",
    summary: "The one rule that quietly reshapes half of this chapter's receiving formations: the setter almost never takes the first ball.",
    durationMin: 7,
    theory: [
      "There's one rule that shapes a serve-receive formation more than any other: coaches try hard to keep the setter away from the ball on the very first contact. If the setter has to dig the serve, somebody else has to cover the set instead — and that's a job the setter is supposed to be doing themselves.",
      "The reason is timing. The instant a pass is released, the setter needs to already be sprinting toward their target spot near the net. That's much harder to do if they were just busy fielding the serve a split second earlier, from wherever it happened to land.",
      "In practice, this means that whenever the setter is in the back row for a rotation, they're placed at the edge of the receiving shape — often tucked into a deep corner — rather than dead center, which is usually where serves are most likely to be aimed.",
      "When the setter is in the front row instead, this whole question disappears. A front-row player is never a receiver in the first place, since serve receive is a back-row job, so there's nothing to hide from — the setter is simply free, standing right where they'll be needed.",
      "This single rule is why the receiving formation looks a little different depending on exactly which zone the setter's rotation has put them in. It's also the reason this chapter's rotation-by-rotation lessons are worth watching closely for where R ends up standing each time.",
    ],
    keyTakeaway: "A back-row setter is deliberately tucked away from the main passing lanes so they're free to sprint to the net the instant the ball is passed, instead of being tied up receiving the serve themselves.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "With the setter (R) in the back row, they tuck toward a corner — away from where the serve is likely to land — so a teammate takes the first contact instead.",
      activeZones: [1, 6, 5],
      labels: { 1: "R", 6: "P", 5: "L" },
      motions: { 1: { dx: 13, dy: 9 } },
      ball: { path: [{ x: 50, y: -8 }, { x: 50, y: 76 }, { x: 45, y: 30 }] },
    },
    quiz: [
      {
        question: "What does this lesson's core rule try to prevent?",
        answers: [
          { text: "The setter having to receive or dig the opponent's serve", correct: true, explanation: "Correct — this is exactly what the rule is designed to avoid." },
          { text: "The setter ever touching the ball at all", correct: false, explanation: "The setter touches the ball constantly — just not on the first contact." },
          { text: "The libero from receiving", correct: false, explanation: "The libero is meant to receive — that's a core part of their role." },
          { text: "The opponent from serving to the corners", correct: false, explanation: "The rule is about the setter's positioning, not restricting the server." },
        ],
      },
      {
        question: "Why is it a problem if the setter has to dig the serve?",
        answers: [
          { text: "They can't be sprinting to their target spot at the same moment", correct: true, explanation: "Correct — this timing conflict is the whole reason for the rule." },
          { text: "It is against the rules for a setter to pass", correct: false, explanation: "There's no rule against it — it's simply avoided tactically." },
          { text: "It guarantees a lost point", correct: false, explanation: "It makes things harder, but doesn't guarantee losing the point." },
          { text: "It forces an automatic substitution", correct: false, explanation: "No substitution is triggered by the setter receiving a serve." },
        ],
      },
      {
        question: "Where is a back-row setter typically positioned within the receiving shape?",
        answers: [
          { text: "At the edge, often tucked into a deep corner", correct: true, explanation: "Correct — this keeps them out of the main passing lanes." },
          { text: "Dead center, exactly where serves usually aim", correct: false, explanation: "That's precisely the spot the setter avoids." },
          { text: "Right at the net", correct: false, explanation: "A back-row player can't legally play right at the net in this moment." },
          { text: "Directly behind the server", correct: false, explanation: "Position is about their own team's court, not the server's location." },
        ],
      },
      {
        question: "What happens to this 'hiding' question when the setter is in the front row?",
        answers: [
          { text: "It disappears entirely, since front-row players don't receive serve", correct: true, explanation: "Correct — there's simply nothing to hide from." },
          { text: "It becomes twice as important", correct: false, explanation: "It becomes irrelevant, not more important." },
          { text: "The setter must then receive every serve", correct: false, explanation: "A front-row setter never receives serve at all." },
          { text: "The libero is removed from the court", correct: false, explanation: "The libero's presence isn't affected by the setter's row." },
        ],
      },
      {
        question: "Is digging a serve illegal for a back-row setter?",
        answers: [
          { text: "No — it's legal, just tactically avoided", correct: true, explanation: "Correct — there's no rule against it, only a tactical preference." },
          { text: "Yes, it's a rules violation", correct: false, explanation: "There's no such violation — any back-row player may legally receive." },
          { text: "Yes, but only in the deciding set", correct: false, explanation: "The legality doesn't change based on which set it is." },
          { text: "No, but only the libero is allowed to prevent it", correct: false, explanation: "Any teammate can step in to cover — not only the libero." },
        ],
      },
      {
        question: "What must a setter usually do the instant a pass is released?",
        answers: [
          { text: "Sprint to their target spot near the net", correct: true, explanation: "Correct — reaching that spot quickly is essential to running the offense." },
          { text: "Call an automatic time-out", correct: false, explanation: "Time-outs are unrelated to this moment in the rally." },
          { text: "Switch positions with the libero", correct: false, explanation: "There's no position switch tied to this moment." },
          { text: "Stand still until whistled forward", correct: false, explanation: "Waiting for a whistle would make the setter far too slow." },
        ],
      },
      {
        question: "In how many of this chapter's six rotations does the front-row exception apply?",
        answers: [
          { text: "In the three rotations where the setter's zone is in the front row", correct: true, explanation: "Correct — half of the six rotations put the setter up front." },
          { text: "In all six rotations equally", correct: false, explanation: "The exception only applies when the setter is actually front row." },
          { text: "In none of them", correct: false, explanation: "The setter does spend three rotations in the front row." },
          { text: "Only in Rotation 1", correct: false, explanation: "Rotation 1 actually has the setter in the back row, not the front." },
        ],
      },
      {
        question: "What is the direct benefit of tucking the setter away from the passing lanes?",
        answers: [
          { text: "It frees them to move immediately once the pass is released", correct: true, explanation: "Correct — this is the entire point of the positioning." },
          { text: "It guarantees a perfect pass every time", correct: false, explanation: "No positioning choice can guarantee a perfect pass." },
          { text: "It disqualifies the opposing server", correct: false, explanation: "Positioning choices don't affect the opponent's serving rights." },
          { text: "It lets the setter skip their rotation turn", correct: false, explanation: "The setter still rotates normally through every zone." },
        ],
      },
      {
        question: "Scenario: the setter's zone this rotation is a back-row zone. What should you expect?",
        answers: [
          { text: "The setter positioned toward the edge of the receiving shape, not central", correct: true, explanation: "Correct — this follows directly from the hiding-spot rule." },
          { text: "The setter standing exactly where the serve is aimed", correct: false, explanation: "That's the opposite of what teams actually do." },
          { text: "The setter swapped out for the libero automatically", correct: false, explanation: "There's no automatic swap tied to this rule." },
          { text: "The setter serving next, regardless of anything else", correct: false, explanation: "Who serves next depends on rotation order, not this rule." },
        ],
      },
      {
        question: "What's the overall takeaway of this rule?",
        answers: [
          { text: "Formation choices are often built around protecting the setter's very next job", correct: true, explanation: "Correct — this is exactly why the formation shifts the way it does." },
          { text: "Formation choices are random and have no underlying reason", correct: false, explanation: "This rule shows formation choices are quite deliberate." },
          { text: "The setter is the primary receiver by design", correct: false, explanation: "The opposite is true — the setter is kept away from receiving." },
          { text: "This rule only matters for teams without a libero", correct: false, explanation: "The rule applies just as much to teams that do use a libero." },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Rotation 1: Holding the Line",
    summary: "The opponent is serving and the setter's zone is 1 — the first full receiving formation, walked through position by position.",
    durationMin: 7,
    theory: [
      "In Rotation 1, the setter's zone is Zone 1 — back right. The opponent is about to serve, so this is a serve-receive formation, and by the rule from the last lesson, R is tucked into that back-right corner rather than standing in the middle of the passing lanes.",
      "The rest of the back row carries the main passing load: an outside hitter (P) holds the back-middle zone, and the libero (L) covers back-left. Together, P and L form the real 'wall' this lesson is named for — the two players actually expected to control the serve.",
      "Up front, none of the three front-row players are receiving at all. The opposite (A) is on the front left, an outside hitter (P) is at front-middle, and the middle blocker (Ś) is on the front right — all three free to focus on their own attacking approach instead of the ball coming in.",
      "Once the pass is under control, it's aimed at a consistent target near the net rather than at wherever R happens to be standing — because R is about to leave that back-right corner and sprint toward the net themselves, exactly as the hiding-spot rule predicts.",
      "This exact picture — R back right, P and L doing the passing, A, P and Ś free up front — only exists for as long as the setter's zone stays at 1. The moment the team rotates again, a different player takes over zone 1, and the shape shifts to Rotation 2.",
    ],
    keyTakeaway: "In Rotation 1, the setter sits deep in the back-right corner while an outside hitter (back-middle) and the libero (back-left) handle the actual passing, leaving all three front-row players free to prepare their attack.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The pass comes in to the back row while R stays tucked in the back-right corner, then releases forward toward the target near the net.",
      activeZones: [1, 6, 5, 4, 3, 2],
      labels: { 1: "R", 6: "P", 5: "L", 4: "A", 3: "P", 2: "Ś" },
      motions: {},
      ball: { path: [{ x: 50, y: -8 }, { x: 50, y: 76 }, { x: 45, y: 30 }] },
    },
    quiz: [
      {
        question: "In Rotation 1, which zone is the setter in?",
        answers: [
          { text: "Zone 1 (back right)", correct: true, explanation: "Correct — this is what defines Rotation 1 in this chapter." },
          { text: "Zone 4 (front left)", correct: false, explanation: "Zone 4 is the opposite's zone in this rotation, not the setter's." },
          { text: "Zone 3 (front middle)", correct: false, explanation: "Zone 3 belongs to an outside hitter in this rotation." },
          { text: "Zone 6 (back middle)", correct: false, explanation: "Zone 6 belongs to an outside hitter in this rotation." },
        ],
      },
      {
        question: "Who covers back-middle in Rotation 1?",
        answers: [
          { text: "An outside hitter (P)", correct: true, explanation: "Correct — P holds back-middle alongside the libero on this rotation." },
          { text: "The libero (L)", correct: false, explanation: "The libero covers back-left in this rotation, not back-middle." },
          { text: "The opposite (A)", correct: false, explanation: "The opposite is front row in this rotation." },
          { text: "The setter (R)", correct: false, explanation: "The setter is tucked into back-right, not back-middle." },
        ],
      },
      {
        question: "Who covers back-left in Rotation 1?",
        answers: [
          { text: "The libero (L)", correct: true, explanation: "Correct — the libero takes back-left in this rotation." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter is in back-middle, not back-left, this rotation." },
          { text: "The middle (Ś)", correct: false, explanation: "The middle is front row in this rotation." },
          { text: "The setter (R)", correct: false, explanation: "The setter is in back-right, not back-left." },
        ],
      },
      {
        question: "Which role is on the front-right in Rotation 1?",
        answers: [
          { text: "The middle (Ś)", correct: true, explanation: "Correct — the middle covers front-right in this rotation." },
          { text: "The opposite (A)", correct: false, explanation: "The opposite is on front-left in this rotation." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter here is on front-middle, not front-right." },
          { text: "The libero (L)", correct: false, explanation: "The libero is a back-row player in this rotation." },
        ],
      },
      {
        question: "Which role is on the front-left in Rotation 1?",
        answers: [
          { text: "The opposite (A)", correct: true, explanation: "Correct — the opposite covers front-left in this rotation." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter here is on front-middle, not front-left." },
          { text: "The middle (Ś)", correct: false, explanation: "The middle is on front-right in this rotation." },
          { text: "The setter (R)", correct: false, explanation: "The setter is back row in this rotation." },
        ],
      },
      {
        question: "In Rotation 1, who actually does the passing?",
        answers: [
          { text: "The two back-row players other than the setter — here, P and L", correct: true, explanation: "Correct — this is exactly the 'wall' this lesson describes." },
          { text: "All six players share it equally", correct: false, explanation: "Front-row players aren't involved in receiving here at all." },
          { text: "Only the setter", correct: false, explanation: "The setter is specifically kept out of the receiving duty." },
          { text: "Only the front-row players", correct: false, explanation: "Serve receive is a back-row job, not a front-row one." },
        ],
      },
      {
        question: "Why are the front-row players in Rotation 1 not involved in receiving?",
        answers: [
          { text: "Serve receive is a back-row job, and they need to prepare their attacking approach instead", correct: true, explanation: "Correct — this frees them for their own role in the rally." },
          { text: "Front-row players are banned from ever touching a serve", correct: false, explanation: "There's no such ban — it's simply how the formation is arranged." },
          { text: "There is no serve to receive in this rotation", correct: false, explanation: "There absolutely is a serve — this is a serve-receive rotation." },
          { text: "They are substituted out during serve receive", correct: false, explanation: "No substitution happens just because of receiving duty." },
        ],
      },
      {
        question: "Where is the pass aimed in this rotation?",
        answers: [
          { text: "A consistent target near the net, not wherever R happens to be", correct: true, explanation: "Correct — the target is fixed, independent of the setter's exact spot." },
          { text: "Directly back over the net to the opponent", correct: false, explanation: "That would end the rally immediately rather than set up an attack." },
          { text: "Exactly at the setter's starting spot", correct: false, explanation: "The setter is about to leave that spot, so the target isn't there." },
          { text: "Wherever the ball happens to land", correct: false, explanation: "The pass is aimed intentionally, not left to chance." },
        ],
      },
      {
        question: "What happens to this exact formation once the team rotates again?",
        answers: [
          { text: "It changes — a different player now occupies zone 1, forming Rotation 2's shape", correct: true, explanation: "Correct — the whole picture shifts along with the rotation." },
          { text: "Nothing — it stays exactly the same all set", correct: false, explanation: "The formation is tied to the current rotation, so it does change." },
          { text: "The libero leaves the court permanently", correct: false, explanation: "The libero continues rotating through its usual back-row role." },
          { text: "The setter is disqualified from setting", correct: false, explanation: "Rotating simply changes zones — it doesn't remove any role." },
        ],
      },
      {
        question: "Scenario: you see a team with R in the back-right corner and two other back-row players spread to receive. Which rotation is this?",
        answers: [
          { text: "Rotation 1", correct: true, explanation: "Correct — this exactly matches Rotation 1's receiving shape." },
          { text: "Rotation 4", correct: false, explanation: "In Rotation 4 the setter is front row, not back-right." },
          { text: "Rotation 6", correct: false, explanation: "In Rotation 6 the setter is front row, not back-right." },
          { text: "Rotation 2", correct: false, explanation: "Rotation 2 is a base-defense shape, not a receiving one." },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Rotation 2: Closing the Net",
    summary: "The team has just served and the setter's zone is 6 — the first look at a base-defense shape.",
    durationMin: 7,
    theory: [
      "In Rotation 2, the setter's zone is Zone 6 — back middle. This time the picture is different in kind, not just in position: the team has just hit its own serve, so the ball is already on the opponent's side of the net. There's no serve coming in to receive.",
      "Instead of a passing shape, the team snaps into base defense. Up front, the middle (Ś) sets up on the front left, the opposite (A) takes the front middle, and an outside hitter (P) covers the front right — together forming the blocking line at the net.",
      "In the back row, R holds back-middle, an outside hitter (P) covers back-left, and the libero (L) covers back-right. These three spread out to form a defensive triangle, ready to cover whatever the opponent's attack sends back — tips, deep drives, or anything in between.",
      "There's a useful contrast with Rotation 1 here: instead of a single passing target, base defense is about court coverage. No one player is 'the' target, because there's no incoming pass yet — just space that needs to be covered until the opponent actually attacks.",
      "The libero still fills the same role it always does: covering whichever back-row zone would otherwise belong to the team's other middle blocker. That's true whether the shape is a receiving formation or, as here, a base-defense one.",
    ],
    keyTakeaway: "In Rotation 2, right after the team's own serve, the three front-row players (Ś, A, P) form the blocking line at the net while R, an outside hitter and the libero spread across the back row in a defensive triangle — coverage, not a single passing target.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "Right after the serve, the front row closes toward the net into a blocking line while the back row spreads to cover the court.",
      activeZones: [4, 3, 2, 6, 5, 1],
      labels: { 6: "R", 5: "P", 4: "Ś", 3: "A", 2: "P", 1: "L" },
      motions: { 4: { dx: 0, dy: -14 }, 3: { dx: 0, dy: -14 }, 2: { dx: 0, dy: -14 }, 5: { dx: -10, dy: 8 }, 1: { dx: 10, dy: 8 } },
      ball: null,
    },
    quiz: [
      {
        question: "In Rotation 2, which zone is the setter in?",
        answers: [
          { text: "Zone 6 (back middle)", correct: true, explanation: "Correct — this defines Rotation 2 in this chapter." },
          { text: "Zone 1 (back right)", correct: false, explanation: "Zone 1 is the setter's zone in Rotation 1, not Rotation 2." },
          { text: "Zone 4 (front left)", correct: false, explanation: "Zone 4 belongs to the middle in this rotation, not the setter." },
          { text: "Zone 3 (front middle)", correct: false, explanation: "Zone 3 belongs to the opposite in this rotation." },
        ],
      },
      {
        question: "What has just happened for the team to be in this shape?",
        answers: [
          { text: "The team has just hit its own serve", correct: true, explanation: "Correct — that's exactly what triggers a base-defense shape." },
          { text: "The team just received a serve", correct: false, explanation: "Receiving a serve would call for a serve-receive shape instead." },
          { text: "A time-out was just called", correct: false, explanation: "Time-outs don't determine which shape a team uses." },
          { text: "The libero just entered the court", correct: false, explanation: "The libero's entry isn't what triggers this shape." },
        ],
      },
      {
        question: "Who is on front-left in Rotation 2?",
        answers: [
          { text: "The middle (Ś)", correct: true, explanation: "Correct — the middle covers front-left in this rotation." },
          { text: "The opposite (A)", correct: false, explanation: "The opposite is on front-middle in this rotation." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter here is on front-right, not front-left." },
          { text: "The setter (R)", correct: false, explanation: "The setter is back row in this rotation." },
        ],
      },
      {
        question: "Who is on front-middle in Rotation 2?",
        answers: [
          { text: "The opposite (A)", correct: true, explanation: "Correct — the opposite covers front-middle in this rotation." },
          { text: "The middle (Ś)", correct: false, explanation: "The middle is on front-left in this rotation, not front-middle." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter here is on front-right, not front-middle." },
          { text: "The libero (L)", correct: false, explanation: "The libero is a back-row player in this rotation." },
        ],
      },
      {
        question: "Who covers back-right in Rotation 2?",
        answers: [
          { text: "The libero (L)", correct: true, explanation: "Correct — the libero takes back-right in this rotation." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter is on back-left in this rotation, not back-right." },
          { text: "The setter (R)", correct: false, explanation: "The setter is on back-middle, not back-right, in this rotation." },
          { text: "The middle (Ś)", correct: false, explanation: "The middle is front row in this rotation." },
        ],
      },
      {
        question: "What is the front row's job right after the team's own serve?",
        answers: [
          { text: "Forming the blocking line at the net", correct: true, explanation: "Correct — this is exactly what base defense's front row does." },
          { text: "Receiving the next serve", correct: false, explanation: "There is no serve coming in to receive at this moment." },
          { text: "Substituting immediately", correct: false, explanation: "No substitution is required just because the team served." },
          { text: "Serving again", correct: false, explanation: "The serve has already happened — the ball is on the opponent's side." },
        ],
      },
      {
        question: "Why isn't there a single fixed passing target in this shape?",
        answers: [
          { text: "Because there is no incoming pass yet — the ball is on the opponent's side", correct: true, explanation: "Correct — a target only matters once a serve is actually coming in." },
          { text: "Because targets are illegal in base defense", correct: false, explanation: "There's no such rule — the target simply isn't relevant yet." },
          { text: "Because the setter has left the court", correct: false, explanation: "The setter is still on the court, just not receiving anything yet." },
          { text: "Because only receive formations use targets", correct: false, explanation: "That's true here, but the reason is timing, not a rule about formation types." },
        ],
      },
      {
        question: "What is the purpose of the back-row triangle in base defense?",
        answers: [
          { text: "To cover whatever attack the opponent sends back", correct: true, explanation: "Correct — this is exactly why the back row spreads out." },
          { text: "To prepare to serve again immediately", correct: false, explanation: "The next serve depends on winning the rally, not this positioning." },
          { text: "To receive a second serve", correct: false, explanation: "There's no second serve involved in this moment of play." },
          { text: "To let the libero rest", correct: false, explanation: "The libero is actively covering a zone, not resting." },
        ],
      },
      {
        question: "Does the libero's role change between a receiving shape and a base-defense shape?",
        answers: [
          { text: "No — it still covers the zone the other middle would otherwise occupy", correct: true, explanation: "Correct — this stays consistent across every shape." },
          { text: "Yes, the libero only appears in base defense", correct: false, explanation: "The libero appears in both shapes, not just base defense." },
          { text: "Yes, the libero cannot play in base defense at all", correct: false, explanation: "The libero is very much part of the base-defense shape." },
          { text: "Yes, the libero becomes the setter", correct: false, explanation: "The libero never takes over the setter's role this way." },
        ],
      },
      {
        question: "Scenario: R is in back-middle, with the front row closing toward the net right after a serve. Which rotation is this?",
        answers: [
          { text: "Rotation 2", correct: true, explanation: "Correct — this exactly matches Rotation 2's base-defense shape." },
          { text: "Rotation 1", correct: false, explanation: "Rotation 1 is a receiving shape with the setter in back-right." },
          { text: "Rotation 5", correct: false, explanation: "Rotation 5 has the setter in the front row, not back-middle." },
          { text: "Rotation 3", correct: false, explanation: "Rotation 3 has the setter in back-left, not back-middle." },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Rotation 3: The One-Zone Shift",
    summary: "One more rotation forward, the setter's zone is now 5 — the same base-defense idea, in a new spot.",
    durationMin: 7,
    theory: [
      "Rotation 3 moves the setter's zone to Zone 5 — back left. It's still a base-defense picture: the team has just served, so once again there's no incoming ball to receive, just a shape to hold until the opponent attacks.",
      "Up front, an outside hitter (P) takes front-left, the middle (Ś) moves to front-middle, and the opposite (A) covers front-right. Notice these are the same three roles from Rotation 2's front row — just shuffled one zone over, because the whole lineup has rotated together.",
      "In the back row, R now sits at back-left, an outside hitter (P) covers back-right, and the libero (L) covers back-middle. R is still comfortably part of the defensive shape rather than tied up receiving anything, simply because there's no serve to receive in this picture at all.",
      "This is a good moment to notice the pattern: from one rotation to the next, every single role shifts exactly one zone in the same direction. Nothing is reshuffled at random — the whole six-person shape just slides around the court together.",
      "Rotation 3 still has the setter in the back row, just like Rotations 1 and 2. That streak matters — it means the setter has one more rotation of base defense before crossing into the front row, which is exactly where the next few lessons are headed.",
    ],
    keyTakeaway: "Rotation 3 keeps the same base-defense idea as Rotation 2, with every role shifted exactly one zone over — front row (P, Ś, A) forms the block while back row (R, P, L) spreads to cover the court.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The whole six-player shape has slid one zone over from the last rotation, but the base-defense idea is exactly the same.",
      activeZones: [4, 3, 2, 5, 1, 6],
      labels: { 5: "R", 4: "P", 3: "Ś", 2: "A", 1: "P", 6: "L" },
      motions: { 4: { dx: 0, dy: -14 }, 3: { dx: 0, dy: -14 }, 2: { dx: 0, dy: -14 }, 1: { dx: 10, dy: 8 }, 6: { dx: 0, dy: 10 } },
      ball: null,
    },
    quiz: [
      {
        question: "In Rotation 3, which zone is the setter in?",
        answers: [
          { text: "Zone 5 (back left)", correct: true, explanation: "Correct — this defines Rotation 3 in this chapter." },
          { text: "Zone 6 (back middle)", correct: false, explanation: "Zone 6 was the setter's zone in Rotation 2, not Rotation 3." },
          { text: "Zone 2 (front right)", correct: false, explanation: "Zone 2 belongs to the opposite in this rotation." },
          { text: "Zone 1 (back right)", correct: false, explanation: "Zone 1 belongs to an outside hitter in this rotation." },
        ],
      },
      {
        question: "Who is on front-middle in Rotation 3?",
        answers: [
          { text: "The middle (Ś)", correct: true, explanation: "Correct — the middle covers front-middle in this rotation." },
          { text: "The opposite (A)", correct: false, explanation: "The opposite is on front-right in this rotation, not front-middle." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter here is on front-left, not front-middle." },
          { text: "The setter (R)", correct: false, explanation: "The setter is back row in this rotation." },
        ],
      },
      {
        question: "Who covers front-right in Rotation 3?",
        answers: [
          { text: "The opposite (A)", correct: true, explanation: "Correct — the opposite covers front-right in this rotation." },
          { text: "The middle (Ś)", correct: false, explanation: "The middle is on front-middle in this rotation, not front-right." },
          { text: "The libero (L)", correct: false, explanation: "The libero is a back-row player in this rotation." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter here is on front-left, not front-right." },
        ],
      },
      {
        question: "Who covers back-middle in Rotation 3?",
        answers: [
          { text: "The libero (L)", correct: true, explanation: "Correct — the libero takes back-middle in this rotation." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter is on back-right in this rotation, not back-middle." },
          { text: "The setter (R)", correct: false, explanation: "The setter is on back-left, not back-middle, in this rotation." },
          { text: "The opposite (A)", correct: false, explanation: "The opposite is front row in this rotation." },
        ],
      },
      {
        question: "What is the relationship between Rotation 2's shape and Rotation 3's shape?",
        answers: [
          { text: "Every role has shifted exactly one zone over in the same direction", correct: true, explanation: "Correct — this is exactly how rotation works from one to the next." },
          { text: "They are completely unrelated formations", correct: false, explanation: "They're directly connected — just shifted one zone." },
          { text: "The roles have been randomly reshuffled", correct: false, explanation: "Nothing is random — the shift is consistent and predictable." },
          { text: "Rotation 3 removes the libero entirely", correct: false, explanation: "The libero is still present, covering back-middle." },
        ],
      },
      {
        question: "Is Rotation 3 a serve-receive shape or a base-defense shape?",
        answers: [
          { text: "Base defense — the team has just served", correct: true, explanation: "Correct — there's no incoming serve to receive here." },
          { text: "Serve receive — the opponent is serving", correct: false, explanation: "That describes Rotations 1 and 5, not Rotation 3." },
          { text: "Neither — it's a time-out formation", correct: false, explanation: "Time-outs don't have their own formation like this." },
          { text: "Both, simultaneously", correct: false, explanation: "A rotation is one shape or the other at any given moment, not both." },
        ],
      },
      {
        question: "Is the setter in the front row or back row during Rotation 3?",
        answers: [
          { text: "Back row", correct: true, explanation: "Correct — the setter's zone (5) is a back-row zone." },
          { text: "Front row", correct: false, explanation: "Zone 5 is a back-row zone, not front row." },
          { text: "Neither — off the court", correct: false, explanation: "The setter is on the court in every rotation." },
          { text: "It varies every point", correct: false, explanation: "Within a single rotation, the setter's row stays fixed." },
        ],
      },
      {
        question: "How many of the first three rotations (1, 2, 3) have the setter in the back row?",
        answers: [
          { text: "All three", correct: true, explanation: "Correct — Rotations 1, 2 and 3 all keep the setter back row." },
          { text: "Only one", correct: false, explanation: "It's actually all three of the first rotations." },
          { text: "None", correct: false, explanation: "The setter is back row in each of these three rotations." },
          { text: "Two out of three", correct: false, explanation: "It's all three, not just two." },
        ],
      },
      {
        question: "What comes right after Rotation 3 in the setter's back-row-to-front-row progression?",
        answers: [
          { text: "The setter's zone moves into the front row for the first time, starting Rotation 4", correct: true, explanation: "Correct — Rotation 4 is the first front-row rotation for the setter." },
          { text: "The setter is substituted permanently", correct: false, explanation: "No permanent substitution happens as part of this progression." },
          { text: "The rotation cycle restarts from Rotation 1", correct: false, explanation: "The cycle continues forward to Rotation 4, not back to Rotation 1." },
          { text: "The libero becomes the setter", correct: false, explanation: "The libero never takes over the setter's role." },
        ],
      },
      {
        question: "Scenario: R is at back-left, P at back-right, L at back-middle, right after the team's own serve. Which rotation is this?",
        answers: [
          { text: "Rotation 3", correct: true, explanation: "Correct — this exactly matches Rotation 3's base-defense shape." },
          { text: "Rotation 2", correct: false, explanation: "In Rotation 2 the setter is at back-middle, not back-left." },
          { text: "Rotation 5", correct: false, explanation: "Rotation 5 is a receiving shape with the setter front row." },
          { text: "Rotation 6", correct: false, explanation: "In Rotation 6 the setter is front row, not back-left." },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Rotation 4: Crossing to the Front",
    summary: "The setter crosses into the front row for the first time — still base defense, but right at the net this time.",
    durationMin: 7,
    theory: [
      "Rotation 4 is the first rotation in this cycle where the setter's zone lands in the front row — Zone 4, front left. The team has just served, so this is still a base-defense shape, but now R is part of the blocking line instead of the back-row triangle.",
      "The rest of the front row lines up an outside hitter (P) at front-middle and the middle (Ś) at front-right, standing shoulder to shoulder with R along the net. All three are ready to block the very next attack that comes back over.",
      "In the back row, the opposite (A) covers back-right, an outside hitter (P) covers back-middle, and the libero (L) covers back-left — the same defensive triangle idea as the last two lessons, just with different roles filling it this time.",
      "Because R is now front row, there's a small practical bonus: the setter doesn't need to release from deep in the back court to reach the net — they're already there. That head start becomes especially useful once the team transitions from defense into its own attack.",
      "This is also the setter's first front-row rotation in the sequence, which means the next lesson — Rotation 5 — will be the first time this chapter shows a serve-receive shape with the setter already up front, instead of tucked in a back corner.",
    ],
    keyTakeaway: "Rotation 4 is the first rotation with the setter in the front row — R joins the blocking line directly at the net, while the opposite, an outside hitter and the libero form the back-row defensive triangle.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "For the first time in this chapter, the setter is right there in the blocking line — no long release run needed.",
      activeZones: [4, 3, 2, 1, 6, 5],
      labels: { 4: "R", 3: "P", 2: "Ś", 1: "A", 6: "P", 5: "L" },
      motions: { 4: { dx: 0, dy: -14 }, 3: { dx: 0, dy: -14 }, 2: { dx: 0, dy: -14 }, 1: { dx: 10, dy: 8 }, 5: { dx: -10, dy: 8 } },
      ball: null,
    },
    quiz: [
      {
        question: "In Rotation 4, which zone is the setter in?",
        answers: [
          { text: "Zone 4 (front left)", correct: true, explanation: "Correct — this defines Rotation 4 in this chapter." },
          { text: "Zone 6 (back middle)", correct: false, explanation: "Zone 6 was the setter's zone in Rotation 2, not Rotation 4." },
          { text: "Zone 1 (back right)", correct: false, explanation: "Zone 1 was the setter's zone in Rotation 1, not Rotation 4." },
          { text: "Zone 5 (back left)", correct: false, explanation: "Zone 5 was the setter's zone in Rotation 3, not Rotation 4." },
        ],
      },
      {
        question: "What is significant about Rotation 4 compared to Rotations 1–3?",
        answers: [
          { text: "It's the first rotation with the setter in the front row", correct: true, explanation: "Correct — this is exactly the shift this lesson highlights." },
          { text: "It's the first rotation with a libero", correct: false, explanation: "The libero has been present in every rotation covered so far." },
          { text: "It's the only rotation with a serve-receive shape", correct: false, explanation: "Rotation 4 is a base-defense shape, not a receiving one." },
          { text: "It removes the opposite from the lineup", correct: false, explanation: "The opposite is still on the court, covering back-right." },
        ],
      },
      {
        question: "Who covers back-right in Rotation 4?",
        answers: [
          { text: "The opposite (A)", correct: true, explanation: "Correct — the opposite covers back-right in this rotation." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter is on back-middle in this rotation, not back-right." },
          { text: "The libero (L)", correct: false, explanation: "The libero is on back-left in this rotation, not back-right." },
          { text: "The middle (Ś)", correct: false, explanation: "The middle is front row in this rotation." },
        ],
      },
      {
        question: "Who covers back-left in Rotation 4?",
        answers: [
          { text: "The libero (L)", correct: true, explanation: "Correct — the libero covers back-left in this rotation." },
          { text: "The opposite (A)", correct: false, explanation: "The opposite is on back-right in this rotation, not back-left." },
          { text: "The setter (R)", correct: false, explanation: "The setter is front row in this rotation." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter is on back-middle in this rotation, not back-left." },
        ],
      },
      {
        question: "What practical advantage does the setter get from being in the front row here?",
        answers: [
          { text: "They don't need a long release run to reach the net — they're already there", correct: true, explanation: "Correct — this is exactly the head start this lesson describes." },
          { text: "They are excused from blocking entirely", correct: false, explanation: "A front-row setter is very much part of the blocking line." },
          { text: "They automatically win the next point", correct: false, explanation: "Positioning helps, but it doesn't guarantee winning the point." },
          { text: "They can now serve twice in a row", correct: false, explanation: "Serving turns follow rotation order, not this positioning." },
        ],
      },
      {
        question: "Is Rotation 4 a serve-receive shape or a base-defense shape?",
        answers: [
          { text: "Base defense", correct: true, explanation: "Correct — the team has just served in this rotation." },
          { text: "Serve receive", correct: false, explanation: "That describes Rotations 1 and 5, not Rotation 4." },
          { text: "A time-out formation", correct: false, explanation: "There's no distinct time-out formation like this." },
          { text: "Neither", correct: false, explanation: "It's specifically a base-defense shape." },
        ],
      },
      {
        question: "Who is on front-middle in Rotation 4?",
        answers: [
          { text: "An outside hitter (P)", correct: true, explanation: "Correct — the outside hitter covers front-middle in this rotation." },
          { text: "The middle (Ś)", correct: false, explanation: "The middle is on front-right in this rotation, not front-middle." },
          { text: "The opposite (A)", correct: false, explanation: "The opposite is back row in this rotation." },
          { text: "The libero (L)", correct: false, explanation: "The libero is a back-row player in this rotation." },
        ],
      },
      {
        question: "What does Rotation 4 set up for the very next lesson?",
        answers: [
          { text: "The first serve-receive shape with the setter already in the front row", correct: true, explanation: "Correct — Rotation 5 continues that front-row streak into a receiving shape." },
          { text: "The removal of the libero from the lineup", correct: false, explanation: "The libero continues to appear in every following rotation." },
          { text: "A return to Rotation 1's exact shape", correct: false, explanation: "Rotation 5 is a new shape, not identical to Rotation 1." },
          { text: "The end of the rotation cycle", correct: false, explanation: "The cycle continues on through Rotations 5 and 6 next." },
        ],
      },
      {
        question: "In how many total rotations out of six is the setter in the front row?",
        answers: [
          { text: "Three", correct: true, explanation: "Correct — Rotations 4, 5 and 6 all keep the setter front row." },
          { text: "One", correct: false, explanation: "It's three rotations, not just one." },
          { text: "Five", correct: false, explanation: "Three rotations have the setter back row, three front row." },
          { text: "All six", correct: false, explanation: "Half the rotations put the setter back row instead." },
        ],
      },
      {
        question: "Scenario: R is standing directly in the blocking line at front-left, right after the team's serve. Which rotation is this?",
        answers: [
          { text: "Rotation 4", correct: true, explanation: "Correct — this exactly matches Rotation 4's base-defense shape." },
          { text: "Rotation 1", correct: false, explanation: "Rotation 1 has the setter in back-right, in a receiving shape." },
          { text: "Rotation 3", correct: false, explanation: "In Rotation 3 the setter is back row, at back-left." },
          { text: "Rotation 6", correct: false, explanation: "In Rotation 6 the setter is at front-right, not front-left." },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Rotation 5: No Corner to Hide",
    summary: "The opponent is serving again, but this time the setter is already front row — so the 'hiding spot' rule doesn't even apply.",
    durationMin: 7,
    theory: [
      "Rotation 5 brings back a serve-receive shape — the opponent is serving again — but with a twist from Lesson 2: the setter's zone this time is Zone 3, front middle. R is in the front row, so the hiding-spot rule simply doesn't apply here at all.",
      "Since serve receive is strictly a back-row job, a front-row setter was never going to be a receiving option in the first place. There's no need to tuck R into a corner — they can stand exactly where they'll be needed, right at the net, from the very start of the rally.",
      "That means the back-row receiving trio looks different from Rotation 1 too: the libero (L) covers back-right, the opposite (A) covers back-middle, and an outside hitter (P) covers back-left. Notice that A is now one of the two main passers — a role it didn't have in Rotation 1.",
      "Up front alongside R, an outside hitter (P) covers front-right and the middle (Ś) covers front-left, both free to prepare their attacking approach exactly the way the front row was free back in Rotation 1 — just with different roles standing in those spots.",
      "Comparing Rotations 1 and 5 side by side is one of the clearest ways to see this chapter's whole point: same six roles, same underlying rules, but a genuinely different-looking picture depending on exactly where the setter's rotation happens to place them.",
    ],
    keyTakeaway: "In Rotation 5, the setter is already front row, so the hiding-spot rule from Lesson 2 doesn't apply — the libero, the opposite and an outside hitter handle the back-row passing instead, while R stands ready at the net from the start.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "With the setter already front row, there's no corner to hide in — the back-row trio (L, A, P) handles the pass instead.",
      activeZones: [3, 2, 4, 1, 6, 5],
      labels: { 3: "R", 2: "P", 4: "Ś", 1: "L", 6: "A", 5: "P" },
      motions: {},
      ball: { path: [{ x: 50, y: -8 }, { x: 82, y: 76 }, { x: 55, y: 30 }] },
    },
    quiz: [
      {
        question: "In Rotation 5, which zone is the setter in?",
        answers: [
          { text: "Zone 3 (front middle)", correct: true, explanation: "Correct — this defines Rotation 5 in this chapter." },
          { text: "Zone 1 (back right)", correct: false, explanation: "Zone 1 was the setter's zone in Rotation 1, not Rotation 5." },
          { text: "Zone 6 (back middle)", correct: false, explanation: "Zone 6 was the setter's zone in Rotation 2, not Rotation 5." },
          { text: "Zone 5 (back left)", correct: false, explanation: "Zone 5 was the setter's zone in Rotation 3, not Rotation 5." },
        ],
      },
      {
        question: "Why doesn't the hiding-spot rule from Lesson 2 apply in Rotation 5?",
        answers: [
          { text: "Because the setter is already in the front row, and front-row players never receive serve", correct: true, explanation: "Correct — this is exactly why the rule becomes irrelevant here." },
          { text: "Because the libero has been removed from the lineup", correct: false, explanation: "The libero is still present, covering back-right." },
          { text: "Because Rotation 5 has no serve at all", correct: false, explanation: "The opponent is serving — there is very much a serve in this rotation." },
          { text: "Because the rule only applies on even-numbered rotations", correct: false, explanation: "The rule applies whenever the setter is back row, not by rotation number." },
        ],
      },
      {
        question: "Who covers back-right in Rotation 5?",
        answers: [
          { text: "The libero (L)", correct: true, explanation: "Correct — the libero covers back-right in this rotation." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter is on back-left in this rotation, not back-right." },
          { text: "The opposite (A)", correct: false, explanation: "The opposite is on back-middle in this rotation, not back-right." },
          { text: "The setter (R)", correct: false, explanation: "The setter is front row in this rotation." },
        ],
      },
      {
        question: "Who covers back-middle in Rotation 5?",
        answers: [
          { text: "The opposite (A)", correct: true, explanation: "Correct — the opposite covers back-middle in this rotation." },
          { text: "The libero (L)", correct: false, explanation: "The libero is on back-right in this rotation, not back-middle." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter here is on back-left, not back-middle." },
          { text: "The middle (Ś)", correct: false, explanation: "The middle is front row in this rotation." },
        ],
      },
      {
        question: "What's different about the opposite's (A) role here compared with Rotation 1?",
        answers: [
          { text: "In Rotation 5, A is one of the main back-row passers; in Rotation 1, A was front row and not receiving", correct: true, explanation: "Correct — this is exactly the contrast this lesson draws out." },
          { text: "A is not on the court at all in Rotation 5", correct: false, explanation: "The opposite is on the court, covering back-middle." },
          { text: "A becomes the setter in Rotation 5", correct: false, explanation: "The opposite never takes over the setter's role." },
          { text: "There is no difference at all", correct: false, explanation: "The opposite's row — and receiving duty — clearly changes between the two rotations." },
        ],
      },
      {
        question: "Is Rotation 5 a serve-receive shape or a base-defense shape?",
        answers: [
          { text: "Serve receive", correct: true, explanation: "Correct — the opponent is serving in this rotation." },
          { text: "Base defense", correct: false, explanation: "That describes Rotations 2, 3, 4 and 6, not Rotation 5." },
          { text: "Neither — a time-out shape", correct: false, explanation: "There's no such distinct time-out formation." },
          { text: "Both at once", correct: false, explanation: "A rotation is one shape at a time, not both simultaneously." },
        ],
      },
      {
        question: "Who covers front-left in Rotation 5, alongside the setter?",
        answers: [
          { text: "The middle (Ś)", correct: true, explanation: "Correct — the middle covers front-left in this rotation." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter here is on front-right, not front-left." },
          { text: "The opposite (A)", correct: false, explanation: "The opposite is back row in this rotation." },
          { text: "The libero (L)", correct: false, explanation: "The libero is a back-row player in this rotation." },
        ],
      },
      {
        question: "What is the clearest comparison this lesson draws to make its point?",
        answers: [
          { text: "Rotation 1 versus Rotation 5 — same roles and rules, different picture", correct: true, explanation: "Correct — this is exactly the comparison the lesson highlights." },
          { text: "Rotation 5 versus Rotation 6, which look identical", correct: false, explanation: "Rotations 5 and 6 are different shapes with different setter zones." },
          { text: "A comparison to a completely different sport", correct: false, explanation: "The comparison stays entirely within volleyball rotations." },
          { text: "There is no comparison drawn in this lesson", correct: false, explanation: "The lesson explicitly compares Rotation 5 back to Rotation 1." },
        ],
      },
      {
        question: "Since the setter isn't receiving in Rotation 5, what can they do instead from the very start?",
        answers: [
          { text: "Stand ready at the net rather than needing to release from a back corner", correct: true, explanation: "Correct — this is the direct benefit of being front row here." },
          { text: "Leave the court until the pass is complete", correct: false, explanation: "The setter stays on the court the entire time." },
          { text: "Serve again immediately", correct: false, explanation: "The opponent is the one serving in this rotation." },
          { text: "Switch positions with the libero for that rally", correct: false, explanation: "No such switch happens between the setter and libero." },
        ],
      },
      {
        question: "Scenario: the opponent is serving, and R is already standing in the front row. Which rotation from this chapter fits?",
        answers: [
          { text: "Rotation 5", correct: true, explanation: "Correct — this exactly matches Rotation 5's receiving shape." },
          { text: "Rotation 1", correct: false, explanation: "Rotation 1 has the setter in the back row, at back-right." },
          { text: "Rotation 2", correct: false, explanation: "Rotation 2 is a base-defense shape, not a receiving one." },
          { text: "Rotation 4", correct: false, explanation: "Rotation 4 is a base-defense shape, not a receiving one." },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Rotation 6: Closing the Circle",
    summary: "The last stop before the cycle repeats — base defense again, with the setter on the front right.",
    durationMin: 7,
    theory: [
      "Rotation 6 is the last new picture in this cycle: the setter's zone is Zone 2, front right. The team has just served, so it's a base-defense shape again — the third and final rotation with the setter in the front row.",
      "Alongside R, an outside hitter (P) covers front-left and the middle (Ś) covers front-middle, completing the blocking line at the net. The whole front row is set to challenge whatever the opponent tries to send back over.",
      "In the back row, an outside hitter (P) covers back-right, the libero (L) covers back-middle, and the opposite (A) covers back-left — spread into the familiar defensive triangle shape seen in every base-defense rotation so far.",
      "After Rotation 6, the cycle simply starts over: the next time the team wins the serve back and rotates, the setter's zone returns to Zone 1, and the whole sequence — Rotation 1 through Rotation 6 — repeats itself exactly as before.",
      "With this lesson, all six rotations in this chapter's example lineup have now been covered: two serve-receive shapes (Rotations 1 and 5) and four base-defense shapes (Rotations 2, 3, 4 and 6). The next lesson looks at the movement that connects these static pictures together.",
    ],
    keyTakeaway: "Rotation 6 completes the base-defense set — R, an outside hitter and the middle form the blocking line while an outside hitter, the libero and the opposite spread across the back row — and closes out the full six-rotation cycle.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The last base-defense picture in the cycle — after this, the whole sequence loops back to Rotation 1.",
      activeZones: [2, 4, 3, 1, 6, 5],
      labels: { 2: "R", 4: "P", 3: "Ś", 1: "P", 6: "L", 5: "A" },
      motions: { 2: { dx: 0, dy: -14 }, 4: { dx: 0, dy: -14 }, 3: { dx: 0, dy: -14 }, 1: { dx: 10, dy: 8 }, 5: { dx: -10, dy: 8 } },
      ball: null,
    },
    quiz: [
      {
        question: "In Rotation 6, which zone is the setter in?",
        answers: [
          { text: "Zone 2 (front right)", correct: true, explanation: "Correct — this defines Rotation 6 in this chapter." },
          { text: "Zone 4 (front left)", correct: false, explanation: "Zone 4 was the setter's zone in Rotation 4, not Rotation 6." },
          { text: "Zone 6 (back middle)", correct: false, explanation: "Zone 6 was the setter's zone in Rotation 2, not Rotation 6." },
          { text: "Zone 3 (front middle)", correct: false, explanation: "Zone 3 was the setter's zone in Rotation 5, not Rotation 6." },
        ],
      },
      {
        question: "Is Rotation 6 a serve-receive shape or a base-defense shape?",
        answers: [
          { text: "Base defense", correct: true, explanation: "Correct — the team has just served in this rotation." },
          { text: "Serve receive", correct: false, explanation: "That describes Rotations 1 and 5, not Rotation 6." },
          { text: "Neither", correct: false, explanation: "It's specifically a base-defense shape." },
          { text: "Both", correct: false, explanation: "A rotation is one shape at a time, not both simultaneously." },
        ],
      },
      {
        question: "Who covers front-left in Rotation 6?",
        answers: [
          { text: "An outside hitter (P)", correct: true, explanation: "Correct — the outside hitter covers front-left in this rotation." },
          { text: "The middle (Ś)", correct: false, explanation: "The middle is on front-middle in this rotation, not front-left." },
          { text: "The opposite (A)", correct: false, explanation: "The opposite is back row in this rotation." },
          { text: "The libero (L)", correct: false, explanation: "The libero is a back-row player in this rotation." },
        ],
      },
      {
        question: "Who covers back-left in Rotation 6?",
        answers: [
          { text: "The opposite (A)", correct: true, explanation: "Correct — the opposite covers back-left in this rotation." },
          { text: "The libero (L)", correct: false, explanation: "The libero is on back-middle in this rotation, not back-left." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter is on back-right in this rotation, not back-left." },
          { text: "The setter (R)", correct: false, explanation: "The setter is front row in this rotation." },
        ],
      },
      {
        question: "What happens immediately after Rotation 6 in the cycle?",
        answers: [
          { text: "The cycle restarts — the setter's zone returns to Zone 1", correct: true, explanation: "Correct — this is exactly how the loop continues." },
          { text: "The set ends automatically", correct: false, explanation: "Sets end based on score, not on completing a rotation cycle." },
          { text: "The libero is permanently substituted in", correct: false, explanation: "The libero's substitution pattern doesn't change because of this cycle point." },
          { text: "The team is required to change its lineup", correct: false, explanation: "There's no requirement to change the lineup after a full cycle." },
        ],
      },
      {
        question: "How many of the six rotations in this chapter are serve-receive shapes?",
        answers: [
          { text: "Two — Rotations 1 and 5", correct: true, explanation: "Correct — these are the two receiving shapes covered in this chapter." },
          { text: "Four", correct: false, explanation: "Four of the rotations are base-defense shapes instead." },
          { text: "Six, all of them", correct: false, explanation: "Only two of the six are receiving shapes in this chapter's example." },
          { text: "Zero", correct: false, explanation: "Rotations 1 and 5 are both receiving shapes." },
        ],
      },
      {
        question: "How many of the six rotations are base-defense shapes?",
        answers: [
          { text: "Four — Rotations 2, 3, 4 and 6", correct: true, explanation: "Correct — these four are the base-defense shapes covered in this chapter." },
          { text: "Two", correct: false, explanation: "Two of the rotations are receiving shapes instead." },
          { text: "Six, all of them", correct: false, explanation: "Two of the six are receiving shapes, not base defense." },
          { text: "One", correct: false, explanation: "There are four base-defense rotations, not just one." },
        ],
      },
      {
        question: "Who covers back-middle in Rotation 6?",
        answers: [
          { text: "The libero (L)", correct: true, explanation: "Correct — the libero covers back-middle in this rotation." },
          { text: "An outside hitter (P)", correct: false, explanation: "The outside hitter is on back-right in this rotation, not back-middle." },
          { text: "The opposite (A)", correct: false, explanation: "The opposite is on back-left in this rotation, not back-middle." },
          { text: "The setter (R)", correct: false, explanation: "The setter is front row in this rotation." },
        ],
      },
      {
        question: "What does the next lesson in this chapter focus on?",
        answers: [
          { text: "The movement that connects the static rotation pictures together", correct: true, explanation: "Correct — this is exactly what Lesson 9 covers." },
          { text: "A brand-new seventh rotation", correct: false, explanation: "There are only six rotations — no seventh is introduced." },
          { text: "Serving rules from a much earlier chapter", correct: false, explanation: "The next lesson connects directly to this chapter's own material." },
          { text: "Substitution limits", correct: false, explanation: "Substitution limits aren't the focus of the next lesson." },
        ],
      },
      {
        question: "Scenario: R is on the front row at zone 2, right after the team's own serve. Which rotation is this?",
        answers: [
          { text: "Rotation 6", correct: true, explanation: "Correct — this exactly matches Rotation 6's base-defense shape." },
          { text: "Rotation 4", correct: false, explanation: "In Rotation 4 the setter is at zone 4, not zone 2." },
          { text: "Rotation 2", correct: false, explanation: "In Rotation 2 the setter is at zone 6, not zone 2." },
          { text: "Rotation 5", correct: false, explanation: "Rotation 5 is a receiving shape, not base defense." },
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Reading the Arrows",
    summary: "What the movement arrows in every one of these diagrams actually represent, once the ball is put in play.",
    durationMin: 7,
    theory: [
      "Every diagram in this chapter shows a snapshot — where six players stand at one exact instant, just before the serve is hit. The arrows drawn on top of that snapshot represent what happens the moment after: the movement each player makes once the ball is actually in play.",
      "On a serve-receive shape, like Rotations 1 and 5, the arrows mostly show the ball's path — the serve arriving, then the pass traveling forward toward the target near the net — plus the setter's release from their starting spot toward that same target.",
      "On a base-defense shape, like Rotations 2, 3, 4 and 6, the arrows show the front row closing in slightly toward the net to form a tighter blocking line, while the back row spreads outward to cover more space in its defensive triangle.",
      "None of these movements happen before the ball is actually contacted. Players hold their starting positions right up until the serve is hit — moving too early, especially into a teammate's space, risks a rotation fault, a rule covered back in the rotations chapter.",
      "So an arrow is never the starting picture itself — it's the transition. Reading a formation well means recognizing both halves: where everyone begins, and where that same picture is about to shift to a heartbeat later.",
    ],
    keyTakeaway: "The arrows in a rotation diagram represent the movement that begins the instant the ball is contacted — the pass and setter release in serve-receive shapes, or the tightening block and spreading back row in base-defense shapes — never movement before that moment.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "The arrows are the transition: the pass traveling forward, the front row closing toward the net, the back row spreading to cover space.",
      activeZones: [4, 3, 2, 1, 6, 5],
      labels: {},
      motions: { 4: { dx: 0, dy: -14 }, 3: { dx: 0, dy: -14 }, 2: { dx: 0, dy: -14 }, 1: { dx: 10, dy: 8 }, 5: { dx: -10, dy: 8 } },
      ball: { path: [{ x: 50, y: -8 }, { x: 50, y: 76 }, { x: 45, y: 30 }] },
    },
    quiz: [
      {
        question: "What does an arrow in one of this chapter's diagrams represent?",
        answers: [
          { text: "The movement a player makes once the ball is actually in play", correct: true, explanation: "Correct — this is exactly what every arrow represents." },
          { text: "The player's assigned zone number", correct: false, explanation: "Zone numbers are shown separately from the movement arrows." },
          { text: "A rotation fault", correct: false, explanation: "An arrow shows intended, legal movement, not a fault." },
          { text: "The referee's positioning", correct: false, explanation: "These diagrams are about the team's own players, not officials." },
        ],
      },
      {
        question: "On a serve-receive shape, what do the arrows mostly show?",
        answers: [
          { text: "The serve's path and the pass traveling forward, plus the setter's release", correct: true, explanation: "Correct — this is exactly what's illustrated in a receiving shape." },
          { text: "The opponent's substitutions", correct: false, explanation: "Substitutions on the other team aren't shown in these diagrams." },
          { text: "The scoreboard changing", correct: false, explanation: "The scoreboard isn't part of a rotation diagram at all." },
          { text: "A player leaving the court", correct: false, explanation: "No player leaves the court as part of this movement." },
        ],
      },
      {
        question: "On a base-defense shape, what do the arrows mostly show?",
        answers: [
          { text: "The front row closing toward the net and the back row spreading out", correct: true, explanation: "Correct — this is exactly the transition base defense involves." },
          { text: "The ball being served for the first time", correct: false, explanation: "The serve has already happened in a base-defense shape." },
          { text: "A time-out being called", correct: false, explanation: "Time-outs aren't represented by these movement arrows." },
          { text: "Players swapping jerseys", correct: false, explanation: "Nothing like a jersey swap happens during this transition." },
        ],
      },
      {
        question: "When are players allowed to actually start moving into these arrow paths?",
        answers: [
          { text: "Not before the ball is contacted on the serve", correct: true, explanation: "Correct — movement is only legal once the serve is actually hit." },
          { text: "As soon as they see the opponent line up", correct: false, explanation: "Seeing the opponent line up doesn't permit early movement." },
          { text: "Immediately after the previous rally ends", correct: false, explanation: "Players must hold their starting spots until the serve, not move right after the last rally." },
          { text: "Whenever the coach signals, regardless of the serve", correct: false, explanation: "A coach's signal doesn't override the timing rule tied to the serve contact." },
        ],
      },
      {
        question: "What can happen if a player moves too early, into a teammate's space?",
        answers: [
          { text: "A rotation fault", correct: true, explanation: "Correct — this is the violation risked by moving too soon." },
          { text: "An automatic point for their own team", correct: false, explanation: "Moving too early risks a fault, not a bonus point." },
          { text: "A mandatory substitution", correct: false, explanation: "No substitution is triggered automatically by early movement." },
          { text: "Nothing — early movement is always allowed", correct: false, explanation: "Early movement into a teammate's space is exactly what risks a fault." },
        ],
      },
      {
        question: "Is the arrow itself the starting picture of a formation?",
        answers: [
          { text: "No — it's the transition away from the starting picture", correct: true, explanation: "Correct — the arrow shows what happens next, not the starting spot." },
          { text: "Yes, it is exactly the starting picture", correct: false, explanation: "The starting picture is shown by the player positions, not the arrows." },
          { text: "Yes, but only in base-defense shapes", correct: false, explanation: "In every shape, the arrow represents the transition, not the start." },
          { text: "No, arrows never appear in these diagrams at all", correct: false, explanation: "Arrows do appear — they represent the movement that follows." },
        ],
      },
      {
        question: "What two things does 'reading a formation well' require, according to this lesson?",
        answers: [
          { text: "Recognizing where everyone starts, and where that picture is about to shift", correct: true, explanation: "Correct — this is exactly the two-part skill this lesson describes." },
          { text: "Knowing only the final score of the set", correct: false, explanation: "The score has nothing to do with reading a formation." },
          { text: "Knowing only the referee's position", correct: false, explanation: "The referee's position isn't part of reading a team's formation." },
          { text: "Memorizing the opponent's jersey numbers", correct: false, explanation: "Jersey numbers aren't what this skill is about." },
        ],
      },
      {
        question: "Where was the rule about moving too early originally covered?",
        answers: [
          { text: "In the earlier chapter on rotations", correct: true, explanation: "Correct — this lesson references that earlier material directly." },
          { text: "In this exact lesson for the first time", correct: false, explanation: "The rule is referenced here, but was introduced earlier in the course." },
          { text: "It has never been covered in this course", correct: false, explanation: "It was explicitly covered in the earlier rotations chapter." },
          { text: "In the serve-receive chapter only", correct: false, explanation: "It comes from the rotations chapter, not the serve-receive one." },
        ],
      },
      {
        question: "In a base-defense shape, why does the back row spread outward?",
        answers: [
          { text: "To cover more space in its defensive triangle against the opponent's attack", correct: true, explanation: "Correct — this is exactly the purpose of that spreading movement." },
          { text: "To prepare to serve again immediately", correct: false, explanation: "The next serve depends on winning the rally, not this movement." },
          { text: "To make room for a substitution", correct: false, explanation: "No substitution is tied to this particular movement." },
          { text: "To receive a second serve", correct: false, explanation: "There's no second serve involved in this moment of play." },
        ],
      },
      {
        question: "What is the overall point of this lesson?",
        answers: [
          { text: "An arrow shows the transition that begins the instant the ball is contacted, not movement before it", correct: true, explanation: "Correct — this sums up exactly what the lesson establishes." },
          { text: "Arrows are purely decorative and mean nothing tactically", correct: false, explanation: "Arrows carry real tactical meaning about player movement." },
          { text: "Arrows only ever apply to the setter", correct: false, explanation: "Arrows can apply to any of the six roles, not just the setter." },
          { text: "Arrows replace the need to know any positions at all", correct: false, explanation: "Understanding the starting positions is still just as essential." },
        ],
      },
    ],
  },
  {
    id: 10,
    title: "The Full Cycle",
    summary: "All six rotations, back to back — a quick-reference recap of everything this chapter has covered.",
    durationMin: 7,
    theory: [
      "Put together, this chapter's six rotations form one continuous loop. Rotation 1 (receive) leads to Rotation 2 (base defense), then 3, then 4 — all base defense — then Rotation 5 brings back a receiving shape, followed by Rotation 6's base defense, and the whole cycle repeats from Rotation 1 again.",
      "The setter's zone traces a clean path through that loop too: back row for Rotations 1, 2 and 3, then front row for Rotations 4, 5 and 6. That's exactly why the hiding-spot rule from Lesson 2 mattered for the first three and simply didn't apply for the last three.",
      "Only two of the six rotations in this chapter are serve-receive shapes — Rotations 1 and 5 — because those are the two moments in the cycle this chapter chose to highlight. In an actual match, every single rotation has both a receiving shape and a base-defense shape.",
      "Across every rotation, the underlying rules never change: the six roles keep their fixed spacing around the court, the libero always fills in for whichever middle would otherwise be in the back row, and the setter is protected from the first ball whenever they're back row.",
      "The fastest way to use this chapter at practice is simple: watch where the setter's zone is, decide whether the team is about to receive or has just served, and you already know which of these six shapes — and which version of each role's job — you're looking at.",
    ],
    keyTakeaway: "The six rotations form one repeating loop — setter back row for three, front row for three, two receiving shapes and four base-defense shapes in this chapter's example — all built from the same fixed six-role order and the same setter-protection rule.",
    showAnimation: true,
    isTest: false,
    animation: {
      caption: "All six rotations, one after another — the same loop, every single set.",
      activeZones: [1, 2, 3, 4, 5, 6],
      labels: {},
      motions: {},
      ball: null,
    },
    quiz: [
      {
        question: "How many total rotations does this chapter's cycle contain?",
        answers: [
          { text: "Six", correct: true, explanation: "Correct — every team cycles through exactly six rotations." },
          { text: "Five", correct: false, explanation: "The cycle contains six rotations, not five." },
          { text: "Eight", correct: false, explanation: "Eight is the number of chapters in this course, not rotations." },
          { text: "Twelve", correct: false, explanation: "The cycle contains six rotations, not twelve." },
        ],
      },
      {
        question: "In this chapter's example, which rotations are serve-receive shapes?",
        answers: [
          { text: "Rotations 1 and 5", correct: true, explanation: "Correct — these are the two receiving shapes covered." },
          { text: "Rotations 2 and 4", correct: false, explanation: "Those are both base-defense shapes in this chapter." },
          { text: "All six rotations", correct: false, explanation: "Only two of the six are receiving shapes here." },
          { text: "Rotation 6 only", correct: false, explanation: "Rotation 6 is a base-defense shape, not a receiving one." },
        ],
      },
      {
        question: "In this chapter's example, which rotations are base-defense shapes?",
        answers: [
          { text: "Rotations 2, 3, 4 and 6", correct: true, explanation: "Correct — these four are the base-defense shapes covered." },
          { text: "Rotations 1 and 5", correct: false, explanation: "Those two are the receiving shapes instead." },
          { text: "Only Rotation 3", correct: false, explanation: "Four rotations are base defense, not just one." },
          { text: "All six rotations", correct: false, explanation: "Two of the six are receiving shapes, not base defense." },
        ],
      },
      {
        question: "For how many consecutive rotations is the setter in the back row?",
        answers: [
          { text: "Three (Rotations 1, 2 and 3)", correct: true, explanation: "Correct — these three rotations keep the setter back row." },
          { text: "One", correct: false, explanation: "It's three consecutive rotations, not one." },
          { text: "Six", correct: false, explanation: "Only half the rotations keep the setter back row." },
          { text: "Two", correct: false, explanation: "It's three consecutive rotations, not two." },
        ],
      },
      {
        question: "For how many consecutive rotations is the setter in the front row?",
        answers: [
          { text: "Three (Rotations 4, 5 and 6)", correct: true, explanation: "Correct — these three rotations keep the setter front row." },
          { text: "Zero", correct: false, explanation: "The setter is front row for three of the six rotations." },
          { text: "Six", correct: false, explanation: "Only half the rotations keep the setter front row." },
          { text: "Four", correct: false, explanation: "It's three consecutive rotations, not four." },
        ],
      },
      {
        question: "In an actual match, how many shapes does every single rotation really have?",
        answers: [
          { text: "Two — a receiving shape and a base-defense shape", correct: true, explanation: "Correct — this chapter only highlighted two of the twelve possible pictures for simplicity." },
          { text: "Only one, fixed shape", correct: false, explanation: "Every rotation actually has both a receiving and a base-defense shape." },
          { text: "Three different shapes", correct: false, explanation: "There are exactly two shapes per rotation, not three." },
          { text: "It depends on the score", correct: false, explanation: "The two shapes depend on who's serving, not the scoreboard." },
        ],
      },
      {
        question: "What happens after Rotation 6 completes?",
        answers: [
          { text: "The whole six-rotation cycle repeats from Rotation 1", correct: true, explanation: "Correct — the cycle loops for as long as the set continues." },
          { text: "The set ends immediately", correct: false, explanation: "Sets end based on score, not on completing a rotation cycle." },
          { text: "The team must swap its entire lineup", correct: false, explanation: "There's no requirement to change the lineup after a full cycle." },
          { text: "Rotation 6 repeats indefinitely instead of looping", correct: false, explanation: "The cycle moves back to Rotation 1, not stuck repeating Rotation 6." },
        ],
      },
      {
        question: "According to the fastest practice method this lesson describes, what two things should you check first?",
        answers: [
          { text: "Where the setter's zone is, and whether the team is receiving or just served", correct: true, explanation: "Correct — these two checks identify exactly which shape you're seeing." },
          { text: "The score and the time remaining", correct: false, explanation: "Neither the score nor the clock identifies the current formation." },
          { text: "The referee's position and the crowd noise", correct: false, explanation: "Neither of these relates to identifying a rotation's shape." },
          { text: "The jersey numbers of the front row", correct: false, explanation: "Jersey numbers don't reveal the setter's zone or the current shape." },
        ],
      },
      {
        question: "What never changes across any of the six rotations?",
        answers: [
          { text: "The fixed spacing of the six roles and the libero's role in the back row", correct: true, explanation: "Correct — these two things stay constant throughout the whole cycle." },
          { text: "The zone each player stands in", correct: false, explanation: "The zones are exactly what changes from rotation to rotation." },
          { text: "Whether the setter is protected from the first ball", correct: false, explanation: "That protection only applies when the setter is actually back row." },
          { text: "Both of these things change every rotation", correct: false, explanation: "The role spacing and the libero's job both stay fixed instead." },
        ],
      },
      {
        question: "What is this lesson's overall purpose?",
        answers: [
          { text: "To recap the full six-rotation cycle as one connected loop", correct: true, explanation: "Correct — this lesson ties every earlier lesson together." },
          { text: "To introduce a brand-new seventh rotation", correct: false, explanation: "There is no seventh rotation — the cycle has exactly six." },
          { text: "To replace the rules from Lesson 2", correct: false, explanation: "This lesson reinforces Lesson 2's rule rather than replacing it." },
          { text: "To test coordination rather than review the material", correct: false, explanation: "This lesson is a review, not a coordination drill." },
        ],
      },
    ],
  },
];
const CHAPTER_5_TEST = {
  id: 11,
  title: "Chapter 5 Test",
  summary: "A 20-question test covering everything from Court Choreography, including scenario questions.",
  durationMin: 16,
  theory: null,
  keyTakeaway: null,
  showAnimation: false,
  isTest: true,
  quiz: [
    {
      question: "What is the main purpose of keeping the setter away from the first ball during serve receive?",
      answers: [
        { text: "So they're free to sprint to the net the instant the pass is released", correct: true, explanation: "Correct — this timing need is the whole reason for the rule." },
        { text: "So the libero is never allowed to play", correct: false, explanation: "The rule is about the setter, not about excluding the libero." },
        { text: "So the opponent cannot serve to the back row", correct: false, explanation: "The rule shapes the receiving team's positioning, not the server's options." },
        { text: "So the team can substitute more freely", correct: false, explanation: "Substitution rules are unrelated to this positioning choice." },
      ],
    },
    {
      question: "Scenario: the setter's zone is in the back row for this rotation. What formation detail should you expect?",
      answers: [
        { text: "The setter tucked toward the edge of the receiving shape, not central", correct: true, explanation: "Correct — this follows directly from the hiding-spot rule." },
        { text: "The setter standing exactly where the serve is aimed", correct: false, explanation: "That's precisely the spot the setter avoids." },
        { text: "The setter removed from the court for that rotation", correct: false, explanation: "The setter stays on the court in every rotation." },
        { text: "The libero automatically taking over as setter", correct: false, explanation: "The libero never takes over the setter's role this way." },
      ],
    },
    {
      question: "Scenario: the setter's zone is in the front row for this rotation. What formation detail should you expect?",
      answers: [
        { text: "No hiding needed — the setter is never a receiving option in the first place", correct: true, explanation: "Correct — serve receive is strictly a back-row job." },
        { text: "The setter must still be tucked into a corner", correct: false, explanation: "That rule only applies to a back-row setter." },
        { text: "The libero leaves the court", correct: false, explanation: "The libero's presence isn't affected by the setter's row." },
        { text: "The team is not allowed to receive that serve", correct: false, explanation: "The team receives normally — only the setter's role changes." },
      ],
    },
    {
      question: "In Rotation 1, which zone is the setter in?",
      answers: [
        { text: "Zone 1 (back right)", correct: true, explanation: "Correct — this defines Rotation 1." },
        { text: "Zone 4 (front left)", correct: false, explanation: "Zone 4 belongs to the opposite in Rotation 1." },
        { text: "Zone 3 (front middle)", correct: false, explanation: "Zone 3 belongs to an outside hitter in Rotation 1." },
        { text: "Zone 6 (back middle)", correct: false, explanation: "Zone 6 belongs to an outside hitter in Rotation 1." },
      ],
    },
    {
      question: "In Rotation 4, which zone is the setter in?",
      answers: [
        { text: "Zone 4 (front left)", correct: true, explanation: "Correct — this defines Rotation 4." },
        { text: "Zone 1 (back right)", correct: false, explanation: "Zone 1 is the setter's zone in Rotation 1, not Rotation 4." },
        { text: "Zone 6 (back middle)", correct: false, explanation: "Zone 6 is the setter's zone in Rotation 2, not Rotation 4." },
        { text: "Zone 2 (front right)", correct: false, explanation: "Zone 2 is the setter's zone in Rotation 6, not Rotation 4." },
      ],
    },
    {
      question: "Which two rotations in this chapter's example are serve-receive shapes?",
      answers: [
        { text: "Rotation 1 and Rotation 5", correct: true, explanation: "Correct — these are the two receiving shapes covered in this chapter." },
        { text: "Rotation 2 and Rotation 3", correct: false, explanation: "Both of those are base-defense shapes." },
        { text: "Rotation 4 and Rotation 6", correct: false, explanation: "Both of those are base-defense shapes." },
        { text: "Rotation 3 and Rotation 5", correct: false, explanation: "Rotation 3 is a base-defense shape, not a receiving one." },
      ],
    },
    {
      question: "Which rotations in this chapter's example are base-defense shapes?",
      answers: [
        { text: "Rotations 2, 3, 4 and 6", correct: true, explanation: "Correct — these four are the base-defense shapes covered in this chapter." },
        { text: "Rotations 1 and 5", correct: false, explanation: "Those two are the receiving shapes instead." },
        { text: "Rotations 1, 2 and 3", correct: false, explanation: "Rotation 1 is actually a receiving shape, not base defense." },
        { text: "All six rotations", correct: false, explanation: "Two of the six are receiving shapes, not base defense." },
      ],
    },
    {
      question: "In Rotation 2, who forms the front-row blocking line?",
      answers: [
        { text: "The middle, the opposite, and an outside hitter", correct: true, explanation: "Correct — this trio makes up Rotation 2's front row." },
        { text: "The setter, the libero, and an outside hitter", correct: false, explanation: "The setter and libero are both back row in Rotation 2." },
        { text: "The libero and the two outside hitters", correct: false, explanation: "The libero is a back-row player, not part of the front row." },
        { text: "Only the setter", correct: false, explanation: "Three players form the front-row blocking line, not just one." },
      ],
    },
    {
      question: "In Rotation 5, who handles the back-row passing?",
      answers: [
        { text: "The libero, the opposite, and an outside hitter", correct: true, explanation: "Correct — this trio makes up Rotation 5's back row." },
        { text: "The setter, the middle, and an outside hitter", correct: false, explanation: "The setter and middle are both front row in Rotation 5." },
        { text: "Only the setter", correct: false, explanation: "The setter is front row in Rotation 5 and isn't a receiver here." },
        { text: "The two outside hitters and the middle", correct: false, explanation: "The middle is front row in Rotation 5, not part of the back row." },
      ],
    },
    {
      question: "What does the libero consistently do across every rotation in this chapter?",
      answers: [
        { text: "Covers whichever back-row zone the other middle blocker would otherwise occupy", correct: true, explanation: "Correct — this role stays consistent in every rotation shown." },
        { text: "Takes over the setter's job whenever the setter is back row", correct: false, explanation: "The libero never takes over the setter's role." },
        { text: "Plays exclusively in the front row", correct: false, explanation: "The libero is specifically a back-row player." },
        { text: "Rotates out of the game entirely during base defense", correct: false, explanation: "The libero is present in base-defense rotations too." },
      ],
    },
    {
      question: "Scenario: you see a team receiving serve with the setter standing dead-center in the back row. Does this match the pattern taught in this chapter?",
      answers: [
        { text: "No — a back-row setter should be tucked to the edge, not central", correct: true, explanation: "Correct — this contradicts the hiding-spot rule." },
        { text: "Yes — this is exactly the expected pattern", correct: false, explanation: "The expected pattern places the setter at the edge, not centrally." },
        { text: "Yes, but only if the libero is also on the court", correct: false, explanation: "The libero's presence doesn't change this expectation." },
        { text: "It's impossible to say without knowing the score", correct: false, explanation: "The score has no bearing on this positioning rule." },
      ],
    },
    {
      question: "What do the movement arrows in a serve-receive diagram usually represent?",
      answers: [
        { text: "The serve arriving and the pass traveling forward, plus the setter's release", correct: true, explanation: "Correct — this is exactly what those arrows show." },
        { text: "A substitution taking place mid-rally", correct: false, explanation: "Substitutions aren't represented by these arrows." },
        { text: "The opponent's blocking scheme", correct: false, explanation: "These diagrams show the receiving team, not the opponent's block." },
        { text: "A rotation fault being committed", correct: false, explanation: "The arrows show legal, intended movement, not a fault." },
      ],
    },
    {
      question: "What do the movement arrows in a base-defense diagram usually represent?",
      answers: [
        { text: "The front row closing toward the net and the back row spreading to cover space", correct: true, explanation: "Correct — this is exactly the transition shown." },
        { text: "The serve being hit for the very first time", correct: false, explanation: "The serve has already happened by the time base defense begins." },
        { text: "A team calling a time-out", correct: false, explanation: "Time-outs aren't represented by these arrows." },
        { text: "The libero substituting out permanently", correct: false, explanation: "No permanent substitution is shown by these arrows." },
      ],
    },
    {
      question: "Scenario: a player starts moving into their base-defense spot before the serve is even contacted. What is this?",
      answers: [
        { text: "A rotation fault", correct: true, explanation: "Correct — moving too early risks exactly this violation." },
        { text: "A legal, encouraged head start", correct: false, explanation: "Moving before the serve is contacted is not legal." },
        { text: "An automatic point for the moving team", correct: false, explanation: "Early movement risks a fault, not a bonus point." },
        { text: "A required substitution", correct: false, explanation: "No substitution is triggered by this kind of early movement." },
      ],
    },
    {
      question: "How many total roles does this chapter's example lineup use to describe a formation?",
      answers: [
        { text: "Six — the setter, a middle, the opposite, two outside hitters, and the libero", correct: true, explanation: "Correct — these six roles appear in every rotation." },
        { text: "Four — one setter and three generic attackers", correct: false, explanation: "The chapter distinguishes six specific roles, not four generic ones." },
        { text: "Twelve, including substitutes", correct: false, explanation: "Only the six on-court roles are tracked in these formations." },
        { text: "Two — front row and back row only", correct: false, explanation: "Front row and back row are groupings, not the six individual roles." },
      ],
    },
    {
      question: "Does the relative order of the six roles ever change during a set?",
      answers: [
        { text: "No — only the zone each one occupies changes", correct: true, explanation: "Correct — the roles keep fixed spacing around the court." },
        { text: "Yes, the order reshuffles with every substitution", correct: false, explanation: "A substitution swaps a player, not the fixed rotation order itself." },
        { text: "Yes, every single rotation reorders the roles randomly", correct: false, explanation: "The shifting is consistent and predictable, not random." },
        { text: "Yes, but only once per set", correct: false, explanation: "The order stays fixed throughout — it isn't reordered at any point." },
      ],
    },
    {
      question: "Scenario: the setter's zone is 6, and the team has just served. Which rotation is this?",
      answers: [
        { text: "Rotation 2", correct: true, explanation: "Correct — this exactly matches Rotation 2's base-defense shape." },
        { text: "Rotation 1", correct: false, explanation: "Rotation 1 has the setter at zone 1, not zone 6." },
        { text: "Rotation 5", correct: false, explanation: "Rotation 5 has the setter at zone 3, not zone 6." },
        { text: "Rotation 3", correct: false, explanation: "Rotation 3 has the setter at zone 5, not zone 6." },
      ],
    },
    {
      question: "Scenario: the setter's zone is 3, and the opponent is serving. Which rotation is this?",
      answers: [
        { text: "Rotation 5", correct: true, explanation: "Correct — this exactly matches Rotation 5's receiving shape." },
        { text: "Rotation 1", correct: false, explanation: "Rotation 1 has the setter at zone 1, not zone 3." },
        { text: "Rotation 4", correct: false, explanation: "Rotation 4 is a base-defense shape, not a receiving one." },
        { text: "Rotation 6", correct: false, explanation: "Rotation 6 has the setter at zone 2, not zone 3." },
      ],
    },
    {
      question: "What happens once Rotation 6 is complete?",
      answers: [
        { text: "The cycle repeats, starting again from Rotation 1", correct: true, explanation: "Correct — the six-rotation cycle loops for as long as the set continues." },
        { text: "The set ends automatically", correct: false, explanation: "Sets end based on score, not on completing a rotation cycle." },
        { text: "The team must select six entirely new starting players", correct: false, explanation: "There's no requirement to change the lineup after a full cycle." },
        { text: "The team is no longer allowed to rotate for the rest of the set", correct: false, explanation: "The cycle simply continues repeating." },
      ],
    },
    {
      question: "What is the single biggest idea this chapter adds on top of Chapter 4's serve receive?",
      answers: [
        { text: "That every rotation has its own specific formation, shaped by exactly where the setter's zone falls", correct: true, explanation: "Correct — this rotation-by-rotation specificity is exactly what this chapter adds." },
        { text: "That serve receive is no longer a back-row responsibility", correct: false, explanation: "Serve receive remains a back-row responsibility throughout this chapter." },
        { text: "That the libero is removed from the formation entirely", correct: false, explanation: "The libero remains a key part of every formation in this chapter." },
        { text: "That formations no longer depend on rotation at all", correct: false, explanation: "The opposite is true — this chapter shows formations depend heavily on rotation." },
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

    if (c === 3) {
      chapters.push({
        id: 3,
        title: "Rotations",
        summary: "The six-zone rotation cycle, overlap rules, and how every role moves through it.",
        lessons: [...CHAPTER_3_LESSONS, CHAPTER_3_TEST],
      });
      continue;
    }

    if (c === 4) {
      chapters.push({
        id: 4,
        title: "Serve Receive",
        summary: "Passing formations, targets and seams — turning the opponent's serve into a clean first contact.",
        lessons: [...CHAPTER_4_LESSONS, CHAPTER_4_TEST],
      });
      continue;
    }

    if (c === 5) {
      chapters.push({
        id: 5,
        title: "Court Choreography",
        summary: "Rotation by rotation, where every role stands — on serve receive and right after your own serve.",
        lessons: [...CHAPTER_5_LESSONS, CHAPTER_5_TEST],
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
