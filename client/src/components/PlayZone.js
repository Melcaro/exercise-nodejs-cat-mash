import React from 'react';

import { Scores } from './Scores';
import { getListOfCats, addPointsToCat } from './../services/services';

export class PlayZone extends React.Component {
  state = {
    listOfCats: [],
    firstCat: {},
    secondCat: {},
  };

  componentDidMount() {
    this.fetchCats();
  }

  fetchCats = async () => {
    const { data: listOfCats } = await getListOfCats();
    this.setState({ listOfCats }, this.getRandomCats);
  };

  getRandomCats = () => {
    this.setState({
      firstCat: this.state.listOfCats[
        Math.floor(Math.random() * this.state.listOfCats.length)
      ],
      secondCat: this.state.listOfCats[
        Math.floor(Math.random() * this.state.listOfCats.length)
      ],
    });
  };

  addPointsToSelectedCat = ({ target: { id } }) => {
    addPointsToCat(id);
    this.getRandomCats();
  };

  render() {
    const { url: firstCatURL, id: firstCatID } = this.state.firstCat;
    const { url: secondCatURL, id: secondCatID } = this.state.secondCat;
    return (
      <div>
        <h1>Choose your Cat </h1>
        <div
          onClick={this.addPointsToSelectedCat.bind(this, firstCatID, second)}
        >
          <img src={firstCatURL} id={firstCatID} alt="kiitteen" />
        </div>
        <div onClick={this.addPointsToSelectedCat}>
          <img src={secondCatURL} id={secondCatID} alt="kiitteen" />
        </div>
        <Scores listOfCats={this.state.listOfCats} />
        {/* <Link to="/Scores">Scores</Link> */}
      </div>
    );
  }
}
