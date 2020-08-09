import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './chez.png'

const Navbar = () =>{
    return(
            <div className="nav w-100  pa3 ph5-l dt-l">
                <a className="logo db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="/" title="Home">
                <img src={ logo } className="dib w2 h2 br-100" alt="Site Name"/>
                </a>
                <div className="db wt dtc w-100 v-mid w-75-l tr-l">
                    <NavLink className="link dim dark-grayf6 f5-ns dib mr3 mr4-ns" to="/"> Home </NavLink>
                    <NavLink className="link dim dark-grayf6 f5-ns dib mr3 mr4-ns" to="/about"> About </NavLink>
                    <NavLink className="link dim dark-grayf6 f5-ns dib mr3 mr4-ns"to="/contact"> Contact </NavLink>
                    <NavLink className="link dim dark-grayf6 f5-ns dib mr3 mr4-ns"to="/courses"> Get Courses </NavLink>
                    <NavLink className="link dim dark-grayf6 f5-ns dib mr3 mr4-ns" to='/admin'> Admin </NavLink>
                </div>
            </div>
    )
}



export default Navbar