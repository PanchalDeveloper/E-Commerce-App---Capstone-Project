import React from 'react'
import PropTypes from 'prop-types'

export default function ProductCard(props) {
  return (
    <div className="product-card card h-100" title={props.Title} >
        <img src={props.ImgUrl} className="card-img-top" alt={props.Title}/>
        <div className="card-body text-center">
            <h5 className="item-name card-title limit-lines fw-bold" style={{"--max-lines": "1;"}}>{props.Title}</h5>
            <h5 className="item-price card-title fw-bold"><span className="currency">{props.Currency}</span><span className="price-amount">{props.Price}</span></h5>
            <p className="item-info card-text limit-lines">{props.Description}</p>
            <a href={`/pages/add-to-cart.html?ProductId=${props.Id}`} className="btn btn-main fw-semibold"><i className="fa-solid fa-cart-shopping"></i> Add to cart</a>
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