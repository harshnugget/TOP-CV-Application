import EditableField from "./EditableField";

function Name({ style }) {
  return (
    <div className="name" style={style}>
      <EditableField
        defaultPlaceholderText="First"
        editPlaceholderText="Enter first name..."
        editMode={false}
        multiLine={false}
      />
      <EditableField
        defaultPlaceholderText="Last"
        editPlaceholderText="Enter last name..."
        editMode={false}
        multiLine={false}
      />
    </div>
  );
}

function Email({ style }) {
  return (
    <div className="email" style={style}>
      <EditableField
        defaultPlaceholderText="my-email@email.com"
        editPlaceholderText="Enter email..."
        editMode={false}
      />
    </div>
  );
}

function Phone({ style }) {
  return (
    <div className="phone" style={style}>
      <EditableField
        defaultPlaceholderText="0123456789"
        editPlaceholderText="Enter phone..."
        editMode={false}
      />
    </div>
  );
}

export { Name, Email, Phone };
