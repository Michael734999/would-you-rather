import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { handleAnswerQuestion } from '../actions/shared'

class Unanswer extends Component {

    state= {
        poll:''
    }

    handleChange = e => {
        let option = e.target.value
        this.setState({poll: option})
    }

    handleSubmit = e => {
        e.preventDefault()
        const { dispatch, questions, login, id } = this.props
        const question = this.props.questions[id]
        console.log(questions)
        let option = e.target.value
        this.setState({poll: option})
        dispatch( handleAnswerQuestion({
            authedUser: login,
            qid: question.id,
            answer: this.state.poll
        }))
    }

    render() {

        const { users, id } = this.props;
        const question = this.props.questions[id]

        if(!id){
            return(
                <Redirect to='/error'/>
            )
        }

        return (
            <div className='questionId'>
            <div className='userInfo'>
            <img className='userImg' alt={question.author} src={users[question.author].avatarURL}/>
            <h3>{users[question.author].name} Asks:</h3>    
            </div>
            <div>
            <form onChange={this.optionChange}>
            <h3>Would You Rather...</h3>
            <label className='radio-label'>
                {
                    question.optionOne.text
                }
                <input className='radio-input' type='radio' name='vote' value='optionOne' id='one' onChange={this.handleChange}/>
            </label>
            <h3>OR</h3>
            <label className='radio-label'>
                {
                    question.optionTwo.text
                }
                <input className='radio-input' type='radio' name='vote' value='optionTwo' id='two' onChange={this.handleChange}/>
            </label>
            <button 
            className="btn"
            type="submit"
            onClick={this.handleSubmit}>
            Submit
            </button>
            </form>
            </div>
            </div>
        )
    }
}

function mapStateToProps({questions, users, login}) {
    return {
        questions,
        users,
        login,
    }
}

export default connect(mapStateToProps)(Unanswer)