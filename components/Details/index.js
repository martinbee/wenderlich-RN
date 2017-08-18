import React from 'react';

import Display from './Display';

const Details = ({ navigation }) => {
  const { item } = navigation.state.params;

  return <Display {...item} />;
};

export default Details;
