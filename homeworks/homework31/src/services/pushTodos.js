export const pushTodos = (todos) => {
    localStorage.setItem('myTodos', JSON.stringify(todos))
}