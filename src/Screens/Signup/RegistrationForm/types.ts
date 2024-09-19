export type PatientRegistrationFormType = {
  firstName: string;
  lastName: string;
  postCode: string;
  mobileNumber: string;
  gender: string;
  allergy?: string;
  medicalHistory: string;
  dateOfBirth: Date;
  bmi: number;
  isToggleOn: boolean;
};
