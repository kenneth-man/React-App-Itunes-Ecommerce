import React, { useContext } from 'react';
import { Context } from '../Context.js';
import { Link } from 'react-router-dom';
import logo from '../Res/itunes-logo.png';

const Item = ({ index, id, img, title, price, author, type }) => {
    const { setItemIdentifiers } = useContext(Context);
    
    const itemOnClick = () => {
        //if property and value name are the same, only need one keyword
        setItemIdentifiers({ id, type, index });
    }

    return (
        <div className='item col round' style={{backgroundImage: `linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0.5)), url(${img ? img : logo})`, backgroundSize: 'cover'}}>
            <h1 style={{fontSize: '20px', fontWeight: '900'}}>{title}</h1>
            
            <h2 style={{fontSize: '18px'}}>{author}</h2>
            
            <h3>£{price}</h3>
            
            <Link to={`/Info/${title}`} exact='true' className='link' onClick={itemOnClick}>View More</Link>
        </div>
    )
}

export default Item;