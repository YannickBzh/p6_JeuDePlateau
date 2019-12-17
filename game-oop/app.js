const player1 = new Player("Ted", "player-1", "weapon Tie");
const player2 = new Player("Barney", "player-2", "weapon Tie");

const weaponTie = new Weapons("Weapon Tie", 5, "weaponTie")
const weaponUmbrella = new Weapons("weapon Umbrella", 10, "weaponUmbrella")
const weaponHorn = new Weapons("weapon Horn", 15, "weaponHorn")
const weaponPineapple = new Weapons("weapon Pineapple", 20, "weaponPineapple")


const board = new Board(9, 9, 10, $('.game'), [player1, player2], [weaponTie, weaponUmbrella, weaponHorn, weaponPineapple]);

// Initialisation du jeu
board.generatedBoard()
board.generatedGreyCases()
board.generatePlayersAndWeapons()

const newGame = new Game([player1, player2])

$('.case').click(function () {
    newGame.whoseTurn($(this));
});
newGame.highlightPlayer1();
