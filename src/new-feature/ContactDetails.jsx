import { useState } from "react";
import EditableField from "./EditableField";

function Name({ style, setFirstName, setLastName }) {
  function getFirstName({ value }) {
    setFirstName(value);
  }

  function getLastName({ value }) {
    setLastName(value);
  }

  return (
    <div className="name" style={style}>
      <EditableField
        defaultPlaceholderText="First"
        editPlaceholderText="Enter first name..."
        editMode={false}
        multiLine={false}
        callbackFunc={getFirstName}
      />
      <EditableField
        defaultPlaceholderText="Last"
        editPlaceholderText="Enter last name..."
        editMode={false}
        multiLine={false}
        callbackFunc={getLastName}
      />
    </div>
  );
}

function Email({ style, setEmail }) {
  function getEmail({ value }) {
    setEmail(value);
  }
  return (
    <div className="email" style={style}>
      <EditableField
        defaultPlaceholderText="my-email@email.com"
        editPlaceholderText="Enter email..."
        editMode={false}
        callbackFunc={getEmail}
      />
    </div>
  );
}

function Phone({ style, setPhone }) {
  function getPhone({ value }) {
    setPhone(value);
  }
  return (
    <div className="phone" style={style}>
      <EditableField
        defaultPlaceholderText="0123456789"
        editPlaceholderText="Enter phone..."
        editMode={false}
        callbackFunc={getPhone}
      />
    </div>
  );
}

export default function ContactDetails({ style }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  function setFirstName(value) {
    const newData = { ...data, firstName: value };
    setData(newData);
  }

  function setLastName(value) {
    const newData = { ...data, lastName: value };
    setData(newData);
  }

  function setEmail(value) {
    const newData = { ...data, email: value };
    setData(newData);
  }

  function setPhone(value) {
    const newData = { ...data, phone: value };
    setData(newData);
  }

  return (
    <div className="contact-details" style={{ ...style }}>
      <Name
        style={{ display: "flex" }}
        setFirstName={setFirstName}
        setLastName={setLastName}
      />
      <Email style={{ display: "flex" }} setEmail={setEmail} />
      <Phone style={{ display: "flex" }} setPhone={setPhone} />
    </div>
  );
}

export { Name, Email, Phone };
