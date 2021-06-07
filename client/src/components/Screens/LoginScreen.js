import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../actions/userActions'


const LoginScreen = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split("=")[1] : "/"

    const userLogin = useSelector((state) => state.userLogin);

    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    },[history, redirect, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <section className="login-screen w-full relative pt-5 flex justify-center ">
            <img className='w-full absolute top-0' src='/images/formbackground.jpg' alt='form background'/>
            <form className='flex flex-col justify-center px-5 my-auto w-80' onSubmit={submitHandler}>
                <h1 className='text-center text-2xl text-primary'>Login</h1>
                <label className='text-xl pb-2'>Email</label>
                <input type="email" className='outline-none px-2 py-1 rounded-md' placeholder="Enter email"
                    onChange= {(e) => setEmail(e.target.value)} value={email} />
                
                <label className='text-xl pt-3 pb-1'>Password</label>
                <input type="password" className='outline-none px-2 py-1 rounded-md' placeholder="Enter password"
                    onChange= {(e) => setPassword(e.target.value)} value={password} />

                <button className='btn border-solid border-2 text-primary w-15 py-2 px-4 my-4 font-bold rounded-md text-center mx-auto' type="submit" >Sign In</button>
                
                <p>New Customer? <Link to= { redirect ? `/register?redirect=${redirect}` : '/register'}>
                    <span className='text-primary'>Register</span></Link>
                </p>
            </form>
        </section>
    )
}

export default LoginScreen;
