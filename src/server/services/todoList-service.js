export const TodoListService = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await result.json()
    return data;
}
