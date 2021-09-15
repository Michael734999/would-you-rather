import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import {handleAddNewQuestion} from '../actions/shared'

class NewQuestion extends Component {

    state={
        optionOne: '',
        optionTwo: '',
        createQuestion: false,
    }

    handleOptionOne= e => {
        e.preventDefault();
        let optionOne = e.target.value;
        this.setState({ optionOne: optionOne })
        console.log(optionOne)
    }

    handleOptionTwo = e => {
        e.preventDefault();
        let optionTwo = e.target.value;
        this.setState({ optionTwo: optionTwo })
        console.log(optionTwo)
    }

    handleSubmit = e => {
        e.preventDefault();
        const { dispatch, login } =this.props;
        const { optionOne, optionTwo } =this.state;

        dispatch(handleAddNewQuestion({
            optionOneText: optionOne,
            optionTwoText: optionTwo,
            author: login,
        }))
        this.setState(() => ({optionOne: ''}))
        this.setState(() => ({optionTwo: ''}))
        this.setState(() =>({ createQuestion: true }))
    }

    render() {

        if(this.state.createQuestion === true) {
            return (
                <Redirect to= {'/'}/>
            )
        }

        if(this.props.login === null) {
            return (
                <Redirect to={{
                    pathname: '/logout',
                    state: this.props.location,
                  }}/>
            )
        }
        return (
            <div className="newQuestion">
            <div className="newQuestionTop">
            <h1>Create a new question</h1>
            <p>Complete the question:</p>
            </div>
            <h3>Would You Rather...</h3>
            <form>
            <input 
            placeholder="Enter option 1 here..." 
            type='text' 
            onChange={this.handleOptionOne}/>
            <h3 className='or'>OR</h3>
            <input 
            placeholder="Enter option 2 here..." 
            type='text' 
            onChange={this.handleOptionTwo}/>
            <br/>
            <button 
            type="submit" 
            className="btn" 
            disabled={this.state.optionOne === '' || this.state.optionTwo === ''} 
            onClick={this.handleSubmit}>
            <span className="btn-detail">Create Question</span>
            </button>
            </form>
            </div>
        )
    }
}

function mapStateToProps({login}) {
    return{
        login,
    }
}

export default connect(mapStateToProps)(NewQuestion)