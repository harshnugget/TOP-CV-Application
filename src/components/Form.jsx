import { useState } from "react";
import ContactInfo from "./ContactInfo.jsx";
import Profile from "./Profile.jsx";
import EmploymentHistory from "./EmploymentHistory.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";

function Form() {
  return (
    <form>
      <fieldset>
        <legend>Contact Information</legend>
        <ContactInfo />
      </fieldset>

      <fieldset>
        <legend>Profile</legend>
        <Profile />
      </fieldset>

      <fieldset>
        <legend>Employment History</legend>
        <EmploymentHistory />
      </fieldset>

      <fieldset>
        <legend>Education</legend>
        <Education />
      </fieldset>

      <fieldset>
        <legend>Skills</legend>
        <Skills />
      </fieldset>
    </form>
  );
}

export default Form;
