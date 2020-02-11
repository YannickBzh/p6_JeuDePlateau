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