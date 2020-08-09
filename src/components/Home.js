import React from 'react';
import { NavLink } from 'react-router-dom';




const Home = () =>{
    return(
        <div className="home">
          <div className="home-cont">
          <div className="home-box">
          <h3 className="welcome">Materials for Ubemsa</h3>
          <p className="intro">Get access to the latest local Medical slides and materials to Ubemsites for easy preparation of subjects and other helpfull stuff</p>
          <NavLink className="btnlink"to="/courses"> Get Started</NavLink>
          </div>
          </div>
        </div>
    )
}






export default Home
