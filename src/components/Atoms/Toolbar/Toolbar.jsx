import React from 'react';
import PropTypes from 'prop-types';
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

Toolbar.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.func
};

export default Toolbar;
