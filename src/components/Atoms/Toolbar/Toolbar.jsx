import React from 'react';
import './styles.scss';

// Atoms
import Icon from '../Icon';

const Toolbar = ({ title, icon: ToolbarIcon }) => {
  return (
    <header className="toolbar">
      <span className="toolbar__title">{title}</span>
      {ToolbarIcon && (
        <Icon>
          <ToolbarIcon />
        </Icon>
      )}
    </header>
  );
};

export default Toolbar;
