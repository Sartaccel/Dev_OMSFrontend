import * as yup from "yup";

/* EMAIL */
export const emailRule = yup
  .string()
  .email("Invalid email format")
  .required("Email is required");


/* PASSWORD */
export const passwordRule = yup
  .string()
  .required("Password is required")
  .min(8, "Password must be at least 8 characters")
  .matches(
    /[A-Z]/,
    "Password must contain at least one uppercase letter"
  )
  .matches(
    /[a-z]/,
    "Password must contain at least one lowercase letter"
  )
  .matches(
    /[0-9]/,
    "Password must contain at least one number"
  )
  .matches(
    /[@$!%*?&#]/,
    "Password must contain at least one special character (@$!%*?&#)"
  );



/* NAME */
export const nameRule = yup
  .string()
  .trim()
  .required("Name is required")
  .min(2, "Minimum 2 characters")
  .matches(
    /^[A-Za-z\s]+$/,
    "Name must contain only letters"
  );


/* USERNAME */
export const usernameRule = yup
  .string()
  .required("Username is required")
  .min(6, "Username must be at least 6 characters")
  .matches(
    /^[A-Za-z][A-Za-z0-9]*$/,
    "Username must start with a letter and contain only letters and numbers"
  );

  /* MOBILE */
export const mobileRule = yup
  .string()
  .required("Mobile number is required")
  .matches(
    /^[6-9]\d{9}$/,
    "Enter a valid 10 digit mobile number"
  );


