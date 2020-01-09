/**
 * Générer les players
 */

class Player extends GameAttribute {
    constructor(name, className, weapon) {
        super(name, className)
        this._weapon = weapon;
        this._action = '' // attaque || defendre
    }

    // attaquer
    handleFight() {
        // Mon player a comme action "attaque" et commme arme "Parapluie" -> 
        // Retourne les dégats
    }

    // défendre
    handleDefend() {

    }

    // changer d'arme
    handleWeaponSwitch(newWeapon) {
        console.log('====')
        console.log(newWeapon)

        // const $currentPlayerWeapon = $('#tedWeapon')[0]

        // console.log($currentPlayerWeapon)

        $( "#tedWeapon" ).attr( "src", "assets/umbrella.png" )

        // this._weapon = newWeapon;


        /**
         * 1. je sélection en dur mon élément sur le dom
         * 2. replacer par une image en dure
         * 3. je le fais de façon dynamique pour un seul joeur
         * 4. Je l'applique aux deux joueurs
         */
    }
}