import { useState } from "react";
import EditableField from "./EditableField";
import EditableFieldToggle from "./EditableFieldToggle";
import DateField from "./DateField";

function Responsibility({ removeResponsibility, updateResponsibility }) {
  function getTitleData({ event, value }) {
    if (event.type === "blur" && !value) {
      removeResponsibility();
    } else if (event.type === "change") {
      updateResponsibility({ title: value });
    }
  }

  return (
    <li className="responsibility">
      <EditableField
        defaultPlaceholderText="responsibility"
        editPlaceholderText="Enter a responsibility..."
        editMode={true}
        multiLine={false}
        callbackFunc={getTitleData}
      />
    </li>
  );
}

function Job({ job, removeJob, updateJob }) {
  const [active, setActive] = useState(false);
  const { responsibilities } = job;

  function getTitleData({ event, value }) {
    if (event.type === "blur") {
      if (!value) {
        removeJob();
      } else if (!active) {
        setActive(true);
      }
    } else if (event.type === "change") {
      updateJob({ title: value });
    }
  }

  function addResponsibility() {
    const newResponsibilities = [
      ...responsibilities,
      {
        id: crypto.randomUUID(),
        title: "",
      },
    ];
    updateJob({ responsibilities: newResponsibilities });
  }

  function removeResponsibility(id) {
    const newResponsibilities = responsibilities.filter(
      (responsibility) => responsibility.id !== id
    );
    updateJob({ responsibilities: newResponsibilities });
  }

  function updateResponsibility(id, data) {
    const newResponsibilities = responsibilities.map((responsibility) =>
      responsibility.id === id ? { ...responsibility, ...data } : responsibility
    );
    updateJob({ responsibilities: newResponsibilities });
  }

  function getDescriptionData({ event, value }) {
    if (event.type === "change") {
      updateJob({ description: value });
    }
  }

  function getDateData({ event, value }) {
    if (event.type === "change") {
      updateJob({ date: value });
    }
  }

  return (
    <li className="job">
      <EditableField
        defaultPlaceholderText="Job"
        editPlaceholderText="Enter a job..."
        editMode={true}
        multiLine={false}
        callbackFunc={getTitleData}
      />
      {active && (
        <>
          <DateField callbackFunc={getDateData} />
          <ul className="responsibilities" style={{ paddingLeft: "20px" }}>
            {responsibilities.map((responsibility) => (
              <Responsibility
                key={responsibility.id}
                responsibility={responsibility}
                removeResponsibility={() =>
                  removeResponsibility(responsibility.id)
                }
                updateResponsibility={(data) =>
                  updateResponsibility(responsibility.id, data)
                }
              />
            ))}
          </ul>
          <button type="button" onClick={addResponsibility}>
            Add responsibility
          </button>
          <EditableFieldToggle
            buttonText="Add description"
            editPlaceholderText="Enter a description"
            editMode={false}
            multiLine={true}
            callbackFunc={getDescriptionData}
          />
        </>
      )}
    </li>
  );
}

export default function Experience({ style }) {
  const [jobs, setJobs] = useState([]);

  function addJob() {
    const newJobs = [
      ...jobs,
      {
        id: crypto.randomUUID(),
        title: "",
        responsibilities: [],
        description: "",
        date: "",
      },
    ];
    setJobs(newJobs);
  }

  function removeJob(id) {
    const newJobs = jobs.filter((job) => job.id !== id);
    setJobs(newJobs);
  }

  function updateJob(id, data) {
    const newJobs = jobs.map((job) =>
      job.id === id ? { ...job, ...data } : job
    );
    setJobs(newJobs);
  }

  return (
    <>
      <ul className="jobs" style={style}>
        {jobs.map((job) => (
          <Job
            key={job.id}
            job={job}
            removeJob={() => removeJob(job.id)}
            updateJob={(data) => updateJob(job.id, data)}
          />
        ))}
      </ul>
      <button type="button" onClick={addJob}>
        Add job
      </button>
    </>
  );
}
