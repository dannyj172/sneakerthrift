import "./ListingDetails.css";

import { useEffect, useReducer } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { listingServiceFactory } from '../../services/listingService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

import { AddComment } from './AddComment/AddComment';
import { listingReducer } from '../../reducers/listingReducer';
import { useListingContext } from '../../contexts/ListingContext';

export const ListingDetails = () => {

    const { listingId } = useParams();
    const { userId, isAuthenticated, userEmail } = useAuthContext();
    const { deleteListing } = useListingContext();
    const [listing, dispatch] = useReducer(listingReducer, {})
    const listingService = useService(listingServiceFactory)
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            listingService.getOne(listingId),
            commentService.getAll(listingId),
        ])
            .then(([listingData, comments]) => {

                const listingState = {
                    ...listingData,
                    comments,
                }

                dispatch({ type: 'LISTING_FETCH', payload: listingState })
            })
    }, [listingId, listingService]);

    const onCommentSubmit = async (values) => {
        if (values.comment !== '') {
            const response = await commentService.create(listingId, values.comment);

            dispatch({
                type: 'COMMENT_ADD',
                payload: response,
                userEmail,
            })
        } else {
            return;
        }

    }

    const isOwner = listing._ownerId === userId;

    const onDeleteClick = async () => {
        await listingService.delete(listing._id);
        deleteListing(listing._id)
        navigate('/catalog');
    }

    const hideDeleteConfirm = () => {
        const toHide = document.querySelector('.listing-delete-wrapper');
        toHide.classList.add('hidden');
    }

    const showDeleteConfirm = () => {
        const toHide = document.querySelector('.listing-delete-wrapper');
        toHide.classList.remove('hidden');
    }

    const onCommentDelete = (commentId) => {
        commentService.deleteComment(commentId);
        dispatch({
            type: 'COMMENT_DELETE',
            payload: commentId,
        })
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
                            <Link onClick={showDeleteConfirm} className="delete-button">Delete</Link>
                        </>
                    )}
                </div>
            </div>

            <div className="listing-delete-wrapper hidden">
                <div className='listing-delete'>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M464 688a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path></svg>

                    <h1>Are you sure?</h1>
                    <p>Selecting confirm will delete {listing.title}.</p>
                    <div className="listing-delete-buttons">
                        <button onClick={hideDeleteConfirm} className="cancel-button">Cancel</button>
                        <button onClick={onDeleteClick} className="confirm-button">Confirm</button>
                    </div>
                </div>
            </div>

            <div className="listing-comment-section">
                <h1>Comments:</h1>

                {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}

                <div className="comments">

                    <ul>
                        {listing.comments && listing.comments.map(x => (
                            <li key={x._id} className='comment'>
                                <p>
                                    <span>{x.author.email}:</span> {x.comment}
                                    {userId === x._ownerId && (
                                        <svg onClick={() => onCommentDelete(x._id)} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"></path><path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z"></path><path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z"></path></svg>
                                    )}
                                </p>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>

        </div>

    )

}