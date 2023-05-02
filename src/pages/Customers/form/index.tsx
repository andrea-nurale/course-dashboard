import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import {ChangeEvent, useEffect, useState} from "react";
import {validateEmail} from "../../../utils/costants";
import {Customer} from '../../../utils/models'
interface Props {
  open: boolean;
  handleClose: ()=> void
  fetchCustomers: ()=> void
  customer: Customer | null

}
const Form = ({ open, handleClose, fetchCustomers, customer }: Props) => {
    console.log({customer})
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

      console.log(event.target.value)
    if (event.target.name === "firstName") {
      return setFirstName(event.target.value);
    }
    if (event.target.name === "lastName") {
      return setLastName(event.target.value);
    }
    if (event.target.name === "email") {
      return setEmail(event.target.value);
    }
  };

  const handleSave = async () => {
    if (!validateEmail.test(email.toLowerCase())) {
       setEmailError("Email non valida")
    }
    if (!firstName.length) {
       setFirstNameError("obbligatorio")
    }
    if (!lastName.length) {
       setLastNameError("obbligatorio")
    }
    if(!validateEmail.test(email.toLowerCase()) || !firstName.length || !lastName.length){
      return null
    }
    const body = JSON.stringify({ firstName, lastName, email });
    if(customer?.id){
        await fetch(`http://localhost:3004/customers/${customer.id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "PATCH",
            body,
        });
        fetchCustomers();
        return handleClose();
    }
    await fetch("http://localhost:3004/customers", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body,
    });
    fetchCustomers();
    handleClose();
  };

  useEffect(()=>{
      if(customer){
          setFirstName(customer.firstName)
          setLastName(customer.lastName)
          setEmail(customer.email)
      }
      else{
          setFirstName('')
          setLastName('')
          setEmail('')
      }
  },[customer])

  return (
    <Modal show={open}>
      <Input
        name="firstName"
        label="First name"
        onChange={handleChange}
        value={firstName}
        error={firstNameError}
      />
      <div className="h-4"/>
      <Input
        name="lastName"
        label="Last name"
        onChange={handleChange}
        value={lastName}
        error={lastNameError}
      />
      <div className="h-4"/>
      <Input name="email" label="Email" onChange={handleChange} value={email} error={emailError}/>
      <div className="h-6" />
      <div className="flex justify-end">
        <Button onClick={handleClose}>Chiudi</Button>
        <div className="w-6" />
        <Button onClick={handleSave}>Salva</Button>
      </div>
    </Modal>
  );
};

export default Form;
