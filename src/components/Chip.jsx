import React from "react";

export default function Chip({ selectedMovie, setSelectedMovie }) {
  function removeSelection() {
    setSelectedMovie((prev) => prev.filter((item) => item !== selectedMovie));
  }
  return (
    <div
      style={{
        padding: ".7rem 2rem",
        background: "#148A08",
        marginRight: "1rem",
        fontSize: "1.3rem",
        marginTop: "1rem",
        minWidth: "40px",
        borderRadius: "3rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>{selectedMovie}</div>
      <div onClick={removeSelection} style={{ color: "#085C00" }}>
        X
      </div>
    </div>
  );
}
