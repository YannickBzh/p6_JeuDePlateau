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


    // Je sors les coordonnées X et Y du player, je les stocke dans un tableau
    whereIsMyPlayer(player) {
        let arrayPosition = [];
        let playerPosition = $('.' + player._className); // Position du player
        let playerClass = playerPosition.attr('class'); // je sors les classes du player
        let playerAbscisse = playerClass.substring(7, 9); // je sors l'abscisse du player
        let playerOrdonnee = playerClass.substring(11, 13); // je sors l'ordonnée du player
        arrayPosition.push(playerAbscisse, playerOrdonnee, this.$cases);
        return arrayPosition;
    }

    // Affiche les cases de déplacement du player vers le haut
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

    // Affiche les cases de déplacement du player vers le bas
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

    // Affiche les cases de déplacement du player vers la gauche
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

    // Affiche les cases de déplacement du player vers la droite
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

    // Méthode qui affiche les 4 directions de déplacement du Player 1
    highlightPlayer1() {
        this.highlightTop(player1);
        this.highlightBottom(player1);
        this.highlightLeft(player1);
        this.highlightRight(player1);
    }

    // Méthode qui affiche les 4 directions de déplacement du Player 2
    highlightPlayer2() {
        this.highlightTop(player2);
        this.highlightBottom(player2);
        this.highlightLeft(player2);
        this.highlightRight(player2);
    }

    // Méthode qui supprime les directions de déplacement des players
    eraseHighlight() {
        for (let j = 0; j < this.$cases.length; j++) {
            this.$cases[j].classList.remove("caseYouCanGo");
            this.$cases[j].classList.add('empty');
        }
    }

    // Déplace le player lorsque celui-ci clique sur une case
    movePlayer(click, $playerClass, playerName) {
        click.removeClass('empty');
        this.whoIsPlaying.removeClass($playerClass);
        this.whoIsPlaying.addClass('empty');
        click.addClass($playerClass);
        this.eraseHighlight();
        this.whoIsPlaying = $(playerName);
        this.$player1 = $('.player-1');
        this.$player2 = $('.player-2');
    }

    // Au clic sur une case la méthode "handlePlayerTurn" est appelée
    handleClickOnCase() {
        const that = this;
        $('.case').click(function () {
            that.handlePlayerTurn($(this));
        })
    }

    // Au clic sur une case je vérifie si les players sont situés sur une case adjacente
    fightIsComing() {
        const that = this;
        $('.case').click(function () {
            that.playerCloseUp();
            that.playerCloseDown();
            that.playerCloseLeft();
            that.playerCloseRight();
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

    // Méthode pour switcher l'arme en possession du joueur avec celle située sur la case cliquée
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
            this.switchWeapon(caseClicked, player1);
            $("#tedWeapon").removeClass();
            $("#tedWeapon").addClass(player1._weapon);
            $("#tedWeaponModal").removeClass();
            $("#tedWeaponModal").addClass(player1._weapon);
        } else if (((this.hasCaseWeapon(caseClicked)) && (this.whoIsPlaying.hasClass('player-2')))) {
            this.switchWeapon(caseClicked, player2);
            $("#barneyWeapon").removeClass();
            $("#barneyWeapon").addClass(player2._weapon);
            $("#barneyWeaponModal").removeClass();
            $("#barneyWeaponModal").addClass(player2._weapon);
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

    // Vérifier si les players sont sur des cases adjacentes vers le haut
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
                    } else return;
                }
            }
        }
    }

    // Vérifier si les players sont sur des cases adjacentes vers le bas
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
                    } else return;
                }
            }
        }
    }
    
    // Vérifier si les players sont sur des cases adjacentes vers la gauche
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
                    } else return;
                }
            }
        }
    }

    // Vérifier si les players sont sur des cases adjacentes vers la droite
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

    // Lancement du combat - Affichage de la modal de combat
    launchFight() {
        const newFight = new Fight([player1, player2]);
        newFight.bindAttackButton();
        newFight.bindDefendButton();
        const $modal = $('#modalFight')[0];
        $modal.classList.replace("d-none", "d-block");
        $('#blurEffect').addClass('blur');
        if (this.whoIsPlaying[0] === this.$player1[0]) {
            $('#barneyImg').addClass('opacityEffect');
        } else $('#tedImg').addClass('opacityEffect');
    }

    // Relance le jeu au clic sur le bouton "Fight again"
    reloadGame() {
        $("#reload").click(function () {
            location.reload(true);
        });
    }
}
