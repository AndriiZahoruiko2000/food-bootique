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

export function createTemplateProduct(product) {
  const category = product.category || 'Unknown category';
  const size = product.size || 'N/A';
  const popularity = product.popularity || '—';
  return `<li class="products__card">
  <img src="${product.img}" alt="${product.name}" loading="lazy" />
  <p class="products__price">${formatCurrency(product.price)}</p>
  <h3 class="products__name">${product.name}</h3>
  <p class="products__meta">
    <span>Category: <strong>${category}</strong></span>
    <span>Size: <strong>${size}</strong></span>
    <span>Popularity: <strong>${popularity}</strong></span>
  </p>
  <button class="btn btn--primary products__button" type="button" data-product-id="${product._id}">
    Add to cart
  </button>
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
  return `<li class="popular__card">
  <img src="${product.img}" alt="${product.name}" loading="lazy" />
  <div class="popular__info">
    <p class="popular__label">${category} • Size ${size} • Pop ${popularity}</p>
    <h3 class="popular__name">${product.name}</h3>
    <div class="popular__footer">
      <p class="popular__price">${formatCurrency(product.price)}</p>
      <button class="btn btn--ghost popular__button" type="button" data-product-id="${product._id}">
        Add to cart
      </button>
    </div>
  </div>
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
  return `<li class="discounts__card">
    <div class="discounts__media">
      ${discount > 0 ? `<span class="badge discounts__badge">-${discount}%</span>` : ''}
      <img src="${product.img}" alt="${product.name}" loading="lazy" />
    </div>
    <div class="discounts__info">
      <p class="discounts__label">${category}</p>
      <h3 class="discounts__name">${product.name}</h3>
      <div class="discounts__meta">
        <p class="discounts__price">
          ${formatCurrency(product.price)}
          ${oldPrice ? `<span class="discounts__old-price">${oldPrice}</span>` : ''}
        </p>
        <button class="btn btn--ghost discounts__button" type="button" data-product-id="${product._id}">
          Add to cart
        </button>
      </div>
    </div>
</li>`;
}

export function createTemplateDiscountProducts(products) {
  return products.map(createTemplateDiscountProduct).join('');
}
