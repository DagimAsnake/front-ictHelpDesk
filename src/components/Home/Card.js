import React from "react";
import BackGroundImage from '../../assets/backgroundImage.jpg'
import './Card.css'

const DummyHome = [
    {
        id: 'd1',
        departmentName: 'IT Service',
        service: ['Internet service', 'Web Hosting', 'Voice Over Ip', 'Video Conference', 'Enterprise Email System', 'Collocation', 'ICT Support']
    },
    {
        id: 'd2',
        departmentName: 'Investor follow-up and Support Service',
        service: ['Collect plan report', 'follow-up and support Investor', 'Compel plan and report', 'make promotion', 'follow-up and support Investor']
    },
    {
        id: 'd3',
        departmentName: 'Facility Service',
        service: ['Water', 'Electricity', 'Sewer', 'General Maintenance']
    }
]

function Card() {
    return (

        <>
            <div style={{ backgroundImage: `url(${BackGroundImage})`, backgroundSize: "contain", height: 1030 }}>


                <div className="container my-5">
                    <h1 className="text-center mb-5 pb-5">INCENTIVES AND SERVICES PROVIDED AT ICT PARK</h1>

                    {
                        DummyHome.map(home => {
                            return (
                                <div className="row my-5" key={home.id}>
                                    <div className="col-10 offset-1">
                                        <div class="card rounded-5 shadows" >
                                            <div class="row">
                                                <div class="col-4 rounded-5 rounded-end" style={{ backgroundColor: 'rgb(141, 241, 74)' }}>
                                                    <h4 className="text-center text-white fs-2 mt-5 pt-3">{home.departmentName}</h4>
                                                </div>
                                                <div class="col-8">
                                                    <div class="card-body ms-5">
                                                        <p class="card-text">
                                                            <ul className="d-flex flex-column justify-content-center">
                                                                {home.service.map(service => {
                                                                    return (
                                                                        <li key={service} className="fs-5">{service}</li>
                                                                    )
                                                                })}
                                                            </ul>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}
export default Card;