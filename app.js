const numberOfCases = 10;
const numberOflines = 10;

const $game = $('.game');


for (let j = 1; j <= numberOflines; j++) {
    const $row = $('<div class="row"></div>');
    for (let i = 1; i <= numberOfCases; i++) {
        const $case = document.createElement("div");
        $case.className = `case x-${i} y-${j}`;
        $row[0].appendChild($case);
    }
    $game.append($row);
}