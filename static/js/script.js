window.addEventListener("DOMContentLoaded", initializer, false);

console.log("Script Loaded...");
async function initializer() {
    console.log("DOM Loaded...");

    try {
        // Getting Product Data from DataBase (Excpecting)
        const productDataRes = await fetch('/database/product-data.json', {
            'headers': { "Content-Type": "application/json" }
        });
        const productData = (productDataRes.status == 200) ? (await productDataRes.json()) : ({});

        // Getting Current User's Data from DataBase (Excpecting)
        const userDataRes = await fetch('/database/user-data.json', {
            'headers': { "Content-Type": "application/json" }
        });
        const userData = (userDataRes.status == 200) ? (await userDataRes.json()) : ({});

        // For Test Purpose
        window.productData = productData;
        window.userData = userData;
        // For Test Purpose

        // Home Page [Feactured Products Carousels]
        try {
            // Add Products to Feactured Products Carousels

            const feacturedCarousels = document.querySelectorAll(".featured-products .carousel-inner");

            for (const carousel of feacturedCarousels) {
                getFeaturedProductsHTML(productData, carousel);
            }
        } catch (error) {
            // console.log("This is not 'Home' Page.");
        }

        // Cart [Cart Items]
        try {
            // Add All User's Cart Products to Cart Items Area
            const cartItems = document.querySelector("#cartItems"),
                totalItemsAmount = document.querySelector("#total-item-price .amount"),
                totalDiscount = document.querySelector("#total-discount .amount"),
                totalShippingAmount = document.querySelector("#total-shipping-price .amount"),
                totalPrice = document.querySelector("#total-price .amount");

            if (userData.products && Object.keys(userData.products).length !== 0 && Object.keys(productData).length !== 0) {
                cartItems.innerHTML = getCartProductsHTML(userData, productData);

                totalItemsAmount.innerHTML = getCartProductAmounts("items", userData, productData);
                totalDiscount.innerHTML = getCartProductAmounts("discount", userData, productData);
                totalShippingAmount.innerHTML = getCartProductAmounts("shipping", userData, productData);
                totalPrice.innerHTML = getCartProductAmounts("total", userData, productData);

            }
            else {
                cartItems.innerHTML = `<h5 class="text-center py-5 lh-lg">Your Cart is Empty!</h5>`;
            }

        } catch (error) {
            // console.log("This is not 'My Cart' Page.");
        }

        // All Products Page [All Products]
        try {
            // Add All Products to Products Area
            const productsArea = document.querySelector(".products-area .product-cards");
            productsArea.innerHTML = getAllPublicProductsHTML(productData);

        } catch (error) {
            // console.log("This is not 'All Products' Page.");
        }

        // Womens Products Page [All Products]
        try {
            // Add All Women Products to Products Area
            const womenProductsArea = document.querySelector(".women-products-area .product-cards");
            womenProductsArea.innerHTML = getAllPublicProductsHTML(productData, { "category": ["women"], });

        } catch (error) {
            // console.log("This is not 'Womens Products' Page.");
        }

        // Mens Products Page [All Products]
        try {
            // Add All Men Products to Products Area
            const menProductsArea = document.querySelector(".men-products-area .product-cards");
            menProductsArea.innerHTML = getAllPublicProductsHTML(productData, { "category": ["men"], });

        } catch (error) {
            // console.log("This is not 'Mens Products' Page.");
        }

        // Kids Products Page [All Products]
        try {
            // Add All Kids Products to Products Area
            const kidsProductsArea = document.querySelector(".kids-products-area .product-cards");
            kidsProductsArea.innerHTML = getAllPublicProductsHTML(productData, { "category": ["kids"], });

        } catch (error) {
            // console.log("This is not 'Kids Products' Page.");
        }

    } catch (error) {
        // console.log("Error Occured while getting 'productData' or 'userData'");
    }
}

// Get All Featured Products
function getFeaturedProductsHTML(productsArr = [], container = "") {

    const slideProductLimit = parseInt(container ? container.dataset.productsOnSlide : 1);
    let productCardsHtml = "", lastProduct = 0;

    // Add Product Slides
    for (let i = 0; i < Math.ceil(productsArr.length / slideProductLimit); i++) {
        productCardsHtml += `
        <div class="carousel-item${(i == 0) ? (" active") : ("")}"><div class="item-slide product-cards flex-nowrap row g-3">
        `;

        // Add Products to Slide
        for (let j = 0; (lastProduct < productsArr.length && j < slideProductLimit); j++) {
            productCardsHtml += `
            <div class="col">
                <div class="featured-item product-card card" title="${productsArr[lastProduct]._name}" >
                <img src="${productsArr[lastProduct].cover_img}" class="card-img-top" alt="${productsArr[lastProduct]._name}"/>
                <div class="card-body text-center">
                    <h5 class="item-name card-title limit-lines fw-bold" style="--max-lines: 1;">${productsArr[lastProduct]._name}</h5>
                    <h5 class="item-price card-title fw-bold"><span class="currency">${productsArr[lastProduct].currency}</span><span class="price-amount">${productsArr[lastProduct].price}</span></h5>
                    <p class="item-info card-text limit-lines">${productsArr[lastProduct].info}</p>
                    <a href="/pages/add-to-cart.html?ProductId=${productsArr[lastProduct]._id}" class="btn btn-main fw-semibold"><i class="fa-solid fa-cart-shopping"></i> Add to cart</a>
                </div>
                </div>
            </div>
            `;

            lastProduct++;
        }

        productCardsHtml += `
        </div></div>
        `;
    }

    try {
        container.innerHTML = productCardsHtml;
    } catch {
        console.warn('Element is not available.');
    }

    return productCardsHtml;
}

