import React from 'react';
import { Link } from 'react-router-dom'

const CheckOutSteps = ({step1, step2, step3, step4}) => {
    return <>
        <nav >
            <ul className='absolute w-full top-2 md:left-10 xs:left-3 flex justify-around items-center xs:text-sm mx-auto'>
                {step1 ? <li><Link to="/login">Sign In</Link></li> : <li><Link className='disable'>Sign In</Link></li>}
                {step2 ? <li><Link to="/shipping">Shipping</Link></li> : <li><Link className='disable'>Shipping</Link></li>}
                {step3 ? <li><Link to="/payment">Payment</Link></li> : <li><Link className='disable'>Payment</Link></li>}
                {step4 ? <li><Link to="/placeorder">Place Order</Link></li> : <li><Link className='disable'>Place Order</Link></li>}
            </ul>
        </nav>    
    </>
}

export default CheckOutSteps;
