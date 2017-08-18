import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  View,
  Image,
  Text,
} from 'react-native';

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

const styles = StyleSheet.create({
  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },
  textContainer: {
    flex: 1
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
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },
});

export default ListItem;
