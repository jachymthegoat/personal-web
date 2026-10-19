import { useRef, useState, type AnimationEvent } from 'react'
import { profile } from './data/profile'
import { projects } from './data/projects'
import './App.css'

const resumeUrl = `${new URL('./assets/resume.pdf', import.meta.url).href}#page=1`

function App() {
  const [spinning, setSpinning] = useState(false)
  const spinningRef = useRef(false)

  function spinPortrait() {
    if (spinningRef.current) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    spinningRef.current = true
    setSpinning(true)
  }

  function finishSpin(event: AnimationEvent<HTMLDivElement>) {
    if (event.animationName !== 'portrait-spin') return
    spinningRef.current = false
    setSpinning(false)
  }

  return (
    <div className="page">
      <header className="intro">
        <div>
          <h1>{profile.name}</h1>
          <p className="who">
            {profile.role}, {profile.school}
            <span aria-hidden="true"> · </span>
            {profile.location}
          </p>
          <p className="who">{profile.skills}</p>
          <nav className="contacts" aria-label="Kontakt">
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
        </div>
        <div className="portrait" onMouseEnter={spinPortrait}>
          <div
            className={spinning ? 'portrait__inner is-spinning' : 'portrait__inner'}
            onAnimationEnd={finishSpin}
          >
            <img src="/jachym.jpg" alt={profile.name} />
            <span className="portrait__back" aria-hidden="true">
              🐐
            </span>
          </div>
        </div>
      </header>

      <section aria-labelledby="experience-title">
        <h2 id="experience-title">Praxe</h2>
        <ul>
          {profile.experience.map((job) => (
            <li className="job" key={`${job.where}-${job.when}`}>
              <span>
                <strong>{job.where}</strong>
                <span className="meta">{job.what}</span>
                <span className="detail">
                  <span>
                    <span className="detail__text">{job.detail}</span>
                  </span>
                </span>
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
            <li className="project" key={project.id}>
              {project.image && (
                <img className="project__shot" src={project.image} alt="" />
              )}
              <span className="project__copy">
                <strong>{project.title}</strong>
                <span className="meta">{project.tags.join(' · ')}</span>
                <span className="detail">
                  <span>
                    <span className="preview">{project.summary}</span>
                  </span>
                </span>
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
