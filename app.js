const numberOfCases = 10;
const numberOflines = 10;
const numberOfCaseGrey = 10;

// $game = Noeud HTML (Html Element)
const $game = $('.game');


for (let j = 1; j <= numberOflines; j++) {
    const $row = $('<div class="row"></div>');
    for (let i = 1; i <= numberOfCases; i++) {
        const $case = document.createElement("div");
        $case.className = `case x-${i} y-${j} empty`;
        $row[0].appendChild($case);
    }
    $game.append($row);
}

// $selectAllCases = Noeud HTML (Html Element)
// const $selectAllCases = $('.empty');

// console.log($selectAllCases)


for (let i = 1; i <= numberOfCaseGrey; i++) {
    // Selection toutes mes cases empty
    const $selectAllCases = $('.empty');

    // Crée un indice random par rapport à toutes mes classes empty
    let randomNumber = Math.floor(( Math.random() * $selectAllCases.length - 1 )+1);

    // Ajoute lui la classe caseGrey
    $selectAllCases[randomNumber].classList.add("caseGrey");
    
    // Supprime la classe
    $selectAllCases[randomNumber].classList.remove("empty");
}

for (let i = 1; i <= 1; i++) {
    const $selectAllCases = $('.empty');
    let tedPlayer =  Math.floor(( Math.random() * $selectAllCases.length - 1 )+1);
    $selectAllCases[tedPlayer].classList.add("tedPlayer");
    $selectAllCases[tedPlayer].classList.remove("empty");
}

for (let i = 1; i <= 1; i++) {
    const $selectAllCases = $('.empty');
    let tedPlayer =  Math.floor(( Math.random() * $selectAllCases.length - 1 )+1);
    $selectAllCases[tedPlayer].classList.add("barneyPlayer");
    $selectAllCases[tedPlayer].classList.remove("empty");
}


/**
 * TODO : 
 *  - Maintenant que tu sais comment positionner les greyCases, tu peux faire pareil avec les weapons et les players.
 *  - Gestion du déplacement (c.f. dossier déplacement)
 *      -> l'idée est pour l'instant quand on clique sur une box que le player se déplace
 *      -> on verra après pour gérer les cases adjacentes.
 */

