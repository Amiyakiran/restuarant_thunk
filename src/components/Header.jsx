import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="" variant="dark">
    <Container>
    <Navbar.Brand href="/">
        <img
        alt=""
        src="https://www.logolynx.com/images/logolynx/2f/2fe83a33c4d0888fbb9476d0deda5710.png"
        width="50"
        height="50"
        className="d-inline-block align-top"
        />{' '}
        &nbsp; <span id="gloock"><span className='text-warning'>Food </span >Circle</span >
    </Navbar.Brand>
    </Container>
</Navbar>
  )
}

export default Header