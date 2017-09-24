import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        Hello World React Redux<br />
        <Link to='/profile'>Profile Page</Link><br />
        <Link to='/query'>Query Page</Link><br /><br />

        Redux User Object...<br />
        First Name: {this.props.user.firstName}<br />
        Last Name: {this.props.user.lastName}<br />
        Age: {this.props.user.age}<br />
        Id: {this.props.user.id}<br /><br />

        Redux Query Object...<br />
        Localhost: {this.props.query.localhost}<br />
        Error: {this.props.query.error}<br />
        Loading: {this.props.query.isLoading.toString()}<br />
        Parsing: {this.props.query.isParsing.toString()}<br />
      </div>
    );
  }
}

function mapStateToProps(globalState) {
  return {
    user: globalState.user,
    query: globalState.query,
  };
}

export default connect(mapStateToProps)(Home);
