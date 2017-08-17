import React, { Component } from 'react';

import Display from './Display';

export default class SearchResults extends Component {
  state = {
    listings: [],
  };

  componentDidMount() {
    const { listings } = this.props.navigation.state.params;

    this.setState({ listings });
  }

  render() {
    return <Display listings={this.state.listings} />;
  }
};
