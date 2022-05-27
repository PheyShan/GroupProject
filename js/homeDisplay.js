function displayHome(){
    
    
    let displayFeature = "";
    for(let i = 0; i < 4 ; i ++){
        displayFeature += `
        <div class="product text-center" id="productId${productList.products[i].id}" data-bs-toggle="modal" data-bs-target="#product-modal">
        <img src="${productList.products[i].img}" style="width:300px; height:300px; margin-bottom: 10px;">
        <h2>${productList.products[i].name}</h2>
    </div>`;

        
    }
    document.querySelector("#homeProductList").innerHTML = displayFeature;

    let carouselProducts = "";

    
        for(i=0; i < 4; i++){
      
        
                if (i == 0) {
                    carouselProducts +=`<div class="carousel-item active">
                    <div class="product" id="carouselFeatureId${productList.products[i].id}" data-name="p-${i+1}" data-bs-toggle="modal" data-bs-target="#product-modal">
                        <img src="${productList.products[i].img}" class="d-block w-100" alt="..." style="object-fit:contain">
                    </div>
                </div>`;
                
            }

            else {
                carouselProducts +=`<div class="carousel-item">
                <div class="product" id="carouselFeatureId${productList.products[i].id}" data-name="p-${i+1}" data-bs-toggle="modal" data-bs-target="#product-modal">
                    <img src="${productList.products[i].img}" class="d-block w-100" alt="..." style="object-fit:contain">
                </div>
            </div>`;
            }
        
        
        };
    
    
    document.querySelector("#homeCarousel").innerHTML = carouselProducts;
    
       for(i = 0; i < 4; i++){

        assignFeatureListener(productList.products[i]);
       

    }    

}

function assignFeatureListener(product){
    let qSelector = product.id;
    document.querySelector(`#productId${qSelector}`).addEventListener('click',() => displayProductDetail(productList.products[qSelector-1]));

    document.querySelector(`#carouselFeatureId${qSelector}`).addEventListener('click',() => displayProductDetail(productList.products[qSelector-1]));
}