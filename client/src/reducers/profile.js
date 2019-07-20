import {REGISTER_FAIL,REGISTER_SUCCESS,USER_LOADED,AUTH_ERROR,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT,LOAD_PROFILE,EDIT_PROFILE} from '../actions/types'

const initial_state ={
  user:"None"
}

export default function(state=initial_state,action){
    const {type,payload} = action
    switch(type){
          case LOAD_PROFILE:
            return{...state ,...payload}
           case EDIT_PROFILE:
           return {...state,...payload}
            default:
          return state
    }
}