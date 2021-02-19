import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerList from './BeerList';
import BeerDetails from './BeerDetails';

class StoreControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterBeerList: [],
      selectedBeer: null
    };
  }

  handleAddingNewBeerToList = (newBeer) => {
    const newMasterBeerList = this.state.masterBeerList.concat(newBeer);
    this.setState({
      masterBeerList: newMasterBeerList,
      formVisibleOnPage: false
    });
  }

  handleClick = () => {
    if (this.state.selectedBeer != null) {
      this.setState ({
        formVisibleOnPage: false,
        selectedBeer: null
      });
    } else {
      this.setState (prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage  // a , might go here
      }));
    }  
  }

  handleChangingSelectedBeer = (id) => {
    const selectedBeer = this.state.masterBeerList.filter(beer => beer.id === id)[0];
    this.setState({
      selectedBeer: selectedBeer
    });
  }

  handleDeletingBeer = (id) => {
    const newMasterBeerList = this.state.masterBeerList.filter(beer => beer.id !== id);
    this.setState ({
      masterBeerList: newMasterBeerList,
      selectedBeer: null
    });
  }

  handleBuyingBeer = () => {
    const selectedBeer = this.state.selectedBeer;
    if (selectedBeer.pints <= 124 && selectedBeer.pints > 0) {
      const newQuantity = Object.assign({}, selectedBeer, {pints: selectedBeer.pints - 1});
      const newBeerList = this.state.masterBeerList
        .filter(beer => beer.id !== this.state.selectedBeer.id)
        .concat(newQuantity);
      this.setState({
        masterBeerList: newBeerList,
        selectedBeer: newQuantity
      });  
    } else {
      const newQuantity = Object.assign({}, selectedBeer, {outOfStock: selectedBeer.outOfStock = "You are out of beer!"});
      const newBeerList = this.state.masterBeerList
        .filter(beer => beer.id !== this.state.selectedBeer.id)
        .concat(newQuantity);
      this.setState({
        masterBeerList: newBeerList,
        selectedBeer: newQuantity
      });
    }
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.selectedBeer != null) {
      currentlyVisibleState =
      <BeerDetails
      beer = {this.state.selectedBeer}
      onClickingDelete = {this.handleDeletingBeer}
      onClickingBuy = {this.handleBuyingBeer}
      />;
      buttonText = "Return to Beer List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState =
      <NewBeerForm
      onNewBeerCreation = {this.handleAddingNewBeerToList}
      />;
      buttonText = "Return to Beer List";
    } else {
      currentlyVisibleState =
      <BeerList
      beerList = {this.state.masterBeerList}
      onBeerSelection = {this.handleChangingSelectedBeer}
      />;
      buttonText = "Add Beer";
    }

    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default StoreControl;


