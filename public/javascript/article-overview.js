import {articles_data, products} from '../javascript/data.js'
function navfunc(){
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
        console.log(searchvalue)
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
        try{
            document.querySelector(".box6").style.display="none";
            document.querySelector(".footer").style.display="none";
        }
        catch{
            console.log(1)
        }
        console.log(allhtml)
        document.querySelector('.productss').innerHTML=allhtml;
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
        try{
            document.querySelector(".box6").style.display="none";
            document.querySelector(".footer").style.display="none";
        }
        catch{
            console.log(1)
        }
        document.querySelector('.productss').innerHTML=allhtml;
    }
navfunc();
const urlParams=new URLSearchParams(window.location.search);
const urlarticleid=urlParams.get("id");
let allhtml=``;
articles_data.forEach((article)=>{
    if (article.id===Number(urlarticleid)){
        // console.log(article)
        allhtml+=`
          <div class="oarticle-para-start">
        <h1>${article.heading}</h1>
        <p>${article.intro}</p>
      </div>`
      article.subheadings.forEach((subheading)=>{
        console.log(subheading)
         allhtml+=`
         <div class="para">
        <h2>${subheading.name}?</h2>
        <p>${subheading.para}</p>
      </div>
         `
      })
      allhtml+=`
        <div class="oarticle-conclusion">
        <h2>Conclusion</h2>
        <p>${article.conclusion}</p>
      </div>
      `;
    }
})
document.querySelector(".box6").innerHTML=allhtml;