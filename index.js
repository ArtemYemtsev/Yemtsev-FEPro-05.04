class Student {
    constructor(options){
        this.firsName = options.firstName
        this.lastName = options.lastName
        this.birthYear = options.birthYear
    }

    grade = new Array()
    visits = new Array(25)

    present(){
        return this.visits.push(true)
    }

    absent(){
        return this.visits.push(false)
    }

    summary(){
        
    }
}