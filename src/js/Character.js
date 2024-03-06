export default class Character {
    constructor() {
        this._attack = 100;
        this._stoned = false;
    }

    get stoned() {
        return this._stoned;
    }

    set stoned(value) {
        this._stoned = Boolean(value);
    }

    set attack(value) {
        this._attack = parseInt(value);
    }

    get attack() {
        return this._attack;
    }

    getAttack(x) {
        const attack = this._attack * (1 - (x - 1) * 0.1);
        if (this._stoned) {
            return attack - Math.log2(x) * 5;
        }
        return attack;
    }
}