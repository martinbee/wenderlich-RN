import React, { Component } from 'react';

import Display from './Display';

export default class SearchResults extends Component {
  state = {
    listings: [],
  };

  componentWillMount() {
    const { listings } = this.props.navigation.state.params;

    this.setState({ listings });
  }

  render() {
    return <Display listings={this.state.listings} />;
  }
};
