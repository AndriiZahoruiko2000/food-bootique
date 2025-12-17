import{a as i,b as $}from"./vendor-11iTKtxO.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function a(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=a(o);fetch(o.href,r)}})();async function k({page:t=1,search:e,category:a,sort:s}={}){const c="https://food-boutique.b.goit.study/api/products"+"",v={page:t,keyword:e,category:a,...s,limit:9};return(await i.get(c,{params:v})).data}//!================================================
async function z(){const a="https://food-boutique.b.goit.study/"+"api/products/categories";return(await i.get(a)).data}//!================================================
async function E(){const a="https://food-boutique.b.goit.study/"+"api/products/popular?limit=5";return(await i.get(a)).data}//!================================================
async function I(t){const s="https://food-boutique.b.goit.study/"+"api/products/discount";return(await i.get(s)).data}//!================================================
async function y(t){const e="https://food-boutique.b.goit.study/",a=`api/products/${t}`,s=e+a;return(await i.get(s)).data}//!================================================
async function M(t){const e=t.map(y);return await Promise.all(e)}const d="LS_CART_ITEMS_KEY";function _(t,e){const a=JSON.stringify(e);localStorage.setItem(t,a)}function f(t,e){const a=localStorage.getItem(t);try{return JSON.parse(a)??e}catch{return a??e}}function P(t){let e=f(d,[]);return console.log(e),e.includes(t)?(e=e.filter(a=>a!==t),_(d,e),!1):(e.push(t),_(d,e),!0)}const R={categoryList:document.querySelector(".js-products-categories"),productsList:document.querySelector(".js-products__list"),popularList:document.querySelector(".js-popular__list"),discountList:document.querySelector(".js-discounts__list"),searchForm:document.querySelector(".js-products__filters"),cartProductList:document.querySelector(".js-cart__list"),modal:document.querySelector(".js-modal"),backdrop:document.querySelector(".js-backdrop")};function h(t){return`<option value="${t}">${t}</option>`}function U(t){return t.map(h).join("")}//!================================================
const l=t=>{const e=Number(t);return Number.isFinite(e)?`$${e.toFixed(2)}`:"$0.00"},L=(t,e)=>{const a=Number(t),s=Number(e);return!Number.isFinite(a)||!Number.isFinite(s)||s<=0||s>=100?"":`$${(a/(1-s/100)).toFixed(2)}`},p=(t=[],e="")=>{if(!Array.isArray(t)||t.length===0)return"";const a=["product-meta",e].filter(Boolean).join(" "),s=t.map(({label:o,value:r})=>`
        <div class="product-meta__item">
          <dt>${o}</dt>
          <dd>${r}</dd>
        </div>`).join("");return`<dl class="${a}">
    ${s}
  </dl>`};function S(t){const e=t.category||"Unknown category",a=t.size||"N/A",s=t.popularity||"—",o=p([{label:"Category",value:e},{label:"Size",value:a},{label:"Popularity",value:s}],"products__meta");return`<li class="products__card" data-product-id="${t._id}">
  <article class="product-card">
    <div class="product-card__media">
      <img src="${t.img}" alt="${t.name}" loading="lazy" />
      <p class="product-card__price-tag">
        <span class="product-card__price-label">Price</span>
        <span class="product-card__price-value">${l(t.price)}</span>
      </p>
    </div>
    <div class="product-card__body">
      <div class="product-card__eyebrow">
        <span class="pill">${e}</span>
        <span class="product-card__muted">Size ${a}</span>
      </div>
      <h3 class="product-card__title products__name">${t.name}</h3>
      ${o}
    </div>
    <div class="product-card__actions">
      <button class="btn btn--primary products__button" type="button" data-id="${t._id}">
        ${u(t._id)}
      </button>
    </div>
  </article>
</li>`}function A(t){return t.map(S).join("")}//!================================================
function w(t){const e=t.category||"Unknown category",a=t.size||"N/A",s=t.popularity||"—",o=p([{label:"Category",value:e},{label:"Size",value:a},{label:"Popularity",value:s}]);return`<li class="popular__card" data-product-id="${t._id}">
  <article class="product-card product-card--compact">
    <div class="product-card__media">
      <img src="${t.img}" alt="${t.name}" loading="lazy" />
    </div>
    <div class="product-card__body popular__info">
      <div class="product-card__eyebrow">
        <span class="pill pill--accent">Popular</span>
        <span class="product-card__muted">${e} • Size ${a}</span>
      </div>
      <h3 class="product-card__title popular__name">${t.name}</h3>
      ${o}
      <div class="product-card__footer popular__footer">
        <p class="product-card__price popular__price">${l(t.price)}</p>
        <button class="btn btn--ghost popular__button" type="button" data-product-id="${t._id}">
          ${u(t._id)}
        </button>
      </div>
    </div>
  </article>
</li>`}function O(t){return t.map(w).join("")}//!================================================
function T(t){const e=Number(t.discount)||0,a=L(t.price,e),s=t.category||"Special offer";return`<li class="discounts__card" data-product-id="${t._id}">
    <article class="product-card product-card--discount">
      <div class="product-card__media">
        ${e>0?`<span class="badge product-card__badge">-${e}%</span>`:""}
        <img src="${t.img}" alt="${t.name}" loading="lazy" />
      </div>
      <div class="product-card__body discounts__info">
        <div class="product-card__eyebrow">
          <span class="pill">${s}</span>
        </div>
        <h3 class="product-card__title discounts__name">${t.name}</h3>
        <div class="product-card__pricing discounts__meta">
          <p class="product-card__price discounts__price">${l(t.price)}</p>
          ${a?`<p class="product-card__old-price discounts__old-price">${a}</p>`:""}
        </div>
        <div class="product-card__actions">
          <button class="btn btn--ghost discounts__button" type="button" data-product-id="${t._id}">
            ${u(t._id)}
          </button>
        </div>
      </div>
    </article>
</li>`}function D(t){return t.map(T).join("")}function u(t){return f(d,[]).includes(t)?"Remove from cart":"Add to cart"}//!================================================
function j(t){var c;const e=t.category||"Unknown category",a=t.size||"N/A",s=t.popularity||"—",o=((c=t.description)==null?void 0:c.trim())||"We are updating the description for this item. Check back soon for more details.",r=p([{label:"Category",value:e},{label:"Size",value:a},{label:"Popularity",value:s}],"modal-card__meta");return`<article class="modal-card">
    <div class="modal-card__media">
      <img src="${t.img}" alt="${t.name}" loading="lazy" />
    </div>
    <div class="modal-card__body">
      <p class="modal-card__price">${l(t.price)}</p>
      <h3 class="modal-card__title">${t.name}</h3>
      <p class="modal-card__description">${o}</p>
      ${r}
      <button class="btn btn--primary modal-card__button" type="button" data-id="${t._id}">
        ${u(t._id)}
      </button>
    </div>
  </article>`}//!================================================
