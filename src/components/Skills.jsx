import { useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState([]);

  function addSkill() {
    setSkills([...skills, { id: crypto.randomUUID(), title: "" }]);
  }

  function removeSkill(id) {
    setSkills(skills.filter((skill) => skill.id !== id));
  }

  function handleChange(id, value) {
    setSkills(
      skills.map((skill) =>
        skill.id === id ? { ...skill, title: value } : skill
      )
    );
  }

  return (
    <div className="skills">
      <button type="button" className="add-btn" onClick={addSkill}>
        Add Skill
      </button>

      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <fieldset>
              <label htmlFor="skill-1">
                Skill:{" "}
                <input
                  type="text"
                  value={skill.title}
                  placeholder="Enter the name of a skill"
                  onChange={(e) => handleChange(skill.id, e.target.value)}
                />
              </label>

              <button
                type="button"
                className="remove-btn"
                onClick={() => removeSkill(skill.id)}
              >
                Remove Skill
              </button>
            </fieldset>
          </li>
        ))}
      </ul>
    </div>
  );
}
