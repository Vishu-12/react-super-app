import React from "react";

export default function Box({ data, selectedMovie, setSelectedMovie }) {
  function handleSelection() {
    if (selectedMovie.includes(data.category)) {
      setSelectedMovie((prev) => prev.filter((item) => item !== data.category));
    } else {
      setSelectedMovie((prev) => [...prev, data.category]);
    }
  }
  return (
    <div
      style={{
        border: `5px solid ${
          selectedMovie.includes(data.category) ? "#11B800" : "black"
        }`,
        padding: "10px",
        margin: "10px",
        width: "150px",
        height: "150px",
        display: "inline-block",
        borderRadius: "20px",
        background: `${data.bgcolor}`,
        fontSize: "1.5rem",
      }}
      onClick={handleSelection}
    >
      {data.category}
      <img
        src={data.image}
        alt=""
        width={150}
        style={{ marginTop: "1.5rem" }}
      />
    </div>
  );
}
