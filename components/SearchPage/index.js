import React, { Component } from 'react';
import { Keyboard } from 'react-native';

import urlForQueryAndPage from './utilities/urlForQueryAndPage.js';
import Display from './Display';
import houseImg from '../../resources/house.png';

class SearchPage extends Component {
  static navigationOptions = {
    title: 'Property Finder',
  };

  state = {
    searchValue: '',
    isLoading: false,
    searchStatusMessage: '',
  };

  handleResponse(response) {
    this.setState({ isLoading: false });

    if (response.listings && response.listings.length) {
      console.log('Properties found: ' + response.listings.length);
    } else {
      this.setState({ searchStatusMessage: 'Location not recognized, please try again.'});
    }
  }

  executeQuery(query) {
    this.setState({ isLoading: true, searchStatusMessage: '' });

    Keyboard.dismiss();

    fetch(query)
      .then(response => response.json())
      .then(json => this.handleResponse(json.response))
      .catch((error) => {
         console.log(error);
         this.setState({
          isLoading: false,
          searchStatusMessage: `Something bad happened ${error}`,
         });
      });
  }

  search = () => {
    const query = urlForQueryAndPage('place_name', this.state.searchValue, 1);

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

export default SearchPage;
