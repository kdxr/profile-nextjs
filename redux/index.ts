import { LOGIN } from './types';
const initialState = {
    token: null,
    user: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case LOGIN:
        return { ...state, token: payload.token, user: {username: payload.user.username} }

    default:
        return state
    }
}
