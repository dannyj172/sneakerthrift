import "./EditListing.css";

export const EditListing = () => {

    return (
        <div className="edit-container">

            <form action="" className="form">
                <h1 className="form__title">Edit Listing</h1>

                <div className="form__div">
                    <input
                        type="text"
                        name="title"
                        className="form__input"
                        placeholder=" "
                    />
                    <label htmlFor="title" className="form__label">Title</label>
                </div>

                <div className="form__div">
                    <input
                        type="number"
                        name="phonenumber"
                        className="form__input"
                        placeholder=" "
                    />
                    <label htmlFor="phonenumber" className="form__label">Phone Number</label>
                </div>

                <div className="form__div">
                    <input
                        type="number"
                        name="price"
                        className="form__input"
                        placeholder=" "
                    />
                    <label htmlFor="price" className="form__label">Price</label>
                </div>

                <div className="form__div">
                    <input
                        type="text"
                        name="imageUrl"
                        className="form__input"
                        placeholder=" "
                    />
                    <label htmlFor="listing-img" className="form__label">Image</label>
                </div>

                <div className="form__div">
                    <input
                        type="text"
                        name="description"
                        className="form__input"
                        placeholder=" "
                    />
                    <label htmlFor="description" className="form__label">Description</label>
                </div>

            </form>
        </div>
    )

}