import { profile } from './data/profile'
import { projects } from './data/projects'
import './App.css'

const resumeUrl = `${new URL('./assets/resume.pdf', import.meta.url).href}#page=1`

function App() {
  return (
    <div className="page">
      <header className="intro">
        <h1>{profile.name}</h1>
        <p className="who">
          {profile.role}
          <span aria-hidden="true"> · </span>
          {profile.location}
        </p>
        <nav className="contacts" aria-label="Kontakt">
          <a href={`mailto:${profile.email}`}>E-mail</a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={resumeUrl} target="_blank" rel="noreferrer">
            Životopis
          </a>
        </nav>
      </header>

      <section aria-labelledby="experience-title">
        <h2 id="experience-title">Praxe</h2>
        <ul>
          {profile.experience.map((job) => (
            <li key={`${job.where}-${job.when}`}>
              <span>
                <strong>{job.where}</strong>
                <span className="meta">{job.what}</span>
              </span>
              <span className="when">{job.when}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="education-title">
        <h2 id="education-title">Vzdělání</h2>
        <ul>
          {profile.education.map((school) => (
            <li key={school.school}>
              <span>
                <strong>{school.school}</strong>
                <span className="meta">{school.detail}</span>
              </span>
              <span className="when">{school.when}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="work-title">
        <h2 id="work-title">Projekty</h2>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>
              <span>
                <strong>{project.title}</strong>
                <span className="meta">{project.tags.join(' · ')}</span>
              </span>
              <span className="links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    Web
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default App
