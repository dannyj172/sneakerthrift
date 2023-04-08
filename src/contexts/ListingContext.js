import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listingServiceFactory } from '../services/listingService';

export const ListingContext = createContext();

export const ListingProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState();
    const [listings, setListings] = useState([]);
    const listingService = listingServiceFactory(); // auth.accessToken

    useEffect(() => {
        listingService.getAll()
            .then(result => {
                setListings(result)
            })
        // eslint-disable-next-line
    }, []);

    const onCreateListingSubmit = async (values) => {
        let validImage;
        if (!values.title || !values.phonenumber || !values.price || !values.imageUrl || !values.description) {
            setErrors("Input fields cannot be empty!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.title.length < 7) {
            setErrors("Please enter a more specific title!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.title.length > 80) {
            setErrors("Your title is too long!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.phonenumber.length > 15 || values.phonenumber.length < 5) {
            setErrors("Please enter a valid phone number!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.phonenumber.includes('.')) {
            setErrors("Please enter a valid phone number!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.price.length > 6) {
            setErrors("Your price is too high!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.description.length < 7) {
            setErrors("Please enter a more detailed description!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.description.length > 500) {
            setErrors("Your description is too long!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else {
            const regex = new RegExp("^https?://")
            if (regex.test(values.imageUrl)) {
                validImage = true;

            } else {
                validImage = false;
                setErrors("Your image link is not valid!")
                setTimeout(() => {
                    setErrors();
                }, 4000);
            }

            if (validImage) {
                if (values.price.includes('.')) {
                    const newListing = await listingService.create({ ...values, price: (Math.round(values.price)).toString() });
                    setListings(state => [...state, newListing]);
                    navigate('/catalog');
                } else {
                    const newListing = await listingService.create(values);
                    setListings(state => [...state, newListing]);
                    navigate('/catalog');
                }
            }
        }
    }


    const onListingEditSubmit = async (values) => {
        let validImage;
        if (!values.title || !values.phonenumber || !values.price || !values.imageUrl || !values.description) {
            setErrors("Input fields cannot be empty!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.title.length < 7) {
            setErrors("Please enter a more specific title!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.title.length > 80) {
            setErrors("Your title is too long!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.phonenumber.length > 15 || values.phonenumber.length < 5) {
            setErrors("Please enter a valid phone number!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.phonenumber.includes('.')) {
            setErrors("Please enter a valid phone number!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.price.length > 6) {
            setErrors("Your price is too high!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.description.length < 7) {
            setErrors("Please enter a more detailed description!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.description.length > 500) {
            setErrors("Your description is too long!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else {
            const regex = new RegExp("^https?://")
            if (regex.test(values.imageUrl)) {
                validImage = true;

            } else {
                validImage = false;
                setErrors("Your image link is not valid!")
                setTimeout(() => {
                    setErrors();
                }, 4000);
            }

            if (validImage) {
                if (values.price.includes('.')) {
                    const result = await listingService.edit(values._id, { ...values, price: (Math.round(values.price)).toString() });
                    setListings(state => state.map(x => x._id === values._id ? result : x))
                    navigate(`/catalog/${values._id}`);
                } else {
                    const result = await listingService.edit(values._id, values);
                    setListings(state => state.map(x => x._id === values._id ? result : x))
                    navigate(`/catalog/${values._id}`);
                }
            }
        }

    }

    const getListing = (listingId) => {
        return listings.find(listing => listing._id === listingId);
    }

    const deleteListing = (listingId) => {
        setListings(state => state.filter(listing => listing._id !== listingId));
    }

    const contextValues = {
        errors,
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