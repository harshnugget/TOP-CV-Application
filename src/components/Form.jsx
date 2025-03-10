import { useState } from "react";

function Form() {
  return (
    <form>
      {/* Contact Information */}
      <fieldset>
        <legend>Contact Information</legend>
        <label htmlFor="fname">
          First name: <input type="text" id="fname" name="firstName" />
        </label>

        <label htmlFor="lname">
          Last name: <input type="text" id="lname" name="lastName" />
        </label>

        <label htmlFor="phone">
          Phone: <input type="tel" id="phone" name="phone" />
        </label>

        <label htmlFor="email">
          Email: <input type="email" id="email" name="email" />
        </label>
      </fieldset>

      {/* Profile */}
      <fieldset>
        <legend>Profile</legend>
        <label htmlFor="profile">
          Profile: <textarea id="profile" name="profile" />
        </label>
      </fieldset>

      {/* Employment History */}
      <fieldset>
        <legend>Employment History</legend>

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
      </fieldset>

      {/* Education */}
      <fieldset>
        <legend>Education</legend>

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
      </fieldset>

      {/* Skills */}
      <fieldset>
        <legend>Skills</legend>

        <button type="button" className="add-btn">
          Add Skill
        </button>

        <ul>
          <li>
            <fieldset>
              <label htmlFor="skill-1">
                Skill: <input type="text" id="skill-1" name="skill-1" />
              </label>

              <label>Proficiency:</label>
              {[1, 2, 3, 4, 5].map((level) => (
                <label key={level} htmlFor={`skill-1-${level}`}>
                  <input
                    type="radio"
                    id={`skill-1-${level}`}
                    name="skill-1-proficiency"
                    value={level}
                  />
                  {level}
                </label>
              ))}

              <button type="button" className="remove-btn">
                Remove Skill
              </button>
            </fieldset>
          </li>
        </ul>
      </fieldset>
    </form>
  );
}

export default Form;
