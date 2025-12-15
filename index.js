import{a as p,S as f,i}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();async function d(e){const o="https://pixabay.com/api/",s={key:"53285847-f778133efdcf1a85bc0bbba3e",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(o,{params:s})).data}const u=document.querySelector(".loader"),m=document.querySelector(".gallery");let g=new f(".gallery a",{captionsData:"alt",captionDelay:1e3});function h(){u.classList.remove("hidden")}function c(){u.classList.add("hidden")}function y(e){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
      </a>

      <ul class="image-params">
        <li class="image-params-item">
          <span class="label">Likes</span>
          <span class="value">${e.likes}</span>
        </li>

        <li class="image-params-item">
          <span class="label">Views</span>
          <span class="value">${e.views}</span>
        </li>

        <li class="image-params-item">
          <span class="label">Comments</span>
          <span class="value">${e.comments}</span>
        </li>

        <li class="image-params-item">
          <span class="label">Downloads</span>
          <span class="value">${e.downloads}</span>
        </li>
      </ul>
    </li>
  `}function b(e){return e.map(y).join("")}function L(e){const r=b(e);m.innerHTML=r,g.refresh()}function w(){m.innerHTML=""}const l=document.querySelector(".js-search-photo");//!================================================
l.addEventListener("submit",e=>{e.preventDefault(),w(),h();const o=new FormData(l).get("query");if(!o.trim())return c(),i.warning({position:"topRight",message:"Please enter something to search!"});d(o).then(s=>{if(s.totalHits===0)return i.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});L(s.hits)}).catch(s=>{i.error({position:"topRight",message:"Something went wrong"})}).finally(c),l.reset()});//!================================================
c();
//# sourceMappingURL=index.js.map
