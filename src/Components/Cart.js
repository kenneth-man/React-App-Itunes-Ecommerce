import React, { useContext, useEffect } from 'react';
import { Context } from '../Context.js';
import CartItem from './CartItem.js';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartData, cartTotal, setCartTotal } = useContext(Context);

    useEffect(() => {
        if(cartData.length !== 0){
            const total = cartData.reduce((acc, curr) => {
                const price = curr.content.price ? curr.content.price : (curr.content.trackPrice ? curr.content.trackPrice : (curr.content.collectionPrice ? curr.content.collectionPrice : curr.content.trackRentalPrice));
                return acc + price;
            }, 0)

            setCartTotal(total);
        } else {
            setCartTotal(0);
        }
    }, [cartData])

    return (
        <div className='cart main col'>
            <div className='main__small-header center'>
                <h1>Your Shopping Cart</h1>
            </div>

            <div className='cart__cont col'>
                {
                    cartData.length === 0 ?
                    <h1 style={{margin: 'auto 0px'}}>0 Items found in Shopping Cart...</h1> :
                    cartData.map((curr, index) => 
                        <CartItem
                            key={index}
                            index={index}
                            id={curr.id}
                            name={curr.content.collectionName}
                            img={curr.content.artworkUrl600 ? curr.content.artworkUrl600 : curr.content.artworkUrl100}
                            price={curr.content.price ? curr.content.price : (curr.content.trackPrice ? curr.content.trackPrice : (curr.content.collectionPrice ? curr.content.collectionPrice : curr.content.trackRentalPrice))}
                        />
                    )
                }
            </div>

            <div className='row' style={{width: '50%'}}>
                <h1 style={{margin: '7.5px 0px'}}>Total &ndash; £{cartTotal.toFixed(2)}</h1>

                <Link to='/Checkout' exact='true' className='link'>To Checkout</Link> 
            </div>

            
        </div>
    )
}

export default Cart;