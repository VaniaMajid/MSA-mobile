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

// password validations

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

// registration form validations

export const validateFirstName = (value: string): string => 
  value.trim() === '' ? 'First name is required' : '';

export const validateLastName = (value: string): string => 
  value.trim() === '' ? 'Last name is required' : '';

export const validatePostCode = (value: string): string => 
  value.trim() === '' ? 'Post code is required' : '';

export const validateMobileNumber = (value: string): string => {
  const trimmedValue = value.trim();
  if (trimmedValue === '') return 'Mobile number is required';
  else if (!/^\d{11}$/.test(value)) return 'Invalid mobile number';
  return '';
};

export const validateGender = (value: string): string => 
  value === '' ? 'Gender is required' : '';

export const validateAllergy = (value: string, isToggleOn: boolean): string => 
  !isToggleOn && value.trim() === '' ? 'Please specify allergy' : '';

export const validateMedicalHistory = (value: string): string => 
  value.trim() === '' ? 'Medical history is required' : '';

export const validateBMI = (bmi: number | null): string => 
  bmi === null || bmi <= 0 ? 'Invalid BMI. Please enter valid height and weight values' : '';


export const validateDateOfBirth = (day: string, month: string, year: string): { dateOfBirth?: string } => {
  const errors: { dateOfBirth?: string } = {};

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
    errors.dateOfBirth = 'Invalid birth year';
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
