import { useState } from "react";

export default function DateField({
  customStyles,
  disableEditing = false,
  callbackFunc,
}) {
  const [_editMode, setEditMode] = useState(true);
  const [_hovered, setHovered] = useState(false);
  const [_value, setValue] = useState("");

  const displayDate = _value ? new Date(_value).toLocaleDateString() : "";

  const _customStyles = {
    textAreaBg: "aliceBlue",
    spanDefaultBg: "transparent",
    spanHoverBg: "rgb(211,211,211)",
    ...customStyles,
  };

  const divStyles = {
    display: disableEditing && !displayDate ? "none" : "inline-block",
    width: "max-content",
    maxWidth: "100%",
    position: "relative",
  };

  const inputStyles = {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    resize: "none",
    backgroundColor: _hovered && _customStyles.textAreaBg,
    border: "none",
    outline: "none",
    overflow: "hidden",
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
    opacity: _editMode || !_value ? "1" : "0",
  };

  const spanStyles = {
    visibility: _editMode && !disableEditing ? "hidden" : "visible",
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
        states.hovered = true;
        break;
      case "mouseleave":
        setHovered(false);
        states.hovered = false;
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
          if (_value) setEditMode(false);
          states.editMode = false;
          break;
        case "change":
          setValue(e.target.value);
          states.value = e.target.value;
          break;
        case "keydown":
          if (e.key === "Enter") {
            e.target.blur();
          }
      }
    }

    // Send state and event data to callback function
    if (callbackFunc && typeof callbackFunc === "function") {
      callbackFunc({ ...states, event: e });
    }
  }

  return (
    <div
      className="date-toggle"
      style={{ ...divStyles }}
      onMouseOver={eventHandler}
      onMouseLeave={eventHandler}
      onClick={eventHandler}
    >
      {!disableEditing && (
        <input
          className={`date-toggle__input ${
            _editMode ? `date-toggle__input--edit` : ""
          }`}
          type="date"
          value={_value}
          onChange={eventHandler}
          onBlur={eventHandler}
          onKeyDown={eventHandler}
          style={{ ...sharedStyles, ...inputStyles }}
        />
      )}

      <span
        className={`date-toggle__span ${
          _hovered ? "date-toggle__span--hovered" : ""
        }`}
        style={{ ...spanStyles, ...sharedStyles }}
      >
        {displayDate || "dd/mm/yyy"}
      </span>
    </div>
  );
}
