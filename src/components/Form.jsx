import { useState } from "react";
import ContactInfo from "./ContactInfo.jsx";
import Profile from "./Profile.jsx";
import EmploymentHistory from "./EmploymentHistory.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import CV from "./CV.jsx";

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

      <CV
        contactInfo={contactInfo}
        profile={profile}
        jobs={jobs}
        educations={educations}
        skills={skills}
      />
    </>
  );
}

export default Form;
