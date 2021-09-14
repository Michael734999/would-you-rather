import { LOG_OUT, TOGGLE_LOGIN } from '../actions/login' 

export default function login(state= null, action) {
    switch (action.type) {
        case TOGGLE_LOGIN:
            return action.id
        case LOG_OUT:
            return null
        default :
            return state
    }
}