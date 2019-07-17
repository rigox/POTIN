import axios from 'axios';
import {REGISTER_FAIL,REGISTER_SUCCESS,USER_LOADED,AUTH_ERROR,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT,LOAD_PROFILE} from './types';
import setAuthToken from '../utils/setAuthToken'

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
    } catch (err) {
        console.log(err)
    }
    
      

}