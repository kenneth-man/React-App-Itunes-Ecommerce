import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../Context.js';
import tickIcon from '../Res/check.svg';
import addToCartIcon from '../Res/cart-plus.svg';

const Info = () => {
    const { podcastData, musicData, movieData, ebookData, itemIdentifiers, cartData, setCartData } = useContext(Context);
    const [infoData, setInfoData] = useState(undefined);

    const btnShoppingCartAlert = () => {
        alert('This item has already been added to your shopping cart')
    }

    const btnShoppingCartOnClick = () => {
        setCartData([...cartData, {id: itemIdentifiers.id, content: infoData}]);
    }

    useEffect(() => {
        if(itemIdentifiers){
            if(itemIdentifiers.type === 'podcast') setInfoData(podcastData[itemIdentifiers.index]);
            if(itemIdentifiers.type === 'song') setInfoData(musicData[itemIdentifiers.index]);
            if(itemIdentifiers.type === 'feature-movie') setInfoData(movieData[itemIdentifiers.index]);
            if(itemIdentifiers.type === 'ebook') setInfoData(ebookData[itemIdentifiers.index]);
        } 
    }, [itemIdentifiers])

    return (
        <div className='info main col'>
            {
                infoData ?
                <div className='info__cont row'>
                    {
                        itemIdentifiers.type === 'podcast' ? 
                        <img src={infoData.artworkUrl600} alt='item-img' className='round'/> :
                        <img src={infoData.artworkUrl100} alt='item-img' className='round' style={{height: '600px', width: '600px'}}/>
                    }

                    <div className='col' style={{height: '80%', maxWidth: '50%'}}>
                        <h1>{infoData.collectionName}</h1>
                        
                        <h2>ARTIST/S: {infoData.artistName}</h2>
                        
                        <h2>RELEASE DATE: {infoData.releaseDate.slice(0,10).replaceAll('-', '/')}</h2>
                           
                        <h2 style={{maxWidth: '100%'}}>GENRES: {itemIdentifiers.type === 'podcast' || itemIdentifiers.type === 'ebook' ? infoData.genres.join(', ') : infoData.primaryGenreName}</h2>
                        
                        <h2>PRICE: £{infoData.price ? infoData.price : (infoData.trackPrice ? infoData.trackPrice : (infoData.collectionPrice ? infoData.collectionPrice : infoData.trackRentalPrice))}</h2>
                        
                        <h2>CONTENT ADVISORY RATING: {infoData.contentAdvisoryRating ? infoData.contentAdvisoryRating : 'N/A'}</h2>
                        
                        <h2>ID: {infoData.artistId ? infoData.artistId : infoData.collectionId}</h2>
                        
                        <h2>MEDIA TYPE: {infoData.kind}</h2>

                        <a href={infoData.trackViewUrl ? infoData.trackViewUrl : infoData.collectionViewUrl}>
                            LINK: {infoData.trackViewUrl ? infoData.trackViewUrl : infoData.collectionViewUrl}
                        </a>

                        <button onClick={!cartData.find(curr => curr.id === itemIdentifiers.id) ? btnShoppingCartOnClick : btnShoppingCartAlert}>
                            {
                                !cartData.find(curr => curr.id === itemIdentifiers.id) ?
                                <div className='row'>
                                    <img src={addToCartIcon} alt='add-to-shopping-cart' className='icon-mr'/>

                                    Add to Shopping Cart
                                </div>  :
                                <div className='row'>
                                    <img src={tickIcon} alt='already-in-shopping-cart' className='icon-mr'/>

                                    Added to Shopping Cart
                             </div> 
                            }
                        </button>
                    </div>
                </div> :
                <h1 style={{marginTop: '20vh'}}>&ndash; No results found &ndash;</h1>
            }
        </div>
    )
}

export default Info;