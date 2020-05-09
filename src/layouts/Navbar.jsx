import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png'

const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="warning" variant="dark">
                <Navbar.Brand className="ml-4"><img src={logo} height={30}/></Navbar.Brand>
                <Nav className="ml-auto mr-4">
                    <Nav.Link href="/" active>Beranda</Nav.Link>
                    <Nav.Link href="/Tentang">Tentang</Nav.Link>
                    <Nav.Link href="/Wayang">Wayang</Nav.Link>
                    <Nav.Link href="/Pagelaran">Pagelaran</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default NavbarComponent