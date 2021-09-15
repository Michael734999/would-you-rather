import React, { Component, Fragment } from 'react';
import Nav from './Nav'
import Dashboard from './Dashboard'
import Login from './Login'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard'
import CatchError from './CatchError'
import QuestionId from './QuestionId';

class App extends Component {

  componentDidMount(){
    this.props.handleInitialData()
  }

  render() {
    return (
      <Router>
      <Fragment>
      <LoadingBar/>
      <div className='container'>
      <Nav/>
      {this.props.loading === true
      ? null
      : <div>
         <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/add' component={NewQuestion}/>
        <Route path='/questions/:id' component={QuestionId}/>
        <Route path='/leaderboard' component={Leaderboard}/>
        <Route path='/logout' component={Login}/>
        <Route path='/error' component={CatchError}/>
        </Switch>
        </div>
      }
      </div>
      </Fragment>
      </Router>
  );}
  
}

function mapStateToProps({users, login}) {
  return {
    loading: users === null, 
    login
  }
}

export default connect(mapStateToProps, {handleInitialData})(App);
