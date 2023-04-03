import React from 'react'
import bannerTopBgImg from '../images/banner-img-1.webp'
import bannerTxtLogo from '../images/banner-text-image.png'
import ProductCardsCarousel from './ProductCardsCarousel'

export default function AppHome() {

  const topBannerStyle = {
    "--bg-img": `url(${bannerTopBgImg})`,
    "--bg-img-gap-y": "60vh"
  };

  return (
    <>
      {/* Top Banner */}
      <div className="container-fluid top-banner" style={topBannerStyle}>
        <div className="row">
          <div className="col text-center px-2">
            <img src={bannerTxtLogo} alt="Banner Text"/>

            <p className="text-center fw-semibold">
              Clothes that talk on behalf of you. Something for every occassion.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="container-fluid p-0">
        <section className="featured-products py-4">
          <h1 className="text-center mb-5">Featured Products</h1>

          {/* Carousel for big screens */}
          <ProductCardsCarousel carouselId="featured-carousel-lg" carouselContainerClass="d-none d-lg-block" productsPerSlide="5"/>

          {/* Carousel for medium screens */}
          <ProductCardsCarousel carouselId="featured-carousel-md" carouselContainerClass="d-none d-md-block d-lg-none" productsPerSlide="3"/>

          {/* Carousel for small screens */}
          <ProductCardsCarousel carouselId="featured-carousel-sm" carouselContainerClass="d-block d-md-none" productsPerSlide="1"/>
        </section>
      </div>
    </>
  )
}
