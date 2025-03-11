export default function CV({ contactInfo, profile, jobs, educations, skills }) {
  return (
    <>
      <header>
        <div className="contact-info">
          <div className="name-container">
            <h1 className="first-name">{contactInfo.firstName}</h1>
            <h1 className="last-name">{contactInfo.lastName}</h1>
          </div>
          <h2>Details</h2>
          <p className="phone">{contactInfo.phone}</p>
          <p className="email">{contactInfo.email}</p>
        </div>
      </header>
      <main>
        <div className="profile">
          <h2>Profile</h2>
          <p>{profile}</p>
        </div>
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
                  <h4>
                    {job.responsibilities.length > 0 && "Responsibilities"}
                  </h4>
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
          <div className="skills-container">
            <h2>Skills</h2>
            <ul>
              {skills.map((skill) => (
                <li key={skill.id}>{skill.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
