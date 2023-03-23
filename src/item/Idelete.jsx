import React from "react";
import Inav from "./Inav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faTrash }  from "@fortawesome/free-solid-svg-icons"
const Idelete =() => {
  return (
    <>
    <Inav/>

    <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-10 mx-auto">

            <form action="/action_page.php" className="was-validated">
            <h2 className="item text-end"><strong>ITEM</strong></h2>

                <h3><strong className="item">DELETE  </strong><FontAwesomeIcon icon={faTrash} className="icon"/></h3>
                <hr/>
                <div className="">
                    <label htmlFor="iname" className="form-label">Item Name:</label>
                    <input type="text" className="form-control" id="iname" placeholder="Enter name" name="iname" required/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out item name.</div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="icode" className="form-label">Code:</label>
                        <input type="text" className="form-control" id="icode" placeholder="Enter code" name="icode" required/>
                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback">Please fill out item code.</div>
                    </div>

                 </div>   
<hr/>
                    <button type="button" className="btn btn-danger btn-sm">DELETE</button>
            </form>
            </div>
            </div>
        </div>

    </>
  );
};

export default Idelete;