import React from 'react'
import { Link } from 'react-router-dom'
import Kena from '../../../assets/kena.jpg'

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
        position: 'Senior Network Adminstrater',
        rating: '3'
    }
]

function Employee() {
    return (
        <div className='pt-5 offset-2'>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-9 offset-2 text-center mt-5">
                        <h2 className='pb-5 mb-5'>ICT Employees  <hr /> </h2>

                        {dummyEmployee.map(Employee => {
                            return (

                                <div className='row' key={Employee.id}>
                                    <div className='col-1 ms-5'>
                                        <img src={Kena} alt="profile" className='circles' />
                                    </div>
                                    <div className='col'>
                                        <p ><b className='fw-bolder'>{Employee.name}</b>
                                            <p>{Employee.position}</p>
                                        </p>
                                    </div>
                                    <div className='col ms-3'>
                                        <p ><b className='fw-bolder text-center'>Rating</b>
                                            <p className="starability-result ms-5" data-rating={Employee.rating}>
                                            </p>
                                        </p>
                                    </div>
                                    <div className='col ms-3'>
                                        <Link to='' role='button' className='btn btn-outline-success' data-bs-toggle="modal" data-bs-target="#ictEmployeeDetails">
                                            Details
                                        </Link>
                                    </div>
                                    <hr />
                                </div>

                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employee