import React from 'react';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const UserForm = ({ setUsers, users }) => {
  const initialForm = {
    name: '',
    email: '',
    password: '',
    tos: false,
    role: ''
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required('* Please provide a name'),
    email: yup
      .string()
      .email()
      .required('* Please provide a valid email address'),
    password: yup
      .string()
      .required('* Please provide a valid password')
      .min(8),
    tos: yup.bool().oneOf([true], '* Please read and accept the terms and conditions by clicking on the checkbox ')
  });

  const onSubmit = (values, actions) => {
    const formData = {
      name: values.name,
      email: values.email,
      password: values.password,
      tos: values.tos,
      role: values.role
    };

    axios.post('https://reqres.in/api/users', formData)
        .then(res => {
            // debugger
            setUsers([...users, res.data]);
             actions.resetForm();
        })
        .catch(err => {
            // debugger
            console.log(err.message);
        });
  };

  const validateEmail = formData => {
    const errors = {};
    if (formData.email === 'waffle@syrup.com') {
      errors.email = 'That email is already been taken';
    }
    return errors;
  };

  return (
    <div className="form-container">
      <h1>Welcome to Blinx Ent,</h1>
      <p>Please fill the User form below</p>
      <Formik
        initialValues={initialForm}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        validate={validateEmail}
        render={props => {
          return (
            <Form>
                <div className="form-test">
              <label>
                Name:
                <Field type="text" name="name" placeholder="Enter Full Name" />
                <ErrorMessage name="name" component="div" className="err"/>
              </label>
              <br />
              <label>
                Email:
                <Field type="email" name="email" placeholder="Blinx@here.com" />
                <ErrorMessage name="email" component="div" className="err"/>
              </label>
              <br />
              <label>
                Password:
                <Field type="password" name="password" placeholder="Enter Password"/>
                <ErrorMessage name="password" component="div" className="err"/>
              </label>
              <br />
              <label>
                Role:
                <Field name="role" component="select" placeholder="Select a role">
                  <option value="" defaultValue disabled hidden> Choose a Role </option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="Frontend Developer">Frontend Developer</option>
                  <option value="Frontend Developer">Dev Ops</option>
                  <option value="Frontend Developer">Data Scientist</option>
                  <option value="UX Designer">UX Designer</option>
                </Field>
                <ErrorMessage name="role" component="div" />
              </label>
              </div>
              <br />
              <label>
                <Field type="checkbox" name="tos" checked={props.values.tos} />
                I have read and I accept the Terms of Service
                <ErrorMessage name="tos" component="div" className="err"/>
              </label>
              <br />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      />
    </div>
  );
};

export default UserForm;
