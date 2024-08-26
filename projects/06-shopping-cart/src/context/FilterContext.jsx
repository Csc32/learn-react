import { useState } from 'react';
import { createContext, useContext } from 'react';
// 1. create context
export const FilterContext = createContext({
  category: 'all',
  price: 0,
});
// 2. create provider
export default function FilterContextProvider({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });
  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
