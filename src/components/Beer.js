import React from 'react';
import PropTypes from "prop-types";


function Beer(props) {
  const myStyledBeer = {
    backgroundColor: '#D27810',
    border: '12px black',
    padding: '34px',
    borderStyle:'groove',
    borderRadius: '30%/ 100%',
    float: 'right',
    width: '35%',
    heigth: '100%',
    margin: '10px'
  }

  return(
    <React.Fragment>
      <div style={myStyledBeer}>
        <div onClick = {() => props.whenBeerClicked(props.id)}>
          <h3>{props.brand} Presents:</h3>
          <h3>{props.name}</h3>
          <h3>Pints Remaining: {props.pints}</h3>
          <h4> Cost per Pint: {props.price} </h4>
          <h4>ABV: {props.alcoholContent}</h4>
        </div>
      </div>
    </React.Fragment>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string, 
  price: PropTypes.string,
  pints: PropTypes.number,
  outOfStock: PropTypes.string,
  alcoholContent: PropTypes.string,
  id: PropTypes.string,
  whenBeerClicked: PropTypes.func
}

export default Beer;
