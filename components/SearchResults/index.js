import React from 'react';

import Display from './Display';

const SearchResults = ({ navigation }) => {
  const { state, navigate } = navigation;

  const { listings } = state.params;
  const onPressItem = item => navigate('Details', { item });

  return <Display listings={listings} onPressItem={onPressItem} />;
};

export default SearchResults;
