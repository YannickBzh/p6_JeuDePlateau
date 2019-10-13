const numberOfCases = 10;
const numberOflines = 10;
const numberOfCaseGrey = 10;
const $tedPlayer = $('.tedPlayer')

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

// Affiche le player Ted aléatoirement
for (let i = 1; i <= 1; i++) {
    const $selectAllCases = $('.empty');
    let randomNumber =  Math.floor(( Math.random() * $selectAllCases.length - 1 )+1);
    $selectAllCases[randomNumber].classList.add("tedPlayer");
    $selectAllCases[randomNumber].classList.remove("empty");
}

// Affiche le player Barney aléatoirement
for (let i = 1; i <= 1; i++) {
    const $selectAllCases = $('.empty');
    let randomNumber =  Math.floor(( Math.random() * $selectAllCases.length - 1 )+1);
    $selectAllCases[randomNumber].classList.add("barneyPlayer");
    $selectAllCases[randomNumber].classList.remove("empty");
}

// Affiche weapon tie
for (let i = 1; i <= 1; i++) {
    const $selectAllCases = $('.empty');
    let randomNumber =  Math.floor(( Math.random() * $selectAllCases.length - 1 )+1);
    $selectAllCases[randomNumber].classList.add("weaponTie");
    $selectAllCases[randomNumber].classList.remove("empty");
}

// Affiche weapon umbrella
for (let i = 1; i <= 1; i++) {
    const $selectAllCases = $('.empty');
    let randomNumber =  Math.floor(( Math.random() * $selectAllCases.length - 1 )+1);
    $selectAllCases[randomNumber].classList.add("weaponUmbrella");
    $selectAllCases[randomNumber].classList.remove("empty");
}

// Affiche weapon horn
for (let i = 1; i <= 1; i++) {
    const $selectAllCases = $('.empty');
    let randomNumber =  Math.floor(( Math.random() * $selectAllCases.length - 1 )+1);
    $selectAllCases[randomNumber].classList.add("weaponHorn");
    $selectAllCases[randomNumber].classList.remove("empty");
}

// Affiche weapon pineapple
for (let i = 1; i <= 1; i++) {
    const $selectAllCases = $('.empty');
    let randomNumber =  Math.floor(( Math.random() * $selectAllCases.length - 1 )+1);
    $selectAllCases[randomNumber].classList.add("weaponPineapple");
    $selectAllCases[randomNumber].classList.remove("empty");
}

// Déplacer le player Ted
$('.empty').click(function(){
    $('.tedPlayer').removeClass("tedPlayer");
    $(this).addClass('tedPlayer');
})


/**
 * TODO : 
 *  - Maintenant que tu sais comment positionner les greyCases, tu peux faire pareil avec les weapons et les players.
 *  - Gestion du déplacement (c.f. dossier déplacement)
 *      -> l'idée est pour l'instant quand on clique sur une box que le player se déplace
 *      -> on verra après pour gérer les cases adjacentes.
 */

