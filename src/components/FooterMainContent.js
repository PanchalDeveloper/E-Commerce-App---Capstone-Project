import React from 'react'

export default function FooterMainContent() {
  return (
    <div className="container-fluid">
    <div className="row justify-content-center align-content-center flex-column flex-md-row text-center p-3">
      <div className="col-md-3 col-sm-6 col-8 py-2">
        <h5><a className="nav-link" href="/products/women">Women</a></h5>
        <ul className="list-unstyled">
          <li>
            <a className="nav-link pt-1" href="/products/women-dresses/"
              >Dresses</a
            >
          </li>
          <li>
            <a className="nav-link pt-1" href="/products/women-pants/">Pants</a>
          </li>
          <li>
            <a className="nav-link pt-1" href="/products/women-skirts/">Skirts</a>
          </li>
        </ul>
      </div>

      <div className="col-md-3 col-sm-6 col-8 py-2">
        <h5><a className="nav-link pt-1" href="/products/men">Men</a></h5>
        <ul className="list-unstyled">
          <li>
            <a className="nav-link pt-1" href="/products/men-shirts">Shirts</a>
          </li>
          <li>
            <a className="nav-link pt-1" href="/products/men-pants/">Pants</a>
          </li>
          <li>
            <a className="nav-link pt-1" href="/products/men-hoodies/">Hoodies</a>
          </li>
        </ul>
      </div>

      <div className="col-md-3 col-sm-6 col-8 py-2">
        <h5><a className="nav-link pt-1" href="/products/kids">Kids</a></h5>
      </div>
      <div className="col-md-3 col-sm-6 col-8 py-2">
        <h5>Links</h5>
        <ul className="list-unstyled">
          <li><a className="nav-link pt-1" href="/">Home</a></li>
          <li>
            <a className="nav-link pt-1" href="/contact-us">Contact</a>
          </li>
          <li><a className="nav-link pt-1" href="/login">Login</a></li>
        </ul>
      </div>
    </div>

    <hr />

    <div className="row text-center">
      <div className="col-md-12">
        <p><i>Copywright &copy;Ecommerce 2022-2023</i></p>
      </div>
    </div>
  </div>
  )
}
