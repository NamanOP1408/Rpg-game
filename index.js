const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const text = document.querySelector('#text');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector('#monsterHealthText');

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;

let inventory = ['Wooden Sword'];

const weapons = [
    { name: 'Wooden Sword', power: 5 },
    { name: 'Axe', power: 30 },
    { name: 'Spear', power: 50 },
    { name: 'Legendary sword', power: 100 }
];

const monsters = [
    { name: 'Dragon', level: 20, health: 200 },
    { name: 'Goblin', level: 10, health: 50 },
    { name: 'Spider', level: 3, health: 30 }
];



const locations = [
    {
        name: 'Town square',
        buttonText: ['Go to Store', 'Go to Cave', 'Fight Dragon'],
        buttonFunction: [goStore, goCave, goFight],
        text: 'You are in the town quare. Where do you want to go?' 
    },
    {
        name: 'Store',
        buttonText: ['buy health (10 gold)', 'buy weapon (30 gold)', 'Go to Town Square'],
        buttonFunction: [buyHealth, buyWeapon, goTown],
        text: 'You are in the town quare. Where do you want to go?'
    },
    {
        name: 'Cave',
        buttonText: ['Fight Spider', 'Fight Goblin', 'Go to Town Square'],
        buttonFunction: [fightSpider, fightGoblin, goTown],
        text: 'You are in the cave, you see something moving in the shadows. What do you do?'
    },
    {
        name: 'Fight',
        buttonText: ['Attack', 'Dodge', 'Run'],
        buttonFunction: [attack, dodge, goTown],
        text: 'You are fighting a monster. What do you do?'
    
    }
];


button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(locations){
    button1.textContent = locations.buttonText[0];
    button2.textContent = locations.buttonText[1];
    button3.textContent = locations.buttonText[2];
    button1.onclick = locations.buttonFunction[0];
    button2.onclick = locations.buttonFunction[1];
    button3.onclick = locations.buttonFunction[2];
    text.textContent = locations.text;
}

function goTown(){
    update(locations[0]);
}

function goStore(){
    update(locations[1]);
}
function goCave(){        
    update(locations[2]);
}   

function buyHealth(){
    if(gold >= 10){
        gold -= 10;
        health += 10;
        goldText.textContent = gold;
        healthText.textContent = health;
    } else {
        text.textContent = 'Not enough gold';
    }
}

function buyWeapon(){
    if (currentWeapon < weapons.length - 1){
        if(gold >= 30){
            gold -= 30;
            currentWeapon++;
            goldText.textContent = gold;
            inventory.push(weapons[currentWeapon].name);
            text.textContent = 'You bought a ' + weapons[currentWeapon].name;
        } else {
            text.textContent = 'Not enough gold';
        }
    }
    else {
        text.textContent = 'You already have the best weapon';
    }
}


function fightSpider(){
    fighting = 2;
    goFight();
}

function fightGoblin(){
    fighting = 1;
    goFight();  
}

function fightDragon(){
    fighting = 0;
    goFight();
}

function goFight(){
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = 'block';
}

function attack(){

}

function dodge(){

}