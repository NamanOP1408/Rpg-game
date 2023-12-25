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
    { name: 'Dragon', level: 80, health: 300 },
    { name: 'Goblin', level: 30, health: 50 },
    { name: 'Spider', level: 10, health: 30 }
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
    
    },
    {
        name: 'Win',
        buttonText: ['Go to Town Square', 'Go to Town Square', 'Go to Town Square'],
        buttonFunction: [goTown, goTown, easterEgg],
        text: 'The monster "screams and dies!" You won the fight. You find some Xp and Gold.'
    },
    {
        name: 'Lose',
        buttonText: ['Restart', 'Restart', 'Restart'],
        buttonFunction: [restart, restart, restart],
        text: 'You died. Game Over.💀☠️'
    
    },
    {
        name: 'Win Game',
        buttonText: ['Restart', 'Restart', 'Restart'],
        buttonFunction: [restart, restart, restart],
        text: 'You killed the dragon and saved the world. You won the game!🏆'
    },
    {
        name: 'Easter Egg',
        buttonText: ['Pick 2', 'Pick 8', 'Go to Town Square'],
        buttonFunction: [pickTwo, pickEight, goTown],
        text: 'You found the Easter Egg! Pick a number between 1 and 10.'
    
    }
];


button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(locations){
    monsterStats.style.display = 'none';
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
    monsterName.textContent = monsters[fighting].name;
    monsterHealthText.textContent = monsterHealth;
}

function attack(){
    text.innerText = 'The' + monsters[fighting].name + ' attacks you,';
    text.innerText += ' You attack the ' + monsters[fighting].name + ' with your ' + weapons[currentWeapon].name + '.';
    health -= getMonsterAttackValue(monsters[fighting].level);
    if (isMonsterHit()){
        monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;
    } else {
        text.innerText += ' You missed the ' + monsters[fighting].name + '.';
    }
    healthText.textContent = health;
    monsterHealthText.textContent = monsterHealth; 
    if (monsterHealth <= 0){
        if(fighting === 0){
            winGame();
        } else{
            win();
        }
    } else if (health <= 0){
        lose();
    }

    if(Math.random() <= .1 && inventory.length !== 1){
        text.innerText += ' Your ' + inventory.pop() + ' broke.';
        currentWeapon--;
    }

}

function getMonsterAttackValue(level){
    return Math.floor(Math.random() * level) + 1;

}

function isMonsterHit(){
    return Math.random() > 0.5 || health < 50;
}

function dodge(){
    text.innerText = 'You dodge the ' + monsters[fighting].name  + "s attack.";
}

function win(){
    text.textContent = 'You killed the ' + monsters[fighting].name + ' and gained ' + monsters[fighting].level + ' xp.';
    xp += monsters[fighting].level;
    xpText.textContent = xp;
    gold += monsters[fighting].level * 2;
    goldText.textContent = gold;
    update(locations[4]);
}

function lose(){
    text.textContent = 'You died';
    update(locations[5]);
}

function winGame(){
    update(locations[6]);

}

function restart(){
    xp = 0;
    health = 100;
    gold = 50;
    xpText.textContent = xp;
    healthText.textContent = health;
    goldText.textContent = gold;
    currentWeapon = 0;
    fighting;
    monsterHealth;
    inventory = ['Wooden Sword'];
    goTown();
}

function easterEgg(){
    update(locations[7]);
}

function pickTwo(){
    pick(2);
}

function pickEight(){
    pick(8);
}

function pick(guess){
    let number = [];
    while(number.length < 10){
        let random = Math.floor(Math.random() * 10) + 1;
        number.push(random);
    }
    text.innerText = 'You picked ' + guess + '. Here are the numbers:\n';
    for(let i = 0; i < 10; i++){
        text.innerText += number[i] + '\n';
    }
    if(number.indexOf(guess) !== -1){
        text.innerText += 'Right! You won 100 gold!';
        gold += 100;
        goldText.textContent = gold;
    } else {
        text.innerText += 'Wrong! You lost 50 health!';
        health -= 50;
        healthText.textContent = health;
        if(health <= 0){
            lose();
        }
    }
}