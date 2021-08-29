import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './layouts/Main';
import Home from './pages/Home';
import ReactParcel from './pages/ReactParcel/ReactParcel';

const RouteWrapper = (props) => {
  const {
    layout: Layout, component: Component, functionality, ...rest
  } = props;

  return (
    <Route
      {...rest}
      render={() => (
        <Layout>
          <React.Suspense fallback={<></>}>
            <Component {...rest} />
          </React.Suspense>
        </Layout>
      )}
    />
  )
};

const Router = () => (
  <Switch>
    <RouteWrapper exact layout={Main} component={Home} path="/" />

    <RouteWrapper
      exact
      layout={Main}
      component={ReactParcel}
      path="/react-parcel*"
    />

    <Redirect to="/error/404" />
  </Switch>
);

export default Router;