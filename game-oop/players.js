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
    handleFight(toto, toto2) {
        const damageWeapon = 10;
        this._xp = this._xp - damageWeapon;
        if (toto2._weapon = weaponUmbrella) {
            toto._xp = toto._xp - weaponUmbrella._damage
            //toto._xp = toto._xp - weaponTie._damage
        } else if (toto2._weapon = weaponTie) {
            toto._xp = toto._xp - weaponTie._damage
        } else if (toto2._weapon = weaponHorn) {
            toto._xp = toto._xp - weaponHorn._damage
        } else if (toto2._weapon = weaponPineapple){
            toto._xp = toto._xp - weaponPineapple._damage
        } 
        //console.log(player1._weapon)
    }

    // défendre
    handleDefend() {
        const damageWeapon = 10;
        this._xp = this._xp - damageWeapon/2;
    }

    // changer d'arme
    handleWeaponSwitch(newWeapon) {
        //$( "#tedWeapon" ).attr( "src", "assets/umbrella.png" );

        this._weapon = weapons.filter(weapon => weapon._className === newWeapon)[0];
        
        this._weapon = newWeapon;
        
        console.log(this._weapon)

    }
}