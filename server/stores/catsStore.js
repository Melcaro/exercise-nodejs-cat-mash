const axios = require('axios');
const cats = require('./../data/cats.json');

const catsList = cats.images.map(
  cat => (cat = { url: cat.url, id: cat.id, score: 0 })
);

const getCats = () => {
  try {
    return catsList;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getCats };
