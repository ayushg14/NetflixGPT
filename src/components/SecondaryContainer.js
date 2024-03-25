import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="relative z-50 pl-12 -mt-44">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Watch Again"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Documntary"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Upcoming"} movies={movies?.nowPlayingMovies} />
      </div>

      {/*
      MovieList - Popular
        - MoviesCards * n
      MovieList - NowPlaying
      MovieList - Trending
      MovieList - Hrror
    */}
    </div>
  );
};

export default SecondaryContainer;
