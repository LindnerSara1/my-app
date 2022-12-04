import React from 'react'
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Card, CardMedia, MenuItem } from '@mui/material';
import {
  Formik, FormikHelpers, FormikProps, Form, Field, ErrorMessage, useFormik  //FieldProps,
} from 'formik';


const About = (props) => {
  const song = { title: '', artist: '', genre: 'RAP', length: 0, price: 0 }
  const validationSchema = Yup.object({
    title:
      Yup.string()
        .required('genre is required'),
    length: Yup
      .number()
      .min(1, 'length should be of minimum 1')
      .required('length is required'),
  });


  const initialValues = song;
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting }) => {
      props.addNewSong(values);
      setSubmitting(false);

    }
  });
  const genreTypes = ['CLASSICAL', 'POP', 'RAP', 'ROCK']
  return (
    <>
    About
    </>
  )
}
export default About;
