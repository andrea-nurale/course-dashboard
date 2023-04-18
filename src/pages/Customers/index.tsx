import { useEffect, useState } from "react";
import Table from "../../components/Table";
import Button from "../../components/Button";
import Form from "./form"
import {Customer} from '../../utils/models'




const COLUMNS: { name: string; columnName: string }[] = [
  { name: "First name", columnName: "firstName" },
  { name: "Last name", columnName: "lastName" },
  { name: "Email", columnName: "email" },
  { name: "Edit", columnName: "edit" },
];

const Customers = () => {
  const [open, setOpen] = useState(false);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [customer, setCustomer] = useState<Customer| null>(null);
  const fetchCustomers = async () => {
    const response = await fetch("http://localhost:3004/customers");
    const responseJson = await response?.json();
    setCustomers(responseJson);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const onClickNew = () => {
    setOpen(true);
  };

  const onClickClose = () => {
    setOpen(false);
  };

  const handleEdit = (item: any)=>{
    setCustomer(item)
  }

  return (
    <div className="p-6">
      <div>Customers</div>
      <div className="h-6" />
      <Button onClick={onClickNew}>Nuovo</Button>
      <Table columns={COLUMNS} data={customers} handleEdit={handleEdit}/>
      <Form customer={customer} open={open} fetchCustomers={fetchCustomers} handleClose={onClickClose}/>
    </div>
  );
};

export default Customers;
