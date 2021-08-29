import './set-public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

import Main from './index';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Main,
});

export const { bootstrap, mount, unmount } = lifecycles;