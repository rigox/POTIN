import React  ,{useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {edit_profile} from '../../actions/profile';
import {Redirect}  from 'react-router-dom'
import Axios from 'axios';
 
const Edit = ({edit_profile}) => {
      const [formData , setFormData]  =  useState({
            name:"",
            bio:"",
            strain:"",
            artist:"",
            song:"",
            movie:"",
            name:"",
            profession:"",
            smoking_since:"",
            form_data :"",
            profile_updated :false
      });    

      const {bio , strain ,  artist,song ,  movie , name, profession ,  smoking_since , form_data , profile_updated} =  formData;
     
      const onChange =(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const onSubmit = async (e) =>{
        console.log("submit")
        e.preventDefault();
        edit_profile({ name,bio,strain ,  artist ,  song , movie ,  profession , smoking_since ,form_data })
        setFormData({...formData, profile_updated:true})
    }
    const fileChange =(e)=>{
        const  fmr =  new FormData()
        fmr.append('name',e.target.files[0].name)
        fmr.append('profile_photo',e.target.files[0])
        setFormData({...formData,form_data:fmr})
    }

    if(profile_updated){
          return <Redirect to="/dashboard" />
    }
    return (
        <div class="container">
        <h1>Edit Profile</h1>
          <hr />
        <div class="row">
          <div class="col-md-3">
            <div class="text-center">
              <img src="//placehold.it/100" class="avatar img-circle" alt="avatar" />
              <h6>Upload a different photo...</h6>
              
              <input   type="file" class="form-control" onChange={e=> fileChange(e)}  name="profile_photo" />
            </div>
          </div>
          
          <div class="col-md-9 personal-info">
           
            <h3>Personal info</h3>
            
            <form class="form-horizontal"  onSubmit={e=> onSubmit(e) } >
              <div class="form-group">
                <label class="col-lg-3 control-label">name:</label>
                <div class="col-lg-8">
                  <input onChange={e=>{onChange(e)}} class="form-control" type="text" placeholder="do you rember your name"  name="name"/>
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Bio:</label>
                <div class="col-lg-8">
                 <textarea  onChange={e=>{onChange(e)}}  class="form-control" name="bio" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Favorite Strain:</label>
                <div class="col-lg-8">
                  <input onChange={e=>{onChange(e)}} class="form-control" type="text" placeholder="Purple haze"  name="strain" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-3 control-label">Smoking since</label>
                <div class="col-lg-8">
                  <input onChange={e=>{onChange(e)}} class="form-control" type="text" placeholder="2010" name="smoking_since" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">Favorite Song:</label>
                <div class="col-md-8">
                  <input onChange={e=>{onChange(e)}} class="form-control" type="text" placeholder="Californication" name="song" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">Favorite Movie:</label>
                <div class="col-md-8">
                  <input onChange={e=>{onChange(e)}} class="form-control" type="text" placeholder="Dude Where is my Car?" name="movie" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">profession:</label>
                <div class="col-md-8">
                  <input onChange={e=>{onChange(e)}} class="form-control" type="text" placeholder="how do you pay for your weed? " name="profession" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label">Favorite Musician:</label>
                <div class="col-md-8">
                  <input onChange={e=>{onChange(e)}} class="form-control" type="text" placeholder="is it  Bob Marley " name="artist" />
                </div>
              </div>
              <div class="form-group">
                <label class="col-md-3 control-label"></label>
                <div class="col-md-8">
                  <button  type="submit" class="btn btn-primary">Save Changes</button>
                  <span></span>
                  <input  type="reset" class="btn btn-danger" value="Cancel" />
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
