import React from 'react'
import { Link } from 'react-router-dom'

export default function FooterMain() {
  return (
    <div className="container-fluid">
    <div className="row justify-content-center align-content-center flex-column flex-md-row text-center p-3">
      <div className="col-md-3 col-sm-6 col-8 py-2">
        <h5><Link className="nav-link" to="/products/womens">Women</Link></h5>
        <ul className="list-unstyled">
          <li>
            <Link className="nav-link pt-1" to="/products/womens?categorytree=dress">Dresses</Link>
          </li>
          <li>
            <Link className="nav-link pt-1" to="/products/womens?categorytree=pant">Pants</Link>
          </li>
          <li>
            <Link className="nav-link pt-1" to="/products/womens?categorytree=skirt">Skirts</Link>
          </li>
        </ul>
      </div>

      <div className="col-md-3 col-sm-6 col-8 py-2">
        <h5><Link className="nav-link pt-1" to="/products/mens">Men</Link></h5>
        <ul className="list-unstyled">
          <li>
            <Link className="nav-link pt-1" to="/products/mens?categorytree=shirt">Shirts</Link>
          </li>
          <li>
            <Link className="nav-link pt-1" to="/products/mens?categorytree=pant">Pants</Link>
          </li>
          <li>
            <Link className="nav-link pt-1" to="/products/mens?categorytree=hoodie">Hoodies</Link>
          </li>
        </ul>
      </div>

      <div className="col-md-3 col-sm-6 col-8 py-2">
        <h5><Link className="nav-link pt-1" to="/products/kids">Kids</Link></h5>
      </div>
      <div className="col-md-3 col-sm-6 col-8 py-2">
        <h5>Links</h5>
        <ul className="list-unstyled">
          <li><Link className="nav-link pt-1" to="/">Home</Link></li>
          <li>
            <Link className="nav-link pt-1" to="/contact-us">Contact</Link>
          </li>
          <li><Link className="nav-link pt-1" to="/login">Login</Link></li>
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
