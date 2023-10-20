import React, { FC, ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';

const NavigationWrapper: FC<{ children: ReactElement }> = ({ children }) => {
    return <NavigationContainer>{children}</NavigationContainer>;
};

export default NavigationWrapper;
