import "./Project.css";
import img from "../img/logo.png";

// Existing DevOps projects
const projects = [
  {
    name: "Leuma",
    link: "https://successor.vercel.app/",
    logo: img,
    stats: ["React", "Nodejs", "Tailwind", "Firebase"],
  },
  {
    name: "Moonred",
    logo: img,
    link: "https://moonred-ai.vercel.app/",
    stats: ["React", "Nodejs", "Bootstrap", "Firebase"],
  },
  {
    name: "Vortex PHP Framework",
    logo: img,
    link: "https://github.com/Root-acess/vortex-php-framework",
    stats: ["PHP", "HTML", "Css", "js"],
  },
  {
    name: "Care-Connect",
    logo: img,
    link: "https://github.com/Root-acess/",
    stats: ["React", "Nodejs", "Tailwind", "Firebase"],
  },
  {
    name: "Moth",
    logo: img,
    link: "https://github.com/Root-acess/moth",
    stats: ["React", "Typescript", "Tailwind"],
  },
  {
    name: "Bokland",
    logo: img,
    link: "https://github.com/Root-acess/bokland",
    stats: ["html", "css", "js", "php"],
  },
  {
    name: "email-sender-tool",
    logo: img,
    link: "https://github.com/Root-acess/email-sender-tool",
    stats: ["html", "css", "js", "Python"],
  },
  {
    name: "Memory",
    logo: img,
    link: "https://memory-czxjf32l0-cyber-boys-projects.vercel.app/",
    stats: ["Electron", "JS", "React", "Css"],
  },
];

// New Full Stack Projects
const fullstackProjects = [
  {
    name: "Successor",
    link: "https://successor.vercel.app/",
    logo: img,
    stats: ["React", "Nodejs", "Tailwind", "Firebase"],
  },
  {
    name: "Moonred",
    logo: img,
    link: "https://moonred-ai.vercel.app/",
    stats: ["React", "Nodejs", "Bootstrap", "Firebase"],
  },
  {
    name: "Vortex PHP Framework",
    logo: img,
    link: "https://github.com/Root-acess/vortex-php-framework",
    stats: ["PHP", "HTML", "CSS", "JavaScript"],
  },
  {
    name: "Care-Connect",
    logo: img,
    link: "https://github.com/Root-acess/",
    stats: ["React", "Nodejs", "Tailwind", "Firebase"],
  },
  {
    name: "Moth",
    logo: img,
    link: "https://github.com/Root-acess/moth",
    stats: ["React", "TypeScript", "Tailwind"],
  },
  {
    name: "Bokland",
    logo: img,
    link: "https://github.com/Root-acess/bokland",
    stats: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    name: "email-sender-tool",
    logo: img,
    link: "https://github.com/Root-acess/email-sender-tool",
    stats: ["HTML", "CSS", "JavaScript", "Python"],
  },
  {
    name: "Memory",
    logo: img,
    link: "https://memory-czxjf32l0-cyber-boys-projects.vercel.app/",
    stats: ["Electron", "JavaScript", "React", "CSS"],
  },
];

const DevopsProject = () => {
  return (
    <>
      <div className="home-button">
        <a href="/" className="home-link">
          <i className="fas fa-home"></i> Home
        </a>
      </div>

      <section className="projects-section">
        <h2>DevOps - Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="main_card" key={index}>
              <div className="background"></div>
              <div className="cool_card_logo">
                {typeof project.logo === "string" && project.logo.length === 1 ? (
                  <p className="logo-text">{project.logo}</p>
                ) : (
                  <img src={project.logo} alt={`${project.name} logo`} className="logo-img" />
                )}
              </div>
              <div className="project-name">
                <h3>{project.name}</h3>
              </div>
              {project.stats.map((stat, i) => (
                <div className={`box box${i + 1}`} key={i}>
                  <span className="icon">{stat}</span>
                </div>
              ))}
              <div className="view-button">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2>Full Stack Projects</h2>
        <div className="projects-container">
          {fullstackProjects.map((project, index) => (
            <div className="main_card" key={index}>
              <div className="background"></div>
              <div className="cool_card_logo">
                {typeof project.logo === "string" && project.logo.length === 1 ? (
                  <p className="logo-text">{project.logo}</p>
                ) : (
                  <img src={project.logo} alt={`${project.name} logo`} className="logo-img" />
                )}
              </div>
              <div className="project-name">
                <h3>{project.name}</h3>
              </div>
              {project.stats.map((stat, i) => (
                <div className={`box box${i + 1}`} key={i}>
                  <span className="icon">{stat}</span>
                </div>
              ))}
              <div className="view-button">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DevopsProject;
