function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        //use API contract 🙅‍♂️
        <li key={movie.imdbID}>
          <h3>{movie.Title}</h3>
          <h4>{movie.Year}</h4>
          <img src={movie.Poster} alt={movie.Title} />
        </li>
      ))}
    </ul>
  );
}

function NoMovies() {
  return <p>No movies found</p>;
}

export default function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoMovies />;
}
