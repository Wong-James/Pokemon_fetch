class Ninja {
    constructor(name, health=100, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    drinkSake = () => {
        this.health += 10;
    }
    sayName = () => {
        console.log(`Hello my name is ${this.name}`)
    }
    showStats = () => {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

}

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength);
        this.wisdom = wisdom
    }
    showStats = () => {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}, Wisdom: ${this.wisdom}`);
    }
    speakWisdom = () => {
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName()
ninja1.drinkSake()
ninja1.showStats()


const superSensei = new Sensei("Master Splinter")
superSensei.speakWisdom()
superSensei.showStats()

