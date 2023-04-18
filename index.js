// 1
console.log(`Задача 1`);
for (let i = 20; i <= 30; i=i+0.5){
    console.log(i);
}
// 2
console.log(`Задача 2`);
for (let i = 10; i <= 100; i=i+10){
    console.log(i*27);
}
// 3
console.log(`Задача 3`);
let n = prompt(`Задача 3. Введите целое число.`);
for (let i = 1; i <= 100; i++){
    if (i**2<=n){
        console.log(i);
    } 
}
// 4
console.log(`Задача 4`);
n = prompt(`Задача 4. Введите число.`);
switch (true){
    case n < 2:
        console.log(`Число должно быть больше 1`);
        break;
    case n == 2:
        console.log(`${n} Простое число`);
        break;
    default:
        for (let i = 2; i <= Math.sqrt(n); i++){
            if (n % i === 0) {
                console.log(`${n} Составное число`);
                break;
            }
            else {
                console.log(`${n} Простое число`);
                break;
            }
        }
}
// 5
console.log(`Задача 5`);
n = num = prompt(`Задача 5. Введите число.`);
if (n !== null && n.trim() !== '' && !isNaN( +n )){
    while (n % 3 == 0) {
        n = n / 3;
        }
    console.log((n == 1)? `Число ${num} можно получить` : `Число ${num} нельзя получить`);
}
else{
console.log(`Canceled`);
}