import { useState } from "react";
import EditableField from "./EditableField";

function Skill({ removeSkill, updateSkill, previewMode }) {
  return (
    <li className="skill">
      <EditableField
        type="text"
        previewPlaceholder="Skill"
        editPlaceholder="Enter skill..."
        editMode={true}
        autoFocus={true}
        onInput={(e) => updateSkill({ title: e.target.value })}
        onBlur={(e) => !e.target.value && removeSkill()}
      />
    </li>
  );
}

export default function Skills({ updateSkills, previewMode, style }) {
  const [skills, setSkills] = useState([]);

  function addSkill() {
    const newSkills = [...skills, { id: crypto.randomUUID(), title: "" }];
    setSkills(newSkills);
    updateSkills(newSkills);
  }

  function removeSkill(id) {
    const newSkills = skills.filter((skill) => skill.id !== id);
    setSkills(newSkills);
    updateSkills(newSkills);
  }

  function updateSkill(id, value) {
    const newSkills = skills.map((skill) =>
      skill.id === id ? { ...skill, ...value } : skill
    );
    setSkills(newSkills);
    updateSkills(newSkills);
  }

  return (
    <div className="skills">
      <ul style={style}>
        {skills.map((skill) => (
          <Skill
            key={skill.id}
            skill={skill}
            removeSkill={() => removeSkill(skill.id)}
            updateSkill={(value) => updateSkill(skill.id, value)}
            previewMode={previewMode}
          />
        ))}
      </ul>
      {!previewMode && (
        <button type="button" onClick={addSkill}>
          Add skill
        </button>
      )}
    </div>
  );
}
