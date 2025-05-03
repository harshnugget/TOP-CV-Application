import { useState } from "react";
import EditableField from "./EditableField";
import EditableFieldToggle from "./EditableFieldToggle";

function Subject({ id, removeSubject }) {
  const [separator, setSeparator] = useState(false);

  function getData({ event, value }) {
    if (event.type === "blur" && !value) {
      removeSubject(id);
    }
  }

  function addSeparator({ event, value }) {
    if (event.type === "blur") {
      if (value) {
        setSeparator(true);
      } else {
        setSeparator(false);
      }
    }
  }

  return (
    <li className="subject">
      <EditableField
        defaultPlaceholderText="Subject"
        editPlaceholderText="Enter a subject..."
        editMode={true}
        multiLine={false}
        callbackFunc={getData}
      />
      {separator && <span>-</span>}
      <EditableFieldToggle
        buttonText="Add grade"
        editPlaceholderText="Enter a grade..."
        editMode={false}
        multiLine={true}
        style={{ display: "inline-block" }}
        callbackFunc={addSeparator}
      />
    </li>
  );
}

function Subjects({ style }) {
  const [subjects, setSubjects] = useState([]);

  function addSubject() {
    setSubjects([...subjects, { id: crypto.randomUUID(), value: "" }]);
  }

  function removeSubject(id) {
    setSubjects(subjects.filter((subject) => subject.id !== id));
  }

  return (
    <ul className="subjects" style={style}>
      {subjects.map((subject) => (
        <Subject
          key={subject.id}
          id={subject.id}
          removeSubject={removeSubject}
        />
      ))}
      <button type="button" onClick={addSubject}>
        Add subject
      </button>
    </ul>
  );
}

function Institution({ id, removeInstitution }) {
  function getData({ event, value }) {
    if (event.type === "blur" && !value) {
      removeInstitution(id);
    }
  }

  return (
    <li className="institution">
      <EditableField
        defaultPlaceholderText="Institution"
        editPlaceholderText="Enter an institution..."
        editMode={true}
        multiLine={false}
        callbackFunc={getData}
      />
      <Subjects style={{ paddingLeft: "20px" }} />
      <EditableFieldToggle
        buttonText="Add description"
        editPlaceholderText="Enter a description..."
        editMode={false}
        multiLine={true}
      />
    </li>
  );
}

export default function Education({ style }) {
  const [institutions, setInstitutions] = useState([]);

  function addInstitution() {
    setInstitutions([...institutions, { id: crypto.randomUUID(), value: "" }]);
  }

  function removeInstitution(id) {
    setInstitutions(institutions.filter((job) => job.id !== id));
  }

  return (
    <ul className="institution" style={style}>
      {institutions.map((institution) => (
        <Institution
          key={institution.id}
          id={institution.id}
          removeInstitution={removeInstitution}
        />
      ))}
      <button type="button" onClick={addInstitution}>
        Add institution
      </button>
    </ul>
  );
}
