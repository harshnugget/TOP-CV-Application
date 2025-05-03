import { useState } from "react";
import EditableField from "./EditableField";

export default function Description() {
  const [showDescription, setShowDescription] = useState(false);

  function getData({ event, value }) {
    if (event.type === "blur" && !value) {
      setShowDescription(false);
    }
  }

  return (
    <div className="description">
      {showDescription ? (
        <EditableField
          defaultPlaceholderText="Description"
          editPlaceholderText="Enter a description..."
          editMode={true}
          multiLine={true}
          callbackFunc={getData}
        />
      ) : (
        <button type="button" onClick={() => setShowDescription(true)}>
          Add description
        </button>
      )}
    </div>
  );
}
