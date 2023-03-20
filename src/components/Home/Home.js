import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import showcase1 from "../../assets/showcase-1.jpg"
import showcase2 from "../../assets/showcase-2.jpg"
import showcase3 from "../../assets/showcase-3.jpg"

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
                <img className='showcase-img' src={showcase1} height="400px" width="400px" alt='img' />
                <img className='showcase-img' src={showcase2} height="400px" width="400px" alt='img' />
                <img className='showcase-img' src={showcase3} height="400px" width="400px" alt='img' />
            </div>
        </div >
    )
}