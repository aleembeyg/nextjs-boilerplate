import { BsArrowRight } from "react-icons/bs";
import styles from "./index.module.scss";

const fourOFour = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className={styles.heading}>404</h1>
        <h2 className={styles.secondHeading}>Error</h2>
        <h5 style={{ fontSize: "25px" }}>
          <p>Oops! Page not found</p>
        </h5>
      </div>
    </>
  );
};

export default fourOFour;
