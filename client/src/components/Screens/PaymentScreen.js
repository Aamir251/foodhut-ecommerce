import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { savePaymentMethod } from '../../actions/cartActions'
import CheckOutSteps from '../CheckOutSteps'


const PaymentScreen = () => {

    const shippingAddress = useSelector(state => state.shippingAddress)
    const history = useHistory()
    const dispatch = useDispatch()

    if (!shippingAddress) {
        history.push("/shipping")
    }
    const [paymentMethod, setPaymentMethod ] = useState('PayPal');

    


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod));
        history.push("/placeorder")
    }

    return (
        <section className='shipping-screen relative w-full h-screen flex justify-center items-center'>
            <img className='w-full absolute top-0' src='/images/formbackground.jpg' alt='form background'/>
            <div className='relative form-container flex justify-center items-center'>
            <CheckOutSteps step1 step2 step3/>
            <form className='glass-container flex flex-col justify-center items-center px-5 my-auto w-80' onSubmit={submitHandler}>
                <h1 className='text-center text-2xl text-primary'>Payment Method</h1>
                <div className="radio w-full py-5">
                    <label>
                        <input type="radio" id='PayPal'
                        name='paymentMethod'
                        value='Paypal'
                        checked={ paymentMethod ==='PayPal' }
                        className='inline-block'
                        onChange= {(e) => setPaymentMethod(e.target.value)} />
                        Paypal
                    </label>
                    <label>
                        <input type="radio" id='DebitCard'
                        name='paymentMethod'
                        value= 'DebitCard'
                        checked={ paymentMethod ==='DebitCard' }
                        className='inline-block'
                        onChange= {(e) => setPaymentMethod(e.target.value)} />
                        Debit Card
                    </label>
                </div>


                <button className='btn border-solid border-2 text-primary w-15 py-2 px-4 my-4 font-bold rounded-md text-center mx-auto' type="submit" >Continue</button>
            </form>
            <div className='circle'></div>
            <div className='circle'></div>
            </div>
            <div className='absolute z-10 w-screen h-screen skin-bg'></div>

        </section>
    );
}

export default PaymentScreen;
