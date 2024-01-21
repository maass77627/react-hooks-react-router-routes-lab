import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {movies.map((movie) => <div>
      <h1>{movie.title}</h1>
      <h2>{movie.time}</h2>
      <ul>{movie.genres.map((genre) => <li>{genre}</li>)}</ul>
      </div>)}
    
    
    
    </div>;
}

export default Movies;
