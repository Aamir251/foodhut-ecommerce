import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { saveShippingAddress } from '../../actions/cartActions'
import CheckOutSteps from '../CheckOutSteps'


const ShippingScreen = () => {

    const shippingAddress = useSelector(state => state.shippingAddress)
    const history = useHistory()
    const dispatch = useDispatch()

    const [address, setAddress ] = useState(shippingAddress.address)
    const [country, setCountry ] = useState(shippingAddress.country)
    const [city, setCity ] = useState(shippingAddress.city)
    const [postalCode, setPostalCode ] = useState(shippingAddress.postalCode)


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({address, country, city, postalCode}));
        history.push("/payment")
    }

    return (
        <section className='shipping-screen relative w-full h-screen flex justify-center items-center'>
            <img className='w-full absolute top-0' src='/images/formbackground.jpg' alt='form background'/>
            <div className='relative form-container flex justify-center items-center'>
            <CheckOutSteps step1 step2 />
            <form className='glass-container flex flex-col justify-center items-center px-5 my-auto w-80' onSubmit={submitHandler}>
                <h1 className='text-center text-2xl text-primary'>Shipping</h1>
                <label className='text-sm'>Address</label>
                <input type="text" className='outline-none px-2 py-1 mb-2 rounded-md' placeholder="Enter Address"
                    onChange= {(e) => setAddress(e.target.value)} value={address} />
                <label className='text-sm'>City</label>
                <input type="text" className='outline-none px-2 py-1 mb-2 rounded-md' placeholder="Enter City"
                    onChange= {(e) => setCity(e.target.value)} value={city} />
                <label className='text-sm'>Postal Code</label>
                <input type="text" className='outline-none px-2 py-1 mb-2 rounded-md' placeholder="Enter Postal Code"
                    onChange= {(e) => setPostalCode(e.target.value)} value={postalCode} />
                <label className='text-sm'>Country</label>
                <input type="text" className='outline-none px-2 py-1 mb-2 rounded-md' placeholder="Enter Country"
                    onChange= {(e) => setCountry(e.target.value)} value={country} />

                <button className='btn border-solid border-2 text-primary w-15 py-2 px-4 my-4 font-bold rounded-md text-center mx-auto' type="submit" >Continue</button>
            </form>
            <div className='circle'></div>
            <div className='circle'></div>
            </div>
            <div className='absolute z-10 w-screen h-screen skin-bg'></div>

        </section>
    );
}

export default ShippingScreen;
