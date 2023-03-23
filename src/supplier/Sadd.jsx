import React from "react";
import Snav from "./Snav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faCirclePlus }  from "@fortawesome/free-solid-svg-icons"

const Sadd =() => {
  return (
    <>
    <Snav />
    <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-10 mx-auto">
            <form>
            <h2 className="item text-end"><strong>VENDOR</strong></h2>

            <h3 ><strong class="item">ADD  </strong><FontAwesomeIcon icon={faCirclePlus} className="icon"/></h3>
            <hr/>
                <div className=" ">
                    <label htmlFor="sname" className="form-label">Vendor Name:</label>
                    <input type="text" className="form-control" id="sname" placeholder="Enter name" name="sname" required/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out vendor name.</div>
                </div>
                <div className=" ">
                    <label htmlFor="sadd" className="form-label">Vendor Address:</label>
                    <input type="text" className="form-control" id="sadd" placeholder="Enter address" name="sadd" required/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out vendor address.</div>
                </div>

                <div className="row mt-2">

<div className="col">
    <label htmlFor="icategory" className="form-label">Contact Details:</label>
    <textarea className="form-control" aria-label="With textarea"></textarea>

</div>
<div className="col">
    <label htmlFor="istatus" className="form-label">Account Details :</label>
    <textarea className="form-control" aria-label="With textarea"></textarea>

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
  <option>Active</option>
  <option>Inactive</option>
</select>
</div>
</div>


<div className="row mt-2">


<div className="col">
    <label htmlFor="idis" className="form-label">Discount:</label>
    <textarea className="form-control" aria-label="With textarea"></textarea>
    <div className="valid-feedback">Valid.</div>
    <div className="invalid-feedback">Please fill out Discount Brandwise.</div>
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

export default Sadd;