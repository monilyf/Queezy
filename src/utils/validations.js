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
export const createQuizValidation = Yup.object().shape({
  // title: Yup.string().max(255).required('Title is required'),
  // category: Yup.string().max(255).required('Category is required'),
  // description: Yup.string().max(255).required('Description is required'),
  totalQuestion: Yup.string().max(255).required('Total Question is required'),

});
export const addOptionModalvalidation = Yup.object().shape({
  option: Yup.string().max(255).required('Option is required'),
});
export const addCategoryModalvalidation = Yup.object().shape({
  name: Yup.string().max(255).required('Category is required'),
});
export const addQuestionModalvalidation = Yup.object().shape({
  question: Yup.string().max(255).required('Question is required'),
  level_id: Yup.string().max(255).required('Level is required'),
});
