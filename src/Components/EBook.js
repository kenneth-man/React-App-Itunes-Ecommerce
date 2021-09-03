import React, { useContext } from 'react';
import { Context } from '../Context.js';
import MainHeader from './MainHeader.js';
import Item from './Item.js';

const EBook = () => {
    const { ebookData, searchInput } = useContext(Context);
    
    return (
        <div className='movie main col'>
            <MainHeader
                mediaType='ebook'
            />

            <div className='main__cont row'>
                {
                    ebookData && searchInput !== '' ?
                    ebookData.map((curr, index) => 
                        <Item 
                            key={index}
                            index={index}
                            id={curr.trackId}
                            img={curr.artworkUrl100}
                            title={curr.trackName}
                            price={curr.price}
                            author={curr.artistName}
                            type={curr.kind}
                        />
                    ) :
                    <h1 className='main__h1'>&ndash; No results found &ndash;</h1>
                }
            </div>
        </div>
    )
}

export default EBook;