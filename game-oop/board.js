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
        this._weapons = weapons;;
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

    // Vérifier si les players sont adjacents au lancement du jeu

    // Vérifier si les players sont sur des cases adjacentes vers le haut
    playerCloseUpFirstLoad(player1Position) {
        let positionPlayers = player1Position;
        for (let i = 1; i <= 1; i++) {
            let topCaseOrdonnee = (parseInt(positionPlayers[1]) - i);
            for (let j = 0; j < positionPlayers[2].length; j++) {
                let casesAbs = positionPlayers[2][j].classList[1]; // je sors la classe des abscisses de cases
                let casesOrd = positionPlayers[2][j].classList[2]; // je sors la classe des ordonnées de cases
                let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
                let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
                if ((casesOrdonnee == topCaseOrdonnee) && (casesAbscisse == parseInt(positionPlayers[0]))) {
                    if (positionPlayers[2][j].classList.contains('player-2')) {
                        location.reload(true);
                    } else return;
                }
            }
        }
    }

    // Vérifier si les players sont sur des cases adjacentes vers le bas
    playerCloseDownFirstLoad(player1Position) {
        let positionPlayers = player1Position;
        for (let i = 1; i <= 1; i++) {
            let bottomCaseOrdonnee = (parseInt(positionPlayers[1]) + i);
            for (let j = 0; j < positionPlayers[2].length; j++) {
                let casesAbs = positionPlayers[2][j].classList[1];
                let casesOrd = positionPlayers[2][j].classList[2];
                let casesAbscisse = casesAbs.substring(2, 4);
                let casesOrdonnee = casesOrd.substring(2, 4);
                if ((casesOrdonnee == bottomCaseOrdonnee) && (casesAbscisse == parseInt(positionPlayers[0]))) {
                    if (positionPlayers[2][j].classList.contains('player-2')) {
                        location.reload(true);
                    } else return;
                }
            }
        }
    }

    // Vérifier si les players sont sur des cases adjacentes vers la gauche
    playerCloseLeftFirstLoad(player1Position) {
        let positionPlayers = player1Position;
        for (let i = 1; i <= 1; i++) {
            let leftCaseAbscisse = (parseInt(positionPlayers[0]) - i);
            for (let j = 0; j < positionPlayers[2].length; j++) {
                let casesAbs = positionPlayers[2][j].classList[1];
                let casesOrd = positionPlayers[2][j].classList[2];
                let casesAbscisse = casesAbs.substring(2, 4);
                let casesOrdonnee = casesOrd.substring(2, 4);
                if ((casesAbscisse == leftCaseAbscisse) && (casesOrdonnee == parseInt(positionPlayers[1]))) {
                    if (positionPlayers[2][j].classList.contains('player-2')) {
                        location.reload(true);
                    } else return;
                }
            }
        }
    }

    // Vérifier si les players sont sur des cases adjacentes vers la droite
    playerCloseRightFirstLoad(player1Position) {
        let positionPlayers = player1Position;
        for (let i = 1; i <= 1; i++) {
            let rightCaseAbscisse = (parseInt(positionPlayers[0]) + i);
            for (let j = 0; j < positionPlayers[2].length; j++) {
                let casesAbs = positionPlayers[2][j].classList[1];
                let casesOrd = positionPlayers[2][j].classList[2];
                let casesAbscisse = casesAbs.substring(2, 4); 
                let casesOrdonnee = casesOrd.substring(2, 4);
                if ((casesAbscisse == rightCaseAbscisse) && (casesOrdonnee == parseInt(positionPlayers[1]))) {
                    if (positionPlayers[2][j].classList.contains('player-2')) {
                        location.reload(true);
                    } else return;
                }
            }
        }
    }

    // Au load du jeu, relance le jeu si les players sont adjacents dans les 4 directions
    playerCloseFirstLoad(player1Position) {
        this.playerCloseUpFirstLoad(player1Position);
        this.playerCloseDownFirstLoad(player1Position);
        this.playerCloseLeftFirstLoad(player1Position);
        this.playerCloseRightFirstLoad(player1Position);
    }
}
