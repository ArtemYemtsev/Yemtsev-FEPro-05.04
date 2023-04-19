function pow (num, degree){
    switch (true){
        case num === 0 && degree <= 0:
            return 'Невозможно возвести 0 в степень меньше 1';
        case num === 1 || num === 0:
            return num;
        case degree === 0:
            return 1;
        case degree != 1:
            if (degree > 0){
                return num * pow(num, --degree);
            } else if (degree < 0) {
                return 1 / num * pow(num, ++degree);
            }
        default:
            return num;
    }
}
// Примеры
console.log(pow(0, 2));
console.log(pow(0, -2));
console.log(pow(1, 2));
console.log(pow(2, 2));
console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(2, -1));
console.log(pow(2, -2));
console.log(pow(2, -3));