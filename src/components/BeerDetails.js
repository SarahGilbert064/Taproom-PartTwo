import React from "react";
import PropTypes from "prop-types";


function BeerDetails(props) {
  const { beer, onClickingDelete, onClickingBuy } = props;
  const myStyledBeerDetails = {
    backgroundColor: '#D27810',
    border: '12px black',
    padding: '34px',
    borderStyle:'groove',
    borderRadius: '30%/ 100%',
    float: 'left'
  }
  return(
    <React.Fragment>
      <div style={myStyledBeerDetails}>
        <h1>Beer Details:</h1>
        <h3>Name: {beer.name}</h3>
        <h3>Brand: {beer.brand}</h3>
        <h4>Price: {beer.price}</h4>
        <h4>Pints Remaining: {beer.pints}</h4>
        <h4>ABV: {beer.alcoholContent}</h4>
        <p>{beer.outOfStock}</p>
        <button onClick = {() => onClickingDelete(beer.id) }>Discontinue Beer</button>
        <br/><br/>
        <button onClick = {() => onClickingBuy() }>Buy a Pint</button>
      </div>
    </React.Fragment>
  );
}

BeerDetails.propTypes = {
  beer: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingBuy: PropTypes.func
}

export default BeerDetails;