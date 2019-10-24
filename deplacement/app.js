// Fonction de factorisation
// function getPosition(_name, _position, _abs, _ord) {
//     _name = _position.attr('class'); // je sors les classes
//     _abs = _name.substring(7, 9); // je sors l'abscisse
//     _ord = _name.substring(11, 13) // je sors l'ordonnée
// }



$('.case').click(function () {
    if ($(this).hasClass('empty')) {
        let newClass = $(this).attr('class'); // position de la case cliquée
        let newAbscisse = newClass.substring(7, 9); // je sors l'abscisse de la case cliquée
        let newOrdonnee = newClass.substring(11, 13); // je sors l'ordonnée de la case cliquée
        let playerPosition = $('.player'); // Position du player
        // getPosition(playerClass, playerPosition, playerAbscisse, playerOrdonnee)
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
            }
            //else {
              //  console.log('faux')
            //}
        }
    }
})


/**
 * Todo : gérer le déplacement : d'abord sur une case adjacente, puis sur deux cases adjacentes
 */