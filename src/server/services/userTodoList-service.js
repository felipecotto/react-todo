export const UserService = async (userId) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/user/${userId}/todos`)
    const data = await result.json()
    return data;
}

export const UserPerfilService = async () => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await result.json()
    return data;
}


export const InversedDataUsers = (users) => (users.reduce((prev, item)=>({...prev, [item.id]:{...item}}),{}))