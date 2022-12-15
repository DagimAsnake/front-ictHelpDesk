import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Kena from '../../assets/kena.jpg'

function InvNavbar() {
    return (
        <Navbar>

            <Link to="" className='nav-link text-white position-relative' data-bs-toggle="modal" data-bs-target="#employeeNotification" >
                <i className="bi bi-bell-fill"></i>
                <span className="position-absolute bottom-50 translate-middle p-2 bg-danger border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                </span>
            </Link>

            <Link to="" className='nav-link text-white position-relative ms-lg-3' data-bs-toggle="modal" data-bs-target="#employeeInbox" >
                <i className="bi bi-envelope-fill"></i>
                <span className="position-absolute bottom-50 translate-middle p-2 bg-danger border border-light rounded-circle">
                    <span className="visually-hidden">New alerts</span>
                </span>
            </Link>

            <Link to='/investor/setting' className="nav-link text-white mx-lg-3 pt-0">
                <img src={Kena} alt="profile" width={40} height={25} className="rounded-circle" />
            </Link>

        </Navbar>
    )
}

export default InvNavbar