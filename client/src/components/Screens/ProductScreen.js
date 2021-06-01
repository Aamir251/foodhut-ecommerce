import React, {useEffect, useState} from 'react';
import { Link, useParams, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/productActions';
import CartButton from "../CartButton"
import Rating from "../Rating"
const ProductScreen = () => {

    const dispatch = useDispatch()

    const singleProduct = useSelector(state => state.singleProduct);

    const [ quantity, setQuantity ] = useState(1);

    const { id } = useParams()
    const  history  = useHistory()

    const { loading, error, product } = singleProduct;
    useEffect(() => {
        dispatch(getProduct(id))
    }, [dispatch])
    
    const addToCartHandler = () => {
        history.push(`/cart/${id}?qty=${quantity}`)
    }

    return <>
        { product && <article className="relative product-screen mx-auto mt-10  p-5 flex flex-col justify-around items-center">
                <span className='absolute left-1 top-1 font-bold text-primary border-2 border-secondary py-1 px-2'><Link to="/menu">Go Back</Link></span>

                <h2 className='text-5xl xs:text-2xl text-primary font-bold'>{product.name}<div className='underline bg-secondary mt-2'></div></h2>
                
                <h4 className='text-xl xs:text-sm text-gray pt-3'>{product.shortDesc}</h4>
                <div className='flex xs:flex-col xs:items-center lg:items-start lg:flex-row'>
                <img src={product.image} alt={product.name} className="xs:w-2/3 lg:w-1/2"  />
                <footer className='px-3 lg:pt-5'>
                <p className='text-gray leading-relaxed text-sm lg:w-full lg:leading-loose opacity-85 '>{product.description}</p>
                <p className='text-secondary text-xl lg:text-2xl  font-bold pt-3'>Rs.{product.price}</p><Rating value={product.rating}/>
                <span className="text-primary ">Quantity</span>
                <select id="quantity" value={quantity} onChange= {(e) => setQuantity(e.target.value)} className="pl-2 ml-2 font-bold shadow bg-secondary text-white">
                    { [...Array(product.countInStock).keys()].map(value => ( <option value={ value + 1 }>{value + 1} </option>) ) }
                </select>
                </footer>
                </div>
                <CartButton countInStock={product.countInStock} addToCartHandler={addToCartHandler}/>
                <img src="/images/icons/cart.png" alt="cart items" className="absolute cart-icon cursor-pointer"/>
            </article>
        }
    </>
}

export default ProductScreen;

