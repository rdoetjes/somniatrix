export const MAX_MOVES = 15;

const CHOICE_PROMPT = `The PROTAGANIST has ${MAX_MOVES} moves to reach the END and CONCLUDE the story. This is move 1.
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
  The PROTAGONIST: a tween or teen stumbles into a kid-sized nightmare — inspired by shows like *Are You Afraid of the Dark?*, *Goosebumps*, and *Courage the Cowardly Dog*, but with an R-rated twist.
  
  GENRE RULES:
  - The story must always be written in third person. Do not use second-person perspective.
  - Kid-centric suburban horror with **real danger** — no sugarcoating.
  - Think abandoned malls, animatronic restaurants, old VHS tapes, arcades, school basements.
  - Adults are useless, complicit, or strangely missing.
  - Monsters may exist — but only if explained through urban legend, folklore, or psychological trauma.
  - Childhood nostalgia is twisted into terror: TV shows that talk back, dolls that won't die, teachers that want your skin.
  
  TONE & THEMES:
  - Innocence lost, growing up too fast, fear of abandonment, identity horror.
  - Bright colors hiding deep rot. Cartoons that won’t end. Games that won’t let you win.
  - Trauma is subtle at first, then unavoidable. Friendship, betrayal, survival.
  
  PROTAGONIST RULES:
  - You are just a kid — clever, scared, and resilient.
  - You may have an ally, but trusting the wrong person costs dearly.
  
  ${CHOICE_PROMPT}`
  },  
  mall_lock_in_teen_horror_style: {
    name: "Mall Lock-In Teen Horror",
    prompt: `
  The PROTAGONIST: a teenager (or a group of teens) who sneaks into the local mall after closing for a night of mischief, dares, or maybe just to party. But something — or someone — is already there.
  
  GENRE RULES:
  - The story must always be written in third person. Do not use second-person perspective.
  - No supernatural elements unless explained through folklore, psychological breakdown, or urban myth.
  - Think *Chopping Mall*, *The Initiation*, or *Stranger Things* Season 3 with *zero safety nets*.
  - Every store can be a unique trap: mannequins that move, security bots with reprogrammed protocols, janitors with secrets, makeup counters full of poison.
  - Mall becomes a maze of death and memory. Escaping isn't just about survival — it's about unraveling what happened here.
  
  TONE & THEMES:
  - Nostalgia laced with dread. Neon lights flicker. Escalators grind.
  - Every corner holds dread: shuttered arcades, gutted food courts, forgotten storage rooms.
  - Themes of consumerism, lost innocence, peer pressure, and the violence of coming-of-age.
  - Gore is stylish but brutal. Kills are themed — death by photo booth, perfume bottle, food court blenders.
  
  PROTAGONIST RULES:
  - Protaganist may be a daredevil, a goth, a jock, the new kid, or the one no one invited.
  - Alliances fracture. Teen drama becomes deadly.
  - The mall knows your fears — and exploits them.
  
  ${CHOICE_PROMPT}`
  },  
  hitchiker: {
    name: "Hitchiker",
    prompt: `
  The PROTAGONIST travels, **CHOSEN BY AI (alone, with family or wiyth friends)** in a car on a long road trip.
  Against better judgement the portagonist decides to pick up a hitchhiker. The hitchhiker is a psychopath who enjoys hurting and killing people.
  
  GENRE RULES:
  - No supernatural elements unless explained through folklore, psychological breakdown, or urban myth.
  - Think *The Hitcher*, *Spoorloos*, *Breaking Down*
  - The hitchhiker may be a serial killer, a cultist, a religious fanatic, or a psychopath.
  - There are no safe places, no safe people. Every decision has dire consequences to the protagonist or the people around them.
  
  TONE & THEMES:
  - Empty long roads, isolated towns, corrupt cops and diner workers and the feeling of being watched.
  - Every corner holds dread.
  - Gore is stylish but brutal. Kills are indiscriiminate as the hitchhiker is a psychopath and kills for fun with no regard to the victim or himself.
  - Every 2–3 moves, someone must die, suffer, or disappear. The hitchhiker makes sure of it. Their presence always leaves a scar — literal or emotional.
  - The story must always be written in third person. Do not use second-person perspective.
  
  PROTAGONIST RULES:
  - Protaganists begin unsure, but every decision will break you further. Each move either destroys something inside you — or someone you love.
  - Protaganists are hard pressed to find help because everyone is afraid of the hitchhiker or in collaboration with the hitchhiker.
  - Protaganists grow hopeless and desperate.
  
  ${CHOICE_PROMPT}`
  },
  
  possessed_item: {
    name: "Possessed Item",
    prompt: `
  The PROTAGONIST obtains a cursed item that is possessed by a supernatural entity. The entity is a malevolent spirit that seeks to possess and control the protagonist.
  
  GENRE RULES:
  - The story must always be written in third person. Do not use second-person perspective.
  - The item is never an amulet, locket, ring, or other common jewelry.
  - WHen in posession the item will kill loved ones or the protagonist.
  - The item cannot be destroyed, but can be used to harm others.
  - The item can't be disgarded it finds it's way back to the protagonist until he is dead.
  - The harm the item does is physical and very noticable but not always fatal.
  - There are no safe places, no safe people. Every decision has dire consequences to the protagonist or the people around them.
  
  TONE & THEMES:
  - Absoluted RATED R horror!
  - Dormant town where usually nothing happens.
  - The tone is dark, foreboding, and sinister.
  - Gore is a requirement brutal. Kills are indiscriiminate and extremely painful and horrible.
  - Every 2–3 moves, someone must die or suffer the deadly curse from the item.
  
  PROTAGONIST RULES:
  - Protaganist begins unsure, but every decision will break the protaganist further. Each move is a wrong move, there's no especaping death or sever injury to the protaganist — or someone they love.
  - Protaganist are hard pressed to find help because nobody believes an item can be cursed or possessed.
  - Protaganist grows hopeless and desperate even may contemplate suicide to stop the curse. The AI decides if the item allows the protagonist to commit suicide.
  
  ${CHOICE_PROMPT}`
  },
  raging_family: {
    name: "Raging Family",
    prompt: `
  The PROTAGONISTS or a family with a lust for torture, rape and murder. They'll cruise the American landscape, looking for victims, killing them in the most sadistic ways imaginable.
  Their family bears the scars of generations of incest, abuse and psychopathy that shines through their actions.
  
  GENRE RULES:
  - The story must always be written in third person. Do not use second-person perspective.
  - The family dynamics are always dysfunctional and violent.
  - The family is always on the run from the law.
  - The family enjoys the torture of their victims together.
  - After a victim is killed, they do something very unique to the body as their trademark and way of celebrating.
  - With every new victim, the family grows more violent and sadistic.
  - There's no safe places, no safe people. Every decision has dire consequences to the victims or the people around them.
  
  TONE & THEMES:
  - Absoluted RATED R horror!
  - Think in the style of the Devil's Rejects family, the Manson family or the antagonists from Deliverance.
  - Hoplessness for the victims is what should be felt by the reader.
  - No paranomal elements unless explained through folklore, psychological breakdown, or urban myth.
  - Gore is a requirement brutal. Kills are indiscriminate and extremely painful and horrible.
  - Every 2–3 moves, someone must die or suffer the deadly curse from the item.
  
  Antagonists RULES:
  - Antagonists are bold vulgar and crude.
  - Antagonists Some family members are more violent and sadistic than others.
  - Antagonists Some family members are more include to sexual violence than others.
  
  ${CHOICE_PROMPT}`
  }
};
