import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import browserHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import configure, { initState } from './store';

import Home from './screens/Home/';
import Profile from './screens/Profile/';
import Query from './screens/Query/';

const history = browserHistory();
const store = configure(initState, history);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/query" component={Query} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
