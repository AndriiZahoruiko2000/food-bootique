// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const loader = document.querySelector('.loader');
const list = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 1000,
});

export function showLoader() {
  loader.classList.remove('hidden');
}
export function hideLoader() {
  loader.classList.add('hidden');
}

function createTemplateImage(image) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
      </a>

      <ul class="image-params">
        <li class="image-params-item">
          <span class="label">Likes</span>
          <span class="value">${image.likes}</span>
        </li>

        <li class="image-params-item">
          <span class="label">Views</span>
          <span class="value">${image.views}</span>
        </li>

        <li class="image-params-item">
          <span class="label">Comments</span>
          <span class="value">${image.comments}</span>
        </li>

        <li class="image-params-item">
          <span class="label">Downloads</span>
          <span class="value">${image.downloads}</span>
        </li>
      </ul>
    </li>
  `;
}

function createTemplateImages(images) {
  return images.map(createTemplateImage).join('');
}

export function createGallery(images) {
  const markup = createTemplateImages(images);
  list.innerHTML = markup;
  lightbox.refresh();
}
export function clearGallery() {
  list.innerHTML = '';
}
