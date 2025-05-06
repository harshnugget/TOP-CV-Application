/**
 * EditableField Component
 *
 * Creates an editable element that initially displays text within a <span>.
 * When clicked, it transforms into a <textarea> for editing.
 * The <textarea> is styled to match and overlay the span, resizing dynamically
 * to align with the span's content height and width.
 *
 * Features:
 * - Customizable placeholder text displayed when the input is empty.
 * - Enters edit mode on click, exits on blur or (Enter).
 * - Holding (Shift + Enter) will create a newline.
 * - Supports a callback for handling state and events externally.
 */

import { useState } from "react";

export default function EditableField({
  defaultPlaceholderText = "Default text",
  editPlaceholderText = "Enter some text...",
  customStyles,
  editMode = true,
  multiLine = true,
  disableEditing = false,
  callbackFunc,
}) {
  const [_editMode, setEditMode] = useState(disableEditing ? false : editMode);
  const [_hovered, setHovered] = useState(false);
  const [_value, setValue] = useState("");

  const _customStyles = {
    textAreaBg: "aliceBlue",
    spanDefaultBg: "transparent",
    spanHoverBg: "rgb(211,211,211)",
    ...customStyles,
  };

  const divStyles = {
    display:
      disableEditing && !_value && !defaultPlaceholderText
        ? "none"
        : "inline-block",
    width: "max-content",
    maxWidth: "100%",
    position: "relative",
  };

  const textAreaStyles = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    resize: "none",
    backgroundColor: _customStyles.textAreaBg,
    border: "none",
    outline: "none",
    overflow: "hidden",
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
    opacity: _editMode ? "1" : "0",
  };

  const spanStyles = {
    visibility: _editMode ? "hidden" : "visible",
    backgroundColor:
      _hovered && !disableEditing
        ? _customStyles.spanHoverBg
        : _customStyles.spanDefaultBg,
  };

  const sharedStyles = {
    display: "inline-block",
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
    wordBreak: "break-word",
    whiteSpace: "pre-wrap",
    padding: "2px",
  };

  function eventHandler(e) {
    const states = {
      editMode: _editMode,
      hovered: _hovered,
      value: _value,
    };

    switch (e.type) {
      case "mouseover":
        setHovered(true);
        break;
      case "mouseleave":
        setHovered(false);
        break;
    }

    if (!_editMode) {
      switch (e.type) {
        case "click":
          if (!disableEditing) {
            setEditMode(true);
            states.editMode = true;
          }
          break;
      }
    }

    if (_editMode) {
      switch (e.type) {
        case "blur":
          setEditMode(false);
          states.editMode = false;
          break;
        case "keydown":
          if (e.key === "Enter" && (!e.shiftKey || !multiLine)) {
            // Prevent newline if Shift is NOT held or multiline is false
            e.preventDefault();
            e.target.blur();
          }
          break;
        case "change":
          setValue(e.target.value);
          states.value = e.target.value;
          break;
      }
    }

    // Send state and event data to callback function
    if (callbackFunc && typeof callbackFunc === "function") {
      callbackFunc({ ...states, event: e });
    }
  }

  return (
    <div
      className="editable-field"
      style={divStyles}
      onClick={eventHandler}
      onMouseOver={eventHandler}
      onMouseLeave={eventHandler}
    >
      {!disableEditing && (
        <textarea
          autoFocus={_editMode}
          className={`editable-field__textarea ${
            _editMode ? `editable-field__textarea--edit` : ""
          }`}
          style={{ ...textAreaStyles, ...sharedStyles }}
          value={_value}
          placeholder={editPlaceholderText}
          onChange={eventHandler}
          onBlur={eventHandler}
          onKeyDown={eventHandler}
        />
      )}

      <span
        className={`editable-field__span ${
          _hovered ? "editable-field__span--hovered" : ""
        }`}
        style={{
          ...spanStyles,
          ...sharedStyles,
        }}
      >
        {(
          _value || (_editMode ? editPlaceholderText : defaultPlaceholderText)
        ).replace(
          /\n$/,
          "\n\u200B" // Ensures span height increases on newlines
        )}
      </span>
    </div>
  );
}
