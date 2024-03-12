// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPhotos } from './js/pixabay-api';
import { renderMarkup } from './js/render-functions';
import falseSvg from './img/false.svg';
import warningSvg from './img/warning.svg';
import trueSvg from './img/true.svg';

const formEl = document.querySelector('.js-hero-form');
const photoEl = document.querySelector('.photos-list');
const loaderEl = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.js-load-more-btn');

let page = 1;
let userSearch;
const perPage = 15;

loadMoreBtn.addEventListener('click', async e => {
  showLoader();
  page += 1;
  const data = await getPhotos(userSearch, page);
  renderMarkup(photoEl, data.hits);

  const lastPage = Math.ceil(data.totalHits / perPage);

  if (page === lastPage) {
    loadMoreBtnHide();
    iziToast.error({
      messageColor: '#fff',
      backgroundColor: '#ef4040',
      iconUrl: falseSvg,
      message: "We're sorry, but you've reached the end of search results.",
    });
  }

  hideLoader();

  scroll();
});

formEl.addEventListener('submit', async e => {
  e.preventDefault();

  photoEl.innerHTML = '';
  page = 1;

  userSearch = e.target.elements.query.value.trim();
  if (userSearch === '') {
    loadMoreBtnHide();
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
  try {
    const data = await getPhotos(userSearch, page);
    if (data.hits.length === 0) {
      hideLoader();
      loadMoreBtnHide();
      iziToast.error({
        titleColor: '#fff',
        messageColor: '#fff',
        backgroundColor: '#ef4040',
        iconUrl: falseSvg,
        message:
          'Sorry, there are no images matching<br> your search query. Please try again!',
        position: 'topRight',
      });
      e.target.reset();
      return;
    }

    if (data.totalHits < perPage) {
      loadMoreBtnHide();
    } else {
      loadMoreBtnShow();
    }

    iziToast.success({
      titleColor: '#fff',
      messageColor: '#fff',
      backgroundColor: '#28a745',
      message: `We found ${data.totalHits} images.`,
      iconUrl: trueSvg,
      position: 'topRight',
    });

    renderMarkup(photoEl, data.hits);
  } catch (error) {
    console.error(error);
  }

  hideLoader();

  e.target.reset();
});

function showLoader() {
  loaderEl.classList.add('visible');
}

function hideLoader() {
  loaderEl.classList.remove('visible');
}

function loadMoreBtnShow() {
  loadMoreBtn.classList.remove('is-hidden');
}

function loadMoreBtnHide() {
  loadMoreBtn.classList.add('is-hidden');
}

function scroll() {
  const slowlyPhoto = photoEl.firstElementChild;
  const height = slowlyPhoto.getBoundingClientRect().height;
  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
