import './MyListings.css';
import { CatalogItem } from "./CatalogItem/CatalogItem"

import { useAuthContext } from '../../contexts/AuthContext';
import { listingServiceFactory } from '../../services/listingService';
import { useService } from '../../hooks/useService';
import { useEffect, useState } from 'react';


export const MyListings = () => {

    const [listings, setListings] = useState([]);
    const listingService = useService(listingServiceFactory);
    const { userId } = useAuthContext();

    useEffect(() => {
        listingService.getMine(userId)
            .then(result => {
                setListings(result)
                console.log(listings)
            })
        // eslint-disable-next-line
    }, [userId]);

    return (
        <div className="catalog">
            <div className="listings-container">
                <h2 className="listings-title">My Listings</h2>


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