import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

class App extends React.Component {
  state = {
    searchText: '',
  };

  handleFormSubmit = searchText => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchText={this.state.searchText} />
      </div>
    );
  }
}

export default App;
