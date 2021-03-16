import { movieSets } from "../contexts/WatchMeContext";

import { MovieCard } from "../components/MovieCard";
import "../styles/content.scss";

export function Content() {
  const { movies } = movieSets();
  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MovieCard
          title={movie.Title}
          poster={movie.Poster}
          runtime={movie.Runtime}
          rating={movie.Ratings[0].Value}
        />
      ))}
    </div>
  );
};

