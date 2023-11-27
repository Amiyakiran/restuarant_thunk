import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { searchRestaurant } from '../redux/restaurantSlice';

function Header() {
  const dispatch = useDispatch()
  return (
    <Navbar bg="" variant="dark" className='p-3'>
    <Container>
    <Navbar.Brand href="/">
        <img
        alt=""
        src="https://www.logolynx.com/images/logolynx/2f/2fe83a33c4d0888fbb9476d0deda5710.png"
        width="55"
        height="55"
        className="d-inline-block align-top"
        />{' '}
        &nbsp; <span id="gloock"><span className='text-warning'>Food </span >Circle</span >
    </Navbar.Brand>
    <div className='ms-auto d-flex align-items-center'>
      <input onChange={(e)=>dispatch(searchRestaurant(e.target.value))} type="text" className='form-control' placeholder='Enter Neigbourhood' />
      <div className="fa-solid fa-search" style={{marginLeft:'-25px'}}></div>
    </div>
    </Container>
</Navbar>
  )
}

export default Header