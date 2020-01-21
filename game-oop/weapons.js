class Weapons extends GameAttribute {
    constructor(name, damage, className) {
        super(name, className);
        this._damage = damage;
    }
}