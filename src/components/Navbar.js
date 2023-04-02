import React from 'react'
import logo from '../images/logo.png';

export default function Navbar() {
    return (
        <nav className="navbar nav-belt navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Site Logo" width="100px"/>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <form className="d-flex">
                                <input
                                    className="form-control br-0 br-4"
                                    type="search"
                                    placeholder="Product name, Category name, etc."
                                    aria-label="Search"
                                />
                                <button className="btn btn-main fw-bold br-0 br-2" type="submit">
                                    Search
                                </button>
                            </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/login.html"
                            ><button type="button" className="btn btn-main fw-bold">
                                    Login
                                </button></a
                            >
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4" href="/pages/cart.html">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}