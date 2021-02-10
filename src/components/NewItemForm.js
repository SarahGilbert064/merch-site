import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewItemForm(props) {

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({itemName: event.target.itemName.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='itemName'
          placeholder='Item name' />
        <br /><br />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' />
          <br /><br />
        <textarea
          name='description'
          placeholder='Item description' />
          <br /><br />
        <button type='submit'>Add Item</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;