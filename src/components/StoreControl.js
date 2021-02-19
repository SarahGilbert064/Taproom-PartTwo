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
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleClick = () => {
    if (this.state.selectedBeer != null) {
      this.setState ({
        selectedBeer: null
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
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
    this.setState({selectedBeer: null});
  }

  handleBuyingBeer = () => {
    const selectedBeer = this.state.selectedBeer;
    if (selectedBeer.pints <= 124 && selectedBeer.pints > 0) {
      const newQuantity = Object.assign({}, selectedBeer, {pints: selectedBeer.pints - 1});
      this.handleAddingNewBeerToList(newQuantity)
      this.setState({
        selectedBeer: newQuantity
      });  
    } else {
      const newQuantity = Object.assign({}, selectedBeer, {outOfStock: selectedBeer.outOfStock = "You are out of beer!"});
      this.handleAddingNewBeerToList(newQuantity)
      this.setState({
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
    } else if (this.props.formVisibleOnPage) {
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
  masterBeerList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterBeerList: state.masterBeerList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

StoreControl = connect(mapStateToProps)(StoreControl);

export default StoreControl;


