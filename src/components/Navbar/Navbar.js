import React from 'react'

function Navbar(props) {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg offset-2" style={{ backgroundColor: "rgb(4,170,109)" }}>
                <div className="container-fluid">
                    <span className="navbar-brand"></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        </div>
                        <div className="navbar-nav ms-auto">

                            {props.children}

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar