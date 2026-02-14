import { getPopularProducts } from '../api/food-api';
import { refs } from '../helpers/refs';
import { createTemplatePopularProducts } from '../helpers/render-function';
import { handleModalOpenClick } from './modal';

document.addEventListener('DOMContentLoaded', async () => {
  const response = await getPopularProducts();
  const markupByPopularity = createTemplatePopularProducts(response.slice(0, 3));
  refs.popularList.innerHTML = markupByPopularity;
});

refs.popularList.addEventListener('click', handleModalOpenClick);
