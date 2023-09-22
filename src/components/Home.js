import React from "react"
import "../styles/Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/S2S/Homepage_DesktopHeroTemplate_1500x600._CB587504363_.jpg"
            alt=""/>

            <div className="home__row">
                <Product
                id={1}
                title="MIND MASTER: Winning Lessons from a Champion's Life [Paperback] Anand Ninan, Viswanathan Susan Paperback"
                price={318}
                image="https://m.media-amazon.com/images/I/811wub8YDXL._SY425_.jpg"
                rating={4}
                />
                <Product
                id={2}
                title="VINCENT CHASE EYEWEAR Unisex Adult Square Polarization Sunglasses"
                price={599}
                image="https://m.media-amazon.com/images/I/41Dr9I4x1EL._UX679_.jpg"
                rating={2}
                />
                <Product
                id={3}
                title="Tribit[Upgraded Version XSound Go 16W 5.0 Bluetooth Speaker with Loud Sound & Rich Bass Black"
                price={2599}
                image="https://m.media-amazon.com/images/I/71BJbii7jlL._SY450_.jpg"
                rating={3}
                />
            </div>

            <div className="home__row">
                <Product
                id={4}
                title="Kadence professional Guitar A311 Black"
                price={5999}
                image="https://m.media-amazon.com/images/I/516sPjvUtEL._SX569_.jpg"
                rating={5}
                />
                <Product
                id={5}
                title="HUION Inspiroy H640P 6 * 4 inch Graphics Drawing Tablet with Battery-Free Stylus 8192 Pressure Sensitivity 6 Customized Hot Keys, Digital Pen Tablet for Linux, Mac, Windows PC and Android"
                price={2099}
                image="https://m.media-amazon.com/images/I/51YgT7fv0lL._SX569_.jpg"
                rating={3}
                />
            </div>

            <div className="home__row">
                <Product
                id={6}
                title="Zinq Technologies Zinq Cool Slate Dual Fan Cooling Pad for Notebook/Laptop with Dual USB Port(Black)"
                price={859}
                image="https://m.media-amazon.com/images/I/81ejONjw7+L._SX569_.jpg"
                rating={2}
                />
                <Product
                id={7}
                title="Portronics C-Konnect Type C to HDMI Adapter (3-in-1), Multiport USB C Hub with 4K@30Hz, USB 3.0 @ 5Gbps (White)"
                price={749}
                image="https://m.media-amazon.com/images/I/51ag4s4oOwL._SX569_.jpg"
                rating={3}
                />
                <Product
                id={8}
                title="Oppo F23 5G (Cool Black, 8GB RAM, 256GB Storage) | 5000 mAh Battery with 67W SUPERVOOC Charger"
                price={4099}
                image="https://m.media-amazon.com/images/I/81kvDo7F0GL._SX679_.jpg"
                rating={4}
                />
                <Product
                id={9}
                title="OnePlus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass, 10 Mins Charge (Acoustic Red)"
                price={1599}
                image="https://m.media-amazon.com/images/I/5171kgKguGL._SX679_.jpg"
                rating={5}
                />
            </div>
        </div>
    </div>
  )
}

export default Home