//helicopter class
class Helicopter 
{
    constructor(name, manufacturer, maxAltitude, maxSpeed, engineType) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.maxAltitude = maxAltitude;
        this.currentAltitude = 0;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = 0;
        this.engineType = engineType;
        this.fuel = 0;
    }

    getFullInfoAboutHelicopter() {
        console.log(`Name - ${this.name} \nManufacturer - ${this.manufacturer} \nMaximum Altitude - ${this.maxAltitude} km \nMaximum Speed - ${this.maxSpeed} km/h \nEngine type - ${this.engineType}`);
    }

    refueling() {
        this.fuel += 50;
    }

    takeOff() {
        if(this.fuel < 20) { 
            console.log(`There is not enough fuel. You can't take off.`)
        } else {
            console.log(`${this.name} is taking off.`);
            this.fuel -= 10;
            this.currentAltitude = this.maxAltitude;
            this.currentSpeed = this.maxSpeed;
        }
    }

    land() {
        console.log(`${this.name} is landing.`);
        this.currentAltitude = 0;
        this.currentSpeed = 0;
    }
}

