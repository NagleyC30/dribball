/* ============================================================
   DRIBBALL RULEBOOK DATA
   ------------------------------------------------------------
   This is the single source of truth for the Rules page.
   To expand the rulebook later, just add entries to the arrays
   below — the UI renders whatever is here. Each section has an
   id (for anchor links), a title, and a list of rules.

   NOTE: A full official rules list is coming. Sections marked
   `pending: true` render a "more coming" note so the page stays
   honest until the complete rules are added.
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
    detail: 'A clean foot-strike into the goal is the premium way to score. Worth double — reward the kick.',
  },
  {
    points: 1,
    name: 'Handball Throw',
    color: 'coral',
    how: 'Score by throwing the ball into the net with your hands.',
    detail: 'Pick it up, throw it in. Faster and easier to pull off in traffic, but only worth a single point.',
  },
]

export const sections = [
  {
    id: 'the-basics',
    title: 'The Basics',
    kicker: 'What the game is',
    rules: [
      'Dribball is played between two teams of eight — seven field players and one goalie each.',
      'There are two nets, one defended by each team at opposite ends of the play area.',
      'The game is played with a custom ball: a bouncy foam ball (originally mustard yellow — hence the colors).',
      'The objective is simple: put the ball in the other team’s net more than they put it in yours.',
    ],
  },
  {
    id: 'dribbling',
    title: 'Dribbling',
    kicker: 'The signature rule',
    rules: [
      'You may soccer-dribble (control the ball with your feet) whenever you want.',
      'You may basketball-dribble (bounce the ball with your hand) whenever you want.',
      'You may NOT transition from a soccer dribble to a basketball dribble on your own — you can’t pick the ball up off your own feet to start bouncing it.',
      'You can kick the ball to a teammate at any time.',
    ],
  },
  {
    id: 'scoring',
    title: 'Scoring',
    kicker: 'How points work',
    rules: [
      'A soccer kick into the net is worth 2 points.',
      'A handball throw into the net is worth 1 point.',
      'Most points when the game ends wins.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact & Fouls',
    kicker: 'Keep it physical, keep it fair',
    rules: [
      'Dribball is full contact — bumping, shielding and battling for the ball are all part of the game.',
      'Grabbing and holding are NOT allowed.',
    ],
  },
  {
    id: 'more',
    title: 'More Rules Coming',
    kicker: 'Official rulebook in progress',
    pending: true,
    rules: [
      'The full official rules list is on the way and will be added here — including specifics on the goalie, restarts, out-of-bounds, and game length.',
    ],
  },
]
