import React from 'react'
// import PropTypes from 'prop-types'
import { filterProductsByIDs } from './Products'

export default function CartSummary(props) {

  const [products]= props.Context.products;
  const [userData]= props.Context.userData;

  
  
  function getCartProductAmounts(amountOf = "", userData = {}, productArr = []) {
    let userCartAmounts = {
      items: 0,
      shipping: 0,
      discount: 0,
      total: function () { return this.items + this.shipping - this.discount },
    }
      
    if (userData.cart && userData.cart.products && Object.keys(userData.cart.products).length) {
      const curCartProducts = filterProductsByIDs(Object.keys(userData.cart.products), productArr);
      const itemPrices =  curCartProducts.map((x) => {
        return x.price * userData.cart.products[x._id]['itemCount'];
      });

      userCartAmounts.items = arraySum(itemPrices);
      userCartAmounts.shipping = getTotalOf("shipping", userData, curCartProducts);
      userCartAmounts.discount = getTotalOf("discount", userData, curCartProducts);
    }   

    return (amountOf === "total") ? (userCartAmounts.total()) : (Object.keys(userCartAmounts).includes(amountOf)) ? (userCartAmounts[amountOf]) : 0;

    function getTotalOf(key="", userDataObj={}, products=[]){
      const amountArr =  products.map((x) => {
        const totalPublicAmount = (x[key])?(x[key]):(0);
        const totalUserAmount = userDataObj.cart.products[x._id][key];
        return (totalUserAmount)?(totalUserAmount):(totalPublicAmount);
      });

      return arraySum(amountArr);
    }
  }

  function arraySum(array=[]){
    return array.reduce((x, y)=> x + y);
  }

  return (
    <ul className="cart-estimates list-group list-group-flush">
      <li id="total-item-price" className="list-group-item">
        <h6 className="cart-estimate-title">Cost</h6>
        <h6 className="cart-estimate-body">
          <span className="currency">$</span><span className="amount">{ JSON.stringify(getCartProductAmounts("items", userData, products)) }</span>
        </h6>
      </li>
      <li id="total-discount" className="list-group-item">
        <h6 className="cart-estimate-title">Discount</h6>
        <h6 className="cart-estimate-body">
          - <span className="currency">$</span><span className="amount">{ JSON.stringify(getCartProductAmounts("discount", userData, products)) }</span>
        </h6>
      </li>
      <li id="total-shipping-price" className="list-group-item">
        <h6 className="cart-estimate-title">Shipping</h6>
        <h6 className="cart-estimate-body">
          <span className="currency">$</span><span className="amount">{ JSON.stringify(getCartProductAmounts("shipping", userData, products)) }</span>
        </h6>
      </li>
      <li className="list-group-item px-0"><hr className="container-devicer w-100 mx-3" /></li>
      <li id="total-price" className="list-group-item">
        <h4 className="cart-estimate-title">Total</h4>
        <h4 className="cart-estimate-body">
          <span className="currency">$</span><span className="amount">{ JSON.stringify(getCartProductAmounts("total", userData, products)) }</span>
        </h4>
      </li>
    </ul>
  )
}

// CartItem.propTypes = {
//   second: PropTypes.third
// }
