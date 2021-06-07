import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../../actions/userActions'


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
        <section className="login-screen w-full relative pt-5 flex justify-center ">
            <img className='w-full absolute top-0' src='/images/formbackground.jpg' alt='form background'/>
            <form className='flex flex-col justify-center px-5 my-auto w-80' onSubmit={submitHandler}>
                <h1 className='text-center text-2xl text-primary'>Sign Up</h1>
                {message && <h3 className='text-center text-md text-gray'>{message}</h3>}
                <label className='text-sm'>Name</label>
                <input type="text" className='outline-none px-2 py-1 mb-2 rounded-md' placeholder="Enter name"
                    onChange= {(e) => setName(e.target.value)} value={name} />
                <label className='text-sm'>Email</label>
                <input type="email" className='outline-none px-2 py-1 rounded-md' placeholder="Enter email"
                    onChange= {(e) => setEmail(e.target.value)} value={email} />
                
                <label className='text-sm pt-3 pb-1'>Password</label>
                <input type="password" className='outline-none px-2 py-1 rounded-md mb-2' placeholder="Enter password"
                    onChange= {(e) => setPassword(e.target.value)} value={password} />
                <label className='text-sm pt-3 pb-1'>Confirm Password</label>
                <input type="password" className='outline-none px-2 py-1 rounded-md mb-2' placeholder="Enter password"
                    onChange= {(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />

                <button className='btn border-solid border-2 text-primary w-15 py-2 px-4 my-4 font-bold rounded-md text-center mx-auto' type="submit" >Register</button>
                
                <p className='text-sm py-2'>Already have an account? <Link to= { redirect ? `/login?redirect=${redirect}` : '/login'}>
                    <span className='text-primary'>Login</span></Link>
                </p>
            </form>
        </section>
    )
}

export default RegisterScreen;
