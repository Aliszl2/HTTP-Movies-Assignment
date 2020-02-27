import React, { useState } from "react";
import axios from "axios";
import MovieForm from "./MovieForm";


const AddMovie = ({setMovieList, movieList, editing, currentMovieId, updateMovie}) => {

console.log(currentMovieId);
  const [movie, setMovie] = useState({ title: "", director: "", metascore: ""});


  const onInputChange = evt => {
    console.log(evt.target.value);
    setMovie({ ...movie, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name);

if (editing){
  updateMovie({currentMovieId, ...movie})
}else{
  axios
    .post("http://localhost:9000/api/movies", movie)
    .then(res => {
      console.log(res);
     setMovie({ title: "", director: "", metascore: ""});
     setMovieList(res.data);
    })
    .catch(error => {
      console.log(error);
    });
}


  };
  return (
    <div className="New-movie-form">
      <h1>Enter New Movie:</h1>
      <MovieForm 
      handleSubmit={handleSubmit}
      onInputChange={onInputChange}
      movie={movie}
  
      // title={title}
      // director={director}
      // metascore={metascore}
      />
  
    </div>
  );
};
export default AddMovie;
