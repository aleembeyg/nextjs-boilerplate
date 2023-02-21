import { useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import { AiOutlineDown } from "react-icons/ai";
import styles from "./index.module.css";
const Topup = () => {
  const [showPanel, setShowPanel] = useState(false);
  const handleShowFlag = () => {
    setShowPanel(false);
  };
  return (
    <div>
      <div className={styles.topupDowpdown}>
        <div onClick={handleShowFlag}>
          <TfiWorld size={25} />
          &nbsp;
        </div>
        <div>
          <label></label>
        </div>
        <div>
          <AiOutlineDown />
        </div>
        {showPanel && <div></div>}
      </div>
    </div>
  );
};

export default Topup;
