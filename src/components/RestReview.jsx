import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestReview({reviews}) {
    const [open, setOpen] = useState(false);
  return (
    <>
     <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="warning"
      >
        click Here to See the Reviews
      </Button>

      <Collapse in={open}>
      <div className='my-2' id="example-collapse-text">
         
      {
            reviews.map(item=>(
               <>
                     <hr/>
                    <div className='mt-5'>
                        <h6>{item.name} : (<span>{item.date}</span>)</h6>
                        <p>Rating : {item.rating}</p>
                        <p>comments : {item.comments}</p>
                    </div>
               </>
            ))
          }
            
        </div>
      </Collapse>
    </>
  )
}

export default RestReview