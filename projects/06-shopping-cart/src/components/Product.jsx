import { useId } from 'react';

export default function Product({ title, price, thumbnail }) {
  const PRODUCT_ID = useId();
  return (
    <li className="product-item" id={PRODUCT_ID}>
      <h3>{title}</h3>
      <img src={thumbnail} alt={title} />
      <p>
        {price}
        <span>$</span>
      </p>
    </li>
  );
}
