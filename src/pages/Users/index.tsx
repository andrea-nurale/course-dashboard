import {useEffect, useState} from "react"
import Table from '../../components/Table'
import Form from './Form'
import Button from "../../components/Button";
import {User} from "../../utils/models";


const COLUMNS: {name: string, columnName: string}[] =
    [{name: 'First name', columnName: 'firstName'},
        {name: 'Last name',columnName: 'lastName'},
        {name: 'Age', columnName: 'age'},
        {name: 'Gender', columnName: 'gender'}
    ]

const Users = () => {

    const [open, setOpen] = useState(false)
    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState<User| null>(null)
    const handleClickNew = ()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setUser(null)
        setOpen(false)
    }

    const fetchUser = async () => {
        const response = await fetch("http://localhost:3004/users")
        const responseJson = await response?.json()
        setUsers(responseJson)
    }

    const handleEdit = (user: User)=>{
        setUser(user)
        setOpen(true)
    }


    useEffect(() => {
        fetchUser()
    }, [])


    return (
        <div>
            <div>Users</div>
            <Button onClick={handleClickNew}>New</Button>
            <Table columns={COLUMNS} data={users} handleEdit={handleEdit}/>
            <Form open={open} user={user} fetchUser={fetchUser} handleClose={handleClose}/>
        </div>
    )
}

export default Users
