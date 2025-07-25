
import { useNavigate } from 'react-router-dom'; // ✅ import navigate hook
import styles from "./Button.module.css";

const FancyButton2 = () => {
  const navigate = useNavigate();

  const redirectToProjects = () => {
    navigate('/projects'); // ✅ redirects to /projects route
  };

  return (
    <button onClick={redirectToProjects} className={styles.button}>
      <span className={styles.actualText}>&nbsp;Projects&nbsp;</span>
      <span className={styles.hoverText} aria-hidden="true">
        &nbsp;Projects&nbsp;
      </span>
    </button>
  );
};

export default FancyButton2;
