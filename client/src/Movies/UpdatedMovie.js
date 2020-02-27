import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";

const UpdatedMovie = ({
  match: {
    params: { id }
  },
  movieList,
  history
}) => {
  const editMovie = movieList.find(item => item.id === Number(id));

  const updateMovie = ({ id, title, director, metascore, stars }) => {
    axios
      .put(`http://localhost:5000/api/movies/${id}`, {
        id,
        title,
        director,
        metascore,
        stars
      })
      .then(() => history.push("/"))
      .catch(error => {
        console.error(error);
      });
  };
  return (

    <Formik
     
      initialValues={{
        title: editMovie.title,
        director: editMovie.director,
        metascore: editMovie.metascore
      }}

      onSubmit={({ title, director, metascore }) => {
        updateMovie({
          id: Number(id),
          title,
          director,
          metascore,
          stars: editMovie.stars
        });
      }}
      render={() => (
        <Form>
          <Field name="title" />
          <ErrorMessage name="title" component="span" />

          <Field name="director" />
          <ErrorMessage name="director" component="span" />

          <Field name="metascore" />
          <ErrorMessage name="metascore" component="span" />

          <input type="submit" />
        </Form>
      )}
    />
  );
};


