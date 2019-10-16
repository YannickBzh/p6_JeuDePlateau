$('.case').click(function(){
    if($(this).hasClass('empty')){
        $(this).removeClass('empty');
        let bluePlayer = $('.player');
        bluePlayer.removeClass("player");
        bluePlayer.addClass("empty");
        $(this).addClass("player");
    }
})


// /**
//  * TODO : 
//  *  - Maintenant que tu sais comment positionner les greyCases, tu peux faire pareil avec les weapons et les players.
//  *  - Gestion du déplacement (c.f. dossier déplacement)
//  *      -> l'idée est pour l'instant quand on clique sur une box que le player se déplace
//  *      -> on verra après pour gérer les cases adjacentes.
//  */

