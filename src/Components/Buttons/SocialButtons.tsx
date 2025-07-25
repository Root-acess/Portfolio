import './SocialButton.css';

const SocialButtons = () => {
  return (
    <div className="social-card">
      <div className="astro-wrapper">
        <img
          src="https://uiverse.io/astronaut.png"
          alt="Astronaut"
          className="astronaut float"
        />
      </div>
      <h3 className="social-heading">Connect With Us</h3>
      <div className="social-icons-row">
        <a href="https://www.instagram.com/uiverse.io/" className="icon instagram" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
          <span>Instagram</span>
        </a>
        <a href="https://twitter.com/uiverse_io" className="icon twitter" target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-youtube"></i>
          <span>Youtube</span>
        </a>
        <a href="https://discord.gg/KD8ba2uUpT" className="icon-discord" target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-envelope"></i>
          <span className="mail-text">Mail</span>
        </a>
      </div>

    </div>
  );
};

export default SocialButtons;
