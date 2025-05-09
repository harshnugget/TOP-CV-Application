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
        previewModeOnly={previewMode}
        onInput={(e) => updateFirstName({ value: e.target.value })}
      />
      <span>&nbsp;</span>
      <EditableField
        type="text"
        previewPlaceholder="Last"
        editPlaceholder="Enter last name..."
        editMode={false}
        previewModeOnly={previewMode}
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
        previewModeOnly={previewMode}
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
        previewModeOnly={previewMode}
        onInput={(e) => getPhone({ value: e.target.value })}
      />
    </div>
  );
}

function Address({ updateAddress, previewMode, style }) {
  function getCity(value) {
    updateAddress("city", value);
  }

  function getPostCode(value) {
    updateAddress("postCode", value);
  }

  return (
    <>
      <div className="city" style={style}>
        <EditableField
          type="text"
          previewPlaceholder="My City"
          editPlaceholder="Enter city..."
          editMode={false}
          previewModeOnly={previewMode}
          onInput={(e) => getCity(e.target.value)}
        />
        <span>,</span>
      </div>
      <div className="post-code" style={style}>
        <EditableField
          type="text"
          previewPlaceholder="AB3 9CD"
          editPlaceholder="Enter post code..."
          editMode={false}
          previewModeOnly={previewMode}
          onInput={(e) => getPostCode(e.target.value)}
        />
      </div>
    </>
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
    address: { city: "", postCode: "" },
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

  function updateAddress(field, value) {
    console.log(field, value);
    const newData = { ...data, address: { ...data.address, [field]: value } };
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
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
        <div>
          <Address
            style={{ display: "flex", justifyContent: "end" }}
            updateAddress={updateAddress}
            previewMode={previewMode}
          />
        </div>
      </div>
    </div>
  );
}

export { Name, Email, Phone };
