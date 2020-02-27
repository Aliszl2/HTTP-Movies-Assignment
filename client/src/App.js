import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import axios from "axios";
import AddMovie from "./Movies/AddMovie";

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [currentMovieId, setCurrentMovieId] = useState(null);
  const [editing, setEditing] = useState(false);

  console.log(currentMovieId);
  const getMovieList = () => {
    axios
      .get("http://localhost:9000/api/movies")
      .then(res => {
        setMovieList(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err.response));
  };
  const movieURL = "http://localhost:9000/api/movies";

  const updateMovie = ({ id, title, director, metascore}) => {
    debugger;
    axios
      .put(`${movieURL}/${id}`, { title, director, metascore })
      .then(res => {
        setCurrentMovieId(null);
        setMovieList(movieList => {
          return movieList.map(mov => {
            if (mov.id === id) {
              return res.data;
            }
            return mov;
          });
        });
      })
      .catch(err => {
        debugger;
      });
  };

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <>
      <SavedList list={savedList} />
      <AddMovie
        movieList={movieList}
        setMovieList={setMovieList}
        updateMovie={updateMovie}
        editing={editing}
        currentMovieId={currentMovieId}
      />
      <Route exact path="/">
        <MovieList
          movies={movieList}
          currentMovieId={currentMovieId}
          setCurrentMovieId={setCurrentMovieId}
          updateMovie={updateMovie}
        />
      </Route>

      <Route path="/movies/:id">
        <Movie
          addToSavedList={addToSavedList}
          movies={movieList}
          //  currentMovieId={currentMovieId}
          setCurrentMovieId={setCurrentMovieId}
          updateMovie={updateMovie}
          setEditing={setEditing}
          editing={editing}
        />
      </Route>
    </>
  );
};

export default App;
