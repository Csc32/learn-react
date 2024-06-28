import { useEffect, useState } from 'react';
import { getRandomFact } from '../services/facts';

export function useCatFat() {
  const [fact, setFact] = useState();
  const refreshFact = () => {
    getRandomFact().then(setFact);
  };
  useEffect(refreshFact, []);
  return { fact, refreshFact };
}
