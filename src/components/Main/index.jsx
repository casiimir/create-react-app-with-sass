import React from 'react';
import './styles.scss';

const Main = ({ children }) => (
  <main className="Main">
    <div className="Main-content">{children}</div>
  </main>
);

export default Main;
