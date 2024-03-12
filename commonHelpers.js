import{a as v,S as L,i as c}from"./assets/vendor-64b55ca9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const C="https://pixabay.com/api/",P="42729601-bb8f3cd30c047f14b18874640";async function h(o,e){const r={key:P,page:e,per_page:15,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await v.get(`${C}/`,{params:r})).data}const S=new L(".photos-list a",{captionsData:"alt",captionDelay:250});function x({webformatURL:o,largeImageURL:e,tags:r,likes:n,views:t,comments:s,downloads:a}){return`
        <li class="photos__item">
          <a
            class="photos__link"
            href="${e}"
          >
            <img
              class="photos__image"
              src="${o}"
              alt="${r}"
              
            />
          </a>
         <span class="photos-info">
            <p class="text-center">Likes <span class="photos-text">${n}</span></p>
            <p class="text-center">Views <span class="photos-text">${t}</span></p> 
            <p class="text-center">Comments <span class="photos-text">${s}</span></p>
            <p class="text-center">Downloads <span class="photos-text">${a}</span></p>
         </span>
        </li>
      `}function _(o){return o.map(x).join("")}function g(o,e){o.insertAdjacentHTML("beforeend",_(e)),S.refresh()}const m="/goit-js-hw-12/assets/false-02b47a0d.svg",E="/goit-js-hw-12/assets/warning-33a8e06d.svg",$="/goit-js-hw-12/assets/true-cc35bcb7.svg",q=document.querySelector(".js-hero-form"),d=document.querySelector(".photos-list"),y=document.querySelector(".loader"),p=document.querySelector(".js-load-more-btn");let i=1,l;const b=15;p.addEventListener("click",async o=>{w(),i+=1;const e=await h(l,i);g(d,e.hits);const r=Math.ceil(e.totalHits/b);i===r&&(f(),c.error({messageColor:"#fff",backgroundColor:"#ef4040",iconUrl:m,message:"We're sorry, but you've reached the end of search results."})),u(),j()});q.addEventListener("submit",async o=>{if(o.preventDefault(),d.innerHTML="",i=1,l=o.target.elements.query.value.trim(),l===""){f(),c.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",iconUrl:E,message:"Please enter a search query",position:"topRight"});return}w();try{const e=await h(l,i);if(e.hits.length===0){u(),f(),c.error({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",iconUrl:m,message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight"}),o.target.reset();return}e.totalHits<b?f():M(),c.success({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#28a745",message:`We found ${e.totalHits} images.`,iconUrl:$,position:"topRight"}),g(d,e.hits)}catch(e){console.error(e)}u(),o.target.reset()});function w(){y.classList.add("visible")}function u(){y.classList.remove("visible")}function M(){p.classList.remove("is-hidden")}function f(){p.classList.add("is-hidden")}function j(){const e=d.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
