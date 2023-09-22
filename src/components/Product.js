import React from "react"
import "../styles/Product.css"
import { useStateValue } from "./StateProvider"

function Product({ id, title, image, rating, price }) {
    const [{ cart }, dispatch] = useStateValue();

    const addToCart = () => {
        dispatch({
            type: "ADD_TO_CART",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }

  return (
    <div className="product" key={id}>
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small><sup>₹</sup></small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating).fill().map((_, i) => (
                    <p key={i}>⭐</p>
                ))}
            </div>
        </div>
        <img alt="" src={image}/>
        <button onClick={addToCart}>Add to cart</button>
    </div>
  )
}

export default Product