import ContactInfo from "./ContactInfo.jsx";
import Profile from "./Profile.jsx";
import EmploymentHistory from "./EmploymentHistory.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import { useState } from "react";

function Form() {
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [profile, setProfile] = useState("");
  const [jobs, setJobs] = useState([]);
  const [educations, setEducations] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <>
      <form>
        <fieldset>
          <legend>Contact Information</legend>
          <ContactInfo
            contactInfo={contactInfo}
            setContactInfo={setContactInfo}
          />
        </fieldset>

        <fieldset>
          <legend>Profile</legend>
          <Profile profile={profile} setProfile={setProfile} />
        </fieldset>

        <fieldset>
          <legend>Employment History</legend>
          <EmploymentHistory jobs={jobs} setJobs={setJobs} />
        </fieldset>

        <fieldset>
          <legend>Education</legend>
          <Education educations={educations} setEducations={setEducations} />
        </fieldset>

        <fieldset>
          <legend>Skills</legend>
          <Skills skills={skills} setSkills={setSkills} />
        </fieldset>
      </form>

      <header>
        <div className="name-container">
          <h1 className="first-name">{contactInfo.firstName}</h1>
          <h1 className="last-name">{contactInfo.lastName}</h1>
        </div>
        <p className="phone">{contactInfo.phone}</p>
        <p className="email">{contactInfo.email}</p>
      </header>
    </>
  );
}

export default Form;
