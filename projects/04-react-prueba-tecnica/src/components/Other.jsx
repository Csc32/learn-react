import { useCatImage } from '../hooks/useCatimage';
export function Other() {
  const { imageUrl } = useCatImage({ fact: 'cat' });
  return <img src={imageUrl} />;
}
