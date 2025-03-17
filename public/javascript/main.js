import { products } from "./data.js";
let allhtml=``;
function dojob(){
    products.slice(0,5).forEach((product)=>{
        allhtml+=`<div class="contentitem">
                           <div  >
                           <img class="contentimg" src="${product.image}" alt="">
                       </div>
                       <div class="contentname">
                           <a href="">${product.name}</a>
                       </div>
                       </div>`;
       })
       document.querySelector('.content-items').innerHTML=allhtml;
       const slides=document.querySelectorAll('.slides img');
       document.querySelector('.prev').addEventListener("click",()=>{
           prev();
       });
       document.querySelector('.next').addEventListener("click",()=>{
           next();
       });
       let slideindex=0;
       let intervalid=null;
       console.log(slides)
       document.addEventListener("DOMContentLoaded",initializer)
       function initializer(){
           if (slides=>0){
               slides[slideindex].classList.add('display-slide');
               intervalid=setInterval(next,5000);
               console.log(intervalid);
           }
       
       }
       function showslide(index){
           if(index>=slides.length){
               slideindex=0;
           }
           else if(index<0){
               slideindex=slides.length - 1;
           }
       slides.forEach((slide)=>{
          slide.classList.remove("display-slide");
       });
       slides[slideindex].classList.add("display-slide");
       }
       function prev(index){
           // clearInterval(intervalid);
          slideindex--;
          showslide(slideindex);
       }
       function next(index){
          slideindex++;
          showslide(slideindex);
       }
}
dojob()
export function navfunc(){
let mobilenavs=document.querySelectorAll(".mobile-nav");
mobilenavs.forEach((mobilenav)=>{
    mobilenav.addEventListener("click",()=>{
    mobilenavbar()
})
})
function mobilenavbar(){
    let sidebar=document.querySelector('.sidebar');
    if (sidebar.style.display==='flex'){
          sidebar.style.display='none';
    }
    else{sidebar.style.display='flex';}
}
}
let navsearch=document.querySelector(".searchbtn");
    navsearch.addEventListener('click',()=>{
        searchfeature()
    })
    let navsearchinput=document.querySelector(".search");
    navsearchinput.addEventListener('keydown',(event)=>{
        if (event.key==="Enter"){
            searchfeature()
        }
        
    })
    let sidesearch=document.querySelector(".side-searchbtn");
    sidesearch.addEventListener('click',()=>{
        side_searchfeature()
    })
    let sidesearchinput=document.querySelector(".side-search");
    sidesearchinput.addEventListener('keypress',(event)=>{
        if (event.key==="Enter"){
            side_searchfeature()
        }
        
    })
function side_searchfeature(){
    let allhtml=``;
    let l=[]
    let searchvalue=document.querySelector(".side-search").value
    products.forEach((product)=>{
         if (product.name.toLowerCase()===searchvalue.toLowerCase()){
            l.push(product)
         }
    })
    l.forEach((product)=>{
        allhtml+=`<div class="product">
    <div class="product-img">
        <img src="${product.image}" alt="">
    </div>
    <div class="product-details">
        <h4>${product.name}</h4>
        <p>${product.description}</p>
    </div>
</div>`;
    })
    document.querySelector(".box").style.display="none";
    console.log(allhtml)
    document.querySelector('.products').innerHTML=allhtml;
}

function searchfeature(){
    let allhtml=``;
    let l=[]
    let searchvalue=document.querySelector(".search").value
    products.forEach((product)=>{
         if (product.name.toLowerCase()===searchvalue.toLowerCase()){
            l.push(product)
         }
    })
    l.forEach((product)=>{
        allhtml+=`<div class="product">
    <div class="product-img">
        <img src="${product.image}" alt="">
    </div>
    <div class="product-details">
        <h4>${product.name}</h4>
        <p>${product.description}</p>
    </div>
</div>`;
    })
    document.querySelector(".box").style.display="none";
    console.log(allhtml)
    document.querySelector('.products').innerHTML=allhtml;
}

navfunc();