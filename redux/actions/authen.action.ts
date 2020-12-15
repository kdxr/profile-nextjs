import { Account } from './../../types/Accounts';
import { LOGIN } from './../types';

export const setLoginReducer = (payload) => ({
    type: LOGIN,
    payload
})


export const login = ({username, password}:Account) => {
    return dispatch=>{
        setTimeout(() => {
            dispatch(setLoginReducer({ token : "KDXR", user:{username} }))
        });
    }
}