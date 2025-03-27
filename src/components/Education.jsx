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

  function handleChange(id, field, value) {
    updateGrades(
      grades.map((grade) =>
        grade.id === id ? { ...grade, [field]: value } : grade
      )
    );
  }

  return (
    <>
      <button type="button" className="add-btn" onClick={addGrade}>
        Add Grade
      </button>

      <ul className="grades-list" style={{ listStyleType: "none" }}>
        {grades.map((grade) => (
          <li key={grade.id}>
            Grade:{" "}
            <div className="grade-container">
              <input
                className="grade-title"
                type="text"
                value={grade.title}
                placeholder="Subject"
                onChange={(e) =>
                  handleChange(grade.id, "title", e.target.value)
                }
              />
              <input
                className="grade-score"
                type="text"
                value={grade.score}
                placeholder="Score"
                onChange={(e) =>
                  handleChange(grade.id, "score", e.target.value)
                }
              />
            </div>
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

export default function Education({ educations, setEducations }) {
  function addEducation() {
    setEducations([
      ...educations,
      {
        id: crypto.randomUUID(),
        title: "",
        fromDate: "",
        toDate: "",
        description: "",
        grades: [],
      },
    ]);
  }

  function removeEducation(id) {
    setEducations(educations.filter((ed) => ed.id !== id));
  }

  function handleChange(id, field, value) {
    setEducations(
      educations.map((ed) => (ed.id === id ? { ...ed, [field]: value } : ed))
    );
  }

  return (
    <div className="education">
      <button type="button" className="add-btn" onClick={addEducation}>
        Add Education
      </button>

      <ul style={{ listStyleType: "none" }}>
        {educations.map((ed) => (
          <li key={ed.id}>
            <fieldset>
              <label>
                Education Title:{" "}
                <input
                  type="text"
                  value={ed.title}
                  placeholder="Enter the name of your school/university"
                  onChange={(e) => handleChange(ed.id, "title", e.target.value)}
                />
              </label>

              <div className="dates">
                <label>
                  From:{" "}
                  <input
                    type="date"
                    value={ed.fromDate}
                    onChange={(e) =>
                      handleChange(ed.id, "fromDate", e.target.value)
                    }
                  />
                </label>

                <label>
                  To:{" "}
                  <input
                    type="date"
                    value={ed.toDate}
                    onChange={(e) =>
                      handleChange(ed.id, "toDate", e.target.value)
                    }
                  />
                </label>
              </div>

              <Grades
                grades={ed.grades}
                updateGrades={(newGrades) =>
                  handleChange(ed.id, "grades", newGrades)
                }
              />

              <label>
                Additional Info:{" "}
                <textarea
                  value={ed.description}
                  placeholder="Write some additional information about your education..."
                  onChange={(e) =>
                    handleChange(ed.id, "description", e.target.value)
                  }
                />
              </label>

              <div className="remove-btn-container">
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
