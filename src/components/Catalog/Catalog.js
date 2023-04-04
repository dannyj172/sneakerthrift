import { useState } from 'react'

import './Catalog.css';

import { useListingContext } from "../../contexts/ListingContext";
import { CatalogItem } from "./CatalogItem/CatalogItem"


export const Catalog = () => {

    const { listings } = useListingContext();
    const [option, setOption] = useState('newest');

    const onOptionChange = (e) => {
        setOption(e.target.value);
    }

    switch (option) {
        case 'newest':
            listings.sort((listingOne, listingTwo) => parseFloat(listingTwo._createdOn) - parseFloat(listingOne._createdOn));
            break;
        case 'oldest':
            listings.sort((listingOne, listingTwo) => parseFloat(listingOne._createdOn) - parseFloat(listingTwo._createdOn));
            break;
        case 'price up':
            listings.sort((listingOne, listingTwo) => parseFloat(listingOne.price) - parseFloat(listingTwo.price));
            break;
        case 'price down':
            listings.sort((listingOne, listingTwo) => parseFloat(listingTwo.price) - parseFloat(listingOne.price));
            break;
        default:
            break;
    }

    return (
        <div className="catalog">
            <div className="listings-container">
                <h2 className="listings-title">Catalog</h2>

                <div className="listings-sort">
                    <select name="sort" className="sort" onChange={onOptionChange}>
                        <option label='Newest' value="newest"></option>
                        <option label='Oldest' value="oldest"></option>
                        <option label='Price Up' value="price up"></option>
                        <option label='Price Down' value="price down"></option>
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