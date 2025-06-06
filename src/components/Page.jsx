import { useState } from "react";
import ContactDetails from "./ContactDetails";
import Profile from "./Profile";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

const defaultGrid = `
  "contact-details contact-details"
  "profile-header profile-content"
  "skills-header skills-content"
  "experience-header experience-content"
  "education-header education-content"
  `;

export default function Page({ gridAreaLayout = defaultGrid }) {
  const [previewMode, setPreviewMode] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: { city: "", postCode: "" },
    skills: [],
    experience: [],
    education: [],
  });

  const width = 640;
  const height = width * 1.41;
  const pageInset = Math.round(width / 30);

  const containerStyles = {
    boxSizing: "border-box",
    width: `${width}px`,
    height: `${height}px`,
    minWidth: `${width}px`,
    maxWidth: `${width}px`,
    minHeight: `max-content`,
    border: "solid black 1px",
    padding: `${pageInset + 1}px`,
    boxShadow: `inset 0 0 0 ${pageInset}px white, inset 0 0 0 ${
      pageInset + 1
    }px grey`,
  };

  const styles = {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 3fr)",
    gridTemplateAreas: gridAreaLayout,
    gridAutoRows: "max-content",
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    minHeight: `max-content`,
  };

  function onClickPreviewBtn() {
    setPreviewMode(true);
  }

  function onClickEditBtn() {
    setPreviewMode(false);
  }

  return (
    <>
      {previewMode ? (
        <button type="button" className="edit-btn" onClick={onClickEditBtn}>
          Edit
        </button>
      ) : (
        <button
          type="button"
          className="preview-btn"
          onClick={onClickPreviewBtn}
        >
          Preview
        </button>
      )}
      <div
        className={`cv-page-container ${
          previewMode ? "preview-mode" : "edit-mode"
        }`}
        style={{ ...containerStyles }}
      >
        <div className="cv-page" style={{ ...styles }}>
          <ContactDetails
            updateContactDetails={(contactDetails) =>
              setData({ ...data, ...contactDetails })
            }
            previewMode={previewMode}
            style={{ gridArea: "contact-details" }}
          />

          <div
            className="profile-header"
            style={{ gridArea: "profile-header" }}
          >
            Profile
          </div>
          <div
            className="profile-content"
            style={{ gridArea: "profile-content" }}
          >
            <Profile
              updateProfile={(profile) => setData({ ...data, profile })}
              previewMode={previewMode}
              style={{ display: "block", gridArea: "profile-content" }}
            />
          </div>

          <div className="skills-header" style={{ gridArea: "skills-header" }}>
            Skills
          </div>
          <div
            className="skills-content"
            style={{ gridArea: "skills-content" }}
          >
            <Skills
              updateSkills={(skills) => setData({ ...data, skills })}
              previewMode={previewMode}
              style={{ display: "block", gridArea: "skills-content" }}
            />
          </div>
          <div
            className="experience-header"
            style={{ gridArea: "experience-header" }}
          >
            Experience
          </div>
          <div
            className="experience-content"
            style={{ gridArea: "experience-content" }}
          >
            <Experience
              updateExperience={(experience) =>
                setData({ ...data, experience })
              }
              previewMode={previewMode}
              style={{ display: "block", gridArea: "experience-content" }}
            />
          </div>
          <div
            className="education-header"
            style={{ display: "block", gridArea: "education-header" }}
          >
            Education
          </div>
          <div className="education-content">
            <Education
              updateEducation={(education) => setData({ ...data, education })}
              previewMode={previewMode}
              style={{ display: "block", gridArea: "education-content" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
