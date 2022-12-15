import React from "react";

function Middle() {
    return (

        <div className="mb-5">
            <div className="row mx-1 border-top border-bottom border-5 border-success py-5" style={{ backgroundColor: 'rgba(144, 228, 231, 0.459)' }}>
                <div className="col-3 offset-2">
                    <h1 className="mb-4 fw-light">Have any Investment Requests?</h1>
                    <button className="btn btn-success btn-lg rounded-5 fs-3">Login as Investor</button>
                </div>
                <div className="col-4 offset-2">
                    <h1 className="mb-4 mt-5 fw-light">Have any question?</h1>
                    <button className="btn btn-success btn-lg rounded-5 fs-3"> Login as Guest</button>
                </div>
            </div>
        </div>

    )

}
export default Middle;