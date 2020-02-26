import React from "react";

const MovieForm = ({handleSubmit, onInputChange, movie})=> {
console.log(movie)
  return (
    <div className="New-movie-form">
         <form className="form" onSubmit={e => handleSubmit(e)}>
        <label>
          <h1>Update</h1>
          title:
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={movie.title}
            onChange={e => onInputChange(e)}
          />
        </label>{" "}
        <br /> <br />
        <label>
          director:
          <input
            type="text"
            name="director"
            value={movie.director}
            onChange={e => onInputChange(e)}
          />
        </label>{" "}
        <br /> <br />
        <label>
          metascore:
          <input
            type="number"
            name="metascore"
            value={movie.metascore}
            onChange={e => onInputChange(e)}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default MovieForm;
