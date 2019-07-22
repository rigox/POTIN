import {combineReducers} from 'redux';
import auth from './auth';
import profile from './profile';
import media  from './media';

export default combineReducers({
  auth,
  profile,
  media
})