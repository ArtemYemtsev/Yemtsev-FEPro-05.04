let size = {
    SIZE_SMALL: {
        price: 50,
        ccal: 20
        },
    SIZE_BIG: {
        price: 100,
        ccal: 40
        }
}

let stuffing = {
    STUFFING_CHEESE: {
        price: 10,
        ccal: 20
    },
    STUFFING_SALAT: {
        price: 20,
        ccal: 5
    },
    STUFFING_POTATO: {
        price: 15,
        ccal: 10
    }
}

let topping = {
    TOPPING_SAUCE: {
        price: 15,
        ccal: 0
    },
    TOPPING_MAYO: {
        price: 20,
        ccal: 5
    }
}

class Humburger {
    constructor(size, stuffing, topping){
        this.size = size
        this.stuffing = stuffing
        this.topping = topping
    }

    addTopping(topp){
        Humburger.isUndefined(this)
        this.topping.ccal += topp.ccal
        this.topping.price += topp.price
        return this 
    }

    addStuffing(stuff){
        Humburger.isUndefined(this)
        this.stuffing.ccal += stuff.ccal
        this.stuffing.price += stuff.price
        return this     
    }

    calculatePrice(){
        Humburger.isUndefined(this)
        return this.size.price + this.stuffing.price + this.topping.price
    }

    calculateCcal(){
        Humburger.isUndefined(this)
        return this.size.ccal + this.stuffing.ccal + this.topping.ccal
    }

    static isUndefined (obj){
        if (obj.stuffing === undefined){
            obj.stuffing = { price: 0, ccal: 0}
        }
        if (obj.topping === undefined){
            obj.topping = { price: 0, ccal: 0}
        }
    }
}


let humburger = new Humburger(size.SIZE_SMALL, stuffing.STUFFING_CHEESE)
humburger.addTopping(topping.TOPPING_MAYO)
console.log(humburger)
console.log(`Humburger ccal = ${humburger.calculateCcal()}`)
console.log(`Humburger price = ${humburger.calculatePrice()}`)
console.log('Добавим SAUCE, POTATO, SALAT')
humburger.addTopping(topping.TOPPING_SAUCE)
humburger.addStuffing(stuffing.STUFFING_POTATO).addStuffing(stuffing.STUFFING_SALAT)
console.log(`Humburger ccal = ${humburger.calculateCcal()}`)
console.log(`Humburger price = ${humburger.calculatePrice()}`)