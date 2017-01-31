import { queryLocalhost } from '../../actions/';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import React from 'react';

class Query extends React.Component {
  queryLocalhost = () => {
    console.log("Starting Google Query...")
    this.props.dispatch(queryLocalhost())
  }

  render() {
    return (
      <div>
        Query Page<br/>
        <Link to='/'>Home Page</Link><br/><br/>

        <input type="button" onClick={this.queryLocalhost} value="Query Localhost"/><br/><br/>

        Redux Query Object...<br/>

        Localhost: {this.props.query.localhost}<br/>
        Error: {this.props.query.error}<br/>
        
      </div>
    );
  }
}

function mapStateToProps(globalState) {
    return {
        query: globalState.query,
    };
}

export default connect(mapStateToProps)(Query);
