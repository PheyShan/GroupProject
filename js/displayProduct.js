const productList = new ProductController();

function addSampleProducts() {
    
   /*  const product1 = {
        name: `Men's Heels`,
        //img: 'images/others/sampleBagSquare.jpg',
        img: 'images/others/aboutme.jpg',
        price: 77,
        category: 'shoes',
        subCategory: 'heels',
        description: 'Only for\nTrue Men',
        sizeArr: [35,36],
        colorArr: ['white','black']
    }
    const product2 = {
        name: `The Heel`,
        img: 'images/others/sampleBagSquare.jpg',
        price: 66,
        category: 'shoes',
        subCategory: 'heels',
        description: '',
        sizeArr: [35,36],
        colorArr: ['white','black']
    }
    const product3 = {
        name: 'Sand',
        img: 'images/others/sampleBagSquare.jpg',
        price: 0.5,
        category: 'shoes',
        subCategory: 'sandals',
        description: 'Regular Sand\nIn a pair',
        sizeArr: [35,36],
        colorArr: ['white','black']
    }
    const product4 = {
        name: 'Clutch Tightly',
        img: 'images/others/sampleBagSquare.jpg',
        price: 88,
        category: 'bags',
        subCategory: 'clutch',
        description: '',
        sizeArr: ['M','L'],
        colorArr: ['white','black']
    }
    const product5 = {
        name: 'Left Shoulder Blade',
        img: 'images/others/sampleBagSquare.jpg',
        price: 66,
        category: 'bags',
        subCategory: 'shoulder',
        description: 'Your left hand will thank you.',
        sizeArr: ['M','L'],
        colorArr: ['white','black']
    }
    const product6 = {
        name: 'Right Shoulder Blade',
        img: 'images/others/sampleBagSquare.jpg',
        price: 99,
        category: 'bags',
        subCategory: 'shoulder',
        description: 'You will thank your right hand.',
        sizeArr: ['M','L'],
        colorArr: ['white','black'] */
    const product1 = {
            name: 'Flamingo',
            img: 'images/items/flamingo.jpg',
            price: 177,
            category: 'bags',
            subCategory: 'shoulder',
            description: 'Colourful, stylist',
            sizeArr: ['M'],
            colorArr: ['Multi-colors']
        }
        const product2 = {
            name: 'Spring',
            img: 'images/items/spring.jpg',
            price: 226,
            category: 'shoes',
            subCategory: 'heels',
            description: 'Makes you think Spring is everywhere',
            sizeArr: [37, 38],
            colorArr: ['Multi-colors']
        }
        const product3 = {
            name: 'Chic',
            img: 'images/items/chic.jpg',
            price: 200,
            category: 'bags',
            subCategory: 'shoulder',
            description: 'Chic, stylish',
            sizeArr: ['M'],
            colorArr: ['beige','black']
        }
        const product4 = {
            name: 'Shimmer',
            img: 'images/items/shimmer.jpg',
            price: 188,
            category: 'shoes',
            subCategory: 'heels',
            description: 'Shimmer and Shine all the time',
            sizeArr: [36,37,38],
            colorArr: ['white']
        }
        const product5 = {
            name: 'My Fair Lady',
            img: 'images/items/fairlady.jpg',
            price: 166,
            category: 'bags',
            subCategory: 'clutch bag',
            description: 'Nice pink stylish clutch for all occasions',
            sizeArr: ['S'],
            colorArr: ['white','black', 'pink']
        }
        const product6 = {
            name: 'Vacation',
            img: 'images/items/vacation.jpg',
            price: 99,
            category: 'shoes',
            subCategory: 'sandals',
            description: 'Perfect for all your vacations',
            sizeArr: ['37','39', '40'],
            colorArr: ['white','blue']
    }


    productList.addProduct(product1);
    productList.addProduct(product2);
    productList.addProduct(product3);
    productList.addProduct(product4);
    productList.addProduct(product5);
    productList.addProduct(product6);
}

function displayCard(product, qSelect=''){
    if(product && qSelect){
        productList.addProductCard(product, qSelect);
    }
    else{
        console.log('Error! DisplayCard did not recieve required variables.');
    }
}