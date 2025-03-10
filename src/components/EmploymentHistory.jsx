export default function EmploymentHistory() {
  return (
    <div className="employment-history">
      <button type="button" className="add-btn">
        Add Employment
      </button>

      <ul>
        <li>
          <fieldset>
            <label htmlFor="occupation-1">
              Occupation:{" "}
              <input type="text" id="occupation-1" name="occupation-1" />
            </label>

            <div className="dates">
              <label htmlFor="occupation-1-from-date">
                From:{" "}
                <input
                  type="date"
                  id="occupation-1-from-date"
                  name="occupation1FromDate"
                />
              </label>

              <label htmlFor="occupation-1-to-date">
                To:{" "}
                <input
                  type="date"
                  id="occupation-1-to-date"
                  name="occupation1ToDate"
                />
              </label>
            </div>

            <button type="button" className="add-btn">
              Add Responsibility
            </button>

            <ul>
              <li>
                <label htmlFor="occupation-1-resp">
                  Responsibility:{" "}
                  <input
                    type="text"
                    id="occupation-1-resp"
                    name="occupation-1-resp"
                  />
                </label>

                <button type="button" className="remove-btn">
                  Remove Responsibility
                </button>
              </li>
            </ul>

            <label htmlFor="occupation-1-desc">
              Description:{" "}
              <textarea id="occupation-1-desc" name="occupation-1-desc" />
            </label>

            <div>
              <button type="button" className="remove-btn">
                Remove Employment
              </button>
            </div>
          </fieldset>
        </li>
      </ul>
    </div>
  );
}
