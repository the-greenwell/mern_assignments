class Ninja {
    constructor(name){
        this.name = name;
        this.health = 10;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(this.name)
        return this
    }
    showStats(){
        const {name,health,speed,strength} = this
        console.log(name,strength,speed,health)
        return this
    } 
    drinkSake(){
        this.health += 10
        return this
    }
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom(){
        super.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months.')
        return this
    }
    showStats(){
        console.log(super.showStats())
        return this
    }
}

const ninja1 = new Ninja('Hyabusa').sayName().showStats().drinkSake().drinkSake().drinkSake().showStats()
const sensei1 = new Sensei('Wag-Yu').showStats().speakWisdom().showStats()