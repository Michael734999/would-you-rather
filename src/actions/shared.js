import { showLoading, hideLoading } from 'react-redux-loading'
import { saveQuestion, answerQuestion, getInitialData } from '../utils/api'
import { toggleLogin, logOut } from './login' 
import { getQuestions, addQuestion, saveQuestionAnswer } from './questions'
import { getUsers, saveQ, saveAnswer} from './users'

let LOGGED_IN_USER = null

export function handleInitialData() {
    return(dispatch) => {
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions}) =>{
            dispatch(getUsers(users));
            dispatch(getQuestions(questions))
            dispatch(toggleLogin(LOGGED_IN_USER))
            dispatch(logOut(null))
            dispatch(hideLoading())
        })
    }
}

export function handleAnswerQuestion(authedUser, qid, answer){
    return(dispatch) => {

        dispatch(showLoading())
        return answerQuestion({authedUser, qid, answer})
        .then(() => {
            dispatch(saveQuestionAnswer(authedUser, qid, answer))
            dispatch(saveAnswer(authedUser, qid, answer))
            dispatch(hideLoading())
        })
    }
}

export function handleAddNewQuestion(optionOneText, optionTwoText) {
    return(dispatch, getState) => {
        const { login } = getState()
        dispatch(showLoading())
        return saveQuestion(optionOneText, optionTwoText, login)
        .then((question => {
            dispatch(addQuestion(question))
            dispatch(saveQ(question))
            dispatch(hideLoading())
        }))
    }
}