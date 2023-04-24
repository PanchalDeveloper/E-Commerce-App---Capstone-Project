import React from 'react'
import PropTypes from 'prop-types'

export default function ProductCard(props) {
  const [userData] = props.Context.userData;
  const itemInCart = props.Context.ItemInCart;

  return (
    <div className="product-card card h-100" title={props.Title} data-p-id={props.Id}>
        <img src={props.ImgUrl} className="card-img-top" alt={props.Title}/>
        <div className="card-body d-grid justify-content-center align-items-between text-center">
            <h5 className="item-name card-title limit-lines fw-bold">{props.Title}</h5>
            <h5 className="item-price card-title fw-bold"><span className="currency">{props.Currency}</span><span className="price-amount">{props.Price}</span></h5>
            <p className="item-info card-text limit-lines">{props.Description}</p>
            <button type="button" className="product-count-control btn btn-main fw-semibold mx-auto" onClick={props.Context.AddToCart}><i className="fa-solid fa-cart-shopping"></i> {(!itemInCart(props.Id, userData))?("Add to cart"):("Remove From Cart")}</button>
        </div>
    </div>
  )
}

ProductCard.propTypes = {
    "Id": PropTypes.string.isRequired,
    "Title": PropTypes.string.isRequired,
    "Description": PropTypes.string.isRequired,
    "Currency": PropTypes.string.isRequired,
    "Price": PropTypes.number.isRequired,
}

ProductCard.defaultProps = {
    "Id": "null",
    "Title": "Not Available.",
    "Description": "Not Available.",
    "Currency": "$",
    "Price": 0,
}