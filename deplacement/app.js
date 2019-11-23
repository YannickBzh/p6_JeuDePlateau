
let whoIsPlaying = 'player-1';
let playerPosition = "";
let playerClass = "";
let playerAbscisse = "";
let playerOrdonnee = "";
let cases = "";
let newClass = "";
let newAbscisse = "";
let newOrdonnee = "";

window.onload = colorCasesPlayer2();
window.onload = colorCasesPlayer1();


// Fonction pour sortir les numéros d'abscisse et d'ordonnée du player
function whereIsMyPlayer(classPlayer) {
    playerPosition = $(classPlayer); // Position du player
    playerClass = playerPosition.attr('class'); // je sors les classes du player
    playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
    playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
    cases = $('.case'); // Je sélectionne toutes mes cases
}

// Fonction pour sortir la position de la case cliquée et la position du player
function getPlayerClassAndClicClass(context, classPlayer) {
    newClass = context.attr('class'); // je sors les classes de la case cliquée
    newAbscisse = newClass.substring(7, 9); // je sors l'abscisse de la case cliquée
    newOrdonnee = newClass.substring(11, 13); // je sors l'ordonnée de la case cliquée
    playerPosition = $(classPlayer); // Position du player
    playerClass = playerPosition.attr('class'); // je sors les classes du player
    playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
    playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
}

// Fonction pour griser les cases adjacentes
function caseYouCanGo() {
    for (let j = 0; j < cases.length; j++) {
        let casesAbs = cases[j].classList[1]; // je sors la classe des abscisses de cases
        let casesOrd = cases[j].classList[2]; // je sors la classe des ordonnées de cases
        let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
        let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
        if ((casesAbscisse == parseInt(playerAbscisse) + 1) && (casesOrdonnee == parseInt(playerOrdonnee)) ||
            (casesAbscisse == parseInt(playerAbscisse) + 2) && (casesOrdonnee == parseInt(playerOrdonnee)) ||
            (casesOrdonnee == parseInt(playerOrdonnee) + 1) && (casesAbscisse == parseInt(playerAbscisse)) ||
            (casesOrdonnee == parseInt(playerOrdonnee) + 2) && (casesAbscisse == parseInt(playerAbscisse)) ||
            (casesAbscisse == parseInt(playerAbscisse) - 1) && (casesOrdonnee == parseInt(playerOrdonnee)) ||
            (casesAbscisse == parseInt(playerAbscisse) - 2) && (casesOrdonnee == parseInt(playerOrdonnee)) ||
            (casesOrdonnee == parseInt(playerOrdonnee) - 1) && (casesAbscisse == parseInt(playerAbscisse)) ||
            (casesOrdonnee == parseInt(playerOrdonnee) - 2) && (casesAbscisse == parseInt(playerAbscisse))) {
            cases[j].classList.remove('empty');
            cases[j].classList.add("caseYouCanGo");
        } else {
            cases[j].classList.remove("caseYouCanGo");
            cases[j].classList.add('empty')
        }
    }
}

// Fonction pour griser les cases adjacentes au Player-1
function colorCasesPlayer1() {
    whereIsMyPlayer('.player-1');
    caseYouCanGo()
}

// Fonction pour griser les cases adjacentes au Player-2
function colorCasesPlayer2() {
    whereIsMyPlayer('.player-2');
    caseYouCanGo()
}

// Fonction pour déplacer le player
function movePLayer($this, $player, playerName) {
    $this.removeClass('empty');
    $player.removeClass(playerName);
    $player.addClass('empty');
    $this.addClass(playerName);
}

// Fonction pour gérer le tour-par-tour
$('.case').click(function () {
    if (($(this).hasClass('caseYouCanGo')) && ((!$(this).hasClass('player-1')) && (!$(this).hasClass('player-2')))) {
        const $player1 = $('.player-1');
        const $player2 = $('.player-2');
        if ((whoIsPlaying === 'player-1')) {
            const $that = $(this);
            movePLayer($that, $player1, whoIsPlaying);
            colorCasesPlayer2()
            whoIsPlaying = 'player-2';
        } else if ((whoIsPlaying === 'player-2')) {
            const $that = $(this);
            movePLayer($that, $player2, whoIsPlaying);
            colorCasesPlayer1()
            whoIsPlaying = 'player-1';
        }
    }
})

/* Player 1*/

// Autorise le déplacement du player-1 sur 2 cases adjacentes
$('.case').click(function () {
    if ($(this).hasClass('caseYouCanGo')) {
        getPlayerClassAndClicClass($(this), '.player-1');
        for (let i = 1; i <= 2; i++) {
            if ((newAbscisse == parseInt(playerAbscisse) + i) && (newOrdonnee == parseInt(playerOrdonnee)) ||
                (newOrdonnee == parseInt(playerOrdonnee) + i) && (newAbscisse == parseInt(playerAbscisse)) ||
                (newAbscisse == parseInt(playerAbscisse) - i) && (newOrdonnee == parseInt(playerOrdonnee)) ||
                (newOrdonnee == parseInt(playerOrdonnee) - i) && (newAbscisse == parseInt(playerAbscisse))) {
                colorCasesPlayer1()
            }
        }
    }
})


/* Player 2 */

// Autorise le déplacement du player-2 sur 2 cases adjacentes
$('.case').click(function () {
    if ($(this).hasClass('caseYouCanGo')) {
        getPlayerClassAndClicClass($(this), '.player-2');
        for (let i = 1; i <= 2; i++) {
            if ((newAbscisse == parseInt(playerAbscisse) + i) && (newOrdonnee == parseInt(playerOrdonnee)) ||
                (newOrdonnee == parseInt(playerOrdonnee) + i) && (newAbscisse == parseInt(playerAbscisse)) ||
                (newAbscisse == parseInt(playerAbscisse) - i) && (newOrdonnee == parseInt(playerOrdonnee)) ||
                (newOrdonnee == parseInt(playerOrdonnee) - i) && (newAbscisse == parseInt(playerAbscisse))) {
                colorCasesPlayer2()
            }
        }
    }
})


/**
 * To Do next:
 *  - Refactorisation
 *      -> Créer de plus petites fonctions pour tes différentes actions plus simples à manipuler.
 *      -> tu peux t'inspirer de handleMove
 *
 *  - Intégration de la partie déplacement/hilight avec la partie tour/tour.
 */