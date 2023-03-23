import React from "react";
import Inav from "./Snav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch }  from "@fortawesome/free-solid-svg-icons"

const Sview =() => {
  return (
    <>
    <Inav></Inav>

    <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-10 mx-auto">
            <form action="/action_page.php" className="was-validated">
            <h2 className="Vendor text-end"><strong>VENDOR</strong></h2>

                <h3><strong className="Vendor">VENDOR SEARCH  </strong> <FontAwesomeIcon icon={faSearch} className="icon"/></h3>
                <hr/>
                <div className="mb-3 mt-3">
                    <label htmlFor="iname" className="form-label">Vendor Name:</label>
                    <input type="text" className="form-control" id="iname" placeholder="Enter name" name="iname" required/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please fill out Vendor name.</div>
                </div>
                <div className="row">
                    


                    <div className="col">
                        <br/>

                        <button type="button" className="btn btn-success btn-sm">SEARCH</button>
                    </div>
                </div>

                <hr/>

               

</form>
            </div>
            </div>
        </div>
    </>
  );
};

export default Sview;