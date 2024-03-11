import{S as f,i}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",u="42729601-bb8f3cd30c047f14b18874640";function h(o){const s=new URLSearchParams({key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}/?${s}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const d=new f(".photos-list a",{captionsData:"alt",captionDelay:250});function m({webformatURL:o,largeImageURL:s,tags:r,likes:a,views:e,comments:t,downloads:n}){return`
        <li class="photos__item">
          <a
            class="photos__link"
            href="${s}"
          >
            <img
              class="photos__image"
              src="${o}"
              alt="${r}"
              
            />
          </a>
         <span class="photos-info">
            <p class="text-center">Likes <span class="photos-text">${a}</span></p>
            <p class="text-center">Views <span class="photos-text">${e}</span></p> 
            <p class="text-center">Comments <span class="photos-text">${t}</span></p>
            <p class="text-center">Downloads <span class="photos-text">${n}</span></p>
         </span>
        </li>
      `}function g(o){return o.map(m).join("")}function y(o,s){o.insertAdjacentHTML("beforeend",g(s))}function b(){d.refresh()}const L="/goit-js-hw-12/assets/false-02b47a0d.svg",w="/goit-js-hw-12/assets/warning-33a8e06d.svg",v=document.querySelector(".js-hero-form"),c=document.querySelector(".photos-list"),l=document.querySelector(".loader");v.addEventListener("submit",o=>{o.preventDefault(),c.innerHTML="";const s=o.target.elements.query.value.trim();if(s===""){i.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",iconUrl:w,message:"Please enter a search query",position:"topRight"});return}x(),h(s).then(r=>{if(r.hits.length===0){i.error({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",iconUrl:L,message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight"});return}y(c,r.hits),b()}).catch(r=>{console.error(r)}).finally(()=>{S()}),o.target.reset()});function x(){l.classList.add("visible")}function S(){l.classList.remove("visible")}
//# sourceMappingURL=commonHelpers.js.map
