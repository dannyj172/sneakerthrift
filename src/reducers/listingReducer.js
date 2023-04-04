export const listingReducer = (state, action) => {
    switch (action.type) {
        case 'LISTING_FETCH':
            return { ...action.payload };
        case 'COMMENT_ADD':
            return { ...state, comments: [...state.comments, { ...action.payload, author: { email: action.userEmail } }], }
        case 'COMMENT_DELETE':
            return { ...state, comments: [...state.comments.filter(comment => comment._id !== action.payload)] }
        default:
            return state;
    }
}