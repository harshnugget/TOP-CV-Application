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

  function updateTitle(id, value) {
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
                onChange={(e) => updateTitle(resp.id, e.target.value)}
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

  function updateTitle(id, value) {
    setHistory(
      history.map((emp) =>
        emp.id === id ? { ...emp, occupation: value } : emp
      )
    );
  }

  function updateFromDate(id, date) {
    setHistory(
      history.map((emp) => (emp.id === id ? { ...emp, fromDate: date } : emp))
    );
  }

  function updateToDate(id, date) {
    setHistory(
      history.map((emp) => (emp.id === id ? { ...emp, toDate: date } : emp))
    );
  }

  function updateDescription(id, value) {
    setHistory((prevHistory) =>
      prevHistory.map((emp) =>
        emp.id === id ? { ...emp, description: value } : emp
      )
    );
  }

  function updateResponsibilities(id, newResponsibilities) {
    setHistory(
      history.map((emp) =>
        emp.id === id ? { ...emp, responsibilities: newResponsibilities } : emp
      )
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
                  onChange={(e) => updateTitle(emp.id, e.target.value)}
                />
              </label>

              <div className="dates">
                <label>
                  From:{" "}
                  <input
                    type="date"
                    value={emp.fromDate}
                    onChange={(e) => updateFromDate(emp.id, e.target.value)}
                  />
                </label>

                <label>
                  To:{" "}
                  <input
                    type="date"
                    value={emp.toDate}
                    onChange={(e) => updateToDate(emp.id, e.target.value)}
                  />
                </label>
              </div>

              <Responsibilities
                responsibilities={emp.responsibilities}
                updateResponsibilities={(newResponsibilities) =>
                  updateResponsibilities(emp.id, newResponsibilities)
                }
              />

              <label>
                Description:{" "}
                <textarea
                  value={emp.description}
                  placeholder="Write some additional information about your job..."
                  onChange={(e) => updateDescription(emp.id, e.target.value)}
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
