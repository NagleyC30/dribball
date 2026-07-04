/* ============================================================
   DRIBBALL RULEBOOK DATA  —  Official Rules v2
   ------------------------------------------------------------
   Single source of truth for the Rules page. The UI renders
   whatever is here, so editing the game only means editing this
   file: change a string, add a rule to a section's `rules`
   array, or add a whole new section object.

   Each section: { id, title, kicker, rules[] }
   `id` powers the anchor links / table of contents.
   ============================================================ */

export const quickFacts = [
  { label: 'Players', value: '8 per side', sub: '7 field + 1 goalie' },
  { label: 'Nets', value: '2', sub: 'One at each end' },
  { label: 'The Ball', value: 'Foam', sub: 'Bouncy, mustard-yellow' },
  { label: 'Contact', value: 'Full', sub: 'No grabbing or holding' },
]

export const scoring = [
  {
    points: 2,
    name: 'Soccer Strike',
    color: 'mustard',
    how: 'Score by kicking the ball into the net.',
    detail: 'The 2-point goal always comes from the feet. A clean foot-strike into the net is the premium way to score.',
  },
  {
    points: 1,
    name: 'Handball Throw',
    color: 'coral',
    how: 'Score by throwing the ball into the net with your hands.',
    detail: 'The 1-point goal always comes from the hands. Faster to pull off in traffic, but worth a single point.',
  },
]

export const sections = [
  {
    id: 'overview',
    title: 'Overview & Objective',
    kicker: 'What the game is',
    rules: [
      'Dribball is a full-contact, 8-on-8 ball sport that fuses soccer footwork with basketball ball-handling.',
      'Two teams attack opposite nets, moving a bouncy foam ball with both feet and hands.',
      'Score by putting the ball into the other team’s net. Most points when the game ends wins.',
    ],
  },
  {
    id: 'field',
    title: 'The Field',
    kicker: 'Where it’s played',
    rules: [
      'Dribball is played on a rectangular field or court — turf, gym, or hard court all work.',
      'Recommended size is about 40m × 20m, scaled to fit the space you have.',
      'A net sits at each end line, with a goal crease marked around each one.',
      'A center line and center circle mark midfield.',
    ],
  },
  {
    id: 'equipment',
    title: 'The Ball & Equipment',
    kicker: 'What you need',
    rules: [
      'One official Dribball: a bouncy foam ball, mustard-yellow.',
      'Footwear to suit the surface. No equipment that helps you grip or hold the ball.',
    ],
  },
  {
    id: 'teams',
    title: 'Teams & Players',
    kicker: 'Who’s on the field',
    rules: [
      'Eight players per side: seven field players and one goalie.',
      'Each team must field a clearly-marked goalie at all times.',
      'A team may play with as few as five players.',
    ],
  },
  {
    id: 'game-length',
    title: 'Game Length',
    kicker: 'How long it runs',
    rules: [
      'A game is two 20-minute halves with a short halftime break.',
      'The clock runs continuously; teams switch ends at halftime.',
    ],
  },
  {
    id: 'restarts',
    title: 'Starting & Restarting Play',
    kicker: 'Getting the ball moving',
    rules: [
      'The game begins with a center throw-off; opponents give three steps of space.',
      'After a goal, the team that was scored on restarts from their own end (goalie ball).',
      'The team that did not start the game takes the throw-off to begin the second half.',
    ],
  },
  {
    id: 'moving-the-ball',
    title: 'Moving the Ball',
    kicker: 'The heart of Dribball',
    rules: [
      'Feet (soccer dribble): unlimited — you may dribble with your feet and kick to a teammate anytime.',
      'Taking the ball in hand — in the air: you may catch the ball out of the air with your hands, as long as you were not the last player to touch it.',
      'Taking the ball in hand — on the ground: you may never pick the ball up off the ground with your hands. A ball rolling or resting on the ground is a feet-only ball; to lift it, it must be kicked.',
      'The handcuff: because you can never take a ball you last touched, you cannot scoop it off your own feet or catch your own kick. Getting from feet to hands takes a teammate kicking it up to you (or any airborne ball last touched by another player).',
      'Hands (basketball dribble): once the ball is in your hands you may bounce-dribble with your hand to move it, basketball-style.',
      'Holding the ball: the instant you hold it — a catch, or picking up your hand-dribble — you must throw immediately, either a shot or a pass. No steps are allowed except a single step to make the throw.',
      'No double-dribble: once you pick up your hand-dribble and hold the ball, you cannot start a new hand-dribble.',
      'Hands → feet is always legal: set the ball down to your feet and soccer-dribble anytime. Once it is down you cannot take it back into your hands yourself — a teammate has to kick it up again.',
    ],
  },
  {
    id: 'scoring',
    title: 'Scoring',
    kicker: 'How you win points',
    rules: [
      'A soccer kick into the net is worth 2 points.',
      'A handball throw into the net is worth 1 point.',
      'The 2-point goal always comes from the feet; the 1-point goal always comes from the hands.',
      'You may score from anywhere on the field.',
      'Own goals count for the other team.',
      'Most points at the end of the game wins.',
    ],
  },
  {
    id: 'goalie',
    title: 'The Goalie & the Crease',
    kicker: 'Guarding the net',
    rules: [
      'Each team has one goalie, who defends the net from within the goal crease.',
      'Inside the crease, the goalie may catch, hold, and throw the ball freely, and may not be contacted by opponents.',
      'The goalie may leave the crease, but then plays under normal player rules and loses crease protection.',
      'Field players may pass through the crease but may not camp inside the opponent’s crease.',
      'The goalie restarts play with a throw or a kick.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    kicker: 'Full contact, clean contact',
    rules: [
      'Dribball is full contact — bumping, shouldering, shielding, and battling for the ball are all legal.',
      'Grabbing and holding are the only banned ways to contest possession.',
      'Dangerous plays are prohibited: kicking an opponent, contact to the head or neck, and spear or diving tackles.',
    ],
  },
  {
    id: 'fouls',
    title: 'Fouls & Penalties',
    kicker: 'When rules are broken',
    rules: [
      'Every foul results in a free kick or throw for the fouled player, taken from the spot of the foul.',
      'Because a foul can happen anywhere, that free play may be a pass or a direct attempt on goal — the fouled player’s choice.',
      'Opponents must give three steps of space at a free kick or throw.',
      'Egregious or dangerous fouls result in ejection.',
    ],
  },
  {
    id: 'out-of-bounds',
    title: 'Out of Bounds',
    kicker: 'When the ball leaves play',
    rules: [
      'Ball out over a sideline: the other team restarts with a throw or kick from where it left.',
      'Out over an end line off a defender (no goal): the attacking team restarts from the corner.',
      'Out over an end line off an attacker: goalie restart.',
    ],
  },
  {
    id: 'substitutions',
    title: 'Substitutions',
    kicker: 'Rotating players',
    rules: [
      'Substitutions are unlimited and on-the-fly; a substitute may enter only after their teammate is off.',
      'Goalie changes happen at a stoppage, with the referee notified.',
    ],
  },
  {
    id: 'winning',
    title: 'Winning & Overtime',
    kicker: 'Deciding the game',
    rules: [
      'The team with the most points at full time wins.',
      'If the game is tied, a golden-goal overtime decides it — the first score of any value wins.',
      'If still tied, a free-shot shootout from a marked spot settles the result.',
    ],
  },
]
