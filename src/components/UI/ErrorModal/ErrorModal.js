import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
