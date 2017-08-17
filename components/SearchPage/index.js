import React, { Component } from 'react';
import { Keyboard } from 'react-native';

import urlForQueryAndPage from './utilities/urlForQueryAndPage.js';
import Display from './Display';
import houseImg from '../../resources/house.png';

export default class SearchPage extends Component {
  static navigationOptions = {
    title: 'Property Finder',
  };

  state = {
    searchValue: '',
    isLoading: false,
    searchStatusMessage: '',
  };

  handleResponse({ listings }) {
    this.setState({ isLoading: false });

    if (listings && listings.length) {
      this.props.navigation.navigate('Results', { listings });
    } else {
      this.setState({ searchStatusMessage: 'Location not recognized, please try again.'});
    }
  }

  executeQuery(query) {
    this.setState({ isLoading: true, searchStatusMessage: '' });

    fetch(query)
      .then(response => response.json())
      .then(json => this.handleResponse(json.response))
      .catch((error) => {
         this.setState({
          isLoading: false,
          searchStatusMessage: `Something bad happened ${error}`,
         });
      });
  }

  search = () => {
    Keyboard.dismiss();

    const { searchValue } = this.state;

    if (!searchValue) {
      return this.setState({ searchStatusMessage: 'Please add a name or postcode.' });
    }

    const query = urlForQueryAndPage('place_name', searchValue, 1);

    this.executeQuery(query);
  };

  updateSearch = text => this.setState({ searchValue: text });

  render() {
    const { searchValue, isLoading, searchStatusMessage } = this.state;

    return (
      <Display
        imgSrc={houseImg}
        updateSearch={this.updateSearch}
        searchValue={searchValue}
        search={this.search}
        isLoading={isLoading}
        searchStatusMessage={searchStatusMessage}
      />
    );
  }
}
