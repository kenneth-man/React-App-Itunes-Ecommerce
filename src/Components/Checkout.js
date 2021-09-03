import React from 'react';
import StripeContainer from './StripeContainer.js';

const Checkout = () => {
    return (
        <div className='checkout main col'>
            <div className='main__small-header center'>
                <h1>Checkout</h1>
            </div>

            <StripeContainer/>  
        </div>
    )
}

export default Checkout;