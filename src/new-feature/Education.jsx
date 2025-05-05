import { useState } from "react";
import EditableField from "./EditableField";
import EditableFieldToggle from "./EditableFieldToggle";
import DateField from "./DateField";

function Subject({ removeSubject, updateSubject }) {
  const [separator, setSeparator] = useState(false);
  const [active, setActive] = useState(false);

  function getNameData({ event, value }) {
    if (event.type === "blur") {
      if (!value) {
        removeSubject();
      } else if (!active) {
        setActive(true);
      }
    } else if (event.type === "change") {
      updateSubject({ name: value });
    }
  }

  function getGradeData({ event, value }) {
    if (event.type === "blur") {
      if (value) {
        setSeparator(true);
      } else {
        setSeparator(false);
      }
    } else if (event.type === "change") {
      updateSubject({ grade: value });
    }
  }

  function getDateData({ event, value }) {
    if (event.type === "change") {
      updateSubject({ date: value });
    }
  }

  return (
    <li className="subject">
      <div style={{ display: "flex" }}>
        <EditableField
          defaultPlaceholderText="Subject"
          editPlaceholderText="Enter a subject..."
          editMode={true}
          multiLine={false}
          callbackFunc={getNameData}
        />
        {separator && <span>-</span>}
        {active && (
          <>
            <EditableFieldToggle
              buttonText="Add grade"
              editPlaceholderText="Enter a grade..."
              editMode={false}
              multiLine={true}
              callbackFunc={getGradeData}
            />
            <DateField callbackFunc={getDateData} />
          </>
        )}
      </div>
    </li>
  );
}

function Institution({ institution, removeInstitution, updateInstitution }) {
  const [active, setActive] = useState(false);
  const subjects = institution.subjects;

  function getNameData({ event, value }) {
    if (event.type === "blur") {
      if (!value) {
        removeInstitution();
      } else if (!active) {
        setActive(true);
      }
    } else if (event.type === "change") {
      updateInstitution({ name: value });
    }
  }

  function addSubject() {
    const newSubjects = [
      ...subjects,
      {
        id: crypto.randomUUID(),
        name: "",
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

  function updateSubject(id, data) {
    const newSubjects = subjects.map((subject) =>
      subject.id === id ? { ...subject, ...data } : subject
    );
    updateInstitution({ subjects: newSubjects });
  }

  function getDescriptionData({ event, value }) {
    if (event.type === "change") {
      updateInstitution({ description: value });
    }
  }

  function getDateData({ event, value }) {
    if (event.type === "change") {
      updateInstitution({ date: value });
    }
  }

  return (
    <li className="institution">
      <EditableField
        defaultPlaceholderText="Institution"
        editPlaceholderText="Enter an institution..."
        editMode={true}
        multiLine={false}
        callbackFunc={getNameData}
      />
      {active && (
        <>
          <DateField callbackFunc={getDateData} />
          <ul className="subjects" style={{ paddingLeft: "20px" }}>
            {subjects.map((subject) => (
              <Subject
                key={subject.id}
                subject={subject}
                removeSubject={() => removeSubject(subject.id)}
                updateSubject={(data) => updateSubject(subject.id, data)}
              />
            ))}
          </ul>
          <button type="button" onClick={addSubject}>
            Add subject
          </button>
          <EditableFieldToggle
            buttonText="Add description"
            editPlaceholderText="Enter a description..."
            editMode={false}
            multiLine={true}
            callbackFunc={getDescriptionData}
          />
        </>
      )}
    </li>
  );
}

export default function Education({ updateEducation, style }) {
  const [institutions, setInstitutions] = useState([]);

  function addInstitution() {
    const newInstitutions = [
      ...institutions,
      {
        id: crypto.randomUUID(),
        name: "",
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

  function updateInstitution(id, data) {
    const newInstitutions = institutions.map((institution) =>
      institution.id === id ? { ...institution, ...data } : institution
    );
    setInstitutions(newInstitutions);
    updateEducation(newInstitutions);
  }

  return (
    <>
      <ul className="institution" style={style}>
        {institutions.map((institution) => (
          <Institution
            key={institution.id}
            institution={institution}
            removeInstitution={() => removeInstitution(institution.id)}
            updateInstitution={(data) =>
              updateInstitution(institution.id, data)
            }
          />
        ))}
      </ul>
      <button type="button" onClick={addInstitution}>
        Add institution
      </button>
    </>
  );
}
