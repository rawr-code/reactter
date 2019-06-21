import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FollowTrend = ({ name, username }) => {
  return (
    <div className="followtrend">
      <img
        className="followtrend__avatar"
        src="https://pbs.twimg.com/profile_images/1111729635610382336/_65QFl7B_bigger.png"
        alt="img"
      />
      <div className="followtrend__content">
        <span className="followtrend__title">{name}</span>
        <span className="followtrend__info followtrend__info--big">
          @{username}
        </span>
      </div>
      <div className="followtrend__button">Seguir</div>
    </div>
  );
};

FollowTrend.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default FollowTrend;
