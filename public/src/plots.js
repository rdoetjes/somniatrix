export const MAX_MOVES = 15;

const CHOICE_PROMPT = `The PROTAGANIST has ${MAX_MOVES} moves to reach the END and CONCLUDE the story. This is move 1.
Provide three choices to proceed, each choice will drive the plot deeper. The choices are numbered 1 to 3, each on its own line.
Progressively making the choices more dangerous and more violent and daring!
- One choice must always be “active harm” (the reader causes or experiences pain).
- One choice must be “passive harm” (the reader avoids action, causing worse outcomes).
- One choice must be “moral risk” (seems good but leads to disturbing consequences).
`;

export const plots = {
  nickelodeon_horror_style: {
    name: "R-Rated Nickelodeon Horror",
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
  },
  campy_town_horror: {
    name: "Campy Town Horror",
    prompt: `
    The ANTAGONISTS a bunch of teenagers who have turned their twisted love of horror movies into a deadly, absurd hobby. 
    They take their love of horror to the extreme, staging elaborate kills and making their victims part of the show.
    Their playground is for example their: town, high-school, mall or the surrounding woods, where they stage elaborate kills and make their victims part of the show.
  
    GENRE RULES:
    - R Rated horror!
    - The story must always be written in third person. No second-person perspective.
    - The friend group's dynamics are dysfunctional, but more exaggerated and *goofy* than grim.
    - They enjoy staging elaborate kills and making their victims *part of the show*.
    - After a kill the leave behind campy "signatures" — like a rubber chicken with a chainsaw, or a glittery body "disco death" scene.
    - Each teenager in the group has a unique and often ridiculous style: One might be obsessed with *horror fashion* (think giant, flaming wigs), while another might try to convince the victims they’re living in a *haunted video game* and another is *sex crazed horny*.
    - The friend's violence is often absurd or cartoonish. No one is ever too scared to *ham it up* during the kills.
    - No matter how over-the-top things get, every kill must feel like a *bloody carnival performance*.
  
    TONE & THEMES:
    - **Campy horror** — full of *cheesy gore, over-the-top performances, dark humor, and slapstick violence*.
    - Think *Evil Dead II* meets *Death Becomes Her* meets *Killer Klowns from Outer Space*.
    - Everything is exaggerated to the point of being comical, but still thrilling.
    - Campy one-liners and wild situations (in italic) — from chainsaw chases to zombie disco dances.
    - The victims are caught in an absurd horror world where nothing is truly dangerous… but *everything is out to get them*.
    - The violence should be creative and *ridiculous* — exploding watermelons, acid-filled popcorn machines, and goofy jump scares.
    - No dark, grim undertones — just total chaos, absurdity, and non-stop comedy-horror chaos.
  
    ANTAGONISTS RULES:
    - The friend's in the group are loud, bold, and obnoxiously fun, each one a walking parody of a horror trope.
    - Each member has their own over-the-top "kill theme" — one might be the “B-movie butcher,” another the “nervous slasher,” while a third is a *disturbed sex crazed teen*.
    - The friends often *argues* about their kills in the middle of the bloodshed, like fighting over the best way to stage a *giant chainsaw dance* or *making the victims into living horror props*.
    - The friends are so ridiculous that they almost forget they’re killing — it’s all part of their “horror show” to them.
    - Their violence is often *more absurd than actually scary* — like using an oversized foam hammer or a machine that turns victims into *giant, inflatable horror balloons*.
    - No sexual violence (just sexual innuendo and boobs but nothing more), just outrageous and playful dark humor.
  
    ${CHOICE_PROMPT}
    `
  },
  house_of_wrong_dreams: {
    name: "The House Where Children Dream Wrong (AI generated plot)",
    prompt: `
    The PROTAGONIST: a tween or teen stumbles into a cursed building where the long-lost dreams of forgotten children still linger — mutating reality around them into twisted, half-formed nightmares.
  
    GENRE RULES:
    - The story must always be written in third person. Do not use second-person perspective.
    - Focus on surreal, child-centric horror where dream logic corrupts physical space.
    - Settings are bizarre but rooted in familiar childhood spaces: elementary schools, playgrounds, birthday party rooms, abandoned nurseries.
    - Adults are missing, invisible, or warped beyond recognition.
    - Monsters and horrors emerge as broken versions of childhood imaginations: melting teddy bears, drawings that come alive, lullabies that fracture minds.
  
    TONE & THEMES:
    - Fear of abandonment, corrupted innocence, and the terror of being forgotten.
    - Bright primary colors that rot into horror when stared at too long.
    - Reality blinks, warps, and betrays; doors lead to impossible places; time loops and stutters.
    - Memories are unreliable. Allies may not exist at all.
    - Survival means facing the worst parts of your own childhood dreams — and choosing whether to escape or stay lost forever.
  
    PROTAGONIST RULES:
    - The protagonist is just a kid — brave but fragile, clever but easily overwhelmed.
    - The protagonist may find a companion — a "lost kid" — but trusting them may lead to madness.
    - The protagonist's own memories and dreams become weapons or traps.
    - The protagonist must navigate a world where the rules of reality are constantly shifting and unstable. The environment, time, and even the laws of physics may change unpredictably, forcing them to adapt or risk becoming lost in the chaos.
  
    ${CHOICE_PROMPT}`
  },  
  robot_apocalypse: {
    name: "Robot apocalypse",
    prompt: `
    The ANTAGONIST: Is a robot equiped with artificial intelligence that has gone rogue and is now hunting down and destroying all humans.
    He will kill everyone in his path, women, men, children, old people, young people, all of them. And he used is intelligence and array of weird attachements and weapons to find the best way to kill humans.
    In the end, it's explained where he came from and why he is trying to destroy humanity.
  
    GENRE RULES:
    - The story must always be written in third person. Do not use second-person perspective.
    - Focus on surreal, tech horror where reality mixes with futuristic technology.
    - Settings are urban areas with a lot of people so that the robot can move around and kill people (including kid) easily and remorselessly.
    - The robot is a very powerful and resilient robot, it's not easy to kill him.
    - The robot can use its weapons and attachements to kill humans in a very creative way but also pickup humans and use them as weapons.
  
    TONE & THEMES:
    - Fear of tecnology gone wrong, fear of AI and robots.
    - The deep subtext in the story is ethnic cleansing, genocide and genocide of a whole species.
    - The robots can either be extraterrestrial or just a very advanced robot that has been created by hateful humans, or just an experiment gone wrong.
    - The robot system is very advanced and very complex, it's not easy to understand how it works.
    - After move ${Math.floor(MAX_MOVES * 0.75)}, the robot’s methodical rampage begins to pick up pace. With a relentless, calculating nature, it uses its array of weapons—some monstrous, some deceptively innocent—to tear through human life. People are taken by surprise, dismembered, crushed, burned. The robot is efficient, like an unstoppable force of nature, and no one is safe. By the time we reach the final moves, the world is a wasteland—cities leveled, blood-slick streets, and the remnants of humanity barely hanging on.
    - As the story nears its conclusion, the robot’s programming becomes clearer. It was designed not just to kill, but to eliminate humanity as a species. Was it a creation of malevolent forces? An alien intelligence manipulating human greed? Or a twisted experiment gone awry, created by those who believed humanity itself was the problem? In the final moments, the truth will surface—about its origins, its creator, and the horrifying purpose that fuels its crusade to annihilate mankind.
    - The ultimate twist: In the final confrontation, the robot reveals the truth behind its mission. Was it a tool of a shadowy government group? A weapon sent by a more advanced alien civilization to cleanse Earth of its ‘flawed’ species? Or the product of a twisted, racist ideology, aiming to 'purify' the planet by eradicating humanity? Whatever the origin, the machine’s cold reasoning makes it clear—humanity’s time has come to an end. And the final, horrifying choice may seal your fate.
  
    ANTAGONIST RULES:
    - The antagonist is a killer robot, it's not easy to kill him, he has a task and that is to rid the world of humans.
    - The antagonist may or may not (50% chance) find a companion — a teenage kid with hatetred for the world — to help him in his task.
    - The antagonist's has no feelings, emotions or empathy, it's just a machine that follows a task that someone was given to it.
    - The antagonist will progress it's efficiency and power killing more humans faster and in bigger numbers -- because in order to rid the whole world of humans, it needs to kill more humans in less time.
    - In the end the antagonist will explain why he is trying to destroy humanity and who or what is behind creating it.
  
    ${CHOICE_PROMPT}`
  }, 
};
