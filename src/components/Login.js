import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BsPersonFill } from 'react-icons/bs';
import { Redirect } from 'react-router-dom'
import {toggleLogin} from '../actions/login'

class Login extends Component {
    
    state = {
        login: '',
        dashboard: false
    }

    handleChangeUser= e => {
        const login = e.target.value
        this.setState(() => ({
            login,
            dashboard: false
        }))
    }

    handleSubmit= e => {
        e.preventDefault()
        let {login} = this.state

        if(!login){
            login = this.props?.users[0]?.id
        }
        this.props.dispatch(toggleLogin(login))
        this.setState({
            login: login,
            dashboard: true
        })
    }

    render() {

        const users = Object.values(this.props.users);

        if(this.state.dashboard === true){
            return <Redirect to={this.props.location.state}/>
        }

        return (
            <div className="login">
            <div className="login-top">
            <h3>Welcome To Would You Rather!</h3>
            <p>Please sign in to continue</p>
            </div>
            <form className="login-form">
            <span className="login-icon">
            <BsPersonFill 
            size='5em'
            color='green'
            />
            <br/>
            </span>
            <h2>Login</h2>
            <br/>
            <h4>User:</h4>
            <select onChange={this.handleChangeUser}>
            {users.map((user) => (
                <option key={user.id} value={user.id}>
                    {user.name}
                </option>
            ))}
            </select>
            <br/>
            <button className="btn" onClick={this.handleSubmit}>
            <span className="btn-detail">Login</span>
            </button>
            </form>
            </div>
        )
    }
}

function mapStateToProps({users, questions, login}){

   
    return{
        users: Object.keys(users).map(id =>  {
            return {
                id: users[id]['id'],
                name : users[id]['name']}
            }),
            login
      }
    }

export default connect(mapStateToProps)(Login)