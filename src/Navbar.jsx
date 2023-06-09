import React from 'react'
import Contact from './Contact'
import {
   Link
    
  } from "react-router-dom";
  

export const Navbar = () => {
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-10 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">

  <a className="navbar-brand" href="/"><img href=""/>KAJAL<br className="mt-1"/>AUTOMOBILES</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
 
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item active">
        <Link className="nav-link" to="/home">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/service">Service</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>
            </div>
        </div>
        </>
    )
}
