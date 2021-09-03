import React, { useContext } from 'react';
import { Context } from '../Context.js';
import binIcon from '../Res/trash.svg';

const CartItem = ({ index, id, name, img, price }) => {
    const { cartData, setCartData } = useContext(Context);

    const cartItemOnClick = () => {
        setCartData(cartData.filter((curr, idx) => idx !== index));
    }

    const cartItemOnMouseAction = (target) => {
        target.lastElementChild.classList.toggle('hidden');
    }

    return (
        <div className='cartItem row' onClick={cartItemOnClick} onMouseOver={e => cartItemOnMouseAction(e.currentTarget)} onMouseOut={e => cartItemOnMouseAction(e.currentTarget)}>
            <img src={img} alt='cartItem-img' className='cartItem__img'/>

            <h1>#ID{id} &ndash; {name}</h1>

            <h1>£{price}</h1>

            <div className='cartItem__del row transition hidden'>
                <img src={binIcon} alt='binIcon' style={{height: '40px'}} className='icon-mr'/>

                <h1>Remove this from Cart?</h1>
            </div>
        </div>
    )
}

export default CartItem;