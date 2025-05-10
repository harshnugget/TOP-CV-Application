import { useState } from "react";
import EditableField from "./EditableField";

function Responsibility({
  removeResponsibility,
  updateResponsibility,
  previewMode,
}) {
  return (
    <li className="responsibility">
      <EditableField
        type="text"
        previewPlaceholder="Responsibility"
        editPlaceholder="Enter responsibility..."
        editMode={true}
        autoFocus={true}
        maxLength="50"
        previewModeOnly={previewMode}
        onInput={(e) => updateResponsibility({ title: e.target.value })}
        onBlur={(e) => !e.target.value && removeResponsibility()}
      />
    </li>
  );
}

function Job({ job, removeJob, updateJob, previewMode }) {
  const [active, setActive] = useState(false);
  const [toggleDesc, setToggleDesc] = useState(false);
  const { responsibilities } = job;

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

  function updateResponsibility(id, value) {
    const newResponsibilities = responsibilities.map((responsibility) =>
      responsibility.id === id
        ? { ...responsibility, ...value }
        : responsibility
    );

    updateJob({ responsibilities: newResponsibilities });
  }

  return (
    <li className="job">
      <div className="job-title" style={{ display: "inline-block" }}>
        <EditableField
          type="text"
          previewPlaceholder="Job"
          editPlaceholder="Enter a job..."
          editMode={true}
          autoFocus={true}
          previewModeOnly={previewMode}
          maxLength="50"
          onInput={(e) => updateJob({ title: e.target.value })}
          onBlur={(e) =>
            !e.target.value ? removeJob() : !active && setActive(true)
          }
        />
      </div>

      {active && (
        <>
          <div className="job-date" style={{ display: "inline-block" }}>
            <EditableField
              previewPlaceholder={previewMode ? "" : "dd/mm/yyyy"}
              editPlaceholder="Enter date..."
              type="date"
              editMode={true}
              autoFocus={true}
              previewModeOnly={previewMode}
              onInput={(e) => updateJob({ date: e.target.value })}
            />
          </div>

          <div className="job-responsibilities">
            {responsibilities.length > 0 && (
              <>
                <div className="job-responsibilities-header">
                  Responsibilities:
                </div>
                <ul style={{ paddingLeft: "20px" }}>
                  {responsibilities.map((responsibility) => (
                    <Responsibility
                      key={responsibility.id}
                      responsibility={responsibility}
                      removeResponsibility={() =>
                        removeResponsibility(responsibility.id)
                      }
                      updateResponsibility={(value) =>
                        updateResponsibility(responsibility.id, value)
                      }
                      previewMode={previewMode}
                    />
                  ))}
                </ul>
              </>
            )}
            {!previewMode && (
              <button
                type="button"
                className="add-btn add-btn__responsibility"
                onClick={addResponsibility}
                style={{ display: "block" }}
              >
                Add responsibility
              </button>
            )}
          </div>

          <div className="job-description">
            {toggleDesc ? (
              <EditableField
                previewPlaceholder="Description"
                editPlaceholder="Enter a description..."
                type="textarea"
                editMode={true}
                autoFocus={true}
                maxLength="150"
                previewModeOnly={previewMode}
                onInput={(e) => updateJob({ description: e.target.value })}
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

export default function Experience({ updateExperience, previewMode, style }) {
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
    updateExperience(newJobs);
  }

  function removeJob(id) {
    const newJobs = jobs.filter((job) => job.id !== id);
    setJobs(newJobs);
    updateExperience(newJobs);
  }

  function updateJob(id, value) {
    const newJobs = jobs.map((job) =>
      job.id === id ? { ...job, ...value } : job
    );
    setJobs(newJobs);
    updateExperience(newJobs);
  }

  return (
    <div className="experience">
      {jobs.length > 0 && (
        <ul style={style}>
          {jobs.map((job) => (
            <Job
              key={job.id}
              job={job}
              removeJob={() => removeJob(job.id)}
              updateJob={(value) => updateJob(job.id, value)}
              previewMode={previewMode}
            />
          ))}
        </ul>
      )}
      {!previewMode && (
        <button type="button" className="add-btn add-btn__job" onClick={addJob}>
          Add job
        </button>
      )}
    </div>
  );
}
