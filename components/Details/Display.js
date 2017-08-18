import React from 'react';
import { startCase } from 'lodash';
import {
  ScrollView,
  View,
  Image,
  Linking,
  Text,
  Button,
} from 'react-native';

import styles from './styles';

const DetailsDisplay = ({
  title,
  img_url,
  keywords,
  price_formatted,
  bedroom_number,
  property_type,
  summary,
  lister_url,
}) => {
  const price = price_formatted.split(' ')[0];

  const renderTitle = () => (
    <Text style={styles.title} numberOfLines={2}>
      {title}
    </Text>
  );

  const renderSummary = () => (
    <Text numberOfLines={2}>
      {summary}
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
        key: 'Tags',
        value: keywords,
      },
    ];

    const renderCoreItems = () => coreItems.map(({ key, value }) => {
      if (!value) return null;

      return (
        <View key={key} style={styles.coreItem}>
          <Text style={styles.coreItemKey}>{key}: </Text>
          <Text style={styles.coreItemValue} numberOfLines={2}>{value}</Text>
        </View>
      );
    });

    return (
      <View style={styles.coreContainer}>
        {renderCoreItems()}
      </View>
    );
  };

  const renderLink = () => (
    <Button
      onPress={() => Linking.openURL(lister_url)}
      title="Go To Listing"
      style={styles.button}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: img_url }} />
      {renderTitle()}
      <View style={styles.textContainer}>
        {renderSummary()}
        {renderCoreInfo()}
      </View>
      {renderLink()}
    </ScrollView>
  );
};

export default DetailsDisplay;
