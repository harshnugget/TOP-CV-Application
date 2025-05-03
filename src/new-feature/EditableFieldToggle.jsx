import { useState } from "react";
import EditableField from "./EditableField";

export default function EditableFieldToggle({
  buttonText = "Add text",
  editPlaceholderText = "Enter some text...",
  editMode = false,
  multiLine = false,
  style,
  callbackFunc,
}) {
  const [showButton, setShowButton] = useState(!editMode);

  function getData({ event, value }) {
    if (event.type === "blur" && !value) {
      setShowButton(true);
    }

    if (callbackFunc && typeof callbackFunc === "function") {
      callbackFunc({ event, value });
    }
  }

  return (
    <div className="editable-field-toggle" style={style}>
      {showButton ? (
        <button type="button" onClick={() => setShowButton(false)}>
          {buttonText}
        </button>
      ) : (
        <EditableField
          editPlaceholderText={editPlaceholderText}
          editMode={true}
          multiLine={multiLine}
          callbackFunc={getData}
        />
      )}
    </div>
  );
}
