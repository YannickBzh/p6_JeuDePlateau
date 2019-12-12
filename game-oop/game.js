class Game {
    constructor(players) {
        this._players = players
        // this._currentPlayer = player1;
        // this._currentEnemy = player2;
    }

    whereIsMyPlayer(element) {
        let arrayPosition = [];
        let playerPosition = $('.' + element._className); // Position du player
        let playerClass = playerPosition.attr('class'); // je sors les classes du player
        let playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
        let playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
        let cases = $('.case'); // Je sélectionne toutes mes cases
        arrayPosition.push(playerAbscisse, playerOrdonnee, cases);
        return arrayPosition;
    }

    highlightTop() {
        const playersXY = this._players;
        playersXY.forEach(element => {
            let positionPlayers = this.whereIsMyPlayer(element);
            for (let i = 1; i <= 3; i++) {
                let topCaseOrdonnee = (parseInt(positionPlayers[1]) - i);
                for (let j = 0; j < positionPlayers[2].length; j++) {
                    let casesAbs = positionPlayers[2][j].classList[1]; // je sors la classe des abscisses de cases
                    let casesOrd = positionPlayers[2][j].classList[2]; // je sors la classe des ordonnées de cases
                    let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
                    let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
                    if ((casesOrdonnee == topCaseOrdonnee) && (casesAbscisse == parseInt(positionPlayers[0]))) {
                        if (positionPlayers[2][j].classList.contains('caseGrey')) {
                            return;
                        } else {
                            positionPlayers[2][j].classList.remove('empty');
                            positionPlayers[2][j].classList.add("caseYouCanGo");
                        }
                    }
                }
            }
        })
    }

    highlightBottom() {
        const playersXY = this._players;
        playersXY.forEach(element => {
            let positionPlayers = this.whereIsMyPlayer(element);
            for (let i = 1; i <= 3; i++) {
                let bottomCaseOrdonnee = (parseInt(positionPlayers[1]) + i);
                for (let j = 0; j < positionPlayers[2].length; j++) {
                    let casesAbs = positionPlayers[2][j].classList[1]; // je sors la classe des abscisses de cases
                    let casesOrd = positionPlayers[2][j].classList[2]; // je sors la classe des ordonnées de cases
                    let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
                    let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
                    if ((casesOrdonnee == bottomCaseOrdonnee) && (casesAbscisse == parseInt(positionPlayers[0]))) {
                        if (positionPlayers[2][j].classList.contains('caseGrey')) {
                            return;
                        } else {
                            positionPlayers[2][j].classList.remove('empty');
                            positionPlayers[2][j].classList.add("caseYouCanGo");
                        }
                    }
                }
            }
        })
    }

    highlightLeft() {
        const playersXY = this._players;
        playersXY.forEach(element => {
            let positionPlayers = this.whereIsMyPlayer(element);
            for (let i = 1; i <= 3; i++) {
                let leftCaseAbscisse = (parseInt(positionPlayers[0]) - i);
                for (let j = 0; j < positionPlayers[2].length; j++) {
                    let casesAbs = positionPlayers[2][j].classList[1]; // je sors la classe des abscisses de cases
                    let casesOrd = positionPlayers[2][j].classList[2]; // je sors la classe des ordonnées de cases
                    let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
                    let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
                    if ((casesAbscisse == leftCaseAbscisse) && (casesOrdonnee == parseInt(positionPlayers[1]))) {
                        if (positionPlayers[2][j].classList.contains('caseGrey')) {
                            return;
                        } else {
                            positionPlayers[2][j].classList.remove('empty');
                            positionPlayers[2][j].classList.add("caseYouCanGo");
                        }
                    }
                }
            }
        })
    }

    highlightRight() {
        const playersXY = this._players;
        playersXY.forEach(element => {
            let positionPlayers = this.whereIsMyPlayer(element);
            for (let i = 1; i <= 3; i++) {
                let rightCaseAbscisse = (parseInt(positionPlayers[0]) + i);
                for (let j = 0; j < positionPlayers[2].length; j++) {
                    let casesAbs = positionPlayers[2][j].classList[1]; // je sors la classe des abscisses de cases
                    let casesOrd = positionPlayers[2][j].classList[2]; // je sors la classe des ordonnées de cases
                    let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
                    let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
                    if ((casesAbscisse == rightCaseAbscisse) && (casesOrdonnee == parseInt(positionPlayers[1]))) {
                        if (positionPlayers[2][j].classList.contains('caseGrey')) {
                            return;
                        } else {
                            positionPlayers[2][j].classList.remove('empty');
                            positionPlayers[2][j].classList.add("caseYouCanGo");
                        }
                    }
                }
            }
        })
    }

    eraseHighlight() {
        for (let j = 0; j < cases.length; j++) {
            positionPlayers[2][j].classList.remove("caseYouCanGo");
            positionPlayers[2][j].classList.add('empty')
        }
    }

    movePLayer($this, $player, playerName) {
        $this.removeClass('empty');
        $player.removeClass(playerName);
        $player.addClass('empty');
        $this.addClass(playerName);
        //eraseHighlight();
    }

    whoseTurn() {
        $('.case').click(function () {
            if (($(this).hasClass('caseYouCanGo')) && ((!$(this).hasClass('player-1')) && (!$(this).hasClass('player-2')) && (!$(this).hasClass('caseGrey')))) {
                const $player1 = $('.player-1');
                const $player2 = $('.player-2');
                let whoIsPlaying = 'player-1';
                if ((whoIsPlaying === 'player-1')) {
                    const $that = $(this);
                    this.movePLayer($that, $player1, whoIsPlaying);
                    //highlightPlayer2();
                    whoIsPlaying = 'player-2';
                } else if ((whoIsPlaying === 'player-2')) {
                    const $that = $(this);
                    this.movePLayer($that, $player2, whoIsPlaying);
                    //highlightPlayer1();
                    whoIsPlaying = 'player-1';
                }
            }
        })
    }
}

