import * as Yup from "yup";

export const contactValidators = Yup.object({
    email: Yup.string().email('Invalid email address').required('Champ obligatoire'),
    message: Yup.string().required('Champ obligatoire')
  });