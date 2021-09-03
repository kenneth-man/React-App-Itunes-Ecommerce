import React, { useContext } from 'react';
import { Context } from '../Context.js';
import MainHeader from './MainHeader.js';
import Item from './Item.js';

const Music = () => {
    const { musicData, searchInput } = useContext(Context);

    return (
        <div className='music main col'>
            <MainHeader
                mediaType='music'
            />

            <div className='main__cont row'>
                {
                    musicData && searchInput !== '' ?
                    musicData.map((curr, index) => 
                        <Item 
                            key={index}
                            index={index}
                            id={curr.trackId}
                            img={curr.artworkUrl100}
                            title={curr.collectionName}
                            price={curr.trackPrice}
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

export default Music;