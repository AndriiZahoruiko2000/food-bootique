// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const form = document.querySelector('.js-search-photo');

//!================================================

form.addEventListener('submit', e => {
  e.preventDefault();

  clearGallery();
  showLoader();

  const formData = new FormData(form);
  const input = formData.get('query');

  if (!input.trim()) {
    hideLoader();
    return iziToast.warning({
      position: 'topRight',
      message: 'Please enter something to search!',
    });
  }

  getImagesByQuery(input)
    .then(response => {
      if (response.totalHits === 0) {
        return iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      createGallery(response.hits);
    })
    .catch(error => {
      iziToast.error({
        position: 'topRight',
        message: 'Something went wrong',
      });
    })
    .finally(hideLoader);

  form.reset();
});

//!================================================
hideLoader();
