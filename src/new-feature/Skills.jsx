import { useState } from "react";
import EditableField from "./EditableField";

function Skill({ removeSkill, updateSkill }) {
  function getData({ event, value }) {
    if (event.type === "blur" && !value) {
      removeSkill();
    } else if (event.type === "change") {
      updateSkill({ value });
    }
  }

  return (
    <li className="skill">
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

export default function Skills({ updateSkills, style }) {
  const [skills, setSkills] = useState([]);

  function addSkill() {
    const newSkills = [...skills, { id: crypto.randomUUID(), value: "" }];
    setSkills(newSkills);
    updateSkills(newSkills);
  }

  function removeSkill(id) {
    const newSkills = skills.filter((skill) => skill.id !== id);
    setSkills(newSkills);
    updateSkills(newSkills);
  }

  function updateSkill(id, data) {
    const newSkills = skills.map((skill) =>
      skill.id === id ? { ...skill, ...data } : skill
    );
    setSkills(newSkills);
    updateSkills(newSkills);
  }

  return (
    <>
      <ul className="skills" style={style}>
        {skills.map((skill) => (
          <Skill
            key={skill.id}
            skill={skill}
            removeSkill={() => removeSkill(skill.id)}
            updateSkill={(data) => updateSkill(skill.id, data)}
          />
        ))}
      </ul>
      <button type="button" onClick={addSkill}>
        Add skill
      </button>
    </>
  );
}
