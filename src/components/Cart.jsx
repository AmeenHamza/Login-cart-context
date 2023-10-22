import React, { useState, useEffect, useContext } from 'react'
import SingleProduct from './SingleProduct'
import { cartContext } from '../context/Context';

function Cart() {

  const [total, setTotal] = useState();

  const { cart, setCart } = useContext(cartContext);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
  }, [cart])

  return (
    <>
      <span className='text-center mt-4 fw-bold text-primary d-block' style={{ fontSize: 30 }}>My cart</span>
      <br />
      <span className='text-center fw-bold text-primary d-block' style={{ fontSize: 30 }}>Total : Rs. {total}</span>
      <div className="container">
        <div className="row justify-content-evenly">
          {
            cart.map((val) => (
              <div className="col-lg-3 col-md-4 my-4" key={val.id}>
                <SingleProduct prod={val} cart={cart} setCart={setCart} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Cart