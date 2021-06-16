import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../../actions/userActions'
import Loader from '../Loader'
import Message from '../Message'

const RegisterScreen = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ message, setMessage ] = useState(null)

    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split("=")[1] : "/"

    const userRegister = useSelector((state) => state.userRegister);

    const { loading, error, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    },[history, redirect, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage("Passwords Don't match")
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <>
        {loading ? <Loader/> : <section className="login-screen w-full h-screen relative pt-5 flex justify-center items-center ">
        <img className='w-full absolute top-0' src='/images/formbackground.jpg' alt='form background'/>
            <div className='relative form-container flex justify-center items-center'>
            <form className='glass-container flex flex-col justify-center items-center px-5 my-auto w-80' onSubmit={submitHandler}>
                <h1 className='text-center text-2xl text-primary'>Sign In</h1>
                {message && <h3 className='text-center text-md text-gray'>{message}</h3>}
                {error && <Message error={error} />}
                <label className='text-sm'>Name</label>
                <input type="text" className='outline-none px-2 py-1 mb-2 rounded-md' placeholder="Enter name"
                    onChange= {(e) => setName(e.target.value)} value={name} />
                <label className='text-xl pb-2'>Email</label>
                <input type="email" className='outline-none px-2 py-2 rounded-md' placeholder="Enter email"
                    onChange= {(e) => setEmail(e.target.value)} value={email} />
                
                <label className='text-xl pt-3 pb-1'>Password</label>
                <input type="password" className='outline-none px-2 py-2 rounded-md' placeholder="Enter password"
                    onChange= {(e) => setPassword(e.target.value)} value={password} />
                <label className='text-sm pt-3 pb-1'>Confirm Password</label>
                <input type="password" className='outline-none px-2 py-1 rounded-md mb-2' placeholder="Enter password"
                    onChange= {(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                <button className='btn border-solid border-2 text-primary w-15 py-2 px-4 my-4 font-bold rounded-md text-center mx-auto' type="submit" >Login</button>
                
                <p className='text-sm py-2'>Already have an account? <Link to= { redirect ? `/login?redirect=${redirect}` : '/login'}>
                    <span className='text-primary'>Login</span></Link>
                </p>
            </form>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>
            <div className='absolute w-screen h-screen skin-bg'></div>
        </section>}
        </>
    )
}

export default RegisterScreen;
