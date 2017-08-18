import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

import styles from './styles';

const SearchPageDisplay = ({
  imgSrc,
  updateSearch,
  searchValue,
  search,
  isLoading,
  searchStatusMessage,
}) => {
  const renderHeaders = () => (
    <View>
      <Text style={styles.description}>
        Search for houses to buy!
      </Text>
      <Text style={styles.description}>
        Search by place-name or postcode.
      </Text>
    </View>
  );

  const renderInput = () => (
    <View style={styles.flowRight}>
      <TextInput
        style={styles.searchInput}
        placeholder='Search via name or postcode'
        onChangeText={updateSearch}
        value={searchValue}
        returnKeyType="search"
        onSubmitEditing={search}
      />
    </View>
  );

  const renderImage = () => (
    <Image source={imgSrc} style={styles.image}/>
  );

  const renderSpinner = () => <ActivityIndicator size='large' style={styles.spinner} />;

  const renderStatusMessage = () => (
    <Text style={styles.error}>
      {searchStatusMessage}
    </Text>
  );

  return (
    <View style={styles.container}>
      {renderHeaders()}
      {renderInput()}
      {renderImage()}
      {isLoading && renderSpinner()}
      {renderStatusMessage()}
    </View>
  );
};

export default SearchPageDisplay;
