import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from 'react';
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from 'framer-motion';

import showcase1 from "../../assets/showcase-1.jpg"
import showcase2 from "../../assets/showcase-2.jpg"
import showcase3 from "../../assets/showcase-3.jpg"
import ebay1 from "../../assets/ebay1.jpg"
import ebay2 from "../../assets/ebay2.jpg"
import ebay3 from "../../assets/ebay3.jpg"
import vans from "../../assets/logo-vans.png"
import nike from "../../assets/logo-nike.png"
import adidas from "../../assets/logo-adidas.png"
import supreme from "../../assets/logo-supreme.png"
import reebok from "../../assets/logo-reebok.png"

export const Home = () => {
    const transition = { type: "spring", duration: 1 }
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
    return (
        <div className='home'>

            <div className="home-introduction">
                <div className="introduction-container spacing">
                    <h1 className="primary-title">Amazing shoes at an amazing price</h1>
                    <p>Number #1 shoe reseller globally. "SNEAKERTHRIFT" is here to provide you with the best footwear there is!</p>
                    <motion.div
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={transition}
                    >
                        <Link to="#" className="btn home-button">See what we have</Link>
                    </motion.div>
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
                            <h3>NIKE AIR FORCE 1 UTILITY (GS) BLACK-GUM BROWN SZ 6 123 456 789</h3>
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

            <div className="testimonials">
                <div className="left-t">
                    <span>Testimonials</span>
                    <span className='left-t-coloredtext'>What clients</span>
                    <span>say about us</span>
                    <motion.span
                        key={selected}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={transition}
                    >
                        {testimonialsData[selected].review}
                    </motion.span>
                    <span>
                        <span
                            style={{ color: "var(--lightBlue)" }}>
                            {testimonialsData[selected].name}
                        </span>{" "}
                        - {testimonialsData[selected].status}
                    </span>
                </div>
                <div className="right-t">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        transition={{ ...transition, duration: 2 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    ></motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        transition={{ ...transition, duration: 2 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    ></motion.div>
                    <motion.img
                        key={selected}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={transition}
                        src={testimonialsData[selected].image} alt="" />

                    <div className="arrows">
                        <img onClick={() => {
                            selected === 0
                                ? setSelected(tLength - 1)
                                : setSelected((prev) => prev - 1)
                        }}
                            src={leftArrow} alt="" />

                        <img onClick={() => {
                            selected === tLength - 1
                                ? setSelected(0)
                                : setSelected((prev) => prev + 1)
                        }}
                            src={rightArrow} alt="" />
                    </div>
                </div>
            </div >

            <div className="brands">
                <div className="brands-container">
                    <h2 className="brands-title">OUR TOP AFFILIATES</h2>
                    <div className="row">

                        <div className="col-5">
                            <Link target="_blank" to="https://www.vans.com/en-us?_sr=1">
                                <img src={vans} alt="logo" />
                            </Link>
                        </div>

                        <div className="col-5">
                            <Link target="_blank" to="https://www.nike.com/bg/">
                                <img src={nike} alt="logo" />
                            </Link>
                        </div>


                        <div className="col-5">
                            <Link target="_blank" to="https://www.adidas.com/us">
                                <img src={adidas} alt="logo" />
                            </Link>
                        </div>


                        <div className="col-5">
                            <Link target="_blank" to="https://eu.supreme.com/pages/shop">
                                <img src={supreme} alt="logo" />
                            </Link>
                        </div>


                        <div className="col-5">
                            <Link target="_blank" to="https://www.reebok.com/us">
                                <img src={reebok} alt="logo" />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}