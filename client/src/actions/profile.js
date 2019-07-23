import axios from 'axios';
import {REGISTER_FAIL,REGISTER_SUCCESS,USER_LOADED,AUTH_ERROR,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT,LOAD_PROFILE,EDIT_PROFILE} from './types';
import setAuthToken from '../utils/setAuthToken'
import {load_photo} from './media'

export  const load_profile = () =>  async dispatch =>{
 
    const config = {
         headers:{
              'Content-Type':'application/json'
         }
    }


    try {
       const res =  await  axios.get('/api/Profile/me',config)
       dispatch({
        type:LOAD_PROFILE,
        payload: res.data
    })    
    dispatch(load_photo())
} catch (err) {
        console.log(err)
    }
    
      

}

//action to edit a profile

export const   edit_profile= ({bio , strain ,  artist,song ,  movie , name, profession ,  smoking_since , form_data  }) => async dispatch =>{
  
    if(localStorage.token){
         setAuthToken(localStorage.token)
    }
   const body  =  JSON.stringify({bio , strain , artist,song ,  movie , name, profession ,  smoking_since , form_data})

   const config  ={
    headers:{
         'Content-Type':'application/json'
    }
}
const config2 = {
    headers: { 'content-type': 'multipart/form-data' }
}

try {

    const res =  await  axios.post('/api/Profile/',body,config) 
    const res2  = await  axios.post('/api/Profile/change_photo',form_data,config)
    dispatch({
            type:EDIT_PROFILE,
            payload:res.data        
    });

    
} catch (err) {
    console.log(err)

}


}

