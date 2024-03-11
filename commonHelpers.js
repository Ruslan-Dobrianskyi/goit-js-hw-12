import{a as L,S,i as c}from"./assets/vendor-64b55ca9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const P="https://pixabay.com/api/",C="42729601-bb8f3cd30c047f14b18874640";async function g(o,e){const r={key:C,page:e,per_page:15,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await L.get(`${P}/`,{params:r})).data}const x=new S(".photos-list a",{captionsData:"alt",captionDelay:250});function _({webformatURL:o,largeImageURL:e,tags:r,likes:a,views:t,comments:s,downloads:n}){return`
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
            <p class="text-center">Likes <span class="photos-text">${a}</span></p>
            <p class="text-center">Views <span class="photos-text">${t}</span></p> 
            <p class="text-center">Comments <span class="photos-text">${s}</span></p>
            <p class="text-center">Downloads <span class="photos-text">${n}</span></p>
         </span>
        </li>
      `}function q(o){return o.map(_).join("")}function m(o,e){o.insertAdjacentHTML("beforeend",q(e)),x.refresh()}const y="/goit-js-hw-12/assets/false-02b47a0d.svg",$="/goit-js-hw-12/assets/warning-33a8e06d.svg",E="/goit-js-hw-12/assets/true-cc35bcb7.svg",M=document.querySelector(".js-hero-form"),u=document.querySelector(".photos-list"),b=document.querySelector(".loader"),p=document.querySelector(".js-load-more-btn");let i=1,l;const w=15;let h;p.addEventListener("click",async o=>{v(),i+=1;const e=await g(l,i);m(u,e.hits);const r=Math.ceil(e.totalHits/w);i===r&&(f(),c.error({messageColor:"#fff",backgroundColor:"#ef4040",iconUrl:y,message:"We're sorry, but you've reached the end of search results."})),d(),h=document.querySelector(".photos__image").getBoundingClientRect().height,window.scrollBy({top:2*h,behavior:"smooth"})});M.addEventListener("submit",async o=>{if(o.preventDefault(),u.innerHTML="",i=1,l=o.target.elements.query.value.trim(),l===""){f(),c.warning({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ffa000",iconUrl:$,message:"Please enter a search query",position:"topRight"});return}v();try{const e=await g(l,i);if(e.hits.length===0){d(),f(),c.error({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#ef4040",iconUrl:y,message:"Sorry, there are no images matching<br> your search query. Please try again!",position:"topRight"}),o.target.reset();return}e.totalHits<w?f():j(),c.success({titleColor:"#fff",messageColor:"#fff",backgroundColor:"#28a745",message:`We found ${e.totalHits} images.`,iconUrl:E,position:"topRight"}),m(u,e.hits)}catch(e){console.error(e)}d(),o.target.reset()});function v(){b.classList.add("visible")}function d(){b.classList.remove("visible")}function j(){p.classList.remove("is-hidden")}function f(){p.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
