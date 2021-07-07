class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    drinkSake() {
        this.health += 10;
        return this.health;
    }
    sayName() {
        return this.name
    }
    showStats() {
        return [this.name, this.health, this.speed, this.strength];
    }
}

const ninja1 = new Ninja("Hyabusa");
console.log(ninja1.sayName());
console.log(ninja1.showStats());
console.log(ninja1.drinkSake());
