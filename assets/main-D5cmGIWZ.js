import{a}from"./vendor-2s9xPmg-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();async function l(t,e,s,o){const i="https://food-boutique.b.goit.study/api/products?page=1&limit=9"+"",d={page:t,keyword:e,category:s,[o]:!0};return(await a.get(i,{params:d})).data}//!================================================
async function p(){const s="https://food-boutique.b.goit.study/"+"api/products/categories";return(await a.get(s)).data}//!================================================
async function m(){const s="https://food-boutique.b.goit.study/"+"api/products/popular?limit=5";return(await a.get(s)).data}//!================================================
async function y(t){const o="https://food-boutique.b.goit.study/"+"api/products/discount";return(await a.get(o)).data}const c={categoryList:document.querySelector(".js-products-categories"),productsList:document.querySelector(".js-products__list"),popularList:document.querySelector(".js-popular__list"),discountList:document.querySelector(".js-discounts__list")};function g(t){return`<option value="${t}">${t}</option>`}function _(t){return t.map(g).join("")}//!================================================
const u=t=>{const e=Number(t);return Number.isFinite(e)?`$${e.toFixed(2)}`:"$0.00"},f=(t,e)=>{const s=Number(t),o=Number(e);return!Number.isFinite(s)||!Number.isFinite(o)||o<=0||o>=100?"":`$${(s/(1-o/100)).toFixed(2)}`};function b(t){const e=t.category||"Unknown category",s=t.size||"N/A",o=t.popularity||"—";return`<li class="products__card">
  <img src="${t.img}" alt="${t.name}" loading="lazy" />
  <p class="products__price">${u(t.price)}</p>
  <h3 class="products__name">${t.name}</h3>
  <p class="products__meta">
    <span>Category: <strong>${e}</strong></span>
    <span>Size: <strong>${s}</strong></span>
    <span>Popularity: <strong>${o}</strong></span>
  </p>
  <button class="btn btn--primary products__button" type="button" data-product-id="${t._id}">
    Add to cart
  </button>
</li>`}function P(t){return t.map(b).join("")}//!================================================
function L(t){const e=t.category||"Unknown category",s=t.size||"N/A",o=t.popularity||"—";return`<li class="popular__card">
  <img src="${t.img}" alt="${t.name}" loading="lazy" />
  <div class="popular__info">
    <p class="popular__label">${e} • Size ${s} • Pop ${o}</p>
    <h3 class="popular__name">${t.name}</h3>
    <div class="popular__footer">
      <p class="popular__price">${u(t.price)}</p>
      <button class="btn btn--ghost popular__button" type="button" data-product-id="${t._id}">
        Add to cart
      </button>
    </div>
  </div>
</li>`}function $(t){return t.map(L).join("")}//!================================================
function h(t){const e=Number(t.discount)||0,s=f(t.price,e),o=t.category||"Special offer";return`<li class="discounts__card">
    <div class="discounts__media">
      ${e>0?`<span class="badge discounts__badge">-${e}%</span>`:""}
      <img src="${t.img}" alt="${t.name}" loading="lazy" />
    </div>
    <div class="discounts__info">
      <p class="discounts__label">${o}</p>
      <h3 class="discounts__name">${t.name}</h3>
      <div class="discounts__meta">
        <p class="discounts__price">
          ${u(t.price)}
          ${s?`<span class="discounts__old-price">${s}</span>`:""}
        </p>
        <button class="btn btn--ghost discounts__button" type="button" data-product-id="${t._id}">
          Add to cart
        </button>
      </div>
    </div>
</li>`}function v(t){return t.map(h).join("")}document.addEventListener("DOMContentLoaded",async t=>{const e=await p(),s=_(e);c.categoryList.innerHTML=s});document.addEventListener("DOMContentLoaded",async t=>{const e=await l(),s=P(e.results);c.productsList.innerHTML=s});document.addEventListener("DOMContentLoaded",async()=>{const t=await m(),e=$(t);c.popularList.innerHTML=e});document.addEventListener("DOMContentLoaded",async()=>{const t=await y(),e=v(t);c.discountList.innerHTML=e});
//# sourceMappingURL=main-D5cmGIWZ.js.map
