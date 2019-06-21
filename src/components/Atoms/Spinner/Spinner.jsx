import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// Logo
import logo from '../../../images/logo.svg';

const Spinner = ({ big }) => {
  let classNames = 'spinner';
  if (big) {
    classNames += ' spinner--big';
  }
  return (
    <div className={classNames}>
      <img src={logo} alt="img" />
    </div>
  );
};

Spinner.propTypes = {
  big: PropTypes.bool
};

export default Spinner;
