import React from "react";
import Inav from "./Inav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faCirclePlus, faWrench, faTrash, faSearch }  from "@fortawesome/free-solid-svg-icons"

const Iview =() => {
  return (
    <>
    <Inav></Inav>

    <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-10 mx-auto">
            <form action="/action_page.php" className="was-validated">
            <h2 className="item text-end"><strong>ITEM</strong></h2>

                <h3><strong className="item">ITEM SEARCH  </strong> <FontAwesomeIcon icon={faSearch} className="icon"/></h3>
                <hr/>
                <div className="mb-3 mt-3">
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


                    <div className="col">
                        <br/>

                        <button type="button" className="btn btn-success btn-sm">SEARCH</button>
                    </div>
                </div>

                <hr/>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item Name</th>
                            <th scope="col">Code</th>
                            <th scope="col">QTY.</th>
                            <th scope="col">Category</th>
                            <th scope="col">Status</th>
                            <th scope="col">Description</th>
                            <th scope="col">MRP</th>
                            <th scope="col">Discount</th>
                            <th scope="col">P.P</th>
                            <th scope="col">Selling Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Plug</td>
                            <td>Jacob</td>
                            <td>GST</td>
                            <td>Available</td>
                            <td>Spark Plug</td>
                            <td>90</td>
                            <td>15</td>
                            <td>ss</td>
                            <td>80</td>


                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">3</td>
                        
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>GST</td>

                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Available</td>

                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Spark Plug</td>

                        </tr>
                        <tr>
                            <th scope="row">7</th>
                            <td>90</td>

                        </tr>
                        <tr>
                            <th scope="row">8</th>
                            <td>15</td>

                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>ss</td>
                        </tr>
                        </tbody>
                        </table>

</form>
            </div>
            </div>
        </div>
    </>
  );
};

export default Iview;