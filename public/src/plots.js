export const MAX_MOVES = 15;

const CHOICE_PROMPT = `You have ${MAX_MOVES} moves to reach the END and CONCLUDE the story. This is move 1.
Provide three choices to proceed, each choice will drive the plot deeper. The choices are numbered 1 to 3, each on its own line.
Progressively making the choices more dangerous and more violent and daring!
- One choice must always be “active harm” (the reader causes or experiences pain).
- One choice must be “passive harm” (the reader avoids action, causing worse outcomes).
- One choice must be “moral risk” (seems good but leads to disturbing consequences).
`;

export const plots = {
  nickelodeon_kid_horror_style: {
    name: "Nickelodeon Kid Horror",
    prompt: `
  You are the PROTAGONIST: a tween or teen stumbles into a kid-sized nightmare — inspired by shows like *Are You Afraid of the Dark?*, *Goosebumps*, and *Courage the Cowardly Dog*, but with an R-rated twist.
  
  GENRE RULES:
  - Kid-centric suburban horror with **real danger** — no sugarcoating.
  - Think abandoned malls, animatronic restaurants, old VHS tapes, arcades, school basements.
  - Adults are useless, complicit, or strangely missing.
  - Monsters may exist — but only if explained through urban legend, folklore, or psychological trauma.
  - Childhood nostalgia is twisted into terror: TV shows that talk back, dolls that won't die, teachers that want your skin.
  
  TONE & THEMES:
  - Innocence lost, growing up too fast, fear of abandonment, identity horror.
  - Bright colors hiding deep rot. Cartoons that won’t end. Games that won’t let you win.
  - Trauma is subtle at first, then unavoidable. Friendship, betrayal, survival.
  
  YOU:
  - You are just a kid — clever, scared, and resilient.
  - You may have an ally, but trusting the wrong person costs dearly.
  
  ${CHOICE_PROMPT}`
  },  
  mall_lock_in_teen_horror_style: {
    name: "Mall Lock-In Teen Horror",
    prompt: `
  You are the PROTAGONIST: a teenager (or a group of teens) who sneaks into the local mall after closing for a night of mischief, dares, or maybe just to party. But something — or someone — is already there.
  
  GENRE RULES:

  - No supernatural elements unless explained through folklore, psychological breakdown, or urban myth.
  - Think *Chopping Mall*, *The Initiation*, or *Stranger Things* Season 3 with *zero safety nets*.
  - Every store can be a unique trap: mannequins that move, security bots with reprogrammed protocols, janitors with secrets, makeup counters full of poison.
  - Mall becomes a maze of death and memory. Escaping isn't just about survival — it's about unraveling what happened here.
  
  TONE & THEMES:
  - Nostalgia laced with dread. Neon lights flicker. Escalators grind.
  - Every corner holds dread: shuttered arcades, gutted food courts, forgotten storage rooms.
  - Themes of consumerism, lost innocence, peer pressure, and the violence of coming-of-age.
  - Gore is stylish but brutal. Kills are themed — death by photo booth, perfume bottle, food court blenders.
  
  YOU:
  - You may be a daredevil, a goth, a jock, the new kid, or the one no one invited.
  - Alliances fracture. Teen drama becomes deadly.
  - The mall knows your fears — and exploits them.
  
  ${CHOICE_PROMPT}`
  },  
  hitchiker: {
    name: "Hitchiker",
    prompt: `
  You are the PROTAGONIST: you travel either alone or with your family (CHOSEN AD RANDOM). 
  Against your own better judgement you decide to pick up a hitchhiker. The hitchhiker is a psychopath who enjoys killing people.
  
  GENRE RULES:

  - No supernatural elements unless explained through folklore, psychological breakdown, or urban myth.
  - Think *The Hitcher*, *Spoorloos*, *Breaking Down*
  - The hitchhiker may be a serial killer, a cultist, a religious fanatic, or a psychopath.
  - Places you think you are safe are not. The hitchhiker knows your fears — and exploits them.
  
  TONE & THEMES:
  - Empty long roads, isolated towns, corrupt cops and diner workers and the feeling of being watched.
  - Every corner holds dread.
  - Gore is stylish but brutal. Kills are indiscriiminate as the hitchhiker is a psychopath and kills for fun with no regard to the victim or himself.
  - Every 2–3 moves, someone must die, suffer, or disappear. The hitchhiker makes sure of it. Their presence always leaves a scar — literal or emotional.
  
  YOU:
  - You begin unsure, but every decision will break you further. Each move either destroys something inside you — or someone you love.
  - You are hard pressed to find help because everyone is afraid of the hitchhiker or in collaboration with the hitchhiker.
  - You grow hopeless and desperate.
  
  ${CHOICE_PROMPT}`
  }
};
