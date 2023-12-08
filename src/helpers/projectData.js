import unityGame from '../assets/thumbnails/UnityGame.png';
import chatbot from '../assets/thumbnails/Chatbot.png';
import chess from '../assets/thumbnails/Chess.png';
import ramblin from '../assets/thumbnails/Ramblin.png';
import cs2340 from '../assets/thumbnails/CS2340Game.png';

export default [
    {
        id: 1,
        title: "2D Dungeon Crawler",
        description: `This was a game I made in my CS2340 Objects and Design class during
        the Fall 2023 semester at Georgia Tech. I worked in a group of 5 to develop a
        game on Android Studio using Java while also applying design principles taught
        throughout the semester. As a team, we utilized Agile development to create
        features between two-week sprints. Currently, players are able to select between
        three characters and navigate between different rooms with varying enemies. This 
        project is ongoing, and our next plans are to connect the game to a database as well
        as improve the design of the game.
        `,
        thumbnail: cs2340,
        language: "Java, Android Studio"
    },
    {
        id: 2,
        title: "No Name",
        description: `This is a 2D-platform game with metroidvania elements developed
        on the Unity game engine. I worked on this in a group of 3 for a game studies 
        course. The title of this game derives from the fact that spirits in the Underworld
        are lost and have no memory of their past life. You play as a lost soul who must
        collect powerups and memories, while avoiding evil spirits, to escape the Underworld.`,
        thumbnail: unityGame,
        language: "C#, Unity"
    },
    {
        id: 3,
        title: "AI Chatbot",
        description: `This chatbot was created using the OpenAI API and run on Node.js.
        It is based off the character HAL 9000 from the movie 2001: A Space Odyssey. 
        The user is able to ask questions to the chatbox and receive answers through the
        character of HAL 9000. The API and backend logic is through Javascript and
        Node.js while the frontend was designed via HTML and CSS. `,
        thumbnail: chatbot,
        language: "HTML/CSS/JS, Node.js"
    },
    {
        id: 4,
        title: "Ramblin' Romance",
        description: `This is a dating sim game based on Georgia Tech, with Buzz as
        the narrator. I developed this game with a group of 5 using a library called 
        P5.js to render and design each scene. Players can choose to romance one of
        three characters and make decisions that will determine whether they will
        successfully date them. Players can also choose a starting major that will
        either help or hinder their odds of success.`,
        thumbnail: ramblin,
        language: "HTML/CSS/JS, P5.js"
    }
    /*
    {
        id: 5,
        title: "Chess",
        description: "I replicated a game I like",
        thumbnail: chess,
        language: "Python"
    }
    */
]