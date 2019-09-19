import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import axios from 'axios';
import * as yup from 'yup';
import './App.css';

// import uuid from 'uuid';


function Forms() {
    return (
      // needs 3 props
      <Formik
        // validationSchema={validationSchema}
        // validate={validate}
        // initialValues={initialFriendForm}
        // onSubmit={onSubmit}
        render={props => {
          return (
            <Form>
              {/* {
                !props.dirty && <div>time to start typing!!</div>
              } */}
              <div>
                <label>
                  Name
                  <Field name='name' type='text' placeholder='Name' />
                  <ErrorMessage name='name' component='div' />
                </label>
              </div>
              <div>
                <label>
                  Email
                  <Field name='email' type='email' placeholder='Email' />
                  <ErrorMessage name='email' component='div' />
                </label>
              </div>
              <div>
                <label>
                  Password
                  <Field name='password' type='password' placeholder='Password' />
                  <ErrorMessage name='password' component='div' />
                </label>
              </div>
              <div>
                <label>
                  Contact State/City
                  <Field name='city' type='text' placeholder='Location' />
                  <ErrorMessage name='city' component='div' />
                </label>
              </div>
              <button type='submit'>Submit</button>
            </Form>
          );
        }}
      />
    );
}

export default Forms;
  
