import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configure, { initState } from './store';
import Profile from './screens/Profile/';
import { Provider } from 'react-redux';
import Query from './screens/Query/';
import Home from './screens/Home/';
import React from 'react';
import './App.css';

const store = configure(initState)
const history = syncHistoryWithStore(browserHistory, store)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Home}/>
          <Route path="/query" component={Query}/>
          <Route path="/profile" component={Profile}/>
        </Router>
      </Provider>
    );
  }
}

export default App;
