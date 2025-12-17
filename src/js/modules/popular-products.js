import { getPopularProducts } from '../api/food-api';
import { refs } from '../helpers/refs';
import { createTemplatePopularProducts } from '../helpers/render-function';
import { handleModalOpenClick } from './modal';

document.addEventListener('DOMContentLoaded', async () => {
  const response = await getPopularProducts();
  const markupByPopularity = createTemplatePopularProducts(response);
  refs.popularList.innerHTML = markupByPopularity;
});

refs.popularList.addEventListener('click', handleModalOpenClick);
