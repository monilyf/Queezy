import * as Yup from 'yup';

export const loginValidation = Yup.object().shape({
  email: Yup.string().email('Email is not valid').required('Email is required'),
  password: Yup.string().max(12).required('Password is required'),
});
export const signupValidation = Yup.object().shape({
  name: Yup.string().max(255).required('Name is required'),
  email: Yup.string().email('Email is not valid').required('Email is required'),
});
export const resetPasswordValidation = Yup.object().shape({
  password: Yup.string().max(12).required('Password is required'),
  confirmPassword: Yup.string().test('equal', 'Passwords do not match!', function (v) {
      const ref = Yup.ref('password');
      return v === this.resolve(ref);
  })
});
