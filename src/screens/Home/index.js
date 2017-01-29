import { Link } from 'react-router';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        Hello World React Redux
        <br/>
        <Link to='/profile'>Profile Page</Link>
      </div>
    );
  }
}

export default Home;
