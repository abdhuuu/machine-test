import React from 'react'

const Footer = () => {
    return (
        <div className="dashBoardFooter">
            <div className="mediaSecDashboard">
                <img src={require("../assets/images/fb.png")} />
                <img src={require("../assets/images/twitter.png")} />
                <img src={require("../assets/images/linkedin.png")} />
                <img src={require("../assets/images/yt.png")} />
            </div>
            <div className="d-flex flex-column align-items-center">

                <h5 >Example@email.com</h5>
                <h5 style={{"marginTop":"5px"}}>Copyright © 2020 Name. All rights reserved</h5>
            </div>
        </div>
    )
}

export default Footer