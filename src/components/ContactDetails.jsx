import { useState } from "react";
import EditableField from "./EditableField";

function Name({ updateFirstName, updateLastName, previewMode, style }) {
  return (
    <div className="name" style={{ ...style }}>
      <EditableField
        type="text"
        previewPlaceholder="First"
        editPlaceholder="Enter first name..."
        editMode={false}
        onInput={(e) => updateFirstName({ value: e.target.value })}
      />
      <span>&nbsp;</span>
      <EditableField
        type="text"
        previewPlaceholder="Last"
        editPlaceholder="Enter last name..."
        editMode={false}
        onInput={(e) => updateLastName({ value: e.target.value })}
      />
    </div>
  );
}

function Email({ updateEmail, previewMode, style }) {
  function getEmail({ value }) {
    updateEmail(value);
  }

  return (
    <div className="email" style={style}>
      <EditableField
        type="email"
        previewPlaceholder="my-email@email.com"
        editPlaceholder="Enter email..."
        editMode={false}
        onInput={(e) => getEmail({ value: e.target.value })}
      />
    </div>
  );
}

function Phone({ updatePhone, previewMode, style }) {
  function getPhone({ value }) {
    updatePhone(value);
  }

  return (
    <div className="phone" style={style}>
      <EditableField
        type="phone"
        previewPlaceholder="0123456789"
        editPlaceholder="Enter phone..."
        editMode={false}
        onInput={(e) => getPhone({ value: e.target.value })}
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

  function updateFirstName(value) {
    const newData = { ...data, firstName: value };
    setData(newData);
    updateContactDetails(newData);
  }

  function updateLastName(value) {
    const newData = { ...data, lastName: value };
    setData(newData);
    updateContactDetails(newData);
  }

  function updateEmail(value) {
    const newData = { ...data, email: value };
    setData(newData);
    updateContactDetails(newData);
  }

  function updatePhone(value) {
    const newData = { ...data, phone: value };
    setData(newData);
    updateContactDetails(newData);
  }

  return (
    <div className="contact-details" style={{ ...style }}>
      <Name
        style={{ display: "inline-block" }}
        updateFirstName={updateFirstName}
        updateLastName={updateLastName}
        previewMode={previewMode}
      />
      <Email
        style={{ display: "block" }}
        updateEmail={updateEmail}
        previewMode={previewMode}
      />
      <Phone
        style={{ display: "flex" }}
        updatePhone={updatePhone}
        previewMode={previewMode}
      />
    </div>
  );
}

export { Name, Email, Phone };
