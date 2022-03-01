import React, {useState, useEffect} from 'react';
import "./Row.css";
import instance from './axios';

const base_url = "https://image.tmdb.org/t/p/original/"

function Row( {title, fetchUrl, isLargeRow} ) {
  const [movies, setMovies] = useState([]);

  //runs everytime the row loads
  // a [] as the second parameter ensures that it runs only once
  useEffect(() => {
    //By default, async calls cannot be called within useEffect, so a function is used
    async function fetchData(){
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results)
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className='row'>
        <h2>{title}</h2>

        <div className='row__posters'>
          {/* several row__posters */}

          {movies.map(movie => (
             <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
          ))}
        </div>
    </div>
  )
}

export default Row