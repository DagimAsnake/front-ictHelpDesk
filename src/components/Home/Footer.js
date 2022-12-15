import React from "react";
import Map from '../../assets/Map.jpg'

function Footer() {
    return (
        <>
            <div className="row bg-success mx-1">
                <div className="col-lg my-5 text-center">
                    <h3 className="mt-3 text-white">About us</h3>
                    <p className="mt-3 ms-3 fs-5">
                        ICT park started working in 2015, the main service of the
                        park is to provide sublease land and office spaces to rent for the inversotrs
                        who are involved in the ICT sector.
                    </p>
                </div>
                <div className="col-lg my-5 text-center">
                    <h3 className="mt-3 text-white">Contact Info</h3>
                    <p className="mt-3 mx-5 px-5 fs-5">
                        You can reach us via:
                        <p>Email- admin.info@ipdc.gov.et</p>
                        <p>Phone
                            <p>+251 11 8722425
                                <p>+251 11 8722283</p>
                            </p>
                        </p>

                        <p>Website
                            <p>www.ipdc.gov.et</p>
                        </p>

                        <p>Social Media
                            <p>facebook.com/IPDCEthiopiaOfficail</p>
                        </p>

                    </p>
                </div>
                <div className="col-lg my-5 text-center">
                    <h3 className="mt-3 text-white">Address</h3>
                    <div className="row">
                        <div className="col-8">
                            <p className="mt-3 fs-5">
                                <p>South Eastern Addis Ababa,
                                    <p >Ethiopia</p>
                                </p>
                                <p>Bole Sub-City: Woreda 11
                                    <p>Nearest places:
                                        <p>Bole International Airport 35 min
                                            <p>(14.1 KM) away</p>
                                        </p>
                                    </p>
                                </p>

                            </p>
                        </div>
                        <div className="col mt-3">
                            <img src={Map} alt="" />
                        </div>
                    </div>

                </div>
            </div>
        </>

    )


}

export default Footer;