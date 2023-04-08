import { requestFactory } from "./requester";


const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3030'
    : 'http://localhost:3030'
const url = `${baseUrl}/data/listings`;


export const listingServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(url);
        const listings = Object.values(result);
        return listings;
    }

    const getMine = async (userId) => {
        const result = await request.get(`${url}?where=_ownerId%3D%22${userId}%22`);

        return result;
    }

    const getOne = async (listingId) => {
        const result = await request.get(`${url}/${listingId}`);

        return result;
    }

    const create = async (listingData) => {
        const result = await request.post(url, listingData);


        return result;
    }

    const edit = (listingId, data) => request.put(`${url}/${listingId}`, data)

    const deleteListing = (listingId) => request.delete(`${url}/${listingId}`);

    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteListing,
        getMine,
    }
}