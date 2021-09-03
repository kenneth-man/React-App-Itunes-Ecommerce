import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../Context.js';

const MainHeader = ({ mediaType }) => {
    const { fetchData, encodeString, searchInput, setSearchInput } = useContext(Context);

    useEffect(() => {
        if(searchInput) fetchData(encodeString(searchInput), mediaType);
    }, [searchInput])

    return (
        <div className='main__header col'>
            <h1>{mediaType}{mediaType === 'music' ? '' : 's'}</h1>

            <h2 style={{width: '90%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
        
            <input placeholder={`Search for ${mediaType}${mediaType === 'music' ? '' : 's'}...`} value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
        </div>
    )
}

export default MainHeader;