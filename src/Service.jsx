import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCubes, faBookAtlas, 
    faShoppingCart, faUsers, faHandshake, faShoppingBag, 
    faFileInvoice, faMoneyCheck}  from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
import Iadd from "./item/Iadd";
import Inav from "./item/Inav";
import { Navbar } from "./Navbar";


const Service =() => {
  return (
    <>
        <Navbar />

    <section id="features" className="items-centre"  >
<hr/>
<div className="row   ms-5 ps-5">
    <div className="col-lg-4 feature-box">

        <div className="feature"><Link className="icon-link" exact to={Inav}><FontAwesomeIcon icon={faCubes}  pull="center"/></Link>
        </div>

        <h3>STOCK</h3>
    </div>

    <div className="col-lg-4 feature-box">

        <div className="feature"><Link className="icon-link" exact to="/item/Iadd"><FontAwesomeIcon icon={faLayerGroup} className="icon"/></Link></div>
        <h3>ITEM</h3>
    </div>

    <div className="col-lg-4 feature-box">
        <div className="feature"><FontAwesomeIcon icon={faBookAtlas}/></div>
        <h3>SALE</h3>
    </div>
</div>
<hr/>

<div className="row  ms-5 ps-5">
    <div className="col-lg-4 feature-box">

        <div className="feature"><FontAwesomeIcon icon={faShoppingCart}/>
        </div>

        <h3>PURCHASE</h3>
    </div>

    <div className="col-lg-4 feature-box">

        <div className="feature"><FontAwesomeIcon icon={faUsers} className="hover:text-red-500 fa-4x"/></div>
        <h3>CUSTOMER</h3>
    </div>

    <div className="col-lg-4 feature-box">
        <div className="feature"><Link className="icon-link" exact to="/supplier/Sadd"><FontAwesomeIcon icon={faHandshake}/></Link></div>
        <h3>SUPLIER</h3>
    </div>
</div>
<hr/>

<div className="row  ms-5 ps-5">
    <div className="col-lg-4 feature-box ">

        <div className="feature text-align-centre"><Link className="icon-link" exact to="/order/Ocreate"><FontAwesomeIcon icon={faShoppingBag}/></Link>
        </div>

        <h3>ORDERS</h3>
    </div>

    <div className="col-lg-4 feature-box">

        <div className="feature"><Link className="icon-link" exact to="/bill/Bill"><FontAwesomeIcon icon={faFileInvoice}/></Link></div>
        <h3>BILLING</h3>
    </div>

    <div className="col-lg-4 feature-box">
        <div className="feature"><FontAwesomeIcon icon={faMoneyCheck}/></div>
        <h3>GST/IT</h3>
    </div>
</div>

</section>
    </>
  );
};

export default Service;