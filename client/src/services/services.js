import axios from 'axios';

export const getListOfCats = async () => {
  return await axios.get('/cats');
};

export const addPointsToCat = (catId, points) => {
  return axios.put('/cats/:catId', { points });
};
