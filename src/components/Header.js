import React from "react"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../styles/Header.css"


function Header() {
  return (
    <div className="header">
        <img
        className="header__logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="logo"
        />

        <div className="header__search">
            <input
            className="header__searchInput"
            type="text"
            />
            <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
            <div className="header__option">
                <span className="header__optionLineOne">Hello, </span>
                <span className="header__optionLineTwo">Sign in</span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">Orders</span>
                <span className="header__optionLineTwo">& Returns</span>
            </div>

            <div className="header__option">
                <span className="header__optionLineOne">Your</span>
                <span className="header__optionLineTwo">Prime</span>
            </div>

            <div className="header__optionCart">
                <ShoppingCartIcon />
                <span className="header__optionLineTwo header__cartCount">0</span>
            </div>
        </div>
    </div>
  )
}

export default Header