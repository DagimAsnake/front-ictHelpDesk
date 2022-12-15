import React from "react";
import BackGroundImage from '../../assets/backgroundImage.jpg'


function CommentBox() {
    return (

        <>
            <div className="mb-5" style={{ backgroundImage: `url(${BackGroundImage})`, backgroundSize: "contain", height: 500 }}>

                <div className="container pt-2">
                    <div className="row rounded-5 border border-5 border-success px-5" style={{ backgroundColor: 'rgba(144, 228, 231, 0.459)' }}>
                        <div className="col-5 mt-5 pt-5">
                            <h1 className="mb-5">Leave a Comment</h1>
                            <h1 className="text-success ms-5 ps-5"><i className="bi bi-chat-left-text-fill"></i></h1>
                        </div>
                        <div className="col-7 mt-5 pt-5">
                            <form>
                                <div className="form-row mb-3">
                                    <input type="text" name='name' className="form-control mb-4" placeholder='Enter your name' />
                                    <textarea className="form-control mb-3" placeholder='Enter your comment here...' name='description' rows={10}></textarea>
                                    <button className="btn btn-success offset-5">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CommentBox;