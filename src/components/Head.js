import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'

const Head = () => {
  return (
    <>
      <Navbar style={{height:"60px", background:"white", color:"black"}}>
        <Container>
          <h3 className='fw-bold fs-2'>Shop</h3>
          <div id='ex4'>
            <span className='p1 fs-2 fa-stack fa-2x has-badge' data-count={10}>
              <i className='fa-solid fa-cart-shopping'></i>
            </span>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Head