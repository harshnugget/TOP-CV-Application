function ContactInfo({ firstName, lastName, phone, email }) {
  return (
    <div className="contact-info">
      <div className="name-container">
        <h1 className="first-name">{firstName}</h1>
        <h1 className="last-name">{lastName}</h1>
      </div>
      <h2>Details</h2>
      <p className="phone">{phone}</p>
      <p className="email">{email}</p>
    </div>
  );
}

function Profile({ summary }) {
  return (
    <div className="profile">
      <h2>Profile</h2>
      <p>{summary}</p>
    </div>
  );
}

function EmploymentHistory({ jobs = [] }) {
  return (
    <div className="employment-history-container">
      <h2>Employment History</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <div className="job">
              <h3>{job.title}</h3>
              <p className="date">
                {job.fromDate}{" "}
                {job.fromDate && (job.toDate || job.toCurrent) && "-"}{" "}
                {job.toCurrent ? "Current" : job.toDate}
              </p>
              <h4>{job.responsibilities.length > 0 && "Responsibilities"}</h4>
              <ul>
                {job.responsibilities.map((resp) => (
                  <li key={resp.id}>
                    <p className="responsibility">{resp.title}</p>
                  </li>
                ))}
              </ul>
              <p className="job-desc">{job.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Education({ educations = [] }) {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <ul>
        {educations.map((education) => (
          <li key={education.id}>
            <div className="education">
              <h3>{education.title}</h3>
              <p className="date">
                {education.fromDate}{" "}
                {education.fromDate && education.toDate && "-"}{" "}
                {education.toDate}
              </p>
              <h4>{education.grades.length > 0 && "Grades"}</h4>
              <ul>
                {education.grades.map((grade) => (
                  <li key={grade.id}>
                    <div className="grade">
                      <p className="grade-title">{grade.title}</p>
                      <p className="grade-score">{grade.score}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="job-desc">{education.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Skills({ skills = [] }) {
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default function CV({ cvData }) {
  const { contactInfo, profile, jobs, educations, skills } = cvData;

  return (
    <>
      <header>
        <ContactInfo
          firstName={contactInfo.firstName}
          lastName={contactInfo.lastName}
          phone={contactInfo.phone}
          email={contactInfo.email}
        />
      </header>
      <main>
        <Profile summary={profile} />
        <EmploymentHistory jobs={jobs} />
        <Education educations={educations} />
        <Skills skills={skills} />
      </main>
    </>
  );
}
