import React from 'react';

//import Display from './Display';
import { Text } from 'react-native';

const Details = ({ navigation }) => {
  const { item } = navigation.state.params;

  console.log(item);
  return <Text>{item.title}</Text>
  //return <Display {...item} />;
};

export default Details;
