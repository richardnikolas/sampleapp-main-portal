import React from 'react';
import Principal from './Principal';
import Header from './Header';

const Main = ({ children }) => (
  <>
    <Header />
    <Principal>
      {children}
    </Principal>
  </>
);

export default Main;