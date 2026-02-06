import * as yup from "yup";

/* EMAIL */
export const emailRule = yup
  .string()
  .email("Invalid email format")
  .required("Email is required");

/* PASSWORD */
export const passwordRule = yup
  .string()
  .min(6, "Minimum 6 characters")
  .required("Password is required");

/* NAME */
export const nameRule = yup
  .string()
  .min(2, "Minimum 2 characters")
  .required("Name is required");
