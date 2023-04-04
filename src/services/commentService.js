import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const getAll = async (listingId) => {
    const searchQuery = encodeURIComponent(`listingId="${listingId}"`)
    const relationQuery = encodeURIComponent(`author=_ownerId:users`) // with this you get author of comments. If you write username instead of author result will return comment with {username, comment, gameId,  _createdOn, _id, _ownerId}

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`)
    // this this returns array of comments, each comment has author, comment, gameId, _createdOn, _id, _ownerId

    // const result = await request.get(`${baseUrl}?where=${searchQuery}`)
    // this returns array of comments, each comment has comment, gameId, _createdOn, _id, _ownerId
    const comments = Object.values(result);

    return comments;
}

export const create = async (listingId, comment) => {
    const result = await request.post(baseUrl, { listingId, comment });

    return result;
};

// const deleteListing = (listingId) => request.delete(`${url}/${listingId}`);

export const deleteComment = (commentId) => request.delete(`${baseUrl}/${commentId}`)