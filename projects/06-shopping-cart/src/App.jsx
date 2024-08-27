import { Filters } from './components/Filters.jsx';
import { products as initialProducts } from '/mocks/product.json';
import Header from './components/Header.jsx';
import { ListProducts } from './components/ListProducts.jsx';
import { Footer } from './components/Footer.jsx';
import { useFilters } from './hooks/useFilter.js';
function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);
  return (
    <>
      <Header />
      <Filters></Filters>
      <ListProducts products={filteredProducts}></ListProducts>
      <Footer></Footer>
    </>
  );
}

export default App;
