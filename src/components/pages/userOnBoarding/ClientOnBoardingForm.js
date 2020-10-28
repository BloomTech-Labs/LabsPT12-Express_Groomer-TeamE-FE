import { OmitProps } from 'antd/lib/transfer/ListBody';
import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { updateClientInfo } from '../../../state/actions/index';

const ClientOnBoardingForm = props => {
  const [enabler, setEnabler] = useState(false);
  const [data, setData] = useState({
    bannerUrl: '',
    address: '',
  });
  const [error, setError] = useState({
    bannerUrl: '',
    address: '',
  });

  useEffect(() => {
    formSchema.isValid(data).then(valid => {
      setEnabler(!valid);
    });
  }, [data]);

  const formSchema = yup.object().shape({
    bannerUrl: yup.string().required('Please, upload an Image!'),
    address: yup
      .string()
      .required(
        'For the best user experience we need your address to match you with the best groomers in your area!'
      ),
  });

  const validateChange = e => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid => {
        setError({
          ...error,
          [e.target.name]: '',
        });
      })
      .catch(err => {
        setError({
          ...error,
          [e.target.name]: e.target.value[0],
        });
      });
  };

  const handleChange = e => {
    e.persist();
    const newData = {
      ...data,
      [e.target.name]: e.target.value,
    };
    validateChange(e);
    setData(newData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const updatedClientProfile = {
      ...props.loggedInUserData,
      bannerUrl: data.bannerUrl,
      address: data.address,
    };
    props.updatedClientInfo(updatedClientProfile, props.authState);
  };

  console.log('PROPS:', props);
  return (
    <div>
      <h1>CLIENT HEY</h1>
      <h2>Please fill out other additional information</h2>
      <div>
        <form>
          <input
            type="string"
            name="bannerUrl"
            placeholder="Image URL"
            value={data.bannerUrl}
            onChange={handleChange}
          />

          <br />
          <br />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={data.address}
            onChange={handleChange}
          />

          <br />
          <br />
          <button type="submit" onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    updatedClientData: state.updatedClientData,
    loggedInUserData: state.loggedInUserData,
    authState: state.authState,
  };
};

export default connect(mapStateToProps, { updateClientInfo })(
  ClientOnBoardingForm
);
