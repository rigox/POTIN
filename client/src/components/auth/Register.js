import React , {Fragment, useState} from 'react'
import {Link ,Redirect } from 'react-router-dom';
import axios from 'axios';
import {connect}  from "react-redux" ; 
import {Register} from '../../actions/auth';
import PropTypes from 'prop-types'


const SignUp = ({setAlert,Register,isAuthenticated}) => {
    const [formData,setFormData]   = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const {name,email,password,password2}  =  formData;

    const onChange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }


    const onSubmit = async e =>{
        e.preventDefault();
        if(password!==password2){
             setAlert("Passwords do not match",'danger')
        }else{
           console.log("Success")
           Register({name,email,password})
        }
    }
      if(isAuthenticated){
         return <Redirect  to="/dashboard"/>
      }
    return (
        <div class="container">
        <div class="row">
          <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div class="card card-signin my-5">
              <div class="card-body">
                <h5 class="card-title text-center">Register</h5>
                <form class="form-signin" onSubmit={e=>onSubmit(e)} >
                
                <div class="form-label-group">
                    <input type="text" id="inputEmail" name ="name" class="form-control" placeholder="Enter Name"  onChange={e=> onChange(e) }  required autofocus />
                    <label for="inputEmail">Enter Name</label>
                  </div>
                
                  <div class="form-label-group">
                    <input type="email" id="inputEmail" name ="email" class="form-control" placeholder="Email address"  onChange={e=> onChange(e) }  required autofocus />
                    <label for="inputEmail">Email address</label>
                  </div>
    
                  <div class="form-label-group">
                    <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" onChange={e=> onChange(e) } required />
                    <label for="inputPassword">Password</label>
                  </div>
                  <div class="form-label-group">
                    <input type="password" id="inputPassword" name="password2" class="form-control" placeholder="Confirm Password" onChange={e=> onChange(e) } required />
                    <label for="inputPassword">Confirm password</label>
                  </div>
              
                 
                  <button class="btn btn-lg btn-success btn-block text-uppercase" type="submit" >Register</button>
                  <hr class="my-4" />
                
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    )
}

SignUp.propTypes  = {
     setAlert:PropTypes.func.isRequired,
     Register:PropTypes.func.isRequired,
     isAuthenticated:PropTypes.bool
}
const mapStateToProps = state =>({
   isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps,{Register})(SignUp);