import React from 'react';
import {
  TouchableHighlight,
  View,
  Image,
  Text,
} from 'react-native';

import styles from './styles';

const ListItem = ({ onPressItem, index, item }) => {
  const onPress = () => onPressItem(item);

  const { price_formatted, img_url, title } = item;
  const price = price_formatted.split(' ')[0];

  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor='#dddddd'
    >
      <View>
        <View style={styles.rowContainer}>
          <Image style={styles.thumb} source={{ uri: img_url }} />
          <View style={styles.textContainer}>
            <Text style={styles.price}>
              {price}
            </Text>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
          </View>
        </View>
        <View style={styles.separator}/>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
