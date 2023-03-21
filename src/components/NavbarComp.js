import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import {Navbar,Nav,Button, NavbarBrand} from 'react-bootstrap'
import { BrowserRouter, Navigate, Routes, Route,Link,IndexRedirect } from 'react-router-dom';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Cart } from '../pages/Cart';
import { Signup } from '../pages/Signup';
import { Products } from '../pages/Products';
import { Chairs } from '../pages/Chairs';
import ItemDescription from '../pages/ItemDescription';
import Admin from '../pages/Admin';
import {Employee} from '../pages/Employee';

const NavbarComp = ({name, setName}) => {
    
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
            {name ? <Navbar.Text>Hi {name}!</Navbar.Text> : <Button className="ms-2" variant="outline-primary" as={Link} to={"/signup"}>Sign Up/Login</Button>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signup" element={<Signup setName={setName}/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/chairs" element={<Chairs/>}/>
          <Route path="/hammerPage" element={<ItemDescription/>}/>
          <Route path="/admin" element={<Admin/>}/>
        </Routes>

      </div>

    </div> 
    </BrowserRouter>
    
    
    )
}






export default NavbarComp