import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faCirclePlus, faWrench, faTrash, faSearch, faHandshake }  from "@fortawesome/free-solid-svg-icons"

import {
    Link
     
   } from "react-router-dom";

const Snav =() => {
  return (
    <>
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
    <li>
    <Link to="/service" className="nav-link active"><FontAwesomeIcon icon={faHandshake} className="icon"/></Link>

    </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/supplier/Sadd"><FontAwesomeIcon icon={faCirclePlus} className="icon"/></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/supplier/Sedit"><FontAwesomeIcon icon={faWrench} className="icon"/></Link>
      </li>
      
      <li className="nav-item active">
        <Link className="nav-link" to="/supplier/Sview"><FontAwesomeIcon icon={faSearch} className="icon"/></Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>
            </div>
        </div>
        </>    </>
  );
};

export default Snav;