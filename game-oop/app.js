const player1 = new Player("Ted", "player-1", "weaponTie", 100, 10);
const player2 = new Player("Barney", "player-2", "weaponTie", 100, 10);

const weaponTie = new Weapons("Weapon Tie", 10, "weaponTie");
const weaponUmbrella = new Weapons("Weapon Umbrella", 20, "weaponUmbrella");
const weaponHorn = new Weapons("Weapon Horn", 20, "weaponHorn");
const weaponPineapple = new Weapons("Weapon Pineapple", 30, "weaponPineapple");

const weapons = [weaponTie, weaponUmbrella, weaponHorn, weaponPineapple];


const board = new Board(9, 9, 10, $('.game'), [player1, player2], [weaponTie, weaponUmbrella, weaponHorn, weaponPineapple]);

// Initialisation du jeu
board.generatedBoard();
board.generatedGreyCases();
board.generatePlayersAndWeapons();
board.movingGoat();
const newGame = new Game([player1, player2]);

// newGame.blockClosePlayersAtLaunch();
newGame.highlightPlayer(player1);
newGame.handleClickOnCase();
newGame.fightIsComing();
newGame.reloadGame();