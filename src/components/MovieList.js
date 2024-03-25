import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  // console.log(movies);
  return (
    <div className="px-4 bg-transparent text-white">
      <h1 className="text-lg md:text-2xl py-2">{title} </h1>
      <div className="flex overflow-x-auto ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
