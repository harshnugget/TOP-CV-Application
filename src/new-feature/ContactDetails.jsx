import { useState } from "react";
import EditableField from "./EditableField";

function Name({ setFirstName, setLastName, previewMode, style }) {
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
        disableEditing={previewMode}
        callbackFunc={getFirstName}
      />
      <EditableField
        defaultPlaceholderText="Last"
        editPlaceholderText="Enter last name..."
        editMode={false}
        multiLine={false}
        disableEditing={previewMode}
        callbackFunc={getLastName}
      />
    </div>
  );
}

function Email({ setEmail, previewMode, style }) {
  function getEmail({ value }) {
    setEmail(value);
  }
  return (
    <div className="email" style={style}>
      <EditableField
        defaultPlaceholderText="my-email@email.com"
        editPlaceholderText="Enter email..."
        editMode={false}
        disableEditing={previewMode}
        callbackFunc={getEmail}
      />
    </div>
  );
}

function Phone({ setPhone, previewMode, style }) {
  function getPhone({ value }) {
    setPhone(value);
  }
  return (
    <div className="phone" style={style}>
      <EditableField
        defaultPlaceholderText="0123456789"
        editPlaceholderText="Enter phone..."
        editMode={false}
        disableEditing={previewMode}
        callbackFunc={getPhone}
      />
    </div>
  );
}

export default function ContactDetails({
  updateContactDetails,
  previewMode,
  style,
}) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  function setFirstName(value) {
    const newData = { ...data, firstName: value };
    setData(newData);
    updateContactDetails(newData);
  }

  function setLastName(value) {
    const newData = { ...data, lastName: value };
    setData(newData);
    updateContactDetails(newData);
  }

  function setEmail(value) {
    const newData = { ...data, email: value };
    setData(newData);
    updateContactDetails(newData);
  }

  function setPhone(value) {
    const newData = { ...data, phone: value };
    setData(newData);
    updateContactDetails(newData);
  }

  return (
    <div className="contact-details" style={{ ...style }}>
      <Name
        style={{ display: "flex" }}
        setFirstName={setFirstName}
        setLastName={setLastName}
        previewMode={previewMode}
      />
      <Email
        style={{ display: "flex" }}
        setEmail={setEmail}
        previewMode={previewMode}
      />
      <Phone
        style={{ display: "flex" }}
        setPhone={setPhone}
        previewMode={previewMode}
      />
    </div>
  );
}

export { Name, Email, Phone };
