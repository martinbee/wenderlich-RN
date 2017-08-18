import React from 'react';
import { startCase } from 'lodash';

import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

const DetailsDisplay = ({
  title,
  img_url,
  keywords,
  price_formatted,
  bedroom_number,
  property_type,
  summary,
  lister_name,
  lister_url,
}) => {
  const price = price_formatted.split(' ')[0];

  const renderTitle = () => (
    <View style={styles.titleContainer}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
    </View>
  );

  const renderCoreInfo = () => (
    <Text>
      Price: {price}
    </Text>
    <Text>
      Bedrooms: {bedroom_number}
    </Text>
    <Text>
      Property Type: {startCase(property_type)}
    </Text>
  );

  const renderSummary = () => (
    <Text style={styles.summary} numberOfLines={3}>
      {summary}
    </Text>
  );

  const renderLister = () => (
    <Text>
      Lister: {lister_name}
    </Text>
  );

  const renderKeywords = () => (
    <Text>Tags: {keywords}</Text>
  );

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: img_url }} />
      {renderTitle()}
      <View style={styles.textContainer}>
        {renderSummary()}
        {renderCoreInfo()}
        {renderLister()}
        {renderKeywords()}
      </View>
    </View>
  );
};

export default DetailsDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#656565',
    padding: 10,
  },
  image: {
    width: 400,
    height: 300,
  },
  textContainer: {
    padding: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC'
  },
});
