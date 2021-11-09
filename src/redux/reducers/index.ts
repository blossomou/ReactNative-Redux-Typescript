import { combineReducers } from "redux";
import { UserReducer } from './userReducer'

const rootReducer = combineReducers({
    user: UserReducer
    //some more reducer will come
})

export default rootReducer

export type ApplicationState = ReturnType<typeof rootReducer>