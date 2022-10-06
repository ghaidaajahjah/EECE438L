import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieReviewList, setMovieList] = useState([]);
  const [MovieNameSearch, FindReviewByName] = useState("");
  const [ResultReview, setResultReview] = useState("");
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setMovieList(response.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    });

    setMovieList([
      ...movieReviewList,

      { movieName: movieName, movieReview: review },
    ]);
  };

  const getReview = () => {
 

    for (let i = 0; i < movieReviewList.length; i++) {
      if (movieReviewList[i].movieName === MovieNameSearch) {
        var review = movieReviewList[i].movieReview;
      }
    }
    setResultReview(review);
 
  };

  const SortMovieList = [...movieReviewList].sort((a, b) =>
    a.movieName < b.movieName ? -1 : 1
  );

  const deleteReview = (movie) => {
    Axios.delete(`http://localhost:3001/api/delete/${movie}`);
  };

  const updateReview = (movie) => {
    Axios.put("http://localhost:3001/api/update", {
      movieName: movie,
      movieReview: newReview,
    });
    setNewReview("");
  };

  return (
    <div className="App">
      <h1> CRUD APPLICATION </h1>
      <div className="form">
        <label>Movie Name:</label>
        <input
          type="text"
          name="movieName"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
        <label>Review:</label>
        <input
          type="text"
          name="Review"
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />

        <button onClick={submitReview}> Submit </button>

        
          <h3>Search for movie reviews</h3>
          <input
            type="text"
            name="movieName"
            onChange={(e) => {
              FindReviewByName(e.target.value);
              setResultReview("");
            }}
          />
          <button onClick={getReview}> Search </button>
          
          <h2 >{ResultReview}</h2>
        

        {SortMovieList.map((val) => {
          return (
            <div className="card" key={val.movieName}>
              <h1> {val.movieName} </h1>
              <p> {val.movieReview} </p>

              <button
                onClick={() => {
                  deleteReview(val.movieName);
                }}
              >
                Delete
              </button>
              <input
                type="text"
                id="updateInput"
                onChange={(e) => {
                  setNewReview(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  updateReview(val.movieName);
                }}
              >
                Update
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
