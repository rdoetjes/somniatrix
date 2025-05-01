**SomniaTrix**
Is and application that generates "Choose You Own Adventure" styled R-Rated horror stories.
All you need to do is, start a small webserver point it to public, plug in your OpenAPI key and you are good to go.

There are a selection of typical horror plots to choose and OpenAI will generate a story for you. It will list 3 options to choose from to progress the story.

The AI prompts are setup to be R-Rated. However you can of course change the prompts to be PG-Rated. This was initially created for my own, to get some horrific gross "Choose Your Own Adventure" horror stories. 
I realised that with kids, not reading as much as they should, this can actually be a good way to get them to read more. It combines reading with "screens" and interactive elements.

There is also the ability to set the period of the story. Horror stories of the 70s, 80s, 90s can achieve more of a horror effect because there's no cell phones, no internet, no social media. So "conflict" that leads to disperation or dangerous situations is more likely to happen. Also 80s horror is more "campy" and "over the top" which is also a good horror effect. And OpenAI actually does a great job at generating period "vibed" horror stories.

**Setup Screen**
![The Setup Screen](images/pic1.png "Setup Screen")

**Story Screen**
![The actual story screen](./images/pic2.png "Story Screen")

**Runnning the application**
This is just a simple vanilla JS application. You can run it on any static webserver, it requires no server side code so a static webserver will do.

I use http-server to run it, from the root of the project run the following command.
```
http-server -d public
```

