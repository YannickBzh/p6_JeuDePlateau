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
        this._weapon = newWeapon;
    }
}