import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
   <>
         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-regular fa-address-book" style={{color: "#ff4d4d",}} />{' '}
            Contact Manager
          </Navbar.Brand>
        </Container>
      </Navbar>
   </>
  )
}

export default Header