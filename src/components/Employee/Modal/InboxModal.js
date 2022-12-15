import React from 'react'
import { Link } from 'react-router-dom'
import Kena from '../../../assets/kena.jpg'
import './InboxModal.css'

function InboxModal() {
    return (
        <>
            <div class="modal fade" id="employeeInbox" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-body" >
                            <div className="row g-0">
                                <div className="col-4 bg-success border-end-0 rounded-start">
                                    <h4 className='text-white my-3 ms-5 ps-3'>INBOX</h4>
                                    <div class="d-grid gap-2 ms-1">
                                        <Link to='' role='button' className='btn btn-success btn-lg border text-start mb-2'>
                                            <img src={Kena} alt="profile" width={48} height={50} className="rounded-circle" />
                                            <span className='ms-2'>Saved Messages</span>
                                        </Link>

                                        <Link to='' role='button' className='btn btn-success btn-lg border text-start mb-2'>
                                            <img src={Kena} alt="profile" width={48} height={50} className="rounded-circle" />
                                            <span className='ms-2'>Dagim Asnake</span>
                                        </Link>

                                        <Link to='' role='button' className='btn btn-success btn-lg border text-start mb-2'>
                                            <img src={Kena} alt="profile" width={48} height={50} className="rounded-circle" />
                                            <span className='ms-2'>Mikias Miessa</span>
                                        </Link>

                                        <Link to='' role='button' className='btn btn-success btn-lg border text-start mb-2'>
                                            <img src={Kena} alt="profile" width={48} height={50} className="rounded-circle" />
                                            <span className='ms-2'>Mubark Hussien</span>
                                        </Link>

                                        <Link to='' role='button' className='btn btn-success btn-lg border text-start mb-2'>
                                            <img src={Kena} alt="profile" width={48} height={50} className="rounded-circle" />
                                            <span className='ms-2'>Nati Tesfaye</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-8">
                                    <div class="modal-header bg-secondary roundRadius">
                                        <div className="row">
                                            <div className="col-12 offset-6 text-white">
                                                <h5> <span className='me-5'>Dagim Asnake</span>
                                                    <span className='ms-5'>
                                                        <i class="bi bi-camera-video-fill me-5"></i>
                                                        <i class="bi bi-telephone-fill"></i>
                                                    </span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="modal-body mb-5 pb-5">
                                        <p>Modal body text goes here.</p>
                                    </div>


                                    <div class="modal-footer mt-5 pt-5">
                                        <div className="row mt-auto">
                                            <div className="col">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" class="btn btn-primary">Save changes</button>
                                            </div>
                                        </div>

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

export default InboxModal