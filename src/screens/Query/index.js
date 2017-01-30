import { queryGoogle, queryYahoo } from '../../actions/';
import { Link } from 'react-router';
import { connect } from 'react-redux'
import React from 'react';

class Query extends React.Component {
  queryGoogle = () => {
    console.log("Starting Google Query...")
    this.props.dispatch(queryGoogle())
  }

  queryYahoo = () => {
    console.log("Starting Yahoo Query...")
    this.props.dispatch(queryYahoo())
  }

  render() {
    return (
      <div>
        Query Page<br/>
        <Link to='/'>Home Page</Link><br/><br/>

        <input type="button" onClick={this.queryGoogle} value="Query Google"/><br/>
        <input type="button" onClick={this.queryYahoo} value="Query Yahoo"/><br/><br/>

        Redux Query Object...<br/>

        Google: {this.props.query.google}<br/>
        Yahoo: {this.props.query.yahoo}<br/>
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
