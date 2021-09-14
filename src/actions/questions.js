export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export function getQuestions(questions) {
    return{
        type: GET_QUESTIONS,
        questions,
    }
}

export function addQuestion(question) {
    return{
        type: ADD_QUESTION,
        question,
    }
}

export function saveQuestionAnswer(authedUser, qid, answer){
    return{
        type: SAVE_QUESTION_ANSWER,
        authedUser, 
        qid, 
        answer,
    }
}