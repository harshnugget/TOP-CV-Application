import { useState } from "react";

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

      <ul>
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

export default function EmploymentHistory() {
  const [history, setHistory] = useState([]);

  function addHistory() {
    setHistory([
      ...history,
      {
        id: crypto.randomUUID(),
        occupation: "",
        fromDate: "",
        toDate: "",
        description: "",
        responsibilities: [],
      },
    ]);
  }

  function removeHistory(id) {
    setHistory(history.filter((emp) => emp.id !== id));
  }

  function handleChange(id, field, value) {
    setHistory(
      history.map((emp) => (emp.id === id ? { ...emp, [field]: value } : emp))
    );
  }

  return (
    <div className="employment-history">
      <button type="button" className="add-btn" onClick={addHistory}>
        Add Employment
      </button>

      <ul>
        {history.map((emp) => (
          <li key={emp.id}>
            <fieldset>
              <label>
                Occupation:{" "}
                <input
                  type="text"
                  value={emp.occupation}
                  placeholder="Enter the title of your occupation"
                  onChange={(e) =>
                    handleChange(emp.id, "title", e.target.value)
                  }
                />
              </label>

              <div className="dates">
                <label>
                  From:{" "}
                  <input
                    type="date"
                    value={emp.fromDate}
                    onChange={(e) =>
                      handleChange(emp.id, "fromDate", e.target.value)
                    }
                  />
                </label>

                <label>
                  To:{" "}
                  <input
                    type="date"
                    value={emp.toDate}
                    onChange={(e) =>
                      handleChange(emp.id, "toDate", e.target.value)
                    }
                  />
                </label>
              </div>

              <Responsibilities
                responsibilities={emp.responsibilities}
                updateResponsibilities={(newResponsibilities) =>
                  handleChange(emp.id, "responsibilities", newResponsibilities)
                }
              />

              <label>
                Description:{" "}
                <textarea
                  value={emp.description}
                  placeholder="Write some additional information about your job..."
                  onChange={(e) =>
                    handleChange(emp.id, "description", e.target.value)
                  }
                />
              </label>

              <div>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => removeHistory(emp.id)}
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
