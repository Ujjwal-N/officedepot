import React from 'react'
import Container from 'react-bootstrap/Container';
import {Navbar,Nav,Button} from 'react-bootstrap'
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import { About } from './About';
import { Home } from './Home';
import { Profile } from './Profile';
import { Cart } from './Cart';
import { Signup } from './Signup';
import { Products } from './Products';

const NavbarComp = () => {
    return (
    
    <BrowserRouter>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/home"}>OfficeDepot</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
              <Nav.Link as={Link} to={"/products"}>Products</Nav.Link>
              <Nav.Link as={Link} to={"/cart"}>View Cart</Nav.Link>
              <Nav.Link as={Link} to={"/profile"}>Profile</Nav.Link>
            <Button className="ms-2" variant="outline-primary" as={Link} to={"/signup"}>Sign Up/Login</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<Products/>}/>
        </Routes>
      </div>

    </div> 

    </BrowserRouter>
    )
}






export default NavbarComp