import { Account } from './../../types/Accounts';
import { LOGIN } from './../types';

const setLoginReducer = (payload) => ({
    type: LOGIN,
    payload
})


const login = ({username, password}:Account) => {
    return dispatch=>{
        setTimeout(() => {
            dispatch(setLoginReducer({ token : "KDXR", user:{username} }))
        });
    }
}

export default {
    login
}