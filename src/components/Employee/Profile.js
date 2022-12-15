import React from 'react'
import Kena from '../../assets/kena.jpg'
import './Star.css'
import './Profile.css'


function Profile() {
    return (
        <div className='mt-5 pt-5 offset-2'>
            <div className="container">
                <div className="row mt-5 g-0">
                    <div className="col-5 mt-5 ms-2">
                        <div className="text-center">
                            <div className="card-body">
                                <div className='row'>
                                    <div className="col-7 offset-1 pt-5">
                                        <h1>Welcome to employee panel!</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-5 mt-5 ">
                        <div className='row shadows bg-light p-4 rounded-5'>
                            <div className='col-3 offset-2'>
                                <img src={Kena} width={100} height={100} className="rounded-circle" alt="profile" />
                            </div>
                            <div className="col-6">
                                <h2>
                                    Naol Zebene
                                </h2>
                                <p className='ps-4' >
                                    Senior It Technician
                                </p>
                                <p className="starability-result" data-rating="2">
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile