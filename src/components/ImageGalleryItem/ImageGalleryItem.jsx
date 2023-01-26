export const ImageGalleryItem = ({ images }) => {
  return (
    <ul>
      {images.map(({ webformatURL, id }) => (
        <li key={id}>
          <img src={webformatURL} alt={id} />
        </li>
      ))}
    </ul>
  );
};
