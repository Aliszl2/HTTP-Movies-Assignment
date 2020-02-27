import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { Formik, Form, Field, ErrorMessage } from "formik";

function MovieList({ movies, setCurrentMovieId, currentMovieId }) {
  console.log(movies);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <MovieCard movie={movie} />
          <button onClick={evt => setCurrentMovieId(movie.id)}>Edit</button>
          {/* {
        currentMovieId &&  
        <Formik
        // If the key of a component changes
        // the form gets re-mounted with fresh "initialValues"
        key={currentMovieId}
        initialValues={{
          text: setCurrentMovieId().text,
          author: setCurrentMovieId().author,
        }}
        onSubmit={({ text, author }) => {
          updateMovie({
            id: currentMovieId,
            text,
            author,
          })
        }}
      >
        {
          props => (
            <Form>
              <Field name='title' placeholder='title' />
              <ErrorMessage name='director' component='span' />

              <Field name='director' placeholder='director' />
              <ErrorMessage name='director' component='span' />

              <input type='submit' />
            </Form>
          )
        }
      </Formik>
       } */}
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
