import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// Atoms
import { Toolbar } from '../../Atoms';

const RightContent = ({ title, icon, children }) => {
  return (
    <div className="right-section">
      <Toolbar title={title} icon={icon} />
      {children}
      <div className="right-section__more">
        <span>Mostrar más</span>
      </div>
    </div>
  );
};

RightContent.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.array])
};

export default RightContent;
