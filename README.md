# Adventure Game README

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
1. Open `index.html` in your browser.
2. Click buttons to navigate through locations and make decisions.
3. Fight monsters, buy items, and manage your resources wisely.

## Code Overview
- The main script is in the `adventure.js` file.
- Player stats, weapons, monsters, and locations are defined at the beginning.
- Functions handle different game actions, such as moving between locations, buying items, and initiating fights.

## Game Flow
- Start in the Town Square.
- Choose actions based on available options.
- Manage your health, gold, and inventory.
- Fight monsters strategically to gain XP.

## To-Do
- Expand the game with more locations, monsters, and items.
- Add a scoring system or achievements for additional challenges.

Have fun playing the Adventure Game! If you encounter any issues or have suggestions, feel free to contribute or provide feedback. Happy adventuring!
