import React,{Fragment} from 'react';
import {Link , NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {logout}  from '../../actions/auth';
const  Navbar = ({auth:{isAuthenticated,loading},logout}) =>{

     const  authLinks = (
        <ul>
        <li>
          <a onClick={logout} className="">
          <i className="fas fa-sign-out-alt">{''}</i>
          <span className="hide-sm">Logout</span></a>
        </li>
  </ul>
     )

     const guestLinks  = (
        <ul>
        <li><NavLink  to="profiles.html">PoTers</NavLink></li>
        <li><NavLink  to="/register">Register</NavLink></li>
        <li><NavLink  to="/">Login</NavLink></li>
      </ul>
      )

  return(
    <nav id="navbar">
    <div class="container">

   
    <h1>
      <Link to="/"><i className="fas fa-cannabis fonthelper"></i> POTIN</Link>
    </h1>
   {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
  </div>
  </nav>
  )

}



const mapStateToProps = state =>({
    auth:state.auth
  })
  
  Navbar.propTypes ={
    logout:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
  }
  
  export default connect( mapStateToProps,{logout})(Navbar);