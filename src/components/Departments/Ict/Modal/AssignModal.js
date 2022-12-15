import React from 'react'
import './AssignModal.css'
import './Star.css'
import Kena from '../../../../assets/kena.jpg'

const dummyEmployee = [
    {
        id: 'e1',
        name: 'Naol Zebene',
        position: 'Senior It Technician',
        rating: '4'
    },
    {
        id: 'e2',
        name: 'Dagmawi Tesfaye',
        position: 'Software Developer',
        rating: '2'
    },
    {
        id: 'e3',
        name: 'Mubark Hussien',
        position: 'Software Engineer',
        rating: '5'
    },
    {
        id: 'e4',
        name: 'Brook Habte',
        position: 'Network Adminstrater',
        rating: '3'
    }
]

function AssignModal() {
    return (
        <>
            <div class="modal fade" id="ictAssign" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-body">

                            <div className='row mx-3'>
                                <div className='col offset-4'>
                                    <h5>Available Department Members</h5>
                                </div>
                                <hr />
                            </div>

                            {dummyEmployee.map(Employee => {
                                return (

                                    <div className='row mx-3' key={Employee.id}>
                                        <div className='col-1 ms-5'>
                                            <img src={Kena} alt="profile" className='circles' />
                                        </div>
                                        <div className='col ms-3'>
                                            <p ><b className='fw-bolder'>{Employee.name}</b>
                                                <p>{Employee.position}</p>
                                            </p>
                                        </div>
                                        <div className='col ms-3'>
                                            <p ><b className='fw-bolder ms-5'>Rating</b>
                                                <p className="starability-result" data-rating={Employee.rating}>
                                                </p>
                                            </p>
                                        </div>
                                        <div className='col ms-3'>
                                            <button className='btn btn-outline-success'>Assign Task</button>
                                        </div>

                                        <hr />
                                    </div>

                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AssignModal