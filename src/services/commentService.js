import { requestFactory } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const getAll = async (gameId) => {
    const searchQuery = encodeURIComponent(`gameId="${gameId}"`)
    const relationQuery = encodeURIComponent(`author=_ownerId:users`) // with this you get author of comments. If you write username instead of author result will return comment with {username, comment, gameId,  _createdOn, _id, _ownerId}

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`)
    // this this returns array of comments, each comment has author, comment, gameId, _createdOn, _id, _ownerId

    // const result = await request.get(`${baseUrl}?where=${searchQuery}`)
    // this returns array of comments, each comment has comment, gameId, _createdOn, _id, _ownerId
    const comments = Object.values(result);

    return comments;
}

export const create = async (gameId, comment) => {
    const result = await request.post(baseUrl, { gameId, comment });

    return result;
};

