import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TopNav.css';
import { Navbar, Nav, ButtonGroup, DropdownButton } from 'react-bootstrap';
import Category from "../Category/Category";
// import { A } from "hookrouter";

function TopNav() {
  const renderCategory = () => {
    return <Category />
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><DropdownButton
              as={ButtonGroup}
              key={'down'}
              id={`dropdown-button-drop-${'down'}`}
              drop={'down'}
              variant="secondary"
              title="CourseBuilder"
            >
              {renderCategory()}
            </DropdownButton></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/register'>Register</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link href='/AboutUs'>About Us</Nav.Link>
            <Nav.Link href='/ContactUs'>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}


export default TopNav

