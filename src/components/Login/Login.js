import "./Login.css";
import authenticationImage from "../../assets/Authentication_Two Color.svg";

export const Login = () => {

    return (
        <div className="login-container">

            <img src={authenticationImage} alt="img" className="login__image" />

            <form action="" className="form">
                <h1 className="form__title">Login</h1>
                <div className="form__div">
                    <i><svg className="form__icon" stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24"
                        height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9ZM14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9Z"
                            fill="currentColor"></path>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12ZM12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z"
                            fill="currentColor"></path>
                    </svg></i>
                    <input type="email" name="email" className="form__input" placeholder=" " />
                    <label htmlFor="email" className="form__label">Email</label>
                </div>

                <div className="form__div margin__diff">
                    <i><svg className="form__icon" id="DETECT" stroke="currentColor" fill="currentColor" stroke-width="0"
                        viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12,2C9.243,2,7,4.243,7,7v2H6c-1.103,0-2,0.897-2,2v9c0,1.103,0.897,2,2,2h12c1.103,0,2-0.897,2-2v-9c0-1.103-0.897-2-2-2 h-1V7C17,4.243,14.757,2,12,2z M9,7c0-1.654,1.346-3,3-3s3,1.346,3,3v2H9V7z M18.002,20H13v-2.278c0.595-0.347,1-0.985,1-1.722 c0-1.103-0.897-2-2-2s-2,0.897-2,2c0,0.736,0.405,1.375,1,1.722V20H6v-9h12L18.002,20z">
                        </path>
                    </svg></i>
                    <input type="password" name="password" className="form__input" placeholder=" " />
                    <label htmlFor="pass" className="form__label">Password</label>
                </div>

                <div className="div__submit">
                    <input type="submit" className="form__button" value="Login" />
                </div>

            </form>
        </div>
    )

}