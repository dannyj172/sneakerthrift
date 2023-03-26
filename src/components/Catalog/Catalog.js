import React from 'react'
// import { Link } from 'react-router-dom';
import './Catalog.css';
import ebay1 from "../../assets/ebay1.jpg"
import ebay2 from "../../assets/ebay2.jpg"
import ebay3 from "../../assets/ebay3.jpg"

export const Catalog = () => {
    return (
        <div className="catalog">
            < div className="listings-container" >
                <h2 className="listings-title">Catalog</h2>

                <div className="listings-sort">
                    <select name="sort" className="sort">
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                        <option value="Price Up">Price Up</option>
                        <option value="Price Down">Price Down</option>

                    </select>
                </div>

                <div className='listings'>
                    <div className="card">
                        <div className="listing-image">
                            <img src={ebay1} alt="..." />
                        </div>
                        <div className="listing-content">
                            <h3>DARK GREEN FOREST NIKE AIR FORCE 1 LIMITED</h3>
                            <p>$15.00</p>
                            <button className="btn listing-button">View Listing</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="listing-image">
                            <img src={ebay2} alt="..." />
                        </div>
                        <div className="listing-content">
                            <h3>NIKE AIR FORCE 1 UTILITY (GS) BLACK-GUM BROWN SZ 6 123 456 789</h3>
                            <p>$100.00</p>
                            <button className="btn listing-button">View Listing</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="listing-image">
                            <img src={ebay3} alt="..." />
                        </div>
                        <div className="listing-content">
                            <h3>nike air force 1 mid SF AF1 youth shoes size 6.5 mushroom</h3>
                            <p>$30.00</p>
                            <button className="btn listing-button">View Listing</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="listing-image">
                            <img src={ebay2} alt="..." />
                        </div>
                        <div className="listing-content">
                            <h3>NIKE AIR FORCE 1 UTILITY (GS) BLACK-GUM BROWN SZ 6 123 456 789</h3>
                            <p>$100.00</p>
                            <button className="btn listing-button">View Listing</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="listing-image">
                            <img src={ebay1} alt="..." />
                        </div>
                        <div className="listing-content">
                            <h3>DARK GREEN FOREST NIKE AIR FORCE 1 LIMITED</h3>
                            <p>$15.00</p>
                            <button className="btn listing-button">View Listing</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="listing-image">
                            <img src={ebay3} alt="..." />
                        </div>
                        <div className="listing-content">
                            <h3>nike air force 1 mid SF AF1 youth shoes size 6.5 mushroom</h3>
                            <p>$30.00</p>
                            <button className="btn listing-button">View Listing</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="listing-image">
                            <img src={ebay1} alt="..." />
                        </div>
                        <div className="listing-content">
                            <h3>DARK GREEN FOREST NIKE AIR FORCE 1 LIMITED</h3>
                            <p>$15.00</p>
                            <button className="btn listing-button">View Listing</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="listing-image">
                            <img src={ebay3} alt="..." />
                        </div>
                        <div className="listing-content">
                            <h3>nike air force 1 mid SF AF1 youth shoes size 6.5 mushroom</h3>
                            <p>$30.00</p>
                            <button className="btn listing-button">View Listing</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="listing-image">
                            <img src={ebay2} alt="..." />
                        </div>
                        <div className="listing-content">
                            <h3>NIKE AIR FORCE 1 UTILITY (GS) BLACK-GUM BROWN SZ 6 123 456 789</h3>
                            <p>$100.00</p>
                            <button className="btn listing-button">View Listing</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="listing-image">
                            <img src={ebay3} alt="..." />
                        </div>
                        <div className="listing-content">
                            <h3>nike air force 1 mid SF AF1 youth shoes size 6.5 mushroom</h3>
                            <p>$30.00</p>
                            <button className="btn listing-button">View Listing</button>
                        </div>
                    </div>
                </div>

            </div >
        </div>
    )

}