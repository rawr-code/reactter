import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Trend = ({ city, name, tweets }) => {
  return (
    <div className="trend">
      <span className="trend__info">Tendencia en {city}</span>
      <span className="trend__title">{name}</span>
      <span className="trend__info trend__info--big">{tweets} Tweets</span>
    </div>
  );
};

Trend.propTypes = {
  city: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired
};

export default Trend;
