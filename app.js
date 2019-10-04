const numberOfCases = 10;
const numberOflines = 10;

const $row = $('div.row');


for (let j = 1; j < numberOflines; j++) {

    for (let i = 0; i < numberOfCases; i++) {
        const $case = document.createElement("div");
        $case.className = `case x-${i}`;
        $row[0].appendChild($case);
    }
    const $line = document.createElement("div");
    $line.className = "row";
    $row[0].after($line);
}

/*
 * TODO NEXT WEEK :
 * - Traduire de Vanilla JavaScript en jQuery OK
 * - Réaliser le tableau avec x et y.
 * - Sélectionner une case via jQuery et la rendre grisée
 */


// for (let i = 1; i <= numberOfCases; i++) {
//     //const $case = document.createElement("div");
//     console.log(i)
//     const $case = $(".row").after( "<div class='row'>" );
//     $case.classList = "x-" + i ;

//     $case.classList = `case x-${i}`;
// }

// for (let j = 1; j <= numberOflines; j++) {
//     const $case = document.createElement("div");
//     $(".row").after( "<div class='row'>" )
//     $case.classList = `case x-${i}`;
//     $row[0].appendChild($case);
// }


