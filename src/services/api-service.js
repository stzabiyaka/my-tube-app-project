import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const { REACT_APP_RAPID_API_KEY } = process.env;

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

const fetchVideos = async url => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

export { fetchVideos };
