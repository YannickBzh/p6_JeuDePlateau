class Game {
    /**
     * 
     * @param {Player} players 
     */
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
        const that = this;
        $('.case').click(function () {
            that.handlePlayerTurn($(this));
        })
    }

    fightIsComing() {
        const that = this;
        $('.case').click(function () {
            that.playerCloseUp($(this));
            that.playerCloseDown($(this));
            that.playerCloseLeft($(this));
            that.playerCloseRight($(this));
        });
    }

    // Voir s'il existe une arme sur la case en question (autrement dit la case qui vient d'être cliquée)
    // Si oui, retourne moi cette arme
    retrieveWeaponFromCase(currentCase) {
        return currentCase[0].className.split(' ').filter(word => word.startsWith('weapon'));
    }

    // Est-ce que la case cliquée contient une arme
    hasCaseWeapon(currentCase) {
        return !!this.retrieveWeaponFromCase(currentCase).length;
    }

    switchWeapon(click, player) {
        if (click.hasClass('caseYouCanGo')) {
            const weaponOnCaseClicked = this.retrieveWeaponFromCase(click)[0];
            click.removeClass('empty');
            click.addClass(player._weapon);
            player.handleWeaponSwitch(weaponOnCaseClicked);
            player._weapon = weaponOnCaseClicked;
            click.removeClass(weaponOnCaseClicked);
        }
    }

    
    /**
     * handlePlayerTurn : permet de déplacer le joueur et de passer la main au joueur suivant
     */

    handlePlayerTurn(caseClicked) {
        if (((this.hasCaseWeapon(caseClicked)) && (this.whoIsPlaying.hasClass('player-1')) && (caseClicked.hasClass('caseYouCanGo')))) {
            this.switchWeapon(caseClicked, player1)
            $("#tedWeapon").removeClass();
            $("#tedWeapon").addClass(player1._weapon);
        } else if (((this.hasCaseWeapon(caseClicked)) && (this.whoIsPlaying.hasClass('player-2')))) {
            this.switchWeapon(caseClicked, player2)
            $("#barneyWeapon").removeClass();
            $("#barneyWeapon").addClass(player2._weapon);
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


    playerCloseUp() {
        let positionPlayers = this.whereIsMyPlayer(player1);
        for (let i = 1; i <= 1; i++) {
            let topCaseOrdonnee = (parseInt(positionPlayers[1]) - i);
            for (let j = 0; j < positionPlayers[2].length; j++) {
                let casesAbs = positionPlayers[2][j].classList[1]; // je sors la classe des abscisses de cases
                let casesOrd = positionPlayers[2][j].classList[2]; // je sors la classe des ordonnées de cases
                let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
                let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
                if ((casesOrdonnee == topCaseOrdonnee) && (casesAbscisse == parseInt(positionPlayers[0]))) {
                    if (positionPlayers[2][j].classList.contains('player-2')) {
                        this.eraseHighlight();
                        this.launchFight();
                    } else return
                }
            }
        }
    }

    playerCloseDown() {
        let positionPlayers = this.whereIsMyPlayer(player1);
        for (let i = 1; i <= 1; i++) {
            let bottomCaseOrdonnee = (parseInt(positionPlayers[1]) + i);
            for (let j = 0; j < positionPlayers[2].length; j++) {
                let casesAbs = positionPlayers[2][j].classList[1];
                let casesOrd = positionPlayers[2][j].classList[2];
                let casesAbscisse = casesAbs.substring(2, 4);
                let casesOrdonnee = casesOrd.substring(2, 4);
                if ((casesOrdonnee == bottomCaseOrdonnee) && (casesAbscisse == parseInt(positionPlayers[0]))) {
                    if (positionPlayers[2][j].classList.contains('player-2')) {
                        this.eraseHighlight();
                        this.launchFight();
                    } else return
                }
            }
        }
    }

    playerCloseLeft() {
        let positionPlayers = this.whereIsMyPlayer(player1);
        for (let i = 1; i <= 1; i++) {
            let leftCaseAbscisse = (parseInt(positionPlayers[0]) - i);
            for (let j = 0; j < positionPlayers[2].length; j++) {
                let casesAbs = positionPlayers[2][j].classList[1];
                let casesOrd = positionPlayers[2][j].classList[2];
                let casesAbscisse = casesAbs.substring(2, 4);
                let casesOrdonnee = casesOrd.substring(2, 4);
                if ((casesAbscisse == leftCaseAbscisse) && (casesOrdonnee == parseInt(positionPlayers[1]))) {
                    if (positionPlayers[2][j].classList.contains('player-2')) {
                        this.eraseHighlight();
                        this.launchFight();
                    } else return
                }
            }
        }
    }

    playerCloseRight() {
        let positionPlayers = this.whereIsMyPlayer(player1);
        for (let i = 1; i <= 1; i++) {
            let rightCaseAbscisse = (parseInt(positionPlayers[0]) + i);
            for (let j = 0; j < positionPlayers[2].length; j++) {
                let casesAbs = positionPlayers[2][j].classList[1]; // je sors la classe des abscisses de cases
                let casesOrd = positionPlayers[2][j].classList[2]; // je sors la classe des ordonnées de cases
                let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
                let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
                if ((casesAbscisse == rightCaseAbscisse) && (casesOrdonnee == parseInt(positionPlayers[1]))) {
                    if (positionPlayers[2][j].classList.contains('player-2')) {
                        this.eraseHighlight();
                        this.launchFight();
                    } else return;
                }
            }
        }
    }

    bindAttackButton() {
        const $attackBtn = $('.attack');
        const that = this;

        $attackBtn.click(function () {
            that.attackChoice();
            that.handleTurnBasePlayer();
        })
    }

    bindDefendButton() {
        const $defendBtn = $('.defend');
        const that = this;

        $defendBtn.click(function () {
            that.defendChoice();
            that.handleTurnBasePlayer();
        })
    }

    setActionNull() {
        this._players[0]._action = '';
        this._players[1]._action = '';
    }
    
    handleTurnBasePlayer() {
        let round = 0;
        while ((this._players[0]._xp > round) || (this._players[1]._xp > round)) {
            round++;
            if (((this.whoIsPlaying === this.$player1) && (this._players[0]._action === 'attack') && (this._players[1]._action === '')) || ((this.whoIsPlaying === this.$player1) && (this._players[0]._action === 'defend') && (this._players[1]._action === ''))) {
                return
            } if (((this.whoIsPlaying === this.$player2) && (this._players[0]._action === '') && (this._players[1]._action === 'attack')) || ((this.whoIsPlaying === this.$player2) && (this._players[1]._action === 'defend') && (this._players[0]._action === ''))) {
                return
            } if ((((this.whoIsPlaying === this.$player1) && (this._players[0]._action === 'attack') && (this._players[1]._action === 'attack'))) || (((this.whoIsPlaying === this.$player2) && (this._players[0]._action === 'attack') && (this._players[1]._action === 'attack')))) {
                this._players[0].handleFight(player2);
                this._players[1].handleFight(player1);
                this.setActionNull();
                console.log("player 1 xp = " + this._players[0]._xp)
                console.log("player 2 xp = " + this._players[1]._xp)
            } if ((((this.whoIsPlaying === this.$player1) && (this._players[0]._action === 'defend') && (this._players[1]._action === 'defend'))) || (((this.whoIsPlaying === this.$player2) && (this._players[0]._action === 'defend') && (this._players[1]._action === 'defend')))) {
                this.setActionNull();
                console.log("player 1 xp = " + this._players[0]._xp)
                console.log("player 2 xp = " + this._players[1]._xp)
                return
            } if ((((this.whoIsPlaying === this.$player1) && (this._players[0]._action === 'attack') && (this._players[1]._action === 'defend'))) || (((this.whoIsPlaying === this.$player2) && (this._players[0]._action === 'attack') && (this._players[1]._action === 'defend')))) {
                this._players[0].handleDefend(player2);
                this.setActionNull();
                console.log("player 1 xp = " + this._players[0]._xp)
                console.log("player 2 xp = " + this._players[1]._xp)
            } if ((((this.whoIsPlaying === this.$player1) && (this._players[0]._action === 'defend') && (this._players[1]._action === 'attack'))) || (((this.whoIsPlaying === this.$player2) && (this._players[0]._action === 'defend') && (this._players[1]._action === 'attack')))) {
                this._players[1].handleDefend(player1);
                this.setActionNull();
                console.log("player 1 xp = " + this._players[0]._xp)
                console.log("player 2 xp = " + this._players[1]._xp)
            } if ((this._players[0]._xp <= round) || (this._players[1]._xp <= round)) {
                const $modal = $('#modalFight')[0];
                $modal.classList.replace("d-block", "d-none");
                this.endGame();
            } else return;
        }
    }

    attackChoice() {
        if (this.whoIsPlaying[0] === this.$player1[0]) {
            console.log('le player 1 attaque')
            this._players[0]._action = 'attack'
            this.whoIsPlaying = this.$player2
        } else {
            console.log('le player 2 attaque')
            this._players[1]._action = 'attack'
            this.whoIsPlaying = this.$player1
        }
    }

    defendChoice() {
        if (this.whoIsPlaying[0] === this.$player1[0]) {
            console.log('le player 1 défend')
            this._players[0]._action = 'defend'
            this.whoIsPlaying = this.$player2
        } else {
            console.log('le player 2 défend')
            this._players[1]._action = 'defend'
            this.whoIsPlaying = this.$player1
        }
    }

    // Quand tu lances la bagarre
    launchFight() {
        const $modal = $('#modalFight')[0];
        $modal.classList.replace("d-none", "d-block");
    }

    endGame() {
        const $modalEndFight = $('#modalEndGame')[0];
        $modalEndFight.classList.replace("d-none", "d-block");
    }
}
