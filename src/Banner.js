import React, {useEffect, useState} from 'react';
import instance from './axios';
import requests from './requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length
                )])
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

  return (
    <header>
        {/* Background img */}
        {/* title */}
        {/* div > 2 buttons */}
        {/* description */}
    </header>
  )
}

export default Banner