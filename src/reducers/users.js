import { GET_USERS, SAVE_ANSWER ,SAVE_Q } from '../actions/users'

export default function users(state={}, action) {
    switch (action.type) {
        case GET_USERS:
            return{
                ...state,
                ...action.users,
            }
        case SAVE_ANSWER:
            return{
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                answers: {
                    ...state[action.authedUser].answers,
                    [action.qid]: action.answer,
                    }
                }
            }
        case SAVE_Q:
            return{
                ...state,
                [action.question.author]:{
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id]),
                }
            }
        default:
            return state
    }
}