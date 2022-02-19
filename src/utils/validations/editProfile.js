import * as Yup from 'yup';

const requiredField = "This field is required"

export const editProfileValidation = Yup.object({
    firstName: Yup.string().required(requiredField),
    lastName: Yup.string().required(requiredField),
    email: Yup.string().email('Email is invalid').required(requiredField),
})