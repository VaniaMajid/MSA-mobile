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
      return 'Password must be at least 6 characters';
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
    }
    return '';
  };
  