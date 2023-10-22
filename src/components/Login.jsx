import React, { useState, useContext } from 'react'
import { cartContext } from '../context/Context';
import Logout from './Logout';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { user, setUser } = useContext(cartContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        console.log(password)
        setUser(true);
        console.log(user);
    }

    console.log(user);

    if (user) return <Logout />

    return (
        <>
            <h1 className='text-center fw-bold text-warning my-5'>Login Form</h1>
            <div className='w-50 mx-auto'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Enter your email ...'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='form-control'
                    />
                    <br />
                    <input
                        type="password"
                        placeholder='Enter your password ...'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='form-control'
                    />
                    <br />
                    <button className='btn btn-dark d-block w-50 mx-auto' type="submit">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login