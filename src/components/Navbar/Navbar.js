import { NavLink } from "react-router-dom"
import { useCart, useWishlist, useAuth } from "../../Context"
import { MdSearch,MdShoppingCart,MdFavoriteBorder } from "react-icons/md";
import NavbarCSS from "./navbar.module.css";
import Icon from '../../assests/images/avatarIcon.svg';

export default function Navbar() {
    const { cartItems } = useCart()
    const { wishlistItems } = useWishlist()
    const { token } = useAuth()

    return (
        <nav className={NavbarCSS.nav__bar}>
            <NavLink to="/" className="btn-link d-inline_block">
                <h1 className="head-lg">ShopOne</h1>
            </NavLink>
            <NavLink to="/products" className="btn-link d-inline_block">
                <h2 className="head-sm">Products</h2>
            </NavLink>
            <div className={NavbarCSS.search__container}>
                <input
                    className="text-center padding-xs form-field border-radius-xs padding-xs text-sm"
                    type="text"
                    placeholder="Search"
                />
                <MdSearch className={NavbarCSS.search__icon }/>
            </div>
            <NavLink className="badge-container d-inline_block margin-sm" to="/wishlist">
                    <MdFavoriteBorder className={NavbarCSS.wishlist__icon}/>
                    {
                        token && wishlistItems.length > 0 && <span
                            className="badge-icon top-0 left-100 position-abs translate-topright badge-status-offline border-radius-xl">
                            {wishlistItems.length}
                        </span>
                    }
            </NavLink>

            <NavLink to="/cart" className="badge-container d-inline_block margin-sm">
                    <MdShoppingCart className={NavbarCSS.cart__icon}/>
                    {
                        token && cartItems.length > 0 && <span className="badge-icon top-0 left-100 position-abs translate-topright badge-status-offline border-radius-xl">{cartItems.length}
                        </span>
                    }
            </NavLink>
            {
                token ? 
                <NavLink to="/profile" className="margin-xs">
                    <div className="avatar avatar-xs">
                        <img
                        className="img-responsive img-round"
                        src={Icon}
                        alt="avatar"
                        />
                    </div>
                </NavLink> :
                <NavLink to="/login" className="btn btn-secondary btn-link margin-xs d-inline_block">Login</NavLink> 
            }
        </nav>
    )
}