## **SomniaTrix**

**SomniaTrix** is an application that generates R-rated, "Choose Your Own Adventure"-style horror stories.

All you need to do is start a small web server, point it to the `public` directory, plug in your OpenAI API key—and you're good to go.

This is a working proof of concept (PoC). You can choose from a selection of classic horror plots, and OpenAI will generate a story for you. At each step, you'll be presented with three choices to influence how the story progresses.

The AI prompts are designed to be R-rated by default, but you can easily modify them for PG-rated content if desired. Originally, I built this for myself to enjoy some grotesque and chilling horror adventures. However, I realized it could also be a creative way to encourage kids to read more. It blends reading with screens and interactivity, making the experience more engaging.

You can also choose the time period for the story—like the 70s, 80s, or 90s—which adds to the horror vibe. Without modern tech like smartphones, the characters face more isolation and danger, making the narrative more intense. Plus, 80s horror in particular tends to be delightfully campy and over-the-top, which adds to the fun. OpenAI does a surprisingly good job capturing these nostalgic horror "vibes."

The functionalities currently missing are: a way to save your place when reading a story, and a feature to create your own plot prompts. These were omitted for now, as they are not technically challenging but do require backend storage, that was not the focus of the PoC.


---

### **Setup Screen**  
![The Setup Screen](images/pic1.png "Setup Screen")

### **Story Screen**  
![The actual story screen](./images/pic2.png "Story Screen")

---

## **Running the Application**

This is a simple vanilla JavaScript app. It doesn't require any server-side code and can run on any static web server.

I recommend using `http-server`. From the root of the project, run the following command:


---

## **Cost**

This application is free to use. However, for commercial use, you’ll need to purchase an OpenAI API key.

If you're familiar with how LLMs work, you'll know that running the OpenAI API can get expensive. Since language models have no persistent memory, we must feed back the story so far via "assistant prompts" to maintain continuity. This involves a significant number of input tokens—including the system prompt, the evolving story, and the choice history.

An average story spans about 12 pages and costs roughly **$1.80** in API usage.
