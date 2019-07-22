import {LOAD_PHOTO}  from '../actions/types';

const intialState  = {
  path :"None"
}

export default function(state=intialState,action){
 const {type , payload}   =  action

 switch(type){
    case LOAD_PHOTO:
            let temp =  payload
            console.log("HERE" ,  temp)
            return{...state ,  path:temp}

    default:
    return state
 }


}