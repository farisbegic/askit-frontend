import * as Yup from 'yup';

const requiredField = "This field is required"

export const loginValidation = Yup.object({
    email: Yup.string().email('Email is invalid').required(requiredField),
    password: Yup.string().required(requiredField),
})