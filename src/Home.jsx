import React from "react";
import i1 from "./img/1.png"
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";


const Home =() => {
  return (
    <>
        <Navbar />

    <section id="header" className="d-flex align-items-centre mt-3">

    <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-10 mx-auto">
<div className="row  mt-5">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 d-flex justify-content-centre flex-column">
            <h1>Keep your vehical fit with <strong className="brand-name text-info">Kajal Automobiles</strong></h1>
            <h3 className="my-3">We are the supplier of all bikes and Tractors Genuiun Parts.</h3>
            <div className="mt-3">
            <Link to="/service" className="btn btn-outline-secondary">Get Shop</Link>
            </div>
            </div>

            <div className="col-lg-6 order-1 order-lg-2 header-img mt-5">
            <img src={i1} className="img-fluid animated" alt="home img"/>

            </div>

            </div>
            </div>
            </div>
        </div>

    </section>
    </>
  );
};

export default Home;