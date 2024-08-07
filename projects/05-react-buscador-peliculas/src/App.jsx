import './App.css';
import responseMovies from '/mocks/with-result.json';
import noResultMovies from '/mocks/no-result.json';
import Movies from './components/Movies';
function App() {
  const movies = responseMovies.Search;
  return (
    <div className="page">
      <header>
        <h1>Movies Search</h1>
        <form className="form">
          <input type="text" placeholder="Avengers, Batman..." />
          <button type="submit">Search</button>
        </form>
      </header>
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Movies movies={movies}></Movies>
      </main>
    </div>
  );
}

export default App;
