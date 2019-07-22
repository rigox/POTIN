import setAuthToken from '../utils/setAuthToken'
import axios from 'axios'
import {LOAD_PHOTO,AUTH_ERROR} from './types'


export const load_photo = () => async dispatch => {
 if(localStorage.token){
      setAuthToken(localStorage.token)
 }
 const  config = {
      headers:{
           'Content-Type':"application/json"
      }
 }

      try {
        const res   = await axios.get('/api/Profile/photo_app',config)
        const path =  'http://localhost:5000/api/Profile/fetch_photo/?path='+res.data
         dispatch({
              type:LOAD_PHOTO,
              payload:path
         });

      } catch (err) {
           console.log(err)
           dispatch({
                 type:AUTH_ERROR
           })
      }


}