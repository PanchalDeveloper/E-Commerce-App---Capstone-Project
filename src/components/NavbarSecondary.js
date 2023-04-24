import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarSecondary(props) {
  return (
    <nav className="nav-main navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container-fluid">
                <ul className="navbar-nav flex-row flex-wrap justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link active px-3" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link active px-3"
                            aria-current="page"
                            to="/products"
                        >All Products
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link active px-3 dropdown-toggle"
                            to="#Women"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Women
                        </Link>
                        <ul
                            className="dropdown-menu border-0 shadow"
                            aria-labelledby="navbarDropdown"
                        >
                            <li>
                                <Link className="dropdown-item" to="/products/womens">All</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/products/womens?categorytree=dress">Dresses</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/products/womens?categorytree=pant">Pants</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/products/womens?categorytree=skirt">Skirts</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className="nav-link active px-3 dropdown-toggle"
                            to="#Men"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >Men
                        </Link>
                        <ul
                            className="dropdown-menu border-0 shadow"
                            aria-labelledby="navbarDropdown"
                        >
                            <li><Link className="dropdown-item" to="/products/mens">All</Link></li>
                            <li>
                                <Link className="dropdown-item" to="/products/mens?categorytree=shirt">Shirts</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/products/mens?categorytree=pant">Pants</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="/products/mens?categorytree=hoodie">Hoodies</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link active px-3"
                            aria-current="page"
                            to="/products/kids"
                        >Kids</Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            className="nav-link active px-3"
                            aria-current="page"
                            to="/contact-us"
                        >Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
  )
}
