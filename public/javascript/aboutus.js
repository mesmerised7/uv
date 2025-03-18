import { products } from "../javascript/data.js";

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
        <p></p>
    </div>
</div>`;
    })
    try{
        document.querySelector(".box2").style.display="none";
    }
    catch{
        console.log(1)
    }
    document.querySelector(".products").innerHTML=allhtml;
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
        <p></p>
    </div>
</div>`;
    })
    try{
        document.querySelector(".box2").style.display="none";
    }
    catch{
        console.log(1)
    }
    document.querySelector(".productss").innerHTML=allhtml;
}
    navfunc();
