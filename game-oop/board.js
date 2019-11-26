class Board {
    /**
     * 
     * @param {number} numberOfCases 
     * @param {number} numberOfLines 
     * @param {number} numberOfCaseGrey 
     * @param {JQuery} $game 
     */
    constructor(numberOfCases, numberOfLines, numberOfCaseGrey, $game) {
        this._numberOfCases = numberOfCases
        this._numberOfLines = numberOfLines
        this._numberOfCaseGrey = numberOfCaseGrey
        this._$game = $game
    }

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
}
