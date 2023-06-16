import React from 'react'
import { useNavigate } from 'react-router-dom'

const Index = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("all")
    }
    return (
        <div className='loginSec container'>
            <div className="loginContent">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6 col-xl-6 pe-0 d-flex justify-content-center">
                        <div className="hai">
                            <div className="fieldSec">
                                <div className="head">
                                    <h1>Sign In</h1>
                                    <h5>New user? <span style={{"color" : "#587fff"}}>Create an account</span></h5>
                                </div>
                                <div className="inputFieldSec">
                                    <input type="text" id="myInput" placeholder='Username or email' />
                                    <input type="text" id="myInput" placeholder='Password' />
                                    <div className='signedIn'>
                                        <input className='a' type="checkbox" id="myCheckbox" checked />
                                        <label htmlFor="myCheckbox">Keep me signed in</label>
                                    </div>
                                    <button onClick={() => handleNavigate()}>
                                        Sign In
                                    </button>
                                </div>
                                <div className="footerSec">
                                    <div className="borderSec">
                                        <div className="borderDiv"></div>
                                        <p className='mb-0'>Or Sign In With </p>
                                        <div className="borderDiv"></div>
                                    </div>
                                    <div className="mediaSec">
                                        <img src={require("../../assets/images/google.png")} />
                                        <img src={require("../../assets/images/fb.png")} />
                                        <img src={require("../../assets/images/linkedin.png")} />
                                        <img src={require("../../assets/images/twitter.png")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="imageSec">
                            <img src={require("../../assets/images/Illustration.png")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index