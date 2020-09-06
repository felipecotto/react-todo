export const UserService = async (userId) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/user/${userId}/todos`)
    const data = await result.json()
    return data;
}
