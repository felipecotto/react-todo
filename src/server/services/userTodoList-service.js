export const UserService = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await result.json()
    return data;
}
