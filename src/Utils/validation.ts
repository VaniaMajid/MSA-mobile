export const validateEmail = (email: string): string => {
  if (!email) {
    return 'Email is required';
  } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
    return 'Invalid email format';
  }
  return '';
};

export const validatePassword = (password: string): string => {
  if (!password) {
    return 'Password is required';
  } else if (password.length < 8) {
    return 'Password must be at least 8 characters';
  }
  return '';
};

export const validateNewPassword = (password: string): string => {
  if (!password) {
    return 'Password is required';
  } else if (password.length < 8) {
    return 'Password must be at least 8 characters';
  } else if (!/[a-z]/.test(password)) {
    return 'Password must contain at least one lowercase letter';
  } else if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter';
  } else if (!/[0-9]/.test(password)) {
    return 'Password must contain at least one number';
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return 'Password must contain at least one special character';
  }
  return '';
};

export const validateConfirmPassword = (
  confirmPassword: string,
  password: string,
): string => {
  if (!confirmPassword) {
    return 'Confirm Password is required';
  } else if (confirmPassword !== password) {
    return 'Passwords do not match';
  }
  return '';
};

export const validateTermsAgreement = (isTermsChecked: boolean): string => {
  if (!isTermsChecked) {
    return 'You must agree to the terms and conditions.';
  }
  return '';
};

interface ValidationErrors {
  [key: string]: string;
}

export const validateRegistrationForm = (
  firstName: string,
  lastName: string,
  postCode: string,
  mobileNumber: string,
  gender: string,
  allergy: string,
  medicalHistory: string,
  isToggleOn: boolean,
  bmi: number | null,
): ValidationErrors => {
  const errors: ValidationErrors = {};
  
  if (!firstName.trim()) errors.firstName = 'First name is required';
  
  if (!lastName.trim()) errors.lastName = 'Last name is required';

  if (!postCode.trim()) errors.postCode = 'Post code is required';
  
  if (!mobileNumber.trim()) {
    errors.mobileNumber = 'Mobile number is required';
  } else if (!/^\d{10}$/.test(mobileNumber)) {
    errors.mobileNumber = 'Invalid mobile number';
  }
  
  if (!gender.trim()) errors.gender = 'Gender is required';

  if (!isToggleOn && !allergy.trim()) {
    errors.allergy = 'Please specify allergy';
  }

  if (!medicalHistory.trim()) errors.medicalHistory = 'Medical history is required';

  if (!bmi || bmi <= 0) {
    errors.bmi = 'Invalid BMI. Please enter valid height and weight values';
  }


  return errors;
};


export const validateDateOfBirth = (day: string, month: string, year: string) => {
  const errors: { [key: string]: string } = {};

  if (!day || !month || !year) {
    errors.dateOfBirth = 'Date of Birth is required.';
    return errors;
  }

  const dayNumber = parseInt(day, 10);
  const monthNumber = parseInt(month, 10);
  const yearNumber = parseInt(year, 10);

  if (isNaN(dayNumber) || isNaN(monthNumber) || isNaN(yearNumber)) {
    errors.dateOfBirth = 'Invalid date format.';
    return errors;
  }

  if (monthNumber < 1 || monthNumber > 12) {
    errors.dateOfBirth = 'Month must be between 01 and 12.';
    return errors;
  }

  const daysInMonth = new Date(yearNumber, monthNumber, 0).getDate();
  if (dayNumber < 1 || dayNumber > daysInMonth) {
    errors.dateOfBirth = `Day must be between 01 and ${daysInMonth}`;
    return errors;
  }

  const currentYear = new Date().getFullYear();
  if (yearNumber < 1900 || yearNumber > currentYear) {
    errors.dateOfBirth = `Invalid birth year`;
    return errors;
  }

  if (year.length !== 4) {
    errors.dateOfBirth = 'Year must be a four-digit number';
    return errors;
  }

  const dob = new Date(yearNumber, monthNumber - 1, dayNumber);
  const today = new Date();

  if (dob > today) {
    errors.dateOfBirth = 'Invalid Date of Birth';
    return errors;
  }

  return errors;
};

