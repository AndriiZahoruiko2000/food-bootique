import { getProdcuts, getProdcutsCategories } from '../api/food-api';
import { addToCart } from '../helpers/helpers';
import { saveToLs } from '../helpers/local-storage';
import { refs } from '../helpers/refs';
import {
  createTemplateProductCategories,
  createTemplateProducts,
} from '../helpers/render-function';
import { handleModalOpenClick } from './modal';

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

refs.searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  const formData = new FormData(refs.searchForm);
  const inputName = formData.get('name');
  const categoryName = formData.get('category');
  const sortName = formData.get('sortName');
  const response = await getProdcuts({
    search: inputName,
    category: categoryName,
    sort: sortName,
    page: 1,
  });

  const markupBySearch = createTemplateProducts(response.results);
  refs.productsList.innerHTML = markupBySearch;
});

refs.productsList.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON') return;

  const productId = e.target.dataset.id;
  const hasItem = addToCart(productId);
  console.log(hasItem);
  if (hasItem === true) {
    e.target.textContent = 'Remove from cart';
  } else {
    e.target.textContent = 'Add to cart';
  }
});

refs.productsList.addEventListener('click', handleModalOpenClick);
