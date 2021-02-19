import React from 'react';
import PropTypes from "prop-types";

function ReusableForm(props) {
  const myStyleReusableForm = {
    backgroundColor: '#D27810',
    border: '12px black',
    padding: '34px',
    borderStyle:'groove',
    borderRadius: '50%/100%',
    float: 'left',
    position: 'absolute',
    bottom: '0',
    height: '35%',
    width: '35%',
    margin: '100px'
  }

  return (
    <React.Fragment>
      <div style={myStyleReusableForm}>
        <br></br>
        <br></br>
        <br></br>
        <form onSubmit = {props.formSubmissionHandler}>
          <input
            type='text'
            name= 'name'
            placeholder= 'Name of Beer'/>
            <br/>
          <input
            type='text'
            name='brand'
            placeholder= 'Brand of Beer'/>
            <br/>
          <input
            type="text"
            name="price"
            placeholder= "Price of Beer"/>
            <br/>
          <input
            type='number'
            name='pints'
            placeholder= 'Pints Left in Keg(124/full)'/>
            <br/>
          <input
            type='text'
            name="alcoholContent"
            placeholder="ABV"/>
            <br/><br/>
          <button type='submit'>Add Beer To List</button>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;
