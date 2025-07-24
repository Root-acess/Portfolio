import "./Project.css";
import img from "../img/logo.png";
const projects = [
  {
    name: "Leuma",
    link: "https://successor.vercel.app/",
    logo: img, // Use image as logo
    stats: ["React", "Nodejs", "Tailwind", "Firebase"],
  },
  {
    name: "Moonred",
    logo: img, // Text-based logo
    link: "https://moonred-ai.vercel.app/",
    stats: ["React", "Nodejs", "Bootstrap", "Firebase"],
  },
  {
    name: "Vortex PHP Framework",
    logo: img, // Text-based logo
    link: "https://github.com/Root-acess/vortex-php-framework",
    stats: ["PHP","HTML","Css","js"],
  },
  {
    name: "Care-Connect",
    logo: img, // Text-based logo
    link: "https://github.com/Root-acess/",
    stats: ["React", "Nodejs", "Tailwind", "Firebase"],
  },
 
  {
    name: "Moth",
    logo: img, // Text-based logo
    link: "https://github.com/Root-acess/moth",
    stats: ["React", "Typescript","Tailwind"],
  },
  {
    name: "Bokland",
    logo: img, // Text-based logo
    link: "https://github.com/Root-acess/bokland",
    stats: ["html", "css", "js", "php"],
  },
  {
    name: "email-sender-tool",
    logo: img, // Text-based logo
    link: "https://github.com/Root-acess/email-sender-tool",
    stats: ["html", "css", "js", "Python"],
  },
  {
    name: "Memory",
    logo: img, // Text-based logo
    link: "https://memory-czxjf32l0-cyber-boys-projects.vercel.app/",
    stats: ["Electron", "JS","React","Css"],
  },
];

const DevopsProject = () => {
  return (
        <section className="projects-section">
          <h2>DevOps - Projects</h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <div className="main_card" key={index}>
                <div className="background"></div>
    
                {/* Logo section */}
                <div className="cool_card_logo">
                  {typeof project.logo === "string" && project.logo.length === 1 ? (
                    <p className="logo-text">{project.logo}</p> // Display text logo
                  ) : (
                    <img src={project.logo} alt={`${project.name} logo`} className="logo-img" />
                  )}
                </div>
    
                {/* Project name */}
                <div className="project-name">
                  <h3>{project.name}</h3>
                </div>
    
                {/* Stats section */}
                {project.stats.map((stat, i) => (
                  <div className={`box box${i + 1}`} key={i}>
                    <span className="icon">{stat}</span>
                  </div>
                ))}
    
                {/* View button */}
                <div className="view-button">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
  )
}

export default DevopsProject