import React, { useState } from "react";
import Box from "../components/Box";
import Chip from "../components/Chip";
import "./css/Genre.css";
import action from "../assets/action.png";
import drama from "../assets/drama.png";
import fantasy from "../assets/fantasy.png";
import fiction from "../assets/fiction.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import western from "../assets/western.png";
import { useNavigate } from "react-router-dom";

const MOVIES = [
  {
    id: 0,
    category: "Action",
    image: action,
    bgcolor: "#FF5209",
  },
  {
    id: 1,
    category: "Drama",
    image: drama,
    bgcolor: "#D7A4FF",
  },
  {
    id: 2,
    category: "Romance",
    image: romance,
    bgcolor: "#148A08",
  },
  {
    id: 3,
    category: "Thriller",
    image: thriller,
    bgcolor: "#84C2FF",
  },
  {
    id: 4,
    category: "Western",
    image: western,
    bgcolor: "#902500",
  },
  {
    id: 5,
    category: "Horror",
    image: horror,
    bgcolor: "#7358FF",
  },
  {
    id: 6,
    category: "Fantasy",
    image: fantasy,
    bgcolor: "#FF4ADE",
  },
  {
    id: 7,
    category: "Music",
    image: music,
    bgcolor: "#E61E32",
  },
  {
    id: 8,
    category: "Fiction",
    image: fiction,
    bgcolor: "#6CD061",
  },
];
export default function Genre() {
  const [selectedMovie, setSelectedMovie] = useState([]);
  const navigate = useNavigate();
  console.log(selectedMovie);
  function moveNextPage() {
    if (selectedMovie.length > 2) {
      localStorage.setItem("movies", JSON.stringify(selectedMovie));
      navigate("/info");
    }
  }
  return (
    <div className="container">
      <div className="grid-view">
        <div style={{ alignItems: "center", width: "20vw" }}>
          <h1 className="heading">Super app</h1>
          <p className="sub-heading">Choose your entertainment category</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
            }}
          >
            {selectedMovie?.length > 0
              ? selectedMovie.map((movie, index) => {
                  return (
                    <Chip
                      selectedMovie={movie}
                      setSelectedMovie={setSelectedMovie}
                      key={index}
                    />
                  );
                })
              : null}
          </div>
          <p>
            {selectedMovie?.length < 3 && (
              <p style={{ color: "red", marginTop: "3rem" }}>
                Minimum 3 category required
              </p>
            )}
          </p>
        </div>
      </div>
      <div className="right-side">
        {" "}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
          {MOVIES.map((movie) => {
            return (
              <Box
                selectedMovie={selectedMovie}
                setSelectedMovie={setSelectedMovie}
                key={movie.id}
                data={movie}
              />
            );
          })}
        </div>
        <button
          style={{
            position: "fixed",
            bottom: "3rem",
            right: "3rem",
            background: "#148A08",
            color: "white",
            fontSize: "1.2rem",
            padding: "1rem 2rem",
            borderRadius: "3rem",
            border: "none",
          }}
          onClick={moveNextPage}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
