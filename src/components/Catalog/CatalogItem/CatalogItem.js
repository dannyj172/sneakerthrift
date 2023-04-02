import { Link } from 'react-router-dom'

export const CatalogItem = ({
    title,
    imageUrl,
    price,
    _id
}) => {
    return (
        <div className="card">
            <div className="listing-image">
                <img src={imageUrl} alt="..." />
            </div>
            <div className="listing-content">
                <h3>{title}</h3>
                <p>${price}</p>
                <Link to={`/catalog/${_id}`} className="btn listing-button">View Listing</Link>
            </div>
        </div>
    )
}