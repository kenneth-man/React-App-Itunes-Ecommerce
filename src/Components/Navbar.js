import React, { useContext } from 'react';
import { Context } from '../Context.js';
import { NavLink, Link } from 'react-router-dom';
import logo from '../Res/itunes-logo.png';
import home from '../Res/home.svg';
import podcastIcon from '../Res/headphones.svg';
import musicIcon from '../Res/folder-music.svg';
import movieIcon from '../Res/clapperboard.svg';
import ebookIcon from '../Res/tablet.svg';
import cartIcon from '../Res/shopping-cart.svg';


const Navbar = () => {
    const { cartData } = useContext(Context);

    return (
        <div className='navbar row'>
            <Link to='/' exact='true' className='link-home center'>
                <img src={logo} alt='itunes-logo' style={{width: '70px'}} className='round'/>
            </Link>

            <div className='row'>
                <NavLink to='/' exact={true} className='navlink center transition' activeClassName='navlink--active' style={{marginRight: '20px'}}>
                    <img src={home} alt='home-icon' className='icon-mr'/>

                    Home
                </NavLink>

                <NavLink to='/Podcast' exact={true} className='navlink center transition' activeClassName='navlink--active' style={{marginRight: '20px'}}>
                    <img src={podcastIcon} alt='podcast-icon' style={{width: '20px'}} className='icon-mr'/>

                    Podcast
                </NavLink>

                <NavLink to='/Music' exact={true} className='navlink center transition' activeClassName='navlink--active' style={{marginRight: '20px'}}>
                    <img src={musicIcon} alt='music-icon' className='icon-mr'/>

                    Music
                </NavLink>

                <NavLink to='/Movie' exact={true} className='navlink center transition' activeClassName='navlink--active' style={{marginRight: '20px'}}>
                    <img src={movieIcon} alt='movie-icon' className='icon-mr'/>

                    Movie
                </NavLink>

                <NavLink to='/EBook' exact={true} className='navlink center transition' activeClassName='navlink--active' style={{marginRight: '20px'}}>
                    <img src={ebookIcon} alt='ebook-icon' className='icon-mr'/>

                    EBook
                </NavLink>

                <NavLink to='/Cart' exact={true} className='navlink navlink__cart center transition' activeClassName='navlink--active'>
                    <div className='navlink__cart--counter'>
                        {cartData.length}
                    </div>

                    <img src={cartIcon} alt='cart-icon' className='icon-mr'/>

                    Cart
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar;