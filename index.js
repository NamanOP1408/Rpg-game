const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const text = document.querySelector('#text');

let xp = 0;
let health = 100;
let gold = 50;

const locations = [
    {
        name: 'Town square',
        buttonText: ['Go to Store', 'Go to Cave', 'Fight Dragon'],
        buttonFunction: [goStore, goCave, goFight],
        text: 'You are in the town quare. Where do you want to go?' 
    },
    {
        name: 'Cave',
        buttonText: 'Go to Cave',
        buttonFunction: goCave,
        text: 'Welcome to the Cave!'
    },
    {
        name: 'Fight',
        buttonText: 'Go to Fight',
        buttonFunction: goFight,
        text: 'Welcome to the Fight!'
    }
];


button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = goFight;

function update(locations){
    button1.textContent = locations.buttonText[0];
    button2.textContent = locations.buttonText[1];
    button3.textContent = locations.buttonText[2];
    button1.onclick = locations.buttonFunction[0];
    button2.onclick = locations.buttonFunction[1];
    button3.onclick = locations.buttonFunction[2];

}
