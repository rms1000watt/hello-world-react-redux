import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Profile from './screens/Profile/';
import { Provider } from 'react-redux';
import Home from './screens/Home/';
import configure from './store';
import React from 'react';
import './App.css';

const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Home}/>
          <Route path="/profile" component={Profile}/>
        </Router>
      </Provider>
    );
  }
}

export default App;
