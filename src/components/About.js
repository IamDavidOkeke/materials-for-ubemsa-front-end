import React from 'react';
import personalphoto from './personalphoto.jpg'
import logo from './chez.png'

const About = () =>{
    return(
        <div className="about">
            <h1 className="f4 fw6 ph0 mh0"> About Us </h1>
            <img className="img" src={logo} alt="logo"/>
            <p className="intro">Chez Inc provides the latest local Medical slides and materials to Ubemsites for easy preparation of subjects and other helpfull stuff</p>
            <hr/>
            <div className="container">
            <h1 className="f4 fw6 ph0 mh0"> About the founder </h1>
            <img className="img" src={personalphoto} alt="davidOkeke"/>
            <p className="intro">Chez Inc was created by David Okeke, a Medical Student and Web developer dedicated to the improvement of education through tech, for the general progress of the society.
            
            </p>
            <p>
                You can contact him at <a href="http://www.davidokeke.cf">www.davidokeke.cf</a>
            </p>
              

            </div>
        </div>
    )
}





export default About