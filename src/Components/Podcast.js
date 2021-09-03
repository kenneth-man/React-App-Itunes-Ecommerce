import React, { useContext } from 'react';
import { Context } from '../Context.js';
import MainHeader from './MainHeader.js';
import Item from './Item.js';

const Podcast = () => {
    const { podcastData, searchInput } = useContext(Context);

    return (
        <div className='podcast main col'>
            <MainHeader
                mediaType='podcast'
            />
            
            <div className='main__cont row'>
                {
                    podcastData && searchInput !== '' ?
                    podcastData.map((curr, index) => 
                        <Item 
                            key={index}
                            index={index}
                            id={curr.trackId}
                            img={curr.artworkUrl600}
                            title={curr.collectionName}
                            price={curr.collectionPrice}
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

export default Podcast;