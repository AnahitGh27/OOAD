// dog class
class Dog 
{
    sitting = false;
    constructor(name, breed, age, weight) {
        this.name = name;
        this.breed = breed;
        this.age = age; 
        this.weight = weight;
        this.minAge = 1;
    }

    getFullInfoAboutDog() {
        if (this.age === this.minAge) {
            return `Dog's name is ${this.name}.\nBreed - ${this.breed} \nAge - ${this.age} month old \nWeight - ${this.weight} kg`;
        } else if (this.age > this.minAge) {
            return `Dog's name is ${this.name}.\nBreed - ${this.breed} \nAge - ${this.age} months old \nWeight - ${this.weight} kg`;
        }
    }
    eat() {
        console.log(`${this.name} is eating healthy food.`)
    }
    drink() {
        console.log(`${this.name} is drinking water.`)
    }
    run() {
        if (this.age > this.minAge) {
            console.log(`${this.name} is running very fast`);
        } else {
            console.log("The doggy is still small and can't run fast.");
        }
    }
    bark() {
        if (this.age > this.minAge) {
            console.log(`${this.name} is barking loudly.`);
        } else {
            console.log(`${this.name} is barking.`)
        }
    }
    sit() {
        if (this.sitting) {
            console.log(`${this.name} is already sitting.`);
        } else {
            this.sitting = true;
            console.log(`${this.name} is sitting now.`);
        }
    }
    stand() {
        if (this.sitting) {
            this.sitting = false;
            console.log(`Stand up. ${this.name} is standing on hind legs now.`);
        } else {
            console.log(`${this.name} is standing on hind legs.`);
        }
    }
}
