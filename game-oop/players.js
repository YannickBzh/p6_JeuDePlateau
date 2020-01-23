/**
 * Générer les players
 */

class Player extends GameAttribute {
    constructor(name, className, weapon, xp) {
        super(name, className)
        this._weapon = weapon;
        this._xp = xp;
        this._action = '' // attaquer || defendre
        this._force = 10;
    }

    // attaquer
    handleFight(enemy) {
        enemy._xp = enemy._xp - this._force;
    }

    // défendre
    handleDefend(fighter) {
        fighter._xp = fighter._xp - this._force/2;
    }

    // changer d'arme
    handleWeaponSwitch(newWeapon) {
        //$( "#tedWeapon" ).attr( "src", "assets/umbrella.png" );

        this._weapon = weapons.filter(weapon => weapon._className === newWeapon)[0];
       
        this._force = parseInt(this._weapon._damage)

    }
}