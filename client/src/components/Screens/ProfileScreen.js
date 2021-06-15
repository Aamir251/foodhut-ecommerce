import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getUserDetails, updateUserProfile } from '../../actions/userActions'
import { myAllOrders } from '../../actions/orderActions'
import Message from "../Message"
import Loader from '../Loader'


const ProfileScreen = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ message, setMessage ] = useState(null)

    const history = useHistory()
    const dispatch = useDispatch()

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const myOrderList = useSelector(state => state.myOrderList)
    const { loading : loadingOrders, error: errorOrders , orders } = myOrderList;

    const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
    const { success } = userUpdateProfile;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'))
                dispatch(myAllOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    },[dispatch,history, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage("Passwords Don't match")
        } else {
            dispatch(updateUserProfile({ id : user._id, name, email, password }))
        }
    }

    return <>
        { loading || loadingOrders ? <Loader/> : <section className="profile-screen relative w-full h-screen relative pt-5 flex justify-center items-center">
            <img className='w-full absolute top-0' src='/images/formbackground.jpg' alt='form background'/>
            <div className='relative glass-container grid xs:grid-cols-1 md:grid-cols-2 xs:text-xs sm:text-lg'>
            <div className='form-container w-full flex justify-center'>
            <form className=' flex flex-col justify-center items-center px-5 my-auto w-80' onSubmit={submitHandler}>
                <h2 className='text-center text-2xl text-primary pb-2'>User Profile</h2>
                <hr className='w-full pb-4'/>
                { error && <Message error={error} />}
                { message && <p>{message}</p>}
                { errorOrders && <Message error={errorOrders} />}
                { success && <h3>Profile Updated</h3> }
                <label className='text-sm w-full'>Name</label>
                <input type="text" className='outline-none px-2 py-1 mb-2 rounded-md w-full' placeholder="Enter name"
                    onChange= {(e) => setName(e.target.value)} value={name} />
                <label className='text-sm w-full'>Email</label>
                <input type="email" className='outline-none px-2 py-1 rounded-md w-full' placeholder="Enter email"
                    onChange= {(e) => setEmail(e.target.value)} value={email} />
                
                <label className='text-sm pt-3 pb-1 w-full'>Password</label>
                <input type="password" className='outline-none px-2 py-1 rounded-md mb-2 w-full' placeholder="Enter password"
                    onChange= {(e) => setPassword(e.target.value)} value={password} />
                <label className='text-sm pt-3 pb-1 w-full'>Confirm Password</label>
                <input type="password" className='outline-none px-2 py-1 rounded-md mb-2 w-full' placeholder="Enter password"
                    onChange= {(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                <button className='btn border-solid border-2 text-primary w-15 py-2 px-4 my-4 font-bold rounded-md text-center mx-auto' type="submit" >Update</button>
            </form>
            </div>
            <article className='my-orders'>
                <h1 className='text-center text-xl pb-2'>My Orders</h1>
                <hr className='pb-2'/>
                <table className='w-full text-sm'>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Paid</th>
                        <th>Delivered</th>
                    </tr>
                    {orders && orders.map((order) => (
                         <tr className='text-xs' >
                             <td>{ order._id.substring(0,10) }...</td>
                             <td>{ order.createdAt.substring(0,10) }</td>
                             <td>Rs.{ order.totalPrice }</td>
                             <td>{ order.isPaid ? order.paidAt.substring(0,10) : 'Not Paid' }</td>
                             <td>{ order.isDelivered ? order.deliveredAt.substring(0,10) : 'Not Delivered' }</td>
                             <td className='btn text-center'><Link to={`/order/${order._id}`}>Details</Link></td>
                         </tr>   
                    ))}
                </table>
            </article>
            </div>
            <div className='absolute circle'></div>
            <div className='circle absolute '></div>
            <div className='absolute w-screen h-screen skin-bg'></div>
        </section>}
    </>
}

export default ProfileScreen;
