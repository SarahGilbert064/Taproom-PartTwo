import React from 'react';
import { v4 } from 'uuid';
import Proptypes from "prop-types";
import ReusableForm from './ReusableForm';


function NewBeerForm(props) {

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      pints: parseInt(event.target.pints.value),
      alcoholContent: event.target.alcoholContent.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler = {handleNewBeerFormSubmission}
      buttonText = "Add Beer"/>
    </React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: Proptypes.func
};

export default NewBeerForm;