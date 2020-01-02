const player1 = new Player("Ted", "player-1", "weaponTie");
const player2 = new Player("Barney", "player-2", "weaponTie");

const weaponTie = new Weapons("Weapon Tie", 10, "weaponTie");
const weaponUmbrella = new Weapons("weapon Umbrella", 20, "weaponUmbrella");
const weaponHorn = new Weapons("weapon Horn", 20, "weaponHorn");
const weaponPineapple = new Weapons("weapon Pineapple", 30, "weaponPineapple");


const board = new Board(9, 9, 10, $('.game'), [player1, player2], [weaponTie, weaponUmbrella, weaponHorn, weaponPineapple]);

// Initialisation du jeu
board.generatedBoard();
board.generatedGreyCases();
board.generatePlayersAndWeapons();

const newGame = new Game([player1, player2]);

newGame.highlightPlayer1();
newGame.handleClickOnCase();
