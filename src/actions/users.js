export const GET_USERS = 'GET_USERS';
export const SAVE_ANSWER = 'SAVE_ANSWER';
export const SAVE_Q = 'SAVE_Q';

export function getUsers(users) {
    return{
        type: GET_USERS,
        users,
    }
}

export function saveAnswer(authedUser, qid, answer) {
    return{
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer,
    }
}

export function saveQ(question){
    return{
        type: SAVE_Q,
        question,
    }
}