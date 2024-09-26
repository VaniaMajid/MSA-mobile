import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  rememberMe: Yup.boolean(),
});

export const selectRoleSchema = Yup.object().shape({
  role: Yup.string().required('Please select a role to proceed.'),
  terms: Yup.boolean()
    .oneOf([true], 'You must agree to the terms and privacy policy.')
    .required(),
});

export const signupEmailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

export const otpSchema = Yup.object().shape({
  otp: Yup.string()
    .required('OTP is required')
    .length(6, 'Please enter a valid 6-digit OTP'),
});

export const passwordSchema = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      'Password must include a special character',
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

export const patientRegistrationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  postCode: Yup.string().required('Post code is required'),
  mobileNumber: Yup.string()
    .required('Mobile number is required')
    .matches(/^\d{11,14}$/, 'Mobile number must be valid'),
  gender: Yup.string().required('Gender is required'),
  dateOfBirth: Yup.date()
    .required('Date of Birth must be valid')
    .test('is-valid-date', 'Invalid Date of Birth', value => {
      if (!value) return false;

      const date = new Date(value);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const daysInMonth = new Date(year, month, 0).getDate();

      if (year < 1900 || year > new Date().getFullYear()) return false;

      if (month < 0 || month > 12 || day < 1 || day > daysInMonth) return false;

      if (date > new Date()) return false;

      return true;
    }),
  allergy: Yup.string().test(
    'is-required',
    'Please specify allergy',
    function (value) {
      const {isToggleOn} = this.parent;
      return isToggleOn || (value && value.trim().length > 0);
    },
  ),
  height: Yup.number()
    .required('Height is required')
    .positive('Height must be greater than zero'),
  weight: Yup.number()
    .required('Weight is required')
    .positive('Weight must be greater than zero'),
  bmi: Yup.number()
    .required('BMI is required')
    .positive('BMI must be greater than zero'),

  medicalHistory: Yup.string().required('Medical history is required'),
  isToggleOn: Yup.boolean().required(),
});

const calculateAge = (dateOfBirth: Date) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const specialistRegistrationSchema = Yup.object().shape({
  inviteCode: Yup.string().required('Invite code is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  gmcNumber: Yup.string().required('GMC number is required'),
  postCode: Yup.string().required('Post code is required'),
  mobileNumber: Yup.string()
    .required('Mobile number is required')
    .matches(/^\d{11,14}$/, 'Mobile number must be valid'),
  gender: Yup.string().required('Gender is required'),
  dateOfBirth: Yup.date()
    .required('Date of Birth is required')
    .test('is-valid-date', 'Invalid Date of Birth', value => {
      if (!value) return false;

      const date = new Date(value);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const daysInMonth = new Date(year, month, 0).getDate();

      if (year < 1900 || year > new Date().getFullYear()) return false;

      if (month < 1 || month > 12 || day < 1 || day > daysInMonth) return false;

      if (date > new Date()) return false;

      return true;
    })
    .test('is-at-least-18', 'You must be at least 18 years old', value => {
      const age = calculateAge(value);
      return age >= 18;
    }),

    
    speciality: Yup.string().required('Speciality is required'),
});

export const AppinionRequestSchema = Yup.object().shape({
  problem: Yup.string().required('Please specify the problem'),
  problemTime: Yup.string().required('Please specify how long the problem has been going for'),
  associatedSyptoms: Yup.string().required('Please specify associated symptoms'),
  testResults: Yup.string().required('Please specify test results'),
  goingOn: Yup.string().required('Please tell what you think is going on'),
  concerns: Yup.string().required('Please specify your concerns'),
  query: Yup.string().required('Please specify your query for specialist'),
  attachments: Yup.array().optional()
});