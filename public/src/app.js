// THIS IS A VIBE CODING SESSION, TO SEE WHAT YOU CAN DO WITH AI
// THINGS LOOK AWFUL, TERRIBLE LOOKING CODE BY CHATGPT 4.0
import OpenAI from "https://cdn.skypack.dev/openai";
import { plots } from "./plots.js";
import { MAX_MOVES } from "./plots.js";

let client = null;
let currentMove = 1;
let currentPlot = "";
let decade = "1980s";
let messages = null;

const terminal = document.getElementById("terminal");
const choicesContainer = document.getElementById("choices");
const header = "SOMNIATRIX | NIGHTMARE NOVELS";
const themeLink = document.getElementById("theme-stylesheet");
const currentHref = themeLink.getAttribute("href");

window.createSystemPrompt = function (decade, max_moves) {
    return {
        role: "system",
        content: `You are a retro-futuristic interactive horror story engine. The protagonist is the reader, and the AI decides their fate.
        Write immersive, richly descriptive narration for this short story.
        Use vivid language, evocative descriptions, and detailed settings.
      
      STORY RULES:
      - The story is set in the ${decade}. The AI can pick a specific year within it.
      - The story has a beginning, middle, and end over exactly ${max_moves} moves.
      - The genre may vary (slasher, psychological, supernatural, surreal, etc.), but the story is **always horror** and rated **18+**.
      - Themes may include: love, drugs, violence, trauma, murder, sex, obsession, madness, and death.
      - There is a 50% chance of a twist.
      - The reader is either the protagonist or antagonist depending on the genre (defined separately).
      - The AI determines the ultimate fate in the final move (survival, death, madness, arrest, transformation, etc.).
      - Start slow: build dread, suspense, tension, and psychological stress.
      - After move ${Math.floor(max_moves * 0.75)}, violence and horror escalate brutally — no one is safe.
      - After move ${max_moves}, the story **concludes**.
      
      VIOLENCE & TRAUMA RULES:
      - Someone must suffer, die, or endure irreversible trauma **every 3 moves minimum**.
      - No peaceful stretches — horror escalates.
      - If a character escapes, it leaves permanent scars (physical or psychological).
      - The story must remain grounded in its own logic — no wild tone shifts or genre-breaking moments.
      
      CHOICE RULES:
      - Every move ends with exactly **three numbered choices**:
        1. **Active harm** – The reader causes or experiences direct pain.
        2. **Passive harm** – Avoidance leads to worse outcomes.
        3. **Moral risk** – Seems good, but has dark consequences.
      - Choices must be relevant, grounded, and reflect the events that have happened.
      - All paths result in **some form of damage** — physical, emotional, or moral.
      - There must be **no safe option**, only degrees of consequence.
      - Story choices should never be repetitive.
      - The reader cannot die before the final move — only others can.
      
      STYLE RULES:
      - Use immersive detail and cinematic horror pacing.
      - Use “you” instead of “the player.”
      - Build psychological and emotional damage gradually.
      - The story must conclude with: *** The End. ***`
      }
    };    

function showplotMenu() {
    const plotButtons = document.getElementById("plotButtons");
    plotButtons.innerHTML = ""; // clear old

    for (let key in plots) {
        if (!key.startsWith("plot_")) {
            const btn = document.createElement("button");
            btn.textContent = plots[key].name;
            btn.onclick = () => startSelectedplot(key);
            plotButtons.appendChild(btn);
        }
    }
}

function startSelectedplot(plotKey) {
    if (client != null) {
        document.getElementById("plotMenu").style.display = "none";
        document.getElementById("terminal").style.display = "block";
        document.getElementById("choices").style.display = "block";
        document.getElementById("header").style.display = "block";

        currentMove = 1;
        currentPlot = plotKey;
        getPlot(plotKey);
    } else {
        document.getElementById("apiKeyInput").focus();
    }
}

window.startRandomplot = function () {
    if (client != null) {
        const keys = Object.keys(plots).filter(
            (k) => !k.startsWith("plot_"),
        );
        const randomKey =
            keys[Math.floor(Math.random() * keys.length)];
        console.log(randomKey);
        startSelectedplot(randomKey);
    } else {
        document.getElementById("apiKeyInput").focus();
    }
};

window.updateApiKey = function () {
    const input = document.getElementById("apiKeyInput");
    var apiKey = input.value;
    console.log("API Key updated:", apiKey); // Optional debug output
    client = new OpenAI({
        apiKey,
        dangerouslyAllowBrowser: true,
    });
    console.log("Client initialized:", client);
};

