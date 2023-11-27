import React, { useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestuarants } from '../redux/restaurantSlice'
import Spinner from 'react-bootstrap/Spinner';

function Home() {

  const {allRestaurants, loading, error, allRestaurantsContainer} = useSelector((state)=>state.restaurantSlice)
  console.log(allRestaurants);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRestuarants())
  },[])
  return (
   <>
  <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
     {
      loading &&
      <h3 className='text-warning'> <Spinner animation="border" /> Loding...</h3>
     }
  </div>
  <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
     
     {  !loading && error?
      <h3 className='text-danger fw-bolder'> {error}</h3> : null}
     
  </div>
  
      <Row>
         {!loading &&  allRestaurants?.length>0?allRestaurants.map(restaurant=>(<Col className='px-5 py-2' sm={6} md={4}>
                      <RestCard restaurant = {restaurant} />
                      </Col>)) :
                       <h3 className='text-danger fw-bolder ms-5'> No Restaurants Available</h3>
                      
          }   
      </Row>
   </>
  
  )
}

export default Home