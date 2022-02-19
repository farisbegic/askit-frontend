import * as Yup from "yup";

const chars = 5;
const requiredField = "This field is required"

export const registerValidation = Yup.object({
    firstName: Yup.string().required(requiredField),
    lastName: Yup.string().required(requiredField),
    email: Yup.string()
        .email("Email is invalid")
        .required(requiredField),
    password: Yup.string()
        .min(chars, `Password must be at least ${chars} characters.`)
        .required(requiredField),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Password must match")
        .required(requiredField),
});