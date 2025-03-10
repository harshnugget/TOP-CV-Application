export default function Skills() {
  return (
    <div className="skills">
      <button type="button" className="add-btn">
        Add Skill
      </button>

      <ul>
        <li>
          <fieldset>
            <label htmlFor="skill-1">
              Skill: <input type="text" id="skill-1" name="skill-1" />
            </label>

            <label>Proficiency:</label>
            {[1, 2, 3, 4, 5].map((level) => (
              <label key={level} htmlFor={`skill-1-${level}`}>
                <input
                  type="radio"
                  id={`skill-1-${level}`}
                  name="skill-1-proficiency"
                  value={level}
                />
                {level}
              </label>
            ))}

            <button type="button" className="remove-btn">
              Remove Skill
            </button>
          </fieldset>
        </li>
      </ul>
    </div>
  );
}
