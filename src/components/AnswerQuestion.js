import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class AnswerQuestion extends Component {
    render() {

        const { users, login, id, questions } =this.props
        const answer = users[login].answers[id]

        if(login === null){
            return(
                <Redirect to='/'/>
            )
        }

        if(!id) {
            return(
                <Redirect to='/error'/>
            )
        }

        const question = questions[id]
        const optionOne = question.optionOne
        const optionTwo = question.optionTwo
        const combine = optionOne.votes.length + optionTwo.votes.length
        const finalAnswer = question[answer].text

        const questionOnePercent = question.optionOne.votes.length / combine * 100

        const questionTwoPercent = question.optionTwo.votes.length / combine * 100

        return (
            <div className="questionId">
            <div className="userInfo">
            <img className="userImg" alt={question.author} src={users[question.author].avatarURL}/>
            <h3>{users[question.author].name} Asks:</h3>   
            </div>
            <div>
            <h3>Your answer {finalAnswer}</h3>
            <h3>{question.optionOne.text}</h3>
            <p>{questionOnePercent.toFixed(1)}% Option One
            <br/>
            Votes:{question.optionOne.votes.length}
            </p>
            <h3>{question.optionTwo.text}</h3>
            <p>{questionTwoPercent.toFixed(1)}% Option Two            
            <br/>
            Votes:{question.optionTwo.votes.length}
            </p>
            </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, login}) {
    return {
        questions,
        users,
        login
    }
}

export default connect(mapStateToProps)(AnswerQuestion);