let playerPosition = $('.player')

console.log(playerPosition.attr('class'))



$('.case').click(function(){
    if($(this).hasClass('empty')){
        $(this).removeClass('empty');
        let bluePlayer = $('.player');
        bluePlayer.removeClass("player");
        bluePlayer.addClass("empty");
        $(this).addClass("player");

        console.log('====')
        console.log($(this).attr('class'))
    }
})

/**
 * Todo : gérer le déplacement : d'abord sur une case adjacente, puis sur deux cases adjacentes
 */

