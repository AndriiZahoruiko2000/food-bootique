import { getProdcuts, getProdcutsCategories } from '../api/food-api';
import { refs } from '../helpers/refs';
import {
  createTemplateProductCategories,
  createTemplateProducts,
} from '../helpers/render-function';

document.addEventListener('DOMContentLoaded', async e => {
  const response = await getProdcutsCategories();
  const markupByCategory = createTemplateProductCategories(response);
  refs.categoryList.innerHTML = markupByCategory;
});

document.addEventListener('DOMContentLoaded', async e => {
  const response = await getProdcuts();
  const markupByProducts = createTemplateProducts(response.results);
  refs.productsList.innerHTML = markupByProducts;
});
