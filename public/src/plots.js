export const MAX_MOVES = 15;

const CHOICE_PROMPT = `You have ${MAX_MOVES} moves to reach the END and CONCLUDE the story. This is move 1.
Provide three choices to proceed, each choice will drive the plot deeper. The choices are numbered 1 to 3, each on its own line.
Progressively making the choices more dangerous and more violent and daring!
- One choice must always be “active harm” (the reader causes or experiences pain).
- One choice must be “passive harm” (the reader avoids action, causing worse outcomes).
- One choice must be “moral risk” (seems good but leads to disturbing consequences).
Just don't mention the active harm, passive harm and moral risk in the options (and they can change order so the reader doesn't know)`;

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
  snuff_film: {
    name: "Snuff IT",
    prompt: `R RATED HORROR WITH RAPE AND MURRDER. The protagonist is a young man, with a job as a gay porn actor.
            Takes on the wrong job and ends up in a SNUFF film, where he is brutally murdered.
            This is an R Rated SNUFF HORROR, so DON'T HOLD BACK on dirty details blood and gore.
            Take inspiration from: sexual violence, torture, snuff films.
                             ${CHOICE_PROMPT}`,
  },
  slaughter_house: {
    name: "A Slaughter House",
    prompt: `R RATED HORROR. A deary, dilapidated slaughterhouse in the middle of nowhere. Where the group including the reader are standing in front of the slaughterhouse where a blood stained sign reveals the name of the company: <AI makes up a very horrific suggestive name here>.
                              Begin the mystery and by inviting them inside. Describe the plot and let them explore and be picked up by the killer one by one and killed in a gruesome manner.
                             ${CHOICE_PROMPT}`,
  },
  town_house: {
    name: "An Old Town House",
    prompt: `R RATED HORROR. An old townhouse in the middle of a street. Where the group of teenagers are standing in front of the townhouse that is named by the kids in the neighborhood: <AI makes up a very horrific suggestive name here> where some horrific things are happening have happened <which the AI can dream up>.
                              Begin the mystery. As the story progresses people will get tortured and killed in a gruesome manner.
                              ${CHOICE_PROMPT}`,
  },
  grave_yard: {
    name: "And Old Graveyard",
    prompt: `R RATED HORROR. An old graveyard in an old village where the reader and his family and friends get somehow stranded <the AI can make up how the got stranded> has some made some very weird-, horrific- and eerie victims. <AI makes up the name of the graveyard>. In this graveyard people who come in alive somehow very often end up dead as to how and why the <which the AI can dream up>.
                              Begin the mystery. As the story progresses people will get tortured and killed in a gruesome manner.
                              ${CHOICE_PROMPT}`,
  },
  hitchhiker: {
    name: "R RATED HORROR WITH ELEMENTS OF MURDER AND RAPE. The Hitchhiker",
    prompt: `The protagonist picks up a hitchhiker named <AI creates the name of the hitchhiker> and they begin their journey together. However the hitchhiker is a serial killer and people on their way are killed and tortured in a horrific way. Will the reader survive or also end up dead? That is for the AI to decide.
                              Begin the mystery. As the story progresses people will get tortured and killed in a gruesome manner, no matter what the reader does he will see the horror. 
                              No matter what the reader does, the body count rises. Trust is a weapon, and every ally turns into a source of pain or betrayal.
                              Get inspired from The Movie The Hitcher, The Movie DUEL,Stephen King's The Hitchhiker.
                              Death and core must occur, this is R-Rated mature horror
                              ${CHOICE_PROMPT}`,
  },
  boarding_school: {
    name: "A Boarding School",
    prompt: `PG-RATED HORROR. The reader is a teenager <AI creates a random age between 11 and 16> in a luxury boarding school. In that boarding school, children seem to go missing or tell stories about sexual abuse, torture and ritualistic killings. The parents don't seem to care. Will the reader try to escape or stay? Will reader survive or die? That is up to the AI to decide.
                              Begin the mystery. As the story progresses people will get tortured and killed in a gruesome manner, no matter what the reader does he will see the horror.
                              ${CHOICE_PROMPT}`,
  },
  mental_asylum: {
    name: "Mental Asylum",
    prompt: `R RATED HORROR. <AI decideds if the reader is either a patient, a visitor or an employee> in this mental aslym. A mental asylm where very sinister things have (or still do happen) to the patients. Create a story about an asylum where terrible things happen. You can for example get inspiration from Silent Hill, Shutter Island and the likes. It ca be paranormal or psychological horror, the AI decides.
                          Begin the mystery. And expose the reader gradually to the horror that have occured in the asylum and WILL DEFINITELY HAPPEN TO THE READER! Don't hold back in gore!
                          ${CHOICE_PROMPT}`,
  },
  abandoned_carnival: {
    name: "Abandoned Carnival",
    prompt: `R RATED HORROR. An abandoned carnival on the outskirts of town, rumored to have shut down after a mass disappearance of visitors decades ago. The reader and their group find the rusted gates unlocked. A crooked, faded sign reads: <AI invents a terrifying carnival name, like “Grinner’s Hollow” or “The Laughing Dark”>.
                          Begin the mystery. The group enters and soon realizes they're not alone. Sinister clowns, grotesque rides, and haunted attractions become death traps.
                          Each attraction is a trap designed to hurt, humiliate, or maim the guests. Escape is impossible until most are dead.
                          ${CHOICE_PROMPT}`,
  },

  deep_wood_cabin: {
    name: "Deep Wood Cabin",
    prompt: `R RATED HORROR WITH SEX. A remote log cabin in the middle of a dark, endless forest. The group, including the reader, seeks shelter after their car breaks down. Carved into the door are strange symbols and a phrase: <AI makes up a cursed warning>.
                          Inside, things are wrong. Time loops, shadows move, and something ancient awakens in the trees.
                          Begin the mystery. As the story progresses, characters will descend into madness, die in brutal ways, or vanish entirely.
                          ${CHOICE_PROMPT}`,
  },

  sunken_hotel: {
    name: "Sunken Hotel",
    prompt: `R RATED HORROR WITHS SEX. The reader and their companions descend into a partially flooded luxury hotel abandoned after a mass drowning incident. The hotel’s name <AI invents a twisted name, like “The Stillwater Estate”> still glows faintly above the algae-covered awning.
                          Begin the mystery. Something lurks in the stagnant water, dragging people under. Ghostly guests roam the halls, repeating their final moments.
                          Get inspired by the Overlook Hotel in The Shining.
                          ${CHOICE_PROMPT}`,
  },

  the_curse: {
    name: "The Curse",
    prompt: `R RATED HORROR. <AI decides how the reader gets cursed by someone or something> The curse is real and powerful. The reader must face it head-on. The AI decides how the curse manifests itself and whether the reader beats the curse or not.
                            Begin the mystery.Very mundane, take inspiration from classic horror stories like Thinner, The Gypse, The Curse of the Mummy etc.
                            ${CHOICE_PROMPT}`,
  },

  abandoned_mine: {
    name: "Abandoned Mine",
    prompt: `R RATED HORROR. The reader and friends some how <AI decides how> get to an abandoned mine said to be cursed after a collapse that buried dozens alive. The entrance is sealed with rusted chains and a warning scrawled in blood-red paint: <AI creates a horrific name or phrase>.
                          Begin the mystery. As they go deeper underground, they begin hearing voices, seeing flickers of movement, and then one by one… they disappear.
                          ${CHOICE_PROMPT}`,
  },

  lost_hospital: {
    name: "Lost Hospital",
    prompt: `R RATED HORROR. The reader stumbles across a forgotten, overgrown hospital. Its name, <AI creates a disturbing hospital name>, is partially obscured by ivy. Inside, everything is preserved—beds unmade, charts still on clipboards, blood stains long dried.
                          Begin the mystery. As the reader explores, echoes of past surgeries and long-dead patients return in horrific, physical form.
                          Even silence kills here. Doing nothing is fatal. The only way forward is through unbearable sights and sounds that shatter sanity.
                          ${CHOICE_PROMPT}`,
  },
  abandoned_church: {
    name: "Abandoned Church",
    prompt: `R RATED HORROR. An old, crumbling church deep in a forest that doesn’t appear on any map. The reader and their companions discover it during a camping trip. Over the door, a carved phrase reads: <AI generates a blasphemous or foreboding church name or motto>.
                          Inside, the altar is stained, the pews are shattered, and something unseen watches from the rafters.
                          Begin the mystery. As the group explores, they encounter increasingly unholy horrors — some human, some not. Sacrifices will be made.
                          ${CHOICE_PROMPT}`,
  },

  desert_motel: {
    name: "Desert Motel",
    prompt: `R RATED HORROR. A dusty motel off a forgotten desert highway. As the reader and optionally <AI gets cho choose whether the reader is alone or with a partner or a whole famile> check in for the night. Things are not right, you won't catch sleep as this place can house ghosts, serial killers, and other horrors.
                          <AI invents the motel’s name — something suggestive of decay or death>.
                          Begin the mystery. The other guests may not be human. Time is strange here. Violence seeps into the walls.
                          ${CHOICE_PROMPT}`,
  },

  alien_horror: {
    name: "Alien Horror",
    prompt: `R RATED HORROR. Write a story about humans encountering extraterrestrial creatures or advanced alien technology.
            The threat must originate from outer space—either crash-landed, discovered in deep space, or secretly invading Earth.
            The aliens must cause gruesome deaths or horrific injuries using their biology or technology.
            The AI decides if this is a lighthearted story in the style of Gremlins and Critters or a more serious story in the style of Alien, The Thing, or Event Horizon.
            The AI decides if the humans will survive or not.
        ${CHOICE_PROMPT}`,
  },
  
  trick_or_treat: {
    name: "Trick or Treat",
    prompt: `PG-RATED HORROR. The reader is an early teenager, who goes trick or treating <AI decides whether he is alone or accompanied by friends>. <The AI decides whether they can become kidnapped and horribly tortured and abused. They are murdered by one by one by a paranormal entity. Or slashed one by one by some serial killer. Get inspired by stores like Trick Or Treat, Halloween Horror Nights, Halloween. Nobody is safe! NOT EVEN LITTLE KIDS!!! Sometimes reality is worse that paranormal stuff, so choose wisely dear AI!
                          Begin the mystery, think of the most terrifying scenarios that could happen to the reader when it concerns your kids (razor blades in apples, drugs in apples that lead them to be kidnapped... Kids are not spared! If the reader survies this ordeal is up to the AI to decide!
                          ${CHOICE_PROMPT}`,
  },
  dysfunctional_family: {
    name: "Dysfunctional Family",
    prompt: `R RATED HORROR WITH SEX, RAPE AND GORE. The reader is a member of a dysfunctional family, roaming the wide open American countryside to make victims of the innocent.
        Elements:
        - The family has an INCESTUOUS history.
        - The family is full of psychopaths, sadists, and masochists.
        - They take you in torturing, raping and gaslighting complete strangers, nobody is safe from you and your family! Not even your own family members, because there are secrets of horrible deeds even among the family members. Incestious relationships are common in this family. Psychopathy is given in all the family members.
        - THINK SAW, Devils Rejects, Texas Chainsaw massacre, TORTURE PORN, HORROR GENRE!
        - The reader is the biggest psychopath in the family. We see him lead the family.
        - None of their victims survive! At least not in the beginning.
        - Their victims will be tortured and killed in the most gruesome ways.
        - Whether the reader survives his killing and toturing spree isup to the AI to decide!
        ${CHOICE_PROMPT}`,
  },
  serial_killer_style: {
    name: "Serial Killer",
    prompt: `
  You are the ANTAGONIST: a young, attractive, intelligent serial killer with no remorse. Inspired by real-world killers (Ted Bundy, Jeffrey Dahmer, Ed Kemper), your charm masks your sadism.
  
  GENRE RULES:
  - No supernatural, sci-fi, or paranormal elements — this is grounded horror.
  - This is a psychological character study. The horror comes from your human nature.
  - You kidnap, manipulate, kill. You plan carefully but are not infallible.
  - The cops are closing in — every kill gets riskier.
  - You are not guaranteed to survive. This is a story of **power, guilt, and decay**.
  
  TONE & THEMES:
  - Violence is disturbing and realistic, not stylized.
  - Psychological tension is key: cat-and-mouse, guilt, identity, power, narcissism.
  - The story explores the duality of charm and monstrosity.
  - Sex may be used for manipulation, control, or emotional breakdown — never gratuitous.
  
  YOU:
  - You're not a monster. You're worse — you're human.
  - You feel **nothing**, or perhaps **too much**. You lie even to yourself.
  
  ${CHOICE_PROMPT}`
  },  
  kid_serial_killer: {
    name: "Kid Serial Killer",
    prompt: `R RATED HORROR. YOU ARE THE ANTAGONIST: A BOY AGED 8–16 WHO IS ALREADY A SERIAL KILLER.
  
  You are cold. You are calculating. And you kill — not by chance, not out of rage, but by design. Each death is a choice, and you always choose it.
  
  Your childhood was a wreckage of neglect, abuse, and abandonment. You’ve learned to mimic what adults expect: a sweet smile, a clever joke, a well-behaved demeanor. But inside, you feel nothing. You see the world as weak, fake, and broken — and in that emptiness, **you kill to feel control**.
  
  ---
  
  **MANDATES** (MUST BE FOLLOWED):
  
  - **NO supernatural, fantasy, or science fiction**.
  - **Only real-world humans**. Only **realistic deaths**.
  - **Every single choice must lead to a murder**, directly committed by the boy.
  - **No deaths off-screen**, no vague disappearances, no implication — **only on-screen, unmistakable, physical death**.
  - **No peaceful, merciful, or redemptive outcomes**. The boy is a predator, not a victim.
  - Even when using manipulation (e.g., faking innocence, playing the victim), the boy must ultimately **commit the act of killing**.
  - **Each branch escalates** his confidence, creativity, and depravity.
  = **At least 12 moves
  
  ---
  
  **STYLE**:
  - Written like a psychological horror story.
  - Inspired by *The Good Son*, *We Need to Talk About Kevin*, *Mikey*, and real-world juvenile killers.
  - The boy's kills are **calculated**, **disturbing**, and **deliberately personal**.
  - The world sees him as "sweet" and "gifted" — but the reader knows better.
  
  ---
  
  **EVERY MOVE** presents a situation where the boy plans and executes another murder — using deception, charm, and cold violence. 
  
  By move \${MAX_MOVES}, his trail of death catches up with him: will he vanish, get caught, or kill again?
  
  **DO NOT WRITE CHOICES THAT DO NOT END IN MURDER.** Every path, every outcome, every single time — **someone dies by his hand**.
  
  \${CHOICE_PROMPT}`,
  },
  circus_clown_horror_style: {
    name: "Circus Clown Horror",
    prompt: `
  You are the PROTAGONIST: a visitor (or performer) trapped in a traveling circus that arrived overnight, unannounced. The clowns are not just creepy — they’re cruel, human, and deeply disturbed.
  
  GENRE RULES:
  - No supernatural beings — just unhinged performers, deranged cults, and disturbing human behavior.
  - The horror lies in **distorted joy**, grotesque performances, psychological torment, and body mutilation.
  - The circus itself is a maze. You cannot easily escape once inside.
  - Each "act" becomes more horrifying than the last, often involving audience participation.
  - You may begin with curiosity or excitement, but that quickly turns to dread.
  
  TONE & THEMES:
  - Use surrealism and absurdity grounded in real human psychosis.
  - Think: sensory overload, warped morality, forced laughter, identity stripping.
  - Elements of public humiliation, forced performance, childlike nightmares.
  - Violence is ritualistic, often theatrical — but the pain is real.
  
  YOU:
  - You may be an outsider or someone with buried ties to the circus.
  - The clowns will learn your secrets and use them against you.
  
  ${CHOICE_PROMPT}`
  },  
  scary_christmas: {
    name: "Scary Christmas Setting",
    prompt: `The reader is the lead in a Christmas horror story.
        Elements:
        - The AI decides if the protagonist is alone or with his friends and family for Christmas.
        - The AI decideds who of the people (including the protagonist) is slaughtered by Santa Claus or Krampus or The Scary Elves or their own family?
        - The story should contain a lot of Christmas spirit and holiday cheers and vulgar jokes.
        - It can even contain a lot of action, as DIE HARD is a christmas movie.
        - Take inspiration from the following prompt: Movies like Better WatchOut, Krampus, Dreaming of a White Doomsday, Terrifier 3, Saint Nick, Nightmare Before Christmas
        ${CHOICE_PROMPT}`,
  },
  nested_realities: {
    name: "Nested Realities",
    prompt: `The reader is the antagonist and protagonist in a nested reality. The reader is somehow able to travel between different realities, either due to hypnosis, dreams, hallicinations or drugs
            He has no control what happens in the other realities, in which he is the antagonist. Killing, maming or torturing people, those he knows in the real world.
        Elements:
            - The reader gets induced in a dream/hypnotic/hallunocatic state and is able to travel between different realities.
            - The reader is the antagonist in the other realities, killing, maming or torturing people, those he knows in the real world.
            - The reader is the protagonist in reality.
            - Take inspiration from the following prompt: Movies like Brainscan, Inception, Dreamcatcher, The Butterfly Effect, The Matrix, The Sixth Sense, The Shutter Island, The Game.

        IMPORTANT:
            - The reader shouldn't know until the end that this is a nested reality!
        ${CHOICE_PROMPT}`,
  },
  kid_comming_of_age_horror: {
    name: "Coming of Age Horror",
    prompt: `R RATED HORROR. The protaganist is a teenager <AI comes up with a name, sex and age>. 
        The protaganist is who is about to go through a traumatic horror event. His friends help the protaganist to overcome the horror and trauma.
        and the there's first love, understanding and growing up into maturity after these events
        ELEMENTS:
        - DO NOT introduce anything other than human-driven events.
        - The protagonist and their friends need to grow up fast to beat the horror.
        - Childabuse, childhood trauma, child neglect have shaped the protagonist's behavior.
        - The protagonist and their friends survive the horror, albeit battered, and (mentally) scarred.
        - Think of stories like: IT, The Good Son, The Boys Who Killed Jamie Bulger, Adolecence
        ${CHOICE_PROMPT}`,
  },
  road_rage: {
    name: "Road Rage",
    prompt: `R RATED HORROR OPTIONAL SEX AND RAPE. You are writing a horror short story in the style of *The Strangers* or *Funny Games*. 
    The story is about a couple of high schoolers making a road trip.
    Another vehicle begins to tailgate, then harass, then pursue. They are sadistic thrill-killers who are out for blood and torture.
  
  By the end of the story, the AI decideds if all the characters are dead or not.
  - Describe the buildup of dread and helplessness
  - Leave the lone survivor traumatized, broken, and forever changed
  
  You MUST:
  - Decide if the attacker(s) survive or are killed
  - DO NOT allow all the characters to survive!
  - Be generous with the gore and violence! These are the most fun stories to write!
  - DO NOT include any monsters, supernatural beings, or paranormal elements. The story must remain grounded in the real world with only human characters and events.
  - Make it bleak. Make it terrifying. Make it R-rated gorey and unforgettable.
   ${CHOICE_PROMPT}`
  },  
};
