import React from 'react'
import { Link } from 'react-router-dom'

const dummyEscalated = [
    {
        id: 'e1',
        companyName: 'Orange Digital Center',
        priority: 'medium',
        type: 'It service'
    },
    {
        id: 'r2',
        companyName: 'Red Fox',
        priority: 'high',
        type: 'Network System'
    }
]

function Request() {
    return (

        <div className='pt-5 offset-2'>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-9 offset-2 text-center mt-5">
                        <h2>Escalated Tasks</h2>
                        <hr className='success'></hr>

                        {dummyEscalated.map(escalated => {
                            return (

                                <div className='row shadow bg-light my-5' key={escalated.id}>
                                    <div className="col-12">
                                        <div className="row rounded mx-1" style={{ backgroundColor: "rgb(4,170,109)" }}>
                                            <div className='col-7'>
                                                <p className="navbar-brand text-white text-start" >Escalated from- Employee name, position</p>
                                            </div>
                                            <div className='col-3'>
                                                <p className="nav-link text-white text-end" > 04:30 am </p>
                                            </div>
                                            <div className='col'>
                                                <p className="nav-link  text-white" > 07-04-2022 </p>
                                            </div>
                                        </div>
                                        <div className="row g-0 mt-3">
                                            <div className='col-4 text-start ms-4'>
                                                <p> <b>Company name-</b> {escalated.companyName} </p>
                                            </div>
                                            <div className='col'>
                                                <p> <b>Task priority-</b> <button className='btn btn-warning btn-sm rounded-pill py-0'> {escalated.priority} </button></p>
                                            </div>
                                        </div>
                                        <div className="row g-0">
                                            <div className='col-4 text-start ms-4'>
                                                <p> <b>Task type-</b>{escalated.type} <Link to='' role='button' className='btn btn-success btn-sm rounded-pill py-0'> Details</Link></p>
                                            </div>
                                        </div>
                                        <div className="row g-0 mb-3">
                                            <div className='col-4 offset-8'>
                                                <Link to='' role='button' className='btn btn-outline-success ms-5' data-bs-toggle="modal" data-bs-target="#ictAssign"> Assign To</Link>
                                                <Link to='' role='button' className='btn btn-outline-success ms-5' data-bs-toggle="modal" data-bs-target="#ictDecline"> Decline</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Request