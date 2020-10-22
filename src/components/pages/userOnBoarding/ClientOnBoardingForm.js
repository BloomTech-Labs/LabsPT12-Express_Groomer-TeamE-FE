import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../../../api/axiosWithAuth';

const clientOnBoardingForm = ({ errors, touched, values, status }) => {
  // const [data, setData] = useState({
  //   role: "client",
  //   bannerUrl: "",
  //   address: ""

  // })

  return (
    <div>
      <h1>CLIENT HEY</h1>
      <div>
        <Form>
          <Field
            type="text"
            name="address"
            placeholder="Address"
            value={values.address}
          />
          {touched.address && errors.address && <p>{errors.address}</p>}
        </Form>

        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ address }) {
    return {
      address: address || '',
    };
  },

  validationSchema: Yup.object().shape({
    address: Yup.string().required('Required'),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log('hi');

    axiosWithAuth
      .put()
      .then(res => {})
      .catch(err => {});
  },
})(clientOnBoardingForm); //FormikForm

export default FormikForm;
