/* JS for Text Adventure */
let playerName = "";
let choiceList = [];
let currentPage = null;

//Prompt player for their name
playerName = window.prompt("What is your Name?","Player1");


// Get the current page
function getCurrentPage(slug){
 currentPage = storyData[slug];
 return currentPage;
}


//Create a function called `recordChoice()` that will accept a `slug`
// parameter and add it to the `choiceList` Array (probably using `push()`).
function recordChoice(slug) {
    choiceList.push(slug);
    console.log('added to choice array ${slug}')
}


// Undo choice function...to go back if you need to. 
function undoChoice(){
    choiceList.pop();
    if (choiceList.length === 0){
        choiceList.push('p1');
    }
    console.log('Returning previous page ${choiceList[choiceList.length -1]}');
    return choiceList[choiceList.length -1];
}


// TODO: Create a function called `changePage()` that accepts a parameter called
// `slug` and which handles "turning the page" in three steps:
//  1. It should call the `recordChoice()` function (and give it the `slug` as
//     a parameter.
//  2. It should set the `currentPage` value by calling the `getCurrentPage()`
//     function (and give it the `slug` as a parameter).
//  3. It should invoke the `updatePage()` function (and give it the
//     `currentPage` object as a parameter).

function changePage(slug) {
    recordChoice(slug);
    currentPage = getCurrentPage(slug);
    updatePage(currentPage);
}


///////////////////////////////////////////////////
//////// Story Data //////////////////////////////


