// Функция удаления с масива
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
function removeElement (array, item){
    let i = array.indexOf(item);
    if (i>=0){
        return array.splice(i,1);
    } else {
        return `Элемент со значением ${item} в массиве отсутствует`;
    }
}
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]