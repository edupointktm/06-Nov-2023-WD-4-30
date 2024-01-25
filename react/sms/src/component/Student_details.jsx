import React from 'react'
import Data from './Data'
import { Link } from 'react-router-dom'

function Student_details() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row bg-light my-2 py-2">
                        <div className="col-6">
                            <h5> STUDENT DETAILS </h5>
                        </div>
                        <div className="col-4"> <input class="form-control" type="text" placeholder="search here" aria-label="default input example"/> </div>
                        <div className="col-2">
                           <Link to="/student-card"> <h5> Student Card</h5></Link>
                        </div>
                    </div>

                    <div className="row bg-primary text-white">
                        <div className="col-2">SN</div>
                        <div className="col-4">Name of Employee</div>
                        <div className="col-3">Address</div>
                        <div className="col-2">Mobile No</div>
                        <div className="col-1">Action</div>
                    </div>
                    {Data.map((d) =>
                        <div className="row bg-white border py-2">
                            <div className="col-2">{d.id}</div>
                            <div className="col-4">{d.names}</div>
                            <div className="col-3">{d.Address}</div>
                            <div className="col-2">{d.Mobile_no}</div>
                            <div className="col-1"><i class="fa-solid fa-eye"></i></div>
                        </div>
                    )}




                </div>
            </section>
        </>
    )
}

export default Student_details