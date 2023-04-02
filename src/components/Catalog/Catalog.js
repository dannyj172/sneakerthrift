import React from 'react'

import './Catalog.css';
// import ebay1 from "../../assets/ebay1.jpg"
// import ebay2 from "../../assets/ebay2.jpg"
// import ebay3 from "../../assets/ebay3.jpg"

import { useListingContext } from "../../contexts/ListingContext";
import { CatalogItem } from "./CatalogItem/CatalogItem"

export const Catalog = () => {

    const { listings } = useListingContext();

    return (
        <div className="catalog">
            <div className="listings-container">
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

                    {listings.map(x => <CatalogItem key={x._id} {...x} />)}

                    {listings.length === 0
                        &&
                        (
                            <div className='no-listings'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M5,6 L1,4.5 L1,18.443038 L12,23 L23,18.443038 L23,4 L19,6 M5,16 L5,2 L12,5 L19,2 L19,16 L12,19 L5,16 Z M11.95,5 L11.95,19"></path></svg>
                                <h3 className="no-listings-text">No current listings.</h3>
                            </ div>
                        )
                    }

                </div>

            </div >
        </div>
    )

}

{/* <div className="card">
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
                    </div> */}