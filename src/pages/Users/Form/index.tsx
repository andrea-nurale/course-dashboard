import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { ChangeEvent, useEffect, useState } from "react";
import { User } from "../../../utils/models";


interface Props {
  open: boolean;
  handleClose: () => void;
  fetchUser: () => void;
  user: User | null;
}
const Form = ({ open, handleClose, fetchUser, user }: Props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [age, setAge] = useState("");
  const [ageError, setAgeError] = useState("");

  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");
  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setAge("");
    setGender("");
    setFirstNameError("");
    setLastNameError("");
    setAgeError("");
    setGenderError("");
  };

  const handleCloseAndReset = () => {
    handleReset();
    handleClose();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "firstName") {
      return setFirstName(value);
    }
    if (name === "lastName") {
      return setLastName(value);
    }
    if (name === "age") {
      return setAge(value);
    }
    if (name === "gender") {
      return setGender(value);
    }
  };
  const handleSave = async () => {
    if (!firstName.length) {
      setFirstNameError("obbligatorio");
    }
    if (!lastName.length) {
      setLastNameError("obbligatorio");
    }
    if (!gender.length) {
      setGenderError("obbligatorio");
    }
    if (!age.length) {
      setAgeError("obbligatorio");
    }
    if (
      !gender.length ||
      !age.length ||
      !firstName.length ||
      !lastName.length
    ) {
      return null;
    }

    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const body = JSON.stringify({
      firstName,
      lastName,
      age: Number(age),
      gender,
    });
    if (user?.id) {
      await fetch(`http://localhost:3004/users/${user?.id}`, {
        method: "PATCH",
        headers,
        body,
      });
      fetchUser();
      return handleCloseAndReset();
    }
    await fetch("http://localhost:3004/users", {
      method: "POST",
      headers,
      body,
    });
    fetchUser();
    handleCloseAndReset();
  };

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setAge(String(user.age));
      setGender(user.gender);
    }
    if (!user) {
      handleReset();
    }
  }, [user]);

  return (
    <Modal show={open}>
      <Input
        name="firstName"
        label="First name"
        onChange={handleChange}
        value={firstName}
        error={firstNameError}
      />
      <Input
        name="lastName"
        label="Last name"
        onChange={handleChange}
        value={lastName}
        error={lastNameError}
      />
      <Input
        name="age"
        label="Age"
        onChange={handleChange}
        value={age}
        error={ageError}
      />
      <Input
        name="gender"
        label="Gender"
        onChange={handleChange}
        value={gender}
        error={genderError}
      />
      <div className="flex justify-end">
        <Button onClick={handleCloseAndReset}>Chiudi</Button>
        <div className="w-6" />
        <Button onClick={handleSave}>Salva</Button>
      </div>
    </Modal>
  );
};

export default Form;
