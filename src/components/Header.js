import React from "react"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../styles/Header.css"
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { getCartTotalItems } from '../reducer'


function Header() {
    const [{ cart }] = useStateValue();
    
  return (
    <div className="header">
        <Link to='/'>
            <img
                className="header__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="logo"
            />
        </Link>

        <div className="header__search">
            <input
            className="header__searchInput"
            type="text"
            />
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
            <Link to='/login'>
                <div className="header__option">
                    <span className="header__optionLineOne">Hello, </span>
                    <span className="header__optionLineTwo">Sign in</span>
                </div>
            </Link>

            <div className="header__option">
                <span className="header__optionLineOne">Orders</span>
                <span className="header__optionLineTwo">& Returns</span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>

            <Link to='/checkout'>
                <div className="header__optionCart">
                    <ShoppingCartIcon />
                    <span className="header__optionLineTwo header__cartCount">{getCartTotalItems(cart)}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header