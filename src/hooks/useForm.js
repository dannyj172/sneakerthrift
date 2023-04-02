import { useState } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        //look at last exam to figure out how we did errors
        //if values are correct do this V
        onSubmitHandler(values);
        // else find way to display div with error message
        setValues(initialValues);
    }

    const changeValues = (newValues) => {

        setValues(newValues);
    }

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
    };

};