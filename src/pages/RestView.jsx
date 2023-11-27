import React, {useState} from 'react'
import {Row, Col, Image, ListGroupItem} from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function RestView() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Row className='p-3'>
            <Col md={1}></Col>
            <Col md={3}>
              <Image className='rounded' src="" alt="" fluid ></Image>
            </Col>
            <Col  md={7}>
            <hr></hr>
              <h4 className='text-center'><b><span className='text-warning'>RESTAURANT</span >&nbsp; DETAILS</b></h4>
              <hr></hr>
            <ListGroup className='mt-4'>
            <ListGroup.Item><h4 className='text-center p-4'>restaurant.name</h4></ListGroup.Item>
            <ListGroup.Item>Neighborhood : restaurant.neighborhood</ListGroup.Item>
            <ListGroup.Item>Cuisine_type : restaurant.cuisine_type</ListGroup.Item>
            <ListGroup.Item>Address : restaurant.address</ListGroup.Item>

            <ListGroup.Item className='text-center p-4'>
            <Button variant="warning" onClick={handleShow}>
                Operating Hours
            </Button>
                <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title className='text-warning'>Operating Hours</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <ListGroup>
                          <ListGroup.Item>Monday : restaurant.operating_hours.Monday</ListGroup.Item>
                          <ListGroup.Item>Tuesday : restaurant.operating_hours.Tuesday</ListGroup.Item>
                          <ListGroup.Item>Wednesday : restaurant.operating_hours.Wednesday</ListGroup.Item>
                          <ListGroup.Item>Thursday : restaurant.operating_hours.Thursday</ListGroup.Item>
                          <ListGroup.Item>Friday : restaurant.operating_hours.Friday</ListGroup.Item>
                          <ListGroup.Item>Saturday : restaurant.operating_hours.Saturday</ListGroup.Item>
                          <ListGroup.Item>Sunday : restaurant.operating_hours.Sunday</ListGroup.Item>
                        </ListGroup>
                        
                      </Modal.Body>
              </Modal>
              &nbsp;&nbsp;&nbsp;
              {/* <RestReview reviews={restaurant.reviews} /> */}
            </ListGroup.Item>
          </ListGroup>
            <hr className='mt-4'></hr>
            </Col>
            <Col md={1}></Col>
          </Row>
    </>
  )
}

export default RestView