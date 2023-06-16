import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const handleNavigate = (names) => {
        navigate(names)
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <div className="header">
            <div className="tabCountries">
                <h5>Countries</h5>

                <Nav className="justify-content-end" defaultActiveKey="1">
                    <Nav.Item>
                        <Nav.Link eventKey="1" onClick={() => handleNavigate("/all")}>All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2" onClick={() => handleNavigate("/asia")} >Asia</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="3" onClick={() => handleNavigate("/europe")} >Europe</Nav.Link>
                    </Nav.Item>
                </Nav>

                <div className="toggler">
                    <img onClick={handleOpen} src={require("../assets/images/toggler.png")} />
                    <div className={`dropSec ${open ? "expand" : ""}`}>
                        <ul>
                            <li onClick={() => handleNavigate("/all")} >All</li>
                            <li onClick={() => handleNavigate("/asia")}>Asia</li>
                            <li onClick={() => handleNavigate("/europe")}>Europe</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header