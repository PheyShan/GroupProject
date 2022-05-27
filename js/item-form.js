const productList = new ProductController();

document.querySelector("#category").addEventListener("change", () => {

    const catSelection = document.querySelector("#category").value;
    
    let optionSubValues = "";
    let optionSizeValues = "";
    if (catSelection == "Shoes"){
        
        optionSubValues = `<option selected hidden value="">Please Select a Sub Category</option>
        <option value="Heels">Heels</option>
        <option value="Sandals">Sandals</option>`;

        optionSizeValues = `
      
        <option value="36">36</option>
        <option value="37">37</option>   
        <option value="38">38</option>
        <option value="39">39</option>     
        <option value="40">40</option>
        <option value="41">41</option>`


    }
    else{

        optionSubValues = `<option selected hidden value="">Please Select a Sub Category</option>
        <option class="shoeSub" value="Heels">Clutch</option>
        <option class="shoeSub" value="Sandals">Shoulder Bags</option>`;

        optionSizeValues = `<option value="S">S</option>
        <option value="M">M</option>   
        <option value="L">L</option>`
        

    };

    document.querySelector("#subCategory").innerHTML = optionSubValues;
    document.querySelector("#itemSize").innerHTML = optionSizeValues;
});

function addItem(){

    const itemFile = document.querySelector("#inputFile");

    const itemCat = document.querySelector("#category").value;

    const itemSub = document.querySelector("#subCategory").value;

    const sizeObject = document.querySelector("#itemSize");
    const selectedSizeArray = [];

    let count = 0;
    for (let i=0; i<sizeObject.options.length; i++) { 
        if (sizeObject.options[i].selected) {
            selectedSizeArray[count] = sizeObject.options[i].value;
            count++; 
        } 
    }

   
    console.log(selectedSizeArray);

    const colorObject = document.querySelector("#itemColor");
    const selectedColorArray = [];
   
    count = 0
    for (i=0; i<colorObject.options.length; i++) { 
        if (colorObject.options[i].selected) {
            selectedColorArray[count] = colorObject.options[i].value;
            count++; 
        } 
    };

    console.log(selectedColorArray);

    const itemName = document.querySelector("#productName").value;
    console.log(itemName);

    const itemPrice = document.querySelector("#productPrice").value;
    console.log(itemPrice);

    const itemDesc = document.querySelector("#productDesc").value;
    console.log(itemDesc);

        const item = {

            name: itemName,
            img: "images/others/pinkLittleBag.jpg",
            price: itemPrice,
            category: itemCat,
            subCategory: itemSub,
            description: itemDesc,
            sizeArr: selectedSizeArray,
            colorArr: selectedColorArray

        }
        document.querySelector("#itemAddComplete").innerHTML=`Product Added!`
        productList.addProduct(item);
        window.localStorage.setItem("products", JSON.stringify(productList.products));
     

}

function clearForm(){
    document.querySelector("#inputFile").value = "";
    document.querySelector("#category").value = "";
    document.querySelector("#subCategory").value = "";
    document.querySelector("#itemSize").value = "";
    document.querySelector("#itemColor").value = "";
    document.querySelector("#productName").value = ""; 
    document.querySelector("#productPrice").value = "";  
    document.querySelector("#productDesc").value = "";
    document.querySelector("#itemAddComplete").innerHTML = "";

    

}