import React from 'react';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import './index.css';
import MediaGrid from './components/MediaGrid';

function App() {
    const [mediaList, setMediaList] = React.useState([]);
    const [searchKey, setSearchKey] = React.useState('');
    const [page, setPage] = React.useState(1);

    const fetchMedia = React.useCallback(async () => {
        const media = await axios.get(
            `https://pixabay.com/api/?key=${
                process.env.REACT_APP_PIXABAY_API_KEY
            }&page=${page}&q=${searchKey ? encodeURIComponent(searchKey) : ''}`
        );

        if (media && media.data && media.data.hits) {
            setMediaList((current) => [...current, ...media.data.hits]);
        }
    }, [page, searchKey]);

    const reset = () => {
        setMediaList([]);
        setPage(1);
    };

    const scrollEvent = () => {
        if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
            setPage((current) => current + 1);
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', scrollEvent);
        return () => window.removeEventListener('scroll', scrollEvent);
    }, []);

    React.useEffect(() => {
        fetchMedia();
    }, [fetchMedia, page, searchKey]);

    return (
        <div>
            <SearchBar
                fetchMedia={fetchMedia}
                searchKey={searchKey}
                setSearchKey={setSearchKey}
                reset={reset}
            />

            <MediaGrid mediaList={mediaList} />
        </div>
    );
}

export default App;
