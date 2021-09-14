export const LOG_OUT = 'LOG_OUT';
export const TOGGLE_LOGIN = 'TOGGLE_LOGIN';

export function toggleLogin(id) {
    return{
        type: TOGGLE_LOGIN,
        id,
    }
}

export function logOut() {
    return{
        type: LOG_OUT,
    }
}