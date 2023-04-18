import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import { ChangeEvent, useState } from "react";

interface Props {
  open: boolean;
  handleClose: ()=> void
  fetchCustomers: ()=> void

}
const Form = ({ open, handleClose, fetchCustomers }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
    const body = JSON.stringify({ firstName, lastName, email });
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

  return (
    <Modal show={open}>
      <Input
        name="firstName"
        label="First name"
        onChange={handleChange}
        value={firstName}
      />
      <Input
        name="lastName"
        label="Last name"
        onChange={handleChange}
        value={lastName}
      />
      <Input name="email" label="Email" onChange={handleChange} value={email} />
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