var storyData = {
    title: "Alone Aboard",
    p1: {
        text: `"Oh my, you've met with a terrible fate, haven't you, ${playerName}?" The harsh voice said. “I am the ship’s onboard computer. 
        You may not remember, but I am here to help you.”

        <br><br>`,
        reply:'"what is this place?"'
        ,
        choices: [
            {
                text: `Look Around`,
                link: 'p2'
            }, {
                text: `Go back to sleep`,
                link: 'sleepEnd'
            }
        ]
    },
    sleepEnd : {
        text: `"Leave me alone!" you yell at the voice and settle deeper into your covers. 
                <br><br>
                "As you wish," the voice answers. "I will be better not to know when they are coming. Especially when 
                there is no one to save you." 
                <br><br>
                The End.`,
        choices: [
            {
                text: `Try Again?`,
                link: 'p1'
            }
        ]
    },
    p2 : {
        text: `"Get out of bed, ${playerName}, there is not much time. The engines are damaged and power is shut off to the ship.
        both systems are necessary for us to get underway. Which one will you fix first?"
        <br><br>
        You open the door to your cabin and look left and right. One way will take you to Engineering, the other to the Airlock. The ship trembles. You’ll have to work quickly. 
        `,
        choices: [
            {
                text: `Space Walk`,
                link: 'p3'
            }, {
                text: `Engineering`,
                link: 'p4'
            }
        ]
    },
    p3 : {
        text: `“Computer, have my suit waiting at the airlock.” You say more confidently than you feel. The corridor flies beneath you as you move along the familiar hallway. Has it ever seemed so quiet?
        <br><br>
        “Your suit is ready, ${playerName}, however I must advise how dangerous this is to attempt a space walk with no support and a dwindling power supply.”
        `,
        choices: [
            {
                text: `“I’ll get the engines fixed in no time.”`,
                link: 'spaceEnd'
            }, {
                text: `“you’re probably right. To Engineering!”`,
                link: 'p4'
            }
        ]
    },
    spaceEnd : {
        text: `There is nothing around you but vacuum. Your hands grasp at nothing as the hull of the ship moves away.
        <br><br>
        "${playerName}, my sensors indicate that you are no longer on board,” The ship’s computer rings in your ears. “if you don’t reconnect there is nothing I will be able to do to save you.” 
        <br><br>
        You drift aimlessly, wishing you had stayed in bed
        <br><br>
        The End
        `,
        
        choices: [
            {
                text: `Start over?`,
                link: 'p1'
            }
        ]
    },
    p4 : {
        text: `You reach the door to Engineering. All around you the ship shudders and quakes. You open the door and rush in. There are two switches in front of you. 
        <br><br>
        “Computer, which one do I pull?”
        <br><br>
        “${playerName}, we do not have enough power to run all the systems. You will have to choose. 
        <br><br>
        If you get propulsion operational we’ll be able to fly away from here once the engines are repaired. But we will be dead in the water after 5 hours of impulse power. 
        <br><br>
        If you return power to the cryosleep chambers, we will stay here but it takes significantly less power to keep you alive. With a distress signal, maybe someone would come to pick you up, ${playerName}, you’d have almost 300 years to wait.” 
        `,
        choices: [
            {
                text: `Propulsion, let's get out of here!`,
                link: 'p5'
            }, {
                text:'Cryosleep, I want to wait this out',
                link:'cryoSleep'
            }
        ]
    },
    p5 : {
        text: `The engines hum back to life and the ship shakes more. You hear them now, the screams and shrieks, the whole ship seems to be full of them. 
        <br><br>
        “What is that?” 
        <br><br?
        “That is the crew, ${playerName} they’re waking up. They’re heading your way. What will you do?`,
        choices: [
            {
                text: `Run, get out of there!`,
                link: 'p6'
            }, {
                text: `Fight, we can't run forever!`,
                link: 'p7'
            }
        ]
    },
    cryoSleep : {
        text: `You lay back into the pod and wait for the top of the hatch to close. 
        <br><br>
        “This will be cold, ${playerName} but it will keep you safe. Hopefully we are rescued soon.” 
        <br><br>
        A blast of frigid air and then. Nothing 
                <br><br>
                The End`,
        choices: [
            {
                text: `Start over?`,
                link: 'p1'
            }
        ]
    },
    p6 : {
        text: `The screams echoing in your ears you run down the passage, arms pumping, lungs burning. 
        <br><br>
        “They are gaining on you, ${playerName},” the computer says, “You must run faster.”`,
        choices: [
            {
                text: `Out the airlock, they can't follow you outside, right?`,
                link: 'spaceEnd'
            }, {
                text: `Maybe it is time to fight`,
                link: 'p7'
            }
        ]
    },
    dropCheeseEnd : {
        text: `You open your beak to sing a lovely song, and your cheese comes
                tumbling out. Mr. Fox quickly snaps the cheese out of the air
                as it falls and gobbles it up!
                <br><br>
                The End`,
        choices: [
            {
                text: `Start over?`,
                link: 'p1'
            }
        ]
    },
    p7 : {
        text: `You stand your ground, you need a weapon. Any weapon. You grope in the dark, looking for something, anything to fight back with. 
        The sounds are coming closer now, you rip open a door, expecting a closet but it’s the door to the cargo bay. 
        <br><br>
        The lights flicker on slowly. 
        <br><br>
        “Computer, is that?”
        <br?<br>
        “The research shuttle? That is correct ${playerName}, shall I prep it for your departure?”
        <br><br>
        “Yes!” You yell, crossing the empty floor as the screams behind you grow louder.  You dive through the airlock door and rush to the bridge pulling levers and pressing buttons. Outside something hammers on the ship, the cockpit shakes under you. “Computer, open hanger doors!” You yell. 
        <br><br>
        You hear the doors open, feel the shuttle rocked as it tumbles over and falls out the ship’s gaping mouth. Slowly, the noises fade away. Slowly you realize that you aren’t alone. 
                <br><br>
                The End`,
        choices: [
            {
                text: `Play again?`,
                link: 'p1'
            }
        ]
    }
};

///////////////////////////////////////////////////
//////// Main Script /////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// This script runs the game.                                                             //
////////////////////////////////////////////////////////////////////////////////

let title = document.querySelector('#story-title');
title.innerHTML = storyData.title;

let pageContent = document.querySelector('#story-text');
// let pageContent = document.querySelector('#story-reply');
let choicesUL = document.querySelector('#choices');

function updatePage(page) {
    pageContent.innerHTML = page.text;
    choicesUL.innerHTML = '';
    for (choice of page.choices){
        let newLI = document.createElement('li');
        newLI.innerHTML = choice.text;
        newLI.setAttribute('data-slug', choice.link);
        choicesUL.appendChild(newLI);
    }
    addEventListeners();
}

function addEventListeners(){
    let choices = document.querySelectorAll('#choices li');
    for (choice of choices){
        choice.addEventListener('click', function(e){
            console.log(`Moving to page: ${e.target.dataset.slug}`);
            changePage(e.target.dataset.slug);
        })
    }
}

let undo = document.querySelector('#undo');
undo.addEventListener('click', function(e){
    console.log('Undoing last choice.');
    let slug = undoChoice();
    currentPage = getCurrentPage(slug);
    updatePage(currentPage);
})

currentPage = storyData.p1;
updatePage(currentPage);

