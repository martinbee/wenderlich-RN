import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';

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

const styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    alignItems: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    color: '#48BBEC',
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
  },
  image: {
    marginTop: 10,
    width: 217,
    height: 138,
  },
  spinner: {
    marginTop: 10,
  },
  error: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
  }
});

export default SearchPageDisplay;
