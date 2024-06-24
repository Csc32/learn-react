import { useEffect, useState } from 'react';

export default function App() {
  const CAT_ENDPOINT_RAMDON_FACT = 'https://catfact.ninja/fact';
  //const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firtsWord}?json=true`;
  const DOMAIN_NAME = `https://cataas.com/cat/`;
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDON_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(data.fact);
        const firtsWord = fact.split(' ', 3).join(' ')[0];

        fetch(`${DOMAIN_NAME}says/${firtsWord}?size=50&color=red&json=true`)
          .then((res) => res.json())
          .then((response) => {
            const id = response._id;
            const url = `${DOMAIN_NAME}${id}/says/${firtsWord}`;
            console.log(url);
            setImageUrl(url);
          });
      });
  }, []);
  return (
    <main>
      <h1>Cat App</h1>
      <section
        style={{
          display: 'flex',
          flex: 'row wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt={`Random cat generate with the firts letter of: ${fact}`}
            style={{ minWidth: '100px', minHeight: 'auto' }}
          />
        )}
      </section>
    </main>
  );
}
