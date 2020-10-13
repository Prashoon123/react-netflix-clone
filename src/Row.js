import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs on a specific condition/variable
    useEffect(() => {
        // if [], run once when row loads, and don't run it again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return (
        // BEM naming convention
        <div className="row">
            {/* title */}
                <h2>{title}</h2>
                <div className="row__posters">
                    {/* several row__posters */}
                    {movies.map(movie => (
                        <img 
                            key={movie.id}
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            // Change this in order to change the card style
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name}
                        />
                    ))}
                </div>
        </div>
    )
}

export default Row;
