import './error.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Error = ({ errorMessage }) => {

  return (
    <section className='error-view'>
      <h1>{errorMessage}</h1>
      <Link to='/' className='error-btn-anchor'>
        <button className='error-btn'>Return to Home</button>
      </Link>
    </section>
  )
}

export default Error;

Error.propTypes = {
  errorMessage: PropTypes.string
};