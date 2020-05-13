import React from 'react'
import {Navbar,Nav, NavDropdown} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const NavKategori = () => {
    return(
        <div>
            <Navbar bg="light" variant="light">
                <Nav className="ml-auto mr-5">
                    <Nav.Link href="#">Semua</Nav.Link>
                    <NavDropdown title="Golongan" id="basic-nav-dropdown">
                        <NavDropdown.Item href="" disabled>Pandawa</NavDropdown.Item>
                        <NavDropdown.Item href="" disabled>Ponokawan</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Kasta" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#" disabled>Ksatria</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavKategori