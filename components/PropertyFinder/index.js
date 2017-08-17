import React from 'react';
import { StackNavigator } from 'react-navigation';

import SearchPage from '../SearchPage';

const PropertyFinder = StackNavigator({
  Home: {
    screen: SearchPage,
  }
});

export default PropertyFinder;
