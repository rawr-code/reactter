import React from 'react';
import './styles.scss';

const MainContainer = ({ children }) => {
  return (
    <main className="main-container-wrapper">
      <section className="main-container">{children}</section>
    </main>
  );
};

export default MainContainer;