let n;async function x(t){if(t.target===t.currentTarget||t.target.closest("button"))return;const e=t.target.closest("li");if(!e)return;const a=e.dataset.productId;if(!a)return;const s=await y(a),o=j(s);q(o)}function q(t){n=$.create(`
    <div class="modal">
        <button class="modal__close" type="button" aria-label="Close dialog">
          &times;
        </button>
        ${t}
    </div>
`,{onShow:e=>{document.body.classList.add("is-modal-open"),e.element().addEventListener("click",m),document.addEventListener("keydown",b)},onClose:e=>{document.body.classList.remove("is-modal-open"),e.element().removeEventListener("click",m),document.removeEventListener("keydown",b)}}),n.show()}function m(t){if(t.target.closest(".modal__close")){g();return}const e=t.target.closest(".modal-card__button");if(!e)return;const a=e.dataset.id,o=P(a)?"Remove from cart":"Add to cart";document.querySelectorAll(`button[data-id="${a}"]`).forEach(r=>{r.textContent=o})}function b(t){t.key==="Escape"&&g()}function g(){n==null||n.close()}export{d as L,k as a,A as b,U as c,P as d,E as e,O as f,z as g,x as h,I as i,D as j,M as k,f as l,R as r};
//# sourceMappingURL=modal-CpU8CalW.js.map
