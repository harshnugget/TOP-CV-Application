import { useState } from "react";
import EditableField from "./EditableField";
import EditableFieldToggle from "./EditableFieldToggle";

function Responsibility({ id, removeResponsibility }) {
  function getData({ event, value }) {
    if (event.type === "blur" && !value) {
      removeResponsibility(id);
    }
  }

  return (
    <li className="responsibility">
      <EditableField
        defaultPlaceholderText="responsibility"
        editPlaceholderText="Enter a responsibility..."
        editMode={true}
        multiLine={false}
        callbackFunc={getData}
      />
    </li>
  );
}

function Responsibilities({ style }) {
  const [responsibilities, setResponsibilities] = useState([]);

  function addResponsibility() {
    setResponsibilities([
      ...responsibilities,
      { id: crypto.randomUUID(), value: "" },
    ]);
  }

  function removeResponsibility(id) {
    setResponsibilities(
      responsibilities.filter((responsibility) => responsibility.id !== id)
    );
  }

  return (
    <ul className="responsibilities" style={style}>
      {responsibilities.map((responsibility) => (
        <Responsibility
          key={responsibility.id}
          id={responsibility.id}
          removeResponsibility={removeResponsibility}
        />
      ))}
      <button type="button" onClick={addResponsibility}>
        Add responsibility
      </button>
    </ul>
  );
}

function Job({ id, removeJob }) {
  function getData({ event, value }) {
    if (event.type === "blur" && !value) {
      removeJob(id);
    }
  }

  return (
    <li className="job">
      <EditableField
        defaultPlaceholderText="Job"
        editPlaceholderText="Enter a job..."
        editMode={true}
        multiLine={false}
        callbackFunc={getData}
      />
      <Responsibilities style={{ paddingLeft: "20px" }} />
      <EditableFieldToggle
        buttonText="Add description"
        editPlaceholderText="Enter a description"
        editMode={false}
        multiLine={true}
      />
    </li>
  );
}

export default function Experience({ style }) {
  const [experience, setExperience] = useState([]);

  function addJob() {
    setExperience([...experience, { id: crypto.randomUUID(), value: "" }]);
  }

  function removeJob(id) {
    setExperience(experience.filter((job) => job.id !== id));
  }

  return (
    <ul className="experience" style={style}>
      {experience.map((job) => (
        <Job key={job.id} id={job.id} removeJob={removeJob} />
      ))}
      <button type="button" onClick={addJob}>
        Add job
      </button>
    </ul>
  );
}
