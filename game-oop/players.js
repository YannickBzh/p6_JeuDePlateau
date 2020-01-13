/**
 * Générer les players
 */

class Player extends GameAttribute {
    constructor(name, className, weapon, xp) {
        super(name, className)
        this._weapon = weapon;
        this._xp = xp;
        this._action = '' // attaquer || defendre
    }

    // attaquer
    handleFight() {
        const damageWeapon = 10;
        this._xp = this._xp - damageWeapon;
        // Mon player a comme action "attaque" et commme arme "Parapluie" -> 
        // Retourne les dégats
    }

    // défendre
    handleDefend() {
        const damageWeapon = 10;
        this._xp = this._xp - damageWeapon/2;
    }

    // changer d'arme
    handleWeaponSwitch(newWeapon) {
        // const $currentPlayerWeapon = $('#tedWeapon')[0]

        // console.log($currentPlayerWeapon)

        $( "#tedWeapon" ).attr( "src", "assets/umbrella.png" );

        this._weapon = weapons.filter(weapon => weapon._className === newWeapon)[0]        


        /**
         * 1. je sélection en dur mon élément sur le dom
         * 2. replacer par une image en dure
         * 3. je le fais de façon dynamique pour un seul joeur
         * 4. Je l'applique aux deux joueurs
         */
    }
}