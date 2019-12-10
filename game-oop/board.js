/**
 * - Générer la board
 * - Position des players
 * - Position des weapons
 * - Position des cases grises
 */

class Board {
    /**
     * 
     * @param {number} numberOfCases 
     * @param {number} numberOfLines 
     * @param {number} numberOfCaseGrey 
     * @param {JQuery} $game 
     */
    constructor(numberOfCases, numberOfLines, numberOfCaseGrey, $game, players, weapons) {
        this._numberOfCases = numberOfCases
        this._numberOfLines = numberOfLines
        this._numberOfCaseGrey = numberOfCaseGrey
        this._$game = $game
        this._players = players;
        this._weapons = weapons;
    }

    generatedBoard() {
        for (let j = 0; j <= this._numberOfLines; j++) {
            const $row = $('<div class="row"></div>');
            for (let i = 0; i <= this._numberOfCases; i++) {
                const $case = document.createElement("div");
                $case.className = `case x-${i} y-${j} empty`;
                $row[0].appendChild($case);
            }
            this._$game.append($row);
        }
    }

    generatedGreyCases() {
        for (let i = 1; i <= this._numberOfCaseGrey; i++) {
            const $selectAllCases = $('.empty');
            let randomNumber = Math.floor((Math.random() * $selectAllCases.length - 1) + 1);
            $selectAllCases[randomNumber].classList.add("caseGrey");
            $selectAllCases[randomNumber].classList.remove("empty");
        }
    }

    generatePlayersAndWeapons() {
        const playersAndWeapons = this._players.concat(this._weapons)
        //console.log(playersAndWeapons)
        playersAndWeapons.forEach(element => {
            const $selectAllCases = $('.empty');
            let randomNumber = Math.floor((Math.random() * $selectAllCases.length - 1) + 1);
            $selectAllCases[randomNumber].classList.add(element._className);
            $selectAllCases[randomNumber].classList.remove("empty");
        })
    }

    // whereIsMyPlayer(classPlayer) {
    //     playerPosition = $(classPlayer); // Position du player
    //     playerClass = playerPosition.attr('class'); // je sors les classes du player
    //     playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
    //     playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
    //     cases = $('.case'); // Je sélectionne toutes mes cases
    // }
}


/**
 * Review du 7 décembre : 
 *      -> this : contexte de ta classe ()
 * 
 *      -> forEach : c'est uniquement sur les tableaux, ça te permet de parcourir un                tableau mais tu ne peux pas le modifier.
 */
