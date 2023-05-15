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
        console.log(`Средний бал = ${Student.avg(this.grade).toFixed()}`)
        return this
    }

    age(){
        console.log(`Возраст студента - ${new Date().getFullYear() - this.birthYear}`)
        return this
    }

    present(){
        Student.addVisit(this, true)
        return this
    }

    absent(){
        Student.addVisit(this, false)
        return this
    }

    summary(){
        let avgGrade = Student.avg(this.grade).toFixed()
        let avgVisits = Student.avg(this.visits).toFixed(1)
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

// Статический метод обработки посещений
    static addVisit(obj, value){
        for (let i=0; i < obj.visits.length; i++){
            if (obj.visits[i] === undefined){
                obj.visits.splice(i,1,value)
                break
            }
        }
    }

// Статический метод вычисления стреднего
    static avg(arr) {
        return arr.reduce((a, x) => a + x, 0) / arr.length
    }
    
// Генератор оценок
    static gradeGen (from, to){
        let arr = []
        for (let i = 0; i < 25; i++){
            arr.push(Math.ceil(Math.random() * (to - from)) + from)
        }
        return arr
    }
}

const stud1 = new Student({firstName: 'Oleg', lastName: 'Sviridonov', birthYear: '2000', grade: Student.gradeGen(89,100)})
const stud2 = new Student({firstName: 'Nikita', lastName: 'Zelcer', birthYear: '2001', grade: Student.gradeGen(60,95)})
const stud3 = new Student({firstName: 'Artur', lastName: 'Matur', birthYear: '2002', grade: Student.gradeGen(20,90)})

stud1.info().age().autoPresent(25).avgGrade().summary()
stud2.info().age().autoAbsent(3).autoPresent(22).avgGrade().summary()
stud3.info().age().autoPresent(19).autoAbsent(6).avgGrade().summary()