import React  ,{useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {edit_profile} from '../../actions/profile';
 
const Edit = () => {
    
    
    return (
        <div class="container">
        <h1>Edit Profile</h1>
          <hr />
        <div class="row">
          <div class="col-md-3">
            <div class="text-center">
              <img src="//placehold.it/100" class="avatar img-circle" alt="avatar" />
              <h6>Upload a different photo...</h6>
              
              <input type="file" class="form-control"  name="profile_photo" />
            </div>
          </div>
          
          <div class="col-md-9 personal-info">
           
            <h3>Personal info</h3>
            
            <form class="form-horizontal" role="form">
              <div class="form-group">
                <label class="col-lg-3 control-label">name:</label>
                <div class="col-lg-8">
                  <input class="form-control" type="text" value="do you rember your name"  name="name"/>
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Favorite Strain:</label>
                <div class="col-lg-8">
                  <input class="form-control" type="text" value="Purple haze"  name="strain" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Smoking since</label>
                <div class="col-lg-8">
                  <input class="form-control" type="text" value="2010" name="smoking_since" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">Favorite Song:</label>
                <div class="col-md-8">
                  <input class="form-control" type="text" value="Californication" name="song" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">Favorite Movie:</label>
                <div class="col-md-8">
                  <input class="form-control" type="text" value="Dude Where is my Car?" name="movie" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">profession:</label>
                <div class="col-md-8">
                  <input class="form-control" type="text" value="how do you pay for your weed? " name="profession" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">Favorite Musician:</label>
                <div class="col-md-8">
                  <input class="form-control" type="text" value="is it  Bob Marley " name="artist" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label"></label>
                <div class="col-md-8">
                  <input type="button" class="btn btn-primary" value="Save Changes" />
                  <span></span>
                  <input type="reset" class="btn btn-danger" value="Cancel" />
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
    )
}

Edit.propTypes  ={
    edit_profile:PropTypes.func.isRequired
  }

const mapStateToProps = state =>({
      profile:state.profile
})

export default connect(mapStateToProps,{edit_profile})(Edit)
