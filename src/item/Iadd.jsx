import React from "react";
import Inav from "./Inav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faCirclePlus }  from "@fortawesome/free-solid-svg-icons"

const Iadd =() => {
  return (
    <>
    <Inav />
    <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-10 mx-auto">
            <form>
            <h2 className="item text-end"><strong>ITEM</strong></h2>

            <h3 ><strong class="item">ADD  </strong><FontAwesomeIcon icon={faCirclePlus} className="icon"/></h3>
            <hr/>
                <div className="container">
                    <label htmlFor="iname" className="form-label">Item Name:</label>
                    <input type="text" className="form-control" id="iname" placeholder="Enter name" name="iname" required/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out item name.</div>
                </div>

                <div className="row mt-2">
                    <div className="col">
                        <label htmlFor="icode" className="form-label">Code:</label>
                        <input type="text" className="form-control" id="icode" placeholder="Enter code" name="icode" required/>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out item code.</div>
                    </div>
                    <div className="col">
                        <label htmlFor="iqty" className="form-label">QTY.:</label>
                        <input type="number" className="form-control" id="iqty" placeholder="Enter qty" name="iqty" required/>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out item qty.</div>
                    </div>
                </div>

                <div className="row mt-2">

<div className="col">
    <label htmlFor="icategory" className="form-label">Category:</label>
    <select className="form-select" id="sel1" name="sellist1">
<option>WITHOUT</option>
<option>GST</option>

</select>

</div>
<div className="col">
    <label htmlFor="istatus" className="form-label">Status:</label>
    <select className="form-select" id="sel1" name="sellist1">
  <option>Available</option>
  <option>Sold Out!</option>
</select>
</div>
</div>


<div className="row mt-2">


<div className="col">
    <label htmlFor="idis" className="form-label">Discount:</label>
    <input type="number" className="form-control" id="idis" placeholder="Enter dis" name="idis" required/>
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out Discount.</div>
</div>
<div className="col">
    <label htmlFor="ipp" className="form-label">P.P:</label>
    <input type="text" className="form-control" id="ipp" placeholder="Enter pp" name="ipp" required/>
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out PP.</div>
</div>
<div className="col">
    <label htmlFor="isp" className="form-label">Sellig Price:</label>
    <input type="number" className="form-control" id="isp" placeholder="Enter sp" name="isp" required/>
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out Selling Price.</div>
</div>
</div>
<hr/>

<button type="button" className="btn btn-outline-secondary btn-sm ms-3">ADD </button>


            </form>
            </div>
            </div>
        </div>
           
    </>
  );
};

export default Iadd;