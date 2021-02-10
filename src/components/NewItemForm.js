import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewItemForm(props) {

  function handleNewItemFormSubmission(event) {
    event.PreventDefault();
    props.onNewItemCreation({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Item name' />
        <br /><br />
        <textarea
          name='description'
          placeholder='Item description' />
         <br /><br />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' />
          <br /><br />
        <button type='submit'>Add Item</button><br /><br />
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;