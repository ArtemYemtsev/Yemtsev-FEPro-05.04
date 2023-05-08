class Human {
    constructor (options) {
        this.name = options.name
        this.age = options.age
    }

    showMan () {
        console.log (this)
        return this
    }
}

class Car {
    driver = new Human({name: undefined, age: undefined})
    constructor (options){
        this.mark = options.mark
        this.model = options.model
        this.year = options.year
        this.color = options.color
    }

    Driver (man) {
        if (man.age >= 18){
            this.driver = man
            return this
        }
        else {
            console.log('Driver age is < 18')
            return this
        }
    }

    showCar () {
        console.log(this)
        this.driver.showMan()
        return this
    }
}

const man1 = new Human({name:'Rick', age: 19})
const man2 = new Human({name:'Morty', age: 17})
man1.showMan()
man2.showMan()

const car1 = new Car({mark: 'BMW', model: 'M5', year: '2015', color: 'red'})
const car2 = new Car({mark: 'Audi', model: 'Q5', year: '2017', color: 'black'})

car1.Driver(man1).showCar()
car2.Driver(man2).showCar()
