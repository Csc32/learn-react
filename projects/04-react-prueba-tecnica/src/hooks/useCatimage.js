import { useEffect, useState } from 'react';
const DOMAIN_NAME = `https://cataas.com/cat/`;
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();
  //useEffect to load when a the fact change
  useEffect(() => {
    if (!fact) return;
    const firtsWord = fact.split(' ', 3).join(' ')[0];

    fetch(`${DOMAIN_NAME}says/${firtsWord}?size=50&color=red&json=true`)
      .then((res) => res.json())
      .then((response) => {
        const id = response._id;
        const url = `${DOMAIN_NAME}${id}/says/${firtsWord}`;

        setImageUrl(url);
      });
  }, [fact]);
  return { imageUrl };
}
