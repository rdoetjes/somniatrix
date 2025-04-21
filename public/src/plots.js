export const MAX_MOVES = 25;

const CHOICE_PROMPT = `You have ${MAX_MOVES} moves to reach and the AI will determine if the reader is killed in the last move or barely gets away. This is move 1.
Provide three typical horror choices to proceed, numbered 1 to 3, each on its own line.
Progressively making the choices more dangerous and more violent and daring!`;

export const plots = {
  snuff_film: {
    name: "Snuff IT",
    prompt: `The protagonist is a young man, with a job as a gay porn actor.
            Takes on the wrong job and ends up in a SNUFF film, where he is brutally murdered.
            This is an R Rated SNUFF HORROR, so DON'T HOLD BACK on dirty details blood and gore.
            Take inspiration from: sexual violence, torture, snuff films.
                             ${CHOICE_PROMPT}`,
  },
  slaughter_house: {
    name: "A Slaughter House",
    prompt: `A deary, dilapidated slaughterhouse in the middle of nowhere. Where the group including the reader are standing in front of the slaughterhouse where a blood stained sign reveals the name of the company: <AI makes up a very horrific suggestive name here>.
                              Begin the mystery and by inviting them inside. Describe the plot and let them explore and be picked up by the killer one by one and killed in a gruesome manner.
                             ${CHOICE_PROMPT}`,
  },
  town_house: {
    name: "An Old Town House",
    prompt: `An old townhouse in the middle of a street. Where the group of teenagers are standing in front of the townhouse that is named by the kids in the neighborhood: <AI makes up a very horrific suggestive name here> where some horrific things are happening have happened <which the AI can dream up>.
                              Begin the mystery. As the story progresses people will get tortured and killed in a gruesome manner.
                              ${CHOICE_PROMPT}`,
  },
  grave_yard: {
    name: "And Old Graveyard",
    prompt: `An old graveyard in an old village where the reader and his family and friends get somehow stranded <the AI can make up how the got stranded> has some made some very weird-, horrific- and eerie victims. <AI makes up the name of the graveyard>. In this graveyard people who come in alive somehow very often end up dead as to how and why the <which the AI can dream up>.
                              Begin the mystery. As the story progresses people will get tortured and killed in a gruesome manner.
                              ${CHOICE_PROMPT}`,
  },
  hitchhiker: {
    name: "The Hitchhiker",
    prompt: `The reader picks up a hitchhiker named <AI creates the name of the hitchhiker> and they begin their journey together. However the hitchhiker is a serial killer and people on their way are killed and tortured in a horrific way. Will the reader survive or also end up dead? That is for the AI to decide.
                              Begin the mystery. As the story progresses people will get tortured and killed in a gruesome manner, no matter what the reader does he will see the horror. Get inspired from The Movie The Hitcher, The Movie DUEL,Stephen King's The Hitchhiker.
                              ${CHOICE_PROMPT}`,
  },
  boarding_school: {
    name: "A Boarding School",
    prompt: `The reader is a teenager <AI creates a random age between 11 and 16> in a luxury boarding school. In that boarding school, children seem to go missing or tell stories about sexual abuse, torture and ritualistic killings. The parents don't seem to care. Will the reader try to escape or stay? Will reader survive or die? That is up to the AI to decide.
                              Begin the mystery. As the story progresses people will get tortured and killed in a gruesome manner, no matter what the reader does he will see the horror.
                              ${CHOICE_PROMPT}`,
  },
  mental_asylum: {
    name: "Mental Asylum",
    prompt: `<AI decideds if the reader is either a patient, a visitor or an employee> in this mental aslym. A mental asylm where very sinister things have (or still do happen) to the patients. Create a story about an asylum where terrible things happen. You can for example get inspiration from Silent Hill, Shutter Island and the likes. It ca be paranormal or psychological horror, the AI decides.
                          Begin the mystery. And expose the reader gradually to the horror that have occured in the asylum and WILL DEFINITELY HAPPEN TO THE READER! Don't hold back in gore!
                          ${CHOICE_PROMPT}`,
  },
  abandoned_carnival: {
    name: "Abandoned Carnival",
    prompt: `An abandoned carnival on the outskirts of town, rumored to have shut down after a mass disappearance of visitors decades ago. The reader and their group find the rusted gates unlocked. A crooked, faded sign reads: <AI invents a terrifying carnival name, like “Grinner’s Hollow” or “The Laughing Dark”>.
                          Begin the mystery. The group enters and soon realizes they're not alone. Sinister clowns, grotesque rides, and haunted attractions become death traps.
                          ${CHOICE_PROMPT}`,
  },

  deep_wood_cabin: {
    name: "Deep Wood Cabin",
    prompt: `A remote log cabin in the middle of a dark, endless forest. The group, including the reader, seeks shelter after their car breaks down. Carved into the door are strange symbols and a phrase: <AI makes up a cursed warning>.
                          Inside, things are wrong. Time loops, shadows move, and something ancient awakens in the trees.
                          Begin the mystery. As the story progresses, characters will descend into madness, die in brutal ways, or vanish entirely.
                          ${CHOICE_PROMPT}`,
  },

  sunken_hotel: {
    name: "Sunken Hotel",
    prompt: `The reader and their companions descend into a partially flooded luxury hotel abandoned after a mass drowning incident. The hotel’s name <AI invents a twisted name, like “The Stillwater Estate”> still glows faintly above the algae-covered awning.
                          Begin the mystery. Something lurks in the stagnant water, dragging people under. Ghostly guests roam the halls, repeating their final moments.
                          ${CHOICE_PROMPT}`,
  },

  the_curse: {
    name: "The Curse",
    prompt: `<AI decides how the reader gets cursed by someone or something> The curse is real and powerful. The reader must face it head-on. The AI decides how the curse manifests itself and whether the reader beats the curse or not.
                            Begin the mystery.Very mundane, take inspiration from classic horror stories like Thinner, The Gypse, The Curse of the Mummy etc.
                            ${CHOICE_PROMPT}`,
  },

  abandoned_mine: {
    name: "Abandoned Mine",
    prompt: `The reader and friends some how <AI decides how> get to an abandoned mine said to be cursed after a collapse that buried dozens alive. The entrance is sealed with rusted chains and a warning scrawled in blood-red paint: <AI creates a horrific name or phrase>.
                          Begin the mystery. As they go deeper underground, they begin hearing voices, seeing flickers of movement, and then one by one… they disappear.
                          ${CHOICE_PROMPT}`,
  },

  lost_hospital: {
    name: "Lost Hospital",
    prompt: `The reader stumbles across a forgotten, overgrown hospital. Its name, <AI creates a disturbing hospital name>, is partially obscured by ivy. Inside, everything is preserved—beds unmade, charts still on clipboards, blood stains long dried.
                          Begin the mystery. As the reader explores, echoes of past surgeries and long-dead patients return in horrific, physical form.
                          ${CHOICE_PROMPT}`,
  },
  abandoned_church: {
    name: "Abandoned Church",
    prompt: `An old, crumbling church deep in a forest that doesn’t appear on any map. The reader and their companions discover it during a camping trip. Over the door, a carved phrase reads: <AI generates a blasphemous or foreboding church name or motto>.
                          Inside, the altar is stained, the pews are shattered, and something unseen watches from the rafters.
                          Begin the mystery. As the group explores, they encounter increasingly unholy horrors — some human, some not. Sacrifices will be made.
                          ${CHOICE_PROMPT}`,
  },

  sunken_ship: {
    name: "Sunken Ship",
    prompt: `The reader joins a deep-sea salvage crew to explore a recently discovered sunken vessel named <AI creates an eerie ship name>. The ship rests in an unnatural trench where no life should exist.
                          As the team dives and enters the hull, things begin to move in the shadows. Old crew logs speak of madness, rituals, and “something awakened in the deep.”
                          Begin the mystery. One by one, the divers vanish or turn on each other in horrifying ways. The sea does not give back what it takes.
                          ${CHOICE_PROMPT}`,
  },

  desert_motel: {
    name: "Desert Motel",
    prompt: `A dusty motel off a forgotten desert highway. As the reader and optionally <AI gets cho choose whether the reader is alone or with a partner or a whole famile> check in for the night. Things are not right, you won't catch sleep as this place can house ghosts, serial killers, and other horrors.
                          <AI invents the motel’s name — something suggestive of decay or death>.
                          Begin the mystery. The other guests may not be human. Time is strange here. Violence seeps into the walls.
                          ${CHOICE_PROMPT}`,
  },

  alien_forest: {
    name: "Alien Forest",
    prompt: `A research team, including the reader, lands on an uncharted planet covered in thick, bioluminescent jungle. The trees whisper. The sky shifts colors. A trail of missing expedition members leads to a pulsing structure of unknown origin.
                          <AI names the alien forest with something ancient and unpronounceable>.
                          Begin the mystery. As the team explores, their minds begin to warp, and the forest seems to breathe. What’s killing them may already be inside them.
                          ${CHOICE_PROMPT}`,
  },

  mirror_house: {
    name: "Mirror House",
    prompt: `The reader wakes up inside a grand Victorian house made entirely of mirrors. No memory of how they got there. Their reflection is slightly... off. Other “versions” of themselves appear in different mirrors. One begins to move without the reader.
                          <AI gives the house a name that hints at fractured reality or forbidden reflection>.
                          Begin the mystery. Every room is a psychological trap. And the reflections want out.
                          ${CHOICE_PROMPT}`,
  },
  trick_or_treat: {
    name: "Trick or Treat",
    prompt: `The reader is an early teenager, who goes trick or treating <AI decides whether he is alone or accompanied by friends>. <The AI decides whether they can become kidnapped and horribly tortured and abused. They are murdered by one by one by a paranormal entity. Or slashed one by one by some serial killer. Get inspired by stores like Trick Or Treat, Halloween Horror Nights, Halloween. Nobody is safe! NOT EVEN LITTLE KIDS!!! Sometimes reality is worse that paranormal stuff, so choose wisely dear AI!
                          Begin the mystery, think of the most terrifying scenarios that could happen to the reader when it concerns your kids (razor blades in apples, drugs in apples that lead them to be kidnapped... Kids are not spared! If the reader survies this ordeal is up to the AI to decide!
                          ${CHOICE_PROMPT}`,
  },
  dysfunctional_family: {
    name: "Dysfunctional Family",
    prompt: `The reader is a member of a dysfunctional family, roaming the wide open American countryside to make victims of the innocent.
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
    prompt: `THE READER IS THE ANTAGONIST, A TWENTY SOMETHING SERIAL KILLER. He kidnaps and tortures his victims and leaves them to die. He is a psychopath. He is a sadist. He is a masochist. 
        The antagonist is good looking and charming. He already killed many people, young and old. 
        The cops have no leads. The reader is the only one who knows what he is doing.
        DO NOT include any monsters, supernatural beings, or paranormal elements. The story must remain grounded in the real world with only human characters and events. All elements must be strictly realistic — no magic, no creatures, no ghosts, and no fantastical elements.
        So do not introduce anything other than human-driven events. The ANTAGONIST actions should be strictly human, with no paranormal or fantastical elements allowed.
        ELEMENTS:
        - DO NOT introduce anything other than human-driven events.
        - DO NOT include any monsters, supernatural beings, or paranormal elements. The story must remain grounded in the real world with only human characters and events.
        - The killer’s actions should be strictly human, with no paranormal or fantastical elements allowed.
        - All elements must be strictly realistic — no magic, no creatures, no ghosts, and no fantastical elements.
        - There must be a lot of tension and suspense, blood, and gore.
        - Think real life serial killers, like Ted Bundy, Jeffrey Dahmer, John Wayne Gacy, and Ed Gein.
        ${CHOICE_PROMPT}`,
  },
  kid_serial_killer: {
    name: "Kid Serial Killer",
    prompt: `THE READER IS THE ANTAGONIST: A BOY AGED BETWEEN 8-14 WHO IS ALREADY A SERIAL KILLER. 
    The boy has endured serious childhood trauma — emotional neglect, physical abuse, and abandonment. These experiences have twisted his sense of empathy and morality. He's learned how to mimic emotions to fit in, but inside, he is cold, calculating, and angry.
  
    He is **charming**, **well-spoken**, and often **described as a "sweet" or "gifted" kid** — a mask he wears perfectly. But behind that mask is a manipulative killer who has already taken the lives of children and adults, and is planning his next move.
  
    The antagonist uses **psychological manipulation**, **deception**, and **his own appearance of innocence** to get close to his victims. He may gain their trust, isolate them, and then **kill them in realistic, human ways** — poisoning, bludgeoning, suffocation, or staged accidents. Every move he makes should lead him closer to **another death**.
  
    **DON'TS**:
      - DO NOT introduce supernatural, paranormal, or fantastical elements of any kind.
      - DO NOT use monsters, ghosts, or anything that breaks the realism of the world.
  
    **DO'S**:
      - Only human characters
      - Make sure people **die by the boy's hand** throughout the story — not implied, not off-screen, but directly by him.
      - His manipulations may cause others to turn on each other, but he ultimately must be responsible for deaths.
      - The story should show his escalating actions and growing boldness with each kill.
      - In move ${MAX_MOVES}, the outcome of his actions will be revealed: will he be caught, or will he escape suspicion?
      - Every choice should steer the reader toward another calculated and cold decision that leads to murder.
  
    CHARACTERISTICS TO EMBED IN THE STORY:
      - Childhood trauma drives his inability to form empathy.
      - He sees adults as weak, cruel, or useless — a product of his neglect and abuse.
      - He sees killing as a form of control or revenge.
      - Inspiration from films like *The Good Son*, *Mikey*, *We Need to Talk About Kevin*, and real-world cases like the Bulger killers.
      - The story should feel like reading a disturbing but plausible case file or confession.
  
    - Every choice should steer the reader toward another calculated and cold decision that leads to murder.
    ${CHOICE_PROMPT}`,
  },  
  home_invasion_teen_victim: {
    name: "Teen Home Invasion",
    prompt: `The reader is a teenager <AI comes up with a name> he becomes the victim of a house invasion. <AI decides if he is alone or with his friends or siblings>. The reader and the optional siblings or friends are confronted by <the AI decides it it's a group of psychopaths or a single psychopath>.
        ELEMENTS:
        - The main antagonist is has a twisted sense of humor and enjoys torturing his victims. The victim is terrified and has no idea what to do.
        - He stops at nothing! Young or old, he will kill them all! <THE AI DECIDES AD RANDOM, IF THE PROTAGONIST WILL TURN THE TABLES ON HIM OR NOT>
        - DO NOT include any monsters, supernatural beings, or paranormal elements. The story must remain grounded in the real world with only human characters and events.
        - All elements must be strictly realistic — no magic, no creatures, no ghosts, and no fantastical elements.
        - Please take inspiration from the following prompt: Movies like Better Watch Out, SCREAM, The Babysitter, Summer of 84, Intrusion, I See You etc.
        - Lots of blood and gore and suspense.
        ${CHOICE_PROMPT}`,
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
    prompt: `The protaganist is a teenager <AI comes up with a name, sex and age>. 
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
    prompt: `You are writing a horror short story in the style of *The Strangers* or *Funny Games*. 
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
