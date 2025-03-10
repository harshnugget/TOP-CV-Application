export default function Education() {
  return (
    <div className="education">
      <button type="button" className="add-btn">
        Add Education
      </button>

      <ul>
        <li>
          <fieldset>
            <label htmlFor="education-1-title">
              Education Title:{" "}
              <input
                type="text"
                id="education-1-title"
                name="education-1-title"
              />
            </label>

            <div className="dates">
              <label htmlFor="education-1-from-date">
                From:{" "}
                <input
                  type="date"
                  id="education-1-from-date"
                  name="education1FromDate"
                />
              </label>

              <label htmlFor="education-1-to-date">
                To:{" "}
                <input
                  type="date"
                  id="education-1-to-date"
                  name="education1ToDate"
                />
              </label>
            </div>

            <button type="button" className="add-btn">
              Add Grade
            </button>

            <ul>
              <li>
                Grade:
                <input
                  type="text"
                  name="education-1-grade-title"
                  placeholder="Grade Title"
                />
                <input
                  type="text"
                  name="education-1-grade-score"
                  placeholder="Grade Score"
                />
                <button type="button" className="remove-btn">
                  Remove Grade
                </button>
              </li>
            </ul>

            <label htmlFor="education-1-desc">
              Additional Info:{" "}
              <textarea id="education-1-desc" name="education-1-desc" />
            </label>

            <div>
              <button type="button" className="remove-btn">
                Remove Education
              </button>
            </div>
          </fieldset>
        </li>
      </ul>
    </div>
  );
}
