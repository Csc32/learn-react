import products from '/mocks/product.json';
import Product from './Product.jsx';

export function ListProducts() {
  const productsJson = products.products;
  return (
    <ul className="product-list">
      {productsJson.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
          />
        );
      })}
    </ul>
  );
}
