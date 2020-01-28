/**
 * Générer les players
 */

class Player extends GameAttribute {
    constructor(name, className, weapon, xp) {
        super(name, className)
        this._weapon = weapon;
        this._xp = xp;
        this._action = ''
        this._force = 10;
    }

    // attaquer
    handleFight(enemy) {
        enemy._xp = enemy._xp - this._force;
    }

    // défendre
    handleDefend(defender) {
        defender._xp = defender._xp - this._force / 2;
    }

    // changer d'arme
    handleWeaponSwitch(newWeapon) {
        this._weapon = weapons.filter(weapon => weapon._className === newWeapon)[0];
        this._weapon == this._newWeapon
        this._force = this._weapon._damage;
    }
}