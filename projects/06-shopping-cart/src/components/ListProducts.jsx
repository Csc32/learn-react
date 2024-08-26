import Product from './Product.jsx';

export function ListProducts({ products }) {
  return (
    <ul className="product-list">
      {products.map((product) => {
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
