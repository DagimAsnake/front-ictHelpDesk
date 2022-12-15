import React from 'react'
import './Sidebar.css'

function Sidebar(props) {
    return (
        <>
            <div className='row  g-0'>
                <div className='fixed-top col-2 d-inline-flex flex-column min-vh-100 borderRadius' style={{ backgroundColor: "rgb(4,170,109)" }} >
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default Sidebar