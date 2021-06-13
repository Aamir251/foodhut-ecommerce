import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom'
import  { PayPalButton } from 'react-paypal-button-v2'
import { useSelector, useDispatch } from 'react-redux'
import { getOrderDetails, payOrder } from "../../actions/orderActions"
import * as api from '../../api';
import ACTIONS from '../../actionTypes/actionTypes';

const OrderScreen = () => {

    const [ isSdkReady, setIsSdkReady ] = useState(false)
    const { id } = useParams()
    const addDecimal = (num) => (Math.round(num * 100)/100).toFixed(2)

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails;

    const orderPay = useSelector(state => state.orderPay)
    const { success:successPay, loading : loadingPay } = orderPay;

    if (!loading) {
        order.itemsPrice = addDecimal(order.orderItems.reduce((acc, item) => acc + item.price * item.qty,0))

    }
    const dispatch = useDispatch()

    useEffect(() => {

        const addPayPalScript = async () => {
            const { data : clientId} = await api.getClientId()
            const script = document.createElement('script')   
            script.type = 'text/javascript'
            script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
            script.async = true
            script.onload = () => {
                setIsSdkReady(true)
            }

            document.body.appendChild(script)
        }

        if (!order || successPay) {
            dispatch({type : ACTIONS.ORDER_PAY_RESET})
            dispatch(getOrderDetails(id))
        } else if(!order.isPaid) {
            if (!window.paypal) {
                addPayPalScript()
            } else {
                setIsSdkReady(true)
            }
        }

    }, [dispatch, id, successPay, order]);

    const successPaymentHandler = (paymentResult) => {
        console.log(paymentResult);
        dispatch(payOrder(id, paymentResult))
    }
   
    return (
        <section className='placeorder w-full h-screen relative flex justify-center items-center'>
            <img className='w-full absolute top-0' src='/images/formbackground.jpg' alt='form background'/>
                { order && <div className='information w-full glass-container grid md:grid-cols-2 xs:grid-cols-0 p-5 xs:text-xs md:text-base'>
                    <div className='pb-3'>
                        <h2 className='font-bold text-xl xs:text-xs md:text-base '>Order {order._id}</h2>
                        <hr/>
                        <div className='flex justify-between pt-1 xs:text-xs md:text-base'>
                            <p><strong className='text-xs'>Name : </strong><span className='text-xs font-bold opacity-80'>{order.user.name}</span></p>
                            <p><strong className='text-xs'>Email : </strong><span className='text-xs'><a href={`mailto:${order.user.email}`}>{order.user.email}</a></span></p>
                        </div>
                        <p className='text-xs pb-2 xs:text-xs md:text-base'><strong>Address : </strong>{ `${order.shippingAddress.address}, ${order.shippingAddress.city}, ${order.shippingAddress.country}` }</p>
                        <p className='orderstatus py-1 px-2 xs:text-xs md:text-base'>{order.isDelivered ? <strong>Delivered on - {order.deliveredAt}</strong> : <strong>Not Delivered</strong>}</p>

                        <h2 className='font-bold text-xl xs:text-xs md:text-base'>Payment Method</h2>
                        <p className='text-xs pb-3 xs:text-xs md:text-base'>{order.paymentMethod}</p>
                        <p className='orderstatus py-1 px-2 xs:text-xs md:text-base'>{order.isPaid ? <strong>Paid on - {order.paidAt}</strong> : <strong>Not Paid</strong>}</p>
                        <hr/>
                        <h2 className='font-bold py-3 xs:text-xs md:text-base'>Order Items</h2>
                        <ul>
                            {
                            order.orderItems.length === 0 ? <h4>Your Cart Is Empty</h4> : order.orderItems.map((item, index) => {
                                return (
                                <li key={index} className='flex justify-between items-center'>
                                    <img src={item.image} alt={item.name} className='w-10'/>
                                    <Link to={`/menu/${item.product}`} className='text-left font-bold xs:text-xs md:text-base'>{item.name}</Link>
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
                            <li className='flex justify-between'><h5 className='text-xs font-bold'>Items Price</h5><span>Rs. {order.itemsPrice}</span></li>
                            <li className='flex justify-between'><h5 className='text-xs font-bold'>Shipping</h5><span>Rs. {order.shippingPrice}</span></li>
                            <li className='flex justify-between'><h5 className='text-xs font-bold'>Tax</h5><span>Rs. {order.taxPrice}</span></li>
                            <li className='flex justify-between'><h5 className='text-xs font-bold'>TOTAL</h5><span className='font-bold'>Rs. {order.totalPrice}</span></li>

                            {!order.isPaid && <PayPalButton amount={order.totalPrice} onSuccess={ successPaymentHandler } />}
                        </ul>
                    </div>
                </div>}
                <div className='circle absolute'></div>
                <div className='circle absolute'></div>
                <div className='circle absolute'></div>
    </section>
    );
}

export default OrderScreen;
