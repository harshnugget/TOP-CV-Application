import { useState } from "react";
import EditableField from "./EditableField";

export default function Profile({ updateProfile, previewMode, style }) {
  const [toggleProfile, setToggleProfile] = useState(false);

  return (
    <>
      <div className="profile" style={{ ...style }}>
        {toggleProfile ? (
          <EditableField
            previewPlaceholder="Profile"
            editPlaceholder="Enter a profile..."
            type="textarea"
            editMode={true}
            autoFocus={true}
            previewModeOnly={previewMode}
            maxLength="350"
            onInput={(e) => updateProfile(e.target.value)}
            onBlur={(e) => !e.target.value && setToggleProfile(false)}
          />
        ) : (
          !previewMode && (
            <button
              type="button"
              className="add-btn add-btn__profile"
              onClick={() => setToggleProfile(true)}
            >
              Add profile
            </button>
          )
        )}
      </div>
    </>
  );
}
