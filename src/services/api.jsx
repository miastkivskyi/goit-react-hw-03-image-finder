function fetchImg(text) {
  return fetch(
    `https://pixabay.com/api/?q=${text}&page=1&key=31896058-85566f2bc64dcb55d4cd975a7&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет картинки с именем ${text}`));
  });
}

const api = {
  fetchImg,
};

export default api;
