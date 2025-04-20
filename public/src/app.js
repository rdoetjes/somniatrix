        // THIS IS A VIBE CODING SESSION, TO SEE WHAT YOU CAN DO WITH AI
            // THINGS LOOK AWFUL, TERRIBLE LOOKING CODE BY CHATGPT 4.0
            import OpenAI from "https://cdn.skypack.dev/openai";
            import { plots } from "./plots.js";
            import { MAX_MOVES } from "./plots.js";

            let client = null;
            let currentMove = 1;
            let currentplot = "";
            let decade = "1980s";
            let messages = null;

            const terminal = document.getElementById("terminal");
            const choicesContainer = document.getElementById("choices");

            window.createSystemPrompt = function (decade, max_moves) {
                return {
                    role: "system",
                    content: `You are a retro-futuristic interactive horror story engine. The protagonist is the reader, and the AI will eventually decide the protagonist's fate.

            STORY RULES:
            - The story has to be set in the ${decade} <AI can select a random year in the ${decade}>.
            - The reader is the protagonist in this classic horror story, where love, drugs, violence and inevitable death will occur.
            - This is 18+, SO DO NOT HOLD BACK, ON VIOLENCE, BLOOD, SEX, GORE
            - There's a 50% chance of a plot twist.
            - The AI decides the fate of the protagonist, and in the last move, the AI decides whether the reader survives or not.
            - Build from intrigue, mystery, romantic tension (18+)
            - When we get to move: ${Math.floor(max_moves * 0.75)}, the violence turns full on — nobody is potentially safe.
            - After ${max_moves} moves, we see if the reader survives or is the last one to be slaughtered.

            CHOICE RULES:
            - Always return EXACTLY THREE numbered choices at the end WHICH MUST REMAIN CONSISTENT TO THE STORY, THE CHOICES MUST ACCOUNT FOR THE PASSED EVENTS (SO NO SUDDEN PROPS APPEARING):
              1. ...
              2. ...
              3. ...
            - Format each on its own line.
            - Choices must be unique, actionable, and relevant to the plot.
            - Make sure the choices progress the story in varied and interesting directions.
            - The player will NOT DIE before the ${max_moves}th move.
            - The story builds up slowly, creating tension and suspense.
            - Always say "you" instead of "the player."
            - Do NOT repeat the same action more than once.
            - Every choice must be a consequence of previous choices.
            - The STORY NEVER exceeds ${max_moves} moves.
            - Do not include commentary — only return the story + 3 numbered options.
            - Ensure the choices are DISTINCT and MEANINGFUL, driving the story forward in a logica progression based on previous events
            - The violence can begin earlier than ${max_moves}, depending on intensity and pacing.
            - Intimacy is allowed to shock the audience or progress the story
            - The AI may flesh out the ending, describing the motivation of the horrific events
            - End with: "*** The End."`,
                };
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
                    currentplot = plotKey;
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
                    model: "gpt-4.1",
                    messages: newMessages,
                });

                const storyText = response.choices[0].message.content.trim();
                const wrapped = wrapText(storyText).replace(/1\..*$/s, "");
                terminal.textContent = wrapped;

                messages.push({ role: "assistant", content: storyText });

                const options = parseOptions(storyText);
                renderChoices(options);
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

            // Start the story
            window.onload = () => {
                messages = [window.createSystemPrompt(decade, MAX_MOVES)];

                document.getElementById("header").style.display = "none";
                document.getElementById("terminal").style.display = "none";
                document.getElementById("choices").style.display = "none";

                showplotMenu();
            };
