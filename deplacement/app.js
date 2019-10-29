
window.onload = colorCases();

$('.case').click(function () {
    if ($(this).hasClass('caseYouCanGo')) {
        let newClass = $(this).attr('class'); // je sors les classes de la case cliquée
        let newAbscisse = newClass.substring(7, 9); // je sors l'abscisse de la case cliquée
        let newOrdonnee = newClass.substring(11, 13); // je sors l'ordonnée de la case cliquée
        let playerPosition = $('.player'); // Position du player
        let playerClass = playerPosition.attr('class'); // je sors les classes du player
        let playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
        let playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
        for (let i = 1; i <= 2; i++) {
            if ((newAbscisse == parseInt(playerAbscisse) + i) && (newOrdonnee == parseInt(playerOrdonnee)) ||
                (newOrdonnee == parseInt(playerOrdonnee) + i) && (newAbscisse == parseInt(playerAbscisse)) ||
                (newAbscisse == parseInt(playerAbscisse) - i) && (newOrdonnee == parseInt(playerOrdonnee)) ||
                (newOrdonnee == parseInt(playerOrdonnee) - i) && (newAbscisse == parseInt(playerAbscisse))) {
                $(this).removeClass('empty');
                let bluePlayer = $('.player');
                bluePlayer.removeClass("player");
                bluePlayer.addClass("empty");
                $(this).addClass("player");
                colorCases();
            }
        }
    }
})



function colorCases() {
    let playerPosition = $('.player'); // Position du player
    let playerClass = playerPosition.attr('class'); // je sors les classes du player
    let playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
    let playerOrdonnee = playerClass.substring(11, 13) // je sors l'ordonnée du player
    let cases = $('.case'); // Je sélectionne toutes mes cases
    for (let j = 0; j < cases.length; j++) {
        let CasesAbs = cases[j].classList[1];
        let CasesOrd = cases[j].classList[2];
        let casesAbscisse = CasesAbs.substring(2, 4);
        let casesOrdonnee = CasesOrd.substring(2, 4);
        for (let i = 1; i <= 2; i++) {
            if ((casesAbscisse == parseInt(playerAbscisse) + i) && (casesOrdonnee == parseInt(playerOrdonnee)) ||
                (casesOrdonnee == parseInt(playerOrdonnee) + i) && (casesAbscisse == parseInt(playerAbscisse)) ||
                (casesAbscisse == parseInt(playerAbscisse) - i) && (casesOrdonnee == parseInt(playerOrdonnee)) ||
                (casesOrdonnee == parseInt(playerOrdonnee) - i) && (casesAbscisse == parseInt(playerAbscisse))) {
                cases[j].classList.remove('empty');
                cases[j].classList.add("caseYouCanGo");
            } else {
                cases[j].classList.remove("caseYouCanGo");
            }
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