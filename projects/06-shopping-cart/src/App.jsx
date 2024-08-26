import { useEffect } from 'react';
import { Filters } from './components/Filters.jsx';
import { products as initialProducts } from '/mocks/product.json';
import Header from './components/Header.jsx';
import { ListProducts } from './components/ListProducts.jsx';
import { useState } from 'react';
import { Footer } from './components/Footer.jsx';
import { useContext } from 'react';
import { FilterContext } from './context/FilterContext.jsx';
function useFilters() {
  /*   const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 200,
  }); */
  const { filters, setFilters } = useContext(FilterContext);
  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category == 'all' || product.category == filters.category)
      );
    });
  };
  return { filters, filterProducts, setFilters };
}
function App() {
  const [products] = useState(initialProducts);
  const { filters, filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);
  return (
    <>
      <Header />
      <Filters changeFilters={setFilters}></Filters>
      <ListProducts products={filteredProducts}></ListProducts>
      <Footer filters={filters}></Footer>
    </>
  );
}

export default App;
