
/**
 * Déclarer les weapons, leur damage
 */

class Weapons extends GameAttribute {
    constructor(name, damage, className) {
        super(name, className);
        this.damage = damage;
    }
}