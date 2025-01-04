import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PreAuthNavigator} from './PreAuthNavigator';
import {AuthNavigator} from './AuthNavigator';
import useAccountStore from '~Configs/accountStore';

export const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { buyer } = useAccountStore(); // Access buyer data from the store
  const userRole = 'seller';

  useEffect(() => {
    // Check if buyer data exists, if so, set authenticated to true
    if (buyer) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [buyer]);

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