let whoIsPlaying = 'player-1'

// console.log('====')
// console.log($player1)

// console.log('++++')
// console.log($player2)


function handleMove($this, $player, playerName) {
    $this.removeClass('empty');    
    $player.removeClass(playerName);
    $player.addClass("empty");
    $this.addClass(playerName);
}

$('.case').on('click', function() {
    // important de les mettre ici -> $player1 && $player2 sont réinitialisés à chaque événement
    const $player1 = $('.player-1')
    const $player2 = $('.player-2')

    if (whoIsPlaying === 'player-1') {
        // $(this) = jQuery
        // = Context dans lequel est executé l'événement.
        // $that = convention quand on capture le contexte d'execution dans une variable
        const $that = $(this)

        handleMove($that, $player1, whoIsPlaying)
        whoIsPlaying = 'player-2'
    } else {
        const $that = $(this)
        handleMove($that, $player2, whoIsPlaying)
        whoIsPlaying = 'player-1'
    }
})


/**
 * Review
 */

// variables avec un type natif (integer, string, array)
const name = 'thomas';

// variables avec un type noeud/dom
const $myDiv = $('.div')


/**
 * To Do next:
 *  - Refactorisation
 *      -> Créer de plus petites fonctions pour tes différentes actions plus simples à manipuler.
 *      -> tu peux t'inspirer de handleMove
 * 
 *  - Intégration de la partie déplacement/hilight avec la partie tour/tour.
 */