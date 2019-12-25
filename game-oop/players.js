/**
 * Générer les players
 */

class Player extends GameAttribute {
    constructor(name, className, weapon) {
        super(name, className)
        this._weapon = weapon;
    }

    // attaquer
    handleFight() {}

    // défendre
    handleDefend() {}

    // changer d'arme
    handleWeaponSwitch(newWeapon) {
        console.log('====')
        console.log(newWeapon)
    }
}