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
       <Fragment>
            <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" action="create-profile.html"  onSubmit={e=> onSubmit(e)}>
        <div className="form-group">
          <input type="text" placeholder="Name" value={name} onChange={e=> onChange(e)} name="name" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email Address"  value={email} onChange={e=> onChange(e)} name="email" />
          
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e=> onChange(e)} />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={e=> onChange(e)}/>
        </div>
        <input type="submit"  className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
       </Fragment>
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