import { changeFirstName } from '../../actions/';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import React from 'react';

class Profile extends React.Component {

    handleSubmit = () => {
        this.props.dispatch(changeFirstName(this.refs.firstNameInput.value))
    }

    render() {
        return (
        <div>
            Welcome to the profile page
            <br/>
            <Link to='/'>Home Page</Link>
            <br/>
            First name: <input ref="firstNameInput" type="text"/>
            <br/>
            Last name: <input ref="lastNameInput" type="text"/>
            <br/>
            <input type="button" onClick={this.handleSubmit} value="Submit"/>
        </div>
        );
    }
}

export default connect()(Profile);
