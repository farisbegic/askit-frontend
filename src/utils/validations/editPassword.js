import * as Yup from 'yup';

const chars = 5;
const requiredField = "This field is required"

export const editPasswordValidation = Yup.object({
    password: Yup.string()
        .min(chars, `Password must be at least ${chars} characters.`)
        .required(requiredField),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required(requiredField),
});