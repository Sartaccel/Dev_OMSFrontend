import * as yup from "yup";
import { emailRule, passwordRule } from "./commonRules";

export const loginValidation = yup.object({
  email: emailRule,
  password: passwordRule,
});
