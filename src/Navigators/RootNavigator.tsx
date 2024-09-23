import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PreAuthNavigator} from './PreAuthNavigator';
import {AuthNavigator} from './AuthNavigator';

export const RootNavigator = ({}) => {
  const isAuthenticated = true;
  const userRole = 'patient';

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AuthNavigator userRole={userRole} />
      ) : (
        <PreAuthNavigator />
      )}
    </NavigationContainer>
  );
};
