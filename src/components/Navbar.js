import { Link } from 'react-router-dom'
import logo from '../images/logo.png';

export default function Navbar(props) {
    const [userData] =  props.Context.userData;
    let productsInCart = "0";

    try {
        if (userData.cart && userData.cart.products) {
            productsInCart = (Object.values(userData.cart.products).length <= 9)?(Object.values(userData.cart.products).length):("9+");
        }
    } catch (error) {
        console.log("Products Object Not Available in ");
    }
    return (
        <nav className="navbar nav-belt navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Site Logo" width="100px"/>
                </Link>
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
                                    id="SearchBox"
                                    className="form-control br-0 br-4"
                                    type="search"
                                    placeholder="Product name, Category name, etc."
                                    aria-label="Search"
                                />
                                <button id="SearchBtn" className="btn btn-main fw-bold br-0 br-2" type="button">
                                    Search
                                </button>
                            </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                <button type="button" className="btn btn-main fw-bold">
                                    Login
                                </button>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cart">
                                <button type="button" className="position-relative btn btn-main fw-bold">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        { productsInCart }
                                        <span className="visually-hidden">Items in Cart</span>
                                    </span>
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}