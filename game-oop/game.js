/**
 * - Déplacement des players
 * - Highlights
 * - Tour par tour
 */


class Game {
    constructor(players) {
        this._players = players
        // this._currentPlayer = player1;
        // this._currentEnemy = player2;
    }

    // whereIsMyPlayer() {
    //     let playerPosition = $(this._players.className); // Position du player
    //     let playerClass = playerPosition.attr('class'); // je sors les classes du player
    //     let playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
    //     let playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
    //     let cases = $('.case'); // Je sélectionne toutes mes cases
    // }

    // movePLayer($this, $player, playerName) {
    //     $this.removeClass('empty');
    //     $player.removeClass(playerName);
    //     $player.addClass('empty');
    //     $this.addClass(playerName);
    //     eraseHighlight()
    // }


    highlightTop() {
        const playersXY = this._players;
        playersXY.forEach(element => {
            let playerPosition = $('.' + element._className); // Position du player
            let playerClass = playerPosition.attr('class'); // je sors les classes du player
            let playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
            let playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
            let cases = $('.case'); // Je sélectionne toutes mes cases
            for (let i = 1; i <= 3; i++) {
                let topCaseOrdonnee = (parseInt(playerOrdonnee) - i);
                for (let j = 0; j < cases.length; j++) {
                    let casesAbs = cases[j].classList[1]; // je sors la classe des abscisses de cases
                    let casesOrd = cases[j].classList[2]; // je sors la classe des ordonnées de cases
                    let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
                    let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
                    if ((casesOrdonnee == topCaseOrdonnee) && (casesAbscisse == parseInt(playerAbscisse))) {
                        if (cases[j].classList.contains('caseGrey')) {
                            return;
                        } else {
                            cases[j].classList.remove('empty');
                            cases[j].classList.add("caseYouCanGo");
                        }
                    }
                }
            }
        })
    }

    highlightBottom() {
        const playersXY = this._players;
        playersXY.forEach(element => {
            let playerPosition = $('.' + element._className); // Position du player
            let playerClass = playerPosition.attr('class'); // je sors les classes du player
            let playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
            let playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
            let cases = $('.case'); // Je sélectionne toutes mes cases
            for (let i = 1; i <= 3; i++) {
                let bottomCaseOrdonnee = (parseInt(playerOrdonnee) + i);
                for (let j = 0; j < cases.length; j++) {
                    let casesAbs = cases[j].classList[1]; // je sors la classe des abscisses de cases
                    let casesOrd = cases[j].classList[2]; // je sors la classe des ordonnées de cases
                    let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
                    let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
                    if ((casesOrdonnee == bottomCaseOrdonnee) && (casesAbscisse == parseInt(playerAbscisse))) {
                        if (cases[j].classList.contains('caseGrey')) {
                            return;
                        } else {
                            cases[j].classList.remove('empty');
                            cases[j].classList.add("caseYouCanGo");
                        }
                    }
                }
            }
        })
    }

    highlightLeft() {
        const playersXY = this._players;
        playersXY.forEach(element => {
            let playerPosition = $('.' + element._className); // Position du player
            let playerClass = playerPosition.attr('class'); // je sors les classes du player
            let playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
            let playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
            let cases = $('.case'); // Je sélectionne toutes mes cases
            for (let i = 1; i <= 3; i++) {
                let leftCaseAbscisse = (parseInt(playerAbscisse) - i);
                for (let j = 0; j < cases.length; j++) {
                    let casesAbs = cases[j].classList[1]; // je sors la classe des abscisses de cases
                    let casesOrd = cases[j].classList[2]; // je sors la classe des ordonnées de cases
                    let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
                    let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
                    if ((casesAbscisse == leftCaseAbscisse) && (casesOrdonnee == parseInt(playerOrdonnee))) {
                        if (cases[j].classList.contains('caseGrey')) {
                            return;
                        } else {
                            cases[j].classList.remove('empty');
                            cases[j].classList.add("caseYouCanGo");
                        }
                    }
                }
            }

        })
    }


    highlightRight() {
        const playersXY = this._players;
        playersXY.forEach(element => {
            let playerPosition = $('.' + element._className); // Position du player
            let playerClass = playerPosition.attr('class'); // je sors les classes du player
            let playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
            let playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
            let cases = $('.case'); // Je sélectionne toutes mes cases
            for (let i = 1; i <= 3; i++) {
                let rightCaseAbscisse = (parseInt(playerAbscisse) + i);
                for (let j = 0; j < cases.length; j++) {
                    let casesAbs = cases[j].classList[1]; // je sors la classe des abscisses de cases
                    let casesOrd = cases[j].classList[2]; // je sors la classe des ordonnées de cases
                    let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
                    let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
                    if ((casesAbscisse == rightCaseAbscisse) && (casesOrdonnee == parseInt(playerOrdonnee))) {
                        if (cases[j].classList.contains('caseGrey')) {
                            return;
                        } else {
                            cases[j].classList.remove('empty');
                            cases[j].classList.add("caseYouCanGo");
                        }
                    }
                }

            }
        })
    }
}

