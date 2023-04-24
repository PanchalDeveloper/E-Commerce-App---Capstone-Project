import ProductCard from "./ProductCard";

export default function ProductCardsCarousel(props) {
  const [products] = props.Context.products;

  // Get All Featured Product Slides For Carousel
  function renderProductsPerSlide(productsArr = [], productsPerSlide = 1) {
    productsPerSlide = parseInt(productsPerSlide);
    const slides = [];

    if (Array.isArray(productsArr) && productsArr.length) {
      for (let i = 0; i < Math.ceil(productsArr.length / productsPerSlide); i++) {
        const slideStart = i * productsPerSlide;
        const slideEnd = slideStart + productsPerSlide;
        const slideProducts = productsArr.slice(slideStart, slideEnd);
    
        const slide = (
          <div key={i} className={`carousel-item${i === 0 ? " active" : ""}`}>
            <div className="item-slide product-cards flex-nowrap row g-3 p-4">
    
              {slideProducts.map((product) => (
                <div key={product._id} className="col">
                  <ProductCard
                    Title={product._name}
                    ImgUrl={product.cover_img}
                    Currency={product.currency}
                    Price={product.price}
                    Description={product.info}
                    Id={product._id}
                    Context={props.Context}
                  />
                </div>
              ))}
              
            </div>
          </div>
        );
    
        slides.push(slide);
      }
    }

    return slides;
  }

  return (
    <div className={props.carouselContainerClass}>
      <div id={props.carouselId} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {renderProductsPerSlide(products, props.productsPerSlide)}
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