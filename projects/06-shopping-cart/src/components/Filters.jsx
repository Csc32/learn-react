import { useState, useId } from 'react';

export function Filters({ changeFilters }) {
  const CATEGORIES = ['all', 'laptops', 'smartphones'];
  const [price, setPrice] = useState(0);
  const minPriceFilterID = useId();
  const categoryFilterID = useId();
  const handleChangePrice = (e) => {
    setPrice(e.target.value);
    changeFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    changeFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };
  return (
    <section className="filter-container">
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <label htmlFor={minPriceFilterID}>Precios a partir de:</label>
          <input
            type="range"
            name={minPriceFilterID}
            id={minPriceFilterID}
            min={0}
            max={10000}
            onChange={(e) => handleChangePrice(e)}
          />
        </div>
        <span> {price}</span>
      </div>
      <select
        name=""
        id={categoryFilterID}
        onChange={(e) => handleChangeCategory(e)}
      >
        {CATEGORIES.map((item, i) => {
          return (
            <option value={item} key={i}>
              {item}
            </option>
          );
        })}
      </select>
    </section>
  );
}
