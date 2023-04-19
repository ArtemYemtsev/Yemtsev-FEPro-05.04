// Функция с замыканием
let calc = () => {
    let num = 0;
    return function(n){
        return console.log(num += n);
    }
}

let sum = calc();

sum(3);  /* = 3 */
sum(5);  /* = 8 */
sum(20); /* = 28 */