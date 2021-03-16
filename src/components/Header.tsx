import { movieSets } from "../contexts/WatchMeContext";

export function Header() {
  const { selectedGenre } = movieSets();

  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
