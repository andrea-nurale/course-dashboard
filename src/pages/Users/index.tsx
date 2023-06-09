import {ChangeEvent, useEffect, useState} from "react"
import Table from '../../components/Table'
import Form from './Form'
import Button from "../../components/Button";
import {User} from "../../utils/models";
import ModalConfirm from "./ModalConfirm";
import Input from "../../components/Input";


const COLUMNS: {name: string, columnName: string}[] =
    [{name: 'First name', columnName: 'firstName'},
        {name: 'Last name',columnName: 'lastName'},
        {name: 'Age', columnName: 'age'},
        {name: 'Gender', columnName: 'gender'},
        {name: '', columnName: ''},
        {name: '', columnName: ''}
    ]

const Users = () => {

    const [open, setOpen] = useState(false)
    const [openConfirm, setOpenConfirm] = useState(false)
    const [users, setUsers] = useState<User[]>([])
    const [user, setUser] = useState<User| null>(null)
    const [id, setId] = useState<number| null>(null)
    const [serach, setSearch] = useState('')

    const handleClickNew = ()=>{
        setOpen(true)
    }
    const handleClose = ()=>{
        setUser(null)
        setOpen(false)
    }

    const fetchUser = async (value: string = '') => {
        const response = await fetch(`http://localhost:3004/users?q=${value}`)
        const responseJson = await response?.json()
        setUsers(responseJson)
    }

    const handleEdit = (user: User)=>{
        setUser(user)
        setOpen(true)
    }
    const handleDelete= (id: number)=>{
        setId(id)
        setOpenConfirm(true)

    }
    const handleCloseConfirm = async ()=>{
        setId(null)
        setOpenConfirm(false)
    }

    const handleDeleteConfirm= async ()=>{
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        await fetch(`http://localhost:3004/users/${id}`, {
            method: "DELETE",
            headers
        });
        await fetchUser()
        return handleCloseConfirm()

    }

    const handleChangeSearch= (event: ChangeEvent<HTMLInputElement>)=>{
        const search = event.target.value
        setSearch(search)
        fetchUser(search)
    }


    useEffect(() => {
        fetchUser()
    }, [])


    return (
        <div className="p-4">
            <div className="p-4">Users</div>
            <div className="w-64"><Input label={''} onChange={handleChangeSearch} value={serach}/></div>
            <div className="flex justify-end"> <Button onClick={handleClickNew}>New</Button></div>
            <Table columns={COLUMNS} data={users} handleEdit={handleEdit} handleDelete={handleDelete}/>
            <Form open={open} user={user} fetchUser={fetchUser} handleClose={handleClose}/>
            <ModalConfirm open={openConfirm} handleClose={handleCloseConfirm} handleDelete={handleDeleteConfirm}/>
        </div>
    )
}

export default Users
