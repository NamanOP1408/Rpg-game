# DRAGON HUNTER

Welcome to the Adventure Game! This simple text-based game allows you to explore different locations, fight monsters, and manage your character's stats. Here's a quick overview of the game code:

## Game Mechanics

### Player Stats
- **XP (Experience Points):** Used to track your character's progress.
- **Health:** Represents your character's well-being. If it reaches zero, the game ends.
- **Gold:** The in-game currency. Use it to buy health, weapons, and more.

### Weapons
You start with a "Wooden Sword" and can upgrade to more powerful weapons as you progress:
- Wooden Sword (Power: 5)
- Axe (Power: 30)
- Spear (Power: 50)
- Legendary Sword (Power: 100)

### Monsters
Fight various monsters with different levels and health:
- Dragon (Level: 20, Health: 200)
- Goblin (Level: 10, Health: 50)
- Spider (Level: 3, Health: 30)

## Locations
The game takes place in different locations with specific actions:
1. **Town Square**
   - Options: Go to Store, Go to Cave, Fight Dragon.

2. **Store**
   - Options: Buy Health (10 Gold), Buy Weapon (30 Gold), Go to Town Square.

3. **Cave**
   - Options: Fight Spider, Fight Goblin, Go to Town Square.

## How to Play

1. Open the `index.html` file in your browser to start the game.

2. You begin in the Town Square. From there, you can navigate to different locations, such as the Store, Cave, or engage in a fight.

3. At the Store, you can buy health or upgrade your weapon by spending gold.

4. In the Cave, you can choose to fight various monsters, each with its own level and health.

5. During a fight, you have options to attack, dodge, or run. Your success depends on your weapon and a bit of luck!

6. If you win a fight, you gain XP and gold. If you lose, you may restart or encounter special events.

7. Discover the Easter Egg by picking a number between 1 and 10.

8. The ultimate goal is to defeat the Dragon and win the game!

## Code Overview
- The main script is in the `index.js` file.
- Player stats, weapons, monsters, and locations are defined at the beginning.
- Functions handle different game actions, such as moving between locations, buying items, and initiating fights.

## Game Flow
- Start in the Town Square.
- Choose actions based on available options.
- Manage your health, gold, and inventory.
- Fight monsters strategically to gain XP.

## Code Structure

- The game logic is implemented in JavaScript.
- The `locations` array defines different game locations with buttons and associated functions.
- Player stats, weapons, monsters, and inventory are initialized.
- Functions handle various game actions, such as updating the game view, handling fights, and managing player decisions.

## How to Contribute
Feel free to enhance the game by adding new features, locations, or improving existing functionality. Pull requests are welcome!

Have a great time playing the RPG Adventure Game! 🎮

## To-Do
- Expand the game with more locations, monsters, and items.
- Add a scoring system or achievements for additional challenges.

### credit
- FreeCodeCamp for aspiration!

Have fun playing the Adventure Game! If you encounter any issues or have suggestions, feel free to contribute or provide feedback. Happy adventuring!
