import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import ictLogo from '../../assets/ictLog2.png'
import './InvSidebar.css'

function InvSidebar() {
    return (
        <Sidebar>

            <div className='position-relative'>
                <img src={ictLogo} alt="IctPark" width={80} className="my-4 ms-4 rounded-3" />
                <span className='text-white fw-bold position-absolute bottom-0 mb-4'>ICT PARK</span>
            </div>

            <h4 className='ms-4 text-dark text-center'>
                <span className='border-bottom border-3 border-light'>Investor Panel</span>
            </h4>

            <NavLink to='/investor/request' className={(navData) => navData.isActive ? 'active text-dark text-decoration-none ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5' : "text-white text-decoration-none ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"}>
                <span className='link-Hover'>
                    Make Request
                </span>
            </NavLink>

            <NavLink to='/investor/report' role='button' className={(navData) => navData.isActive ? 'active text-dark text-decoration-none ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5' : "text-white ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"}>
                <span className='link-Hover'>
                    Monthly Report <i className="bi bi-card-list"></i>
                </span>
            </NavLink>

            <NavLink to='/investor/setting' role='button' className={(navData) => navData.isActive ? 'active text-dark text-decoration-none ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5' : "text-white ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"}>
                <span className='link-Hover'>
                    Setting <i className="bi bi-gear-fill"></i>
                </span>
            </NavLink>

            <div className="mt-auto mb-5">
                <NavLink to='/logout' role='button' className={(navData) => navData.isActive ? 'active text-dark text-decoration-none ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5' : "text-white ms-5 btn btn-lg btn-outline-light mt-4 px-4 rounded-5"}>
                    <span className='link-Hover'>
                        Logout <i className="bi bi-box-arrow-right"></i>
                    </span>
                </NavLink>
            </div>

        </Sidebar>
    )
}

export default InvSidebar