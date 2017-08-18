import React from 'react';
import { StackNavigator } from 'react-navigation';

import SearchPage from '../SearchPage';
import SearchResults from '../SearchResults';
import Details from '../Details';

const PropertyFinder = StackNavigator({
  Home: {
    screen: SearchPage,
  },
  Results: {
    screen: SearchResults,
  },
  Details :{
    screen: Details,
  },
});

export default PropertyFinder;
