//let playerPosition = $('.player'); // je cherche la position sur laquel se situe le joueur
//console.log(playerPosition.attr('class')) // je sors ses classes
//console.log(playerPosition.attr('class')[7]) // Je sors son abscisse
//console.log(playerPosition.attr('class')[11]) // Je sors son ordonnée

let playerPosition = $('.player'); // Position du player
let playerClass = playerPosition.attr('class'); // je sors les classes du player

//console.log(`abscisse = ${numeroDeAbscisse}, ordonnée = ${numeroOrdonnee}`);

$('.case').click(function () {
    if ($(this).hasClass('empty')) {
        let newClass = $(this).attr('class'); // position de la case cliquée
        console.log(newClass)
        let newAbscisse = newClass.substring(7, 9); // je sors l'abscisse de la case cliquée
        let newOrdonnee = newClass.substring(11, 13); // je sors l'ordonnée de la case cliquée
        let playerPosition = $('.player'); // Position du player
        let playerClass = playerPosition.attr('class'); // je sors les classes du player
        let playerAbscisse = playerClass.substring(7, 9); // je sors la l'abscisse du player
        let playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
        if ((parseInt(newAbscisse) == parseInt(playerAbscisse) + 1) || (parseInt(newOrdonnee) == parseInt(playerOrdonnee) + 1)) {
            $(this).removeClass('empty');
            let bluePlayer = $('.player');
            bluePlayer.removeClass("player");
            bluePlayer.addClass("empty");
            $(this).addClass("player");
        }
        else { console.log('faux') }
        // console.log('====')
        // console.log($(this).attr('class'))
        // console.log($(this).attr('class')[7])
        // console.log($(this).attr('class')[11])
    }
})


/**
 * Todo : gérer le déplacement : d'abord sur une case adjacente, puis sur deux cases adjacentes
 */