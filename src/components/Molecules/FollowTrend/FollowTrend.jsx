import React from 'react';
import './styles.scss';

const FollowTrend = () => {
  return (
    <div className="followtrend">
      <img
        className="followtrend__avatar"
        src="https://pbs.twimg.com/profile_images/1111729635610382336/_65QFl7B_normal.png"
        alt="img"
      />
      <div className="followtrend__content">
        <span className="followtrend__title">Conatel</span>
        <span className="followtrend__info followtrend__info--big">
          2.629 Tweets
        </span>
      </div>
      <div className="followtrend__button">Seguir</div>
    </div>
  );
};

export default FollowTrend;
