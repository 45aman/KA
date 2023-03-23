import React from 'react'
import { Onav } from './Onav'

export const Ocreate = () => {
    return (
       <>
       <Onav />
       <div className="container-fluid nav_bg">
            <div className='row'>
            <div className="col-10 mx-auto">

        <div className="container-fluid">
    <div id="ui-view" data-select2-id="ui-view">
        <div>
            <div className="card">
                <div className="card-header">

            <p className="float-right">GSTIN:27BWKPS6S27B1ZB</p>
           
                </div>
                <div className="card-body">
                    <div className="row mb-4">
                        <div className="col-sm-6">
                            <h6 className="mb-3">From:</h6>
                            <div>
                                <strong className="navbar-brand">KAJAL<br/> AUTOMOBILES</strong>
                            </div>
                            <br/><br/>
                        <div>Wathar Station, Satara, 415524</div>
                            <div>Email: kajalauto45@gmail.com</div>
                            <div>Mobile: +91 9423804270</div>
                            <div>Mobile: +91 8329514623</div>

                        </div>
                        <div className="col-sm-6">
                        <span className="input-group-text"><h6 className="mb-3">To:</h6>
</span>
  <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>
                        </div>
                       
                    <hr/>
                    <div className="table-responsive-sm">

                    <table>
                        <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Item Name</th>
                            <th>Item Code</th>
                            <th>Description</th>
                            <th>Qty</th>
                            </tr>        
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Plug</td>
                            <td>123</td>
                            <td>Mico</td>
                            <td>10</td>
                        </tr>
                        </tbody>
                    </table>
                    
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 ml-auto">
                                
                            <a className="btn btn-success" href="#" data-abc="true">
                                <i className="fa fa-usd"></i>Exel</a>
                                <a className="btn btn-sm btn-secondary float-right ms-1 d-print-none " href="#" onclick="javascript:window.print();" data-abc="true">
                        <i className="fa fa-print"></i> Print</a>
                    <a className="btn btn-sm btn-info float-right ms-1 d-print-none" href="#" data-abc="true">
                        <i className="fa fa-save"></i> Save</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>  
    </div>
            </div>
        </div> 




       </>
    )
}
export default Ocreate;