import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import FilterContextProvider from './context/FilterContext.jsx';

createRoot(document.getElementById('root')).render(
  <FilterContextProvider>
    <App />
  </FilterContextProvider>,
);
