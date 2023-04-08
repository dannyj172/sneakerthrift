import { createContext, useContext, useState } from 'react';

import { authServiceFactory } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();


export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState();
    const [auth, setAuth] = useLocalStorage('auth', {});

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (values) => {
        if (!values.email && !values.password) {
            setErrors("Please enter an email and password!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (!values.password) {
            setErrors("Please enter a password!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (!values.email) {
            setErrors('Please enter an email address!')
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else {
            try {
                const result = await authService.login(values);

                setAuth(result);
                navigate('/catalog');

            } catch (error) {
                setErrors('Incorrect username or password!')
                setTimeout(() => {
                    setErrors();
                }, 4000);
            }
        }
    };

    const onRegisterSubmit = async (values) => {
        if (!values.email && !values.password) {
            setErrors("Please enter an email and password!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.password !== values.confirmPassword) {
            setErrors("Passwords don't match!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (!values.password) {
            setErrors("Please enter a password!")
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.password.length < 6) {
            setErrors('Your password is too short!')
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (!values.email) {
            setErrors('Please enter an email address!')
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else if (values.email.length < 4) {
            setErrors('Please enter a valid email address!')
            setTimeout(() => {
                setErrors();
            }, 4000);
        } else {
            try {
                const result = await authService.register(values);
                setAuth(result);
                navigate('/catalog');

            } catch (error) {
                setErrors('Account with this email already exists!')
                setTimeout(() => {
                    setErrors();
                }, 4000);
            }
        }
    }

    const onLogout = async () => {
        await authService.logout();

        setAuth({});
    }


    const contextValues = {
        errors,
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
    };
    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    )
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
}