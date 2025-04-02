function ContactInfo({ firstName, lastName, phone, email }) {
  return (
    <>
      <div style={{ gridArea: "name" }}>
        {firstName} {lastName}
      </div>
      <div style={{ gridArea: "email" }}>{email}</div>
      <div style={{ gridArea: "phone" }}>{phone}</div>
    </>
  );
}

function Skills() {
  const headerStyles = {
    border: "solid red 1px",
  };

  const contentStyles = {
    border: "solid red 1px",
  };

  return (
    <>
      <div style={{ gridArea: "skills-header", ...headerStyles }}>Skills</div>
      <div style={{ gridArea: "skills-content", ...contentStyles }}>
        <ul style={{ listStylePosition: "inside" }}>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
        </ul>
      </div>
    </>
  );
}

function Experience() {
  const headerStyles = {
    border: "solid red 1px",
  };

  const contentStyles = {
    border: "solid red 1px",
  };

  return (
    <>
      <div style={{ gridArea: "experience-header", ...headerStyles }}>
        Experience
      </div>
      <div style={{ gridArea: "experience-content", ...contentStyles }}>
        <ul style={{ listStylePosition: "inside" }}>
          <li>Experience 1</li>
          <li>Experience 2</li>
        </ul>
      </div>
    </>
  );
}

function Education() {
  const headerStyles = {
    border: "solid red 1px",
  };

  const contentStyles = {
    border: "solid red 1px",
  };

  return (
    <>
      <div style={{ gridArea: "education-header", ...headerStyles }}>
        Education
      </div>
      <div style={{ gridArea: "education-content", ...contentStyles }}>
        <ul style={{ listStylePosition: "inside" }}>
          <li>Education 1</li>
          <li>Education 2</li>
        </ul>
      </div>
    </>
  );
}

export default function Page() {
  const width = 560;
  const height = width * 1.41;
  const pageInset = Math.round(width / 30);

  const gridArea = `
  "name name"
  "email email"
  "phone phone"
  "skills-header skills-content"
  "experience-header experience-content"
  "education-header education-content"
  `;

  const styles = {
    boxSizing: "border-box",
    display: "grid",
    gridTemplateColumns: "1fr 3fr",
    gridTemplateAreas: gridArea,
    gridAutoRows: "minmax(1rem, min-content)",
    width: `${width}px`,
    minHeight: `${height}px`,
    backgroundColor: "white",
    border: "solid black 1px",
    padding: `${pageInset}px`,
    boxShadow: `inset 0 0 0 ${pageInset}px white, inset 0 0 0 ${
      pageInset + 1
    }px grey`,
  };

  return (
    <div className="cv-page" style={{ ...styles }}>
      <ContactInfo
        firstName="First"
        lastName="Last"
        phone="0123456789"
        email="my-email@email.com"
      />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}
