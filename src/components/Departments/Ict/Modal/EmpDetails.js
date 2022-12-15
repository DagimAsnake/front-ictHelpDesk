import React from 'react'
import Kena from '../../../../assets/kena.jpg'

function EmpDetails() {
    return (

        <div class="modal fade" id="ictEmployeeDetails" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-body">

                        <div className='row'>

                            <div className='col-5 shadows bg-light p-4 rounded-pill me-4'>

                                <div className="row">

                                    <div className='col-2'>
                                        <img src={Kena} width={70} height={70} className="rounded-circle" alt="profile" />
                                    </div>

                                    <div className="col ms-5">
                                        <h5 >
                                            Naol Zebene
                                            <p className='fs-6' >
                                                Senior It Technician
                                            </p>
                                        </h5>
                                    </div>

                                </div>

                                <div className="col-2 offset-4">
                                    <p className="starability-result" data-rating="4">
                                    </p>
                                </div>
                            </div>

                            <div className='col-6 bg-light'>
                                fysdahk jlfsfsf jdlk;asdk gduyhas jkadjas uijofk ;pgjldfikfsd jlikfskd;lzs ;dofkg;osdfl kgod

                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati veniam fugit neque aliquid magnam, sequi non sunt illo deleniti, eum reiciendis perferendis doloremque ex illum, amet aliquam tenetur animi ipsam!
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident molestiae quae reiciendis quod eaque delectus vitae tenetur suscipit atque! Excepturi atque quos incidunt eum numquam amet, mollitia repudiandae. A, atque!
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmpDetails