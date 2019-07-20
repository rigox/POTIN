import React,{Fragment , useEffect} from 'react'
import {Provider}  from 'react-redux'
import {Link,BrowserRouter,Route,Switch} from 'react-router-dom'
import store from './store';

//import components
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/navbar';
import Dashboard from './components/profile/Dashboard';
import  Edit from './components/profile/Edit';
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
                    <div className="container">
                             <Switch>
                                    <Route exact path="/" component={Login} />
                                    <Route exact path="/dashboard" component={Dashboard} />
                                    <Route exact path="/Register" component={Register} /> 
                                    <Route exact path="/edit"  component={Edit}/>  
                              </Switch>   
                    </div>
                </BrowserRouter>
            </Provider>
         )
}


export default App;