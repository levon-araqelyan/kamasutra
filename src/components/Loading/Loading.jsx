import React from "react";
import styles from "./Loading.module.scss";

const Loading = ({ small }) => {
  return (
    <div className={styles.loadingWrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: "auto",
          display: "block",
          shapeRendering: "auto",
        }}
        width={`${small ? "16px" : "100px"}`}
        height={`${small ? "16px" : "100px"}`}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#ECEDF0"
          strokeWidth="4"
          r="40"
        ></circle>
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#B4182D"
          strokeWidth="4"
          r="40"
          strokeDasharray="188.49555921538757 64.83185307179586"
          transform="rotate(144.624 50 50)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1.6s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          ></animateTransform>
        </circle>
      </svg>
      {!small && <p>Loading...</p>}
    </div>
  );
};

export default Loading;
