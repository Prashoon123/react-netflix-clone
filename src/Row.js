import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    // A snippet of code which runs on a specific condition/variable
    useEffect(() => {
        // if [], run once when row loads, and don't run it again

    }, []);

    return (
        <div>
            {/* title */}
                <h2>{title}</h2>
            {/* container -> posters */}
            
            {/*  */}
        </div>
    )
}

export default Row;
