import { useEffect } from "react";
const Waiting = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="loading-page-bg">
      <div style={{ display: "flex" }}>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Waiting;
