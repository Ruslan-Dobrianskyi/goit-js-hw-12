// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPhotos } from './js/pixabay-api';
import { renderMarkup, refreshLightbox } from './js/render-functions';
import falseSvg from './img/false.svg';
import warningSvg from './img/warning.svg';

const formEl = document.querySelector('.js-hero-form');
const photoEl = document.querySelector('.photos-list');
const loaderEl = document.querySelector('.loader');

formEl.addEventListener('submit', e => {
  e.preventDefault();

  photoEl.innerHTML = '';

  const userSearch = e.target.elements.query.value.trim();
  if (userSearch === '') {
    iziToast.warning({
      titleColor: '#fff',
      messageColor: '#fff',
      backgroundColor: '#ffa000',
      iconUrl: warningSvg,
      message: 'Please enter a search query',
      position: 'topRight',
    });

    return;
  }
  showLoader();
  getPhotos(userSearch)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          titleColor: '#fff',
          messageColor: '#fff',
          backgroundColor: '#ef4040',
          iconUrl: falseSvg,
          message:
            'Sorry, there are no images matching<br> your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      renderMarkup(photoEl, data.hits);
      refreshLightbox();
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      hideLoader();
    });

  e.target.reset();
});

function showLoader() {
  loaderEl.classList.add('visible');
}

function hideLoader() {
  loaderEl.classList.remove('visible');
}
