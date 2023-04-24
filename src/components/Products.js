import { useParams, useLocation } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function Products(props) {
  const { category } = useParams();
  const [products] = props.Context.products;
  const useQueryString = () => {
    const location = useLocation();
    return new URLSearchParams(location.search);
  }

  const qs = useQueryString();
  const filterObj = { "categorytree": [] };

  if (category) {
    filterObj.categorytree.push(category);
  }
  let categorytree = qs.get('categorytree');

  if (categorytree) {
    categorytree = categorytree.split(/\s+/g);
    filterObj.categorytree = [...filterObj.categorytree, ...categorytree];
  }
  
  // Get All Products with Filtering
  function renderFilteredProductCards(productsArr = [], filter_by = {}) {

    let productCards = [];
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

        if (filterKeys.includes('categorytree')) {
          productsArr = filterProductsByCategory(filter_by.categorytree, productsArr);
        }
      }
    }

    // Check if there are any products left after "Filter"
    if (productsArr.length === 0) {
      const emptyAlert = (<h4 className="text-center py-5">No products are available currently.</h4>);
      return emptyAlert;
    }

    // Add Products to Cards
    productsArr.map((product) => {
      const productCard = (
        <div key={product._id} className="col-xl-2 col-md-4 col-6">
          <ProductCard
            Products={productsArr}
            Title={product._name}
            ImgUrl={product.cover_img}
            Currency={product.currency}
            Price={product.price}
            Description={product.info}
            Id={product._id}
            Context={props.Context}
          />
        </div>
      );

      return productCards.push(productCard);
    });

    return productCards;
  }

  return (
    <div className="container-fluid">
      <section className="products-area py-4">
        <h1 className="text-center mb-5">{(category && `Products For ${category.toUpperCase()}`) || "All Products"}</h1>
        <div className="product-cards row g-3">
          {renderFilteredProductCards(products, filterObj)}
        </div>
      </section>
    </div>
  )
}


// Product Filtering Functionts

export function filterProductsByIDs(productIDs = [], productsArr = []) {
  // Filter all the products having their id in "productIDs" Array
  productsArr = productsArr.filter(x => productIDs.includes(x._id));

  return productsArr;
}

export function filterProductsByPrice(priceRange = [0, Infinity], productsArr = []) {
  // Filter all the products between given price range
  productsArr = productsArr.filter(x => x.price >= priceRange[0] && x.price <= priceRange[1]);
  return productsArr;
}

export function filterProductsByCategory(categories = [], productsArr = []) {
  // Filter all the products matching all the given categories
  productsArr = productsArr.filter(x => {
    let result = true;

    for (const category of categories) {
      result = x.category.includes(category);

      if (!result) {
        break;
      }
    }
    return result;
  });

  return productsArr;
}