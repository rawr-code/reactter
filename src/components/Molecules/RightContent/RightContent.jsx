import React from 'react';
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

export default RightContent;
