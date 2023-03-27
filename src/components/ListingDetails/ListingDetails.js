import "./ListingDetails.css";
import ebay1 from "../../assets/ebay1.jpg";

export const ListingDetails = () => {
    return (
        <div class="listing-container">
            <div className="listing">
                <div className="listing-details">
                    <img src={ebay1} alt="img" />
                </div>

                <div className="listing-details">
                    <h1>DARK GREEN FOREST NIKE AIR FORCE 1 LIMITED</h1>
                    <h2 className="phone-number">0897331924</h2>
                    <h4>$15.00</h4>
                    <h3>Description <i className="fa fa-indent" aria-hidden="true"></i></h3>
                    <br />
                    <p>I have 3 pairs of this shoe for sale. Two in size 43 and one in size 44! I ship anywhere at your expense.</p>
                </div>
            </div>
        </div>

    )

}