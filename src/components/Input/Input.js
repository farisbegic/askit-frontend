import React from 'react';
import {useField, ErrorMessage} from "formik";

const Input = ({ label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="mb-2">
            { label && (
                <label htmlFor={field.name}>{label}</label>
            )}
            <input className={`form-control mt-2 shadow-none ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} autoComplete="on"/>
            <ErrorMessage component="div" className="text-danger" name={field.name}  />
        </div>
    );
};

export default Input;