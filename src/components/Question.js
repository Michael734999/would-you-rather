import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {
    render() {
        const {question} =this.props
        const { optionOne, optionTwo } = question

        return(
            <div className="question">
            <div className="userInfo">
            <img className="userImg" alt={this.props.author} src={this.props.avatarURL}/>
            <h3>{this.props.author} Asks:</h3>
            </div>
            <div>
            <h3>Would You Rather...</h3>
            <p>{optionOne.text}</p>
            <h3>OR</h3>
            <p>{optionTwo.text}</p>
            </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users}, {id}){
    const question = questions[id]

    return {
        question
    }
}

export default connect(mapStateToProps)(Question)