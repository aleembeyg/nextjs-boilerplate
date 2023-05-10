import { Container } from "@mui/material";
import styles from "./index.module.scss";
const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <Container maxWidth="xl" className={styles.footerContent}>2023 TalkHome Mobile </Container>
      </div>
    </footer>
  );
};

export default Footer;
