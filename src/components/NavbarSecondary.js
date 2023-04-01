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
                            href="/pages/products.html"
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
                            <li><a className="dropdown-item" href="/pages/women.html">All</a></li>
                            <li>
                                <a className="dropdown-item" href="/pages/women-dresses.html/"
                                >Dresses</a
                                >
                            </li>
                            <li>
                                <a className="dropdown-item" href="/pages/women-pants.html/">Pants</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/pages/women-skirts.html/"
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
                            <li><a className="dropdown-item" href="/pages/men.html">All</a></li>
                            <li>
                                <a className="dropdown-item" href="/pages/men-shirts.html">Shirts</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/pages/men-pants.html/">Pants</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/pages/men-hoodies.html/"
                                >Hoodies</a
                                >
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link active px-3"
                            aria-current="page"
                            href="/pages/kids.html"
                        >Kids</a
                        >
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link active px-3"
                            aria-current="page"
                            href="/pages/contact-us.html"
                        >Contact</a
                        >
                    </li>
                </ul>
            </div>
        </nav>
  )
}
