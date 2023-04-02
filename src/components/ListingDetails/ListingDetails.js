import "./ListingDetails.css";
import ebay1 from "../../assets/ebay1.jpg";

import { useEffect, useState, useReducer } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { listingServiceFactory } from '../../services/listingService';
// import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

// import { AddComment } from './AddComment/AddComment';
import { listingReducer } from '../../reducers/listingReducer';
import { useListingContext } from '../../contexts/ListingContext';

export const ListingDetails = () => {

    const { listingId } = useParams();
    const { userId, isAuthenticated, userEmail } = useAuthContext();
    const { deleteListing } = useListingContext();
    const [listing, dispatch] = useReducer(listingReducer, {})
    const listingService = useService(listingServiceFactory)
    const navigate = useNavigate();

    // useEffect(() => {
    //     Promise.all([
    //         gameService.getOne(gameId),
    //         commentService.getAll(gameId),
    //     ])
    //         .then(([gameData, comments]) => {

    //             const gameState = {
    //                 ...gameData,
    //                 comments,
    //             }

    //             dispatch({ type: 'GAME_FETCH', payload: gameState })
    //         })
    // }, [gameId]);

    // const onCommentSubmit = async (values) => {
    //     const response = await commentService.create(gameId, values.comment);

    //     dispatch({
    //         type: 'COMMENT_ADD',
    //         payload: response,
    //         userEmail,
    //     })
    // }

    useEffect(() => {
        Promise.all([
            listingService.getOne(listingId)
        ])
            .then(([listingData]) => {

                const listingState = {
                    ...listingData,
                }

                dispatch({ type: 'LISTING_FETCH', payload: listingState })
            })
    }, [listingId]);

    const isOwner = listing._ownerId === userId;

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${listing.title}`)

        if (result) {
            await listingService.delete(listing._id);

            deleteListing(listing._id)

            navigate('/catalog');
        }

    }


    return (
        <div className="listing-container">
            <div className="listing">
                <div className="listing-details">
                    <img src={listing.imageUrl} alt="img" />
                </div>

                <div className="listing-details">
                    <h1>{listing.title}</h1>
                    <h2 className="phone-number">{listing.phonenumber}</h2>
                    <h4>${listing.price}</h4>
                    <h3>Description <i className="fa fa-indent" aria-hidden="true"></i></h3>
                    <br />
                    <p>{listing.description}</p>
                    {isOwner && (
                        <>
                            <Link to={`/catalog/${listing._id}/edit`} className="edit-button">Edit</Link>
                            <Link onClick={onDeleteClick} className="delete-button">Delete</Link>
                        </>
                    )}
                </div>
            </div>
        </div>

    )

}