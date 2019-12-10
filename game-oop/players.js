/**
 * Générer les players
 */

class Player extends GameAttribute {
    constructor(name, className, weapon) {
        super(name, className)
        this._weapon = weapon;
    }
}