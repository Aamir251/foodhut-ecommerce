import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux"
import {Link, useParams, useLocation, useHistory } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../actions/cartActions';


const CartScreen = () => {

    const { id } = useParams()
    const location = useLocation()
    const history = useHistory()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const qty = location.search  ? Number(location.search.split('=')[1]) : 1

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty]);

    const removeFromCartHandler = (id) => {
        id && dispatch(removeFromCart(id))
    }

    const proceedToCheckout = () => {
        history.push("/login?redirect=shipping")
    }

    const ProductItem = ({item}) => {
        return (
        // here product refers to Id
        <article className="w-full flex flex-wrap product-item  justify-around items-center mb-3" key={item.product}>
        <img className="w-10" src={item.image} alt={item.name}/>
        <Link to={`/menu/${item.product}`} ><h3>{item.name}</h3></Link>
        <h5 className="text-secondary font-bold">Rs. {item.price}</h5>
   
        <select value={item.qty} onChange= {(e) => dispatch(addToCart(item.product, Number(e.target.value)))} className="pl-2 ml-2 font-bold shadow bg-secondary text-white">
            { [...Array(item.countInStock).keys()].map(value => ( <option key={value} value={ value + 1 }>{value + 1} </option>) ) }
        </select>
        <button onClick={()=> removeFromCartHandler(item.product)}><i className="fas fa-trash"></i></button>
        <span className="my-2 inline underline bg-secondary w-full opacity-20"></span>
    </article>)
   }

    return <section className='cart-screen w-full pt-10 h-full relative'>
        <img src="/images/formbackground.jpg" alt='background' className='absolute top-0 w-screen h-screen'/>
            <div className='glass-container h-full'>
                <header className="flex justify-around items-center xs:flex-col sm:flex-row py-4 mt-5">
                    <h1 className='text-center text-primary text-2xl pt-3'>Shopping Cart</h1> 
                    <span className='text-primary'>Total Items - ({cart.reduce((acc, item) => acc + item.qty,0)})</span>
                    <span className='text-primary'>Total Price - <span className="text-secondary font-bold">Rs.{ cart.reduce((acc, item) => acc + item.qty * item.price ,0) }</span></span>
                    <button onClick={()=> proceedToCheckout()} className="font-bold text-primary text-xs md:text-sm btn">Proceed To Checkout</button>
                </header>
            
                {cart.length ===0 ? <p>Your Cart Is Empty</p> :
                    <section className="relative px-5 lg:w-2/3 xs:w-full mx-auto">
                        {cart.map((item) => (
                            // Here, product means the item key
                            <ProductItem key={item.product} item={item} />
                        ))}
                </section>}
            </div>
            <div className='circle'></div>
            <div className='circle'></div>
    </section>;



}

export default CartScreen;
