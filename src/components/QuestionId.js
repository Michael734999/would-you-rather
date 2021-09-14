import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AnswerQuestion from './AnswerQuestion'
import Unanswer from './Unanswer'

class QuestionId extends Component {
    render() {

        const {id, questionsAnswered } = this.props;

        if(!id){
            return(
                <Redirect to={{
                    pathname: '/error',
                    state: this.props.location,
                }}/>
            )
        }

        return(
            <div>
            {questionsAnswered ===true && (<AnswerQuestion id={id}/>)}
            {questionsAnswered ===false && (<Unanswer id={id}/>)}
            </div>
        )
    }
}

function mapStateToProps({questions, users, login}, props) {
    
    const { id } = props.match.params
    
    if(!login) {
        return (
            <Redirect to={{
                pathname: '/login'
            }}/>
        )
    }

    let questionsAnswered =Object.keys(users[login].answers).includes(id)

    return{
        id,
        questionsAnswered
    }
}

export default connect(mapStateToProps)(QuestionId) 