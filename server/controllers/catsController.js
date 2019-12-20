const CatsStore = require('./../stores/catsStore');

const getTwoCatsPicture = async (req, res) => {
  try {
    const catsList = await CatsStore.getCats();
    res.send(catsList);
  } catch (exception) {
    res.status(500).send(exception);
  }
};

const addPointsToSelectedCat = async (req, res) => {
  try {
    const catId = req.params;
    const points = req.body;
    console.log('params', req.params);
    console.log('body', req.body);
    const catsList = await CatsStore.getCats();
    const chosenCat = catsList.find(cat => cat.id === id);
    chosenCat.score = chosenCat.score += 1;
    res.send(catsList);
  } catch (exception) {
    res.status(500).send(exception);
  }
};

module.exports = { getTwoCatsPicture, addPointsToSelectedCat };
