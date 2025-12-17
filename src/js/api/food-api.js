import axios from 'axios';

export async function getProdcuts({ page = 1, search, category, sort } = {}) {
  const baseURL = 'https://food-boutique.b.goit.study/api/products';
  const endPoint = '';
  const url = baseURL + endPoint;

  const params = {
    page,
    keyword: search,
    category,
    ...sort,
    limit: 9,
  };

  const res = await axios.get(url, { params });
  return res.data;
}

//!================================================

export async function getProdcutsCategories() {
  const baseURL = 'https://food-boutique.b.goit.study/';
  const endPoint = 'api/products/categories';
  const url = baseURL + endPoint;

  const res = await axios.get(url);
  return res.data;
}
//!================================================

export async function getPopularProducts() {
  const baseURL = 'https://food-boutique.b.goit.study/';
  const endPoint = 'api/products/popular?limit=5';
  const url = baseURL + endPoint;

  const res = await axios.get(url);
  return res.data;
}
//!================================================

export async function getDiscountProducts(query) {
  const baseURL = 'https://food-boutique.b.goit.study/';
  const endPoint = 'api/products/discount';
  const url = baseURL + endPoint;

  const res = await axios.get(url);
  return res.data;
}

//!================================================

export async function getProductById(id) {
  const baseURL = 'https://food-boutique.b.goit.study/';
  const endPoint = `api/products/${id}`;
  const url = baseURL + endPoint;

  const res = await axios.get(url);
  return res.data;
}
//!================================================

export async function getProductByIds(ids) {
  const promises = ids.map(getProductById);
  const result = await Promise.all(promises);
  return result;
}
