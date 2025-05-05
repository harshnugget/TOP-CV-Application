import { useState } from "react";
import ContactDetails from "./ContactDetails";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

const defaultGrid = `
  "contact-details contact-details"
  "skills-header skills-content"
  "experience-header experience-content"
  "education-header education-content"
  `;

export default function Page({ gridAreaLayout = defaultGrid }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    skills: [],
    experience: [],
    education: [],
  });

  const width = 560;
  const height = width * 1.41;
  const pageInset = Math.round(width / 30);

  const styles = {
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 3fr)",
    gridTemplateAreas: gridAreaLayout,
    gridAutoRows: "max-content",
    width: `${width}px`,
    maxWidth: "100%",
    minHeight: `${height}px`,
    backgroundColor: "white",
    border: "solid black 1px",
    padding: `${pageInset + 1}px`,
    boxShadow: `inset 0 0 0 ${pageInset}px white, inset 0 0 0 ${
      pageInset + 1
    }px grey`,
  };

  return (
    <>
      <div style={{ ...styles }}>
        <ContactDetails
          updateContactDetails={(contactDetails) =>
            setData({ ...data, ...contactDetails })
          }
          style={{ gridArea: "contact-details" }}
        />
        <div className="skills-header" style={{ gridArea: "skills-header" }}>
          Skills
        </div>
        <div className="skills-content" style={{ gridArea: "skills-content" }}>
          <Skills
            updateSkills={(skills) => setData({ ...data, skills })}
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
            updateExperience={(experience) => setData({ ...data, experience })}
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
            style={{ display: "block", gridArea: "education-content" }}
          />
        </div>
      </div>
    </>
  );
}
