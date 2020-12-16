import { Account } from './../../types/Accounts';
import { LOGIN,CLEAR } from './../types';

const setLoginReducer = (payload) => ({
    type: LOGIN,
    payload
})

const clearLoginReducer = () => ({
    type: CLEAR
})

const login = ({username, password}:Account) => {
    return dispatch=>{
        setTimeout(() => {
            dispatch(setLoginReducer({ token : Math.random().toString(), user:{username} }))
        }, 2000);
    }
}

const clear = () => {
    return dispatch=> {
        dispatch(clearLoginReducer())
    }
}

export default {
    login,
    clear
}