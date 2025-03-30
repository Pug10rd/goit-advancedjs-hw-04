import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

async function getImages({ query, page = 1, perPage = 10 }) {
  const res = await axios.get('/', {
    params: {
      key: '34066974-b9ed0af14756539ad49c5eed8',
      q: query,
      page,
      per_page: perPage,
    },
  });

  return res.data;
}

export { getImages };
