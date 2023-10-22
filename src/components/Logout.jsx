import React, { useContext } from 'react'
import { cartContext } from '../context/Context'

function Logout() {

    const { setUser, setCart } = useContext(cartContext);

    const handleLogout = () => {
        setUser(false);
        setCart([]);
    }

    return (
        <>

            <div className="d-flex justify-content-center align-items-center flex-column" style={{ width: '100%', height: '80vh' }}>
                <h1>Logout For Your Security</h1>
                <button onClick={handleLogout} className='btn btn-primary w-50 mx-auto'>Logout</button>
            </div>

        </>
    )
}

export default Logout