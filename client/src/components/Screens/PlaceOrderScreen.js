import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { createOrder } from "../../actions/orderActions"

const PlaceOrderScreen = () => {
    const history = useHistory()
    const addDecimal = (num) => (Math.round(num * 100)/100).toFixed(2)
    const itemsInCart = useSelector(state => state.cart)

    const itemsPrice = addDecimal(itemsInCart.reduce((acc, item) => acc + item.price * item.qty,0))

    const shippingPrice = addDecimal(itemsPrice < 1000 ? 100 : 0)

    const taxPrice = addDecimal(Number((0.1 * itemsPrice).toFixed(2)))

    const shippingAddress = useSelector(state => state.shippingAddress)
    const paymentMethod = useSelector(state => state.paymentMethod)

    const totalPrice = (Number(itemsPrice) + Number(taxPrice) + Number(shippingPrice)).toFixed(2)

    const orderCreate = useSelector(state => state.orderCreate)

    const { order, error, success } = orderCreate;

    useEffect(() => {
        if (success) {
            history.push(`/order/${order._id}`)
        }

        // eslint-disable-next-line
    }, [history, success ]);

    const dispatch = useDispatch()
    const placeOrderHandler = () => {
        dispatch(createOrder({
            orderItems : itemsInCart,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            shippingPrice,
            taxPrice,
            totalPrice
        }))
    }
    return (
        <section className='placeorder w-full h-screen relative flex justify-center items-center'>
            <img className='w-full absolute top-0' src='/images/formbackground.jpg' alt='form background'/>
                <div className='information w-full glass-container grid md:grid-cols-2 xs:grid-cols-0 p-5'>
                    <div className='pb-3'>
                        <h2 className='font-bold text-xl'>Shipping Address</h2>
                        <p className='text-xs pb-3'>{ `${shippingAddress.address}, ${shippingAddress.city}, ${shippingAddress.country}` }</p>
                        <hr/>
                        <h2 className='font-bold text-xl pt-3'>Payment Method</h2>
                        <p className='text-xs pb-3'>{paymentMethod}</p>
                        <hr/>
                        <h2 className='font-bold py-3'>Order Items</h2>
                        <ul>
                            {
                            itemsInCart.length === 0 ? <h4>Your Cart Is Empty</h4> : itemsInCart.map((item, index) => {
                                return (
                                <li key={index} className='flex justify-between items-center'>
                                    <img src={item.image} alt={item.name} className='w-10'/>
                                    <Link to={`/menu/${item.product}`} className='text-left font-bold text-sm'>{item.name}</Link>
                                    <h5 className='text-xs'>{item.qty} X {item.price} = <span className='font-bold'> Rs. {item.price * item.qty}</span></h5>
                                </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                    <hr className='md:hidden'/>
                    <div className='summary pt-5'>
                        <h2 className='font-bold text-xl text-center'>SUMMARY</h2>
                        <ul className='h-40 flex flex-col justify-between pt-4'>
                            <li className='flex justify-between'><h5 className='text-xs font-bold'>Items</h5><span>Rs. {itemsPrice}</span></li>
                            <li className='flex justify-between'><h5 className='text-xs font-bold'>Shipping</h5><span>Rs. {shippingPrice}</span></li>
                            <li className='flex justify-between'><h5 className='text-xs font-bold'>Tax</h5><span>Rs. {taxPrice}</span></li>
                            <li className='flex justify-between'><h5 className='text-xs font-bold'>TOTAL</h5><span className='font-bold'>Rs. {totalPrice}</span></li>
                        </ul>
                        <div className='w-full flex justify-center'>
                            { error && <span>{error}</span>}
                            <button onClick={ placeOrderHandler } className='btn border-solid border-2 text-primary w-25 py-2 px-4 my-4 font-bold text-xs rounded-md text-center' type="submit" >Place Order</button>
                        </div>
                    </div>
                </div>
                <div className='circle absolute'></div>
                <div className='circle absolute'></div>
                <div className='circle absolute'></div>
    </section>
    );
}

export default PlaceOrderScreen;
