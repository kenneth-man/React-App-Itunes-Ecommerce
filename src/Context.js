import React, { createContext, useState } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [itemIdentifiers, setItemIdentifiers] = useState(undefined);
    const [searchInput, setSearchInput] = useState('');
    const [podcastData, setPodcastData] = useState(undefined);
    const [musicData, setMusicData] = useState(undefined);
    const [movieData, setMovieData] = useState(undefined);
    const [ebookData, setEbookData] = useState(undefined);
    const [cartData, setCartData] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const fetchData = async (term, media) => {
        try {
            const response = await fetch(`https://itunes.apple.com/search?term=${term}&country=GB&media=${media}`);
            const data = await response.json();

            if(media === 'podcast') setPodcastData(data.results);
            if(media === 'music') setMusicData(data.results);
            if(media === 'movie') setMovieData(data.results);
            if(media === 'ebook') setEbookData(data.results);

            console.log(data.results);
        } catch(error){
            console.log(error);
        }
    }

    const encodeString = (string) => {
        return string.replace(' ', '+');
    }

    return (
        <Context.Provider value={{ podcastData, musicData, movieData, ebookData, itemIdentifiers, searchInput, cartData, cartTotal,
                                fetchData, encodeString, setItemIdentifiers, setSearchInput, setCartData, setCartTotal }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;