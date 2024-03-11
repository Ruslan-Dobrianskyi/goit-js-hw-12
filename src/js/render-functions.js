// Описаний у документації
import SimpleLightbox from 'simplelightbox';
export const lightbox = new SimpleLightbox('.photos-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function renderPhoto({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
        <li class="photos__item">
          <a
            class="photos__link"
            href="${largeImageURL}"
          >
            <img
              class="photos__image"
              src="${webformatURL}"
              alt="${tags}"
              
            />
          </a>
         <span class="photos-info">
            <p class="text-center">Likes <span class="photos-text">${likes}</span></p>
            <p class="text-center">Views <span class="photos-text">${views}</span></p> 
            <p class="text-center">Comments <span class="photos-text">${comments}</span></p>
            <p class="text-center">Downloads <span class="photos-text">${downloads}</span></p>
         </span>
        </li>
      `;
}

function renderPhotos(arr) {
  return arr.map(renderPhoto).join('');
}

export function renderMarkup(photoEl, arr) {
  photoEl.insertAdjacentHTML('beforeend', renderPhotos(arr));
}

export function refreshLightbox() {
  lightbox.refresh();
}
