function showCards(cards, place){
    var doc = document.querySelector(place);
    var codeCard = `
        <div class="col-12 col-md-6">
            <div class="card" data-bs-toggle="modal" data-bs-target="#product-modal">
                <div class="row g-0">
                    <div class="col-6 border-end rounded-start p-1 d-flex justify-content-center align-items-center">
                        <img class="shop-card-img" src="images/others/sampleBagSquare.jpg" alt="Sample_Image" />
                    </div>
                    <div class="col-6">
                        <div class="card-body d-flex flex-column justify-content-center h-100">
                            <h5 class="card-title">Product Name</h5>
                            <p class="card-text">Rating</p>
                            <p class="card-text">Price</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    for(let i = 0;i < cards; i++){
        doc.innerHTML += codeCard;
    };
}