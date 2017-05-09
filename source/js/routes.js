import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './views/main';
import HomePage from './views/home';

import DevPage from './views/DevPage';
import AboutPage from './views/AboutPage';

import WGroupPage from './views/wgroup/WGroupPage';
import WGroupTopicsPage from './views/wgroup/WGroupTopicsPage';

export const getRoutes = (store) => {
  const ensureAuthenticated = (nextState, replace) => { // eslint-disable-line no-unused-vars
    if (!store.getState().auth.token) {
      replace('/login');
    }
  };

  const skipIfAuthenticated = (nextState, replace) => { // eslint-disable-line no-unused-vars
    if (store.getState().auth.token) {
      replace('/');
    }
  };

  const clearMessages = () => { // eslint-disable-line no-unused-vars
    store.dispatch({
      type: 'CLEAR_MESSAGES',
    });
  };

  /* <Route path='about' component={ AboutPage } onEnter={skipIfAuthenticated} onLeave={clearMessages} />*/
  return (
    <Route path='/' component={ App }>
      <IndexRoute component={ HomePage } />
      <Route path='dev' component={ DevPage } />
      <Route path='about' component={ AboutPage } />
      <Route path='wgroup' component={ WGroupPage }>
        <IndexRoute component={ WGroupTopicsPage } />
        <Route path='wgrouptopics' component={ WGroupTopicsPage } />
      </Route>
    </Route>
  );
};
