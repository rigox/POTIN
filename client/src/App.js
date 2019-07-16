import React,{Fragment , useEffect} from 'react'
import {Provider}  from 'react-redux'
import {Link,BrowserRouter,Route,Switch} from 'react-router-dom'
import store from './store';

//import components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/navbar';
import './App.css';
//redux
import {loadUser} from './actions/auth'
import setAuthToken from '../src/utils/setAuthToken'


if(localStorage.token){
    setAuthToken(localStorage.token)
  }

const  App =()=>{
 

        useEffect(()=>{
            store.dispatch(loadUser());
           },[]); 
         return(
            <Provider store={store}>
                <BrowserRouter>
                <Navbar className="helperpad" />
                    <Fragment className="helperpad">
                             <Switch>
                                    <Route exact path="/" component={Login} />
                                    <Route exact path="/Register" component={Register} />   
                              </Switch>   
                    </Fragment>
                </BrowserRouter>
            </Provider>
         )
}


export default App;