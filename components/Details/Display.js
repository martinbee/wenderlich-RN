import React from 'react';
import { startCase } from 'lodash';

import {
  StyleSheet,
  ScrollView,
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
    <Text style={styles.title} numberOfLines={2}>
      {title}
    </Text>
  );

  const renderCoreInfo = () => {
    const coreItems = [
      {
        key: 'Price',
        value: price,
      },
      {
        key: 'Bedrooms',
        value: bedroom_number,
      },
      {
        key: 'Property Type',
        value: startCase(property_type),
      },
      {
        key: 'Lister',
        value: lister_name,
      },
      {
        key: 'Tags',
        value: keywords,
      },
    ];

    const renderCoreItems = () => coreItems.map(({ key, value }) => (
      <View key={key} style={styles.coreItem}>
        <Text style={styles.coreItemKey}>{key}: </Text>
        <Text numberOfLines={2}>{value}</Text>
      </View>
    ));

    return (
      <View style={styles.coreContainer}>
        {renderCoreItems()}
      </View>
    );
  };

  const renderSummary = () => (
    <Text numberOfLines={2}>
      {summary}
    </Text>
  );

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: img_url }} />
      {renderTitle()}
      <View style={styles.textContainer}>
        {renderSummary()}
        {renderCoreInfo()}
      </View>
    </ScrollView>
  );
};

export default DetailsDisplay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  coreContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  coreItem: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  coreItemKey: {
    fontWeight: 'bold',
  },
});
