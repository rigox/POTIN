import React , {Fragment, useState} from 'react'
import {Link  , Redirect} from 'react-router-dom';
import {logIn}  from '../../actions/auth';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {load_profile} from '../../actions/profile';

const Login = ({logIn,isAuthenticated,load_profile}) => {
    const [formData,setFormData]   = useState({
        email:'',
        password:'',
    });

    const {email,password}  =  formData;

    const onChange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }


    const onSubmit = async e =>{
        e.preventDefault();
        logIn(email,password);
    }
    //Redirect Loged In
    if(isAuthenticated){
       return <Redirect to="/dashboard" />
    }
    return (     
    
<div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin" onSubmit={e=>onSubmit(e)} >
              <div class="form-label-group">
                <input type="email" id="inputEmail" name="email" class="form-control" placeholder="Email address"  onChange={e=> onChange(e) }  required autofocus />
                <label for="inputEmail">Email address</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="inputPassword" name="password" class="form-control" placeholder="Password" onChange={e=> onChange(e) } required />
                <label for="inputPassword">Password</label>
              </div>

              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="customCheck1" />
                <label class="custom-control-label" for="customCheck1">Remember password</label>
              </div>
              <button class="btn btn-lg btn-success btn-block text-uppercase" type="submit" >Sign in</button>
              <hr class="my-4" />
            
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>


    )
}

Login.propTypes  ={
  login:PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  load_profile:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
   isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps,{logIn,load_profile})(Login);