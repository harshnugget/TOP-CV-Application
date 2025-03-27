function Responsibilities({ responsibilities, updateResponsibilities }) {
  function addResponsibility() {
    updateResponsibilities([
      ...responsibilities,
      { id: crypto.randomUUID(), title: "" },
    ]);
  }

  function removeResponsibility(id) {
    updateResponsibilities(responsibilities.filter((resp) => resp.id !== id));
  }

  function handleChange(id, value) {
    updateResponsibilities(
      responsibilities.map((resp) =>
        resp.id === id ? { ...resp, title: value } : resp
      )
    );
  }

  return (
    <>
      <button type="button" className="add-btn" onClick={addResponsibility}>
        Add Responsibility
      </button>

      <ul style={{ listStyleType: "none" }}>
        {responsibilities.map((resp) => (
          <li key={resp.id}>
            <label>
              Responsibility:{" "}
              <input
                type="text"
                value={resp.title}
                onChange={(e) => handleChange(resp.id, e.target.value)}
              />
            </label>

            <button
              type="button"
              className="remove-btn"
              onClick={() => removeResponsibility(resp.id)}
            >
              Remove Responsibility
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function EmploymentHistory({ jobs, setJobs }) {
  function addjobs() {
    setJobs([
      ...jobs,
      {
        id: crypto.randomUUID(),
        title: "",
        fromDate: "",
        toDate: "",
        description: "",
        responsibilities: [],
      },
    ]);
  }

  function removejobs(id) {
    setJobs(jobs.filter((job) => job.id !== id));
  }

  function handleChange(id, field, value) {
    setJobs(
      jobs.map((job) => (job.id === id ? { ...job, [field]: value } : job))
    );
  }

  return (
    <div className="employment-jobs">
      <button type="button" className="add-btn" onClick={addjobs}>
        Add Employment
      </button>

      <ul style={{ listStyleType: "none" }}>
        {jobs.map((job) => (
          <li key={job.id}>
            <fieldset>
              <label>
                Title:{" "}
                <input
                  type="text"
                  value={job.title}
                  placeholder="Enter the title of your job"
                  onChange={(e) =>
                    handleChange(job.id, "title", e.target.value)
                  }
                />
              </label>

              <div className="dates">
                <label>
                  From:{" "}
                  <input
                    type="date"
                    value={job.fromDate}
                    onChange={(e) =>
                      handleChange(job.id, "fromDate", e.target.value)
                    }
                  />
                </label>

                <label>
                  To:{" "}
                  <input
                    type="date"
                    value={job.toDate}
                    disabled={job.toCurrent}
                    onChange={(e) => {
                      handleChange(job.id, "toDate", e.target.value);
                    }}
                  />
                </label>

                <label>
                  <input
                    type="checkbox"
                    onChange={(e) => {
                      handleChange(job.id, "toCurrent", e.target.checked);
                    }}
                  />
                  Current
                </label>
              </div>

              <Responsibilities
                responsibilities={job.responsibilities}
                updateResponsibilities={(newResponsibilities) =>
                  handleChange(job.id, "responsibilities", newResponsibilities)
                }
              />

              <label>
                Description:{" "}
                <textarea
                  value={job.description}
                  placeholder="Write some additional information about your job..."
                  onChange={(e) =>
                    handleChange(job.id, "description", e.target.value)
                  }
                />
              </label>

              <div>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removejobs(job.id)}
                >
                  Remove Employment
                </button>
              </div>
            </fieldset>
          </li>
        ))}
      </ul>
    </div>
  );
}
