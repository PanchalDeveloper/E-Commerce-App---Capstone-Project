import React from 'react'

export default function NavbarSecondary(props) {
  return (
    <nav className="nav-main navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container-fluid">
                <ul className="navbar-nav flex-row flex-wrap justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active px-3" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link active px-3"
                            aria-current="page"
                            href="/products"
                        >All Products</a
                        >
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link active px-3 dropdown-toggle"
                            href="#Women"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Women
                        </a>
                        <ul
                            className="dropdown-menu border-0 shadow"
                            aria-labelledby="navbarDropdown"
                        >
                            <li><a className="dropdown-item" href="/products/women">All</a></li>
                            <li>
                                <a className="dropdown-item" href="/products/women-dresses/"
                                >Dresses</a
                                >
                            </li>
                            <li>
                                <a className="dropdown-item" href="/products/women-pants/">Pants</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/products/women-skirts/"
                                >Skirts</a
                                >
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link active px-3 dropdown-toggle"
                            href="#Men"
                            id="navbarDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Men
                        </a>
                        <ul
                            className="dropdown-menu border-0 shadow"
                            aria-labelledby="navbarDropdown"
                        >
                            <li><a className="dropdown-item" href="/products/men">All</a></li>
                            <li>
                                <a className="dropdown-item" href="/products/men-shirts">Shirts</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/products/men-pants/">Pants</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/products/men-hoodies/"
                                >Hoodies</a
                                >
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link active px-3"
                            aria-current="page"
                            href="/products/kids"
                        >Kids</a
                        >
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link active px-3"
                            aria-current="page"
                            href="/contact-us"
                        >Contact</a
                        >
                    </li>
                </ul>
            </div>
        </nav>
  )
}
