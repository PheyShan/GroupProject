class ProductController {
    constructor(currentId = 0){
        this.currentId = currentId;
        this.products = [];

        this.loadProductsFromLocalStorage();
    }

    addProduct(product=null){
        if (product){
            let currentDate = new Date();
            const newProduct = {
                id: (this.products.length + 1),
                name: product.name,
                img: product.img,
                price: product.price,
                category: product.category,
                subCategory: product.subCategory,
                description: product.description,
                sizeArr: product.sizeArr,
                colorArr: product.colorArr,
                rating: [5,0],
                createdAt: `${currentDate.getDate()}/${currentDate.getMonth + 1}/${currentDate.getFullYear()}`
            }
            this.products.push(newProduct);
        }
    }
    
    addProductCard(product, qSelect) {
        const doc = document.querySelector(qSelect);
        const codeCard = `
        <div class="col-12 col-md-6 cardCat_${product.category} cardSubCat_${product.subCategory}">
            <div id="productCard${product.id}" class="card" data-bs-toggle="modal" data-bs-target="#product-modal">
                <div class="row g-0">
                    <div class="col-6 border-end rounded-start p-1 d-flex justify-content-center align-products-center">
                        <img class="shop-card-img" src="${product.img}" alt="Card_Image" />
                    </div>
                    <div class="col-6">
                        <div class="card-body d-flex flex-column justify-content-center h-100">
                            <h5 class="card-title mb-3">${product.name}</h5>
                            <p class="card-text mb-2">Rating: ${product.rating[0]}</p>
                            <p class="card-text">Price: ${product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        doc.innerHTML += codeCard;
    }

    assignProductListeners(productId) {
        if (typeof productId  == 'number') {
            document.querySelector(`#productCard${productId}`).addEventListener('click',() => displayProductDetail(this.products[(productId-1)]));
        }
        else if (Array.isArray(productId)) {
            productId.forEach(product => {
                document.querySelector(`#productCard${product}`).addEventListener('click',() => displayProductDetail(this.products[(product-1)]));
            });
        }
        else {
            if (document.querySelector(`#productCard1`)) {
                let lastCard  = 0;
                for(let i = 1;lastCard == 0;i++){
                    if(!document.querySelector(`#productCard${i}`)){
                        lastCard = i;
                    }
                }
                for(let i = 1; i < lastCard; i++ ){
                    document.querySelector(`#productCard${i}`).addEventListener('click',() => displayProductDetail(this.products[(i-1)]));
                }
            }
            else {console.log('Error! No products detected. Please enter product card IDs as an Array.');}
        }
    }



    addProductsToLocalStorage() {
        localStorage.setItem("products", JSON.stringify(this.products));
    }

    loadProductsFromLocalStorage() {
        const localStoredProducts = localStorage.getItem("products");
        if(localStoredProducts) {
            const loadedProducts = JSON.parse(localStoredProducts);
            this.products = loadedProducts;
        }
    }

    addProductsFromLocalStorage() {
        const localStoredProducts = localStorage.getItem("products");
        if(localStoredProducts) {
            const loadedProducts = JSON.parse(localStoredProducts);
            console.log(loadedProducts);
            loadedProducts.forEach( product => this.products.push(product));
        }
    }

}

/*
Modal Reference IDs
    #modal_prodName
    #modal_prodImg
    #modal_prodPrice
    #modal_prodDesc
    #modal_prodSize
    #modal_prodColor
    #modal_prodRating

*/

function displayProductDetail(product) {
    document.querySelector("#modal_prodName").innerHTML = product.name;
    document.querySelector("#modal_prodImg").src = product.img;
    document.querySelector("#modal_prodPrice").innerHTML = product.price;
    document.querySelector("#modal_prodDesc").innerHTML = product.description;
    document.querySelector("#modal_prodSize").innerHTML = "";
    product.sizeArr.forEach(size => {
        document.querySelector("#modal_prodSize").innerHTML += `<option value="${size}">${size}</option>`;
    });
    document.querySelector("#modal_prodColor").innerHTML = "";
    product.colorArr.forEach(color => {
        document.querySelector("#modal_prodColor").innerHTML += `<option value="${color}">${color}</option>`;
    });
    document.querySelector("#modal_prodRating").innerHTML = product.rating[0];
}

