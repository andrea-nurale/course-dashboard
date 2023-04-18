import {useEffect, useState} from "react"
import Table from '../../components/Table'

interface User {
    age: number
    id: number
    lastName: string
    firstName: string
    gender: string

}

const COLUMNS: {name: string, columnName: string}[] =
    [{name: 'First name', columnName: 'firstName'},
        {name: 'Last name',columnName: 'lastName'},
        {name: 'Age', columnName: 'age'},
        {name: 'Gender', columnName: 'gender'}
    ]

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
            <Table columns={COLUMNS} data={users}/>
        </div>
    )
}

export default Users
