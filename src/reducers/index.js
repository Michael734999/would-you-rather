import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import login from './login'
import questions from './questions'
import users from './users'

export default combineReducers({
    login,
    users,
    questions,
    loadingBar: loadingBarReducer,
})