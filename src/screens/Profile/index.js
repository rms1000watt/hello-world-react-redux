import { changeFirstName, changeLastName, changeAge, birthdayToday } from '../../actions/';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import React from 'react';

class Profile extends React.Component {

    handleSubmit = () => {
        if (this.refs.firstNameInput.value !== "") {
            this.props.dispatch(changeFirstName(this.refs.firstNameInput.value))
        }
        if (this.refs.lastNameInput.value !== "") {
            this.props.dispatch(changeLastName(this.refs.lastNameInput.value))
        }
        if (this.refs.ageInput.value !== "") {
            this.props.dispatch(changeAge(this.refs.ageInput.value))
        }
    }

    handleBirthday = () => {
        this.props.dispatch(birthdayToday())
    }

    render() {
        return (
        <div>
            Welcome to the profile page<br/>
            
            <Link to='/'>Home Page</Link><br/><br/>
            
            First name: <input ref="firstNameInput" type="text"/><br/>
            Last name: <input ref="lastNameInput" type="text"/><br/>
            Age: <input ref="ageInput" type="text"/><br/>
            
            <input type="button" onClick={this.handleSubmit} value="Submit"/><br/><br/>

            <input type="button" onClick={this.handleBirthday} value="Birthday Today!"/><br/><br/>
            
            Redux User Object...<br/>

            First Name: {this.props.user.firstName}<br/>
            Last Name: {this.props.user.lastName}<br/>
            Age: {this.props.user.age}<br/>
            Id: {this.props.user.id}
        </div>
        );
    }
}

function mapStateToProps(globalState) {
    return {
        user: globalState.user,
    };
}

export default connect(mapStateToProps)(Profile);
