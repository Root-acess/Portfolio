import React, { useEffect } from 'react';
import './App.css';
import img from '../src/img/profile.jpg';
import Contact from './elements/Contact';
import Navbar from './elements/Navbar';
// import Projects from './Components/Project';
// import DevopsProject from './Components/DevopsProject';
import Project from './Pages/Project';
import Devlogo from './Components/Devlogo';
// Scroll to top function
const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const App: React.FC = () => {
  // Scroll to top on component mount
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <div>

        <Navbar />
        <div className="context">
          <div className="profile-container">
            <img src={img} alt="Profile" className="profile-icon" />
            <div className="text">
              <h1>Hiralal Singh</h1>
              <h3>@Root-access</h3>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="area">
          <ul className="circles">
            {Array.from({ length: 10 }, (_, index) => (
              <li key={index}></li>
            ))}
          </ul>
        </div>
        <div className="divlogo">
            <Devlogo />
        </div>

        <section className="section t-2" id="projects">
          {/* <div className="project-container">
            <DevopsProject/>
          </div>
          <div className="project-container">
            <Projects />
          </div> */}
          <Project/>
        </section>

        <section className="section" id="contact">
          <h2>Contact</h2>
          <div className="section-contact">
            <Contact />
          </div>
          <p>
            Feel free to reach out to me at{' '}
            <a href="mailto:hiralals221@gmail.com">hiralals221@gmail.com</a> or connect with me on{' '}
            <a href="https://www.linkedin.com/in/hiralalsingh">LinkedIn</a>.
          </p>
        </section>

        <section className="section" id="about">
          <h2>About Me</h2>
          <div className="about-content">
            <img src={img} alt="Profile" className="profile-icon" />
            <p>
              Hi, I'm Hiralal Singh, a passionate web developer with a knack for creating beautiful
              and functional websites. I specialize in front-end development and have experience
              working with various modern web technologies.
            </p>
            <div className="skills">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'PHP', 'MySQL'].map(
                (skill, index) => (
                  <div className="skill" key={index}>
                    {skill}
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
