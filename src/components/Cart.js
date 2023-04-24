import { filterProductsByIDs } from './Products'

import CartItem from './CartItem'
import CartSummary from './CartSummary'

export default function Cart(props) {

  const [products] = props.Context.products;
  const [userData, setUserData] = props.Context.userData;

  function renderCartProducts(userData = {}, productsArr = []) {
    let cartProducts = [];

      try {
        if (userData.cart && userData.cart.products && Object.keys(userData.cart.products).length) {
          productsArr = filterProductsByIDs(Object.keys(userData.cart.products), productsArr);
    
          productsArr.map(product => {
              const cartProduct = (
                <div key={ product._id } className="cart-item rounded border mb-3" data-p-id={ product._id }>
                  <CartItem Name={ product._name } CoverImg={ product.cover_img } Currency={ product.currency } Price={ product.price } ItemCount={ userData.cart.products[product._id].itemCount } ItemStock={ userData.cart.products[product._id].itemStock } UpdateProductQuantityFunc = { updateProductQuantity }/>
                </div>
              );
    
              return cartProducts.push(cartProduct);
          });
        }
        else{
          return (<h5 className="text-center py-5 lh-lg">Your Cart is Empty!</h5>);
        }
      } catch (error) {
        // console.log(error);
      }
      
    return cartProducts;
  };

  function updateProductQuantity(event){
    try {
      let newUserDataObj = {...userData}

      const target = event.target.closest('.product-count-control');
      const cartItem = target.closest('.cart-item');
      const pID = cartItem.getAttribute('data-p-id');
      const inputBoxVal = parseInt(cartItem.querySelector('input.product-count').value);
      const opType = target.getAttribute('data-p-count');

      
      if (inputBoxVal > 0) {
        // Increase Item quantity by '1' in Cart 
        if (opType === 'inc-btn') {
          newUserDataObj.cart.products[pID].itemCount++;
          // Derease Item quantity by '1' in Cart 
        } else if(opType === 'dec-btn') {
          newUserDataObj.cart.products[pID].itemCount--;
        }
        // Set Item quantity Item based on User Input Value
        else if (opType === 'box'){
          newUserDataObj.cart.products[pID].itemCount = inputBoxVal;
        }
      }

      // Remove The Item from Cart 
      if (newUserDataObj.cart.products[pID].itemCount <= 0 || opType === 'drop-item') {
        delete newUserDataObj.cart.products[pID];
      }
      
      setUserData(newUserDataObj);

      return true;
    } catch (error) {
      console.log("Product Not Found For This ID.");
    }
    return false;
  }

  return (
    <div className="container-fluid my-5 py-5">
        <div className="card-section row g-4">
          <div className="col-lg-8">
            <section className="cart-items-area card">
              <h2 className="card-header text-center">Items</h2>
              <div id="cartItems" className="cart-items card-body">
                { renderCartProducts(userData, products) }
              </div>
            </section>
          </div>
          {/* <!-- Product Price Checklist --> */}
          <div className="col-lg-4">
            <section className="cart-items  card">
              <h2 className="card-header text-center">Summary</h2>
              <div className="price-summary-area card-body d-grid">
                <CartSummary Context={ props.Context }/>
                <button id="checkout-btn" className="btn btn-main fw-semibold mx-auto">Checkout</button>
              </div>
            </section>
          </div>
        </div>
      </div>
  )
}
