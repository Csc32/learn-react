import './App.css';
import { useMovies } from './hooks/useMovies';
import Movies from './components/Movies';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import debounce from 'just-debounce-it';
import { useCallback } from 'react';
function useSearch() {
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirtsInput = useRef(true);

  useEffect(() => {
    if (isFirtsInput.current) {
      isFirtsInput.current = search === '';
      return;
    }
    if (search === '') {
      setError('No se puede buscar una pelicula vacia');
      return;
    }
    if (search.match(/^\d+$/)) {
      setError('No se puede buscar la pelicula con un numero');
      return;
    }

    if (search.length < 3) {
      setError('La busqueda debe ser al menos 3 caracteres');
      return;
    }
    setError(null);
  }, [search]);
  return { search, updateSearch, error };
}
function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      console.log('search', search);
      getMovies({ search });
    }, 500),
    [getMovies],
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies({ search });
  };
  const onChange = (e) => {
    const newSearch = e.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(search);
  };
  const handleSort = () => {
    setSort(!sort);
  };
  return (
    <div className="page">
      <header>
        <h1>Movies Search</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={onChange}
            value={search}
            placeholder="Avengers, Batman..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error} </p>}
      </header>
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {loading ? <p>Loading...</p> : <Movies movies={movies}></Movies>}
      </main>
    </div>
  );
}

export default App;
