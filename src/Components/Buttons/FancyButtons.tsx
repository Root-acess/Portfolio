import styles from "./Button.module.css";

const FancyButton = () => {
  return (
    <a href="https://github.com/Root-acess" target="_blank" rel="noopener noreferrer">
      <button className={styles.button}>
        <span className={styles.actualText}>&nbsp;Github&nbsp;</span>
        <span className={styles.hoverText} aria-hidden="true">
          &nbsp;Github&nbsp;
        </span>
      </button>
    </a>
  );
};

export default FancyButton;
