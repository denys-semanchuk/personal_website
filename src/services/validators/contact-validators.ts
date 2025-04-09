import * as Yup from "yup";

export const contactValidators = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required')
  });