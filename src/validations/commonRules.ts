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

export const taskValidationSchema = yup.object().shape({
  client: yup
    .string()
    .matches(
      /^[A-Za-z]+(?: [A-Za-z]+)*$/,
      "Client must contain only alphabets and single spaces (no leading, trailing, or double spaces)"
    )
    .max(50, "Maximum 50 characters allowed")
    .required("Client is required"),

  service: yup
    .string()
    .matches(
      /^[A-Za-z]+(?: [A-Za-z]+)*$/,
      "Service must contain only alphabets and single spaces (no leading, trailing, or double spaces)"
    )
    .max(50, "Maximum 50 characters allowed")
    .required("Service is required"),

  dueDate: yup
    .string()
    .required("Due date is required")
    .test(
      "due-before-target",
      "Due date must be before or equal to Target date",
      function (value) {
        const { targetDate } = this.parent;
        if (!value || !targetDate) return true;
        return new Date(value) <= new Date(targetDate);
      }
    ),

  targetDate: yup
    .string()
    .required("Target date is required")
    .test(
      "target-after-due",
      "Target date must be after or equal to Due date",
      function (value) {
        const { dueDate } = this.parent;
        if (!value || !dueDate) return true;
        return new Date(value) >= new Date(dueDate);
      }
    ),

  users: yup.string().required("User is required"),

  tags: yup.string().required("Tag is required"),


  description: yup
    .string()
    .matches(
      /^[A-Za-z]+(?: [A-Za-z]+)*$/,
      "Description must contain only alphabets and single spaces (no leading, trailing, or double spaces)"
    )
    .max(150, "Maximum 150 characters allowed")
    .required("Description is required"),
});
