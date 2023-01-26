import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import api from '../api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.searchText;
    const nextName = this.props.searchText;

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });
      api
        .fetchImg(nextName)
        .then(images => this.setState({ images, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }
  render() {
    const { images, status } = this.state;

    if (status === 'idle') {
      return <h1> Пошук</h1>;
    }
    if (status === 'rejected') {
      return <h1> відхилено</h1>;
    }
    if (status === 'pending') {
      return <h1> Попередній запит</h1>;
    }
    if (status === 'resolved') {
      return <ImageGalleryItem images={images.hits} />;
    }
  }
}
