import React from 'react';

export interface CustomHeaderProps {
  navigation: any; // You may want to replace 'any' with a more specific type if possible
  title: string;
  children?: React.ReactNode; // Add children prop
}
