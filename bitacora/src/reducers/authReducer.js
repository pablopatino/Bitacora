import { types } from "../types/types";


const initialState = {
    uid: '',
    user: '',
    login: false
}

export const authReducer = ( state = initialState, action ) => {
    switch (action.type) {

        case types.login:
            return {
                ...state,
                uid: action.payload.uid,
                user: action.payload.user,
                login: true
            }
        case types.logOut:
            return{
                uid:'',
                user: '',
                login: false
            }

        default:
            return state;
    }
}