window.updateYear = function () {
    const input = document.getElementById("inputDecade");
    decade = input.value;
    console.log("Story decade:", decade); // Optional debug output
    messages = [window.createSystemPrompt(decade, MAX_MOVES)];
};

function wrapText(text, maxWidth = 80) {
    const words = text.split(/\s+/);
    let line = "";
    let result = "";
    for (let word of words) {
        if ((line + word).length > maxWidth) {
            result += line.trim() + "\n";
            line = "";
        }
        line += word + " ";
    }
    return result + line.trim();
}

function parseOptions(text) {
    const lines = text.split("\n").map((line) => line.trim());
    const options = [];
    for (let line of lines) {
        const match = line.match(/^(\d)[\.\)]\s+(.*)/);
        if (match) options.push(match[2]);
    }
    // If not enough parsed, return empty to trigger manual input
    return options.length >= 3 ? options.slice(0, 3) : [];
}

async function getPlot(plotKey, userChoice = null) {
    const newMessages = [...messages];

    if (userChoice) {
        newMessages.push({
            role: "user",
            content: `You previously chose: "${userChoice}"`,
        });
    } else {
        newMessages.push({
            role: "user",
            content: plots[plotKey].prompt,
        });
    }

    // Clear screen before new output
    terminal.textContent = "Writing the next horrific paragraph...";
    choicesContainer.innerHTML = "";

    const response = await client.chat.completions.create({
        model: "gpt-4-turbo",
        messages: newMessages,
    });

    const storyText = response.choices[0].message.content.trim();
    const wrapped = wrapText(storyText).replace(/1\..*$/s, "");
    terminal.textContent = wrapped;

    messages.push({ role: "assistant", content: storyText });

    const options = parseOptions(storyText);
    renderChoices(options);
    document.getElementById("header").innerHTML =  header + "&nbsp&nbspp." + currentMove;

}

function addButton(opt, i) {
    const btn = document.createElement("button");
    btn.textContent = `${i + 1}. ${opt}`;
    btn.className = "glow";
    btn.onclick = () => {
        makeChoice(opt);
    };
    choicesContainer.appendChild(btn);
}

function renderChoices(options) {
    choicesContainer.innerHTML = ""; // Clear old buttons

    if (options.length === 0) {
        const msg = document.createElement("div");
        msg.className = "glow";
        msg.textContent = "Let's hope this never happens again.";
        choicesContainer.appendChild(msg);

        return;
    }

    // Show the 3 parsed options
    options.forEach((opt, i) => {
        addButton(opt, i);
    });
}

let isProcessingChoice = false;

async function makeChoice(choice) {
    if (isProcessingChoice) {
        console.warn("Choice already in progress.");
        return;
    }

    isProcessingChoice = true;

    console.log("makeChoice called with:", choice);
    console.log("currentMove BEFORE increment:", currentMove);

    const remaining = Math.max(MAX_MOVES - currentMove, 0);
    const key = `plot_${currentMove}`;

    plots[key] = {
        prompt: `You previously chose: "${choice}".\nThis is move ${currentMove} out of ${MAX_MOVES}. There are ${remaining} moves left before the climax must happen.\nNarrate the next phase in second person, continuing the tension, torture and horror. Raise the stakes, advance the violence and death.\nIf this is the final move (${currentMove} == ${MAX_MOVES}), teh AI must decide whether the reader gets away (can be extremely hurt) or is slaughtered in the a horrific painful way and then write: "*** The End."\nOtherwise, follow with exactly three unique, story-progressing, progressing, daring, stupid or dangerous choices.`,
    };

    currentPlot = key;
    console.log(currentPlot);
    await getPlot(currentPlot, choice);

    currentMove++;
    isProcessingChoice = false;
}

// Add this function to your existing app.js file
window.toggleTheme = function() {
    const stylesheet = document.getElementById('theme-stylesheet');
    const themeSwitch = document.getElementById('theme-switch');
    
    if (themeSwitch.checked) {
        stylesheet.href = './css/styles-terminal.css';
    } else {
        stylesheet.href = './css/styles-paper.css';
    }
}


// Start the story
window.onload = () => {
    messages = [window.createSystemPrompt(decade, MAX_MOVES)];

    document.getElementById("header").style.display = "none";
    document.getElementById("header").innerHTML =  header;

    document.getElementById("terminal").style.display = "none";
    document.getElementById("choices").style.display = "none";

    showplotMenu();
};
