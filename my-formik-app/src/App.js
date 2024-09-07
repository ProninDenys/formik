import React from 'react';
import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  birthday: Yup.date().required('Birthday is required'),
  gender: Yup.string().required('Please select a gender'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  subject: Yup.string().required('Please select a subject'),
});

const App = () => {
  return (
    <div className="container">
      <h1>Registration Form</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          birthday: '',
          gender: '',
          email: '',
          phoneNumber: '',
          subject: '',
        }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
                <Field type="text" name="firstName" />
                <ErrorMessage name="firstName" component="div" className="error" />
              </div>

              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <Field type="text" name="lastName" />
                <ErrorMessage name="lastName" component="div" className="error" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="birthday">Birthday</label>
                <Field type="date" name="birthday" />
                <ErrorMessage name="birthday" component="div" className="error" />
              </div>

              <div className="form-field">
                <label>Gender</label>
                <div>
                  <Field type="radio" name="gender" value="Male" /> Male
                  <Field type="radio" name="gender" value="Female" /> Female
                </div>
                <ErrorMessage name="gender" component="div" className="error" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-field">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Field type="text" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" className="error" />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <Field as="select" name="subject">
                <option value="">Choose option</option>
                <option value="Math">Math</option>
                <option value="Science">Science</option>
                <option value="History">History</option>
              </Field>
              <ErrorMessage name="subject" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;