import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import showcase1 from "../../assets/showcase-1.jpg"
import showcase2 from "../../assets/showcase-2.jpg"
import showcase3 from "../../assets/showcase-3.jpg"
import ebay1 from "../../assets/ebay1.jpg"
import ebay2 from "../../assets/ebay2.jpg"
import ebay3 from "../../assets/ebay3.jpg"
import ebay5 from "../../assets/ebay5.jpg"
import ebay6 from "../../assets/ebay6.jpg"

export const Home = () => {
    return (
        <div className='home'>

            <div className="home-introduction">
                <div className="container spacing">
                    <h1 className="primary-title">Amazing shoes at an amazing price</h1>
                    <p>Number #1 shoe reseller globally. "SNEAKERTHRIFT" is here to provide you with the best footwear there is!</p>
                    <Link to="#" className="btn home-button">See what we have</Link>
                </div>
            </div>

            <div className='showcase'>
                <img className='showcase-img' src={showcase1} alt='showcase' />
                <img className='showcase-img' src={showcase2} alt='showcase' />
                <img className='showcase-img' src={showcase3} alt='showcase' />
            </div>

            <div className="listings-container">

                <h2 className="listings-title">Latest Listings</h2>

                <div className='listings'>

                    <div className="card">
                        <div className="card-image">
                            <img src={ebay1} alt="..." />
                        </div>
                        <div className="card-content">
                            <h3>DARK GREEN FOREST NIKE AIR FORCE 1 LIMITED</h3>
                            <p>$15</p>
                            <button className="btn card-button">View Listing</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={ebay2} alt="..." />
                        </div>
                        <div className="card-content">
                            <h3>NIKE AIR FORCE 1 UTILITY (GS) BLACK-GUM BROWN SZ 6Y-WOMENS [AJ6601-003]</h3>
                            <p>$100</p>
                            <button className="btn card-button">View Listing</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={ebay3} alt="..." />
                        </div>
                        <div className="card-content">
                            <h3>nike air force 1 mid SF AF1 youth shoes size 6.5 mushroom</h3>
                            <p>$30</p>
                            <button className="btn card-button">View Listing</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* <div className='listings'>
                    <div className='listing'>
                        <img className='listing-img' src={ebay1} alt='listing' />
                        <h3 className='listing-name'>Nike Dualtone Racer Green 918227-301 Men's Trainers</h3>
                        <h3 className='listing-price'>$50</h3>
                        <Link to="#" className="btn home-button">View Listing</Link>
                    </div>
                    <div className='listing'>
                        <img className='listing-img' src={ebay2} alt='listing' />
                        <h3 className='listing-name'>adidas Samba OG Mens Originals Shoes Trainers Uk Size 8 - 11 B75806 White black</h3>
                        <h3 className='listing-price'>$50</h3>
                        <Link to="#" className="btn home-button">View Listing</Link>
                    </div>
                    <div className='listing'>
                        <img className='listing-img' src={ebay3} alt='listing' />
                        <h3 className='listing-name'>adidas advantage Mens Shoes Trainers Uk Size 7.5 to 12.5 EE7692 white Originals</h3>
                        <h3 className='listing-price'>$50</h3>
                        <Link to="#" className="btn home-button">View Listing</Link>
                    </div>
                </div> */}

        </div >
    )
}