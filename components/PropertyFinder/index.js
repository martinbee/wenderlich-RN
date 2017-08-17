import React from 'react';
import { StackNavigator } from 'react-navigation';

import SearchPage from '../SearchPage';
import SearchResults from '../SearchResults';

const PropertyFinder = StackNavigator({
  Home: {
    screen: SearchPage,
  },
  Results: {
    screen: SearchResults,
  }
});

export default PropertyFinder;
