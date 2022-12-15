import React from "react";
import LandingPage from '../../assets/LandingPage.jpg'
import './Content.css'


function Content() {
    return (
        <>
            <div className='mt-5 pt-5' style={{ backgroundImage: `url(${LandingPage})`, backgroundRepeat: "no-repeat", backgroundSize: "contain", height: 1050 }} >
                <div className="container">
                    <h1 className="text-center mt-5 pt-5  fw-bolder text-white textSize">ICT PARK</h1>
                    <h6 className="text-center mb-5 pb-5 fs-1 fw-bolder text-white textShadow">Creating the best ICT hub in Africa</h6>
                    <div className="py-5 mx-5 px-5 rounded-5" style={{ backgroundColor: 'rgba(90, 235, 6, 0.4)' }}>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Omnis molestias quia officia asperiores facilis deleniti totam aliquam reiciendis.
                            Doloremque cum quisquam deserunt. Ipsa nesciunt porro fuga corrupti, dolorum aperiam sit?
                        </p>
                    </div>
                </div>
            </div>

        </>

        // <div className="bg-img">
        //     <div className="centered">
        //         <h1>ICT PARK</h1>

        //         <div className="styling">
        //             <h6>creating best ict hub in ethiopia</h6>
        //         </div>

        //     </div>
        //     <div className="description">
        //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        //     </div>

        // </div>
    )
}
export default Content;