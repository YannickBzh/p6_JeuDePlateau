const numberOfCases = 9;
const numberOflines = 9;
const numberOfCaseGrey = 10;
const $tedPlayer = $('.player-1')
let whoIsPlaying = 'player-1';

let weapons = ["weaponTie", "weaponUmbrella", "weaponHorn", "weaponPineapple"]

// $game = Noeud HTML (Html Element)
const $game = $('.game');

// Génération de la board
for (let j = 0; j <= numberOflines; j++) {
    const $row = $('<div class="row"></div>');
    for (let i = 0; i <= numberOfCases; i++) {
        const $case = document.createElement("div");
        $case.className = `case x-${i} y-${j} empty`;
        $row[0].appendChild($case);
    }
    $game.append($row);
}


// Génération des cases inatteignables 
for (let i = 1; i <= numberOfCaseGrey; i++) {
    const $selectAllCases = $('.empty');
    let randomNumber = Math.floor((Math.random() * $selectAllCases.length - 1) + 1);
    $selectAllCases[randomNumber].classList.add("caseGrey");
    $selectAllCases[randomNumber].classList.remove("empty");
}

// Fonction permettant d'afficher aléatoirement sur la board les players et les weapons
function display(name) {
    const $selectAllCases = $('.empty');
    let randomNumber = Math.floor((Math.random() * $selectAllCases.length - 1) + 1);
    $selectAllCases[randomNumber].classList.add(name);
    $selectAllCases[randomNumber].classList.remove("empty");
}

// Affiche le player Ted
display("player-1")

// Affiche le player Barney
display("player-2")

// Affiche weapon tie
display("weaponTie")

// Affiche weapon umbrella
display("weaponUmbrella")

// Affiche weapon horn
display("weaponHorn")

// Affiche weapon pineapple
display("weaponPineapple")

// Chargement des cases adjacentes atteignables par le joueur 1
window.onload = highlightPlayer1();

// Fonction pour sortir les numéros d'abscisse et d'ordonnée du player
function whereIsMyPlayer(classPlayer) {
    playerPosition = $(classPlayer); // Position du player
    playerClass = playerPosition.attr('class'); // je sors les classes du player
    playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
    playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
    cases = $('.case'); // Je sélectionne toutes mes cases
}


// Fonction pour les highlights vers le haut
function highlightTop() {
    for (let i = 1; i <= 3; i++) {
        let topCaseOrdonnee = (parseInt(playerOrdonnee) - i);
        for (let j = 0; j < cases.length; j++) {
            let casesAbs = cases[j].classList[1]; // je sors la classe des abscisses de cases
            let casesOrd = cases[j].classList[2]; // je sors la classe des ordonnées de cases
            let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
            let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
            if ((casesOrdonnee == topCaseOrdonnee) && (casesAbscisse == parseInt(playerAbscisse))) {
                if (cases[j].classList.contains('caseGrey')) {
                    return;
                } else {
                    cases[j].classList.remove('empty');
                    cases[j].classList.add("caseYouCanGo");
                }
            }
        }
    }
}

// Fonction pour les highlights vers le bas
function highlightBottom() {
    for (let i = 1; i <= 3; i++) {
        let bottomCaseOrdonnee = (parseInt(playerOrdonnee) + i);
        for (let j = 0; j < cases.length; j++) {
            let casesAbs = cases[j].classList[1]; // je sors la classe des abscisses de cases
            let casesOrd = cases[j].classList[2]; // je sors la classe des ordonnées de cases
            let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
            let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
            if ((casesOrdonnee == bottomCaseOrdonnee) && (casesAbscisse == parseInt(playerAbscisse))) {
                if (cases[j].classList.contains('caseGrey')) {
                    return;
                } else {
                    cases[j].classList.remove('empty');
                    cases[j].classList.add("caseYouCanGo");
                }
            }
        }
    }
}

// Fonction pour les highlights vers la gauche
function highlightLeft() {
    for (let i = 1; i <= 3; i++) {
        let leftCaseAbscisse = (parseInt(playerAbscisse) - i);
        for (let j = 0; j < cases.length; j++) {
            let casesAbs = cases[j].classList[1]; // je sors la classe des abscisses de cases
            let casesOrd = cases[j].classList[2]; // je sors la classe des ordonnées de cases
            let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
            let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
            if ((casesAbscisse == leftCaseAbscisse) && (casesOrdonnee == parseInt(playerOrdonnee))) {
                if (cases[j].classList.contains('caseGrey')) {
                    return;
                } else {
                    cases[j].classList.remove('empty');
                    cases[j].classList.add("caseYouCanGo");
                }
            }
        }
    }
}

// Fonction pour les highlights vers la droite
function highlightRight() {
    for (let i = 1; i <= 3; i++) {
        let rightCaseAbscisse = (parseInt(playerAbscisse) + i);
        for (let j = 0; j < cases.length; j++) {
            let casesAbs = cases[j].classList[1]; // je sors la classe des abscisses de cases
            let casesOrd = cases[j].classList[2]; // je sors la classe des ordonnées de cases
            let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
            let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
            if ((casesAbscisse == rightCaseAbscisse) && (casesOrdonnee == parseInt(playerOrdonnee))) {
                if (cases[j].classList.contains('caseGrey')) {
                    return;
                } else {
                    cases[j].classList.remove('empty');
                    cases[j].classList.add("caseYouCanGo");
                }
            }
        }
    }
}

// Fonction pour supprimer les highlights après mouvement du joueur précédent
function eraseHighlight() {
    for (let j = 0; j < cases.length; j++) {
        let casesAbs = cases[j].classList[1]; // je sors la classe des abscisses de cases
        let casesOrd = cases[j].classList[2]; // je sors la classe des ordonnées de cases
        let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
        let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
        cases[j].classList.remove("caseYouCanGo");
        cases[j].classList.add('empty')
    }
}

// Fonction highlights Player-1
function highlightPlayer1() {
    whereIsMyPlayer('.player-1');
    highlightTop()
    highlightBottom()
    highlightLeft()
    highlightRight()
}

// Fonction highlights Player-2
function highlightPlayer2() {
    whereIsMyPlayer('.player-2');
    highlightTop()
    highlightBottom()
    highlightLeft()
    highlightRight()
}

// Fonction pour déplacer le player
function movePLayer($this, $player, playerName) {
    $this.removeClass('empty');
    $player.removeClass(playerName);
    $player.addClass('empty');
    $this.addClass(playerName);
    eraseHighlight()
}

// Fonction pour gérer le tour-par-tour
$('.case').click(function () {
    if (($(this).hasClass('caseYouCanGo')) && ((!$(this).hasClass('player-1')) && (!$(this).hasClass('player-2')) && (!$(this).hasClass('caseGrey')))) {
        const $player1 = $('.player-1');
        const $player2 = $('.player-2');
        if ((whoIsPlaying === 'player-1')) {
            const $that = $(this);
            movePLayer($that, $player1, whoIsPlaying);
            highlightPlayer2()
            whoIsPlaying = 'player-2';
        } else if ((whoIsPlaying === 'player-2')) {
            const $that = $(this);
            movePLayer($that, $player2, whoIsPlaying);
            highlightPlayer1()
            whoIsPlaying = 'player-1';
        }
    }
})



/**
 * To Do
 *
 * 1 - Empêcher les caseYouCanGo si armes/joueurs/blocs-inatteignables à proximité DONE
 * 2 - Récupérer une weapon, déposer celle en sa possession (Ne pas hésiter à créer un nouveau dossier si trop complexe)
 * 3 - Commencer à penser en POO
 */