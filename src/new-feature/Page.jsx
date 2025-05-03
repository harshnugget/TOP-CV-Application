import { useState } from "react";
import { Name, Email, Phone } from "./ContactDetails";

const defaultGrid = `
  "name name"
  "email email"
  "phone phone"
  "skills-header skills-content"
  "experience-header experience-content"
  "education-header education-content"
  `;

export default function Page({ gridAreaLayout = defaultGrid }) {
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
      <div className="cv-page" style={{ ...styles }}>
        <Name style={{ display: "flex", gridArea: "name" }} />
        <Email style={{ display: "flex", gridArea: "email" }} />
        <Phone style={{ display: "flex", gridArea: "phone" }} />
      </div>
    </>
  );
}
