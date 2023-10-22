import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './styles.css';
import { cartContext } from '../context/Context';

function Header() {

  const { cart, user } = useContext(cartContext);

  return (
    <>
      <span className='header fw-bold my-4'>E-commerce Store</span>
      <ul className='nav'>
        {
          user ? (
            <>
              <li className="prod">
                <Link to='/'>Home Page</Link>
              </li>
              <li className="prod">
                <Link to='/cart'>Cart ({cart.length})</Link>
              </li>
              <li className="prod">
                <Link to='/logout'>Logout</Link>
              </li>
            </>
          ) : (
            <>
              <li className="prod">
                <Link to='/'>Home Page</Link>
              </li>
              <li className="prod">
                <Link to='/cart'>Cart ({cart.length})</Link>
              </li>
              <li className="prod">
                <Link to='/login'>Login</Link>
              </li>

            </>
          )
        }
      </ul>
    </>
  )
}

export default Header