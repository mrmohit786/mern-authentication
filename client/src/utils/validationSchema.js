import * as Yup from 'yup';

// registration form validation schema for formik
export const registerFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Name is required'),

  email: Yup.string().email().required('Email is required'),

  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password is too short - should be 6 chars minimum'),

  confirmPassword: Yup.string()
    .required('Confirm password')
    .when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], 'Password not match'),
    }),
});
