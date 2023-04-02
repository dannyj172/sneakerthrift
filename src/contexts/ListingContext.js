import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listingServiceFactory } from '../services/listingService';

export const ListingContext = createContext();

export const ListingProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [listings, setListings] = useState([]);
    const listingService = listingServiceFactory(); // auth.accessToken

    useEffect(() => {
        listingService.getAll()
            .then(result => {
                setListings(result)
            })
    }, []);

    const onCreateListingSubmit = async (data) => {
        const newListing = await listingService.create(data);

        setListings(state => [...state, newListing]);

        navigate('/catalog');
    }


    const onListingEditSubmit = async (values) => {
        const result = await listingService.edit(values._id, values);

        setListings(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    }

    const getListing = (listingId) => {
        return listings.find(listing => listing._id === listingId);
    }

    const deleteListing = (listingId) => {
        setListings(state => state.filter(listing => listing._id !== listingId));
    }

    const contextValues = {
        listings,
        onCreateListingSubmit,
        onListingEditSubmit,
        getListing,
        deleteListing,
    }

    return (
        <ListingContext.Provider value={contextValues}>
            {children}
        </ListingContext.Provider>
    );
};

export const useListingContext = () => {
    const context = useContext(ListingContext);

    return context;
}