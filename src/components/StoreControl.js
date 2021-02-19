import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerList from './BeerList';
import BeerDetails from './BeerDetails';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class StoreControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedBeer: null
    };
  }

  handleAddingNewBeerToList = (newBeer) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcoholContent, pints } = newBeer;
    const action = {
      type: 'ADD_BEER',
      id,
      name,
      brand,
      price,
      alcoholContent,
      pints
    }
    dispatch(action);
    this.setState({formVisibleOnPage: false});
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
    const selectedBeer = this.props.masterBeerList[id];
    this.setState({
      selectedBeer: selectedBeer
    });
  }

  handleDeletingBeer = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_BEER',
      id: id
    }
    dispatch(action);
    this.setState({selectedTickt: null});
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
      beerList = {this.props.masterBeerList}
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

StoreControl.propTypes = {
  masterBeerList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterBeerList: state
  }
}

StoreControl = connect(mapStateToProps)(StoreControl);

export default StoreControl;


