import React from "react"
import "../styles/Product.css"

function Product({ id, title, image, rating, price }) {
  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small><sup>₹</sup></small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
        </div>
        <img alt="" src={image}/>
        <button>Add to cart</button>
    </div>
  )
}

export default Product