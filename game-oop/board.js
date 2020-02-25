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

    // Génération du plateau de jeu
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

    // Génération aléatoire des cases inaccessibles
    generatedGreyCases() {
        for (let i = 1; i <= this._numberOfCaseGrey; i++) {
            const $selectAllCases = $('.empty');
            let randomNumber = Math.floor((Math.random() * $selectAllCases.length - 1) + 1);
            $selectAllCases[randomNumber].classList.add("caseGrey");
            $selectAllCases[randomNumber].classList.remove("empty");
        }
    }

    // Génération des players et des weapons sur le plateau de jeu
    generatePlayersAndWeapons() {
        const playersAndWeapons = this._players.concat(this._weapons)
        playersAndWeapons.forEach(element => {
            const $selectAllCases = $('.empty');
            let randomNumber = Math.floor((Math.random() * $selectAllCases.length - 1) + 1);
            $selectAllCases[randomNumber].classList.add(element._className);
            $selectAllCases[randomNumber].classList.remove("empty");
        })
    }

    // Méthode pour déplacer la chèvre
    movingGoat() {
        $(function () {
            let goat = $("#goat"),
                width = goat.get(0).width,
                screenWidth = $(window).width(),
                duration = 20000;

            function animateGoat() {
             goat.css("left", -width).animate({
                    "left": screenWidth,
                }, duration, animateGoat);
            }
            animateGoat();
        });
    }
}
