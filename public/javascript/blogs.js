import {products,articles_data} from '../javascript/data.js'
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
            document.querySelector(".box5").style.display="none";
            document.querySelector(".blog-page-nav").style.display="none";
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
            document.querySelector(".box5").style.display="none";
            document.querySelector(".blog-page-nav").style.display="none";
            document.querySelector(".footer").style.display="none";
        }
        catch{
            console.log(1)
        }
        document.querySelector('.productss').innerHTML=allhtml;
    }
navfunc();
let start=0;
let end=9;
let blognavnumber=1
function showblogarticles(){
    let allhtml=``;
    // <img class="article-img" src="https://gears-manufacturers.in/blog/wp-content/uploads/2025/02/Exploring-the-Durability-and-Longevity-of-Helical-Gears-in-Heavy-Duty-Applications-9.jpg" alt="">
    articles_data.slice(start,end).forEach((article)=>{
      allhtml+=`<div class="blogs-article">
                   <div class="article-img">
  
                   </div>
                    <div class="article-details">
                        <div class="article-name"><a href="../html/article-overview.html?id=${article.id}"><h3>${article.heading}</h3></a></div>
                    <div class="article-description"> <p>${article.intro}</p>
                    </div>
                    <div class="article-btn" data-articleid=${article.id} "><a href="../html/article-overview.html?id=${article.id}"><button>Continue Reading</button></a></div>
                    </div>
            </div>`;
    })
    document.querySelector(".box5").innerHTML=allhtml;
}
showblogarticles()
document.querySelector(".blog-next").addEventListener("click",()=>{
    start+=9;
    end+=9;
    if (end>articles_data.length){
        start=0;
        end=9;
        blognavnumber=1;
        showblogarticles()
        document.querySelector(".blog-nav-number").innerHTML=blognavnumber
       
    }
    else{
        showblogarticles()
        blognavnumber+=1
        document.querySelector(".blog-nav-number").innerHTML=blognavnumber
    }
   
    
})
document.querySelector(".blog-prev").addEventListener("click",()=>{
    start-=9;
    end-=9;
    console.log(blognavnumber)
    if (end<0 || start<=0){
        start=0;
        end=9;
        blognavnumber=1;
        document.querySelector(".blog-nav-number").innerHTML=blognavnumber
        showblogarticles()
    }
    else{
        showblogarticles()
        blognavnumber-=1;
        console.log(blognavnumber)
        document.querySelector(".blog-nav-number").innerHTML=blognavnumber
    }
    
    
})
// const articlebtns=document.querySelectorAll(".article-btn");
// articlebtns.forEach((btn)=>{
//     btn.addEventListener("click",()=>{
//         let btnid=btn.dataset.articleid;
//         taketoarticle(btnid)
//     })
// })
// function taketoarticle(btnid){
    
// }