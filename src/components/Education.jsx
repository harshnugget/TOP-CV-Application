import { useState } from "react";
import EditableField from "./EditableField";

function Subject({ removeSubject, updateSubject, previewMode }) {
  const [separator, setSeparator] = useState(false);
  const [gradeActive, setGradeActive] = useState(false);
  // const [dateActive, setDateActive] = useState(false);

  return (
    <li className="subject">
      <div className="subject-title" style={{ display: "inline-block" }}>
        <EditableField
          type="text"
          previewPlaceholder="Subject"
          editPlaceholder="Enter subject..."
          editMode={true}
          autoFocus={true}
          maxLength="26"
          previewModeOnly={previewMode}
          onInput={(e) => updateSubject({ title: e.target.value })}
          onBlur={(e) => {
            !e.target.value && removeSubject();
            e.target.value ? setGradeActive(true) : setGradeActive(false);
          }}
        />
      </div>

      {separator && <span>-</span>}
      {gradeActive && (
        <>
          <div className="subject-grade" style={{ display: "inline-block" }}>
            <EditableField
              type="text"
              previewPlaceholder={previewMode ? "" : "[Enter grade]"}
              editPlaceholder="Enter grade..."
              editMode={true}
              autoFocus={true}
              maxLength="26"
              previewModeOnly={previewMode}
              onInput={(e) => updateSubject({ grade: e.target.value })}
              onBlur={(e) => {
                e.target.value ? setSeparator(true) : setSeparator(false);
                // e.target.value ? setDateActive(true) : setDateActive(false);
              }}
            />
          </div>

          {/* {dateActive && (
            <div className="subject-date" style={{ display: "inline-block" }}>
              <EditableField
                previewPlaceholder={previewMode ? "" : "dd/mm//yyyy"}
                editPlaceholder="Enter date..."
                type="date"
                editMode={true}
                previewModeOnly={previewMode}
                autoFocus={true}
                onInput={(e) => updateSubject({ date: e.target.value })}
              />
            </div>
          )} */}
        </>
      )}
    </li>
  );
}

function Institution({
  institution,
  removeInstitution,
  updateInstitution,
  previewMode,
}) {
  const [active, setActive] = useState(false);
  const [toggleDesc, setToggleDesc] = useState(false);
  const subjects = institution.subjects;

  function addSubject() {
    const newSubjects = [
      ...subjects,
      {
        id: crypto.randomUUID(),
        title: "",
        grade: "",
        date: "",
      },
    ];

    updateInstitution({ subjects: newSubjects });
  }

  function removeSubject(id) {
    const newSubjects = subjects.filter((subject) => subject.id !== id);

    updateInstitution({ subjects: newSubjects });
  }

  function updateSubject(id, value) {
    const newSubjects = subjects.map((subject) =>
      subject.id === id ? { ...subject, ...value } : subject
    );

    updateInstitution({ subjects: newSubjects });
  }

  return (
    <li className="institution">
      <div className="institution-title" style={{ display: "inline-block" }}>
        <EditableField
          type="text"
          previewPlaceholder="Institution"
          editPlaceholder="Enter institution..."
          editMode={true}
          autoFocus={true}
          maxLength="50"
          previewModeOnly={previewMode}
          onInput={(e) => updateInstitution({ title: e.target.value })}
          onBlur={(e) =>
            !e.target.value ? removeInstitution() : !active && setActive(true)
          }
        />
      </div>

      {active && (
        <>
          <div className="institution-date" style={{ display: "inline-block" }}>
            <EditableField
              previewPlaceholder={previewMode ? "" : "dd/mm//yyyy"}
              editPlaceholder="Enter date..."
              type="date"
              editMode={true}
              autoFocus={true}
              previewModeOnly={previewMode}
              onInput={(e) => updateInstitution({ date: e.target.value })}
            />
          </div>
          <div className="subjects">
            {subjects.length > 0 && (
              <ul style={{ paddingLeft: "20px" }}>
                {subjects.map((subject) => (
                  <Subject
                    key={subject.id}
                    subject={subject}
                    removeSubject={() => removeSubject(subject.id)}
                    updateSubject={(value) => updateSubject(subject.id, value)}
                    previewMode={previewMode}
                  />
                ))}
              </ul>
            )}

            {!previewMode && (
              <button
                type="button"
                className="add-btn add-btn__subject"
                onClick={addSubject}
              >
                Add subject
              </button>
            )}
          </div>

          <div className="institution-description">
            {toggleDesc ? (
              <EditableField
                previewPlaceholder="Description"
                editPlaceholder="Enter a description..."
                type="textarea"
                editMode={true}
                autoFocus={true}
                previewModeOnly={previewMode}
                maxLength="150"
                onInput={(e) =>
                  updateInstitution({ description: e.target.value })
                }
                onBlur={(e) => !e.target.value && setToggleDesc(false)}
              />
            ) : (
              !previewMode && (
                <button
                  type="button"
                  className="add-btn add-btn__description"
                  onClick={() => setToggleDesc(true)}
                >
                  Add description
                </button>
              )
            )}
          </div>
        </>
      )}
    </li>
  );
}

export default function Education({ updateEducation, previewMode, style }) {
  const [institutions, setInstitutions] = useState([]);

  function addInstitution() {
    const newInstitutions = [
      ...institutions,
      {
        id: crypto.randomUUID(),
        title: "",
        subjects: [],
        description: "",
        date: "",
      },
    ];
    setInstitutions(newInstitutions);
    updateEducation(newInstitutions);
  }

  function removeInstitution(id) {
    const newInstitutions = institutions.filter(
      (institution) => institution.id !== id
    );
    setInstitutions(newInstitutions);
    updateEducation(newInstitutions);
  }

  function updateInstitution(id, value) {
    const newInstitutions = institutions.map((institution) =>
      institution.id === id ? { ...institution, ...value } : institution
    );
    setInstitutions(newInstitutions);
    updateEducation(newInstitutions);
  }

  return (
    <div className="education">
      {institutions.length > 0 && (
        <ul style={style}>
          {institutions.map((institution) => (
            <Institution
              key={institution.id}
              institution={institution}
              removeInstitution={() => removeInstitution(institution.id)}
              updateInstitution={(value) =>
                updateInstitution(institution.id, value)
              }
              previewMode={previewMode}
            />
          ))}
        </ul>
      )}

      {!previewMode && (
        <button
          type="button"
          className="add-btn add-btn__institution"
          onClick={addInstitution}
        >
          Add institution
        </button>
      )}
    </div>
  );
}
