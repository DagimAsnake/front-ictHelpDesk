import React from 'react'

function DeclineModal() {
    return (
        <>
            <div class="modal fade" id="ictDecline" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content" style={{ backgroundColor: "rgb(4,170,109)" }}>
                        <div class="modal-body">
                            <h5 className='ms-5'>Enter Reason For Declining</h5>
                            <div className='row'>
                                <div className='col-12'>
                                    <textarea class="form-control" cols="10" rows="5" placeholder='type here...'></textarea>
                                </div>
                                <div className='col offset-5 mt-2'>
                                    <button className='btn btn-success'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeclineModal