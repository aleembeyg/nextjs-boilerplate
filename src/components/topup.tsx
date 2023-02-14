import { useState } from "react";
const Topup = () => {
  const [showPanel, setShowPanel] = useState(false);
  const handleShowFlag = () => {
    setShowPanel(false);
  };
  return (
    <div>
      <div>
        <div onClick={handleShowFlag}>
          <svg width="32" height="32" viewBox="0 0 20 20">
            <path
              fill="#3B3D58"
              fill-rule="evenodd"
              d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm-.501 8.5H6.344c.13 2.908 1.37 5.947 3.156 6.433L9.499 10.5zm4.157 0H10.5v6.433c1.786-.487 3.025-3.526 3.155-6.432zm-8.314.001H3.018a7.015 7.015 0 0 0 4.2 5.923c-1.07-1.365-1.788-3.498-1.876-5.923zm11.64 0h-2.324c-.088 2.425-.806 4.558-1.876 5.923a7.016 7.016 0 0 0 4.2-5.923zM7.218 3.576l-.148.067A7.014 7.014 0 0 0 3.018 9.5h2.324c.087-2.426.805-4.559 1.876-5.924zM9.5 3.067C7.713 3.553 6.474 6.593 6.344 9.5H9.5V3.067zm1.001 0V9.5h3.155c-.13-2.907-1.368-5.946-3.155-6.433zm2.28.51l.05.063c1.044 1.367 1.741 3.472 1.827 5.86h2.324a7.015 7.015 0 0 0-4.2-5.924z"
            ></path>
          </svg>
          &nbsp;
          <svg
            width="8"
            height="8"
            viewBox="0 0 10 16"
            transform="rotate(90)"
            orientation="90"
          >
            <path
              d="M2 2L8 8L2 14"
              stroke="#708c8c"
              fill="none"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        <div>
          <input />
        </div>
        {showPanel && <div></div>}
      </div>
    </div>
  );
};

export default Topup;
