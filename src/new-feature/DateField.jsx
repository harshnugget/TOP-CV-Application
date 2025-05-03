import { useState } from "react";

export default function DateField({ customStyles }) {
  const [_editMode, setEditMode] = useState(true);
  const [_hovered, setHovered] = useState(false);
  const [_value, setValue] = useState("");

  const _customStyles = {
    textAreaBg: "aliceBlue",
    spanDefaultBg: "transparent",
    spanHoverBg: "rgb(211,211,211)",
    ...customStyles,
  };

  const divStyles = {
    display: "inline-block",
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
    visibility: _editMode ? "hidden" : "visible",
    backgroundColor: _hovered
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

  const displayDate = _value ? new Date(_value).toLocaleDateString() : "";

  function eventHandler(e) {
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
          setEditMode(true);
          break;
      }
    }

    if (_editMode) {
      switch (e.type) {
        case "blur":
          if (_value) setEditMode(false);
          break;
        case "change":
          setValue(e.target.value);
          break;
        case "keydown":
          if (e.key === "Enter" && _value) {
            setEditMode(false);
          }
      }
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
      <input
        className={`date-toggle__input ${
          _editMode ? `date-toggle__input--active` : ""
        }`}
        type="date"
        value={_value}
        onChange={eventHandler}
        onBlur={eventHandler}
        onKeyDown={eventHandler}
        style={{ ...sharedStyles, ...inputStyles }}
      />
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
