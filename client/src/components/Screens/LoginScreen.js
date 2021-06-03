import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../actions/userActions'
import ACTIONS from '../../actionTypes/actionTypes'


const LoginScreen = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split("=")[1] : "/"

    const userLogin = useSelector(state => state.userLogin)
    const { loading, error, userInfo } = userLogin

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
        
    }, [history, userInfo, redirect]);

    return (
        <form onSubmit={submitHandler}>
            <label>Email</label>
            <input type="email" placeholder="Enter email"
                onChange= {(e) => setEmail(e.target.value)} value={email} />
            
            <label>Password</label>
            <input type="password" placeholder="Enter password"
                onChange= {(e) => setPassword(e.target.value)} value={password} />

            <button type="submit" >Sign In</button>
            
            <p>New Customer? <Link to= { redirect ? `/register?redirect=${redirect}` : '/register'}>
                Register</Link>
            </p>
        </form>
    )
}

export default LoginScreen;
