export const MAX_MOVES = 10;

const CHOICE_PROMPT = `You have ${MAX_MOVES} moves to reach and the AI will determine if the reader is killed in the last move or barely gets away. This is move 1.
Provide three typical horror choices to proceed, numbered 1 to 3, each on its own line.
Progressively making the choices more dangerous and more violent and daring!`;

export const scenes = {
  slaughter_house: {
    name: "A Slaughter House",
    prompt: `A deary, dilapidated slaughterhouse in the middle of nowhere. Where the group including the reader are standing in front of the slaughterhouse where a blood stained sign reveals the name of the company: <AI makes up a very horrific suggestive name here>.
                              Begin the mystery and by inviting them inside. Describe the scene and let them explore and be picked up by the killer one by one and killed in a gruesome manner.
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
        - Whether the reader survives his killing and toturing spree isup to the AI to decide!
        ${CHOICE_PROMPT}`,
  },
  serial_killer_style: {
    name: "Serial Killer",
    prompt: `THE READER IS THE ANTAGONIST, A TWENTY SOMETHING SERIAL KILLER. He targets exclusive male high school students.
        The antagonist is good looking and charming. He already killed several high school students and the cops have no clue.
        DO NOT include any monsters, supernatural beings, or paranormal elements. The story must remain grounded in the real world with only human characters and events. All elements must be strictly realistic — no magic, no creatures, no ghosts, and no fantastical elements.
        So do not introduce anything other than human-driven events. The ANTAGONIST actions should be strictly human, with no paranormal or fantastical elements allowed.
        ELEMENTS:
        - DO NOT introduce anything other than human-driven events.
        - The killer’s actions should be strictly human, with no paranormal or fantastical elements allowed.
        - DO NOT include any monsters, supernatural beings, or paranormal elements. The story must remain grounded in the real world with only human characters and events.
        - All elements must be strictly realistic — no magic, no creatures, no ghosts, and no fantastical elements.
        - THE AI DECIDES IF THIS VICTIM WILL TURN THE TABLES AND KILL THE READER, OR THE READER WILL KILL THE VICTIM
        ${CHOICE_PROMPT}`,
  },
  kid_serial_killer: {
    name: "Kid Serial Killer",
    prompt: `THE READER IS THE ANTAGONIST, A YOUNG SERIAL KILLER <AI DETERMINES AGE BETWEEN 8-14>. The boy has had a rough life, and he has a lot of anger and rage inside him. He has a lot of pent-up anger and rage inside him.
        The antagonist is good looking, innocent and charming. He knows how to manipulate people. He already killed several adults and kids.
        DO NOT include any monsters, supernatural beings, or paranormal elements. The story must remain grounded in the real world with only human characters and events. All elements must be strictly realistic — no magic, no creatures, no ghosts, and no fantastical elements.
        So do not introduce anything other than human-driven events. The ANTAGONIST actions should be strictly human, with no paranormal or fantastical elements allowed.
        ELEMENTS:
        - DO NOT introduce anything other than human-driven events.
        - The killer’s actions should be strictly human, with no paranormal or fantastical elements allowed.
        - DO NOT include any monsters, supernatural beings, or paranormal elements. The story must remain grounded in the real world with only human characters and events.
        - All elements must be strictly realistic — no magic, no creatures, no ghosts, and no fantastical elements.
        - THE AI DECIDES IF THIS VICTIM WILL TURN THE TABLES AND KILL THE READER, OR THE READER WILL KILL THE VICTIM
        - Childabuse, childhood trauma, child neglect drive the kid's behavior.
        - Think of stories like: The Good Son, The Boy Who Killed His Parents, Mikey, The Boys Who Killed Jamie Bulger, Adolecence
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
        - Please take inspiration from the following prompt: Movies like SCREAM, The Babysitter, Summer of 84, Intrusion, I See You etc.
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
  possessed_item: {
    name: "Goosebumps Youth HorrorA Possessed Item",
    prompt: `
  This is a creepy youth horror story in the style of *Are You Afraid of the Dark?* or *Eerie Indiana*.

  The protagonist is a 13-year-old boy.

  He discovers a strange object — something common for a kid to encounter, like a locker decoration, a walkman, a comic book, or a schoolyard trinket — but it's secretly cursed.

  ELEMENTS:
  - The object is possessed by something evil that targets the boy and those close to him.
  - It behaves strangely — whispering, moving on its own, changing appearance, or influencing emotions.
  - The curse becomes more dangerous over time, resulting in physical harm or terrifying events.
  - The object takes multiple victims before the climax.
  - There's a 50% chance the protagonist defeats it… or becomes its final victim.

  Encourage weird twists, ironic consequences, and age-appropriate creepiness.

  ${CHOICE_PROMPT}`,
  },
};
