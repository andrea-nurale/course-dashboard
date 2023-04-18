import {useEffect, useState} from "react"

interface User {
    age: number
    id: number
    lastName: string
    name: string
}

const Users = () => {

    const [users, setUsers] = useState<User[]>([])
    const fetchUser = async () => {
        const response = await fetch("http://localhost:3004/users")
        const responseJson = await response?.json()
        setUsers(responseJson)
    }


    useEffect(() => {
        fetchUser()
    }, [])

    return (
        <div>
            <div>Users</div>
            <div>{users.map(user => <div key={user.id}>{user.name}</div>)}</div>
        </div>
    )
}

export default Users
