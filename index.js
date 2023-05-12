class Student {
    constructor(options){
        this.firstName = options.firstName
        this.lastName = options.lastName
        this.birthYear = options.birthYear
        this.grade = options.grade
    }
    visits = new Array(25)

    info(){
        console.log(this)
        return this
    }

    avgGrade(){
        console.log(`Средний бал = ${avg(this.grade).toFixed()}`)
        return this
    }

    age(){
        console.log(`Возраст студента - ${new Date().getFullYear() - this.birthYear}`)
        return this
    }

    present(){
        addVisit(this, true)
        return this
    }

    absent(){
        addVisit(this, false)
        return this
    }

    summary(){
        let avgGrade = avg(this.grade).toFixed()
        let avgVisits = avg(this.visits).toFixed(1)
        console.log(`${avgGrade}/${avgVisits}`)
        if (avgGrade >= 90 && avgVisits >= 0.9){
            console.log('Молодец!')
        }
        else if (avgGrade < 90 && avgVisits >= 0.9 || avgGrade >= 90 && avgVisits < 0.9){
            console.log('Хорошо, но можно лучше')
        }
        else console.log('Редиска')
        return this
    }

// Методы для упрощения демонстрации
    autoPresent(iter){
        for (let i=0; i < iter; i++){
            this.present();
        }
        return this
    }

    autoAbsent(iter){
        for (let i=0; i < iter; i++){
            this.absent();
        }
        return this
    }
}

// Функция добавления в массив посещения
function addVisit(obj, value){
    for (let i=0; i < obj.visits.length; i++){
        if (obj.visits[i] === undefined){
            obj.visits.splice(i,1,value)
            break
        }
    }
}

// Функция вычисления среднего значения массива
function avg(arr) {
    return arr.reduce((a, x) => a + x, 0) / arr.length
}

// Генеротор массива оценок
function gradeGen (from, to){
    let arr = []
    for (let i = 0; i < 25; i++){
        arr.push(Math.ceil(Math.random() * (to - from)) + from)
    }
    return arr
}

let gradeEx = gradeGen(89,100)
let gradeWell = gradeGen(60,95)
let gradeRediska = gradeGen(20,90)

const stud1 = new Student({firstName: 'Oleg', lastName: 'Sviridonov', birthYear: '2000', grade: gradeEx})
const stud2 = new Student({firstName: 'Nikita', lastName: 'Zelcer', birthYear: '2001', grade: gradeWell})
const stud3 = new Student({firstName: 'Artur', lastName: 'Matur', birthYear: '2002', grade: gradeRediska})

stud1.info().age().autoPresent(25).avgGrade().summary()
stud2.info().age().autoAbsent(3).autoPresent(22).avgGrade().summary()
stud3.info().age().autoPresent(19).autoAbsent(6).avgGrade().summary()