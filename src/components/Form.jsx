import ContactInfo from "./ContactInfo.jsx";
import Profile from "./Profile.jsx";
import EmploymentHistory from "./EmploymentHistory.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";

function Form({ formData, updateFormData }) {
  return (
    <>
      <form id="cv-form">
        <fieldset>
          <legend>Contact Information</legend>
          <ContactInfo
            contactInfo={formData.contactInfo}
            setContactInfo={(formData) =>
              updateFormData("contactInfo", formData)
            }
          />
        </fieldset>

        <fieldset>
          <legend>Profile</legend>
          <Profile
            profile={formData.profile}
            setProfile={(formData) => updateFormData("profile", formData)}
          />
        </fieldset>

        <fieldset>
          <legend>Employment History</legend>
          <EmploymentHistory
            jobs={formData.jobs}
            setJobs={(formData) => updateFormData("jobs", formData)}
          />
        </fieldset>

        <fieldset>
          <legend>Education</legend>
          <Education
            educations={formData.educations}
            setEducations={(formData) => updateFormData("educations", formData)}
          />
        </fieldset>

        <fieldset>
          <legend>Skills</legend>
          <Skills
            skills={formData.skills}
            setSkills={(formData) => updateFormData("skills", formData)}
          />
        </fieldset>
      </form>
    </>
  );
}

export default Form;
