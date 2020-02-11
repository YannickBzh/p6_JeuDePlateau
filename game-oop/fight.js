class Fight {
    constructor(players) {
        this._players = players;
        this.$player1 = $('.player-1');
        this.$player2 = $('.player-2');
        this.whoIsPlaying = this.$player1;
    }


    /** Fight */
    bindAttackButton() {
        const $attackBtn = $('.attack');
        const that = this;

        $attackBtn.click(function () {
            that.attackChoice();
            that.handleTurnBasePlayer();
            if (that.whoIsPlaying[0] === that.$player1[0]) {
                that.displayPlayer1Pv();
                that.displayPlayer2Pv();
                $('#barneyImg').addClass('opacityEffect');
                $('#tedImg').removeClass('opacityEffect');
            } else {
                $('#barneyImg').removeClass('opacityEffect');
                console.log('tata');
                that.displayPlayer1Pv();
                that.displayPlayer2Pv();
            }
        });
    }

    /** Fight */
    bindDefendButton() {
        const $defendBtn = $('.defendBtn');
        const that = this;

        $defendBtn.click(function () {
            that.defendChoice();
            that.handleTurnBasePlayer();
            if (that.whoIsPlaying[0] === that.$player1[0]) {
                that.displayPlayer1Pv();
                that.displayPlayer2Pv();
                $('#barneyImg').addClass('opacityEffect');
                $('#tedImg').removeClass('opacityEffect');
            } else {
                $('#barneyImg').removeClass('opacityEffect');
                that.displayPlayer1Pv();
                that.displayPlayer2Pv();
            }
        });
    }

    /** Fight */
    attackChoice() {
        if (this.whoIsPlaying[0] === this.$player1[0]) {
            $('#tedImg').addClass('opacityEffect');
            this._players[0]._action = 'attack';
            this.whoIsPlaying = this.$player2
        } else {
            this._players[1]._action = 'attack';
            this.whoIsPlaying = this.$player1
        }
    }

    /** Fight */
    defendChoice() {
        if (this.whoIsPlaying[0] === this.$player1[0]) {
            $('#tedImg').addClass('opacityEffect');
            this._players[0]._action = 'defend';
            this.whoIsPlaying = this.$player2;
        } else {
            $('#tedImg').addClass('opacityEffect');
            this._players[1]._action = 'defend';
            this.whoIsPlaying = this.$player1;
        }
    }

    /** Fight */
    setActionNull() {
        this._players[0]._action = '';
        this._players[1]._action = '';
    }

    /** Fight */
    handleTurnBasePlayer() {
        let round = 0;
        while ((this._players[0]._pv > round) || (this._players[1]._pv > round)) {
            round++;
            if (((this.whoIsPlaying === this.$player1) && (this._players[0]._action === 'attack') && (this._players[1]._action === '')) || ((this.whoIsPlaying === this.$player1) && (this._players[0]._action === 'defend') && (this._players[1]._action === ''))) {
                return;
            } if (((this.whoIsPlaying === this.$player2) && (this._players[0]._action === '') && (this._players[1]._action === 'attack')) || ((this.whoIsPlaying === this.$player2) && (this._players[1]._action === 'defend') && (this._players[0]._action === ''))) {
                return;
            } if ((((this.whoIsPlaying === this.$player1) && (this._players[0]._action === 'attack') && (this._players[1]._action === 'attack'))) || (((this.whoIsPlaying === this.$player2) && (this._players[0]._action === 'attack') && (this._players[1]._action === 'attack')))) {
                this._players[0].handleFight(player2);
                this._players[1].handleFight(player1);
                this.setActionNull();
            } if ((((this.whoIsPlaying === this.$player1) && (this._players[0]._action === 'defend') && (this._players[1]._action === 'defend'))) || (((this.whoIsPlaying === this.$player2) && (this._players[0]._action === 'defend') && (this._players[1]._action === 'defend')))) {
                this.setActionNull();
                return;
            } if ((((this.whoIsPlaying === this.$player1) && (this._players[0]._action === 'attack') && (this._players[1]._action === 'defend'))) || (((this.whoIsPlaying === this.$player2) && (this._players[0]._action === 'attack') && (this._players[1]._action === 'defend')))) {
                this._players[0].handleDefend(player2);
                this.setActionNull();
            } if ((((this.whoIsPlaying === this.$player1) && (this._players[0]._action === 'defend') && (this._players[1]._action === 'attack'))) || (((this.whoIsPlaying === this.$player2) && (this._players[0]._action === 'defend') && (this._players[1]._action === 'attack')))) {
                this._players[1].handleDefend(player1);
                this.setActionNull();
            } if ((this._players[0]._pv <= round) || (this._players[1]._pv <= round)) {
                const $modal = $('#modalFight')[0];
                $modal.classList.replace("d-block", "d-none");
                this.modalEndGame();
                break;
            } else return;
        }
    }


    displayPlayer1Pv() {
        for (let i = 0; i < $('.player1Pv').length; i++) {
            $('.player1Pv')[i].innerHTML = this._players[0]._pv;
        }
    }

    displayPlayer2Pv() {
        for (let i = 0; i < $('.player2Pv').length; i++) {
            $('.player2Pv')[i].innerHTML = this._players[1]._pv;
        }
    }

    displayWinner() {
        if ((this._players[0]._pv > 0) && (this._players[1]._pv <= 0)) {
            $('#winner').append('<img src="https://media.giphy.com/media/NJzu0CDur92Y8/source.gif" alt="gif Ted" style="width:100%"/>');
        } if ((this._players[0]._pv <= 0) && (this._players[1]._pv <= 0)) {
            $('#winner').append('<img src="https://media.giphy.com/media/z6BeyFxDYDBNC/source.gif" alt="gif Ted et Barney" style="width:100%"/>');
            $('#modalWinner').html("It's a draw ! Both are winners");
        } if ((this._players[1]._pv > 0) && (this._players[0]._pv <= 0)) {
            $('#winner').append('<img src="https://media.giphy.com/media/3WY8qMF9l3ldK/source.gif" alt="gif Barney" style="width:100%"/>');
        } else return;
    }

    /** Fight */
    modalEndGame() {
        const $modalEndFight = $('#modalEndGame')[0];
        $modalEndFight.classList.replace("d-none", "d-block");
        this.displayWinner();
    }

}