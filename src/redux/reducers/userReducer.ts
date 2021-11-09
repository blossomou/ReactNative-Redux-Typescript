import { UserAction, UserModel } from '../actions/index'

type UserState = {
    user: UserModel //type of Model we can use
    error: string | undefined
}

const initialState = {
    user: {} as UserModel,
    error: undefined
}

const UserReducer = (state: UserState = initialState, action: UserAction) => {
    switch(action.type){
        case 'ON_LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'ON_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}

export {UserReducer}