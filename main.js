class Car {
    constructor(NumberOfWheels, EnginCapacity, CarPaint, CarType) {
        this.NumberOfWheels = NumberOfWheels;
        this.EnginCapacity = EnginCapacity;
        this.CarPaint = CarPaint;
        this.CarType = CarType;
    }
    getDetails() {

        return `${this.NumberOfWheels} ${this.EnginCapacity} ${this.CarPaint} `;
    }



    static getpbject(arraycar) {
        let maxengi = arraycar[0];

        arraycar.forEach(elm => {
            if (maxengi.EnginCapacity < elm.EnginCapacity) {
                maxengi = elm;
            }

        });
        return maxengi;
    }
}
const privateCar0 = new Car(6, 2000, 'black');
const privateCar = new Car(4, 5600, 'red');



let printToWeindow = document.getElementById('div1');

printToWeindow.innerHTML += privateCar0.getDetails();


class Bus extends Car {
    constructor(NumberOfWheels, EnginCapacity, CarPaint, carname) {
        super(NumberOfWheels, EnginCapacity, CarPaint);
        this.carname = carname;
    }
    busDetails() {

        return super.getDetails() + `car name:${this.carname}`;
    }
}


const busCar = new Bus(8, 4000, 'blue', 'mercesdes')

printToWeindow.innerHTML += busCar.busDetails();


class Truck extends Car {
    constructor(NumberOfWheels, EnginCapacity, CarPaint, carname) {
        super(NumberOfWheels, EnginCapacity, CarPaint, carname);
        this.carname = carname;

    }
    truckDetails() {
        super.getDetails();
    }

    cahangeToUppercase() {
        for (let i = 0; i < this.carname.length; i++) {

            return this.carname[0].toUpperCase() + this.carname.substr(1, this.carname.length - 1) + this.carname[this.carname.length - 1].toUpperCase();

        }
    }


    get returmFunc() {

        return this.cahangeToUppercase();
    }
}

const truck = new Truck(15, 6000, 'yellow', 'massna');

printToWeindow.innerHTML = truck.returmFunc;

class Jeep extends Car {
    constructor(NumberOfWheels, EnginCapacity, CarPaint, carname) {
        super(NumberOfWheels, EnginCapacity, CarPaint, carname);
        this.carname = carname;

    }
    jeepDetails() {
        super.getDetails();
    }
}


const tbody = document.getElementById('tbody');
function addFormDetails() {

    let tr = document.createElement('tr');

    const numberofwheels = document.getElementById("numberofwheels");
    const engincar = document.getElementById("engincar");
    const colorcar = document.getElementById("colorcar");
    const cars = document.getElementById("cars");
    console.log(numberofwheels.value, engincar.value, colorcar.value);

    const user = new Car(numberofwheels.value, engincar.value, colorcar.value, cars.value);
    console.log(user);

    tr.innerHTML = `<td>${user.NumberOfWheels}</td><td>${user.EnginCapacity}</td><td>${user.CarPaint} </td><td>${user.CarType}</td>`
    console.log(tr);
    tbody.appendChild(tr);
}

