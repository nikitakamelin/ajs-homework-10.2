import Character from './js/Character';
import Team from './js/Team';

const character1 = new Character('Alex', 'Swordsman', 50, 50);
const character2 = new Character('Anna', 'Bowman', 60, 40);
const character3 = new Character('Oleg', 'Magician', 40, 60);
const character4 = new Character('Tanya', 'Undead', 10, 10);

const team = new Team();
const characters = [character1, character2, character3, character4];
team.addAll(characters);

for (const character of team) {
  console.log(character);
}
