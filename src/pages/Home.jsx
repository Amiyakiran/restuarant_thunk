import React, { useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestuarants } from '../redux/restaurantSlice'

function Home() {

  const allRestuarants = useSelector((state)=>state.restaurantSlice.allRestuarants)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRestuarants())
  },[])
  return (
    <Row>
       {allRestuarants?.length>0?allRestuarants.map(restaurant=>(<Col className='px-5 py-3' sm={6} md={4}>
                    <RestCard/>
                    </Col>)) :
                    <p>Nothing to display</p>
                    
        }   
    </Row>
  )
}

export default Home