// Get All Products inside User's Cart
function getCartProductsHTML(userData = {}, productsArr = []) {
    let cartProducts = "";


    productsArr = filterProductsByIDs(Object.keys(userData.products), productsArr);


    for (product of productsArr) {
        cartProducts += `
        <div class="cart-item rounded border mb-3" data-p-id="${product._id}">
            <div class="row g-0">
            <div class="col-md-4 d-grid p-3">
                <div class="product-cover-img d-flex justify-content-center">
                <img src="${product.cover_img}" height="220px" alt="${product._name}">
                </div>
            </div>
            <div class="col-md-4 d-grid p-3">
                <div class="product-details d-grid place-items-center gap-3 m-auto">
                <h5 class="poduct-title text-center limit-lines">${product._name}</h5>
                <h6 class="text-center"><span class="currency">${product.currency}</span><span class="product-price">${product.price}</span></h6>
                <button class="btn btn-main mx-auto"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
            <div class="col-md-4 d-grid p-3">
            <div class="product-count-controls d-flex gap-3 m-auto">
                    <button class="product-count-inc-btn btn btn-main"><i class="fa-solid fa-minus"></i></button>
                    <input class="product-count form-control text-center" type="number" value="${userData.products[product._id].itemCount}">
                    <button class="product-count-dec-btn btn btn-main"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            </div>
        </div>
        `;

    }

    return cartProducts;
}

// Get User's Cart Product Price Info
function getCartProductAmounts(amountOf = "", userData = {}, productArr = []) {
    const userCartAmounts = {
        items: filterProductsByIDs(Object.keys(userData.products), productArr).reduce((x, y) => x.price + y.price),
        shipping: Object.values(userData.products).reduce((x, y) => x.shipping + y.shipping),
        discount: Object.values(userData.products).reduce((x, y) => x.discount + y.discount),
        _total: function () { return this.items + this.shipping - this.discount },
    }

    return (amountOf == "total") ? (userCartAmounts._total()) : (Object.keys(userCartAmounts).includes(amountOf)) ? (userCartAmounts[amountOf]) : 0;
}

// Get All Products with Filtering
function getAllPublicProductsHTML(productsArr = [], filter_by = {}) {

    let productCardsHtml = "";
    const filterKeys = Object.keys(filter_by);

    // Filter Products if needed
    if (filterKeys.length !== 0) {
        if (typeof filter_by == "object") {
            if (filterKeys.includes('_ids')) {
                productsArr = filterProductsByIDs(filter_by._ids, productsArr);
            }

            if (filterKeys.includes('price')) {
                productsArr = filterProductsByPrice(filter_by.price, productsArr);
            }

            if (filterKeys.includes('category')) {
                productsArr = filterProductsByCategory(filter_by.category, productsArr);
            }
        }
    }

    // Check if there are any products left after "Filter"
    if (productsArr.length === 0) {
        const emptyAlert = `<h4 class="text-center py-5">No products are available currently.</h4>`;
        return emptyAlert;
    }

    // Add Products to Cards
    for (product of productsArr) {
        productCardsHtml += `
        <div class="col-xl-2 col-md-4 col-6">
            <div class="product-card card" title="${product._name}" >
                <img src="${product.cover_img}" class="card-img-top" alt="${product._name}"/>
                <div class="card-body text-center">
                    <h5 class="item-name card-title limit-lines fw-bold" style="--max-lines: 1;">${product._name}</h5>
                    <h5 class="item-price card-title fw-bold"><span class="currency">${product.currency}</span><span class="price-amount">${product.price}</span></h5>
                    <p class="item-info card-text limit-lines">${product.info}</p>
                    <a href="/pages/add-to-cart.html?ProductId=${product._id}" class="btn btn-main fw-semibold"><i class="fa-solid fa-cart-shopping"></i> Add to cart</a>
                </div>
            </div>
        </div>
        `;
    }

    return productCardsHtml;
}

// Product Filtering Functionts

function filterProductsByIDs(productIDs = [], productsArr = []) {
    // Filter all the products having their id in "productIDs" Array
    productsArr = productsArr.filter(x => productIDs.includes(x._id));

    return productsArr;
}

function filterProductsByPrice(priceRange = [0, Infinity], productsArr = []) {
    // Filter all the products between given price range
    productsArr = productsArr.filter(x => x.price >= priceRange[0] && x.price <= priceRange[1]);
    return productsArr;
}

function filterProductsByCategory(categories = [], productsArr = []) {
    // Filter all the products matching all the given categories
    productsArr = productsArr.filter(x => {
        let result = true;

        for (category of categories) {
            result = x.category.includes(category);

            if (!result) {
                break;
            }
        }
        return result;
    });

    return productsArr;
}
