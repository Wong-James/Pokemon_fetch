class Ninja {
    constructor(name, health=100, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    drinkSake() {
        this.health += 10;
        return this.health;
    }
    sayName() {
        return this.name
    }
    showStats() {
        return {Name: this.name, Health: this.health, Speed: this.speed, Strength: this.strength};
    }

}
class Sensei extends Ninja {
    constructor(name, wisdom=10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom
    }
    showStats() {
        return {Name: this.name, Health: this.health, Speed: this.speed, Strength: this.strength, Wisdom: this.wisdom};
    }
    speakWisdom() {
        this.drinkSake()
        return "What one programmer can do in one month, two programmers can do in two months."
    }
}

const ninja1 = new Ninja("Hyabusa");
console.log(ninja1.sayName());
console.log(ninja1.drinkSake());
console.log(ninja1.showStats());


const superSensei = new Sensei("Master Splinter");
console.log(superSensei.speakWisdom());
console.log(superSensei.showStats());

