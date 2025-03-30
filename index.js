var w=Object.defineProperty;var C=(t,e,a)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var p=(t,e,a)=>C(t,typeof e!="symbol"?e+"":e,a);import{i as f,a as g,S as F}from"./assets/vendor-B-D547pe.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const o={form:document.querySelector(".form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadMore:document.querySelector(".load-more")};f.settings({timeout:3e3,transitionIn:"flipInX",transitionOut:"flipOutX",iconColor:"#FFF",color:"#FFF",close:!0,position:"topRight",messageColor:"#FFF",messageSize:"16px",progressBar:!0,progressBarEasing:"linear"});g.defaults.baseURL="https://pixabay.com/api";async function y({query:t,page:e=1,perPage:a=10}){return(await g.get("/",{params:{key:"34066974-b9ed0af14756539ad49c5eed8",q:t,page:e,per_page:a}})).data}const D=new F(".gallery-link",{captionsData:"alt",captionDelay:250}),v=t=>{const e=({largeImageURL:n,webformatURL:s,tags:r,likes:d,views:L,comments:S,downloads:x})=>`
      <li class="card card-set-item">
            <a href="${n}" class="gallery-link" href="#">
              <div class="photo-box">
                <img
                  src="${s}"
                  alt="${r}"
                  class="photo"
                />
              </div>
              <div class="capture">
                <div class="item"><span class="accent">Likes</span>${d}</div>
                <div class="item"><span class="accent">Views</span>${L}</div>
                <div class="item"><span class="accent">Comments</span>${S}</div>
                <div class="item">
                  <span class="accent">Downloads</span>${x}
                </div>
              </div>
            </a>
          </li>
      `,a=t.map(n=>e(n)).join("");o.gallery.insertAdjacentHTML("beforeend",a),D.refresh()},u=class u{constructor(e){this.button=e,this.prevText=""}disable(){this.button.disabled=!0,this.prevText=this.button.textContent,this.button.textContent="Loading..."}enable(){this.button.disabled=!1,this.button.textContent=this.prevText||"Load more"}hide(){this.button.classList.add(u.HIDDEN_CLASS),this.prevText=""}show(){this.button.classList.remove(u.HIDDEN_CLASS)}};p(u,"HIDDEN_CLASS","is-hidden");let h=u;const O={progressBarColor:"#B51B1B",backgroundColor:"#EF4040",maxWidth:"432px"},i=new h(o.loadMore);let m=1;const b=20;let l="";const c=t=>{f.show({...O,message:t})};async function $(t){if(t.preventDefault(),o.gallery.innerHTML="",l=o.form.elements.search.value.trim(),!l){c("Oops! Looks like you forgot to enter something.");return}o.loader.classList.remove("visually-hidden"),console.log(o.form.elements.search.value.trim()),o.form.elements.search.value="",console.log(o.form.elements.search.value.trim());try{console.log(`input is ${l}`);const e=await y({query:l});if(e.hits.length===0){c("Sorry, there are no images matching your search query. Please try again!"),i.hide();return}else e.hits.length<=b&&i.hide();v(e.hits),i.show(),i.enable()}catch(e){c(`Sorry, something went wrong: ${e}`)}finally{o.loader.classList.add("visually-hidden"),m=1}}async function q(){if(!l){c("No search query found. Please try again!");return}m+=1,i.disable();try{const t=await y({query:l,page:m,perPage:b});if(!t||t.hits.length===0){i.hide(),i.disable(),c("We're sorry, but you've reached the end of search results.");return}v(t.hits),i.enable()}catch(t){c(`Error loading more images: ${t}`)}}o.form.addEventListener("submit",$);o.loadMore.addEventListener("click",q);
//# sourceMappingURL=index.js.map
