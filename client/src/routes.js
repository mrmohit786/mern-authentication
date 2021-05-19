import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'screens/Home';
import Register from 'screens/Register';
import ErrorBoundary from 'components/ErrorBoundary';
import Activation from 'screens/Activation';
import Login from 'screens/Login';

const routes = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <ErrorBoundary>
          <Switch>
            <Route path='/' exact render={props => <Home {...props} />} />
            <Route
              path='/register'
              exact
              render={props => <Register {...props} />}
            />
              <Route
              path='/login'
              exact
              render={props => <Login {...props} />}
            />
            <Route
              path='/users/activate/:token'
              exact
              render={props => <Activation {...props} />}
            />
          </Switch>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
};

export default routes;
