import axios from 'axios'
import { BASE_URL } from '../../utils'
import { Dispatch } from "redux"
import { UserAction, UserModel } from '../actions'

export const onLogin = (email: string, password: string) => {
    return async(dispatch: Dispatch<UserAction>) => {

        try {
            const response = await axios.post<UserModel>(`${BASE_URL}mock-login`, {
                email,
                password
            })

            if (!response) {
                dispatch({
                    type: 'ON_ERROR',
                    payload: 'Login issue with API'
                })
            } else {
                dispatch({
                    type: 'ON_LOGIN',
                    payload: response.data
                })
            }
        }catch(error){
            dispatch({
                type: 'ON_ERROR',
                payload: error
            })
        }
        

    }

    
}