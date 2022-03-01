import React, {useState, useEffect} from 'react';
import axios from 'axios';
import instance from './axios';

function Row( {title, fetchUrl} ) {
  const [movies, setMovies] = useState([]);

  //runs everytime the row loads
  // a [] as the second parameter ensures that it runs only once
  useEffect(() => {
    //By default, async calls cannot be called within useEffect, so a function is used
    async function fetchData(){
      const request = await instance.get(fetchUrl);
      console.log(fetchUrl);
      console.log(request);
      return request;
    }
    fetchData();
  }, []);


  return (
    <div>
        <h2>{title}</h2>

        {/* container with posters */}
    </div>
  )
}

export default Row