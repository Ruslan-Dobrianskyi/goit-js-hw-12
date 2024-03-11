const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42729601-bb8f3cd30c047f14b18874640';

export function getPhotos(q) {
  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
