import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  rememberMe: Yup.boolean(),
});

export const signupSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),

  phoneNumber: Yup.string()
    .matches(/^(?:\+92|0)?3[0-9]{2}-?[0-9]{7}$/, 'Invalid Pakistani phone number')
    .required('Phone number is required'),

  cnic: Yup.string()
    .matches(/^\d{5}-\d{7}-\d{1}$/, 'Invalid CNIC format (XXXXX-XXXXXXX-X)')
    .required('CNIC is required'),

  address: Yup.string()
    .min(10, 'Address must be at least 10 characters')
    .required('Address is required'),

  city: Yup.string()
    .required('City is required'),
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
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
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
  problemTime: Yup.string().required(
    'Please specify how long the problem has been going for',
  ),
  associatedSyptoms: Yup.string().required(
    'Please specify associated symptoms',
  ),
  testResults: Yup.string().required('Please specify test results'),
  goingOn: Yup.string().required('Please tell what you think is going on'),
  concerns: Yup.string().required('Please specify your concerns'),
  query: Yup.string().required('Please specify your query for specialist'),
  attachments: Yup.array().optional(),
});

import * as yup from 'yup';

export const AddMedicalInfoSchema = yup.object().shape({
  medicalInfoType: yup.string().required('Medical Info Type is required'),

  // Type medications
  medicationName: yup
    .string()
    .when('medicalInfoType', (medicalInfoType, schema) => {
      if (medicalInfoType.toString() === 'Medications') {
        return schema.required('Medication name is required');
      } else {
        return schema.notRequired();
      }
    }),
  dosage: yup.string().when('medicalInfoType', (medicalInfoType, schema) => {
    if (medicalInfoType.toString() === 'Medications') {
      return schema.required('Dosage is required');
    } else {
      return schema.notRequired();
    }
  }),
  frequency: yup.string().when('medicalInfoType', (medicalInfoType, schema) => {
    if (medicalInfoType.toString() === 'Medications') {
      return schema.required('Frequency is required');
    } else {
      return schema.notRequired();
    }
  }),
  notesMedication: yup.string().when('medicalInfoType', (medicalInfoType, schema) => {
    if (
      medicalInfoType.toString() === ('Medications')
    ) {
      return schema.required('Notes are required');
    } else {
      return schema.notRequired();
    }
  }),

  // Type medical conditions
  conditionName: yup
    .string()
    .when('medicalInfoType', (medicalInfoType, schema) => {
      if (medicalInfoType.toString() === 'Medical Conditions') {
        return schema.required('Condition name is required');
      } else {
        return schema.notRequired();
      }
    }),
  diagnosisDate: yup
    .string()
    .when('medicalInfoType', (medicalInfoType, schema) => {
      if (medicalInfoType.toString() === 'Medical Conditions') {
        return schema.required('Diagnosis date is required');
      } else {
        return schema.notRequired();
      }
    }),
    notesCondition: yup.string().when('medicalInfoType', (medicalInfoType, schema) => {
      if (
        medicalInfoType.toString() === ('Medical Conditions')
      ) {
        return schema.required('Notes are required');
      } else {
        return schema.notRequired();
      }
    }),

  // Type surgical procedures
  procedureName: yup
    .string()
    .when('medicalInfoType', (medicalInfoType, schema) => {
      if (medicalInfoType.toString() === 'Surgical Procedures') {
        return schema.required('Procedure name is required');
      } else {
        return schema.notRequired();
      }
    }),
  surgeryDate: yup
    .string()
    .when('medicalInfoType', (medicalInfoType, schema) => {
      if (medicalInfoType.toString() === 'Surgical Procedures') {
        return schema.required('Surgery date is required');
      } else {
        return schema.notRequired();
      }
    }),
  surgeon: yup.string().when('medicalInfoType', (medicalInfoType, schema) => {
    if (medicalInfoType.toString() === 'Surgical Procedures') {
      return schema.required('Surgeon is required');
    } else {
      return schema.notRequired();
    }
  }),
  reason: yup.string().when('medicalInfoType', (medicalInfoType, schema) => {
    if (medicalInfoType.toString() === 'Surgical Procedures') {
      return schema.required('Reason for surgery is required');
    } else {
      return schema.notRequired();
    }
  }),

  // Type Allergies
  allergy: yup.string().when('medicalInfoType', (medicalInfoType, schema) => {
    if (medicalInfoType.toString() === 'Allergies') {
      return schema.required('Allergy is required');
    } else {
      return schema.notRequired();
    }
  }),
  reaction: yup.string().when('medicalInfoType', (medicalInfoType, schema) => {
    if (medicalInfoType.toString() === 'Allergies') {
      return schema.required('Reaction is required');
    } else {
      return schema.notRequired();
    }
  }),
  severity: yup.string().when('medicalInfoType', (medicalInfoType, schema) => {
    if (medicalInfoType.toString() === 'Allergies') {
      return schema.required('Severity is required');
    } else {
      return schema.notRequired();
    }
  }),
  notesAllergy: yup.string().when('medicalInfoType', (medicalInfoType, schema) => {
    if (
      medicalInfoType.toString() === ('Allergies')
    ) {
      return schema.required('Notes are required');
    } else {
      return schema.notRequired();
    }
  }),  
});


export const AddProductsSchema = Yup.object().shape({
  images: Yup.array()
    .of(Yup.string().url('Must be a valid URL')) // Validate each image URL
    .min(5, 'At least 5 images are required.')
    .required('Images are required.'),
  nameEn: Yup.string()
    .required('Product name in English is required.'),
  nameUr: Yup.string()
    .required('Product name in Urdu is required.'),
  category: Yup.string()
    .required('Category is required.'),
  range1: Yup.string()
    .required('Range 1 is required.'),
  price1: Yup.number()
    .required('Price 1 is required.')
    .positive('Price must be a positive number.')
    .typeError('Price must be a number.'),
  range2: Yup.string().optional(),
  price2: Yup.number()
    .positive('Price must be a positive number.')
    .typeError('Price must be a number.')
    .optional(),
  range3: Yup.string().optional(),
  price3: Yup.number()
    .positive('Price must be a positive number.')
    .typeError('Price must be a number.')
    .optional(),
  packageWeight: Yup.number()
    .required('Package weight is required.')
    .positive('Weight must be a positive number.')
    .typeError('Weight must be a number.'),
  packageLength: Yup.number()
    .required('Package length is required.')
    .positive('Length must be a positive number.')
    .typeError('Length must be a number.'),
  packageWidth: Yup.number()
    .required('Package width is required.')
    .positive('Width must be a positive number.')
    .typeError('Width must be a number.'),
  packageHeight: Yup.number()
    .required('Package height is required.')
    .positive('Height must be a positive number.')
    .typeError('Height must be a number.'),
  isFragile: Yup.boolean().optional(), // Optional checkbox for fragile goods
});
