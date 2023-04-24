import React from 'react'
// import PropTypes from 'prop-types'

export default function  CartItem(props) {
  return (
    <div className="row g-0">
      <div className="col-md-4 d-grid p-3">
          <div className="product-cover-img d-flex justify-content-center">
          <img src={props.CoverImg} height="220px" alt={props.Name} />
          </div>
      </div>
      <div className="col-md-4 d-grid p-3">
        <div className="product-details d-grid place-items-center gap-3 m-auto">
          <h5 className="poduct-title text-center limit-lines">{props.Name}</h5>
          <h6 className="text-center"><span className="currency">{props.Currency}</span><span className="product-price">{props.Price}</span></h6>
          <button className="product-count-control btn btn-main mx-auto" data-p-count="drop-item" onClick={ props.UpdateProductQuantityFunc }><i className="fa-solid fa-trash"></i></button>
        </div>
      </div>
      <div className="col-md-4 d-grid p-3">
        <div className="product-count-controls d-flex gap-3 m-auto">
          <button type="button" className="product-count-control product-count-inc-btn btn btn-main" onClick={ props.UpdateProductQuantityFunc } data-p-count="dec-btn"><i className="fa-solid fa-minus"></i></button>
          <input className="product-count product-count-control form-control text-center" type="number" onChange={ props.UpdateProductQuantityFunc } value={ props.ItemCount } placeholder='0' data-p-count="box" min="0" max={ props.ItemStock || 999}/>
          <button type="button" className="product-count-control product-count-dec-btn btn btn-main" onClick={ props.UpdateProductQuantityFunc } data-p-count="inc-btn"><i className="fa-solid fa-plus"></i></button>
        </div>
      </div>
    </div>
  )
}

// CartItem.propTypes = {
//   second: PropTypes.third
// }
