import { useEffect, useState } from 'react';
import { useCatFat } from './hooks/useCatFat';
import { useCatImage } from './hooks/useCatimage';
import { Other } from './components/Other';
export default function App() {
  //const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firtsWord}?json=true`;
  const { fact, refreshFact } = useCatFat();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async function () {
    refreshFact();
  };
  return (
    <main>
      <h1>Cat App</h1>
      <button onClick={handleClick}>Get new Fact</button>
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
            style={{ width: '300px', height: 'auto' }}
          />
        )}
      </section>
      <Other>ggG</Other>
    </main>
  );
}
