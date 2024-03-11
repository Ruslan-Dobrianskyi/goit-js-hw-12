import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '42729601-bb8f3cd30c047f14b18874640';

export async function getPhotos(q, page) {
  const params = {
    key: API_KEY,
    page,
    per_page: 15,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const res = await axios.get(`${BASE_URL}/`, { params });

  return res.data;
}
