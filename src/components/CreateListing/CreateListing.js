import "./CreateListing.css";

import { useForm } from '../../hooks/useForm';
import { useListingContext } from '../../contexts/ListingContext';
import Popup from "../Popup/Popup";

export const CreateListing = () => {

    const { errors, onCreateListingSubmit } = useListingContext();
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        phonenumber: '',
        price: '',
        imageUrl: '',
        description: '',
    }, onCreateListingSubmit)

    return (
        <div className="create-container">

            {errors && (
                <Popup text={errors}></Popup>
            )}

            <form method="post" onSubmit={onSubmit} className="form">
                <h1 className="form__title">Create Listing</h1>

                <div className="form__div">
                    <input
                        type="text"
                        name="title"
                        className="form__input"
                        placeholder=" "
                        value={values.title}
                        onChange={changeHandler}
                    />
                    <label htmlFor="title" className="form__label">Title</label>
                </div>

                <div className="form__div">
                    <input
                        type="number"
                        name="phonenumber"
                        className="form__input"
                        placeholder=" "
                        value={values.phonenumber}
                        onChange={changeHandler}
                    />
                    <label htmlFor="phonenumber" className="form__label">Phone Number</label>
                </div>

                <div className="form__div">
                    <input
                        type="number"
                        name="price"
                        className="form__input"
                        placeholder=" "
                        value={values.price}
                        onChange={changeHandler}
                    />
                    <label htmlFor="price" className="form__label">Price</label>
                </div>

                <div className="form__div">
                    <input
                        type="text"
                        name="imageUrl"
                        className="form__input"
                        placeholder=" "
                        value={values.imageUrl}
                        onChange={changeHandler}
                    />
                    <label htmlFor="listing-img" className="form__label">Image</label>
                </div>

                <div className="form__div">
                    <input
                        type="text"
                        name="description"
                        className="form__input"
                        placeholder=" "
                        value={values.description}
                        onChange={changeHandler}
                    />
                    <label htmlFor="description" className="form__label">Description</label>
                </div>

                <div className="div__submit">
                    <input type="submit" className="form__button" value="CREATE" />
                </div>

            </form>
        </div>
    )

}