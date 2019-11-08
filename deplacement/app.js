
let whoIsPlaying = 'player-1'
let playerPosition = "";
let playerClass = "";
let playerAbscisse = "";
let playerOrdonnee = "";
let cases = "";
// let newClass = "";
// let newAbscisse = "";
// let newOrdonnee = "";
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
    playerOrdonnee = playerClass.substring(11, 13) // je sors l'ordonnée du player
    cases = $('.case'); // Je sélectionne toutes mes cases
  }


// function getPlayerClassAndClicClass(classPlayer) {
    // let newClass = $(this).attr('class'); // je sors les classes de la case cliquée
    // let newAbscisse = newClass.substring(7, 9); // je sors l'abscisse de la case cliquée
    // let newOrdonnee = newClass.substring(11, 13); // je sors l'ordonnée de la case cliquée
    // let playerPosition = $(classPlayer); // Position du player
    // let playerClass = playerPosition.attr('class'); // je sors les classes du player
    // let playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
    // let playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
// }

/* Player 1*/

$('.case').click(function () {
    if ($(this).hasClass('caseYouCanGo')) {
        let newClass = $(this).attr('class'); // je sors les classes de la case cliquée
        let newAbscisse = newClass.substring(7, 9); // je sors l'abscisse de la case cliquée
        let newOrdonnee = newClass.substring(11, 13); // je sors l'ordonnée de la case cliquée
        let playerPosition = $('.player-1'); // Position du player
        let playerClass = playerPosition.attr('class'); // je sors les classes du player
        let playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
        let playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
        for (let i = 1; i <= 2; i++) {
            if ((newAbscisse == parseInt(playerAbscisse) + i) && (newOrdonnee == parseInt(playerOrdonnee)) ||
                (newOrdonnee == parseInt(playerOrdonnee) + i) && (newAbscisse == parseInt(playerAbscisse)) ||
                (newAbscisse == parseInt(playerAbscisse) - i) && (newOrdonnee == parseInt(playerOrdonnee)) ||
                (newOrdonnee == parseInt(playerOrdonnee) - i) && (newAbscisse == parseInt(playerAbscisse))) {
                let $player1 = $('.player-1');
                const $that = $(this)
                movePLayer($that, $player1, whoIsPlaying)
                colorCases();
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
            cases[j].classList.add('empty')
        }
    }
}


/* Player 2 */

$('.case').click(function () {
    if ($(this).hasClass('caseYouCanGo')) {
        let newClass = $(this).attr('class'); // je sors les classes de la case cliquée
        let newAbscisse = newClass.substring(7, 9); // je sors l'abscisse de la case cliquée
        let newOrdonnee = newClass.substring(11, 13); // je sors l'ordonnée de la case cliquée
        let player2Position = $('.player-2'); // Position du player
        let player2Class = player2Position.attr('class'); // je sors les classes du player
        let player2Abscisse = player2Class.substring(7, 9); // je sors l'abscisse du player
        let player2Ordonnee = player2Class.substring(11, 13); // je sors l'ordonnée du player
        for (let i = 1; i <= 2; i++) {
            if ((newAbscisse == parseInt(player2Abscisse) + i) && (newOrdonnee == parseInt(player2Ordonnee)) ||
                (newOrdonnee == parseInt(player2Ordonnee) + i) && (newAbscisse == parseInt(player2Abscisse)) ||
                (newAbscisse == parseInt(player2Abscisse) - i) && (newOrdonnee == parseInt(player2Ordonnee)) ||
                (newOrdonnee == parseInt(player2Ordonnee) - i) && (newAbscisse == parseInt(player2Abscisse))) {
                let $player2 = $('.player-2');
                let whoIsPlaying = 'player-2'
                const $that = $(this)
                movePLayer($that, $player2, whoIsPlaying)
                colorCases();
            }
        }
    }
})


function colorCases() {
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
 * DONE : gérer le déplacement : d'abord sur une case adjacente, puis sur deux cases adjacentes
 *
 * TODO :
 *  -> gérer la surbrillance
 *  -> ajouter un deuxième carré (comme player-2) et gérer le tour par tour
 *      -> indice : variable globale (pas une constante) qui indique quel player est en train de jouer
 *      -> ne pas hésiter à repartir sur modèle simplifié si tu coinces avec le reste
 *  -> commence à prendre du recul sur ce qu'on fait pour comprendre la stratégie de création de classe
 *
 * RESSOURCES :
 *  -> méthode filter JavaScript
 *  -> méthode literal
 */