class Human {
    constructor (options) {
        this.name = options.name
        this.gender = options.gender
    }
}

class Apartment {
    type = 'apartment'
    residents = []

    addResident(res){
        return this.residents.push(res)
    }
}

class Building {
    type = 'building'
    apartments = []

    constructor(options){
        this.maxApart = options.maxApart
    }

    addApartment(apart){
        if (this.apartments.length < this.maxApart) {
            return this.apartments.push(apart)
        } else return console.log('Building is full')
    }
}

const man1 = new Human({name:'Peter', gender:'male'})
const man2 = new Human({name:'Jon', gender:'male'})
const man3 = new Human({name:'Bob', gender:'male'})
const man4 = new Human({name:'Lisa', gender:'female'})
const man5 = new Human({name:'Helen', gender:'female'})

console.log(man1)
console.log(man2)
console.log(man3)
console.log(man4)
console.log(man5)

const apart1 = new Apartment()
const apart2 = new Apartment()
const apart3 = new Apartment()
const apart4 = new Apartment()

apart1.addResident(man1)
apart2.addResident(man2)
apart2.addResident(man3)
apart3.addResident(man4)
apart4.addResident(man5)

console.log(apart1)
console.log(apart2)
console.log(apart3)
console.log(apart4)

const build1 = new Building({maxApart:3})
console.log(build1)

build1.addApartment(apart1)
build1.addApartment(apart2)
build1.addApartment(apart3)
build1.addApartment(apart4)

console.log(build1)
