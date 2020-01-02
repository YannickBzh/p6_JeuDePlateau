class Game {
    constructor(players) {
        this._players = players;
        this.$player1 = $('.player-1');
        this.$player2 = $('.player-2');
        this.$cases = $('.case');
        this.whoIsPlaying = this.$player1;
    }



    whereIsMyPlayer(player) {
        let arrayPosition = [];
        let playerPosition = $('.' + player._className); // Position du player
        let playerClass = playerPosition.attr('class'); // je sors les classes du player
        let playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
        let playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
        arrayPosition.push(playerAbscisse, playerOrdonnee, this.$cases);
        return arrayPosition;
    }


    highlightTop(player) {
        let positionPlayers = this.whereIsMyPlayer(player);
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
    }

    highlightBottom(player) {
        let positionPlayers = this.whereIsMyPlayer(player);
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
    }

    highlightLeft(player) {
        let positionPlayers = this.whereIsMyPlayer(player);
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
    }

    highlightRight(player) {
        let positionPlayers = this.whereIsMyPlayer(player);
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
    }

    highlightPlayer1() {
        this.highlightTop(player1);
        this.highlightBottom(player1);
        this.highlightLeft(player1);
        this.highlightRight(player1);
    }


    highlightPlayer2() {
        this.highlightTop(player2);
        this.highlightBottom(player2);
        this.highlightLeft(player2);
        this.highlightRight(player2);
    }


    eraseHighlight() {
        for (let j = 0; j < this.$cases.length; j++) {
            this.$cases[j].classList.remove("caseYouCanGo");
            this.$cases[j].classList.add('empty');
        }
    }

    movePlayer(click, $player, playerName) {
        click.removeClass('empty');
        this.whoIsPlaying.removeClass($player);
        this.whoIsPlaying.addClass('empty');
        click.addClass($player);
        this.eraseHighlight();
        this.whoIsPlaying = $(playerName);
    }

    handleClickOnCase() {
        const that = this
        $('.case').click(function () {
            that.handlePlayerTurn($(this));
        })
    }

    // Voir s'il existe une arme sur la case en question (autrement dit la case qui vient d'être cliquée)
    // Si oui, retourne moi cette arme
    retrieveWeaponFromCase(currentCase) {
        return currentCase[0].className.split(' ').filter(word => word.startsWith('weapon'));
    }

    // Est-ce que la case cliquée contient une arme
    hasCaseWeapon(currentCase) {
        // Prend le premier élément contenu dans mon array currentCase
        // Puis récupère toutes les classes de cet élément
        // Transforme les classes (string à la base) en un tableau
        // Puis parcourir le tableau et regarde ce qui commence par weapon
        // Si tu trouves une occurence, retourne true
        // Sinon false
        return !!this.retrieveWeaponFromCase(currentCase).length;
    }

    switchWeapon(click, player) {
        const weaponOnCaseClicked = this.retrieveWeaponFromCase(click)[0];
        click.removeClass('empty')
        click.addClass(player._weapon)
        player.handleWeaponSwitch(weaponOnCaseClicked);
        click.removeClass(weaponOnCaseClicked);
    }
    /**
     * handlePlayerTurn : permet de déplacer le joueur et de passer la main au joueur suivant
     */

    // Cette méthode connait la case qui vient d'être clickée.
    // -> tu sais où ton joueur va être déplacé
    // -> tu sais aussi si cette case contient une arme (tu sais ça parce que dans ton html, tu as des classes qui correpondent aux armes)
    handlePlayerTurn(caseClicked) {
        if ((this.hasCaseWeapon(caseClicked)) && (this.whoIsPlaying.hasClass('player-1'))) {
            // const weaponOnCaseClicked = this.retrieveWeaponFromCase(caseClicked)[0];
            this.switchWeapon(caseClicked, player1)
            // caseClicked.removeClass('empty');
            // caseClicked.addClass(player1._weapon);
            // player1.handleWeaponSwitch(weaponOnCaseClicked);
            // caseClicked.removeClass(weaponOnCaseClicked);
        } else if (((this.hasCaseWeapon(caseClicked)) && (this.whoIsPlaying.hasClass('player-2')))) {
            this.switchWeapon(caseClicked, player2)
            // const weaponOnCaseClicked = this.retrieveWeaponFromCase(caseClicked)[0];
            // caseClicked.removeClass('empty');
            // caseClicked.addClass(player2._weapon);
            // player2.handleWeaponSwitch(weaponOnCaseClicked);
            // caseClicked.removeClass(weaponOnCaseClicked);
        } if ((caseClicked.hasClass('caseYouCanGo')) && ((!caseClicked.hasClass('player-1')) && (!caseClicked.hasClass('player-2')) && (!caseClicked.hasClass('caseGrey')))) {
            if (this.whoIsPlaying.hasClass('player-1')) {
                this.movePlayer(caseClicked, 'player-1', '.player-2');
                this.highlightPlayer2();
            } else if (this.whoIsPlaying.hasClass('player-2')) {
                this.movePlayer(caseClicked, 'player-2', '.player-1');
                this.highlightPlayer1();
            }
        }
    }
}