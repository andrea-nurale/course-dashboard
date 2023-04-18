import {useEffect, useState} from "react"
import Table from '../../components/Table'

interface Customer {
  age: number
  id: number
  lastName: string
  firstName: string
  gender: string

}

const COLUMNS: {name: string, columnName: string}[] =
    [{name: 'First name', columnName: 'firstName'},
      {name: 'Last name',columnName: 'lastName'},
      {name: 'Email', columnName: 'email'},
    ]

const Customers = () => {

  const [customers, setCustomers] = useState<Customer[]>([])
  const fetchCustomers = async () => {
    const response = await fetch("http://localhost:3004/customers")
    const responseJson = await response?.json()
    setCustomers(responseJson)
  }


  useEffect(() => {
    fetchCustomers()
  }, [])


  return (
      <div className="p-6">
        <div>Customers</div>
        <div className="h-6"/>
        <Table columns={COLUMNS} data={customers}/>
      </div>
  )
}

export default Customers
