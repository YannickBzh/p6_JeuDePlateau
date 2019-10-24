// Fonction de factorisation
function getPosition(name) {
    const regexAbs =  /x-([0-9])/g
    const regexOrd = /y-([0-9])/g
    const regexAbsResult = name.match(regexAbs)
    const regexOrdResult = name.match(regexOrd)

    return {
        abs: regexAbsResult[0],
        ord : regexOrdResult[0]
    }
}

/**
 * Review du 24 octobre
 * Object literal
 */
const myObj = {
    name: 'thomas',
    sayName: function() {
        console.log(`hello ${this.name}`)
    }
}



$('.case').click(function () {
    if ($(this).hasClass('empty')) {
        let newClass = $(this).attr('class'); // position de la case cliquée -> retourne une string comprenant toutes les classes de la case en question

        

        /**
         * Review du 24 octobre
         */
        // Au lieu d'utiliser substring, on peut utiliser filter
        const stringArr = newClass.split(' ')
        const sortAbs = stringArr.filter(function(item) {
            if (item.startsWith('x-')) {
                return true
            }
        })
        const sortOrd = stringArr.filter(item => item.startsWith('y-'))

        // Sinon, on peut utiliser regex
        const regexAbs =  /x-([0-9])/g
        const regexOrd = /y-([0-9])/g
        const regexAbsResult = newClass.match(regexAbs)
        const regexOrdResult = newClass.match(regexOrd)
        // console.log(regexAbsResult)
        // console.log(regexOrdResult)
        /**
         * Fin Review du 24 octobre
         */

        let newAbscisse = newClass.substring(7, 9); // je sors l'abscisse de la case cliquée
        let newOrdonnee = newClass.substring(11, 13); // je sors l'ordonnée de la case cliquée
        
    

        let playerPosition = $('.player'); // Position du player
        let playerClass = playerPosition.attr('class'); // je sors les classes du player
        let playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
        let playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player

        console.log('new class')
        const abs = getPosition(newClass)['abs']

        console.log('player')
        console.log(getPosition(playerClass))



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