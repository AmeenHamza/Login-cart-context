import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import SingleProduct from './SingleProduct';

function Home() {

  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => setProductsArray(res.data.products))
      .catch((err) => console.log(err.message))
  }, [])

  return (
    <>
      <div className="container">
        <div className="row justify-content-lg-evenly">
          {
            productsArray.map((val) => (
              <div className="col-lg-3 my-4 col-md-4 col-5" key={val.id}>
                <SingleProduct prod={val} />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Home