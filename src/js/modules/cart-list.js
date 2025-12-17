import { getProductByIds } from '../api/food-api';
import { LS_CART_ITEMS_KEY } from '../helpers/constants';
import { loadFromLs } from '../helpers/local-storage';
import { refs } from '../helpers/refs';
import { createTemplateProducts } from '../helpers/render-function';
import { handleModalOpenClick } from './modal';

document.addEventListener('DOMContentLoaded', async e => {
  const productIds = loadFromLs(LS_CART_ITEMS_KEY, []);
  const response = await getProductByIds(productIds);
  console.log(response);
  const markup = createTemplateProducts(response);
  refs.cartProductList.innerHTML = markup;
});

refs.cartProductList.addEventListener('click', handleModalOpenClick);
