fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(json=>{let items = json
    
    let productdiv = document.getElementById("mydiv")
    for(let i=0; i<items.length; i++)
    {
        let newdiv = document.createElement("div");
        newdiv.classList.add("col-12")
        newdiv.classList.add("col-sm-6")
        newdiv.classList.add("col-md-4")
        newdiv.classList.add("col-lg-4")
        newdiv.classList.add("col-xl-3")
        newdiv.classList.add("col-xxl-3")
        newdiv.classList.add("p-card")
        newdiv.innerHTML=`<div class="card" >
    
    <img src="${items[i].image}" class="card-img-top item-image" alt="p-image">
    <div class="card-body">
      <h5 class="card-title">${items[i].title}</h5>
      <p class = "text-success"> $${items[i].price}</p>
      <p class="card-text description">${items[i].description}</p>
      <a href="/productDetails.html" class="btn btn-warning">View Product</a>
      <a href="#" class="btn btn-primary">Add to cart</a>
    </div>
</div>
</div>`
productdiv.appendChild(newdiv)
        
    }


})






