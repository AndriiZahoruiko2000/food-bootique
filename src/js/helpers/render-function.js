import { LS_CART_ITEMS_KEY } from './constants';
import { loadFromLs } from './local-storage';

export function createTemplateProductCategory(category) {
  return `<option value="${category}">${category}</option>`;
}

export function createTemplateProductCategories(categories) {
  return categories.map(createTemplateProductCategory).join('');
}
//!================================================

const formatCurrency = value => {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) {
    return '$0.00';
  }
  return `$${numericValue.toFixed(2)}`;
};

const formatDiscountOldPrice = (price, discount) => {
  const numericPrice = Number(price);
  const numericDiscount = Number(discount);
  if (
    !Number.isFinite(numericPrice) ||
    !Number.isFinite(numericDiscount) ||
    numericDiscount <= 0 ||
    numericDiscount >= 100
  ) {
    return '';
  }
  const oldPrice = numericPrice / (1 - numericDiscount / 100);
  return `$${oldPrice.toFixed(2)}`;
};

const createMetaList = (metaItems = [], extraClass = '') => {
  if (!Array.isArray(metaItems) || metaItems.length === 0) {
    return '';
  }

  const className = ['product-meta', extraClass].filter(Boolean).join(' ');
  const rows = metaItems
    .map(
      ({ label, value }) => `
        <div class="product-meta__item">
          <dt>${label}</dt>
          <dd>${value}</dd>
        </div>`
    )
    .join('');

  return `<dl class="${className}">
    ${rows}
  </dl>`;
};

export function createTemplateProduct(product) {
  const category = product.category || 'Unknown category';
  const size = product.size || 'N/A';
  const popularity = product.popularity || '—';
  const metaMarkup = createMetaList(
    [
      { label: 'Category', value: category },
      { label: 'Size', value: size },
      { label: 'Popularity', value: popularity },
    ],
    'products__meta'
  );

  return `<li class="products__card" data-product-id="${product._id}">
  <article class="product-card">
    <div class="product-card__media">
      <img src="${product.img}" alt="${product.name}" loading="lazy" />
      <p class="product-card__price-tag">
        <span class="product-card__price-label">Price</span>
        <span class="product-card__price-value">${formatCurrency(
          product.price
        )}</span>
      </p>
    </div>
    <div class="product-card__body">
      <div class="product-card__eyebrow">
        <span class="pill">${category}</span>
        <span class="product-card__muted">Size ${size}</span>
      </div>
      <h3 class="product-card__title products__name">${product.name}</h3>
      ${metaMarkup}
    </div>
    <div class="product-card__actions">
      <button class="btn btn--primary products__button" type="button" data-id="${
        product._id
      }">
        ${getTextBtn(product._id)}
      </button>
    </div>
  </article>
</li>`;
}

export function createTemplateProducts(products) {
  return products.map(createTemplateProduct).join('');
}

//!================================================

export function createTemplatePopularProduct(product) {
  const category = product.category || 'Unknown category';
  const size = product.size || 'N/A';
  const popularity = product.popularity || '—';
  const metaMarkup = createMetaList([
    { label: 'Category', value: category },
    { label: 'Size', value: size },
    { label: 'Popularity', value: popularity },
  ]);

  return `<li class="popular__card" data-product-id="${product._id}">
  <article class="product-card product-card--compact">
    <div class="product-card__media">
      <img src="${product.img}" alt="${product.name}" loading="lazy" />
    </div>
    <div class="product-card__body popular__info">
      <div class="product-card__eyebrow">
        <span class="pill pill--accent">Popular</span>
        <span class="product-card__muted">${category} • Size ${size}</span>
      </div>
      <h3 class="product-card__title popular__name">${product.name}</h3>
      ${metaMarkup}
      <div class="product-card__footer popular__footer">
        <p class="product-card__price popular__price">${formatCurrency(
          product.price
        )}</p>
        <button class="btn btn--ghost popular__button" type="button" data-product-id="${
          product._id
        }">
          ${getTextBtn(product._id)}
        </button>
      </div>
    </div>
  </article>
</li>`;
}

export function createTemplatePopularProducts(products) {
  return products.map(createTemplatePopularProduct).join('');
}
//!================================================

export function createTemplateDiscountProduct(product) {
  const discount = Number(product.discount) || 0;
  const oldPrice = formatDiscountOldPrice(product.price, discount);
  const category = product.category || 'Special offer';
  return `<li class="discounts__card" data-product-id="${product._id}">
    <article class="product-card product-card--discount">
      <div class="product-card__media">
        ${
          discount > 0
            ? `<span class="badge product-card__badge">-${discount}%</span>`
            : ''
        }
        <img src="${product.img}" alt="${product.name}" loading="lazy" />
      </div>
      <div class="product-card__body discounts__info">
        <div class="product-card__eyebrow">
          <span class="pill">${category}</span>
        </div>
        <h3 class="product-card__title discounts__name">${product.name}</h3>
        <div class="product-card__pricing discounts__meta">
          <p class="product-card__price discounts__price">${formatCurrency(
            product.price
          )}</p>
          ${
            oldPrice
              ? `<p class="product-card__old-price discounts__old-price">${oldPrice}</p>`
              : ''
          }
        </div>
        <div class="product-card__actions">
          <button class="btn btn--ghost discounts__button" type="button" data-product-id="${
            product._id
          }">
            ${getTextBtn(product._id)}
          </button>
        </div>
      </div>
    </article>
</li>`;
}

export function createTemplateDiscountProducts(products) {
  return products.map(createTemplateDiscountProduct).join('');
}

function getTextBtn(productId) {
  const cartIds = loadFromLs(LS_CART_ITEMS_KEY, []);

  if (cartIds.includes(productId)) {
    return 'Remove from cart';
  } else {
    return 'Add to cart';
  }
}
//!================================================

export function createTemplateModal(product) {
  const category = product.category || 'Unknown category';
  const size = product.size || 'N/A';
  const popularity = product.popularity || '—';
  const description = product.description?.trim() ||
    'We are updating the description for this item. Check back soon for more details.';
  const metaMarkup = createMetaList(
    [
      { label: 'Category', value: category },
      { label: 'Size', value: size },
      { label: 'Popularity', value: popularity },
    ],
    'modal-card__meta'
  );

  return `<article class="modal-card">
    <div class="modal-card__media">
      <img src="${product.img}" alt="${product.name}" loading="lazy" />
    </div>
    <div class="modal-card__body">
      <p class="modal-card__price">${formatCurrency(product.price)}</p>
      <h3 class="modal-card__title">${product.name}</h3>
      <p class="modal-card__description">${description}</p>
      ${metaMarkup}
      <button class="btn btn--primary modal-card__button" type="button" data-id="${
        product._id
      }">
        ${getTextBtn(product._id)}
      </button>
    </div>
  </article>`;
}
