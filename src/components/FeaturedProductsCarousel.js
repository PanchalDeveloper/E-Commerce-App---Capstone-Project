import React, { useState, useEffect } from "react";
import { productsData } from "../database/product-data";
// import { Link } from "react-router-dom";

export default function FeaturedProductsCarousel(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);

    const carouselElements = document.querySelectorAll(".featured-products .carousel");

    // CarouselSlider Element (Where All The SLides Are Stored)
    carouselElements.forEach(carousel => {
      const carouselSlider = carousel.querySelector(".carousel-inner");
      getFeaturedProductsHTML(products, carouselSlider);
    });

  }, [products]);

  return (
    <div className={props.carouselContainerClass}>
      {/* <Link to="/asbcuyv">Link</Link> */}
      <div id={props.carouselId} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" data-products-per-slide={props.productsPerSlide}>
          {/* the product cards will be dynamically generated here */}
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target={`#${props.carouselId}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target={`#${props.carouselId}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

// Get All Featured Products
function getFeaturedProductsHTML(productsArr = [], container = "") {

  const slideProductLimit = parseInt(container ? container.dataset.productsPerSlide | 1 : 1);
  let productCardsHtml = "", lastProduct = 0, product = {};

  // Add Product Slides
  for (let i = 0; i < Math.ceil(productsArr.length / slideProductLimit); i++) {
      productCardsHtml += `
      <div class="carousel-item${(i === 0) ? (" active") : ("")}"><div class="item-slide product-cards flex-nowrap row g-3 p-4">
      `;
      // Add Products to Slide
      for (let j = 0; (lastProduct < productsArr.length && j < slideProductLimit); j++) {
        product = productsArr[lastProduct];
        productCardsHtml += `
          <div class="col">
              <div class="featured-item product-card card h-100" title="${product._name}" >
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
