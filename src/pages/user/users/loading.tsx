import { useState } from "react";
const Loading = () => {
  const skeltinBoxes = 9;
  return (
    <div className="row">
      {[...Array(skeltinBoxes)].map((index: number) => (
        <div key={index} className="p-2 col-sm-3">
          <div className="card p-0" aria-hidden="true">
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span
                  className="placeholder col-12"
                  style={{ height: "200px" }}
                ></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
