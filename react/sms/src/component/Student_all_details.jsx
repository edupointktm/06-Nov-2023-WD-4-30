import React from 'react'
import { useParams } from 'react-router-dom'
import Data from './Data'
function Student_all_details() {
    let {stdID} = useParams()
    let getData = Data.find(d=>d.id==stdID)
    console.log(getData)
    return (
        <>
            <section>
                <div className="container">
                    <div className="row bg-light my-2 py-2">
                        <div className="col-10">
                            <h5> STUDENT All Details </h5>
                        </div>


                    </div>
                    <div className="row bg-light">
                        <div className="col-4">
                            <img src={getData.image} alt="" />
                        </div>
                        <div className="col-6">
                            <h6> ID : {stdID}</h6>
                            <div className='py-2'>Name :{getData.names}</div>
                            <div className='py-2'>Gender :{getData.Gender}</div>
                            <div className='py-2'> Address:{getData.Address} </div>
                            <div className='py-2'> Mobile No:{getData.Mobile_no} </div>
                            <div className='py-2'> Faculty:{getData.Faculty} </div>
                        </div>
                    </div>
                    <div className="row bg-light mt-2">
                        <h4> Parent's Dtails:</h4>
                        <div className="col">Father's Name : xxxxxxxxxx</div>
                        <div className="col">Current Dues : 50000</div>
                        <div className="col">Total Dues : 500000</div>
                    </div>

                    <div className="row bg-light mt-2">
                        <h4> Fee Dtails:</h4>
                        <div className="col">Prev Dues : 450000</div>
                        <div className="col">Current Dues : 50000</div>
                        <div className="col">Total Dues : 500000</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Student_all_details