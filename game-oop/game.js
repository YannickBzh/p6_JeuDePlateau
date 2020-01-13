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
        this.rounds = 0;
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
        this.$player1 = $('.player-1');
        this.$player2 = $('.player-2');
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
        })
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
        const weaponOnCaseClicked = this.retrieveWeaponFromCase(click)[0];
        click.removeClass('empty')
        click.addClass(player._weapon)
        player.handleWeaponSwitch(weaponOnCaseClicked);
        click.removeClass(weaponOnCaseClicked);
    }
    /**
     * handlePlayerTurn : permet de déplacer le joueur et de passer la main au joueur suivant
     */

    handlePlayerTurn(caseClicked) {
        if ((this.hasCaseWeapon(caseClicked)) && (this.whoIsPlaying.hasClass('player-1'))) {
            this.switchWeapon(caseClicked, player1)
        } else if (((this.hasCaseWeapon(caseClicked)) && (this.whoIsPlaying.hasClass('player-2')))) {
            this.switchWeapon(caseClicked, player2)
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
                let casesAbs = positionPlayers[2][j].classList[1]; // je sors la classe des abscisses de cases
                let casesOrd = positionPlayers[2][j].classList[2]; // je sors la classe des ordonnées de cases
                let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
                let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
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
                let casesAbs = positionPlayers[2][j].classList[1]; // je sors la classe des abscisses de cases
                let casesOrd = positionPlayers[2][j].classList[2]; // je sors la classe des ordonnées de cases
                let casesAbscisse = casesAbs.substring(2, 4); // j'isole le nombre des abscisses de mes cases
                let casesOrdonnee = casesOrd.substring(2, 4); // J'isole le nombre des ordonnées de mes cases
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
        const that = this

        $attackBtn.click(function() {
            that.attackChoice()
        })
    }

    bindDefendButton() {
        const $defendBtn = $('.defend');
        const that = this

        $defendBtn.click(function() {
            that.defendChoice()
        })
    }

    // Une fois que tu as fini un tour de jour (autrement dit, les deux joueurs ont un état, tu augrements la propriété round de 1)
    handleTurnBasePlayer() {
        // l'idée de cette méthode : 
        // -> elle met à jour l'état des joueurs.
        // -> elle augmente le round de 1 à chaque tour
        // -> est-ce que la santée de l'un des joueurs est à 0 ?
        // -> elle les réinitialise à 0
    }

    attackChoice() {
        console.log('attaque')

        // console.log(this.whoIsPlaying[0])
        // console.log(this.$player1[0])
        // console.log(this.$player2[0])

        // Cette partie là part dans la méthode handleTurnBasePlayer
        if (this.whoIsPlaying[0] === this.$player1[0]) {
            console.log('le player 1 attaque')
            this._players[0]._action  = 'attaque'
            this.whoIsPlaying = this.$player2
        } else {
            console.log('le player 2 attaque')
            this._players[1]._action  = 'attaque'
            this.whoIsPlaying = this.$player1
        }

        console.log(this._players[0]._action)
        console.log(this._players[1]._action)

        // const $attack = $('.attack')[0];
        // $attack.addEventListener('click', function () {
        //     playerAttack._action = 'attack';
        // })
    }

    defendChoice() {
        console.log('défendre')
        // const $defend = $('.defend')[0];
        // $defend.addEventListener('click', function () {
        //     playerDefend._action = 'defend';
        // })
    }

    // Quand tu lances la bagarre
    launchFight() {
        const $modal = $('#modalFight')[0];
        $modal.classList.replace("d-none", "d-block");
        

        // // Player 1 attaque
        // if (this.whoIsPlaying.hasClass('player-1')) {
        //     if (this.attackChoice(player1)) {
        //         player2.handleFight();
        //     }
        // }

        // // Player 1 défend
        // if (this.whoIsPlaying.hasClass('player-1')) {
        //     if (this.defendChoice(player1)) {
        //         player2.handleDefend();
        //     }
        // }
    }

    // Étapes d'après : 
    // -> quel joueur commence ? (qui joue -> c'est une information que tu as déjà dans l'état de ta classe)
    // -> choisi attaque ou défense (choisir l'action du joueur)
    // -> autre joueur choisi attaque ou défense
    // conséquences du tour de jeu
}
