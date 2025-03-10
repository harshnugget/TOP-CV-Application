import { useState } from "react";

function Grades({ grades, updateGrades }) {
  function addGrade() {
    updateGrades([
      ...grades,
      { id: crypto.randomUUID(), title: "", score: "" },
    ]);
  }

  function removeGrade(id) {
    updateGrades(grades.filter((grade) => grade.id !== id));
  }

  function updateTitle(id, value) {
    updateGrades(
      grades.map((grade) =>
        grade.id === id ? { ...grade, title: value } : grade
      )
    );
  }

  function updateScore(id, value) {
    updateGrades(
      grades.map((grade) =>
        grade.id === id ? { ...grade, score: value } : grade
      )
    );
  }

  return (
    <>
      <button type="button" className="add-btn" onClick={addGrade}>
        Add Grade
      </button>

      <ul>
        {grades.map((grade) => (
          <li key={grade.id}>
            Grade:{" "}
            <input
              type="text"
              value={grade.title}
              onChange={(e) => updateTitle(grade.id, e.target.value)}
            />
            <input
              type="text"
              value={grade.score}
              onChange={(e) => updateScore(grade.id, e.target.value)}
            />
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeGrade(grade.id)}
            >
              Remove Grade
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Education() {
  const [educations, setEducations] = useState([]);

  function addEducation() {
    setEducations([
      ...educations,
      {
        id: crypto.randomUUID(),
        title: "",
        fromDate: "",
        toDate: "",
        grades: [],
        description: "",
      },
    ]);
  }

  function removeEducation(id) {
    setEducations(educations.filter((ed) => ed.id !== id));
  }

  function updateTitle(id, value) {
    setEducations(
      educations.map((ed) => (ed.id === id ? { ...ed, title: value } : ed))
    );
  }

  function updateFromDate(id, value) {
    setEducations(
      educations.map((ed) => (ed.id === id ? { ...ed, fromDate: value } : ed))
    );
  }

  function updateToDate(id, value) {
    setEducations(
      educations.map((ed) => (ed.id === id ? { ...ed, toDate: value } : ed))
    );
  }

  function updateGrades(id, newGrades) {
    setEducations(
      educations.map((ed) => (ed.id === id ? { ...ed, grades: newGrades } : ed))
    );
  }

  function updateDescription(id, value) {
    setEducations(
      educations.map((ed) =>
        ed.id === id ? { ...ed, description: value } : ed
      )
    );
  }

  return (
    <div className="education">
      <button type="button" className="add-btn" onClick={addEducation}>
        Add Education
      </button>

      <ul>
        {educations.map((ed) => (
          <li key={ed.id}>
            <fieldset>
              <label>
                Education Title:{" "}
                <input
                  type="text"
                  value={ed.title}
                  placeholder="Enter the name of your school/university"
                  onChange={(e) => updateTitle(ed.id, e.target.value)}
                />
              </label>

              <div className="dates">
                <label>
                  From:{" "}
                  <input
                    type="date"
                    value={ed.fromDate}
                    onChange={(e) => updateFromDate(ed.id, e.target.value)}
                  />
                </label>

                <label>
                  To:{" "}
                  <input
                    type="date"
                    value={ed.toDate}
                    onChange={(e) => updateToDate(ed.id, e.target.value)}
                  />
                </label>
              </div>

              <Grades
                grades={ed.grades}
                updateGrades={(newGrades) => updateGrades(ed.id, newGrades)}
              />

              <label>
                Additional Info:{" "}
                <textarea
                  value={ed.description}
                  placeholder="Write some additional information about your education..."
                  onChange={(e) => updateDescription(ed.id, e.target.value)}
                />
              </label>

              <div>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeEducation(ed.id)}
                >
                  Remove Education
                </button>
              </div>
            </fieldset>
          </li>
        ))}
      </ul>
    </div>
  );
}
