import { getPopularProducts } from '../api/food-api';
import { refs } from '../helpers/refs';
import { createTemplatePopularProducts } from '../helpers/render-function';

document.addEventListener('DOMContentLoaded', async () => {
  const response = await getPopularProducts();
  const markupByPopularity = createTemplatePopularProducts(response);
  refs.popularList.innerHTML = markupByPopularity;
});
