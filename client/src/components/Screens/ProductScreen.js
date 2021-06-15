import React, {useEffect, useState} from 'react';
import { Link, useParams, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/productActions';
import CartButton from "../CartButton"
import Rating from "../Rating"
import Loader from '../Loader';
import Message from '../Message';
const ProductScreen = () => {

    const dispatch = useDispatch()

    const singleProduct = useSelector(state => state.singleProduct);

    const [ quantity, setQuantity ] = useState(1);

    const { id } = useParams()
    const  history  = useHistory()

    const { loading, error, product } = singleProduct;
    useEffect(() => {
        dispatch(getProduct(id))
    }, [dispatch, id])
    
    const addToCartHandler = () => {
        history.push(`/cart/${id}?qty=${quantity}`)
    }

    return <>
        {loading ? <Loader/>  : product && <article className="relative product-screen mx-auto p-5  flex flex-col justify-around items-center">
            <img src="/images/background.jpg" alt='background' className='absolute h-screen top-0 w-screen' />
                <div className='glass-container relative pt-2 md:mt-8'>
                <span className='absolute left-1 top-0 btn text-xs'><Link to="/menu">Back</Link></span>
                    {error && <Message error={error} />}
                    <h2 className='text-5xl xs:text-2xl text-primary text-center font-bold'>{product.name}</h2>
                    <h4 className='text-xl xs:text-sm text-gray pt-3 text-center'>{product.shortDesc}</h4>
                    <div className='flex xs:flex-col xs:items-center lg:items-start md:flex-row'>
                    <img src={product.image} alt={product.name} className="xs:w-2/3 md:w-1/2"  />
                    <footer className='px-3 lg:pt-5'>
                        <p className='text-gray leading-relaxed xs:text-xs md:text-sm lg:w-full lg:leading-loose opacity-70 '>{product.description}</p>
                        <p className='text-secondary text-xl lg:text-2xl  font-bold pt-3'>Rs.{product.price}</p><Rating value={product.rating}/>
                        <span className="text-primary ">Quantity</span>
                        <select id="quantity" value={quantity} onChange= {(e) => setQuantity(e.target.value)} className="pl-2 ml-2 font-bold shadow bg-secondary text-white">
                            { [...Array(product.countInStock).keys()].map(value => ( <option value={ value + 1 }>{value + 1} </option>) ) }
                        </select>
                    </footer>
                    </div>
                    <CartButton countInStock={product.countInStock} addToCartHandler={addToCartHandler}/>
                </div>
                <div className='circle'></div>
                <div className='circle'></div>
            </article>
        }
    </>
}

export default ProductScreen;

