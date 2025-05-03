import { useState } from "react";
import EditableField from "./EditableField";

function Skill({ id, removeSkill }) {
  function getData({ event, value }) {
    if (event.type === "blur" && !value) {
      removeSkill(id);
    }
  }

  return (
    <li className="skill" style={{ display: "flex" }}>
      <span
        className="list-bullet"
        style={{
          fontSize: "1.6rem",
          lineHeight: "1.6rem",
          paddingRight: "10px",
        }}
      >
        •
      </span>
      <EditableField
        defaultPlaceholderText="Skill"
        editPlaceholderText="Enter a skill..."
        editMode={true}
        multiLine={false}
        callbackFunc={getData}
      />
    </li>
  );
}

export default function Skills({ style }) {
  const [skills, setSkills] = useState([]);

  function addSkill() {
    setSkills([...skills, { id: crypto.randomUUID(), value: "" }]);
  }

  function removeSkill(id) {
    setSkills(skills.filter((skill) => skill.id !== id));
  }

  return (
    <div className="skills" style={style}>
      {skills.map((skill) => (
        <Skill key={skill.id} id={skill.id} removeSkill={removeSkill} />
      ))}
      <button type="button" onClick={addSkill}>
        Add skill
      </button>
    </div>
  );
}
