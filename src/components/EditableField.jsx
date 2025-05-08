/**
 * EditableField Component
 *
 * Features:
 * - Input types: textarea, text, phone, email, date
 * - Customizable placeholder text.
 * - Enters edit mode on click, exits on blur or (Enter).
 * - Holding (Shift + Enter) will create a newline for textarea type.
 * - Support callbacks for handling events externally.
 */

import { useState } from "react";

export default function EditableField({
  type = "text",
  previewPlaceholder = "Default",
  editPlaceholder = "Enter a value...",
  editMode = false,
  autoFocus = false,
  hoveredBgColor = "gainsboro",
  editModeBgColor = "gainsboro",
  onInput,
  onFocus,
  onBlur,
}) {
  const [_value, setValue] = useState("");
  const [_editMode, setEditMode] = useState(editMode);
  const [_hovered, setHovered] = useState(false);

  const allowedTypes = ["text", "phone", "email", "textarea", "date"];

  if (!allowedTypes.includes(type)) {
    throw new Error(
      `Invalid input type: "${type}".\nMust be one of the following: ${allowedTypes.join(
        ", "
      )}.`
    );
  }

  // Create and validate a value to display when not in edit mode
  const previewValue = createPreviewValue();

  const labelStyles = {
    display: "inline-block",
    position: "relative",
  };

  const inputStyles = {
    position: "absolute",
    top: "0",
    left: "0",
    width: type === "date" && _editMode ? "auto" : "100%",
    height: type === "textarea" ? "100%" : "auto",
    maxHeight: "100%",
    resize: "none",
    border: "none",
    outline: "none",
    overflow: "hidden",
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
    backgroundColor: editModeBgColor,
    opacity: _editMode ? "1" : "0", // Hide input if not editing
  };

  const spanStyles = {
    visibility:
      (!previewPlaceholder && !_hovered && !_value) || _editMode // Hide span if editing
        ? "hidden"
        : "visible",
    backgroundColor: _hovered && hoveredBgColor,
  };

  const fontStyles = {
    display: "inline-block",
    fontFamily: "inherit",
    fontSize: "inherit",
    lineHeight: "inherit",
    letterSpacing: "inherit",
    wordBreak: "break-word",
    whiteSpace: "pre-wrap",
    backgroundColor: "inherit",
    color: "inherit",
  };

  const sharedInputAttributes = {
    className: `editable-field__input--${_editMode ? "edit" : "preview"}`,
    value: _editMode || type === "date" ? _value : previewValue,
    autoFocus: autoFocus && _editMode,
    placeholder: editPlaceholder,
    onInput: onInputHandler,
    onFocus: onFocusHandler,
    onBlur: onBlurHandler,
    onKeyDown: onKeyDown,
  };

  const spanAttributes = {
    className: `editable-field__span--${_hovered ? "hovered" : "default"}`,
  };

  function createPreviewValue() {
    function fallbackValue(value) {
      return _editMode
        ? value || editPlaceholder
        : value || previewPlaceholder || editPlaceholder;
    }

    // Validate and format dates
    if (type === "date") {
      const date = new Date(_value);
      const isValid = !isNaN(date.getTime());

      if (_value && isValid && !_editMode) {
        return date.toLocaleDateString();
      }

      // If date is invalid and value is non-empty, simulate empty fallback
      if (!isValid && _value !== "") {
        return fallbackValue(""); // Show placeholder instead
      }
    }

    let displayValue = fallbackValue(_value);

    // Remove newlines for non-textareas
    if (type !== "textarea") {
      displayValue = displayValue.replace(/[\r\n]+/g, "");
    } else {
      displayValue = displayValue.replace(
        /\n$/,
        "\n\u200B" // Increases span height by adding zero-width space after newlines
      );
    }

    return displayValue;
  }

  function onInputHandler(e) {
    setValue(e.target.value);
    if (onInput) onInput(e);
  }

  function onFocusHandler(e) {
    setEditMode(true);
    if (onFocus) onFocus(e);
  }

  function onBlurHandler(e) {
    setEditMode(false);
    if (onBlur) onBlur(e);
  }

  function onKeyDown(e) {
    if (e.key === "Enter") {
      const isTextarea = type === "textarea";
      const isShift = e.shiftKey;
      const hasValue = e.target.value;

      // Allow Shift+Enter in textarea ONLY if there's a value
      if (isTextarea && isShift && hasValue) {
        return; // allow newline
      }

      // Prevent default and blur for everything else
      e.preventDefault();
      e.target.blur();
    }
  }

  return (
    <label
      className="editable-field"
      style={{ ...labelStyles }}
      onMouseOver={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {type === "textarea" ? (
        <textarea
          {...sharedInputAttributes}
          style={{ ...fontStyles, ...inputStyles }}
        ></textarea>
      ) : (
        <input
          type={type}
          {...sharedInputAttributes}
          style={{ ...fontStyles, ...inputStyles }}
        />
      )}

      <span {...spanAttributes} style={{ ...fontStyles, ...spanStyles }}>
        {previewValue}
      </span>
    </label>
  );
}
