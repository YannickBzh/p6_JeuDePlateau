
let whoIsPlaying = 'player-1';
let playerPosition = "";
let playerClass = "";
let playerAbscisse = "";
let playerOrdonnee = "";
let cases = "";
let newClass = "";
let newAbscisse = "";
let newOrdonnee = "";

window.onload = colorCases2();
window.onload = colorCases();



function movePLayer($this, $player, playerName) {
    $this.removeClass('empty');
    $player.removeClass(playerName);
    $player.addClass('empty');
    $this.addClass(playerName);
}


function whereIsMyPlayer(classPlayer) {
    playerPosition = $(classPlayer); // Position du player
    playerClass = playerPosition.attr('class'); // je sors les classes du player
    playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
    playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
    cases = $('.case'); // Je sélectionne toutes mes cases
}


function getPlayerClassAndClicClass(context, classPlayer) {
    newClass = context.attr('class'); // je sors les classes de la case cliquée
    newAbscisse = newClass.substring(7, 9); // je sors l'abscisse de la case cliquée
    newOrdonnee = newClass.substring(11, 13); // je sors l'ordonnée de la case cliquée
    playerPosition = $(classPlayer); // Position du player
    playerClass = playerPosition.attr('class'); // je sors les classes du player
    playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
    playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
}


$('.case').click(function () {
    const $player1 = $('.player-1');
    const $player2 = $('.player-2');
    if (whoIsPlaying === 'player-1') {
        const $that = $(this);
        //handleMove($that, $player1, whoIsPlaying);
        movePLayer($that, $player1, whoIsPlaying);
        colorCases2()
        whoIsPlaying = 'player-2';
    } else {
        const $that = $(this);
        //handleMove($that, $player2, whoIsPlaying);
        movePLayer($that, $player2, whoIsPlaying);
        colorCases()
        whoIsPlaying = 'player-1';
    }
})

/* Player 1*/

$('.case').click(function () {
    if ($(this).hasClass('caseYouCanGo')) {
        getPlayerClassAndClicClass($(this), '.player-1');
        for (let i = 1; i <= 2; i++) {
            if ((newAbscisse == parseInt(playerAbscisse) + i) && (newOrdonnee == parseInt(playerOrdonnee)) ||
                (newOrdonnee == parseInt(playerOrdonnee) + i) && (newAbscisse == parseInt(playerAbscisse)) ||
                (newAbscisse == parseInt(playerAbscisse) - i) && (newOrdonnee == parseInt(playerOrdonnee)) ||
                (newOrdonnee == parseInt(playerOrdonnee) - i) && (newAbscisse == parseInt(playerAbscisse))) {
                let $player1 = $('.player-1');
                const $that = $(this);
                movePLayer($that, $player1, whoIsPlaying);
                colorCases()
                //whoseTurn();
            }
        }
    }
})

function colorCases() {
    whereIsMyPlayer('.player-1');
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
            cases[j].classList.add('empty');
        }
    }
}


/* Player 2 */

$('.case').click(function () {
    if ($(this).hasClass('caseYouCanGo')) {
        getPlayerClassAndClicClass($(this), '.player-2');
        for (let i = 1; i <= 2; i++) {
            if ((newAbscisse == parseInt(playerAbscisse) + i) && (newOrdonnee == parseInt(playerOrdonnee)) ||
                (newOrdonnee == parseInt(playerOrdonnee) + i) && (newAbscisse == parseInt(playerAbscisse)) ||
                (newAbscisse == parseInt(playerAbscisse) - i) && (newOrdonnee == parseInt(playerOrdonnee)) ||
                (newOrdonnee == parseInt(playerOrdonnee) - i) && (newAbscisse == parseInt(playerAbscisse))) {
                let $player2 = $('.player-2');
                let whoIsPlaying = 'player-2';
                const $that = $(this);
                movePLayer($that, $player2, whoIsPlaying);
                colorCases2()
                //whoseTurn()
            }
        }
    }
})


function colorCases2() {
    whereIsMyPlayer('.player-2');
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





/**
 * To Do next:
 *  - Refactorisation
 *      -> Créer de plus petites fonctions pour tes différentes actions plus simples à manipuler.
 *      -> tu peux t'inspirer de handleMove
 *
 *  - Intégration de la partie déplacement/hilight avec la partie tour/tour.
 */