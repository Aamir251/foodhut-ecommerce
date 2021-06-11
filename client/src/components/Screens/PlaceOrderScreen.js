import React from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const PlaceOrderScreen = () => {

    const itemsInCart = useSelector(state => state.cart)
    const shippingAddress = useSelector(state => state.shippingAddress)
    const paymentMethod = useSelector(state => state.paymentMethod)
    console.log(itemsInCart);
    return (
        <section className='placeorder w-full h-screen relative flex justify-center items-center'>
            <img className='w-full absolute top-0' src='/images/formbackground.jpg' alt='form background'/>
            <div className='glass-container grid grid-cols-2'>
                <div className='information'>
                    <h2>Shipping Address</h2>
                    <p>{ `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.country}` }</p>
                    <hr/>
                    <h2>Payment Method</h2>
                    <p>{paymentMethod}</p>
                    <hr/>
                    <h2>Order Items</h2>
                    <ul>
                        {
                        itemsInCart.length === 0 ? <h4>Your Cart Is Empty</h4> : itemsInCart.map((item, index) => {
                            return (
                            <li key={index} className='flex justify-between items-center'>
                                <img src={item.image} alt={item.name} className='w-10'/>
                                <Link to={`/menu/${item.product}`} className='text-left'>{item.name}</Link>
                                <h5>{item.qty} X {item.price} = Rs. {item.price * item.qty}</h5>
                            </li>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
    </section>
    );
}

export default PlaceOrderScreen;
