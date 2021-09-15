import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logOut } from '../actions/login' 

class Nav extends Component {
    render() {
    return(
        <nav className="nav">
        <ul>

        <li>
        <NavLink to='/' exact activeClassName='active'>
        Home
        </NavLink>
        </li>
       
        <li>
        <NavLink to='/new' activeClassName='active'>
        New Question
        </NavLink>
        </li>

        <li>
        <NavLink to='/leaderboard' activeClassName='active'>
       Leaderboard
        </NavLink>
        </li>
        {this.props.login !== null 
        ?
        (
        <div className="nav-text">
        Welcome,<br/>{this.props.name}
        </div>
        )
        : null}
        {this.props.login !== null 
        ?
        (
        <div>
        <img className="img-nav" alt={this.props.name} src={this.props.avatarURL}/>
        </div>
        )
        : null}
        <li id="logout">
        <NavLink to='/logout' activeClassName='active' onClick={() => {this.props.dispatch(logOut())}}>
       Profile
        </NavLink>
        </li>
        </ul>
        </nav>
    )}}

function mapStateToProps({login, users}) {
    return {
        login,
        name: login
              ? users[login].name
              : null,
        avatarURL: login
              ? users[login].avatarURL
              : null
    }
}
    
export default connect(mapStateToProps)(Nav)