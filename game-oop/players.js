/**
 * Générer les players
 */

class Player extends GameAttribute {
    constructor(name, className, weapon, pv) {
        super(name, className);
        this._weapon = weapon;
        this._pv = pv;
        this._action = '';
        this._force = 10;
    }

    // attaquer
    handleFight(enemy) {
        enemy._pv = enemy._pv - this._force;
    }

    // défendre
    handleDefend(defender) {
        defender._pv = defender._pv - this._force / 2;
    }

    // changer d'arme
    handleWeaponSwitch(newWeapon) {
        this._weapon = weapons.filter(weapon => weapon._className === newWeapon)[0];
        this._weapon == this._newWeapon;
        this._force = this._weapon._damage;
    }
}