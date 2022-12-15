import React from 'react'
import './NotificationModal.css'

function Modal() {
    return (
        <>

            <div className='offset-2'>

                <div class="modal fade" id="employeeNotification" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div className='row'>
                                    <div className='col-2 circles'>
                                        <span className='fs-1 text-white text-uppercase fw-bolder'>A</span>
                                    </div>
                                    <div className='col'>
                                        <p ><b className='fw-bolder'>New Task</b>
                                            <p> From It Department admin
                                                <p>5 minutes ago</p>
                                            </p>
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2 circles'>
                                        <span className='fs-1 text-white text-uppercase fw-bolder'>s</span>
                                    </div>
                                    <div className='col'>
                                        <p ><b className='fw-bolder'>Congrats!</b>
                                            <p>Task completed successfully
                                                <p>3 hours ago</p>
                                            </p>
                                        </p>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-2 circles'>
                                        <span className='fs-1 text-white text-uppercase fw-bolder text-center'>e</span>
                                    </div>
                                    <div className='col'>
                                        <p><b className='fw-bolder'>Done!</b>
                                            <p>Task escalated successfully
                                                <p>1 day ago</p>
                                            </p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Modal