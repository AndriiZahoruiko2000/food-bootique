import { getDiscountProducts } from '../api/food-api';
import { refs } from '../helpers/refs';
import { createTemplateDiscountProducts } from '../helpers/render-function';
import { handleModalOpenClick } from './modal';

document.addEventListener('DOMContentLoaded', async () => {
  const response = await getDiscountProducts();
  const markupByDiscount = createTemplateDiscountProducts(response);
  refs.discountList.innerHTML = markupByDiscount;
});

refs.discountList.addEventListener('click', handleModalOpenClick);
