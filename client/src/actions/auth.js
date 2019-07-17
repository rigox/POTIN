import axios from 'axios';
import {REGISTER_FAIL,REGISTER_SUCCESS,USER_LOADED,AUTH_ERROR,LOGIN_FAIL,LOGIN_SUCCESS,LOGOUT} from './types';
import setAuthToken from '../utils/setAuthToken'
import {load_profile} from './profile';
// Load User 
export const  loadUser = () => async dispacth=>{

 if(localStorage.token){
        setAuthToken(localStorage.token)

 }

 try {
     const  res  = await axios.get('/api/Auth/');
     dispacth({
          type:USER_LOADED,
          payload:res.data
     })
 } catch (err) {
    console.log("error")
    dispacth({
           type:AUTH_ERROR
      })
 }
    

}






//Registers user
export const Register = ({name,email,password}) => async dispacth =>{
     
    const config  ={
          headers:{
               'Content-Type':'application/json'
          }
     }

     const body  =  JSON.stringify({name,email,password})

     try{   

         const res = await axios.post('/api/User/register',body,config)
         dispacth({
              type:REGISTER_SUCCESS,
              payload:res.data
         })
         dispacth(loadUser())
         dispacth(register_profile())

     }catch(err){
            const errors =  err.response.errors
            if(errors){
                 errors.forEach(error=> dispacth(
                 ))
            }

        dispacth({
                 type:REGISTER_FAIL
            })
     }

}

//creates a  basic user profile after  regestering
export const  register_profile = () => async  dispatch =>{
       const  config = {
             headers:{
                  'Content-Type':'application/json'
             }
       }
     let  bio= "Temporary bio"
     let  status = "Temporary status"
     const body =  JSON.stringify({bio,status})
     try {
         const res =  await axios.post('/api/Profile/',body,config);
         console.log(res.status)
               
        } catch (err) {
           console.log(err)
            dispatch({
                 type:REGISTER_FAIL
            })
        }  
}


//Login User

export const logIn = (email,password) => async dispacth =>{
     
    const config  ={
          headers:{
               'Content-Type':'application/json'
          }
     }

     const body  =  JSON.stringify({email,password})

     try{   

         const res = await axios.post('/api/Auth/login',body,config)
         dispacth({
              type:LOGIN_SUCCESS,
              payload:res.data
         })
         dispacth(loadUser())
         dispacth(load_profile())
     }catch(err){
            const errors =  err.response.errors
            if(errors){
                 errors.forEach(error=> dispacth(
                 ))
            }

        dispacth({
                 type:LOGIN_FAIL
            })
     }

}


//logout / clear profiles

export const logout = () => dispacth =>{
    dispacth({
         type:LOGOUT
    })
}