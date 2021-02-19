import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';

function BeerList(props) {
  
  return(
    <React.Fragment>
      <br></br>
      {props.beerList.map((beer) =>
        <Beer
          whenBeerClicked = {props.onBeerSelection}
          name={beer.name}
          brand={beer.brand}
          price={beer.price}
          alcoholContent={beer.alcoholContent}
          pints={beer.pints}
          id={beer.id}
          key={beer.id}
        />
      )}
    </React.Fragment>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onBeerSelection: PropTypes.func
};

export default BeerList;
