const parts = {
    size: {
        SMALL: {
            price: 50,
            ccal: 20
        },
        BIG: {
            price: 100,
            ccal: 40
        }
    },
    stuffing: {
        CHEESE: {
            price: 10,
            ccal: 20
        },
        SALAT: {
            price: 20,
            ccal: 5
        },
        POTATO: {
            price: 15,
            ccal: 10
        }
    },
    topping: {
        SAUCE: {
            price: 15,
            ccal: 0
        },
        MAYO: {
            price: 20,
            ccal: 5
        }
    }
}

class Humburger {
    constructor(option){
        this = option
    }
    
}

let humburger = new Humburger(Humburger.BIG)

console.log(humburger.size)