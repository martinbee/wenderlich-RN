import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
} from 'react-native';

import ListItem from './ListItem/index.js';

const SearchResultsDisplay = ({ listings, onPressItem }) => {
  if (!listings.length) return <ActivityIndicator size='large' />;

  const keyExtractor = (item, index) => index;

  const renderItem = ({ item, index }) => (
    <ListItem
      item={item}
      index={index}
      onPressItem={onPressItem}
    />
  );

  return (
    <FlatList
      data={listings}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default SearchResultsDisplay;
